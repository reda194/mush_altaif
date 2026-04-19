import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { newsArticles } from "@/lib/data/news";
import { SITE_NAME } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | ${SITE_NAME}`,
    description: article.summary,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb
        items={[
          { label: "الرئيسية", href: "/" },
          { label: "الأخبار", href: "/news" },
          { label: article.title },
        ]}
      />

      <AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="brand">{article.category}</Badge>
            <span className="flex items-center gap-1.5 text-charcoal/40 text-sm">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">{article.title}</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal/70 leading-relaxed text-lg">{article.content}</p>
          </div>

          <div className="mt-8 pt-8 border-t border-charcoal/10">
            <Button href="/news" variant="outline">
              <ArrowRight className="w-4 h-4 ml-2" />
              العودة للأخبار
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
