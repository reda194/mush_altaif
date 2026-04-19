'use client';

import { motion, Variants } from 'framer-motion';
import { HeartPulse, Brain, UsersRound } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: 'صحة جسدية أفضل',
      description: 'المشي المنتظم يعزز صحة القلب، يحسن الدورة الدموية، ويساعد في الحفاظ على وزن مثالي.',
      icon: HeartPulse,
      detail: 'تقليل خطر الأمراض المزمنة بنسبة 30%',
    },
    {
      id: 2,
      title: 'صفاء ذهني',
      description: 'التواجد في الطبيعة يقلل التوتر، يحسن المزاج، ويزيد من التركيز والإبداع.',
      icon: Brain,
      detail: 'تخفيض الكورتيزول عبر المشي 30 دقيقة يومياً',
    },
    {
      id: 3,
      title: 'تواصل اجتماعي',
      description: 'فرصة لبناء علاقات جديدة وتكوين صداقات مع من يشاركونك شغف المشي.',
      icon: UsersRound,
      detail: 'أكثر من 3,500 عضو يسيرون معاً أسبوعياً',
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80 } },
  };

  return (
    <section className="py-12 md:py-16 bg-charcoal text-white relative overflow-hidden" aria-label="فوائد المشي">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-right mb-8 md:mb-12 max-w-xl">
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">لماذا المشي؟</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">أكثر من مجرد رياضة</h2>
          <p className="text-base md:text-lg text-white/60">
            انضمامك لمشاة الطائف استثمار حقيقي في جودة حياتك.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-3 gap-4 md:gap-6"
        >
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                variants={item}
                className={`border border-white/8 rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors group ${i === 0 ? 'sm:mt-0' : i === 1 ? 'sm:mt-8' : 'sm:mt-4'}`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm mb-4">
                  {benefit.description}
                </p>
                <p className="text-brand text-sm font-semibold border-t border-white/5 pt-4">
                  {benefit.detail}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
