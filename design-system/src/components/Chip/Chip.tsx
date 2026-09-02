import React from 'react';
import { cx } from '../../utils/cx';

export interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

/** Small uppercase pill used for tags like "Populärt" or "ATB godkänt". */
export function Chip({ children, className }: ChipProps) {
  return <span className={cx('chip', className)}>{children}</span>;
}
