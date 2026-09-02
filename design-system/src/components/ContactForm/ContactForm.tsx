import React, { useState } from 'react';
import { TextField } from '../TextField/TextField';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit?: (values: ContactFormValues) => void;
  submitLabel?: React.ReactNode;
  /** Label shown on the submit button for a few seconds after a successful submit. */
  sentLabel?: React.ReactNode;
}

const emptyValues: ContactFormValues = { firstName: '', lastName: '', email: '', phone: '', message: '' };

/** The site's booking/contact form: first/last name pair, email, phone, message, and a submit button that briefly confirms success. */
export function ContactForm({ onSubmit, submitLabel = 'Skicka förfrågan', sentLabel = 'Skickat ✓' }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [sent, setSent] = useState(false);

  const field =
    (key: keyof ContactFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(values);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setValues(emptyValues);
    }, 3000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row-2">
        <TextField label="Förnamn" placeholder="Anna" value={values.firstName} onChange={field('firstName')} />
        <TextField label="Efternamn" placeholder="Karlsson" value={values.lastName} onChange={field('lastName')} />
      </div>
      <TextField
        label="E-postadress"
        type="email"
        placeholder="anna@example.com"
        value={values.email}
        onChange={field('email')}
      />
      <TextField
        label="Telefon"
        type="tel"
        placeholder="070 000 00 00"
        value={values.phone}
        onChange={field('phone')}
      />
      <TextArea
        label="Meddelande"
        placeholder="Berätta vad du är intresserad av…"
        rows={3}
        value={values.message}
        onChange={field('message')}
      />
      <div>
        <Button type="submit" variant="primary">
          {sent ? sentLabel : submitLabel}
        </Button>
      </div>
    </form>
  );
}
