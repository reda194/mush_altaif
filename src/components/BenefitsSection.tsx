'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { HeartPulse, Brain, UsersRound } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'صحة جسدية أفضل',
    description: 'المشي المنتظم يعزز صحة القلب، يحسن الدورة الدموية، ويساعد في الحفاظ على وزن مثالي لجسم أكثر حيوية.',
    icon: HeartPulse,
    detail: 'تقليل خطر الأمراض المزمنة بنسبة 30%',
    illustration: '/undraw_bike-ride_ba0o.svg',
    illustrationAlt: 'رسم توضيحي لشخص يركب دراجة يرمز للنشاط البدني',
    visualBg: 'bg-brand/5',
  },
  {
    id: 2,
    title: 'صفاء ذهني',
    description: 'التواجد في الطبيعة يقلل التوتر، يحسن المزاج، ويزيد من التركيز والإبداع. جبال الطائف علاج طبيعي.',
    icon: Brain,
    detail: 'تخفيض الكورتيزول عبر المشي 30 دقيقة يومياً',
    illustration: '/undraw_fitness-stats_bd09.svg',
    illustrationAlt: 'رسم توضيحي لإحصائيات اللياقة البدنية',
    visualBg: 'bg-rose-accent/5',
  },
  {
    id: 3,
    title: 'تواصل اجتماعي',
    description: 'فرصة لبناء علاقات حقيقية وتكوين صداقات مع من يشاركونك شغف المشي والطبيعة في مدينتك.',
    icon: UsersRound,
    detail: 'أكثر من 3,500 عضو يسيرون معاً أسبوعياً',
    illustration: '/undraw_smartwatch-map_3u18.svg',
    illustrationAlt: 'رسم توضيحي لساعة ذكية وخريطة ترمز للتواصل والمسارات',
    visualBg: 'bg-charcoal/5',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } },
};

export default function BenefitsSection() {
  return (
    <section
      className="py-12 md:py-20 bg-[oklch(0.97_0.005_155)] text-charcoal relative overflow-hidden"
      aria-label="فوائد المشي"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16 max-w-xl">
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">لماذا المشي؟</span>
          <h2 className="font-display text-h2-fluid font-bold tracking-tight mb-4">
            أكثر من مجرد رياضة
          </h2>
          <p className="text-charcoal/60 max-w-[55ch]">
            انضمامك لمشاة الطائف استثمار حقيقي في جودة حياتك الجسدية، الذهنية، والاجتماعية.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-8 md:space-y-12"
        >
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={benefit.id}
                variants={rowVariants}
                className="grid md:grid-cols-2 gap-6 md:gap-12 items-center"
              >
                {/* Text content — DOM order first for screen readers */}
                <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                  <div className="w-14 h-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5">
                    <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-h3-fluid font-bold mb-3 text-charcoal">
                    {benefit.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed mb-5 max-w-[52ch]">
                    {benefit.description}
                  </p>
                  <p className="text-brand font-bold text-sm border-r-2 border-brand pr-4">
                    {benefit.detail}
                  </p>
                </div>

                {/* Visual panel — SVG illustration */}
                <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                  <div
                    className={`${benefit.visualBg} rounded-2xl aspect-[4/3] flex items-center justify-center p-8 md:p-12 relative overflow-hidden border border-charcoal/5`}
                  >
                    <Image
                      src={benefit.illustration}
                      alt={benefit.illustrationAlt}
                      width={400}
                      height={300}
                      className="w-full h-auto max-h-[280px] object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
