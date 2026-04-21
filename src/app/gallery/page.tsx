import Image from 'next/image';
import { SectionReveal } from '@/components/section-reveal';
import { galleryImages } from '@/data/site';

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
      <SectionReveal>
        <span className="section-badge">Gallery</span>
        <h1 className="mt-6 font-heading text-5xl leading-tight text-ink md:text-6xl">Golden Retriever variations, lighter studio looks, and cleaner frames.</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[rgba(10,33,52,0.72)]">
          A visual snapshot of the warm, premium atmosphere with more retriever portraits, poses, and post-groom variations.
        </p>
      </SectionReveal>

      <SectionReveal className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {galleryImages.map((image, index) => (
          <article key={image.alt} className={`overflow-hidden rounded-[2rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.90)] shadow-soft ${index === 0 ? 'md:col-span-2 xl:col-span-2' : ''}`}>
            <div className="relative aspect-[4/3] bg-[linear-gradient(180deg,rgba(38,30,24,0.98),rgba(22,18,15,0.98))]">
              <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-700 hover:scale-105" />
            </div>
          </article>
        ))}
      </SectionReveal>
    </div>
  );
}