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
            Premium grooming for pups who need trust, comfort, and a happy finish.
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
            <p>Sotapawsdogspa@gmail.com</p>
            <p><a href="tel:763-345-2809">763-345-2809</a></p>
            <p>Tuesday–Friday: 9:00 AM – 4:00 PM</p>
            <p>Saturday: 9:00 AM – 2:00 PM</p>
            <p>Hours may vary by appointment.</p>
            <p>9030 Lyndale Ave Bloomington MN 55420</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[rgba(10,33,52,0.12)] px-6 py-5 text-center text-xs uppercase tracking-[0.24em] text-[rgba(10,33,52,0.46)] md:px-10">
        Land of 10,000 Wags
      </div>
    </footer>
  );
}