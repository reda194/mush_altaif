import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import TrailCard from "@/components/shared/TrailCard";
import { walkingTrails } from "@/lib/data/trails";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `مسارات المشي | ${SITE_NAME}`,
  description: "مسارات المشي المتاحة في محافظة الطائف",
};

export default function TrailsPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "المسارات" }, { label: "مسارات المشي" }]} />

      <SectionHeading
        badge="المسارات"
        title="مسارات المشي"
        subtitle="مسارات ممشى معتمدة في محافظة الطائف وضواحيها - اختر المسار الأقرب إليك"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {walkingTrails.map((trail) => (
          <TrailCard key={trail.slug} trail={trail} />
        ))}
      </div>
    </Container>
  );
}
