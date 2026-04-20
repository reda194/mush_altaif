'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setHasScrolled(true);
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={ref}
      aria-label="البطل"
      className="relative min-h-[100svh] md:min-h-screen py-24 md:py-0 flex items-center justify-center overflow-hidden bg-charcoal"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal z-10" />
        <Image
          src="/images/members-group.jpeg"
          alt="أعضاء جمعية مشاة الطائف في أحد مسارات جبال الطائف"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="relative z-20 text-right px-4 md:px-6 max-w-4xl mx-auto flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-2 rounded-lg bg-brand/20 border border-brand/30 text-brand text-sm font-semibold tracking-wide"
        >
          أول جمعية مشي في المنطقة الغربية
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-white mb-6 leading-[1.15] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 5vw + 1rem, 4.5rem)' }}
        >
          نحو مجتمع حيوي
          <br />
          <span className="text-brand">خطوة بخطوة</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed"
        >
          نجمع عشاق المشي والطبيعة في مسارات الطائف الخلابة لنعزز جودة الحياة ونبني مجتمعاً صحياً ومستداماً.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
        >
          <Link
            href="/membership"
            className="bg-brand hover:bg-brand-warm text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 group text-lg focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            <span>انضم كعضو</span>
            <ArrowLeft size={20} className="transform transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          </Link>

          <Link
            href="/contact"
            className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold transition-colors hover:bg-white/10 text-lg focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            تواصل معنا
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator — fades out after first scroll */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScrolled ? 0 : 1 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] as const, delay: hasScrolled ? 0 : 1.2 }}
      >
        <span className="text-white/40 text-[11px] font-medium tracking-[0.2em] uppercase">تمرير</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: [0.25, 1, 0.5, 1] as const,
            times: [0, 0.45, 1],
          }}
        >
          <ChevronDown size={22} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
