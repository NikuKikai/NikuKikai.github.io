import React from 'react';

type MangaRadialBackdropProps = {
    cameraX: number;
    cameraY: number;
    viewportWidth: number;
    viewportHeight: number;
    gridSize?: number;
    centerX?: number;
    centerY?: number;
    whiteRadius?: number;
    fadeRadius?: number;
    maxDotScale?: number;
    ditherStrength?: number;
};

const VERTEX_SHADER = `#version 300 es

in vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_bufferResolution;
uniform vec2 u_camera;
uniform vec2 u_center;
uniform float u_gridSize;
uniform float u_whiteRadius;
uniform float u_fadeRadius;
uniform float u_maxDotScale;
uniform float u_ditherStrength;

out vec4 outColor;

float circleCoverage(vec2 cellPosition, float radius) {
    float distanceToCenter = length(cellPosition);
    return distanceToCenter <= radius ? 1.0 : 0.0;
}

float hashCell(vec2 cell) {
    vec2 p = fract(cell * vec2(0.1031, 0.1030));
    p += dot(p, p.yx + 33.33);
    return fract((p.x + p.y) * p.x);
}

void main() {
    vec2 screen = gl_FragCoord.xy / u_bufferResolution * u_resolution;
    vec2 world = vec2(
        u_camera.x + screen.x - u_resolution.x * 0.5,
        u_camera.y + (u_resolution.y - screen.y) - u_resolution.y * 0.5
    );

    vec2 grid = mod(world + u_gridSize * 0.5, u_gridSize) - u_gridSize * 0.5;
    float distanceFromCenter = length(world - u_center);
    float t = clamp((distanceFromCenter - u_whiteRadius) / u_fadeRadius, 0.0, 1.0);
    vec2 cell = floor(world / u_gridSize);
    float dither = (hashCell(cell) - 0.5) * 0.16 * u_ditherStrength;
    float coverage = clamp(t + dither, 0.0, 1.0);
    float radius = u_gridSize * 0.5 * u_maxDotScale * sqrt(coverage);
    float ink = circleCoverage(grid, radius);

    outColor = vec4(vec3(1.0 - ink), 1.0);
}
`;

function createShader(gl: WebGL2RenderingContext, type: number, source: string) {
    const shader = gl.createShader(type);
    if (!shader) {
        return null;
    }

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

function createProgram(gl: WebGL2RenderingContext) {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) {
        return null;
    }

    const program = gl.createProgram();
    if (!program) {
        return null;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.deleteProgram(program);
        return null;
    }

    return program;
}

export function MangaRadialBackdrop({
    cameraX,
    cameraY,
    viewportWidth,
    viewportHeight,
    gridSize = 12,
    centerX = 0,
    centerY = 0,
    whiteRadius = 120,
    fadeRadius = 700,
    maxDotScale = 1.3,
    ditherStrength = 1.,
}: MangaRadialBackdropProps) {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const glStateRef = React.useRef<{
        gl: WebGL2RenderingContext;
        program: WebGLProgram;
        resolutionLocation: WebGLUniformLocation | null;
        bufferResolutionLocation: WebGLUniformLocation | null;
        cameraLocation: WebGLUniformLocation | null;
        centerLocation: WebGLUniformLocation | null;
        gridSizeLocation: WebGLUniformLocation | null;
        whiteRadiusLocation: WebGLUniformLocation | null;
        fadeRadiusLocation: WebGLUniformLocation | null;
        maxDotScaleLocation: WebGLUniformLocation | null;
        ditherStrengthLocation: WebGLUniformLocation | null;
    } | null>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const gl = canvas.getContext('webgl2', {
            alpha: false,
            antialias: false,
            depth: false,
            preserveDrawingBuffer: true,
            stencil: false,
        });
        if (!gl) {
            return;
        }

        const program = createProgram(gl);
        if (!program) {
            return;
        }

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1,
            1, -1,
            -1, 1,
            -1, 1,
            1, -1,
            1, 1,
        ]), gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        gl.useProgram(program);
        glStateRef.current = {
            gl,
            program,
            resolutionLocation: gl.getUniformLocation(program, 'u_resolution'),
            bufferResolutionLocation: gl.getUniformLocation(program, 'u_bufferResolution'),
            cameraLocation: gl.getUniformLocation(program, 'u_camera'),
            centerLocation: gl.getUniformLocation(program, 'u_center'),
            gridSizeLocation: gl.getUniformLocation(program, 'u_gridSize'),
            whiteRadiusLocation: gl.getUniformLocation(program, 'u_whiteRadius'),
            fadeRadiusLocation: gl.getUniformLocation(program, 'u_fadeRadius'),
            maxDotScaleLocation: gl.getUniformLocation(program, 'u_maxDotScale'),
            ditherStrengthLocation: gl.getUniformLocation(program, 'u_ditherStrength'),
        };
    }, []);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const state = glStateRef.current;
        if (!canvas || !state || !viewportWidth || !viewportHeight) {
            return;
        }

        const dpr = window.devicePixelRatio || 1;
        const pixelWidth = Math.max(1, Math.round(viewportWidth * dpr));
        const pixelHeight = Math.max(1, Math.round(viewportHeight * dpr));

        if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
            canvas.width = pixelWidth;
            canvas.height = pixelHeight;
        }
        console.log('effect 2');

        state.gl.viewport(0, 0, pixelWidth, pixelHeight);
    }, [viewportHeight, viewportWidth]);

    React.useEffect(() => {
        const state = glStateRef.current;
        if (!state || !viewportWidth || !viewportHeight) {
            return;
        }
        console.log('effect 3');

        const { gl, program } = state;
        const dpr = window.devicePixelRatio || 1;
        const pixelWidth = Math.max(1, Math.round(viewportWidth * dpr));
        const pixelHeight = Math.max(1, Math.round(viewportHeight * dpr));
        gl.useProgram(program);
        gl.uniform2f(state.resolutionLocation, viewportWidth, viewportHeight);
        gl.uniform2f(state.bufferResolutionLocation, pixelWidth, pixelHeight);
        gl.uniform2f(state.cameraLocation, Math.round(cameraX), Math.round(cameraY));
        gl.uniform2f(state.centerLocation, centerX, centerY);
        gl.uniform1f(state.gridSizeLocation, gridSize);
        gl.uniform1f(state.whiteRadiusLocation, whiteRadius);
        gl.uniform1f(state.fadeRadiusLocation, fadeRadius);
        gl.uniform1f(state.maxDotScaleLocation, maxDotScale);
        gl.uniform1f(state.ditherStrengthLocation, ditherStrength);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }, [cameraX, cameraY, centerX, centerY, ditherStrength, fadeRadius, gridSize, maxDotScale, viewportHeight, viewportWidth, whiteRadius]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
}
