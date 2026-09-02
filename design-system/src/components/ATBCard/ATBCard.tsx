import React from 'react';
import { cx } from '../../utils/cx';

export interface ATBCardProps {
  amount: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  /** Solid dark-blue highlight treatment for the "standard" tier. */
  featured?: boolean;
}

/** Highlight card for tandvårdsbidrag/benefit tiers: large serif amount, title, description. */
export function ATBCard({ amount, title, description, featured = false }: ATBCardProps) {
  return (
    <div className={cx('atb-card', featured && 'featured')}>
      <div className="atb-amount">{amount}</div>
      <div className="atb-title">{title}</div>
      <div className="atb-desc">{description}</div>
    </div>
  );
}
