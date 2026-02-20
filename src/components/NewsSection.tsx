'use client';
/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import { Calendar, ArrowUpLeft, User } from 'lucide-react';

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: 'انطلاق ماراثون الطائف السنوي بمشاركة أكثر من 5000 شخص',
      category: 'أخبار الجمعية',
      date: '15 أكتوبر 2026',
      author: 'إدارة الإعلام',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2670&auto=format&fit=crop',
      summary: 'في أجواء مليئة بالحماس والروح الرياضية، انطلق ماراثون الطائف السنوي الذي تنظمه الجمعية برعاية أمانة الطائف ووزارة الرياضة.',
    },
    {
      id: 2,
      title: 'تدشين مسار "الشفاء" الجبلي الجديد للمحترفين',
      category: 'مسارات جديدة',
      date: '02 نوفمبر 2026',
      author: 'فريق الاستكشاف',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop',
      summary: 'ضمن خطتها التوسعية، تعلن الجمعية عن افتتاح مسار الشفاء الجبلي الذي يمتد لـ 12 كيلومتراً وسط غابات العرعر الخلابة.',
    },
    {
      id: 3,
      title: 'ورشة عمل: التغذية السليمة لرياضيي المشي والهايكنج',
      category: 'تثقيف صحي',
      date: '20 نوفمبر 2026',
      author: 'اللجنة الطبية',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2653&auto=format&fit=crop',
      summary: 'ندعوكم لحضور الورشة التثقيفية المجانية حول أفضل الممارسات الغذائية لبناء الطاقة وتحسين الاستشفاء العضلي بعد المسافات الطويلة.',
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-dark/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
          <div className="max-w-2xl">
            <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">المركز الإعلامي</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-charcoal mb-3 md:mb-4">أحدث الأخبار والفعاليات</h2>
            <p className="text-charcoal/70 text-base md:text-lg">
              ابقَ على اطلاع دائم بآخر مستجدات الجمعية، إعلانات المسارات الجديدة، والبرامج التثقيفية القادمة.
            </p>
          </div>
          
          <button className="flex items-center gap-2 text-charcoal font-bold hover:text-brand transition-colors group pb-2 border-b-2 border-transparent hover:border-brand shrink-0">
            <span>تصفح كل الأخبار</span>
            <ArrowUpLeft size={20} className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="flex sm:grid sm:grid-cols-3 gap-4 md:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar pb-2">
          {news.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[88%] sm:min-w-0 shrink-0 snap-start group bg-white rounded-3xl overflow-hidden border border-charcoal/5 shadow-lg shadow-brand/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="relative h-52 md:h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-brand shadow-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                <div className="flex items-center gap-4 text-xs font-medium text-charcoal/50 mb-3 md:mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-brand" />
                    <span>{item.date}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-charcoal/20"></div>
                  <div className="flex items-center gap-1.5">
                    <User size={14} className="text-brand" />
                    <span>{item.author}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-charcoal leading-tight mb-3 group-hover:text-brand transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-charcoal/60 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.summary}
                </p>
                
                <div className="mt-auto pt-4 border-t border-charcoal/5">
                  <button className="text-brand font-bold text-sm flex items-center gap-1.5 group/btn">
                    <span>اقرأ المزيد</span>
                    <ArrowUpLeft size={16} className="group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
