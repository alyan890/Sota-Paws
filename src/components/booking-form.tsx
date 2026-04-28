'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';

export function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        body: formData,
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? 'Something went wrong.');
      }

      setStatus('success');
      setMessage(data.message ?? 'Request received.');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to submit booking request.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] p-6 shadow-soft md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        {[
          ['ownerName', 'Owner name', 'text', true],
          ['email', 'Email', 'email', true],
          ['phone', 'Phone', 'tel', true],
          ['dogName', 'Dog name', 'text', true],
          ['breed', 'Breed', 'text', true],
          ['size', 'Size / weight', 'text', true],
          ['age', 'Age', 'text', true],
          ['preferredStylist', 'Preferred stylist', 'text', false],
          ['vetClinic', 'Vet clinic name', 'text', false],
        ].map(([name, label, type, required]) => (
          <label key={name as string} className="flex flex-col gap-2 text-sm font-medium text-[rgba(10,33,52,0.84)] md:col-span-1">
            <span>{label}</span>
            <input
              name={name as string}
              type={type as string}
              required={Boolean(required)}
              className="rounded-2xl border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.95)] px-4 py-3 text-[rgba(10,33,52,0.94)] outline-none transition placeholder:text-[rgba(10,33,52,0.30)] focus:border-[rgba(111,158,180,0.52)] focus:bg-[rgba(248,252,255,0.98)]"
            />
          </label>
        ))}

        <label className="flex flex-col gap-2 text-sm font-medium text-[rgba(10,33,52,0.84)]">
          <span>Service type</span>
          <select
            name="serviceType"
            defaultValue="Full Body Hair Cut"
            className="rounded-2xl border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.95)] px-4 py-3 text-[rgba(10,33,52,0.94)] outline-none transition focus:border-[rgba(111,158,180,0.52)] focus:bg-[rgba(248,252,255,0.98)]"
          >
            <option>Signature Spa Bath</option>
            <option>Full Body Hair Cut</option>
            <option>Senior Comfort Groom</option>
            <option>Anxiety-Friendly Refresh</option>
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-[rgba(10,33,52,0.84)] md:col-span-2">
          <span>Behavior / medical notes</span>
          <textarea
            name="notes"
            rows={5}
            placeholder="Let us know about medications, allergies, mobility notes, or what helps your dog feel safe."
            className="rounded-3xl border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.95)] px-4 py-3 text-[rgba(10,33,52,0.94)] outline-none transition placeholder:text-[rgba(10,33,52,0.30)] focus:border-[rgba(111,158,180,0.52)] focus:bg-[rgba(248,252,255,0.98)]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-[rgba(10,33,52,0.84)] md:col-span-2">
          <span>Optional dog photo upload</span>
          <input
            name="dogPhoto"
            type="file"
            accept="image/*"
            className="rounded-2xl border border-dashed border-[rgba(10,33,52,0.18)] bg-[rgba(255,255,255,0.93)] px-4 py-3 text-sm text-[rgba(10,33,52,0.70)] file:mr-4 file:rounded-full file:border-0 file:bg-[rgba(141,184,201,0.24)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[rgba(10,33,52,0.92)]"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-6 text-[rgba(10,33,52,0.62)]">
          Submit this form and the information will be routed to your email workflow or CRM once the placeholder API is connected.
        </p>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="glass-button rounded-full px-7 py-4 text-sm font-semibold text-ink/90 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:text-ink disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? 'Sending...' : 'Request Booking'}
        </button>
      </div>

      {message ? (
        <p className={`mt-4 rounded-2xl px-4 py-3 text-sm ${status === 'success' ? 'border border-[rgba(199,162,74,0.26)] bg-[rgba(199,162,74,0.12)] text-[rgba(10,33,52,0.90)]' : 'border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.06)] text-[rgba(166,38,38,0.92)]'}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}