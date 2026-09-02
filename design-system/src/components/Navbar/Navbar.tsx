import React, { useState } from 'react';
import { cx } from '../../utils/cx';

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavAction {
  label: string;
  href: string;
}

export interface NavbarProps {
  /** Wordmark text, defaults to "Crystal". */
  logo?: string;
  logoHref?: string;
  links: NavLink[];
  /** Outlined action shown next to the primary CTA (desktop only). */
  secondaryAction?: NavAction;
  /** Filled coral CTA, e.g. "Boka tid". */
  primaryAction?: NavAction;
}

/**
 * Fixed, blurred top navigation bar with a self-contained mobile menu
 * (hamburger toggles a full-screen overlay of serif nav links + the primary CTA).
 */
export function Navbar({ logo = 'Crystal', logoHref = '/', links, secondaryAction, primaryAction }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href={logoHref} className="nav-logo">
            {logo}
          </a>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={cx(link.active && 'active')}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            {secondaryAction && (
              <a href={secondaryAction.href} className="btn-secondary">
                {secondaryAction.label}
              </a>
            )}
            {primaryAction && (
              <a href={primaryAction.href} className="btn-primary">
                {primaryAction.label}
              </a>
            )}
          </div>
          <button
            className={cx('hamburger', open && 'open')}
            aria-label="Meny"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={cx('mobile-nav', open && 'open')}>
        {links.map((link) => (
          <a key={link.href} href={link.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        {primaryAction && (
          <div className="mobile-nav-cta">
            <a href={primaryAction.href} className="btn-primary" onClick={() => setOpen(false)}>
              {primaryAction.label}
            </a>
          </div>
        )}
      </div>
    </>
  );
}
