import type { Metadata } from "next";
import Image from "next/image";
import { Camera } from "lucide-react";
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
  { title: "تكريم عضو المجلس بندر المقاطي", category: "تكريم", image: "/images/01-تكريم-عضو-المجلس-بندر-المقاطي.jpeg" },
  { title: "تكريم عضو المجلس عبدالله الجعيد", category: "تكريم", image: "/images/02-تكريم-عضو-المجلس-عبدالله-الجعيد.jpeg" },
  { title: "تكريم عضو المجلس حسن حمدي", category: "تكريم", image: "/images/03-تكريم-عضو-المجلس-حسن-حمدي.jpeg" },
  { title: "تكريم عضو المجلس ثريا الغامدي", category: "تكريم", image: "/images/04-تكريم-عضو-المجلس-ثريا-الغامدي.jpeg" },
  { title: "تكريم عضو المجلس حسن الشريف", category: "تكريم", image: "/images/05-تكريم-عضو-المجلس-حسن-الشريف.jpeg" },
  { title: "تكريم عضو المجلس ماجد الجعيد", category: "تكريم", image: "/images/06-تكريم-عضو-المجلس-ماجد-الجعيد.jpeg" },
  { title: "درع تذكاري من رئيس مركز الحوية لسعود النمري", category: "مناسبات", image: "/images/07-درع-تذكاري-من-رئيس-مركز-الحوية-حسن-الشريف-لسعود-النمري.jpg" },
  { title: "صورة جماعية مع أعضاء الجمعية ورئيس مركز الحوية", category: "مناسبات", image: "/images/08-صورة-جماعية-مع-أعضاء-الجمعية-ورئيس-مركز-الحوية.jpg" },
  { title: "زيارة مدير مكتب وزارة الرياضة (١)", category: "زيارات", image: "/images/09-زيارة-مدير-مكتب-وزارة-الرياضة-1.jpg" },
  { title: "زيارة مدير مكتب وزارة الرياضة (٢)", category: "زيارات", image: "/images/10-زيارة-مدير-مكتب-وزارة-الرياضة-2.jpg" },
  { title: "زيارة مدير مكتب وزارة الرياضة (٣)", category: "زيارات", image: "/images/11-زيارة-مدير-مكتب-وزارة-الرياضة-3.jpg" },
  { title: "زيارة مدير مكتب وزارة الرياضة (٤)", category: "زيارات", image: "/images/12-زيارة-مدير-مكتب-وزارة-الرياضة-4.jpg" },
  { title: "مسار شارع الخمسين - سعود النمري", category: "مسارات", image: "/images/13-مسار-شارع-الخمسين-برنامج-اسبوعي-سعود-النمري.jpeg" },
  { title: "مسار شارع الخمسين - عبدالله الجعيد", category: "مسارات", image: "/images/14-مسار-شارع-الخمسين-برنامج-اسبوعي-عبدالله-الجعيد.jpeg" },
  { title: "مسار مشي جامع الملك فهد", category: "مسارات", image: "/images/15-مسار-مشي-جامع-الملك-فهد-عبدالله-الجعيد-وحسين-الغامدي.jpg" },
  { title: "اليوم العالمي للمشي - حسن حمدي", category: "فعاليات", image: "/images/16-اليوم-العالمي-للمشي-حسن-حمدي.jpeg" },
  { title: "مسار شارع الخمسين - سعود النمري وعبدالله الجعيد", category: "مسارات", image: "/images/17-مسار-مشي-شارع-الخمسين-سعود-النمري-وعبدالله-الجعيد.jpeg" },
  { title: "مربط الفيروز يستضيف أعضاء الجمعية وذويهم", category: "فعاليات", image: "/images/18-مربط-الفيروز-يستضيف-أعضاء-الجمعية-وذويهم.jpg" },
  { title: "مسار الجري طريق الملك", category: "مسارات", image: "/images/19-مسار-الجري-طريق-الملك-برنامج-اسبوعي.jpg" },
  { title: "مسار وادي المخاضة - هايكنج", category: "هايكنج", image: "/images/20-مسار-وادي-المخاضة-هايكنج-لمنسوبي-الجمعية.jpg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-01.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-02.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-03.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-04.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-05.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-06.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-07.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-08.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-09.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-10.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-11.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-12.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-13.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-14.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-15.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-16.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-17.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-18.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-19.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-20.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-21.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-22.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-23.jpeg" },
  { title: "فعاليات جمعية مشاة الطائف", category: "فعاليات", image: "/images/gallery-new-24.jpeg" },
];

export default function GalleryPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "مكتبة الصور" }]} />

      <SectionHeading
        className="text-center"
        badge="المركز الإعلامي"
        title="مكتبة الصور"
        subtitle="صور من أنشطة وفعاليات ومسارات جمعية مشاة الطائف"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {galleryItems.map((item, index) => (
          <AnimatedSection key={item.image} delay={index * 0.05}>
            <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-md shadow-charcoal/10">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <Camera className="w-6 h-6 text-white mb-1" />
                <p className="font-bold text-white text-sm leading-snug">{item.title}</p>
                <p className="text-xs text-white/70 mt-1">{item.category}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Container>
  );
}
