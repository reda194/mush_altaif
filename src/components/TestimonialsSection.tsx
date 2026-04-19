'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'عبدالله العتيبي',
    role: 'عضو منذ 3 سنوات',
    text: 'انضمامي لمشاة الطائف كان نقطة تحول في حياتي. لم أخسر الوزن فقط، بل كسبت عائلة ثانية وبيئة محفزة لا مثيل لها.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'سارة خالد',
    role: 'مشاركة في الماراثون',
    text: 'التنظيم والاحترافية في فعاليات الجمعية تضاهي المسابقات العالمية. شكراً لجهودكم في تعزيز الرياضة النسائية في الطائف.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'محمد الزهراني',
    role: 'قائد مسار',
    text: 'طبيعة الطائف ساحرة، واكتشافها مشياً على الأقدام مع هذه النخبة يعطيك طاقة إيجابية تكفيك لأسابيع. أنصح الجميع بالانضمام.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 bg-warm-gray relative overflow-hidden" aria-label="آراء الأعضاء">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10">
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">آراء المجتمع</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal tracking-tight mb-3 md:mb-4">قصص نجاح تلهمنا</h2>
          <p className="text-charcoal/60 text-base md:text-lg max-w-xl">
            نفخر بكوننا جزءاً من التغيير الإيجابي في حياة أعضائنا. إليك ما يقولونه عن تجربتهم الفعّالة معنا.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`bg-warm-white rounded-2xl p-6 md:p-8 border border-charcoal/5 shadow-sm hover:-translate-y-1 transition-transform duration-300 ${index === 0 ? 'sm:mt-0' : index === 1 ? 'sm:mt-6' : 'sm:mt-3'}`}
            >
              <Quote className="text-brand/20 w-10 h-10 mb-4" aria-hidden="true" />

              <div className="flex items-center gap-4 mb-5 md:mb-6">
                <Image
                  src={item.avatar}
                  alt={`صورة ${item.name}`}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand/20"
                />
                <div>
                  <h3 className="font-bold text-charcoal text-lg">{item.name}</h3>
                  <span className="text-sm text-brand font-medium">{item.role}</span>
                </div>
              </div>

              <p className="text-charcoal/70 leading-relaxed text-sm md:text-base">
                &ldquo;{item.text}&rdquo;
              </p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
