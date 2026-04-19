import type { Metadata } from "next";
import { FileText, ShieldCheck, Scale, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `الحوكمة | ${SITE_NAME}`,
  description: "لوائح وإفصاحات حوكمة جمعية مشاة الطائف",
};

export default function GovernancePage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "الحوكمة" }]} />

      <SectionHeading
        badge="الشفافية والنزاهة"
        title="الحوكمة واللوائح"
        subtitle="نلتزم بأعلى معايير الحوكمة والشفافية في جميع أعمالنا وعملياتنا"
      />

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {[
          { icon: FileText, title: "اللائحة الأساسية", desc: "اللوائح والأنظمة الأساسية المنظمة لعمل الجمعية وفقأً للأنظمة المعتمدة من المركز الوطني لتنمية القطاع غير الربحي." },
          { icon: ShieldCheck, title: "الإفصاحات", desc: "الإفصاحات المالية والإدارية المعتمدة التي تضمن الشفافية والمساءلة أمام الأعضاء والجهات المشرفة." },
          { icon: Scale, title: "سياسة الخصوصية", desc: "نحمي بيانات أعضائنا وزوار موقعنا وفقأً لأفضل الممارسات والأنظمة المعتمدة." },
          { icon: BookOpen, title: "التقارير المالية", desc: "تقارير مالية دورية مدققة تُنشر بشكل دوري لضمان الشفافية والمساءلة." },
        ].map((item, index) => (
          <AnimatedSection key={item.title} delay={index * 0.1}>
            <div className="bg-surface rounded-2xl p-6 border border-charcoal/5 h-full">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-bold text-lg text-charcoal mb-2">{item.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <div className="mt-12 bg-charcoal rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-3">الجهة المشرفة</h3>
          <p className="text-white/70">المركز الوطني لتنمية القطاع غير الربحي</p>
          <p className="text-white/50 text-sm mt-2">الجهة المشرفة فنياً: وزارة الرياضة السعودية</p>
        </div>
      </AnimatedSection>
    </Container>
  );
}
