import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `تدشين الموقع | ${SITE_NAME}`,
  description: "تدشين الموقع الإلكتروني لجمعية مشاة الطائف",
};

export default function LaunchPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "تدشين الموقع" }]} />

      <AnimatedSection>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🚀</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">تدشين الموقع الإلكتروني</h1>

          <div className="bg-surface rounded-2xl p-8 border border-charcoal/5 text-right">
            <p className="text-charcoal/70 leading-relaxed text-lg mb-6">
              تفضل صاحب السمو الملكي الأمير سعود بن نهار بن سعود بن عبدالعزيز آل سعود
              محافظ محافظة الطائف بتدشين الموقع الإلكتروني لجمعية مشاة الطائف
            </p>
            <div className="bg-white rounded-xl p-6 border border-charcoal/5">
              <p className="text-charcoal font-bold text-center">
                يوم الخميس الموافق 1446/3/30 هـ
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
