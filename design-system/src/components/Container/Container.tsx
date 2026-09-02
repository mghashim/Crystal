import React from 'react';
import { cx } from '../../utils/cx';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/** Centers content at the site's max content width (1280px) with responsive side gutters. */
export function Container({ children, className, style }: ContainerProps) {
  return (
    <div className={cx('container', className)} style={style}>
      {children}
    </div>
  );
}
