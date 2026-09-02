import React from 'react';
import { Chip } from '../Chip/Chip';

export interface PriceRow {
  name: React.ReactNode;
  description: React.ReactNode;
  price: React.ReactNode;
}

export interface PriceCategoryProps {
  title: React.ReactNode;
  /** Optional tag next to the title, e.g. "ATB godkänt". */
  chip?: React.ReactNode;
  rows: PriceRow[];
  id?: string;
}

/** Bordered price list panel: a tinted header row followed by name/description/price rows. */
export function PriceCategory({ title, chip, rows, id }: PriceCategoryProps) {
  return (
    <div className="price-category" id={id}>
      <div className="price-category-header">
        <span className="price-category-title">{title}</span>
        {chip && <Chip>{chip}</Chip>}
      </div>
      {rows.map((row, i) => (
        <div className="price-row" key={i}>
          <span className="price-item-name">{row.name}</span>
          <span className="price-item-desc">{row.description}</span>
          <span className="price-item-price">{row.price}</span>
        </div>
      ))}
    </div>
  );
}
