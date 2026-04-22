import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import MapEmbed from "@/components/ui/MapEmbed";
import { walkingTrails } from "@/lib/data/trails";
import { SITE_NAME } from "@/lib/constants";

const allTrails = [...walkingTrails];

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allTrails.map((trail) => ({ slug: trail.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trail = allTrails.find((t) => t.slug === slug);
  if (!trail) return {};
  return {
    title: `${trail.name} | ${SITE_NAME}`,
    description: trail.description,
  };
}

export default async function TrailDetailPage({ params }: Props) {
  const { slug } = await params;
  const trail = allTrails.find((t) => t.slug === slug);
  if (!trail) notFound();

  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb
        items={[
          { label: "الرئيسية", href: "/" },
          { label: "مسارات المشي", href: "/trails" },
          { label: trail.name },
        ]}
      />

      {trail.image && (
        <AnimatedSection>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
            <Image
              src={trail.image}
              alt={trail.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
            />
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection>
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium">
              {trail.distance}
            </span>
            <span className="bg-charcoal/10 text-charcoal px-3 py-1 rounded-full text-sm font-medium">
              {trail.difficulty}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{trail.name}</h1>
          <p className="text-charcoal/70 text-lg leading-relaxed">{trail.description}</p>
        </div>
      </AnimatedSection>

      {trail.location && (
        <AnimatedSection delay={0.2}>
          <div className="mt-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">الموقع على الخريطة</h2>
            <MapEmbed
              lat={trail.location.lat}
              lng={trail.location.lng}
              title={trail.name}
              markerLabel={trail.name}
            />
          </div>
        </AnimatedSection>
      )}

      {(trail.gatheringPoint || trail.gatheringTime) && (
        <AnimatedSection delay={0.3}>
          <div className="mt-8 bg-surface rounded-2xl p-6 border border-charcoal/5">
            <h2 className="text-xl font-bold text-charcoal mb-4">تفاصيل التجمع</h2>
            <div className="space-y-3">
              {trail.gatheringPoint && (
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brand" />
                  <span className="text-charcoal/70">نقطة التجمع: {trail.gatheringPoint}</span>
                </div>
              )}
              {trail.gatheringTime && (
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand" />
                  <span className="text-charcoal/70">الوقت: {trail.gatheringTime}</span>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      )}

      <div className="mt-8">
        <Button href="/trails" variant="outline">
          <ArrowRight className="w-4 h-4 ml-2" />
          العودة للمسارات
        </Button>
      </div>
    </Container>
  );
}
