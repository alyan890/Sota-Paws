import Image from 'next/image';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[rgba(10,33,52,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(231,242,248,0.72))] backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1.5fr,1fr,1fr] md:px-10">
        <div>
          <Image
            src="/images/logo.png"
            alt="Sota Paws Dog Spa logo"
            width={220}
            height={74}
            className="h-auto w-[180px] object-contain"
          />
          <p className="mt-4 max-w-md text-sm leading-7 text-[rgba(10,33,52,0.72)]">
            Premium grooming with a dark, grounded, slightly goofy energy for pups who need trust, comfort, and a happy finish.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgba(10,33,52,0.66)]">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[rgba(10,33,52,0.78)]">
            <Link href="/services">Services & Pricing</Link>
            <Link href="/booking">Book Now</Link>
            <Link href="/gallery">Gallery</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgba(10,33,52,0.66)]">Contact</p>
          <div className="mt-4 space-y-2 text-sm text-[rgba(10,33,52,0.78)]">
            <p>hello@sotapaws.com</p>
            <p>(555) 018-PAWS</p>
            <p>Mon - Sat, 9am - 6pm</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[rgba(10,33,52,0.12)] px-6 py-5 text-center text-xs uppercase tracking-[0.24em] text-[rgba(10,33,52,0.46)] md:px-10">
        Lighter vibe. Goofier dogs. Better grooms.
      </div>
    </footer>
  );
}