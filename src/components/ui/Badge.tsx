import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "brand" | "outline";
  className?: string;
}) {
  const variants = {
    default: "bg-charcoal/10 text-charcoal",
    brand: "bg-brand/10 text-brand",
    outline: "border border-charcoal/20 text-charcoal/70",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
