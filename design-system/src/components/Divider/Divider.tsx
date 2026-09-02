import React from 'react';
import { cx } from '../../utils/cx';

export interface DividerProps {
  className?: string;
}

/** Thin gold hairline rule used to separate content blocks. */
export function Divider({ className }: DividerProps) {
  return <hr className={cx('hr-gold', className)} />;
}
