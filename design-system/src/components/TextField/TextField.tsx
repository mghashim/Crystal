import React from 'react';

export interface TextFieldProps {
  label: React.ReactNode;
  name?: string;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

/** Underlined text input with an uppercase mono label, matching the contact form style. */
export function TextField({ label, name, type = 'text', placeholder, value, onChange, className }: TextFieldProps) {
  return (
    <div className={`form-group ${className ?? ''}`.trim()}>
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
