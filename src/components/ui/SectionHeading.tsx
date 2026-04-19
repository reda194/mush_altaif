import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  subtitle,
  badge,
  className,
  light = false,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("text-center mb-12", className)}>
      {badge && (
        <span
          className={cn(
            "inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4",
            light
              ? "bg-white/10 text-white border border-white/20"
              : "bg-brand/10 text-brand"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold mb-4",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg max-w-2xl mx-auto",
            light ? "text-white/70" : "text-charcoal/60"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
