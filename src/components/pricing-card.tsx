"use client";

import Link from 'next/link';
import { useState } from 'react';

type Tier = { tier: string; weight?: string; price: string; note?: string };

export function PricingCard({
  serviceName,
  startingPrice,
  pricing,
  description,
}: {
  serviceName: string;
  startingPrice?: string;
  pricing?: Tier[];
  description?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <span className="inline-flex w-fit rounded-full border border-[rgba(199,162,74,0.24)] bg-[rgba(199,162,74,0.16)] px-3 py-1 text-sm font-semibold text-gold">
          {startingPrice ?? 'See details'}
        </span>
        {pricing && pricing.length > 0 ? (
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            className="inline-flex w-full items-center justify-center rounded-full border border-[rgba(10,33,52,0.14)] px-4 py-2 text-sm font-semibold hover:bg-[rgba(10,33,52,0.04)] sm:w-auto"
          >
            {open ? 'Hide sizes' : 'View sizes & prices'}
          </button>
        ) : null}
        <Link
          href={`/booking?service=${encodeURIComponent(serviceName)}`}
          className="inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold sm:ml-auto sm:w-auto glass-button"
        >
          Book service
        </Link>
      </div>

      {pricing ? (
        <>
          <div className="mt-4 rounded-xl border border-[rgba(10,33,52,0.06)] bg-[rgba(243,249,252,0.96)] p-4 text-sm md:hidden">
            <div className="grid gap-2 sm:grid-cols-2">
              {pricing.map((t) => (
                <div key={`${t.tier}-mobile`} className="rounded-lg border border-[rgba(10,33,52,0.06)] bg-white p-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <div>
                      <div className="font-medium">{t.tier}</div>
                      {t.weight ? <div className="text-xs text-[rgba(10,33,52,0.6)]">{t.weight}</div> : null}
                    </div>
                    <div className="text-sm font-semibold">{t.price}</div>
                  </div>
                  {t.note ? <div className="mt-2 text-xs text-[rgba(10,33,52,0.6)]">{t.note}</div> : null}
                </div>
              ))}
            </div>
          </div>
          <div className={`mt-4 hidden rounded-xl border border-[rgba(10,33,52,0.06)] bg-[rgba(243,249,252,0.96)] p-4 text-sm md:block ${open ? '' : 'md:hidden'}`}>
            <div className="grid gap-2 md:grid-cols-3">
              {pricing.map((t) => (
                <div key={t.tier} className="rounded-lg border border-[rgba(10,33,52,0.06)] bg-white p-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <div>
                      <div className="font-medium">{t.tier}</div>
                      {t.weight ? <div className="text-xs text-[rgba(10,33,52,0.6)]">{t.weight}</div> : null}
                    </div>
                    <div className="text-sm font-semibold">{t.price}</div>
                  </div>
                  {t.note ? <div className="mt-2 text-xs text-[rgba(10,33,52,0.6)]">{t.note}</div> : null}
                  <div className="mt-3">
                    <Link
                      href={`/booking?service=${encodeURIComponent(serviceName)}&size=${encodeURIComponent(t.tier)}`}
                      className="inline-block rounded-full bg-[rgba(141,184,201,0.12)] px-3 py-1 text-xs font-semibold"
                    >
                      Book {t.tier}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}

      {description ? <p className="mt-4 text-sm leading-6 text-[rgba(10,33,52,0.72)]">{description}</p> : null}
    </div>
  );
}

export default PricingCard;
