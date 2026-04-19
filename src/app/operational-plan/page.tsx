import type { Metadata } from "next";
import { ClipboardList, Clock, Users, BarChart } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `الخطة التشغيلية | ${SITE_NAME}`,
  description: "الخطة التشغيلية السنوية لجمعية مشاة الطائف",
};

export default function OperationalPlanPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "الحوكمة", href: "/governance" }, { label: "الخطة التشغيلية" }]} />

      <SectionHeading
        badge="التنفيذ"
        title="الخطة التشغيلية"
        subtitle="خطة تشغيلية سنوية مفصلة لتنفيذ الأهداف الاستراتيجية للجمعية"
      />

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {[
          { icon: ClipboardList, title: "برامج المشي الأسبوعية", desc: "تنظيم فعاليات مشي أسبوعية في المسارات المعتمدة بمشاركة الأعضاء والمجتمع." },
          { icon: Clock, title: "هايكنج شهري", desc: "تنظيم رحلات هايكنج شهرية في المسارات الجبلية المحددة بالتعاون مع مرشدين معتمدين." },
          { icon: Users, title: "برامج التطوع", desc: "تفعيل برامج التطوع وتأهيل المتطوعين للمشاركة في تنظيم الفعاليات والأنشطة." },
          { icon: BarChart, title: "المتابعة والتقييم", desc: "متابعة تنفيذ الخطة التشغيلية وتقييم النتائج بشكل دوري لضمان تحقيق الأهداف." },
        ].map((item, index) => (
          <AnimatedSection key={item.title} delay={index * 0.1}>
            <div className="bg-surface rounded-2xl p-6 border border-charcoal/5 h-full flex gap-4">
              <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-brand" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/60 text-sm">{item.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Container>
  );
}
