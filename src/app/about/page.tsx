import type { Metadata } from "next";
import Image from "next/image";
import { Download, FileText, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME, LICENSE_NUMBER, ESTABLISHED } from "@/lib/constants";

export const metadata: Metadata = {
  title: `عن الجمعية | ${SITE_NAME}`,
  description:
    "جمعية مشاة الطائف - أول جمعية رياضية في المنطقة الغربية وثاني جمعية رياضية على مستوى المملكة.",
};

export default function AboutPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "عن الجمعية" }]} />

      <AnimatedSection>
        <SectionHeading
          className="text-center"
          badge="من نحن"
          title="جمعية مشاة الطائف"
          subtitle="جمعية رياضية مجتمعية تهدف إلى نشر ثقافة المشي وتعزيز نمط الحياة الصحي في محافظة الطائف"
        />
      </AnimatedSection>

      {/* Hero image - real members photo */}
      <AnimatedSection delay={0.1}>
        <div className="mt-8 rounded-2xl overflow-hidden border border-charcoal/5">
          <Image
            src="/images/members-group.jpeg"
            alt="أعضاء جمعية مشاة الطائف في أحد مسارات جبال الطائف"
            width={1200}
            height={600}
            className="w-full h-[300px] md:h-[420px] object-cover"
            priority
          />
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <AnimatedSection delay={0.1}>
          <div className="bg-surface rounded-2xl p-8 border border-charcoal/5">
            <h3 className="text-2xl font-bold text-charcoal mb-4">مرحباً بكم في جمعية مشاة الطائف</h3>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              نحن جمعية مشاة الطائف التابعة للمركز الوطني للقطاع الغير ربحي بتصريح رقم ({LICENSE_NUMBER})
              يغطي نشاطها محافظة الطائف وضواحيها وتقوم على رفع مستوى الوعي لدي أفراد المجتمع
              وتعزز بيئة صديقة للمشاة في الأحياء وتشجيع النمط الصحي الغذائي النشط المنتظم بين فئات المجتمع.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-brand font-bold text-lg">1454</p>
                <p className="text-charcoal/50 text-sm">رقم الترخيص</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-brand font-bold text-lg">2019</p>
                <p className="text-charcoal/50 text-sm">سنة التأسيس</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-6">
            <div className="bg-surface rounded-2xl p-8 border border-charcoal/5">
              <h3 className="text-xl font-bold text-charcoal mb-3">تاريخ التأسيس</h3>
              <p className="text-charcoal/70 leading-relaxed">
                تم إنشاء جمعية مشاة الطائف في محافظة الطائف في {ESTABLISHED}
                وهي أول جمعية رياضية في المنطقة الغربية وثاني جمعية رياضية على مستوى المملكة.
                تم إنشاؤها من قبل وزارة الموارد البشرية والآن تحت مظلة المركز الوطني لتنمية القطاع غير الربحي.
                الجهة المشرفة عليها فنياً هي وزارة الرياضة.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 border border-charcoal/5">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-brand mt-1 shrink-0" />
                <div>
                  <p className="text-charcoal/70 leading-relaxed text-sm">
                    <strong className="text-charcoal">المقر الرئيسي:</strong> منطقة مكة المكرمة<br />
                    <strong className="text-charcoal">العنوان الوطني:</strong> محافظة الطائف<br />
                    <strong className="text-charcoal">نطاق الخدمات:</strong> محافظة الطائف وضواحيها
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* License Certificate Section */}
      <AnimatedSection delay={0.3}>
        <div className="mt-12 bg-surface rounded-2xl p-8 border border-charcoal/5">
          <h3 className="text-xl font-bold text-charcoal mb-6 text-center">شهادة الترخيص</h3>
          <div className="flex justify-center">
            <div className="relative rounded-xl overflow-hidden border border-charcoal/10 shadow-sm max-w-lg">
              <Image
                src="/images/license-certificate.jpeg"
                alt="شهادة ترخيص جمعية مشاة الطائف - رقم 1454"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Walking & Hiking Info */}
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <AnimatedSection delay={0.1}>
          <div className="bg-charcoal rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">رياضة المشي</h3>
            <p className="text-white/70 leading-relaxed">
              تُعدّ رياضة المشي من أكثر الرياضات شعبية؛ كونها تتمتع بالعديد من المزايا والفوائد
              على مستوى الصحة الجسدية والنفسية. وتُعرّف رياضة المشي على أنّها: الانتقال بالجسم
              من مكان إلى آخر باستخدام الأقدام من خلال حركة متتالية متكررة الخطوة من خلال
              دفع القدمين بالتناوب، مع بقاء اتصال الجسم بالأرض، ويتميز هذا النشاط بالسرعة
              واعتدال الإيقاع.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-brand rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">رياضة الهايكنج</h3>
            <p className="text-white/80 leading-relaxed">
              يشير مفهوم رياضة الهايكنج Hiking إلى التنزه على الأقدام، وهنالك من يطلق عليها
              اسم الحَرْكلة للتفرقة بينها وبين المشي العادي. رياضة الهايكنج تركز على المشي
              بين المناظر أو الطرق الطبيعية؛ كالغابات والجبال والوديان. تقدم جمعيتنا برامج
              هايكنج متعددة في أجمل مسارات الطائف الجبلية.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Official Documents */}
      <AnimatedSection delay={0.3}>
        <div className="mt-12 bg-surface rounded-2xl p-8 border border-charcoal/5">
          <h3 className="text-xl font-bold text-charcoal mb-6">الوثائق الرسمية</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="/docs/registration-decision.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl p-4 border border-charcoal/10 hover:border-brand/30 hover:bg-brand/5 transition-colors group"
            >
              <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-brand" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-charcoal text-sm">قرار التسجيل</p>
                <p className="text-charcoal/50 text-xs">PDF — عرض الوثيقة</p>
              </div>
              <Download className="w-4 h-4 text-charcoal/30 group-hover:text-brand transition-colors shrink-0" />
            </a>

            <a
              href="/docs/license-info.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl p-4 border border-charcoal/10 hover:border-brand/30 hover:bg-brand/5 transition-colors group"
            >
              <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-brand" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-charcoal text-sm">معلومات شهادة الترخيص</p>
                <p className="text-charcoal/50 text-xs">PDF — عرض الوثيقة</p>
              </div>
              <Download className="w-4 h-4 text-charcoal/30 group-hover:text-brand transition-colors shrink-0" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
