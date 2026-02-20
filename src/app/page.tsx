import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import BenefitsSection from '@/components/BenefitsSection';
import BentoSection from '@/components/BentoSection';
import MapSection from '@/components/MapSection';
import TrustSection from '@/components/TrustSection';
import GallerySection from '@/components/GallerySection';
import FAQSection from '@/components/FAQSection';
import NewsSection from '@/components/NewsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* 1. Numbers / Proof  */}
      <StatsSection />
      {/* 2. Educational & Value */}
      <BenefitsSection />
      {/* 3. Services Overview */}
      <BentoSection />
      {/* 4. Practical: Where we are */}
      <MapSection />
      {/* 5. Trust factor */}
      <TrustSection />
      {/* 6. Visual Appeal */}
      <GallerySection />
      {/* 7. Information / Objections Handling */}
      <FAQSection />
      {/* 8. Recent Activities */}
      <NewsSection />
      {/* 9. Social Proof */}
      <TestimonialsSection />
      {/* 10. Final Push */}
      <CTASection />
    </>
  );
}
