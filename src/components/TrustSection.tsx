'use client';

import { motion } from 'framer-motion';
import { Building2, ShieldHalf, Landmark, Users } from 'lucide-react';
import { partners } from '@/lib/data/partners';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const iconMap: Record<string, React.ElementType> = {
  ministry: Landmark,
  nonprofit: Building2,
  municipality: ShieldHalf,
  sports: Users,
};

export default function TrustSection() {
  const displayPartners = partners.slice(0, 4);

  return (
    <section className="py-24 bg-white border-y border-surface-dark relative overflow-hidden">
      <Container>
        <SectionHeading
          badge="موثوقية واحترافية"
          title="شركاء النجاح والحوكمة"
          subtitle="نعمل تحت إشراف أفضل الجهات الحكومية والرياضية لضمان أعلى مستويات التنظيم والشفافية لمجتمعنا."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {displayPartners.map((partner, index) => {
            const IconComponent = iconMap[Object.keys(iconMap)[index]] || Building2;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-transparent hover:border-surface-dark hover:bg-surface transition-all duration-300"
              >
                <div className="w-20 h-20 mb-4 rounded-full bg-surface-dark/50 flex items-center justify-center text-charcoal/40 group-hover:bg-brand/10 group-hover:text-brand group-hover:scale-110 transition-all duration-500">
                  <IconComponent size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-charcoal/80 group-hover:text-charcoal transition-colors text-center">
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
