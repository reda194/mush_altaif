import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const graphikArabic = localFont({
  src: [
    { path: '../../public/fonts/GraphikArabic-Light.ttf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/GraphikArabic-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/GraphikArabic-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/GraphikArabic-Semibold.ttf', weight: '600', style: 'normal' },
    { path: '../../public/fonts/GraphikArabic-Bold.ttf', weight: '700', style: 'normal' },
  ],
  display: 'swap',
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
    <html lang="ar" dir="rtl">
      <body className={`${graphikArabic.className} antialiased flex flex-col min-h-screen`}>
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
