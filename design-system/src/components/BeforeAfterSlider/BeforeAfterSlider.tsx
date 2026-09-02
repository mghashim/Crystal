import React, { useCallback, useRef, useState } from 'react';

export interface BeforeAfterSliderProps {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  beforeLabel?: React.ReactNode;
  afterLabel?: React.ReactNode;
  /** Initial reveal position, 0-1. Defaults to 0.5 (centered). */
  initialPosition?: number;
}

/** Draggable before/after image comparison slider. Drag or touch anywhere on the frame to reveal the "after" image. */
export function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  beforeLabel = 'Före',
  afterLabel = 'Efter',
  initialPosition = 0.5,
}: BeforeAfterSliderProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(initialPosition);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const pct = Math.max(0.04, Math.min(0.96, (clientX - rect.left) / rect.width));
    setPos(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      className="ba-wrap"
      ref={wrapRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <img src={beforeSrc} alt={beforeAlt} />
      <div className="ba-clip" style={{ width: `${pos * 100}%` }}>
        <img src={afterSrc} alt={afterAlt} />
      </div>
      <div className="ba-handle" style={{ left: `${pos * 100}%` }}>
        <div className="ba-line" />
        <div className="ba-knob">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M5 8h6M8 5l3 3-3 3"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="ba-line" />
      </div>
      <div className="ba-labels">
        <span className="ba-lbl">{beforeLabel}</span>
        <span className="ba-lbl">{afterLabel}</span>
      </div>
    </div>
  );
}
