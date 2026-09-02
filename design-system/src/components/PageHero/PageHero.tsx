import React from 'react';
import { Eyebrow } from '../Eyebrow/Eyebrow';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

export interface PageHeroProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Optional CTA row (buttons composed by the caller) below the description. */
  actions?: React.ReactNode;
}

/** Tinted header band used at the top of inner pages ("Estetisk tandvård", "Om oss", "Priser"). */
export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <div className="page-hero">
      <div className="page-hero-inner">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading variant="display-lg">{title}</Heading>
        {description && <Text variant="body-lg">{description}</Text>}
        {actions}
      </div>
    </div>
  );
}
