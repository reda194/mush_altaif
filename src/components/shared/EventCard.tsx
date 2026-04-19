import Link from "next/link";
import { Calendar, MapPin, Users } from "lucide-react";
import Card from "@/components/ui/Card";
import type { Event } from "@/types";

export default function EventCard({ event }: { event: Event }) {
  return (
    <Card className="h-full flex flex-col">
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-charcoal mb-2">{event.title}</h3>
        <p className="text-charcoal/60 text-sm leading-relaxed line-clamp-3 flex-grow">
          {event.description}
        </p>
        <div className="space-y-2 mt-4">
          <div className="flex items-center gap-2 text-charcoal/50 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-charcoal/50 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
          {event.participants && (
            <div className="flex items-center gap-2 text-charcoal/50 text-sm">
              <Users className="w-4 h-4" />
              <span>{event.participants} مشارك</span>
            </div>
          )}
        </div>
        <Link
          href={`/events/${event.slug}`}
          className="inline-flex items-center gap-1 text-brand font-medium text-sm mt-4 hover:gap-2 transition-all"
        >
          التفاصيل
          <span>←</span>
        </Link>
      </div>
    </Card>
  );
}
