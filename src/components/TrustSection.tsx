'use client';

import { motion } from 'framer-motion';
import { Building2, ShieldHalf, Landmark, Users } from 'lucide-react';

export default function TrustSection() {
  const partners = [
    { id: 1, name: 'وزارة الرياضة', icon: Landmark },
    { id: 2, name: 'تنمية القطاع غير الربحي', icon: Building2 },
    { id: 3, name: 'أمانة الطائف', icon: ShieldHalf },
    { id: 4, name: 'الرياضة للجميع', icon: Users },
  ];

  return (
    <section className="py-24 bg-white border-y border-surface-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">موثوقية واحترافية</span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight mb-4">شركاء النجاح والحوكمة</h2>
          <p className="text-charcoal/60">
            نعمل تحت إشراف أفضل الجهات الحكومية والرياضية لضمان أعلى مستويات التنظيم والشفافية لمجتمعنا.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {partners.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-transparent hover:border-surface-dark hover:bg-surface transition-all duration-300"
              >
                <div className="w-20 h-20 mb-4 rounded-full bg-surface-dark/50 flex items-center justify-center text-charcoal/40 group-hover:bg-brand/10 group-hover:text-brand group-hover:scale-110 transition-all duration-500">
                  <IconComponent size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-charcoal/80 group-hover:text-charcoal transition-colors text-center">
                  {partner.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
