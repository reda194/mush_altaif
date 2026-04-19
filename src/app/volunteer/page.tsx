import type { Metadata } from "next";
import { Heart, Users, Award, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `بوابة التطوع | ${SITE_NAME}`,
  description: "انضم كمتطع في جمعية مشاة الطائف",
};

export default function VolunteerPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "الخدمات" }, { label: "بوابة التطوع" }]} />

      <SectionHeading
        badge="تطوع معنا"
        title="بوابة التطوع"
        subtitle="كن جزءاً من التغيير الإيجابي في مجتمعك - انضم كمتطع في جمعية مشاة الطائف"
      />

      <div className="grid sm:grid-cols-3 gap-6 mt-12">
        {[
          { icon: Heart, title: "ساعد مجتمعك", desc: "شارك في تنظيم الفعاليات الرياضية والمبادرات المجتمعية." },
          { icon: Users, title: "اكتسب خبرة", desc: "طوّر مهاراتك القيادية والتنظيمية من خلال العمل الجماعي." },
          { icon: Award, title: "احصل على تقدير", desc: "شهادات تطوع معتمدة وتكريم للمتطوعين المتميزين." },
        ].map((item, index) => (
          <AnimatedSection key={item.title} delay={index * 0.1}>
            <div className="bg-surface rounded-2xl p-6 border border-charcoal/5 text-center h-full">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
              <p className="text-charcoal/60 text-sm">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <div className="mt-12 bg-brand rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">سجّل كمتطع الآن</h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            انضم لفريق المتطوعين في جمعية مشاة الطائف وساهم في بناء مجتمع رياضي حيوي.
          </p>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand px-8 py-3 rounded-xl font-bold hover:bg-white/90 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            سجّل الآن
          </a>
        </div>
      </AnimatedSection>
    </Container>
  );
}
