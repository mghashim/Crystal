import React from 'react';
import { cx } from '../../utils/cx';

export interface CrystalListProps {
  /** List item content, one per bullet. */
  items: React.ReactNode[];
  className?: string;
}

/** Bulleted list with a small rotated-square gold marker, used for feature/benefit lists. */
export function CrystalList({ items, className }: CrystalListProps) {
  return (
    <ul className={cx('crystal-list', className)}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
