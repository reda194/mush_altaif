'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, User } from 'lucide-react';
import Link from 'next/link';

const news = [
  {
    id: 1,
    title: 'انطلاق ماراثون الطائف السنوي بمشاركة أكثر من 5000 شخص',
    category: 'أخبار الجمعية',
    date: '15 أكتوبر 2026',
    author: 'إدارة الإعلام',
    image: '/images/members-group.jpeg',
    summary: 'في أجواء مليئة بالحماس والروح الرياضية، انطلق ماراثون الطائف السنوي الذي تنظمه الجمعية برعاية أمانة الطائف ووزارة الرياضة.',
  },
  {
    id: 2,
    title: 'تدشين مسار "الشفاء" الجبلي الجديد للمحترفين',
    category: 'مسارات جديدة',
    date: '02 نوفمبر 2026',
    author: 'فريق الاستكشاف',
    image: '/images/neom-I7NOiVT6jq0-unsplash.jpg',
    summary: 'ضمن خطتها التوسعية، تعلن الجمعية عن افتتاح مسار الشفاء الجبلي الذي يمتد لـ 12 كيلومتراً وسط غابات العرعر الخلابة.',
  },
  {
    id: 3,
    title: 'ورشة عمل: التغذية السليمة لرياضيي المشي والهايكنج',
    category: 'تثقيف صحي',
    date: '20 نوفمبر 2026',
    author: 'اللجنة الطبية',
    image: '/images/andrii-solok-eC-Bcw3pGbg-unsplash.jpg',
    summary: 'ندعوكم لحضور الورشة التثقيفية المجانية حول أفضل الممارسات الغذائية لبناء الطاقة وتحسين الاستشفاء العضلي بعد المسافات الطويلة.',
  },
];

function MetaRow({ date, author }: { date: string; author: string }) {
  return (
    <div className="flex items-center gap-4 text-xs font-medium text-charcoal/50 mb-4">
      <div className="flex items-center gap-1.5">
        <Calendar size={14} className="text-brand" aria-hidden="true" />
        <time>{date}</time>
      </div>
      <span className="w-1 h-1 rounded-full bg-charcoal/20" aria-hidden="true" />
      <div className="flex items-center gap-1.5">
        <User size={14} className="text-brand" aria-hidden="true" />
        <span>{author}</span>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const [featured, ...rest] = news;

  return (
    <section className="py-12 md:py-16 bg-warm-white relative overflow-hidden" aria-label="آخر الأخبار">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">المركز الإعلامي</span>
            <h2 className="font-display text-h2-fluid font-bold tracking-tight text-charcoal mb-4">
              أحدث الأخبار والفعاليات
            </h2>
            <p className="text-charcoal/70">
              ابقَ على اطلاع دائم بآخر مستجدات الجمعية، إعلانات المسارات الجديدة، والبرامج التثقيفية القادمة.
            </p>
          </div>

          <Link
            href="/news"
            className="flex items-center gap-2 text-charcoal font-bold hover:text-brand transition-colors group pb-2 border-b-2 border-transparent hover:border-brand shrink-0 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4"
          >
            <span>تصفح كل الأخبار</span>
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        {/* Editorial layout: featured + two supporting */}
        <div className="space-y-6">
          {/* Featured card — full width, horizontal */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="group bg-warm-gray rounded-2xl overflow-hidden border border-charcoal/5 flex flex-col md:flex-row"
          >
            <div className="relative md:w-1/2 h-56 md:h-auto min-h-[240px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/95 px-3 py-1.5 rounded-lg text-xs font-bold text-brand min-h-[28px] flex items-center">
                {featured.category}
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <MetaRow date={featured.date} author={featured.author} />
              <h3 className="font-display text-h3-fluid font-bold text-charcoal leading-tight mb-4 group-hover:text-brand transition-colors">
                {featured.title}
              </h3>
              <p className="text-charcoal/60 leading-relaxed mb-6 max-w-[55ch]">
                {featured.summary}
              </p>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-brand font-bold text-sm group/btn focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
              >
                <span>اقرأ المزيد</span>
                <ArrowLeft size={16} className="group-hover/btn:-translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </motion.article>

          {/* Two smaller supporting cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] as const }}
                className="group bg-warm-gray rounded-2xl overflow-hidden border border-charcoal/5 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 px-3 py-1.5 rounded-lg text-xs font-bold text-brand min-h-[28px] flex items-center">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <MetaRow date={item.date} author={item.author} />
                  <h3 className="font-display text-xl font-bold text-charcoal leading-tight mb-3 group-hover:text-brand transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-5 line-clamp-2 flex-grow">
                    {item.summary}
                  </p>
                  <div className="pt-4 border-t border-charcoal/5">
                    <Link
                      href="/news"
                      className="text-brand font-bold text-sm flex items-center gap-1.5 group/btn focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
                    >
                      <span>اقرأ المزيد</span>
                      <ArrowLeft size={16} className="group-hover/btn:-translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
