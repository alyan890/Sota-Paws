'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 30,
    mass: 0.22,
  });
  const backgroundY = useTransform(smoothScroll, [0, 1], ['0%', '4%']);
  const textY = useTransform(smoothScroll, [0, 1], ['0%', '3%']);
  const dogY = useTransform(smoothScroll, [0, 1], ['0%', '6%']);

  const BathIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M4 13h16v2H4zm2 2h12l-1.5 3H7.5zm2-5a2 2 0 1 1 4 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const BoneIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M7 9a2.3 2.3 0 1 1-3.8-2.2A2.6 2.6 0 0 1 7.8 5l8.4 8.4a2.6 2.6 0 0 1-1.8 4.4 2.3 2.3 0 1 1-2.2-3.8l-1.5-1.5a2.3 2.3 0 1 1-3.8-2.2z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <section ref={ref} className="spa-bg-pattern relative overflow-hidden px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-16">
      <motion.div style={prefersReducedMotion ? undefined : { y: backgroundY }} className="absolute inset-0 -z-10 will-change-transform">
        <div className="absolute left-[6%] top-[10%] h-72 w-72 rounded-full bg-[rgba(199,162,74,0.18)] blur-3xl" />
        <div className="absolute right-[-4%] top-[18%] h-80 w-80 rounded-full bg-[rgba(255,255,255,0.08)] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-44 w-[85%] -translate-x-1/2 rounded-[50%] bg-[rgba(199,162,74,0.08)] blur-3xl" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr,0.95fr]">
        <motion.div
          style={prefersReducedMotion ? undefined : { y: textY }}
          className="relative z-10 max-w-3xl pt-10 lg:pt-24 will-change-transform"
        >
          <span className="section-badge">Premium care for delightfully weird dogs</span>
          <h1 className="mt-6 max-w-4xl font-heading text-5xl leading-[0.92] tracking-tight text-ink md:text-7xl xl:text-8xl">
            Trusted grooming with a little goofy grin built in.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70 md:text-lg">
            Sota Paws Dog Spa blends expert handling, warm bath rituals, coat-safe products, and senior-friendly pacing with just enough silly energy to make dogs look happy on purpose.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="spa-icon-chip">
              <BathIcon />
              Warm Bath Ritual
            </span>
            <span className="spa-icon-chip">
              <BoneIcon />
              Bone Treat Finish
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(199,162,74,0.28)] bg-gold px-7 py-4 text-center text-sm font-semibold text-dark shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-[rgba(10,33,52,0.18)] bg-[rgba(255,255,255,0.78)] px-7 py-4 text-center text-sm font-semibold text-[rgba(10,33,52,0.92)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(111,158,180,0.44)] hover:bg-[rgba(141,184,201,0.28)] hover:text-[#0a2134]"
            >
              Explore Services
            </Link>
          </div>
          <motion.div
            className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3"
            initial={prefersReducedMotion ? false : 'hidden'}
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.12, delayChildren: 0.18 },
              },
            }}
          >
            {[
              ['Senior-ready', 'Extra time, soft steps, and comfort breaks.'],
              ['Anxiety-aware', 'Low-stress routines and reassuring handling.'],
              ['Photo-ready', 'Clean coats, shaped trims, and a cheeky little finish.'],
            ].map(([title, description]) => (
              <motion.div
                key={title}
                variants={
                  prefersReducedMotion
                    ? undefined
                    : {
                        hidden: { opacity: 0, y: 8 },
                        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 22 } },
                      }
                }
                className="glass-panel rounded-[1.5rem] p-5 shadow-soft"
              >
                <p className="text-sm font-semibold text-gold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[rgba(10,33,52,0.76)]">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative min-h-[520px] lg:min-h-[760px]">
          <motion.div
            style={prefersReducedMotion ? undefined : { y: dogY }}
            className="absolute right-0 top-0 z-20 w-[84%] md:w-[82%] lg:w-[90%] will-change-transform"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.82)] p-3 shadow-lift">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,rgba(38,30,24,0.98),rgba(22,18,15,0.98))]">
                <Image
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=80"
                  alt="Golden retriever at a premium dog spa"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,13,11,0.28)] via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10, scale: 0.99 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 75, damping: 24, delay: 0.08 }}
            className="absolute left-0 top-12 z-10 max-w-[74%] rounded-[2rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.90)] p-6 shadow-soft md:top-24"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Trusted by dog owners who value calm care</p>
            <p className="mt-4 font-heading text-3xl leading-tight text-ink md:text-4xl">
              A stronger, cleaner grooming studio for dogs that deserve real expertise.
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98, y: 6 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 75, damping: 24, delay: 0.18 }}
            className="absolute bottom-8 left-4 z-30 w-56 rounded-[1.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.90)] p-4 shadow-soft md:bottom-12 md:left-8"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[rgba(10,33,52,0.46)]">Specialized for</p>
            <p className="mt-2 font-heading text-2xl text-gold">Senior & anxious dogs</p>
            <p className="mt-2 text-sm leading-6 text-[rgba(10,33,52,0.74)]">Comfort-first appointments with calm pacing and a studio finish.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}