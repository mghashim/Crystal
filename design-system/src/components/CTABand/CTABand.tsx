import React from 'react';
import { Eyebrow } from '../Eyebrow/Eyebrow';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { Button, ButtonVariant } from '../Button/Button';

export interface CTAAction {
  label: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
}

export interface CTABandProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  id?: string;
}

/** Full-width dark-blue banner driving a final call to action, e.g. "Boka din kostnadsfria konsultation". */
export function CTABand({ eyebrow, title, description, primaryAction, secondaryAction, id }: CTABandProps) {
  return (
    <section className="cta-band" id={id}>
      <div className="cta-band-inner">
        <div>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Heading variant="headline-lg">{title}</Heading>
          <Text variant="body-lg">{description}</Text>
        </div>
        <div className="cta-band-actions">
          <Button variant={primaryAction.variant ?? 'primary'} href={primaryAction.href}>
            {primaryAction.label}
          </Button>
          {secondaryAction && (
            <Button variant={secondaryAction.variant ?? 'ghost'} href={secondaryAction.href}>
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
