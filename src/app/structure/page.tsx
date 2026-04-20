import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `الهيكل التنظيمي | ${SITE_NAME}`,
  description: "الهيكل التنظيمي لجمعية مشاة الطائف",
};

export default function StructurePage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "عن الجمعية", href: "/about" }, { label: "الهيكل التنظيمي" }]} />

      <SectionHeading
        className="text-center"
        badge="التنظيم"
        title="الهيكل التنظيمي"
        subtitle="الهيكل التنظيمي لجمعية مشاة الطائف يوضح تسلسل المسؤوليات والصلاحيات"
      />

      {/* Official Organizational Structure Image */}
      <AnimatedSection delay={0.1}>
        <div className="mt-12 bg-surface rounded-2xl p-6 md:p-8 border border-charcoal/5">
          <div className="flex justify-center">
            <div className="relative rounded-xl overflow-hidden border border-charcoal/10 shadow-sm bg-white p-4 max-w-3xl w-full">
              <Image
                src="/images/org-structure.jpeg"
                alt="الهيكل التنظيمي لجمعية مشاة الطائف - يوضح التسلسل من الجمعية العمومية إلى مجلس الإدارة واللجان"
                width={900}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Text fallback for accessibility */}
      <AnimatedSection delay={0.2}>
        <div className="mt-8 bg-surface rounded-2xl p-8 border border-charcoal/5">
          <h3 className="text-lg font-bold text-charcoal mb-6 text-center">ملخص الهيكل التنظيمي</h3>

          <div className="text-center">
            <div className="inline-block bg-brand text-white px-6 py-3 rounded-xl font-bold text-lg mb-8">
              الجمعية العمومية
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-px h-12 bg-charcoal/20"></div>
            </div>

            <div className="inline-block bg-charcoal text-white px-6 py-3 rounded-xl font-bold text-lg mb-8">
              مجلس الإدارة
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-px h-12 bg-charcoal/20"></div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {["رئيس مجلس الإدارة", "نائب رئيس مجلس الإدارة", "مستشار الجمعية"].map((role) => (
                <div key={role} className="bg-white rounded-xl p-4 border border-charcoal/10 text-center">
                  <p className="font-bold text-charcoal text-sm">{role}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center my-6">
              <div className="w-px h-8 bg-charcoal/20"></div>
            </div>

            <div className="grid sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {["أعضاء مجلس الإدارة", "اللجان الأساسية", "الإدارة التنفيذية", "المتطوعون"].map((unit) => (
                <div key={unit} className="bg-white rounded-xl p-4 border border-charcoal/10 text-center">
                  <p className="font-medium text-charcoal/70 text-sm">{unit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
