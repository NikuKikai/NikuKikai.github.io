
import {
    type Vector2,
} from './types';


export function DebugRepelArrow({ repel }: { repel: Vector2 }) {
    const length = Math.hypot(repel.x, repel.y);
    const angle = Math.atan2(repel.y, repel.x);
    const shaftLength = Math.max(12, Math.min(72, length * 18));

    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: 0,
                height: 0,
                pointerEvents: 'none',
                zIndex: 50,
            }}
        >
            <div
                style={{
                    position: 'relative',
                    width: 0,
                    height: 0,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: shaftLength,
                        transformOrigin: '0 50%',
                        transform: `rotate(${angle}rad)`,
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: -1,
                            width: shaftLength,
                            height: 2,
                            background: '#d11',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            right: -1,
                            top: -4,
                            width: 0,
                            height: 0,
                            borderTop: '5px solid transparent',
                            borderBottom: '5px solid transparent',
                            borderLeft: '8px solid #d11',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

