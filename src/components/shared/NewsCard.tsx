import Link from "next/link";
import { Calendar, ArrowUpLeft } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { NewsArticle } from "@/types";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Card className="h-full flex flex-col">
      {article.image && (
        <div className="relative h-48 bg-surface overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="brand">{article.category}</Badge>
          <span className="flex items-center gap-1 text-charcoal/40 text-sm">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
        </div>
        <h3 className="font-bold text-charcoal mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-charcoal/60 text-sm leading-relaxed line-clamp-3 flex-grow">
          {article.summary}
        </p>
        <Link
          href={`/news/${article.slug}`}
          className="inline-flex items-center gap-1 text-brand font-medium text-sm mt-4 hover:gap-2 transition-all"
        >
          اقرأ المزيد
          <ArrowUpLeft className="w-4 h-4" />
        </Link>
      </div>
    </Card>
  );
}
