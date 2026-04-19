'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { Camera, ChevronRight, ChevronLeft, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'مسار الهدا',
    distance: '5 كم',
    level: 'متوسط',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'مسار الشفا الرياضي',
    distance: '8 كم',
    level: 'متقدم',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'ممشى الردف',
    distance: '3 كم',
    level: 'سهل',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'ممشى السيل المفتوح',
    distance: '10 كم',
    level: 'متقدم',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800&auto=format&fit=crop',
  },
];

export default function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: 'rtl', align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 md:py-16 bg-warm-white relative" aria-label="معرض مسارات المشي" role="region">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6 md:mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand/10 text-brand rounded-xl flex items-center justify-center">
              <Camera size={20} aria-hidden="true" />
            </div>
            <span className="text-brand font-bold tracking-wider text-sm uppercase">معرض المسارات</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal tracking-tight">اكتشف طبيعة الطائف</h2>
        </div>

        <div className="flex gap-3 mt-6 md:mt-0" dir="ltr">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="الشريحة السابقة"
            className="w-11 h-11 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal hover:bg-brand hover:text-white hover:border-brand transition-colors disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="الشريحة التالية"
            className="w-11 h-11 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal hover:bg-brand hover:text-white hover:border-brand transition-colors disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden px-4 md:px-6 pb-4 md:pb-12" ref={emblaRef} dir="rtl">
        <div className="flex -ml-4 md:-ml-6" style={{ touchAction: 'pan-y' }}>
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-[0_0_87%] min-w-0 md:flex-[0_0_40%] lg:flex-[0_0_30%] pl-4 md:pl-6"
            >
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg shadow-charcoal/10">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 87vw, (max-width: 1024px) 40vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-3">{slide.title}</h3>
                  <div className="flex items-center gap-3 text-white/80 text-xs md:text-sm font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} aria-hidden="true" /> ممشى ورياضة
                    </span>
                    <span className="bg-brand/80 px-3 py-1 rounded-full text-white">
                      {slide.distance}
                    </span>
                    <span className="border border-white/30 px-3 py-1 rounded-full text-white">
                      {slide.level}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
