import type { Metadata } from "next";
import { Eye, Target, Lightbulb } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `الرسالة والرؤية | ${SITE_NAME}`,
  description: "رسالة ورؤية وقيم جمعية مشاة الطائف",
};

export default function VisionPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "عن الجمعية", href: "/about" }, { label: "الرسالة والرؤية" }]} />

      <SectionHeading
        badge="هويتنا"
        title="الرسالة والرؤية"
        subtitle="نحو مجتمع رياضي حيوي ومستدام في محافظة الطائف"
      />

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <AnimatedSection delay={0.1}>
          <div className="bg-charcoal rounded-2xl p-8 text-white h-full">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-brand" />
            </div>
            <h3 className="text-2xl font-bold mb-4">الرؤية</h3>
            <p className="text-white/70 leading-relaxed text-lg">
              أن نكون الجمعية الرائدة في تعزيز ثقافة المشي والنشاط البدني في المملكة العربية السعودية،
              وخلق مجتمع رياضي حيوي يتبنى نمط حياة صحي ومستدام.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-brand rounded-2xl p-8 text-white h-full">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">الرسالة</h3>
            <p className="text-white/80 leading-relaxed text-lg">
              تنمية ورفع مستوى الوعي لدي أفراد المجتمع بمحافظة الطائف بأهمية ممارسة رياضة المشي
              عبر البرامج النوعية بأحدث التغيرات ومن خلال فريق عمل وشركات مثمرة.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.3}>
        <div className="mt-12 bg-surface rounded-2xl p-8 border border-charcoal/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-7 h-7 text-brand" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal">القيم الأساسية</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "النزاهة", desc: "الالتزام بأعلى معايير الشفافية والمصداقية في جميع أعمالنا" },
              { title: "الريادة", desc: "نسعى لقيادة التغيير الإيجابي في مجتمعنا الرياضي" },
              { title: "التعاون", desc: "نعمل يداً بيد مع شركائنا وأفراد المجتمع لتحقيق أهدافنا" },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h4 className="font-bold text-charcoal mb-2">{value.title}</h4>
                <p className="text-charcoal/60 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
