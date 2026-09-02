import React from 'react';
import { cx } from '../../utils/cx';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';

export interface ButtonProps {
  /** Visual style. `link` renders an inline text link with a gold underline. */
  variant?: ButtonVariant;
  /** Renders an `<a>` when provided, otherwise a `<button>`. */
  href?: string;
  /** Native button type, ignored when `href` is set. */
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
  className?: string;
  /** Disables a button (ignored for link-rendered buttons). */
  disabled?: boolean;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  link: 'btn-link',
};

/**
 * Crystal's call-to-action button. Four variants: `primary` (coral, filled),
 * `secondary` (outlined), `ghost` (for use on dark/primary backgrounds), and
 * `link` (inline text link with a gold underline, e.g. "Läs mer →").
 */
export function Button({
  variant = 'primary',
  href,
  type = 'button',
  onClick,
  children,
  className,
  disabled,
}: ButtonProps) {
  const classes = cx(variantClass[variant], className);
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
