import type { Metadata } from "next";
import { Target, Heart, Users, MapPin, Award, Lightbulb } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `أهداف الجمعية | ${SITE_NAME}`,
  description: "الأهداف الاستراتيجية لجمعية مشاة الطائف",
};

const goals = [
  { icon: Heart, title: "تعزيز الصحة العامة", desc: "رفع مستوى الوعي بأهمية ممارسة رياضة المشي لتحسين الصحة الجسدية والنفسية لأفراد المجتمع." },
  { icon: Users, title: "بناء مجتمع متكاتف", desc: "تعزيز الروابط الاجتماعية من خلال الأنشطة الرياضية الجماعية والفعاليات المجتمعية." },
  { icon: MapPin, title: "تطوير المسارات", desc: "العمل على تطوير وتأهيل مسارات المشي والهايكنج في محافظة الطائف وضواحيها." },
  { icon: Target, title: "نشر ثقافة المشي", desc: "نشر وتعزيز ثقافة المشي كنمط حياة يومي بين جميع فئات المجتمع." },
  { icon: Award, title: "تمكين الشباب", desc: "إتاح الفرص للشباب للمشاركة في الأنشطة الرياضية والتطوعية لبناء قدراتهم." },
  { icon: Lightbulb, title: "الابتكار الرياضي", desc: "تبني أفكار وبرامج رياضية مبتكرة تلبي احتياجات المجتمع وتواكب التطور." },
];

export default function GoalsPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "عن الجمعية", href: "/about" }, { label: "أهداف الجمعية" }]} />

      <SectionHeading
        badge="استراتيجيتنا"
        title="أهداف الجمعية"
        subtitle="أهداف استراتيجية نسعى لتحقيقها من أجل مجتمع رياضي حيوي ومستدام"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {goals.map((goal, index) => (
          <AnimatedSection key={goal.title} delay={index * 0.1}>
            <div className="bg-surface rounded-2xl p-6 border border-charcoal/5 h-full hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                <goal.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-bold text-lg text-charcoal mb-2">{goal.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">{goal.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Container>
  );
}
