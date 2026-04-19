import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsCard from "@/components/shared/NewsCard";
import { newsArticles } from "@/lib/data/news";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `الأخبار | ${SITE_NAME}`,
  description: "آخر أخبار وفعاليات جمعية مشاة الطائف",
};

export default function NewsPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "الأخبار" }]} />

      <SectionHeading
        className="text-center"
        badge="المركز الإعلامي"
        title="آخر الأخبار"
        subtitle="تابع آخر أخبار وفعاليات وأنشطة جمعية مشاة الطائف"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {newsArticles.map((article) => (
          <NewsCard key={article.slug} article={article} />
        ))}
      </div>
    </Container>
  );
}
