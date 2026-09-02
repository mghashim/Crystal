import React from 'react';
import { cx } from '../../utils/cx';

export interface TwoColumnProps {
  /** Exactly two children, laid out in a 1fr/1fr grid that stacks on mobile. */
  children: [React.ReactNode, React.ReactNode];
  /** Wider gap variant used for image + long-copy pairings. */
  gap?: 'default' | 'xl';
  className?: string;
}

/** Two-column responsive grid (equal widths, stacks below 768px). */
export function TwoColumn({ children, gap = 'default', className }: TwoColumnProps) {
  return (
    <div className={cx('two-col', gap === 'xl' && 'gap-xl', className)}>
      {children[0]}
      {children[1]}
    </div>
  );
}
