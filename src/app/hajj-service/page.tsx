import type { Metadata } from "next";
import { Heart, MapPin, Users, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `خدمة ضيوف الرحمن | ${SITE_NAME}`,
  description: "مبادرة جمعية مشاة الطائف في خدمة ضيوف الرحمن",
};

export default function HajjServicePage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "الخدمات" }, { label: "خدمة ضيوف الرحمن" }]} />

      <SectionHeading
        badge="المبادرات"
        title="خدمة ضيوف الرحمن"
        subtitle="المبادرة الأولى لجمعية مشاة الطائف في خدمة ضيوف الرحمن"
      />

      <AnimatedSection delay={0.1}>
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-surface rounded-2xl p-8 border border-charcoal/5 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-charcoal">امتداد طريق مكة</h3>
            </div>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              تعتزم الجمعية بإذن الله تعالى إطلاق مبادرة جمعية مشاة الطائف الأولى
              (امتداد طريق مكة) لخدمة ضيوف الرحمن.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              تهدف هذه المبادرة إلى تقديم الخدمات والمساعدة لحجاج بيت الله الحرام
              والمعتمرين على طول طريق الطائف-مكة المكرمة.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Heart, title: "خدمة الضيوف", desc: "تقديم الضيافة والمساعدة لحجاج بيت الله" },
              { icon: MapPin, title: "على المسار", desc: "مواقع خدمية على طريق الطائف-مكة" },
              { icon: Users, title: "متطوعون", desc: "فريق من المتطوعين المتخصصين" },
            ].map((item) => (
              <div key={item.title} className="bg-surface rounded-2xl p-5 border border-charcoal/5 text-center">
                <item.icon className="w-8 h-8 text-brand mx-auto mb-3" />
                <h4 className="font-bold text-charcoal text-sm mb-1">{item.title}</h4>
                <p className="text-charcoal/50 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
