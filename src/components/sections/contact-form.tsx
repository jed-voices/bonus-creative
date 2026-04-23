'use client';

import { type ChangeEvent, type FormEvent, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { contactPage, site } from '@/lib/site';

const initialForm = {
  name: '',
  email: '',
  projectType: 'Brand films',
  timeline: 'Within 30 days',
  budget: 'Prefer not to say',
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.currentTarget;
    if (status) {
      setStatus('');
    }
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Bonus Creative inquiry: ${form.projectType}`;
    const body = [
      `Name: ${form.name || 'Not provided'}`,
      `Email: ${form.email || 'Not provided'}`,
      `Project type: ${form.projectType}`,
      `Timeline: ${form.timeline}`,
      `Budget: ${form.budget}`,
      '',
      'Project details:',
      form.message || 'No project details provided.'
    ].join('\n');

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app should open with the inquiry filled in.');
  }

  const fieldClassName =
    'min-h-12 rounded-[1rem] border border-white/10 bg-black/20 px-4 py-3 text-[#F5F5F7] outline-none transition placeholder:text-[#86868B] focus:border-[#2E5BFF]';

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-6 md:p-7"
    >
      <div className="space-y-3">
        <p className="eyebrow">Form</p>
        <p className="body-sm max-w-2xl text-[#F5F5F7]">{contactPage.formIntro}</p>
        <p className="body-sm max-w-2xl">{site.contactMicrocopy}</p>
      </div>

      <div className="grid gap-2">
        <label htmlFor="name" className="eyebrow">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          className={fieldClassName}
          placeholder="Your name"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="eyebrow">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          className={fieldClassName}
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="projectType" className="eyebrow">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className={fieldClassName}
          >
            <option>Brand films</option>
            <option>Documentary and mission stories</option>
            <option>Events and campaigns</option>
            <option>Post-production and production partner</option>
            <option>Something else</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="timeline" className="eyebrow">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className={fieldClassName}
          >
            <option>As soon as possible</option>
            <option>Within 30 days</option>
            <option>1 to 3 months</option>
            <option>3 months or more</option>
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="budget" className="eyebrow">
          Budget range
        </label>
        <select
          id="budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className={fieldClassName}
        >
          <option>Prefer not to say</option>
          <option>Under $5,000</option>
          <option>$5,000 to $10,000</option>
          <option>$10,000 to $20,000</option>
          <option>$20,000+</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="eyebrow">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={fieldClassName}
          placeholder={contactPage.formHelper}
          required
        />
      </div>

      <div className="space-y-3" aria-live="polite">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full border border-[#FF5C00] bg-[#FF5C00] px-5 py-3 text-sm text-[#0A0A0A] transition-colors hover:border-[#ff7a2f] hover:bg-[#ff7a2f]"
        >
          <span>{contactPage.submitLabel}</span>
          <ArrowUpRight size={16} />
        </button>
        <p className="body-sm">
          {contactPage.formHandoff}
        </p>
        {status ? <p className="body-sm text-[#F5F5F7]">{status}</p> : null}
      </div>
    </form>
  );
}
