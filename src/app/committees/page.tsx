import type { Metadata } from "next";
import Image from "next/image";
import { Users, FileText, ClipboardCheck, Megaphone, Wallet, Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `اللجان الأساسية | ${SITE_NAME}`,
  description: "اللجان الأساسية لجمعية مشاة الطائف",
};

const committees = [
  { icon: Users, name: "لجنة العضوية والتطوع", desc: "إدارة شؤون الأعضاء والمتطوعين وتنظيم عمليات التسجيل والقبول." },
  { icon: FileText, name: "لجنة الحوكمة والسياسات", desc: "وضع ومراجعة اللوائح والسياسات الداخلية وضمان الامتثال." },
  { icon: ClipboardCheck, name: "لجنة البرامج والأنشطة", desc: "تخطيط وتنفيذ البرامج الرياضية والفعاليات المجتمعية." },
  { icon: Megaphone, name: "لجنة الإعلام والتواصل", desc: "إدارة الحملات الإعلامية والتواصل مع المجتمع والشركاء." },
  { icon: Wallet, name: "لجنة الموارد المالية", desc: "إدارة الموارد المالية وتنويع مصادر الدخل وضمان الاستدامة المالية." },
  { icon: Heart, name: "لجنة المسؤولية المجتمعية", desc: "تعزيز الدور المجتمعي للجمعية وبناء الشراكات الاستراتيجية." },
];

export default function CommitteesPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "عن الجمعية", href: "/about" }, { label: "اللجان الأساسية" }]} />

      <SectionHeading
        className="text-center"
        badge="التنظيم الداخلي"
        title="اللجان الأساسية"
        subtitle="تعمل لجان الجمعية المتخصصة على تحقيق أهدافها الاستراتيجية بكفاءة واحترافية"
      />

      {/* Official Committees Document */}
      <AnimatedSection delay={0.1}>
        <div className="mt-8 bg-surface rounded-2xl p-6 md:p-8 border border-charcoal/5">
          <div className="flex justify-center">
            <div className="relative rounded-xl overflow-hidden border border-charcoal/10 shadow-sm bg-white p-4 max-w-3xl w-full">
              <Image
                src="/images/committees.jpeg"
                alt="جدول اللجان الأساسية لجمعية مشاة الطائف مع أسماء الأعضاء"
                width={900}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Committees Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {committees.map((committee, index) => (
          <AnimatedSection key={committee.name} delay={index * 0.1}>
            <div className="bg-surface rounded-2xl p-6 border border-charcoal/5 h-full">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                <committee.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-bold text-lg text-charcoal mb-2">{committee.name}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">{committee.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Container>
  );
}
