'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'هل توجد رسوم للانضمام لجمعية مشاة الطائف؟',
      answer: 'العضوية الأساسية مجانية تماماً ومفتوحة للجميع. نوفر أيضاً باقات عضوية مميزة بأسعار رمزية (سنوية) تتيح لك الوصول لبرامج تدريب متقدمة وخصومات حصرية من شركائنا.',
    },
    {
      question: 'أنا مبتدئ ولا أملك لياقة عالية، هل يمكنني الانضمام؟',
      answer: 'بالتأكيد! لدينا مسارات وبرامج مخصصة للمبتدئين تناسب جميع الأعمار والمستويات اللياقية، مع وجود مدربين معتمدين لتوجيهك خطوة بخطوة.',
    },
    {
      question: 'متى وأين تقام التدريبات الأسبوعية؟',
      answer: 'نتواجد في عدة مواقع في الطائف. التجمع الرئيسي يكون في ممشى الردف الجديد أيام الجمعة والسبت صباحاً، بالإضافة لفعاليات منتصف الأسبوع في مواقع مختلفة يُعلن عنها في مجموعات الواتساب الخاصة بالأعضاء.',
    },
    {
      question: 'هل توفرون برامج مخصصة للسيدات؟',
      answer: 'نعم، لدينا قسم نسائي متكامل بإشراف مدربات وقائدات مؤهلات، ويوفر مسارات وبرامج تراعي الخصوصية وتلبي احتياجات السيدات الرياضية بامتياز.',
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <div className="w-12 h-12 bg-surface text-brand rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-charcoal/5 group-hover:scale-110 transition-transform">
            <MessageCircleQuestion size={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-charcoal mb-3 md:mb-4">الأسئلة الشائعة</h2>
          <p className="text-charcoal/60 text-base md:text-lg max-w-2xl">
            جمعنا لك الإجابات لأكثر الاستفسارات التي تصلنا لنساعدك على بدء رحلتك معنا بكل سهولة ووضوح.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-brand bg-brand/5 shadow-md shadow-brand/5' : 'border-charcoal/10 bg-surface hover:border-brand/30'}`}
            >
              <button
                className="w-full text-right px-4 md:px-6 py-4 md:py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold pr-3 md:pr-4 text-base md:text-lg ${openIndex === index ? 'text-brand' : 'text-charcoal'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-charcoal/50 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 md:px-10 pb-5 md:pb-6 text-charcoal/70 leading-relaxed border-t border-charcoal/5 pt-4 text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
