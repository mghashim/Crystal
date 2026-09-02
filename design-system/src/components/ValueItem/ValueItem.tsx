import React from 'react';

export interface ValueItemProps {
  /** Numbered mono label, e.g. "01 — Precision". */
  number: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

/** Top-bordered value card used in the "grundvärderingar" grid: number, serif title, body copy. */
export function ValueItem({ number, title, description }: ValueItemProps) {
  return (
    <div className="value-item">
      <div className="value-num">{number}</div>
      <div className="value-title">{title}</div>
      <p className="body-md">{description}</p>
    </div>
  );
}
