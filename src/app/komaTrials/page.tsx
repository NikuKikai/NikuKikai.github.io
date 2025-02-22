'use client';
import * as React from 'react';
import { CSSProperties } from "react";
import { useWindowSize } from "@react-hook/window-size";


type Data = { url: string, title: string, date: string, text: string }
const datas: Data[] = [
  {
    url: '/assets/komaTrials/190819_tossa.jpg',
    title: '咄嗟', date: '2019.08.19',
    text: '素材：デジタル\n\nキュービズムでは、同じ物体を複数視点からの形状を同じ紙面空間に繋ぎ合わせる。\n漫画でも複数コマで（基本は同時に）同じ物体の違う側面を描き出すことはあるが、同時に紙面空間上で物理空間を対応させる例はあんまり見当たらない。\n漫画でこの表現を採用することで２つの効果が生まれる：一、視線を回遊させる（少女漫画的な）漫画の絵画性を際立たせる。二、規則的な読み順を破壊することでコマ間の同時性を強調するーー「二人の世界がこの瞬間に止まる」という内容を表現する。'
  },
  {
    url: '/assets/komaTrials/190923_kure.jpg',
    title: '暮', date: '2019.09.23',
    text: '素材：デジタル\n\n八月の末に（多分）、松竹の京アニ特別上映会で聲の形をもう一度観ました。\n形式問わず、作品において最も「好き」な感情は罪悪感である。'
  },
  {
    url: '/assets/komaTrials/200223_worg.png',
    title: 'WORG', date: '2020.02.23',
    text: '素材：デジタル\n\nスカートのウェストと裾をコマとし、「逆」のパースを取る。\n若い頃ピッタリの両足、今やコマからはみ出る巨大な身体。\n「成長」と呼ぶべきか。'
  },
  {
    url: '/assets/komaTrials/201126_sin.jpg',
    title: 'SIN', date: '2020.11.26',
    text: '素材：紙 プロジェクタ 写真 装置\n\nそのカメラに向けられているのは誰？\n彼女？彼女？それとも、あなた？\nあ、あなたが彼女かもしれない\nあたなが彼女かもしれない。\n\n枠線は両義性によって同時に２つの空間を切り抜ける。さらにコマの重なりによって、空間と空間の重なりが多層的な隠喩関係を成す。'
  },
  {
    url: '/assets/komaTrials/210112_life.jpg',
    title: '生', date: '2021.01.12',
    text: '素材：紙\n\n世界を切り抜く\n「生」というコマ。\n\nコマは主観性を持つ視線である。キャラの輪郭にすることで、その主観性はキャラに付着する。'
  },
  {
    url: '/assets/komaTrials/210608_death.jpg',
    title: '死', date: '2021.06.08',
    text: '素材：紙 コラージュ\n\n流るるコマに流れぬ、死。\n\n背景の絵画的コマと、それを覆っていく上層の漫画的コマ序列。二種類の時間性を物理的に分離し、一種の対抗関係を描く。'
  },
  {
    url: '/assets/komaTrials/211017_triangle.jpg',
    title: '△', date: '2021.10.17',
    text: '素材：紙 デジタル（色）\n\nマンガのルールを忘れ、\n注意の往くままに、\nそして、マンガと絵画が一体になる。'
  },
  {
    url: '/assets/komaTrials/230607_C.png',
    title: 'C', date: '2023.06.07',
    text: '素材：デジタル\n\n漫画の構成要素に、実体はいらない。'
  },
  {
    url: '/assets/komaTrials/231121_baka.jpg',
    title: '自嘲', date: '2023.11.21',
    text: '素材：デジタル\n\n発話の主体と発話の客体と発話自体が同一に。'
  },
]


const styleGallery: CSSProperties = {
  height: '100vh',
  width: 'fit-content',
  position: 'relative',
  transformOrigin: 'top left',
  transition: 'transform 0.5s',
  color: '#111',
  backgroundColor: '#ddd',
  cursor: 'grab',
}

const styleWall: CSSProperties = {
  height: '100vh',
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
  overflowX: 'visible',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  gap: '220px',
  padding: '0 min(200px, calc((100vw - min(400px, 90vw))/2))',
}

const styleGround: CSSProperties = {
  // top: 'max(calc(0vh - 200px), calc(50vh + 300px))',
  width: 'calc(100% + 0px)',
  marginLeft: '0px',
  background: 'linear-gradient(0deg, #666, #aaa)',
  height: '800px',
  // marginTop: '-200px',
  marginTop: 'max(-200px, calc(-50vh + 340px))',
}

