import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-cairo',
  display: 'swap',
});

const graphikArabic = localFont({
  src: [
    { path: '../../public/fonts/GraphikArabic-Light.ttf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/GraphikArabic-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/GraphikArabic-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/GraphikArabic-Semibold.ttf', weight: '600', style: 'normal' },
    { path: '../../public/fonts/GraphikArabic-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-graphik',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | نحو مجتمع حيوي`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${graphikArabic.variable}`} suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen">
        <Providers>
          <Header />
          <div id="main-content" className="flex-grow">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
