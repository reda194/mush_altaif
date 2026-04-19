'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import Link from 'next/link';
import MapEmbed from '@/components/ui/MapEmbed';
import { TAIF_LOCATION } from '@/lib/constants';

export default function MapSection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden text-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="max-w-2xl text-center md:text-right">
            <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">مواقعنا</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">أين نتجمع؟</h2>
            <p className="text-charcoal/70">
              اختر المسار الأقرب إليك وانضم إلى تدريباتنا الأسبوعية في أجمل حدائق ومماشي الطائف.
            </p>
          </div>

          <Link href="/trails" className="glass bg-white hover:bg-white/80 text-brand px-6 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-md border border-charcoal/5 flex items-center gap-2">
            <Navigation size={18} />
            <span>عرض كل المسارات</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand/10 border border-charcoal/10"
        >
          <MapEmbed
            lat={TAIF_LOCATION.lat}
            lng={TAIF_LOCATION.lng}
            zoom={12}
            title="ممشى الردف - الطائف"
            markerLabel="ممشى الردف الجديد"
          />

          <div className="absolute bottom-6 right-6 left-6 md:left-auto md:right-6 md:w-80">
            <div className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/40">
              <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mb-3 relative">
                <div className="absolute inset-0 bg-brand/20 rounded-full animate-ping"></div>
                <MapPin className="text-brand" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-1">ممشى الردف الجديد</h3>
              <p className="text-charcoal/60 text-sm mb-4">نقطة التجمع الرئيسية للتدريبات الصباحية في محافظة الطائف.</p>
              <Link href="/trails" className="block w-full bg-charcoal text-white py-2.5 rounded-xl font-bold hover:bg-brand transition-colors text-center text-sm">
                عرض المسارات
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
