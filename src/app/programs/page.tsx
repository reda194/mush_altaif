import type { Metadata } from "next";
import { Calendar, MapPin, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { programs } from "@/lib/data/programs";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `البرامج والأنشطة | ${SITE_NAME}`,
  description: "برامج وأنشطة جمعية مشاة الطائف",
};

export default function ProgramsPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "البرامج والأنشطة" }]} />

      <SectionHeading
        className="text-center"
        badge="الأنشطة"
        title="البرامج والأنشطة"
        subtitle="برامج رياضية متنوعة تنفذها الجمعية ضمن روزنامة الأنشطة والفعاليات المعتمدة"
      />

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {programs.map((program, index) => (
          <AnimatedSection key={program.slug} delay={index * 0.1}>
            <Card className="h-full flex flex-col">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-charcoal mb-3">{program.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed flex-grow">
                  {program.description}
                </p>
                {program.details && (
                  <p className="text-charcoal/50 text-sm leading-relaxed mt-3 bg-surface rounded-xl p-4">
                    {program.details}
                  </p>
                )}
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center gap-1.5 text-charcoal/50 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{program.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-charcoal/50 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{program.location}</span>
                  </div>
                  {program.participants && (
                    <div className="flex items-center gap-1.5 text-sm">
                      <Users className="w-4 h-4 text-charcoal/50" />
                      <Badge variant="brand">
                        {program.participants.men + (program.participants.women || 0)} مشارك
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Container>
  );
}
