import type { Metadata, Viewport } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'مشاة الطائف | نحو مجتمع حيوي',
  description: 'جمعية مشاة الطائف للرياضة المجتمعية. نهدف لخلق مجتمع رياضي حيوي.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="antialiased flex flex-col min-h-screen">
        <Providers>
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
