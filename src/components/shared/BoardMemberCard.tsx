"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import type { BoardMember } from "@/types";

export default function BoardMemberCard({
  member,
  index,
}: {
  member: BoardMember;
  index: number;
}) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <Card className="p-6 text-center h-full">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center overflow-hidden">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-brand font-bold text-xl">
              {member.name.charAt(0)}
            </span>
          )}
        </div>
        <h3 className="font-bold text-lg text-charcoal mb-1">{member.name}</h3>
        <p className="text-brand font-medium text-sm mb-3">{member.role}</p>
        {member.quote && (
          <p className="text-charcoal/60 text-sm leading-relaxed">
            &ldquo;{member.quote}&rdquo;
          </p>
        )}
      </Card>
    </AnimatedSection>
  );
}
