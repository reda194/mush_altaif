import type { NavLink, ContactInfo } from "@/types";

export const SITE_NAME = "جمعية مشاة الطائف";
export const SITE_NAME_EN = "Mushaat At-Ta'if";
export const SITE_DESCRIPTION =
  "جمعية مشاة الطائف للرياضة المجتمعية. نهدف لخلق مجتمع رياضي حيوي.";
export const SITE_URL = "https://mushattaif.com";
export const LICENSE_NUMBER = "1454";
export const ESTABLISHED = "18 محرم 1441هـ / 17 سبتمبر 2019م";

export const NAV_LINKS: NavLink[] = [
  {
    label: "الرئيسية",
    href: "/",
  },
  {
    label: "عن الجمعية",
    href: "/about",
    children: [
      { label: "عن الجمعية", href: "/about" },
      { label: "مجلس الإدارة", href: "/board" },
      { label: "الرسالة والرؤية", href: "/vision" },
      { label: "أهداف الجمعية", href: "/goals" },
      { label: "الهيكل التنظيمي", href: "/structure" },
      { label: "اللجان الأساسية", href: "/committees" },
    ],
  },
  {
    label: "الحوكمة",
    href: "/governance",
    children: [
      { label: "الحوكمة واللوائح", href: "/governance" },
      { label: "الخطة الاستراتيجية", href: "/strategic-plan" },
      { label: "الخطة التشغيلية", href: "/operational-plan" },
    ],
  },
  {
    label: "الأنشطة",
    href: "/programs",
    children: [
      { label: "البرامج والأنشطة", href: "/programs" },
      { label: "الفعاليات", href: "/events" },
      { label: "الأخبار", href: "/news" },
      { label: "مكتبة الصور", href: "/gallery" },
    ],
  },
  {
    label: "المسارات",
    href: "/trails",
    children: [
      { label: "مسارات المشي", href: "/trails" },
      { label: "مسارات الهايكنج", href: "/hiking" },
    ],
  },
  {
    label: "الخدمات",
    href: "/membership",
    children: [
      { label: "بوابة العضوية", href: "/membership" },
      { label: "بوابة التطوع", href: "/volunteer" },
      { label: "بوابة الوظائف", href: "/jobs" },
      { label: "الحسابات البنكية", href: "/banking" },
      { label: "خدمة ضيوف الرحمن", href: "/hajj-service" },
    ],
  },
  {
    label: "شركاؤنا",
    href: "/partners",
  },
  {
    label: "اتصل بنا",
    href: "/contact",
  },
];

export const CONTACT: ContactInfo = {
  phone: "0554713877",
  nationalNumber: "7037295750",
  email: "mushataltaif@gmail.com",
  address: "شارع الفرزدق – قروي – الطائف",
  workHours: "الأحد – الأربعاء 8pm – 11am",
  socialLinks: [
    {
      platform: "x",
      url: "https://x.com/mushattaif",
    },
    {
      platform: "instagram",
      url: "https://instagram.com/mushattaif",
    },
    {
      platform: "tiktok",
      url: "https://tiktok.com/@mushattaif",
    },
  ],
};

export const TAIF_LOCATION = { lat: 21.4225, lng: 40.5136 };
