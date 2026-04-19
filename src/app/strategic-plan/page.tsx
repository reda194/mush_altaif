import type { Metadata } from "next";
import { Target, TrendingUp, Calendar, CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `الخطة الاستراتيجية | ${SITE_NAME}`,
  description: "الخطة الاستراتيجية لجمعية مشاة الطائف",
};

export default function StrategicPlanPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "الحوكمة", href: "/governance" }, { label: "الخطة الاستراتيجية" }]} />

      <SectionHeading
        badge="التخطيط"
        title="الخطة الاستراتيجية"
        subtitle="خطة استراتيجية شاملة تستهدف تطوير وتنمية قطاع المشي والنشاط البدني في الطائف"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {[
          { icon: Target, phase: "المحور الأول", title: "تعزيز العضوية", desc: "زيادة عدد الأعضاء المسجلين وتفعيل مشاركتهم في البرامج والأنشطة." },
          { icon: TrendingUp, phase: "المحور الثاني", title: "تطوير المسارات", desc: "تطوير وتأهيل مسارات المشي والهايكنج بالتعاون مع الجهات المعنية." },
          { icon: Calendar, phase: "المحور الثالث", title: "الفعاليات والبرامج", desc: "تنظيم فعاليات وبرامج نوعية على مدار العام لجميع الفئات." },
          { icon: CheckCircle, phase: "المحور الرابع", title: "الحوكمة والتميز", desc: "تعزيز ممارسات الحوكمة والسعي للتميز المؤسسي." },
        ].map((item, index) => (
          <AnimatedSection key={item.title} delay={index * 0.1}>
            <div className="bg-surface rounded-2xl p-6 border border-charcoal/5 h-full">
              <span className="text-brand text-sm font-bold">{item.phase}</span>
              <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center my-3">
                <item.icon className="w-5 h-5 text-brand" />
              </div>
              <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
              <p className="text-charcoal/60 text-sm">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Container>
  );
}
