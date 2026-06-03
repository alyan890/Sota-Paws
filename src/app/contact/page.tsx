import { SectionReveal } from '@/components/section-reveal';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
      <SectionReveal>
        <span className="section-badge">Contact</span>
        <h1 className="mt-6 font-heading text-5xl leading-tight text-ink md:text-6xl">Let’s talk about your dog’s next spa day.</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[rgba(10,33,52,0.72)]">
          Reach out for questions, scheduling support, or guidance on the best service for a senior or anxious dog.
        </p>
      </SectionReveal>

      <SectionReveal className="mt-14 grid gap-5 lg:grid-cols-[1fr,0.9fr]">
        <div className="rounded-[2.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.86)] p-8 shadow-soft">
          <h2 className="font-heading text-4xl text-ink">Contact details</h2>
          <div className="mt-6 space-y-4 text-base text-[rgba(10,33,52,0.74)]">
            <p>Email: Sotapawsdogspa@gmail.com</p>
            <p>Phone: (555) 018-PAWS</p>
            <p>Hours: Monday through Saturday, 9am - 6pm</p>
            <p>Service area: Premium neighborhood grooming and spa visits by appointment.</p>
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(243,249,252,0.96)] p-8 shadow-soft">
          <h2 className="font-heading text-4xl text-ink">Quick note</h2>
          <p className="mt-4 text-sm leading-7 text-[rgba(10,33,52,0.72)]">
            For senior dogs, anxious dogs, or dogs with vet instructions, include the details in the booking form so we can prepare the right pace and setup.
          </p>
        </div>
      </SectionReveal>
    </div>
  );
}