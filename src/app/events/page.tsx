import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/shared/EventCard";
import { events } from "@/lib/data/events";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `الفعاليات | ${SITE_NAME}`,
  description: "فعاليات جمعية مشاة الطائف",
};

export default function EventsPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "الفعاليات" }]} />

      <SectionHeading
        className="text-center"
        badge="الأنشطة"
        title="الفعاليات"
        subtitle="فعاليات وأنشطة رياضية مجتمعية تنظمها جمعية مشاة الطائف"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </Container>
  );
}
