import React from 'react';

export interface TextAreaProps {
  label: React.ReactNode;
  name?: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
}

/** Underlined, vertically-resizable textarea with an uppercase mono label. */
export function TextArea({ label, name, placeholder, rows = 3, value, onChange, className }: TextAreaProps) {
  return (
    <div className={`form-group ${className ?? ''}`.trim()}>
      <label className="form-label">{label}</label>
      <textarea
        name={name}
        className="form-textarea"
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
