'use client';
/* eslint-disable @next/next/no-img-element */

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] md:min-h-screen py-24 md:py-0 flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Video Placeholder (Since we don't have a real video, we use a CSS gradient with animated pattern or a high-quality image placeholder) */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal z-10" />
        <img 
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2670&auto=format&fit=crop" 
          alt="Hiking in nature" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 text-center px-4 md:px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-4 md:mb-6 px-4 py-1.5 rounded-full border border-white/20 glass bg-white/5 text-white/90 text-sm font-medium tracking-wide backdrop-blur-md"
        >
          جمعية المشاة الأولى في الطائف
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight"
        >
          نحو مجتمع حيوي.. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
            خطوة بخطوة
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl text-center leading-relaxed"
        >
          نجمع عشاق المشي والطبيعة في مسارات الطائف الخلابة لنعزز جودة الحياة ونبني مجتمعاً صحياً ومستداماً.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
        >
          <button className="glass bg-brand/90 hover:bg-brand text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,166,81,0.4)] border border-brand/50 flex items-center justify-center gap-2 group text-lg">
            <span>انضم كعضو</span>
            <ArrowLeft size={20} className="transform transition-transform group-hover:-translate-x-1" />
          </button>
          
          <button className="glass bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 border border-white/20 text-lg">
            ادعم مبادراتنا
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">اكتشف المزيد</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 w-full h-1/2 bg-brand"
          />
        </div>
      </motion.div>
    </section>
  );
}
