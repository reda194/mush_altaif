import type { Trail } from "@/types";

export const walkingTrails: Trail[] = [
  {
    slug: "al-khamsin",
    name: "ممشي شارع الخمسين",
    type: "walking",
    distance: "3 كم",
    difficulty: "سهل",
    description:
      "مسار شارع الخمسين أو تيري مول تم إنشاء هذا المسار من قبل أمانة الطائف. يوجد به مجمع جوري مول وتيرا مول بالإضافة إلى مشروع تحت الإنشاء لمدينة ترفيهية ضخمة.",
    location: { lat: 21.4355, lng: 40.505 },
    image: "/trails/trail-al-khamsin.jpeg",
  },
  {
    slug: "al-radaf",
    name: "ممشي حديقة الردف",
    type: "walking",
    distance: "3 كم",
    difficulty: "سهل",
    description:
      "تنفذ أمانة محافظة الطائف ممشى بطول 3 كلم وعرض 12 مترا في منتزه الردف (جنوبي المحافظة) لمزاولة رياضة المشي. تم اعتماد التصميم وإنشاء ممشى من الانترلوك، ويجري العمل على تطوير المساحات المجاورة من خلال إنشاء مسطحات خضراء ومجاميع ألعاب أطفال.",
    location: { lat: 21.385, lng: 40.49 },
    image: "/trails/trail-al-radaf.jpeg",
  },
  {
    slug: "al-urfa",
    name: "ممشي حديقة العرفا",
    type: "walking",
    distance: "2 كم",
    difficulty: "سهل",
    description:
      "تقع المنطقة في غرب المملكة العربية السعودية في الحجاز. مسار ممشي بطبيعة خلابة في حديقة العرفا بالطائف.",
    location: { lat: 21.41, lng: 40.46 },
    image: "/trails/trail-al-urfa.jpeg",
  },
  {
    slug: "al-sadd",
    name: "ممشي السد",
    type: "walking",
    distance: "2.5 كم",
    difficulty: "سهل",
    description:
      "ممشي السد في الطائف، موقع مميز يجمع بين جمال الطبيعة والهواء النقي. يوفر تجربة مشي هادئة بمحاذاة السد.",
    location: { lat: 21.43, lng: 40.48 },
    image: "/trails/trail-al-sadd.jpeg",
  },
  {
    slug: "king-fahad-mosque",
    name: "ممشي جامع الملك فهد",
    type: "walking",
    distance: "2 كم",
    difficulty: "سهل",
    description:
      "ممشي جامع الملك فهد في الطائف، مسار منظم بالقرب من المسجد الكبير يوفر بيئة مشي هادئة ومريحة للجميع.",
    location: { lat: 21.42, lng: 40.50 },
    image: "/trails/trail-king-fahad-mosque.jpeg",
  },
  {
    slug: "al-hukair",
    name: "ممشي حديقة الحكير",
    type: "walking",
    distance: "1.5 كم",
    difficulty: "سهل",
    description:
      "ممشي حديقة الحكير في الطائف، حديقة عامة توفر مسارات مشي جميلة وسط المساحات الخضراء والهواء النقي.",
    location: { lat: 21.44, lng: 40.51 },
    image: "/trails/trail-al-hukair.jpeg",
  },
  {
    slug: "al-anoud",
    name: "ممشي حديقة العنود",
    type: "walking",
    distance: "2 كم",
    difficulty: "سهل",
    description:
      "ممشي حديقة العنود في الطائف، من أجمل الحدائق المخصصة للمشي والاسترخاء في جو منعش.",
    location: { lat: 21.38, lng: 40.47 },
    image: "/trails/trail-al-anoud.jpeg",
  },
  {
    slug: "al-faisaliyah",
    name: "ممشي حديقة الفيصلية",
    type: "walking",
    distance: "2.5 كم",
    difficulty: "سهل",
    description:
      "ممشي حديقة الفيصلية في الطائف، بيئة مثالية لمزاولة رياضة المشي اليومي في محيط خضر وجميل.",
    location: { lat: 21.40, lng: 40.49 },
    image: "/trails/trail-al-faisaliyah.jpeg",
  },
  {
    slug: "king-abdullah-park",
    name: "ممشي حديقة الملك عبدالله",
    type: "walking",
    distance: "3 كم",
    difficulty: "سهل",
    description:
      "ممشي حديقة الملك عبدالله، من أكبر وأجمل الحدائق في الطائف. يوفر مسارات مشي فسيحة في بيئة خضراء رائعة.",
    location: { lat: 21.39, lng: 40.46 },
    image: "/trails/trail-king-abdullah-park.jpeg",
  },
  {
    slug: "city-walk",
    name: "ممشي ستي ووك",
    type: "walking",
    distance: "2 كم",
    difficulty: "سهل",
    description:
      "ممشي ستي ووك في الطائف، وجهة عصرية للمشي والترفيه في قلب المدينة مع متاجر ومطاعم متنوعة.",
    location: { lat: 21.43, lng: 40.52 },
    image: "/trails/trail-city-walk.jpeg",
  },
  {
    slug: "abu-bakr-st",
    name: "ممشي شارع أبو بكر",
    type: "walking",
    distance: "2 كم",
    difficulty: "سهل",
    description:
      "ممشي شارع أبو بكر الصديق، أحد المسارات الحضرية الممتعة في الطائف، يمر عبر أحياء حيوية في المدينة.",
    location: { lat: 21.41, lng: 40.50 },
    image: "/trails/trail-abu-bakr-st.jpeg",
  },
  {
    slug: "al-arbaeen",
    name: "ممشي شارع الأربعين",
    type: "walking",
    distance: "4 كم",
    difficulty: "سهل",
    description:
      "ممشي شارع الأربعين، من أشهر المسارات الحضرية في الطائف. شارع طويل ومنظم يتيح المشي في بيئة حضرية مريحة.",
    location: { lat: 21.36, lng: 40.48 },
    image: "/trails/trail-al-arbaeen.jpeg",
  },
  {
    slug: "al-noor-axis",
    name: "ممشي محور النور",
    type: "walking",
    distance: "3.5 كم",
    difficulty: "سهل",
    description:
      "ممشي محور النور، مسار حضري متكامل يجمع بين تجربة المشي والجمال البصري في أحد محاور الطائف الرئيسية.",
    location: { lat: 21.42, lng: 40.47 },
    image: "/trails/trail-al-noor-axis.jpeg",
  },
  {
    slug: "city-of-roses",
    name: "ممشي مدينة الورود",
    type: "walking",
    distance: "2.5 كم",
    difficulty: "سهل",
    description:
      "ممشي مدينة الورود في الطائف، عاصمة الورود في المملكة. مسار مميز يحتضن نباتات الورد الطائفي الشهير.",
    location: { lat: 21.35, lng: 40.46 },
    image: "/trails/trail-city-of-roses.jpeg",
  },
  {
    slug: "eid-prayer-khaldiya",
    name: "ممشي مصلي العيد بالخالدية",
    type: "walking",
    distance: "1.5 كم",
    difficulty: "سهل",
    description:
      "ممشي مصلى العيد بالخالدية، مسار منظم بمحيط المصلى الكبير يوفر فضاء مفتوح للمشي والاسترخاء.",
    location: { lat: 21.37, lng: 40.50 },
    image: "/trails/trail-eid-prayer-khaldiya.jpeg",
  },
];
