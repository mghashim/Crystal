import React from 'react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  logo?: string;
  logoHref?: string;
  tagline: string;
  columns: FooterColumn[];
  copyright: string;
  location?: string;
}

/** Dark site footer: logo + tagline, up to three link columns, and a bottom copyright bar. */
export function Footer({ logo = 'Crystal', logoHref = '/', tagline, columns, copyright, location }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <a href={logoHref} className="footer-logo">
            {logo}
          </a>
          <p className="footer-tagline">{tagline}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <span className="footer-col-title">{col.title}</span>
            <ul className="footer-links">
              {col.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">{copyright}</span>
        {location && <span className="footer-copy">{location}</span>}
      </div>
    </footer>
  );
}
