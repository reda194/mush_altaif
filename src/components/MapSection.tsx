'use client';
/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

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
          
          <button className="glass bg-white hover:bg-white/80 text-brand px-6 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-md border border-charcoal/5 flex items-center gap-2">
            <Navigation size={18} />
            <span>عرض كل المسارات</span>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-brand/10 border border-charcoal/10"
        >
          {/* Aesthetic Placeholder for Map - In a real app, this would be a Google Map or Mapbox iframe */}
          <div className="absolute inset-0 bg-charcoal-light/5">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
              alt="Map Background" 
              className="w-full h-full object-cover opacity-30 grayscale mix-blend-multiply"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl max-w-sm text-center shadow-xl border border-white/40">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-brand/20 rounded-full animate-ping"></div>
                <MapPin className="text-brand" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">ممشى الردف الجديد</h3>
              <p className="text-charcoal/60 text-sm mb-6">نقطة التجمع الرئيسية للتدريبات الصباحية كل يوم جمعة في تمام الساعة 6:00 صباحاً.</p>
              <button className="w-full bg-charcoal text-white py-3 rounded-xl font-bold hover:bg-brand transition-colors">
                احصل على الاتجاهات
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
