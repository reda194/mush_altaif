import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowUpLeft } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Trail } from "@/types";

export default function TrailCard({ trail }: { trail: Trail }) {
  const basePath = trail.type === "hiking" ? "/hiking" : "/trails";

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      {trail.image && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={trail.image}
            alt={trail.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="brand">{trail.distance}</Badge>
          <Badge variant="outline">{trail.difficulty}</Badge>
        </div>
        <h3 className="font-bold text-lg text-charcoal mb-2">{trail.name}</h3>
        <p className="text-charcoal/60 text-sm leading-relaxed line-clamp-3 flex-grow">
          {trail.description}
        </p>
        {trail.location && (
          <div className="flex items-center gap-1 text-charcoal/40 text-sm mt-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>الطائف</span>
          </div>
        )}
        <Link
          href={`${basePath}/${trail.slug}`}
          className="inline-flex items-center gap-1 text-brand font-medium text-sm mt-4 hover:gap-2 transition-all"
        >
          التفاصيل
          <ArrowUpLeft className="w-4 h-4" />
        </Link>
      </div>
    </Card>
  );
}
