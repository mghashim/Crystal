import React from 'react';
import { cx } from '../../utils/cx';

export interface SectionProps {
  children: React.ReactNode;
  /** Background tint. `tint` is the pale blue accent, `container` a warm neutral. */
  background?: 'default' | 'tint' | 'container';
  id?: string;
  className?: string;
}

const backgroundClass = {
  default: undefined,
  tint: 'bg-tint',
  container: 'bg-container',
} as const;

/** Full-bleed page section with the site's standard vertical rhythm (96px desktop / 64px mobile). */
export function Section({ children, background = 'default', id, className }: SectionProps) {
  return (
    <section id={id} className={cx(backgroundClass[background], className)}>
      {children}
    </section>
  );
}
