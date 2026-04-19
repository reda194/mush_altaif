'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ArrowUpLeft, User } from 'lucide-react';
import Link from 'next/link';

const news = [
  {
    id: 1,
    title: 'انطلاق ماراثون الطائف السنوي بمشاركة أكثر من 5000 شخص',
    category: 'أخبار الجمعية',
    date: '15 أكتوبر 2026',
    author: 'إدارة الإعلام',
    image: 'https://images.unsplash.com/photo-1552674605-15c2145eba11?q=80&w=800&auto=format&fit=crop',
    summary: 'في أجواء مليئة بالحماس والروح الرياضية، انطلق ماراثون الطائف السنوي الذي تنظمه الجمعية برعاية أمانة الطائف ووزارة الرياضة.',
  },
  {
    id: 2,
    title: 'تدشين مسار "الشفاء" الجبلي الجديد للمحترفين',
    category: 'مسارات جديدة',
    date: '02 نوفمبر 2026',
    author: 'فريق الاستكشاف',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    summary: 'ضمن خطتها التوسعية، تعلن الجمعية عن افتتاح مسار الشفاء الجبلي الذي يمتد لـ 12 كيلومتراً وسط غابات العرعر الخلابة.',
  },
  {
    id: 3,
    title: 'ورشة عمل: التغذية السليمة لرياضيي المشي والهايكنج',
    category: 'تثقيف صحي',
    date: '20 نوفمبر 2026',
    author: 'اللجنة الطبية',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop',
    summary: 'ندعوكم لحضور الورشة التثقيفية المجانية حول أفضل الممارسات الغذائية لبناء الطاقة وتحسين الاستشفاء العضلي بعد المسافات الطويلة.',
  },
];

export default function NewsSection() {
  return (
    <section className="py-12 md:py-16 bg-warm-white relative overflow-hidden" aria-label="آخر الأخبار">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">المركز الإعلامي</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-charcoal mb-4">أحدث الأخبار والفعاليات</h2>
            <p className="text-charcoal/70 text-lg">
              ابقَ على اطلاع دائم بآخر مستجدات الجمعية، إعلانات المسارات الجديدة، والبرامج التثقيفية القادمة.
            </p>
          </div>

          <Link href="/news" className="flex items-center gap-2 text-charcoal font-bold hover:text-brand transition-colors group pb-2 border-b-2 border-transparent hover:border-brand shrink-0 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4">
            <span>تصفح كل الأخبار</span>
            <ArrowUpLeft size={20} className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => {
            const isFirst = index === 0;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-warm-gray rounded-2xl overflow-hidden border border-charcoal/5 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col ${isFirst ? 'md:mt-0' : 'md:mt-8'}`}
              >
                <div className={`relative overflow-hidden ${isFirst ? 'h-56' : 'h-44'}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-warm-white/90 px-3 py-1.5 rounded-full text-xs font-bold text-brand">
                    {item.category}
                  </div>
                </div>

                <div className={`p-6 flex flex-col flex-grow ${isFirst ? 'md:p-8' : ''}`}>
                  <div className="flex items-center gap-4 text-xs font-medium text-charcoal/50 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-brand" aria-hidden="true" />
                      <time>{item.date}</time>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-charcoal/20" aria-hidden="true" />
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-brand" aria-hidden="true" />
                      <span>{item.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-charcoal leading-tight mb-3 group-hover:text-brand transition-colors line-clamp-2 font-display">
                    {item.title}
                  </h3>

                  <p className="text-charcoal/60 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.summary}
                  </p>

                  <div className="mt-auto pt-4 border-t border-charcoal/5">
                    <Link href="/news" className="text-brand font-bold text-sm flex items-center gap-1.5 group/btn focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2">
                      <span>اقرأ المزيد</span>
                      <ArrowUpLeft size={16} className="group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
