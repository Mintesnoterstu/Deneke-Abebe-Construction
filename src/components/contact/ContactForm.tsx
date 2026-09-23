"use client";

import { FormEvent, useState } from "react";
import { company, contactSubjects } from "@/data/company";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: contactSubjects[4],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      form.message,
    ].join("\n");
    const href = `mailto:${company.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus("Your email app should open with this message. If it does not, email us directly.");
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-dark">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="min-h-11 w-full rounded-[4px] border border-border px-3 text-dark"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-dark">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className="min-h-11 w-full rounded-[4px] border border-border px-3 text-dark"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-dark">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="min-h-11 w-full rounded-[4px] border border-border px-3 text-dark"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-dark">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={(event) => update("subject", event.target.value)}
            className="min-h-11 w-full rounded-[4px] border border-border px-3 text-dark"
          >
            {contactSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-dark">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={(event) => update("message", event.target.value)}
            className="w-full rounded-[4px] border border-border px-3 py-3 text-dark"
          />
        </div>
        <Button type="submit">Send message</Button>
        {status ? <p className="text-sm text-muted">{status}</p> : null}
      </div>
    </form>
  );
}
