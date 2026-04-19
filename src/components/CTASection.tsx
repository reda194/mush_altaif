'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-warm-white relative overflow-hidden" aria-label="دعوة للانضمام">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-brand rounded-2xl p-6 md:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center">
            <span className="bg-white/20 px-4 py-1.5 rounded-lg text-sm font-bold mb-6 md:mb-8 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-accent shrink-0" aria-hidden="true" />
              باب التسجيل مفتوح الآن
            </span>

            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              مستعد لبدء رحلتك الصحية معنا؟
            </h2>

            <p className="text-white/90 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
              انضم إلى آلاف الأعضاء المسجلين في جمعية مشاة الطائف وابدأ أولى خطواتك نحو أسلوب حياة رياضي، مجتمعي، ومستدام.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/membership"
                className="bg-charcoal text-warm-white px-8 py-4 rounded-xl font-bold transition-colors hover:bg-charcoal-light flex items-center justify-center gap-2 group text-lg focus-visible:outline-2 focus-visible:outline-charcoal focus-visible:outline-offset-2"
              >
                <span>سجل كعضو الآن</span>
                <ArrowLeft size={20} className="transform transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold transition-colors hover:bg-white/10 text-lg focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
