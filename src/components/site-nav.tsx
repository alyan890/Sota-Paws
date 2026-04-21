'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { navLinks } from '@/data/site';

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(10,33,52,0.12)] bg-[rgba(255,255,255,0.86)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Sota Paws Dog Spa logo"
            width={54}
            height={54}
            className="h-12 w-12 object-contain"
            priority
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[rgba(10,33,52,0.92)]">Sota Paws</p>
            <p className="text-xs text-[rgba(10,33,52,0.62)]">Dog Spa</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-[rgba(10,33,52,0.72)] transition hover:text-[#0a2134]">
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="glass-button rounded-full px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:text-ink"
          >
            Book Now
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(10,33,52,0.18)] bg-[rgba(255,255,255,0.72)] text-[rgba(10,33,52,0.86)] shadow-soft lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10, filter: 'blur(6px)' }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10, filter: 'blur(6px)' }}
            transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 120, damping: 22 }}
            className="border-t border-[rgba(10,33,52,0.12)] bg-[rgba(255,255,255,0.96)] px-6 py-5 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-base font-medium text-[rgba(10,33,52,0.80)]">
                  {link.label}
                </Link>
              ))}
              <Link href="/booking" onClick={() => setOpen(false)} className="glass-button w-fit rounded-full px-5 py-3 text-sm font-semibold text-ink/90">
                Book Now
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}