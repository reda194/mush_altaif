import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Clock, Mountain, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import MapEmbed from "@/components/ui/MapEmbed";
import { hikingTrails } from "@/lib/data/hiking-trails";
import { SITE_NAME } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return hikingTrails.map((trail) => ({ slug: trail.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trail = hikingTrails.find((t) => t.slug === slug);
  if (!trail) return {};
  return {
    title: `${trail.name} | ${SITE_NAME}`,
    description: trail.description,
  };
}

export default async function HikingDetailPage({ params }: Props) {
  const { slug } = await params;
  const trail = hikingTrails.find((t) => t.slug === slug);
  if (!trail) notFound();

  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb
        items={[
          { label: "الرئيسية", href: "/" },
          { label: "مسارات الهايكنج", href: "/hiking" },
          { label: trail.name },
        ]}
      />

      <AnimatedSection>
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium">
              {trail.distance}
            </span>
            <span className="bg-charcoal/10 text-charcoal px-3 py-1 rounded-full text-sm font-medium">
              {trail.difficulty}
            </span>
            <span className="bg-brand/5 text-brand px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <Mountain className="w-3.5 h-3.5" />
              هايكنج
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{trail.name}</h1>
          <p className="text-charcoal/70 text-lg leading-relaxed">{trail.description}</p>
        </div>
      </AnimatedSection>

      {trail.details && (
        <AnimatedSection delay={0.1}>
          <div className="mt-8 bg-surface rounded-2xl p-8 border border-charcoal/5">
            <h2 className="text-xl font-bold text-charcoal mb-4">التفاصيل</h2>
            <p className="text-charcoal/70 leading-relaxed">{trail.details}</p>
          </div>
        </AnimatedSection>
      )}

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
        <Button href="/hiking" variant="outline">
          <ArrowRight className="w-4 h-4 ml-2" />
          العودة لمسارات الهايكنج
        </Button>
      </div>
    </Container>
  );
}
