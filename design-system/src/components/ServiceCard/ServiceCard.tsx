import React from 'react';
import { Card } from '../Card/Card';
import { Chip } from '../Chip/Chip';
import { Button } from '../Button/Button';

export interface ServiceCardProps {
  /** 22x22 icon, typically a stroked SVG. */
  icon: React.ReactNode;
  title: React.ReactNode;
  /** Optional tag shown next to the title, e.g. "Populärt". */
  chip?: React.ReactNode;
  description: React.ReactNode;
  href: string;
  linkLabel?: React.ReactNode;
}

/** Icon + title + description card used in the services grid, with a trailing "Läs mer →" link. */
export function ServiceCard({ icon, title, chip, description, href, linkLabel = 'Läs mer →' }: ServiceCardProps) {
  return (
    <Card className="service-card">
      <div className="service-icon">{icon}</div>
      <div>
        <div className="service-card-title-row">
          <h3>{title}</h3>
          {chip && <Chip>{chip}</Chip>}
        </div>
        <p className="body-md">{description}</p>
      </div>
      <Button variant="link" href={href}>
        {linkLabel}
      </Button>
    </Card>
  );
}
