'use client';
/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
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
    }
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">آراء المجتمع</span>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal tracking-tight mb-4">قصص نجاح تلهمنا</h2>
          <p className="text-charcoal/60 text-lg">
            نفخر بكوننا جزءاً من التغيير الإيجابي في حياة أعضائنا. إليك ما يقولونه عن تجربتهم الفعّالة معنا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-surface-dark relative shadow-xl shadow-brand/5 hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 left-6 text-brand/20 w-12 h-12" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand/20"
                />
                <div>
                  <h4 className="font-bold text-charcoal text-lg">{item.name}</h4>
                  <span className="text-sm text-brand font-medium">{item.role}</span>
                </div>
              </div>
              
              <p className="text-charcoal/70 leading-relaxed relative z-10">
                &quot;{item.text}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
