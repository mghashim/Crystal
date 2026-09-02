import React, { useState } from 'react';
import { cx } from '../../utils/cx';

export interface FAQEntry {
  question: React.ReactNode;
  answer: React.ReactNode;
}

export interface FAQAccordionProps {
  items: FAQEntry[];
  /** Index open by default, or -1 for none. Defaults to -1. */
  defaultOpenIndex?: number;
}

/** Single-open accordion of question/answer pairs, with a rotating plus-icon indicator. */
export function FAQAccordion({ items, defaultOpenIndex = -1 }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={cx('faq-item', isOpen && 'open')} key={i}>
            <button
              className="faq-q"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              {item.question}
              <span className="icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div className="faq-a">{item.answer}</div>
          </div>
        );
      })}
    </div>
  );
}
