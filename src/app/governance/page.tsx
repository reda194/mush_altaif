import type { Metadata } from "next";
import { FileText, ShieldCheck, Scale, BookOpen, Download, Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import DocumentDownloadButton from "@/components/shared/DocumentDownloadButton";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `الحوكمة | ${SITE_NAME}`,
  description: "لوائح وإفصاحات حوكمة جمعية مشاة الطائف",
};

const documents = [
  { title: "اللائحة الأساسية",              desc: "اللوائح والأنظمة الأساسية المنظمة لعمل الجمعية",  href: "/docs/bylaws.pdf",                icon: FileText },
  { title: "القوائم المالية 2024",           desc: "القوائم المالية المعتمدة لعام 2024م",             href: "/docs/financial-report-2024.pdf", icon: Calendar  },
  { title: "تقرير جمعية مشاة الطائف 2023",  desc: "التقرير السنوي الشامل لعام 2023م",               href: "/docs/annual-report-2023.pdf",    icon: BookOpen  },
  { title: "القوائم المالية 2022",           desc: "القوائم المالية المعتمدة لعام 2022م",             href: "/docs/financial-report-2022.pdf", icon: Calendar  },
  { title: "القوائم المالية 2021",           desc: "القوائم المالية المعتمدة لعام 2021م",             href: "/docs/financial-report-2021.pdf", icon: Calendar  },
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
          { icon: FileText,    title: "اللائحة الأساسية",  desc: "اللوائح والأنظمة الأساسية المنظمة لعمل الجمعية وفقأً للأنظمة المعتمدة من المركز الوطني لتنمية القطاع غير الربحي." },
          { icon: ShieldCheck, title: "الإفصاحات",         desc: "الإفصاحات المالية والإدارية المعتمدة التي تضمن الشفافية والمساءلة أمام الأعضاء والجهات المشرفة." },
          { icon: Scale,       title: "سياسة الخصوصية",   desc: "نحمي بيانات أعضائنا وزوار موقعنا وفقأً لأفضل الممارسات والأنظمة المعتمدة." },
          { icon: BookOpen,    title: "التقارير المالية",  desc: "تقارير مالية دورية مدققة تُنشر بشكل دوري لضمان الشفافية والمساءلة." },
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

      {/* Downloadable Documents */}
      <AnimatedSection delay={0.3}>
        <div className="mt-12 bg-surface rounded-2xl p-8 border border-charcoal/5">
          <h3 className="text-xl font-bold text-charcoal mb-2">الوثائق والتقارير</h3>
          <p className="text-charcoal/60 text-sm mb-6">
            اضغط على أي وثيقة لتحميلها — ستُطلب منك بيانات بسيطة قبل التحميل.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <DocumentDownloadButton
                key={doc.title}
                fileName={doc.title}
                fileUrl={doc.href}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-charcoal/10 hover:border-brand/30 hover:bg-brand/5 transition-all duration-200 group w-full text-right"
              >
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                  <doc.icon className="w-5 h-5 text-brand" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-charcoal text-sm truncate">{doc.title}</p>
                  <p className="text-charcoal/50 text-xs truncate">{doc.desc}</p>
                </div>
                <Download className="w-4 h-4 text-charcoal/30 group-hover:text-brand transition-colors shrink-0" />
              </DocumentDownloadButton>
            ))}
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
