'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'عبدالله العتيبي',
    role: 'عضو منذ 3 سنوات',
    route: 'مسار الهدا',
    rating: 5,
    text: 'انضمامي لمشاة الطائف كان نقطة تحول في حياتي. لم أخسر الوزن فقط، بل كسبت عائلة ثانية وبيئة محفزة لا مثيل لها.',
  },
  {
    id: 2,
    name: 'سارة خالد',
    role: 'مشاركة في الماراثون',
    route: 'ماراثون الطائف 2024',
    rating: 5,
    text: 'التنظيم والاحترافية في فعاليات الجمعية تضاهي المسابقات العالمية. شكراً لجهودكم في تعزيز الرياضة النسائية في الطائف.',
  },
  {
    id: 3,
    name: 'محمد الزهراني',
    role: 'قائد مسار',
    route: 'مسار الشفا الجبلي',
    rating: 5,
    text: 'طبيعة الطائف ساحرة، واكتشافها مشياً على الأقدام مع هذه النخبة يعطيك طاقة إيجابية تكفيك لأسابيع. أنصح الجميع بالانضمام.',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4" aria-label={`تقييم ${count} من 5 نجوم`}>
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={15} className="text-rose-accent fill-rose-accent" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 bg-warm-gray relative overflow-hidden" aria-label="آراء الأعضاء">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10">
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">آراء المجتمع</span>
          <h2 className="font-display text-h2-fluid font-bold text-charcoal tracking-tight mb-3 md:mb-4">
            قصص نجاح تلهمنا
          </h2>
          <p className="text-charcoal/60 max-w-[55ch]">
            نفخر بكوننا جزءاً من التغيير الإيجابي في حياة أعضائنا. إليك ما يقولونه عن تجربتهم الفعّالة معنا.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-8">
          {/* TODO: Replace with real community member photos from Taif */}
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`bg-warm-white rounded-2xl p-6 md:p-8 border border-charcoal/5 shadow-sm hover:-translate-y-1 transition-transform duration-300 ${
                index === 0 ? 'sm:mt-0' : index === 1 ? 'sm:mt-6' : 'sm:mt-3'
              }`}
            >
              <Quote className="text-brand/20 w-8 h-8 mb-3" aria-hidden="true" />
              <StarRating count={item.rating} />

              <p className="text-charcoal/70 leading-relaxed text-sm md:text-base mb-6">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 border-t border-charcoal/5 pt-5">
                <div
                  className="w-12 h-12 rounded-full bg-brand/10 border-2 border-brand/20 flex items-center justify-center text-brand font-bold text-lg shrink-0"
                  aria-hidden="true"
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-charcoal">{item.name}</h3>
                  <span className="text-xs text-brand font-medium block">{item.role}</span>
                  <span className="text-xs text-charcoal/40 mt-0.5 block">{item.route}</span>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
