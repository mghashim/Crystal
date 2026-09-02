import React from 'react';
import { cx } from '../../utils/cx';

export type TextVariant = 'body-lg' | 'body-md';

export interface TextProps {
  variant?: TextVariant;
  as?: 'p' | 'span' | 'div';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/** Body copy in the sans (Manrope) family. `body-lg` is the larger, lede-style size. */
export function Text({ variant = 'body-md', as = 'p', children, className, style }: TextProps) {
  const Tag = as;
  return (
    <Tag className={cx(variant, className)} style={style}>
      {children}
    </Tag>
  );
}
