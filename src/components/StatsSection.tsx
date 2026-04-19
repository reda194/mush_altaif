'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Route, Medal, Clock } from 'lucide-react';

function Counter({ from, to, duration = 2, label }: { from: number; to: number; duration?: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * (to - from) + from));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} aria-label={`${new Intl.NumberFormat('en-US').format(count)} ${label}`}>
      {new Intl.NumberFormat('en-US').format(count)}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { id: 1, label: 'أعضاء مسجلين', value: 3500, suffix: '+', icon: Users },
    { id: 2, label: 'كيلومتر مقطوع', value: 120000, suffix: '+', icon: Route },
    { id: 3, label: 'مبادرة مجتمعية', value: 45, suffix: '', icon: Medal },
    { id: 4, label: 'ساعة تطوعية', value: 15000, suffix: '+', icon: Clock },
  ];

  return (
    <section className="py-6 md:py-10 bg-charcoal relative z-20" aria-label="إحصائيات الجمعية">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="relative -mt-8 md:-mt-16 bg-charcoal-light/90 border border-white/8 rounded-2xl p-5 md:p-8 shadow-xl shadow-black/20 overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x divide-x-reverse divide-white/8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.id} className="flex flex-col items-center justify-center text-center px-3 md:px-4 group">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div className="text-3xl md:text-5xl font-bold text-white mb-1 flex items-center justify-center" dir="ltr">
                    <Counter from={0} to={stat.value} duration={2.5} label={stat.label} />
                    <span className="text-brand font-light mr-1 opacity-70 text-xl md:text-3xl">{stat.suffix}</span>
                  </div>
                  <div className="text-white/50 font-medium tracking-wide text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
