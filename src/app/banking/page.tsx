import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: `الحسابات البنكية | ${SITE_NAME}`,
  description: "الحسابات البنكية لجمعية مشاة الطائف",
};

export default function BankingPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "الخدمات" }, { label: "الحسابات البنكية" }]} />

      <SectionHeading
        className="text-center"
        badge="المدفوعات"
        title="الحسابات البنكية"
        subtitle="تحويل رسوم العضوية (150 ريال سعودي) لحساب الجمعية بعد قبول طلب العضوية"
      />

      <AnimatedSection delay={0.1}>
        <div className="max-w-lg mx-auto mt-12 bg-surface rounded-2xl p-8 border border-charcoal/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-brand" />
            </div>
            <div>
              <p className="font-bold text-charcoal">بنك الراجحي</p>
              <p className="text-charcoal/50 text-sm">حساب جمعية مشاة الطائف</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-charcoal/5 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/رقم-حساب-الراجحي-للجمعية-2.jpeg"
              alt="رقم حساب بنك الراجحي لجمعية مشاة الطائف"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-charcoal/60 text-sm">
              للتواصل بخصوص الحسابات البنكية: <br />
              <strong>{CONTACT.email}</strong> | <strong dir="ltr">{CONTACT.phone}</strong>
            </p>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
