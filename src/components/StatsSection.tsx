'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

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
  const supportingStats = [
    { to: 3500, suffix: '+', label: 'عضو يسيرون معاً أسبوعياً', duration: 2 },
    { to: 45, suffix: '', label: 'مبادرة مجتمعية أطلقناها', duration: 1.5 },
    { to: 15000, suffix: '+', label: 'ساعة تطوعية من أعضائنا', duration: 2.2 },
  ];

  return (
    <section className="py-16 md:py-20 bg-warm-white relative overflow-hidden" aria-label="إحصائيات الجمعية">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* Hero stat — the story in one sentence */}
          <div>
            <span className="text-brand font-bold tracking-wider text-sm uppercase mb-6 block">بالأرقام</span>
            <p className="font-display text-charcoal leading-tight mb-5 text-4xl md:text-5xl lg:text-6xl font-bold">
              سرنا معاً{' '}
              <span className="text-brand" dir="ltr">
                <Counter from={0} to={120000} duration={2.5} label="كيلومتر" />
              </span>
              {' '}كيلومتراً
            </p>
            <p className="text-charcoal/60 text-base md:text-lg leading-relaxed max-w-sm">
              في مسارات جبال الطائف الخلابة، من الهدا إلى الشفا ومسارات الردف.
            </p>
          </div>

          {/* Supporting stats — natural language */}
          <div className="divide-y divide-charcoal/8">
            {supportingStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="flex items-baseline gap-3 py-5"
              >
                <span
                  className="font-display text-3xl md:text-4xl font-bold text-charcoal shrink-0"
                  dir="ltr"
                >
                  <Counter from={0} to={stat.to} duration={stat.duration} label={stat.label} />
                  {stat.suffix}
                </span>
                <span className="text-charcoal/60 text-sm md:text-base">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
