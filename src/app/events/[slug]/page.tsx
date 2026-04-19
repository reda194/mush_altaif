import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { events } from "@/lib/data/events";
import { SITE_NAME } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: `${event.title} | ${SITE_NAME}`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb
        items={[
          { label: "الرئيسية", href: "/" },
          { label: "الفعاليات", href: "/events" },
          { label: event.title },
        ]}
      />

      <AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">{event.title}</h1>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-charcoal/60">
              <Calendar className="w-5 h-5 text-brand" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal/60">
              <MapPin className="w-5 h-5 text-brand" />
              <span>{event.location}</span>
            </div>
            {event.participants && (
              <div className="flex items-center gap-2 text-charcoal/60">
                <Users className="w-5 h-5 text-brand" />
                <span>{event.participants} مشارك</span>
              </div>
            )}
            {event.volunteers && (
              <div className="flex items-center gap-2 text-charcoal/60">
                <Users className="w-5 h-5 text-brand" />
                <span>{event.volunteers} متطوع</span>
              </div>
            )}
          </div>

          <p className="text-charcoal/70 text-lg leading-relaxed">{event.description}</p>

          <div className="mt-8 pt-8 border-t border-charcoal/10">
            <Button href="/events" variant="outline">
              <ArrowRight className="w-4 h-4 ml-2" />
              العودة للفعاليات
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
