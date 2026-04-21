import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '@/components/hero';
import { SectionReveal } from '@/components/section-reveal';
import { ServiceIcon } from '@/components/service-icon';
import { pricingPreview, retrieverSpotlights, services, testimonials } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="mx-auto max-w-7xl px-6 pb-10 md:px-10">
        <SectionReveal className="mb-16 rounded-[2.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.86)] p-6 shadow-soft md:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="section-badge">Spa moments</span>
              <h2 className="mt-5 font-heading text-4xl leading-tight text-ink md:text-5xl">A real dog spa look: bath, brush, fluff, finish.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[rgba(10,33,52,0.72)]">From warm-water bath prep to fluffy post-dry styling, these moments make the spa identity clear at a glance.</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                src: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1300&q=80',
                alt: 'Dog enjoying a bath with shampoo bubbles',
                label: 'Bath & Bubbles',
              },
              {
                src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1300&q=80',
                alt: 'Dog wrapped in a towel after spa bath',
                label: 'Towel Dry Care',
              },
              {
                src: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=1300&q=80',
                alt: 'Golden retriever with clean fluffy coat after grooming',
                label: 'Fluffy Finish',
              },
            ].map((item) => (
              <article key={item.label} className="overflow-hidden rounded-[1.75rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.92)] shadow-soft">
                <div className="relative aspect-[4/3] bg-[rgba(236,246,251,0.9)]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover object-center" />
                </div>
                <div className="border-t border-[rgba(10,33,52,0.12)] px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{item.label}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.name}
              className="group rounded-[2rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.86)] p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">0{index + 1}</p>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(10,33,52,0.16)] bg-[rgba(141,184,201,0.32)] text-[rgba(10,33,52,0.92)] shadow-soft">
                  <ServiceIcon serviceName={service.name} className="h-7 w-7" />
                </span>
              </div>
              <h2 className="mt-4 font-heading text-3xl text-ink">{service.name}</h2>
              <p className="mt-3 text-sm leading-7 text-[rgba(10,33,52,0.74)]">{service.description}</p>
            </article>
          ))}
        </SectionReveal>

        <SectionReveal className="mt-24 grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <div>
            <span className="section-badge">Mother - daughter story</span>
            <h2 className="mt-6 font-heading text-4xl leading-tight text-ink md:text-5xl">
              Built by a family that understands how much personality your dog brings.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[rgba(10,33,52,0.72)]">
              Sota Paws began as a mother-daughter vision to make grooming feel less like a chore and more like a happy reset.
              Every visit is paced with patience, a gentle touch, and a clean finish that still feels personal.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Quiet, warm, and comfortable environment',
                'Gentle handling for sensitive dogs',
                'Breed-aware grooming with a polished finish',
                'Transparent communication with pet parents',
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.90)] px-5 py-4 text-sm text-[rgba(10,33,52,0.76)] shadow-soft">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.86)] p-4 shadow-lift">
            <div className="grid gap-4 sm:grid-cols-[1.15fr,0.85fr]">
              <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] border border-[rgba(10,33,52,0.12)] bg-[linear-gradient(180deg,rgba(38,30,24,0.98),rgba(22,18,15,0.98))]">
                <Image
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1300&q=80"
                  alt="Golden retriever resting during a spa grooming session"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-[2rem] border border-[rgba(10,33,52,0.12)] bg-[rgba(243,249,252,0.96)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Gentle pace</p>
                  <p className="mt-3 font-heading text-3xl text-ink">Extra time for senior dogs.</p>
                </div>
                <div className="rounded-[2rem] border border-[rgba(10,33,52,0.12)] bg-[rgba(243,249,252,0.96)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Calm process</p>
                  <p className="mt-3 font-heading text-3xl text-ink">Comfort-first handling for anxious pups.</p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-24 rounded-[2.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.82)] p-8 shadow-soft md:p-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="section-badge">Specialization</span>
              <h2 className="mt-6 font-heading text-4xl leading-tight text-ink md:text-5xl">Designed for senior and anxious dogs first.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[rgba(10,33,52,0.72)]">
              We slow the process down, reduce sensory overload, and communicate clearly so your dog can feel safe from start to finish.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ['Gentle introductions', 'We start with low-pressure routines and a quiet environment.'],
              ['Health-aware care', 'We listen closely to vet instructions, mobility notes, and sensitivities.'],
              ['Comfort breaks', 'Appointments are paced with real breaks instead of one long rushed session.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-[2rem] border border-[rgba(10,33,52,0.12)] bg-[rgba(243,249,252,0.96)] p-6 shadow-soft">
                <h3 className="font-heading text-3xl text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[rgba(10,33,52,0.70)]">{description}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mt-24 grid gap-6 lg:grid-cols-[1fr,1.2fr] lg:items-start">
          <div className="rounded-[2.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.86)] p-8 shadow-soft">
            <span className="section-badge">Pricing preview</span>
            <h2 className="mt-6 font-heading text-4xl text-ink">Premium care with clear, simple pricing.</h2>
            <p className="mt-4 text-base leading-8 text-[rgba(10,33,52,0.72)]">Transparent starting prices for the most requested grooming experiences.</p>
            <Link href="/services" className="glass-button mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-ink/90 transition hover:text-ink">
              View full pricing
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pricingPreview.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.90)] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{item.title}</p>
                <p className="mt-5 font-heading text-5xl text-ink">{item.price}</p>
                <p className="mt-4 text-sm leading-7 text-[rgba(10,33,52,0.70)]">{item.details}</p>
              </article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mt-24">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="section-badge">Retriever spotlight</span>
              <h2 className="mt-6 font-heading text-4xl leading-tight text-ink md:text-5xl">More Golden Retriever variations across the studio.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[rgba(10,33,52,0.72)]">
              These shots give the site more variety: portrait, standing, close-up, and post-groom moments with lighter, cleaner backdrops.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {retrieverSpotlights.map((shot) => (
              <article key={shot.title} className="overflow-hidden rounded-[2rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.90)] shadow-soft">
                <div className="relative aspect-[4/5] bg-[linear-gradient(180deg,rgba(38,30,24,0.98),rgba(22,18,15,0.98))]">
                  <Image src={shot.src} alt={shot.alt} fill className="object-cover object-center" />
                </div>
                <div className="border-t border-[rgba(10,33,52,0.12)] px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{shot.title}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mt-24 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="rounded-[2rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.90)] p-7 shadow-soft">
              <p className="text-base leading-8 text-[rgba(10,33,52,0.78)]">“{testimonial.quote}”</p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{testimonial.author}</footer>
            </blockquote>
          ))}
        </SectionReveal>

        <SectionReveal className="mt-24 overflow-hidden rounded-[2.75rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.86)] p-8 shadow-lift md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="section-badge">Book now</span>
              <h2 className="mt-6 font-heading text-4xl leading-tight text-ink md:text-5xl">Ready for a cleaner, stronger, more trusted grooming studio?</h2>
            </div>
            <Link href="/booking" className="glass-button inline-flex w-fit rounded-full px-7 py-4 text-sm font-semibold text-ink/90 transition hover:text-ink">
              Book Your Visit
            </Link>
          </div>
        </SectionReveal>
      </div>
    </>
  );
}