import { DaySmartBooking } from '@/components/day-smart-booking';
import { SectionReveal } from '@/components/section-reveal';

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
      <SectionReveal>
        <span className="section-badge">Booking</span>
        <h1 className="mt-6 font-heading text-5xl leading-tight text-ink md:text-6xl">Book a calm, premium grooming session.</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[rgba(10,33,52,0.72)]">
          Tell us about your dog, your concerns, and the experience you want. We’ll review the details and follow up with the best appointment option.
        </p>
      </SectionReveal>

      <SectionReveal className="mt-14 grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
        <div className="rounded-[2.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.86)] p-8 shadow-soft">
          <h2 className="font-heading text-4xl text-ink">What to include</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[rgba(10,33,52,0.74)]">
            <p>Choose your service and preferred time in the DaySmart booking window.</p>
            <p>Add your dog’s age, breed, and any behavioral or medical notes so we can prepare the right pace and setup.</p>
            <p>Booking is handled securely through DaySmart, and we’ll follow up to confirm your appointment.</p>
          </div>
        </div>

        <DaySmartBooking />
      </SectionReveal>
    </div>
  );
}