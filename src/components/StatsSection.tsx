'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Route, Medal, Clock } from 'lucide-react';

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

  // Format number with commas
  const formattedCount = new Intl.NumberFormat('en-US').format(count);

  return <span ref={ref}>{formattedCount}</span>;
}

export default function StatsSection() {
  const stats = [
    { id: 1, label: 'أعضاء مسجلين', value: 3500, suffix: '+', icon: Users },
    { id: 2, label: 'كيلومتر مقطوع', value: 120000, suffix: '+', icon: Route },
    { id: 3, label: 'مبادرة مجتمعية', value: 45, suffix: '', icon: Medal },
    { id: 4, label: 'ساعة تطوعية', value: 15000, suffix: '+', icon: Clock },
  ];

  return (
    <section className="py-14 md:py-20 bg-charcoal relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative -mt-24 md:-mt-40 bg-surface-dark/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-5 md:p-12 shadow-2xl shadow-black/50 overflow-hidden"
        >
          {/* Subtle Glow inside the container */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand/10 blur-3xl rounded-full opacity-50 pointer-events-none"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 relative z-10 divide-x divide-x-reverse divide-white/10">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.id} className="flex flex-col items-center justify-center text-center px-3 md:px-4 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 text-brand flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-inner">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 flex items-center justify-center" dir="ltr">
                    <span className="text-brand font-light mr-1 opacity-80">{stat.suffix}</span>
                    <Counter from={0} to={stat.value} duration={2.5} />
                  </div>
                  <div className="text-white/60 font-medium tracking-wide text-sm md:text-base">
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
