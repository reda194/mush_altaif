import type { Metadata } from "next";
import { Camera, Image as ImageIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `مكتبة الصور | ${SITE_NAME}`,
  description: "مكتبة صور جمعية مشاة الطائف",
};

const galleryItems = [
  { title: "مسار الورد", category: "فعاليات" },
  { title: "هايكنج وادي الخرار", category: "هايكنج" },
  { title: "مشي ممشي الحكير", category: "مشي" },
  { title: "تكريم الفائزين", category: "فعاليات" },
  { title: "تدشين الموقع الإلكتروني", category: "مناسبات" },
  { title: "دورة مجلس الإدارة", category: "حوكمة" },
];

export default function GalleryPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "مكتبة الصور" }]} />

      <SectionHeading
        badge="المركز الإعلامي"
        title="مكتبة الصور"
        subtitle="صور من أنشطة وفعاليات ومسارات جمعية مشاة الطائف"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {galleryItems.map((item, index) => (
          <AnimatedSection key={item.title} delay={index * 0.1}>
            <div className="relative aspect-square bg-surface rounded-2xl border border-charcoal/5 overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <ImageIcon className="w-10 h-10 text-charcoal/20 mb-2" />
                <span className="text-charcoal/40 text-sm">{item.title}</span>
              </div>
              <div className="absolute inset-0 bg-brand/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                <Camera className="w-8 h-8 mb-2" />
                <p className="font-bold">{item.title}</p>
                <p className="text-sm text-white/70">{item.category}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.6}>
        <div className="mt-12 text-center text-charcoal/50">
          <p className="text-sm">سيتم إضافة الصور الفعلية قريباً من أرشيف الجمعية</p>
        </div>
      </AnimatedSection>
    </Container>
  );
}
