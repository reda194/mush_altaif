import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
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

      <div className="mt-12 bg-surface rounded-2xl p-8 border border-charcoal/5">
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
    </Container>
  );
}
