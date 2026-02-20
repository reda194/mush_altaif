'use client';

import { motion, Variants } from 'framer-motion';
import { HeartPulse, Brain, UsersRound } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: 'صحة جسدية أفضل',
      description: 'المشي المنتظم يعزز صحة القلب، يحسن الدورة الدموية، ويساعد في الحفاظ على وزن مثالي ورشاقة دائمة.',
      icon: HeartPulse,
      color: 'text-rose-500',
      bg: 'bg-rose-500/10',
    },
    {
      id: 2,
      title: 'صفاء ذهني ونفسي',
      description: 'التواجد في الطبيعة والهواء الطلق يقلل من التوتر، يحسن المزاج، ويزيد من القدرة على التركيز والإبداع.',
      icon: Brain,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      id: 3,
      title: 'تواصل اجتماعي فعّال',
      description: 'فرصة رائعة لبناء علاقات جديدة، تبادل الخبرات، وتكوين صداقات مع أشخاص يشاركونك نفس الاهتمامات.',
      icon: UsersRound,
      color: 'text-brand',
      bg: 'bg-brand/10',
    }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section className="py-16 md:py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">لماذا المشي؟</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">أكثر من مجرد رياضة</h2>
          <p className="text-base md:text-lg text-white/70">
            انضمامك لمشاة الطائف ليس مجرد التزام رياضي، بل هو استثمار حقيقي في جودة حياتك على كافة الأصعدة.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-2"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={benefit.id}
                variants={item}
                className="min-w-[86%] md:min-w-0 shrink-0 snap-start bg-surface/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-surface/10 transition-colors group"
              >
                <div className={`w-16 h-16 rounded-2xl ${benefit.bg} ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3 md:mb-4">{benefit.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
