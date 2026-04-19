import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import MapEmbed from "@/components/ui/MapEmbed";
import { SITE_NAME, CONTACT, TAIF_LOCATION } from "@/lib/constants";

export const metadata: Metadata = {
  title: `اتصل بنا | ${SITE_NAME}`,
  description: "تواصل مع جمعية مشاة الطائف",
};

export default function ContactPage() {
  return (
    <Container className="pt-32 pb-20">
      <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "اتصل بنا" }]} />

      <SectionHeading
        className="text-center"
        badge="تواصل معنا"
        title="اتصل بنا"
        subtitle={`نحن هنا لمساعدتك. تواصل معنا عبر النموذج أدناه أو عبر بيانات الاتصال المباشرة.`}
      />

      <div className="mt-12 max-w-4xl mx-auto">
        <div className="bg-surface rounded-2xl p-8 border border-charcoal/5">
          <ContactForm />
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-charcoal mb-4">موقعنا على الخريطة</h3>
          <MapEmbed
            lat={TAIF_LOCATION.lat}
            lng={TAIF_LOCATION.lng}
            zoom={13}
            title={CONTACT.address}
            markerLabel="جمعية مشاة الطائف"
          />
          <p className="text-charcoal/50 text-sm mt-3 text-center">{CONTACT.address}</p>
        </div>
      </div>
    </Container>
  );
}
