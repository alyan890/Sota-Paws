import Image from 'next/image';
import { SectionReveal } from '@/components/section-reveal';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
      <SectionReveal className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
        <div>
          <span className="section-badge">About us</span>
          <h1 className="mt-6 font-heading text-5xl leading-tight text-ink md:text-6xl">A family-led spa built on patience, trust, and beautiful results.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(10,33,52,0.72)]">
            Sota Paws was created by a mother-daughter team who wanted a better grooming experience for dogs that need a little more reassurance.
            We believe premium service should still feel warm, familiar, and deeply personal.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.90)] p-4 shadow-lift">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[rgba(10,33,52,0.12)] bg-[linear-gradient(180deg,rgba(38,30,24,0.98),rgba(22,18,15,0.98))]">
            <Image
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1400&q=80"
              alt="Golden retriever enjoying a calm grooming environment"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="mt-20 grid gap-5 md:grid-cols-3">
        {[
          ['The promise', 'Every appointment starts with listening, not rushing.'],
          ['The process', 'We adapt to mobility, anxiety, and health notes without losing elegance.'],
          ['The result', 'Dogs leave looking polished, but more importantly, feeling respected.'],
        ].map(([title, body]) => (
          <article key={title} className="rounded-[2rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.90)] p-7 shadow-soft">
            <h2 className="font-heading text-3xl text-ink">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-[rgba(10,33,52,0.72)]">{body}</p>
          </article>
        ))}
      </SectionReveal>
    </div>
  );
}