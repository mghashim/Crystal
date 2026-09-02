import React from 'react';
import { cx } from '../../utils/cx';

export interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

/** Small uppercase monospace label used above headings, e.g. "Våra tjänster". */
export function Eyebrow({ children, className }: EyebrowProps) {
  return <span className={cx('eyebrow', className)}>{children}</span>;
}
