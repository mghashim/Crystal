import React from 'react';
import { cx } from '../../utils/cx';
import { Eyebrow } from '../Eyebrow/Eyebrow';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

export interface SectionHeaderProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Center-align and cap width, used for hero-style section intros. */
  centered?: boolean;
  className?: string;
}

/** Eyebrow + serif title + optional description, the standard section intro block. */
export function SectionHeader({ eyebrow, title, description, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cx('section-header', centered && 'centered', className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading variant="headline-lg">{title}</Heading>
      {description && <Text variant="body-lg">{description}</Text>}
    </div>
  );
}
