import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import BoardMemberCard from "@/components/shared/BoardMemberCard";
import { boardMembers } from "@/lib/data/board";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `مجلس الإدارة | ${SITE_NAME}`,
  description: "أعضاء مجلس إدارة جمعية مشاة الطائف",
};

const leaders = boardMembers.filter((m) => m.fullSpeech);

export default function BoardPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "عن الجمعية", href: "/about" }, { label: "مجلس الإدارة" }]} />

      <SectionHeading
        className="text-center"
        badge="القيادة"
        title="مجلس الإدارة"
        subtitle="فريق قيادي متفانٍ يعمل على تحقيق رؤية الجمعية ورسالتها في خدمة المجتمع"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {boardMembers.map((member, index) => (
          <BoardMemberCard key={member.name} member={member} index={index} />
        ))}
      </div>

      {/* Full speeches for president, VP, and advisor */}
      <div className="mt-16 space-y-8">
        {leaders.map((leader, index) => (
          <AnimatedSection key={leader.name} delay={index * 0.15}>
            <div className="bg-surface rounded-2xl p-8 border border-charcoal/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center text-brand font-bold text-lg shrink-0">
                  {leader.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal">كلمة {leader.role.split(" (")[0]}</h3>
                  <p className="text-sm text-brand font-medium">{leader.name}</p>
                </div>
              </div>
              <div
                className="text-charcoal/70 leading-loose text-base border-r-4 border-brand pr-6 whitespace-pre-line"
              >
                {leader.fullSpeech}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Board Formation Letter */}
      <AnimatedSection delay={0.4}>
        <div className="mt-8 bg-surface rounded-2xl p-8 border border-charcoal/5">
          <h3 className="text-lg font-bold text-charcoal mb-4">الوثائق الرسمية</h3>
          <a
            href="/docs/board-formation-letter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white rounded-xl p-4 border border-charcoal/10 hover:border-brand/30 hover:bg-brand/5 transition-colors group max-w-md"
          >
            <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
              <FileText className="w-5 h-5 text-brand" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-charcoal text-sm">خطاب تشكيل المجلس</p>
              <p className="text-charcoal/50 text-xs">PDF — عرض الوثيقة</p>
            </div>
            <Download className="w-4 h-4 text-charcoal/30 group-hover:text-brand transition-colors shrink-0" />
          </a>
        </div>
      </AnimatedSection>
    </Container>
  );
}