const styleImg: CSSProperties = {
  display: 'inline-block',
  maxHeight: '400px', maxWidth: '400px',
  minHeight: '200px', minWidth: '200px',
  objectFit: 'cover',
  boxShadow: '0px 4px 6px 3px rgba(0, 0, 0, 0.5)',
  border: '4px solid white',
  verticalAlign: 'bottom',
  userSelect: 'none',
  cursor: 'zoom-in',
}


export default function KomaTrials() {
  const [vw, vh] = useWindowSize();
  const galleryDivRef = React.useRef<HTMLDivElement>(null);
  const imgDivsRef = React.useRef<{ [idx: number]: (HTMLDivElement | null) }>({});
  const labelDivsRef = React.useRef<{ [idx: number]: (HTMLDivElement | null) }>({});
  const dragX = React.useRef<number>(0);
  const dragScrollX = React.useRef<number>(0);
  const dragMovementX = React.useRef<number>(0);

  const [activeImgIdx, setActiveImgIdx] = React.useState<number>(-1);
  const [activeLabelIdx, setActiveLabelIdx] = React.useState<number>(-1);
  const [scrollX, setScrollX] = React.useState<number>(0);
  const [isMouseDown, setIsMouseDown] = React.useState<boolean>(false);
  const [isDragging, setIsDragging] = React.useState<boolean>(false);


  const setScrollXClipped = (x: number) => {
    const div = galleryDivRef.current;
    if (!div) return;
    setScrollX(- Math.min(Math.max(0, -x), div.scrollWidth - vw));
  }

  const onImgClick = (e: React.MouseEvent, idx: number) => {
    if (isDragging) return;
    if (activeImgIdx >= 0) setActiveImgIdx(-1);
    else setActiveImgIdx(idx);
  }

  const onLabelClick = (e: React.MouseEvent, idx: number) => {
    if (isDragging) return;
    if (activeLabelIdx == idx) {
      setActiveLabelIdx(-1);
      setActiveImgIdx(idx);
    }
    else {
      setActiveLabelIdx(idx);
      setActiveImgIdx(-1);
    }
  }

  const onGalleryClick = (e: React.MouseEvent) => {
    void e;
    if (isDragging) return;
    if (activeImgIdx >= 0) setActiveImgIdx(-1);
    if (activeLabelIdx >= 0) setActiveLabelIdx(-1);
  }

  const onWheel = (e: React.WheelEvent) => {
    if (activeImgIdx >= 0 || activeLabelIdx >= 0) return;
    setScrollXClipped(scrollX - e.deltaY);
  }

  const preventDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  }

  const onPointerDown = (x: number) => {
    if (activeImgIdx >= 0 || activeLabelIdx >= 0) return;
    setIsMouseDown(true);
    dragX.current = x;
    dragScrollX.current = scrollX;
  }
  const onPointerMove = (x: number, movement: number = 0) => {
    if (activeImgIdx >= 0 || activeLabelIdx >= 0) return;
    if (!isMouseDown) return;
    if (x !== dragX.current && !isDragging) {
      setIsDragging(true);
    }
    const _scrollX = dragScrollX.current + x - dragX.current
    if (_scrollX !== scrollX)
      setScrollXClipped(_scrollX);
    dragMovementX.current = dragMovementX.current * 0.5 + movement * 0.5;
  }
  const onPointerUp = (x: number) => {
    setIsMouseDown(false);
    if (isDragging) {
      // delay to prevent onImgClick firing
      setTimeout(() => {
        setIsDragging(false);
        setScrollXClipped(dragScrollX.current + x - dragX.current + dragMovementX.current * 7);
      }, 0);
    }
  }

  const onMouseDown = (e: React.MouseEvent) => {
    onPointerDown(e.clientX);
  }
  const onMouseMove = (e: React.MouseEvent) => {
    onPointerMove(e.clientX, e.movementX);
  }
  const onMouseUp = (e: React.MouseEvent) => {
    onPointerUp(e.clientX);
  }
  const onTouchStart = (e: React.TouchEvent) => {
    onPointerDown(e.touches[0].clientX);
  }
  const onTouchMove = (e: React.TouchEvent) => {
    onPointerMove(e.touches[0].clientX);
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    void e;
    onPointerUp(scrollX + dragX.current - dragScrollX.current);
  }


  // ------ styles ------
  const _styleGallery = React.useMemo(() => {
    const defaultStyle: CSSProperties = {
      ...styleGallery,
      transform: `translateX(${scrollX}px)`,
      transition: isDragging ? '0s' : 'transform 0.5s',
      cursor: isDragging ? 'grabbing' : 'grab',
    };
    if (activeImgIdx < 0 && activeLabelIdx < 0)
      return defaultStyle;
    const div = activeImgIdx >= 0 ? imgDivsRef.current[activeImgIdx] : labelDivsRef.current[activeLabelIdx];
    if (!div) return defaultStyle;

    const mx = activeImgIdx >= 0 ? vw / 20 : vw / 10;
    const my = activeImgIdx >= 0 ? vh / 20 : vh / 10;
    const scale = Math.min((vw - mx * 2) / div.offsetWidth, (vh - my * 2) / div.offsetHeight, 15);

    const x_ = vw / 2 - scale * div.offsetWidth / 2;
    const y_ = vh / 2 - scale * div.offsetHeight / 2;

    const dx = x_ - scale * div.offsetLeft;
    const dy = y_ - scale * div.offsetTop;

    return {
      ...styleGallery,
      transform: `translate(${dx}px, ${dy}px) scale(${scale})`,
      transition: 'transform 1s',
      cursor: 'zoom-out',
    };
  }, [activeImgIdx, activeLabelIdx, vw, vh, scrollX, isDragging])


  return (
    <div
      style={{ overflow: 'hidden', height: '100vh', width: '100wh', backgroundColor: '#ddd' }}
      onWheel={onWheel}
    >
      <div ref={galleryDivRef}
        style={_styleGallery}
        onDragStart={preventDragStart}
        onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
        onClick={onGalleryClick}
      >
        <div style={styleWall}>
          <div style={{ userSelect: 'none', color: 'gray', width: 'min(400px, 90vw)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>WELCOME</div>
            <div style={{ fontSize: '1rem', textWrap: 'wrap', whiteSpace: 'pre-line' }}>
              <p style={{ marginBottom: '1rem' }}>このギャラリーは、2019年から「コマ」についての考えとアイデアを実験的に描いた1ページ漫画のまとめです。</p>
              <p>ホイール／ドラッグで移動し、作品と説明板をクリックでズームイン／アウトしてください。</p>
              <p style={{ marginTop: '2rem', textAlign: 'right' }}>-- 肉機械</p>
            </div>
          </div>

          {datas.map((item, index) => (
            <div key={index} ref={x => { imgDivsRef.current[index] = x }} draggable='false'>
              <img
                src={item.url}
                alt={item.title}
                style={{
                  ...styleImg,
                  cursor: activeImgIdx === index ? 'zoom-out' : (isDragging ? 'unset' : 'zoom-in'),
                }}
                loading='lazy'
                onClick={e => onImgClick(e, index)}
                draggable='false'
                onDragStart={preventDragStart}
              />
              <Label
                ref={labelDivsRef}
                data={item} idx={index}
                active={index === activeLabelIdx}
                isDragging={isDragging}
                onClick={onLabelClick}
              />
            </div>
          ))}

          <div style={{ userSelect: 'none', fontSize: '2rem', color: 'gray', width: 'min(400px, 90vw)', textAlign: 'center' }}>
            TO BE CONTINUED...
          </div>

        </div>
        <div style={styleGround}></div>
      </div >
    </div >
  );
}


const styleLabel: CSSProperties = {
  display: 'inline-block',
  marginLeft: '30px',
  padding: '4px',
  boxShadow: '0px 3px 4px 2px rgba(0, 0, 0, 0.5)',
  maxWidth: '70px',
  maxHeight: '150px',
  textWrap: 'wrap',
  userSelect: 'none',
  transform: 'translateZ(0px)',
  backgroundColor: 'white',
  cursor: 'zoom-in',
}


function Label({ data, idx, active, isDragging, onClick, ref }: {
  data: Data, idx: number, active: boolean, isDragging: boolean,
  ref?: React.RefObject<{ [idx: number]: (HTMLDivElement | null) }>
  onClick?: (e: React.MouseEvent, idx: number) => void
}) {
  const style = {
    ...styleLabel,
    cursor: active ? 'zoom-out' : (isDragging ? 'unset' : 'zoom-in'),
  }

  return (
    <div
      ref={x => { if (ref?.current) ref.current[idx] = x }}
      style={style} onClick={e => onClick?.(e, idx)}
    >
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <span style={{ fontSize: '3px', marginRight: '3px', color: 'gray' }}>{idx + 1}</span>
        <span style={{ fontSize: '5px' }}>{data.title}</span>
        <span style={{ flexGrow: 1, minWidth: '10px' }} />
        <span style={{ fontSize: '3px' }}>{data.date}</span>
      </div>
      <div style={{ fontSize: '3px', marginTop: '10px', marginBottom: '5px', whiteSpace: 'pre-line' }}>{data.text}</div>
    </div>
  )
}
