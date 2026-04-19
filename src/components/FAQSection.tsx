'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16 bg-warm-gray relative overflow-hidden" aria-label="الأسئلة الشائعة">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="mb-10">
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">مساعدة</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-charcoal mb-4">الأسئلة الشائعة</h2>
          <p className="text-charcoal/60 text-lg max-w-2xl">
            جمعنا لك الإجابات لأكثر الاستفسارات التي تصلنا لنساعدك على بدء رحلتك معنا بكل سهولة ووضوح.
          </p>
        </div>

        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: index * 0.1 }}
                role="listitem"
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-brand bg-brand/5 shadow-sm'
                    : 'border-charcoal/10 bg-warm-white hover:border-brand/30'
                }`}
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-right px-6 py-5 flex items-center justify-between focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
                >
                  <span className={`font-bold pr-4 text-lg ${isOpen ? 'text-brand' : 'text-charcoal'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-charcoal/50 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-brand' : ''}`}
                    size={20}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-10 pb-6 text-charcoal/70 leading-relaxed border-t border-charcoal/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
