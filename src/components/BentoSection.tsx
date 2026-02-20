'use client';

import { motion } from 'framer-motion';
import { ArrowUpLeft, ShieldCheck, Users, CalendarDays, Map } from 'lucide-react';

export default function BentoSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="py-24 bg-charcoal text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">اكتشف جمعيتنا</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">كل ما تحتاجه في مكان واحد</h2>
            <p className="text-lg text-white/70">
              نقدم مجموعة متكاملة من الخدمات والبرامج التي تناسب جميع أفراد المجتمع. سواء كنت محترفاً أو مبتدئاً، مكانك بيننا!
            </p>
          </div>
          <button className="mt-8 md:mt-0 flex items-center gap-2 text-brand hover:text-white transition-colors group">
            <span className="font-bold underline decoration-2 underline-offset-8">عرض كل الخدمات</span>
            <ArrowUpLeft size={20} className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]"
        >
          {/* Card 1: Membership (Large) */}
          <motion.div variants={item} className="md:col-span-2 md:row-span-1 rounded-3xl p-8 bg-gradient-to-br from-charcoal-light to-charcoal border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand/20 transition-colors duration-500"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-14 h-14 bg-brand/20 text-brand rounded-2xl flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">عضوية المشاة</h3>
                <p className="text-white/60 max-w-md">
                  انضم إلى مجتمعنا المتنامي واستفد من برامج التدريب المجانية، الخصومات من شركائنا، والمشاركة في البطولات المحلية.
                </p>
              </div>
            </div>
            <ArrowUpLeft className="absolute bottom-8 left-8 text-white/20 group-hover:text-brand group-hover:scale-110 transition-all duration-300" size={32} />
          </motion.div>

          {/* Card 2: Governance (Tall) */}
          <motion.div variants={item} className="md:col-span-1 md:row-span-2 rounded-3xl p-8 bg-surface text-charcoal border border-surface-dark relative overflow-hidden group hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500">
            <div className="flex flex-col h-full">
              <div className="w-14 h-14 bg-charcoal text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-3xl tracking-tight leading-tight font-bold mb-4">شفافية<br/>مطلقة<br/>وحوكمة.</h3>
              <p className="text-charcoal/70 mb-8 flex-grow">
                نلتزم بأعلى معايير الحوكمة والشفافية. نتيح لك الاطلاع على تقاريرنا المالية وإنجازاتنا بشكل دوري.
              </p>
              <div className="mt-auto flex items-center justify-between text-brand font-bold border-t border-charcoal/10 pt-6">
                <span>تعرف على حوكمتنا</span>
                <ArrowUpLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Events (Small) */}
          <motion.div variants={item} className="md:col-span-1 md:row-span-1 rounded-3xl p-8 bg-charcoal-light border border-white/5 relative overflow-hidden group">
             <div className="relative z-10 flex gap-6 h-full items-center">
              <div className="w-16 h-16 shrink-0 bg-brand text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <CalendarDays size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">الفعاليات القادمة</h3>
                <p className="text-white/60 text-sm">ماراثون الطائف السنوي وبرامج المشي الجبلي.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Tracks (Small) */}
          <motion.div variants={item} className="md:col-span-1 md:row-span-1 rounded-3xl p-8 bg-brand text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mixed-blend-overlay mix-blend-overlay"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <Map size={32} className="opacity-80" />
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md">حصري</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">دليل المسارات</h3>
                <p className="text-white/80 opacity-90 text-sm">اكتشف أجمل مسارات المشي وأكثرها أماناً في الطائف.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
