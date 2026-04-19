import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/data/programs";
import { SITE_NAME } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};
  return {
    title: `${program.title} | ${SITE_NAME}`,
    description: program.description,
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb
        items={[
          { label: "الرئيسية", href: "/" },
          { label: "البرامج والأنشطة", href: "/programs" },
          { label: program.title },
        ]}
      />

      <AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">{program.title}</h1>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-charcoal/60">
              <Calendar className="w-5 h-5 text-brand" />
              <span>{program.date}</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal/60">
              <MapPin className="w-5 h-5 text-brand" />
              <span>{program.location}</span>
            </div>
            {program.participants && (
              <div className="flex items-center gap-2 text-charcoal/60">
                <Users className="w-5 h-5 text-brand" />
                <span>{program.participants.men + (program.participants.women || 0)} مشارك</span>
              </div>
            )}
          </div>

          <p className="text-charcoal/70 text-lg leading-relaxed">{program.description}</p>

          {program.details && (
            <div className="mt-6 bg-surface rounded-2xl p-6 border border-charcoal/5">
              <h2 className="text-lg font-bold text-charcoal mb-3">تفاصيل البرنامج</h2>
              <p className="text-charcoal/70 leading-relaxed">{program.details}</p>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-charcoal/10">
            <Button href="/programs" variant="outline">
              <ArrowRight className="w-4 h-4 ml-2" />
              العودة للبرامج
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
