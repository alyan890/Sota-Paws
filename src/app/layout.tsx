import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';

const headingFont = Poppins({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const bodyFont = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const accentFont = Poppins({
  variable: '--font-accent',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Sota Paws Dog Spa',
  description: 'Premium dog grooming and spa services for senior and anxious dogs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable} ${accentFont.variable} font-body antialiased`}>
        <SiteNav />
        <main className="page-shell pt-24">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}