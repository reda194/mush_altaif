'use client';
/* eslint-disable @next/next/no-img-element */

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
    image: 'https://images.unsplash.com/photo-1594911772125-07fdafcfa6b8?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'مسار الشفا الرياضي',
    distance: '8 كم',
    level: 'متقدم',
    image: 'https://images.unsplash.com/photo-1579545465593-79daca78c7c9?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'ممشى الردف',
    distance: '3 كم',
    level: 'سهل',
    image: 'https://images.unsplash.com/photo-1620021663953-272da3bea3e4?q=80&w=2672&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'ممشى السيل المفتوح',
    distance: '10 كم',
    level: 'متقدم',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2673&auto=format&fit=crop',
  }
];

export default function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: 'rtl', align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: true })
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
    <section className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand/10 text-brand rounded-xl flex items-center justify-center">
              <Camera size={20} />
            </div>
            <span className="text-brand font-bold tracking-wider text-sm uppercase">معرض المسارات</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">اكتشف طبيعة الطائف</h2>
        </div>
        
        <div className="flex gap-4 mt-6 md:mt-0" dir="ltr">
          <button 
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal hover:bg-brand hover:text-white hover:border-brand transition-colors disabled:opacity-50"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal hover:bg-brand hover:text-white hover:border-brand transition-colors disabled:opacity-50"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden px-6 pb-12" ref={emblaRef} dir="rtl">
        <div className="flex -ml-4 md:-ml-6" style={{ touchAction: 'pan-y' }}>
          {slides.map((slide, index) => (
            <motion.div 
              key={slide.id} 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-[0_0_85%] min-w-0 md:flex-[0_0_40%] lg:flex-[0_0_30%] pl-4 md:pl-6"
            >
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white text-2xl font-bold mb-3">{slide.title}</h3>
                  <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} /> ممشى ورياضة
                    </span>
                    <span className="bg-brand/80 px-3 py-1 rounded-full text-white backdrop-blur-sm">
                      {slide.distance}
                    </span>
                    <span className="border border-white/30 px-3 py-1 rounded-full text-white backdrop-blur-sm">
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
