import React from 'react';
import { cx } from '../../utils/cx';
import { Chip } from '../Chip/Chip';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { CrystalList } from '../CrystalList/CrystalList';
import { Button, ButtonVariant } from '../Button/Button';

export interface TreatmentAction {
  label: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
}

export interface TreatmentBlockProps {
  image: { src: string; alt: string };
  /** Tag shown above the title, e.g. "Populärast". */
  chip?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  features: React.ReactNode[];
  price: { amount: React.ReactNode; label: React.ReactNode };
  /** Second tag shown next to the price, e.g. "ATB godkänt". */
  priceChip?: React.ReactNode;
  primaryAction: TreatmentAction;
  secondaryAction?: TreatmentAction;
  /** Mirror the layout (image on the right) — alternate blocks in a list for a zig-zag rhythm. */
  reverse?: boolean;
  id?: string;
}

/** Alternating image + copy block used to present each treatment on the services page, with a feature list, price and CTAs. */
export function TreatmentBlock({
  image,
  chip,
  title,
  description,
  features,
  price,
  priceChip,
  primaryAction,
  secondaryAction,
  reverse = false,
  id,
}: TreatmentBlockProps) {
  return (
    <div className={cx('treatment-block', reverse && 'reverse')} id={id}>
      <div className="treatment-visual">
        <img src={image.src} alt={image.alt} />
      </div>
      <div className="treatment-content">
        {chip && <Chip>{chip}</Chip>}
        <Heading variant="headline-lg">{title}</Heading>
        <Text variant="body-lg">{description}</Text>
        <CrystalList items={features} />
        <div className="treatment-meta">
          <div className="treatment-price">
            {price.amount} <span>{price.label}</span>
          </div>
          {priceChip && <Chip>{priceChip}</Chip>}
        </div>
        <div className="treatment-actions">
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
    </div>
  );
}
