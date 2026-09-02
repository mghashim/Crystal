import React from 'react';
import { Card } from '../Card/Card';
import { cx } from '../../utils/cx';

export interface TestimonialCardProps {
  /** Star rating out of 5. Defaults to 5. */
  rating?: number;
  quote: React.ReactNode;
  name: React.ReactNode;
  /** Small mono meta line under the name, e.g. "Mars 2026 · Porslinsfasader". */
  meta: React.ReactNode;
}

/** Patient review card: star row, italic serif quote, name + meta. */
export function TestimonialCard({ rating = 5, quote, name, meta }: TestimonialCardProps) {
  return (
    <Card className="testimonial-card">
      <div className="stars">
        {Array.from({ length: 5 }, (_, i) => (
          <div className={cx('star', i >= rating && 'empty')} key={i} />
        ))}
      </div>
      <p className="testimonial-quote">{quote}</p>
      <div className="testimonial-meta">
        <div className="testimonial-name">{name}</div>
        <div className="testimonial-date">{meta}</div>
      </div>
    </Card>
  );
}
