'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  const stats = [
    { id: 1, label: 'عضو مسجل', value: 3500, suffix: '+', icon: '👥' },
    { id: 2, label: 'كم مقطوع', value: 120000, suffix: ' كيلومتر', icon: '🥾' },
    { id: 3, label: 'مبادرة وفعالية', value: 45, suffix: ' مبادرة', icon: '🌟' },
    { id: 4, label: 'ساعة تطوعية', value: 15000, suffix: '+', icon: '⏱️' },
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">قوتنا في أرقامنا</span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">إنجازات تدفعنا للاستمرار</h2>
          <p className="mt-6 text-lg text-charcoal/70 max-w-2xl mx-auto">
            بفضل مجتمعنا المترابط وشغفنا المستمر، نحقق أرقاماً تتحدث عن نفسها. انضم إلينا لنكتب معاً قصة نجاح جديدة.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-surface-dark shadow-xl shadow-brand/5 text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300 group-hover:opacity-100">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-charcoal mb-2 font-mono" dir="ltr">
                <Counter from={0} to={stat.value} duration={2.5} />
                <span className="text-brand ml-1 text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-charcoal/60 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
