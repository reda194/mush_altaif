import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: `بوابة الوظائف | ${SITE_NAME}`,
  description: "الفرص الوظيفية المتاحة في جمعية مشاة الطائف",
};

export default function JobsPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "الخدمات" }, { label: "بوابة الوظائف" }]} />

      <SectionHeading
        badge="وظائف"
        title="بوابة الوظائف"
        subtitle="الفرص الوظيفية المتاحة في جمعية مشاة الطائف"
      />

      <AnimatedSection delay={0.1}>
        <div className="max-w-lg mx-auto mt-12 text-center">
          <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-10 h-10 text-charcoal/30" />
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-3">لا توجد وظائف متاحة حالياً</h3>
          <p className="text-charcoal/60 mb-6">
            يرجى متابعة صفحتنا للإعلان عن أي فرص وظيفية جديدة.
            يمكنك أيضاً التواصل معنا مباشرة.
          </p>
          <div className="bg-surface rounded-2xl p-6 border border-charcoal/5">
            <p className="text-charcoal/60 text-sm">
              للتواصل: <strong>{CONTACT.email}</strong> | <strong dir="ltr">{CONTACT.phone}</strong>
            </p>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
