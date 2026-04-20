import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { partners } from "@/lib/data/partners";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `شركاؤنا | ${SITE_NAME}`,
  description: "شركاء نجاح جمعية مشاة الطائف",
};

export default function PartnersPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "شركاؤنا" }]} />

      <SectionHeading
        className="text-center"
        badge="الشراكات"
        title="شركاؤنا"
        subtitle="نحن نعتبر شركاءنا الأعزاء جزءاً من عائلتنا - نكون قيادة ناجحة معاً ونحقق نجاحاً متبادلاً"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {partners.map((partner, index) => (
          <AnimatedSection key={partner.name} delay={index * 0.1}>
            <div className="bg-surface rounded-2xl p-6 border border-charcoal/5 h-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand font-bold text-xl">{partner.name.charAt(0)}</span>
              </div>
              <h3 className="font-bold text-lg text-charcoal mb-2">{partner.name}</h3>
              {partner.description && (
                <p className="text-charcoal/60 text-sm">{partner.description}</p>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Container>
  );
}
