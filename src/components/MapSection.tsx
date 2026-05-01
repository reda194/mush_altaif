'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import Link from 'next/link';
import MapEmbed from '@/components/ui/MapEmbed';
import { TAIF_LOCATION } from '@/lib/constants';

export default function MapSection() {
  return (
    <section className="py-12 md:py-16 bg-warm-white relative overflow-hidden text-charcoal" aria-label="مواقع مسارات المشي">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">مواقعنا</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">أين نتجمع؟</h2>
            <p className="text-charcoal/70 text-lg">
              اختر المسار الأقرب إليك وانضم إلى تدريباتنا الأسبوعية في أجمل حدائق ومماشي الطائف.
            </p>
          </div>

          <Link
            href="/trails"
            className="bg-charcoal hover:bg-charcoal-light text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2 shrink-0 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
          >
            <Navigation size={18} aria-hidden="true" />
            <span>عرض كل المسارات</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-2xl overflow-hidden shadow-lg shadow-charcoal/10 border border-charcoal/10"
        >
          <MapEmbed
            lat={TAIF_LOCATION.lat}
            lng={TAIF_LOCATION.lng}
            zoom={12}
            title="ممشي مصلي العيد بالخالدية"
            markerLabel="ممشي مصلي العيد بالخالدية"
          />

          <div className="absolute bottom-6 right-6 left-6 md:left-auto md:right-6 md:w-80">
            <div className="bg-warm-white/95 p-6 rounded-2xl shadow-lg border border-charcoal/10">
              <div className="w-10 h-10 bg-rose-accent/10 rounded-full flex items-center justify-center mb-3">
                <MapPin className="text-rose-accent" size={20} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold mb-1">ممشي مصلي العيد بالخالدية</h3>
              <p className="text-charcoal/60 text-sm mb-4">نقطة التجمع الرئيسية للتدريبات الصباحية في محافظة الطائف.</p>
              <Link
                href="/trails"
                className="block w-full bg-charcoal hover:bg-brand text-white py-2.5 rounded-xl font-bold transition-colors text-center text-sm focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
              >
                عرض المسارات
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
