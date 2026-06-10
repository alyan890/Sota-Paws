import Link from 'next/link';
import { SectionReveal } from '@/components/section-reveal';
import { ServiceIcon } from '@/components/service-icon';
import PricingCard from '@/components/pricing-card';
import { services } from '@/data/site';

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
      <SectionReveal>
        <span className="section-badge">Services & Pricing</span>
        <h1 className="mt-6 font-heading text-5xl leading-tight text-ink md:text-6xl">Clear pricing, calm handling, premium results.</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[rgba(10,33,52,0.72)]">
          Each service is designed for a different level of coat care and comfort support. We always adapt the session to your dog’s needs.
        </p>
      </SectionReveal>

      <SectionReveal className="mt-14 grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.name} className="rounded-[2rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.90)] p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[rgba(10,33,52,0.16)] bg-[rgba(141,184,201,0.32)] text-[rgba(10,33,52,0.92)] shadow-soft">
                  <ServiceIcon serviceName={service.name} className="h-7 w-7" />
                </span>
                <h2 className="font-heading text-3xl text-ink">{service.name}</h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="rounded-full border border-[rgba(199,162,74,0.24)] bg-[rgba(199,162,74,0.16)] px-4 py-2 text-sm font-semibold text-gold">{service.price}</span>
              </div>
            </div>
            <div className="mt-4">
              <PricingCard
                serviceName={service.name}
                startingPrice={service.price}
                pricing={service.pricing}
                description={service.description}
              />
            </div>
          </article>
        ))}
      </SectionReveal>

      <SectionReveal className="mt-16 rounded-[2.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.86)] p-8 shadow-soft md:p-10">
        <h2 className="font-heading text-4xl text-ink">What’s included in every visit</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {['Consultation and coat check', 'Gentle bath and blow dry', 'Nail, ear, and paw care', 'Premium finishing touches'].map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-[rgba(10,33,52,0.12)] bg-[rgba(243,249,252,0.96)] px-5 py-4 text-sm text-[rgba(10,33,52,0.74)]">
              {item}
            </div>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[2.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.86)] p-8 shadow-soft md:flex-row md:items-center">
        <div>
          <h2 className="font-heading text-4xl text-ink">Need the right service for your dog?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgba(10,33,52,0.72)]">Book a consultation and we’ll recommend the best grooming plan based on coat, age, temperament, and health needs.</p>
        </div>
        <Link href="/booking" className="glass-button rounded-full px-7 py-4 text-sm font-semibold text-ink/90 transition hover:text-ink">
          Book a consult
        </Link>
      </SectionReveal>
    </div>
  );
}