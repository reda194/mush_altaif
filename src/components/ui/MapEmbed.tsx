"use client";

import { cn } from "@/lib/utils";

export default function MapEmbed({
  lat,
  lng,
  zoom = 14,
  title,
  className,
  markerLabel,
}: {
  lat: number;
  lng: number;
  zoom?: number;
  title?: string;
  className?: string;
  markerLabel?: string;
}) {
  const marker = markerLabel
    ? encodeURIComponent(markerLabel)
    : encodeURIComponent(title || "");
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.008}%2C${lng + 0.01}%2C${lat + 0.008}&layer=mapnik&marker=${marker}%2C${lat}%2C${lng}&zoom=${zoom}`;

  return (
    <div className={cn("rounded-2xl overflow-hidden border border-charcoal/10", className)}>
      <iframe
        title={title || "خريطة"}
        src={mapUrl}
        width="100%"
        height="400"
        className="border-0 w-full"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
