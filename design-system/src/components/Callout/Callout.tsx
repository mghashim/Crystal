import React from 'react';
import { cx } from '../../utils/cx';

export interface CalloutProps {
  /** Icon element, typically a 20x20 SVG. Defaults to an info glyph. */
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const defaultIcon = (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  </svg>
);

/** Tinted info panel with a leading icon, used for ATB/payment notices. */
export function Callout({ icon = defaultIcon, children, className }: CalloutProps) {
  return (
    <div className={cx('callout', className)}>
      <span className="callout-icon">{icon}</span>
      <div className="callout-body">{children}</div>
    </div>
  );
}
