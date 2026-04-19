'use client';

import { motion } from 'framer-motion';
import { Building2, ShieldHalf, Landmark, Users } from 'lucide-react';
import { partners } from '@/lib/data/partners';
import Container from '@/components/ui/Container';

const iconMap: Record<string, React.ElementType> = {
  ministry: Landmark,
  nonprofit: Building2,
  municipality: ShieldHalf,
  sports: Users,
};

export default function TrustSection() {
  const displayPartners = partners.slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-warm-gray border-y border-surface-dark relative overflow-hidden" aria-label="شركاء الجمعية">
      <Container>
        <div className="text-right mb-8 md:mb-12 max-w-xl">
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-4 block">موثوقية واحترافية</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-charcoal mb-4">شركاء النجاح والحوكمة</h2>
          <p className="text-charcoal/60 text-base md:text-lg">
            نعمل تحت إشراف أفضل الجهات الحكومية والرياضية لضمان أعلى مستويات التنظيم والشفافية لمجتمعنا.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {displayPartners.map((partner, index) => {
            const IconComponent = iconMap[Object.keys(iconMap)[index]] || Building2;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-transparent hover:border-surface-dark hover:bg-warm-white transition-all duration-300"
              >
                <div className="w-20 h-20 mb-4 rounded-full bg-surface-dark/50 flex items-center justify-center text-charcoal/40 group-hover:bg-brand/10 group-hover:text-brand group-hover:scale-110 transition-all duration-500">
                  <IconComponent size={36} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-bold text-charcoal/80 group-hover:text-charcoal transition-colors text-center">
                  {partner.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
