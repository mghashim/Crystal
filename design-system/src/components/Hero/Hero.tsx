import React from 'react';
import { Eyebrow } from '../Eyebrow/Eyebrow';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { Button, ButtonVariant } from '../Button/Button';

export interface HeroAction {
  label: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
}

export interface HeroBadge {
  value: React.ReactNode;
  label: React.ReactNode;
}

export interface HeroProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
  image: { src: string; alt: string };
  /** Floating stat badge over the bottom-left of the hero image. */
  badge?: HeroBadge;
}

/** Home-page hero: two-column intro copy + CTAs beside a framed image with an optional floating stat badge. */
export function Hero({ eyebrow, title, description, primaryAction, secondaryAction, image, badge }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Heading variant="display-lg">{title}</Heading>
          <Text variant="body-lg">{description}</Text>
          <div className="hero-actions">
            <Button variant={primaryAction.variant ?? 'primary'} href={primaryAction.href}>
              {primaryAction.label}
            </Button>
            {secondaryAction && (
              <Button variant={secondaryAction.variant ?? 'link'} href={secondaryAction.href}>
                {secondaryAction.label}
              </Button>
            )}
          </div>
        </div>
        <div className="hero-visual">
          <img src={image.src} alt={image.alt} loading="eager" />
          {badge && (
            <div className="hero-badge">
              <div className="hero-badge-num">{badge.value}</div>
              <div className="hero-badge-lbl">{badge.label}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
