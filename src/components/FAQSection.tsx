'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';

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
          <h2 className="font-display text-h2-fluid font-bold tracking-tight text-charcoal mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-charcoal/60 max-w-[55ch]">
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
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] as const }}
                role="listitem"
                className={`border rounded-2xl transition-colors duration-300 ${
                  isOpen
                    ? 'border-brand bg-brand/5'
                    : 'border-charcoal/10 bg-warm-white hover:border-brand/30'
                }`}
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-right px-6 py-5 flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
                >
                  <span className={`font-bold text-base md:text-lg leading-snug ${isOpen ? 'text-brand' : 'text-charcoal'}`}>
                    {faq.question}
                  </span>
                  <span className="shrink-0">
                    {isOpen ? (
                      <X size={18} className="text-brand" aria-hidden="true" />
                    ) : (
                      <Plus size={18} className="text-charcoal/40" aria-hidden="true" />
                    )}
                  </span>
                </button>

                {/* CSS grid accordion — no layout thrash, compositor-only */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 280ms ease-out',
                  }}
                >
                  <div className="overflow-hidden min-h-0">
                    <div className="px-6 pb-6 pt-1 text-charcoal/70 leading-relaxed border-t border-charcoal/5">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
