import type { Metadata } from "next";
import { UserPlus, CreditCard, ExternalLink, CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: `بوابة العضوية | ${SITE_NAME}`,
  description: "انضم لعضوية جمعية مشاة الطائف",
};

export default function MembershipPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "الخدمات" }, { label: "بوابة العضوية" }]} />

      <SectionHeading
        className="text-center"
        badge="عضوية"
        title="بوابة العضوية"
        subtitle="انضم لعضوية الجمعية العمومية في جمعية مشاة الطائف وكن جزءاً من مجتمعنا الرياضي"
      />

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <AnimatedSection delay={0.1}>
          <div className="bg-surface rounded-2xl p-8 border border-charcoal/5">
            <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
              <UserPlus className="w-7 h-7 text-brand" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-4">كيف تنضم؟</h3>
            <ol className="space-y-4">
              {[
                "التسجيل عبر أيقونة \"أنظم إلينا\" في الموقع",
                "مراجعة الطلب من قبل الإدارة والقبول",
                "تحويل مبلغ 150 ريال سعودي لحساب الجمعية",
                "تفعيل العضوية والبدء بالمشاركة في الأنشطة",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-charcoal/70">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-charcoal rounded-2xl p-8 text-white">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="w-7 h-7 text-brand" />
            </div>
            <h3 className="text-xl font-bold mb-4">رسوم العضوية</h3>
            <div className="text-center py-6">
              <p className="text-5xl font-bold text-brand mb-2">150</p>
              <p className="text-white/60">ريال سعودي سنوياً</p>
            </div>
            <div className="space-y-3 mt-4">
              {[
                "المشاركة في جميع البرامج والأنشطة",
                "هايكنج خاص للأعضاء",
                "تأمين رياضي أثناء الأنشطة",
                "وجبات فطور في رحلات الهايكنج",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span className="text-white/70 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-6 bg-brand text-white py-3 rounded-xl font-bold text-center block hover:bg-brand-light transition-colors"
            >
              سجّل الآن
              <ExternalLink className="w-4 h-4 inline mr-2" />
            </a>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.3}>
        <div className="mt-8 bg-surface rounded-2xl p-6 border border-charcoal/5">
          <h3 className="font-bold text-charcoal mb-3">ملاحظة</h3>
          <p className="text-charcoal/60 text-sm">
            في حالة الرغبة في الانضمام إلى عضوية الجمعية العمومية بجمعية مشاة الطائف،
            التسجيل عبر أيقونة (أنظم إلينا) وبعد قبولكم من قبل الإدارة يمكن التحويل
            (مبلغ 150 ريال سعودي) لحساب الجمعية. للتواصل: {CONTACT.email} | {CONTACT.phone}
          </p>
        </div>
      </AnimatedSection>
    </Container>
  );
}
