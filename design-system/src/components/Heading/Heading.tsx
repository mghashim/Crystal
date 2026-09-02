import React from 'react';
import { cx } from '../../utils/cx';

export type HeadingVariant = 'display-lg' | 'headline-lg' | 'headline-md';

export interface HeadingProps {
  /** Serif type scale. `display-lg` is the largest (hero headlines). */
  variant?: HeadingVariant;
  /** Element to render; defaults to a sensible tag per variant. */
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
}

const defaultTag: Record<HeadingVariant, HeadingProps['as']> = {
  'display-lg': 'h1',
  'headline-lg': 'h2',
  'headline-md': 'h3',
};

/**
 * Serif heading (Literata). Use `display-lg` for hero/page headlines,
 * `headline-lg` for section titles, `headline-md` for card/subsection titles.
 */
export function Heading({ variant = 'headline-lg', as, children, className }: HeadingProps) {
  const Tag = as ?? defaultTag[variant] ?? 'h2';
  return <Tag className={cx(variant, className)}>{children}</Tag>;
}
