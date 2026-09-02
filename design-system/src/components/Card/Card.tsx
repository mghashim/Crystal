import React from 'react';
import { cx } from '../../utils/cx';

export interface CardProps {
  children: React.ReactNode;
  /** Lift with a soft shadow on hover. Defaults to true. */
  hoverable?: boolean;
  className?: string;
}

/** Bordered surface with a gold hairline and generous padding — the base for service and testimonial cards. */
export function Card({ children, hoverable = true, className }: CardProps) {
  return <div className={cx('card', hoverable && 'hoverable', className)}>{children}</div>;
}
