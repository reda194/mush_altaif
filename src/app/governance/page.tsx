import type { Metadata } from "next";
import { FileText, ShieldCheck, Scale, BookOpen, Calendar, Lock, UserCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `الحوكمة | ${SITE_NAME}`,
  description: "لوائح وإفصاحات حوكمة جمعية مشاة الطائف",
};

const documents = [
  { title: "اللائحة الأساسية", desc: "اللوائح والأنظمة الأساسية المنظمة لعمل الجمعية", href: "/docs/bylaws.pdf", icon: FileText },
  { title: "القوائم المالية 2024", desc: "القوائم المالية المعتمدة لعام 2024م", href: "/docs/financial-report-2024.pdf", icon: Calendar },
  { title: "تقرير جمعية مشاة الطائف 2023", desc: "التقرير السنوي الشامل لعام 2023م", href: "/docs/annual-report-2023.pdf", icon: BookOpen },
  { title: "القوائم المالية 2022", desc: "القوائم المالية المعتمدة لعام 2022م", href: "/docs/financial-report-2022.pdf", icon: Calendar },
  { title: "القوائم المالية 2021", desc: "القوائم المالية المعتمدة لعام 2021م", href: "/docs/financial-report-2021.pdf", icon: Calendar },
];

export default function GovernancePage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "الحوكمة" }]} />

      <SectionHeading
        className="text-center"
        badge="الشفافية والنزاهة"
        title="الحوكمة واللوائح"
        subtitle="نلتزم بأعلى معايير الحوكمة والشفافية في جميع أعمالنا وعملياتنا"
      />

      {/* Governance Info Cards */}
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

      {/* Locked Documents Section — requires membership */}
      <AnimatedSection delay={0.3}>
        <div className="mt-12 bg-surface rounded-2xl p-8 border border-charcoal/5">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-charcoal">الوثائق والتقارير</h3>
            <span className="flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-0.5 text-xs font-bold">
              <Lock className="w-3 h-3" />
              للأعضاء فقط
            </span>
          </div>
          <p className="text-charcoal/60 text-sm mb-6">
            يمكن الاطلاع على الوثائق الرسمية والتقارير المالية المعتمدة بعد التسجيل والدخول كعضو في الجمعية.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-charcoal/10 opacity-60 cursor-not-allowed select-none"
                aria-label={`${doc.title} — متاح للأعضاء المسجلين`}
              >
                <div className="w-10 h-10 bg-charcoal/5 rounded-lg flex items-center justify-center shrink-0">
                  <doc.icon className="w-5 h-5 text-charcoal/30" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-charcoal/50 text-sm truncate">{doc.title}</p>
                  <p className="text-charcoal/30 text-xs truncate">{doc.desc}</p>
                </div>
                <Lock className="w-4 h-4 text-charcoal/20 shrink-0" />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 bg-brand/5 border border-brand/15 rounded-xl p-5">
            <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
              <UserCheck className="w-5 h-5 text-brand" />
            </div>
            <div className="flex-1 text-center sm:text-right">
              <p className="font-bold text-charcoal text-sm">هل أنت عضو في الجمعية؟</p>
              <p className="text-charcoal/60 text-xs mt-0.5">سجّل انضمامك للحصول على صلاحية الاطلاع على جميع الوثائق</p>
            </div>
            <a
              href="/membership"
              className="shrink-0 bg-brand text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              سجّل الآن
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Supervisory Authority */}
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
