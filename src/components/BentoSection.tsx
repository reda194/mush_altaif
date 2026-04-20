'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Users, CalendarDays, Map } from 'lucide-react';
import Link from 'next/link';

export default function BentoSection() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } },
  };

  return (
    <section className="py-12 md:py-16 bg-warm-gray relative" aria-label="خدمات الجمعية">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">اكتشف جمعيتنا</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6">كل ما تحتاجه في مكان واحد</h2>
          <p className="text-lg text-charcoal/60">
            خدمات وبرامج تناسب جميع أفراد المجتمع. سواء كنت محترفاً أو مبتدئاً، مكانك بيننا.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[minmax(180px,auto)] gap-4"
        >
          <motion.div variants={item} className="md:col-span-2 rounded-2xl p-8 bg-charcoal text-white relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-brand/20 text-brand rounded-xl flex items-center justify-center">
                  <Users size={28} aria-hidden="true" />
                </div>
                <span className="text-rose-accent/80 text-xs font-semibold border border-rose-accent/20 px-3 py-1 rounded-full">150 ر.س/سنة</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-3">عضوية المشاة</h3>
                <p className="text-white/50 max-w-md text-sm">
                  انضم إلى مجتمعنا المتنامي واستفد من برامج التدريب المجانية، الخصومات من شركائنا، والمشاركة في البطولات المحلية.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="md:row-span-2 rounded-2xl p-8 bg-warm-white text-charcoal border border-charcoal/5 relative overflow-hidden group transition-shadow hover:shadow-lg hover:shadow-charcoal/5">
            <div className="flex flex-col h-full min-h-[280px] md:min-h-full">
              <div className="w-12 h-12 bg-charcoal text-warm-white rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 leading-snug">شفافية مطلقة وحوكمة</h3>
              <p className="text-charcoal/60 text-sm mb-8 flex-grow">
                نلتزم بأعلى معايير الحوكمة والشفافية. نتيح لك الاطلاع على تقاريرنا المالية وإنجازاتنا بشكل دوري.
              </p>
              <Link href="/governance" className="mt-auto flex items-center gap-2 text-brand font-bold text-sm border-t border-charcoal/5 pt-5 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2">
                <span>تعرف على حوكمتنا</span>
                <ArrowLeft size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-2xl p-6 bg-warm-white text-charcoal border border-charcoal/5 relative overflow-hidden group flex items-center gap-5">
            <div className="w-12 h-12 shrink-0 bg-brand text-white rounded-lg flex items-center justify-center">
              <CalendarDays size={24} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display font-bold mb-1">الفعاليات القادمة</h3>
              <p className="text-charcoal/50 text-sm">ماراثون الطائف السنوي وبرامج المشي الجبلي.</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-2xl p-6 bg-brand text-white relative overflow-hidden group">
            <div className="relative z-10 flex items-center gap-5">
              <div className="w-12 h-12 shrink-0 bg-white/15 rounded-lg flex items-center justify-center">
                <Map size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-0.5">دليل المسارات</h3>
                <p className="text-white/70 text-sm">أجمل مسارات المشي في الطائف.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-8 text-left">
          <Link href="/programs" className="inline-flex items-center gap-2 text-brand font-bold text-sm hover:text-charcoal transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4">
            عرض كل الخدمات
            <ArrowLeft size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
