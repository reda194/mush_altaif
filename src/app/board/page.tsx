import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import BoardMemberCard from "@/components/shared/BoardMemberCard";
import { boardMembers } from "@/lib/data/board";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `مجلس الإدارة | ${SITE_NAME}`,
  description: "أعضاء مجلس إدارة جمعية مشاة الطائف",
};

export default function BoardPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "عن الجمعية", href: "/about" }, { label: "مجلس الإدارة" }]} />

      <SectionHeading
        badge="القيادة"
        title="مجلس الإدارة"
        subtitle="فريق قيادي متفانٍ يعمل على تحقيق رؤية الجمعية ورسالتها في خدمة المجتمع"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {boardMembers.map((member, index) => (
          <BoardMemberCard key={member.name} member={member} index={index} />
        ))}
      </div>

      <div className="mt-16 bg-surface rounded-2xl p-8 border border-charcoal/5">
        <h3 className="text-xl font-bold text-charcoal mb-4">كلمة رئيس مجلس الإدارة</h3>
        <blockquote className="text-charcoal/70 leading-relaxed text-lg border-r-4 border-brand pr-6">
          {boardMembers[0].quote}
        </blockquote>
        <p className="mt-4 font-bold text-charcoal">— {boardMembers[0].name}، {boardMembers[0].role}</p>
      </div>
    </Container>
  );
}
