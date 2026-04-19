import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import TrailCard from "@/components/shared/TrailCard";
import { hikingTrails } from "@/lib/data/hiking-trails";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `مسارات الهايكنج | ${SITE_NAME}`,
  description: "مسارات الهايكنج في محافظة الطائف",
};

export default function HikingPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "المسارات" }, { label: "مسارات الهايكنج" }]} />

      <SectionHeading
        className="text-center"
        badge="المغامرة"
        title="مسارات الهايكنج"
        subtitle="مسارات جبلية ووديان خليلة لتجربة الهايكنج في أجمل مناطق الطائف"
      />

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {hikingTrails.map((trail) => (
          <TrailCard key={trail.slug} trail={trail} />
        ))}
      </div>
    </Container>
  );
}
