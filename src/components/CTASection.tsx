'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-brand rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-brand/20"
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-md mb-8 inline-block">
              باب التسجيل مفتوح الآن
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              مستعد لبدء رحلتك الصحية معنا؟
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              انضم إلى آلاف الأعضاء المسجلين في جمعية مشاة الطائف وابدأ أولى خطواتك نحو أسلوب حياة رياضي، مجتمعي، ومستدام.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-white text-brand px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 group text-lg">
                <span>سجل كعضو الآن</span>
                <ArrowLeft size={20} className="transform transition-transform group-hover:-translate-x-1" />
              </button>
              
              <button className="bg-black/10 hover:bg-black/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 text-lg">
                تواصل معنا
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
