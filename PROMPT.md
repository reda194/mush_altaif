# 🎯 Mush Al-Taif — Design Improvement Prompt
> استخدم هذا البرومبت مع أي AI coding agent (Claude Code, Codex, Cursor, إلخ) لتحسين الموقع

---

## الخطوة 1: ثبت Impeccable في المشروع

**لو تستخدم Claude Code:**
```bash
cd /Users/reda_abdel_galil/Downloads/mush_altaif
# حمّل الـ bundle من impeccable.style
# أو يدوياً:
cp -r dist/claude-code/.claude .
```

**لو تستخدم Codex CLI:**
```bash
cp -r dist/codex/.codex/* ~/.codex/
```

**لو تستخدم Cursor:**
```bash
cp -r dist/cursor/.cursor .
```

---

## الخطوة 2: شغّل الأوامر بالترتيب

### أمر 1: `/impeccable teach` — تعريف سياق المشروع

انسخ والصق هذا في الـ agent:

```
/impeccable teach

## Design Context

**Target audience:** سكان محافظة الطائف (رجال وسيدات)، أعمار 18-65، مهتمين بالصحة والرياضة والمشي في الطبيعة. مستوى لياقة متفاوت (مبتدئين ومحترفين).

**Use cases:**
- معرفة مواعيد وأماكن التجمعات الأسبوعية للمشي
- التسجيل كعضو أو متطوع
- اكتشاف مسارات المشي والهايكنج في الطائف
- متابعة أخبار وفعاليات الجمعية
- التواصل مع إدارة الجمعية

**Brand personality:** دافئ، مجتمعي، طبيعي، سعودي أصيل — ليس تقني ولا مؤسسي جامد. يشبه نادي رياضي شعبي أكثر من شركة.

**3 concrete words for brand voice:** "دافئ ومجتمعي ومحفّز"

**Tone:** organic/natural, warm, community-driven, welcoming — like a friendly sports club, not a corporate entity.

**Differentiation:** أول جمعية مشاة في السعودية — الطابع الجبلي الفريد للطائف (جبال، ورد، هواء نقي)

**Theme:** Light mode — المستخدم يتصفح الموقع نهاراً أثناء استراحة أو في مشوار، الضوء طبيعي. Dark mode كخيار ثانوي.

**Language:** Arabic RTL (Saudi dialect for casual text, formal Arabic for official content)
```

---

### أمر 2: `/audit` — فحص الموقع الحالي

```
/audit

راقب كل component في الصفحة الرئيسية:
- HeroSection.tsx
- StatsSection.tsx
- BenefitsSection.tsx
- BentoSection.tsx
- MapSection.tsx
- TrustSection.tsx
- GallerySection.tsx
- FAQSection.tsx
- NewsSection.tsx
- TestimonialsSection.tsx
- CTASection.tsx
- Header.tsx
- Footer.tsx

تحقق من:
1. Accessibility (contrast, ARIA, keyboard nav)
2. Performance (layout thrashing, unoptimized images)
3. Theming (hard-coded colors vs tokens)
4. Responsive design (touch targets, mobile overflow)
5. Anti-patterns (AI slop tells)
```

---

### أمر 3: `/critique` — مراجعة التصميم

```
/critique

## الملاحظات المبدئية (من تحليل الكود):

### ❌ مشاكل واضحة:

1. **الخطوط:** Cairo فقط — خط واحد لكل شيء. ممنوع حسب Impeccable (لازم pair fonts)
   - Cairo في الـ "reflex_fonts_to_reject" مش موجود، لكن استخدامه لوحده مش كافي
   - محتاجين display font مميز + body font

2. **الإيميلات المزيفة — مشكلة بيانات:**
   - HeroSection: صورة Unsplash generic مش من الطائف
   - GallerySection: 4 صور كلها من Unsplash، مش حقيقية
   - TestimonialsSection: صور أرقام من Unsplash، مش أعضاء حقيقيين
   - NewsSection: صور generic

3. **المبالغة في Glass/Glow:**
   - StatsSection: `backdrop-blur-2xl` + `bg-brand/10 blur-3xl` + `shadow-2xl shadow-black/50` — excessive
   - HeroSection: `shadow-[0_0_30px_rgba(0,166,81,0.4)]` — AI glow tell
   - CTASection: `shadow-2xl shadow-brand/20` — glow accent

4. **Centered Everything:**
   - HeroSection: كل النص center ✅ (مسموح)
   - BenefitsSection: `text-center` — عناوين القسم center
   - FAQSection: `text-center` — center
   - TestimonialsSection: `text-center` — center
   - NewsSection: headings left-aligned ✅
   - أغلب الأقسام centered — ممل بصرياً

5. **Card Grids متشابهة:**
   - BenefitsSection: 3 cards متطابقة (icon + heading + text)
   - NewsSection: 3 cards متطابقة (image + heading + text)
   - TestimonialsSection: 3 cards متطابقة (avatar + quote)

6. **نسبة الأحجام:**
   - HeroSection: `text-4xl md:text-7xl` ✅ contrast جيد
   - لكن الأقسام الداخلية: `text-3xl md:text-5xl` → `text-base md:text-lg` — الفرق 3x مش 1.25x
   - بعض الأماكن الأحجام متقاربة جداً

7. **Pure Colors:**
   - `bg-white` و `text-white` بدون تدرج — يفضّل تلوين بسيط
   - `#1a1a1a` (charcoal) قريب من الأسود الصافي

8. **Unsplash Generic Images:**
   - `photo-1551632811-561732d1e306` — مش من الطائف
   - كل الصور generic hiking photos

### ✅ إيجابيات:

1. ✅ استخدام OKLCH-like tokens (`--color-brand`)
2. ✅ Framer Motion مع spring animations
3. ✅ Lenis smooth scroll
4. ✅ RTL support
5. ✅ React Query ready
6. ✅ Leaflet map integration
7. ✅ Embla carousel
8. ✅ Next.js 16 + React 19 + Tailwind 4
9. ✅ Counter animation في StatsSection
10. ✅ Mobile-first responsive design
```

---

### أمر 4: `/polish` — التحسين النهائي

```
/polish

## التعديلات المطلوبة بالترتيب:

### 🔤 Typography (أولوية قصوى)

1. **إضافة Display Font:** 
   - Cairo موجود كـ body/UI font ✅
   - أضف **Noto Kufi Arabic** أو **Amiri** كـ display font للعناوين الكبيرة فقط
   - أو جرب خطوط أقل شيوعاً: **Lemonada**, **Tajawal** (مع الحذر من overuse), **Reem Kufi**
   - الهدف: العناوين بخط مختلف عن النص العادي

2. **Type Scale:**
   - استخدم `clamp()` للعناوين:
     - H1: `clamp(2.5rem, 5vw + 1rem, 4.5rem)`
     - H2: `clamp(1.875rem, 3vw + 0.5rem, 3rem)`
     - H3: `clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem)`
     - Body: `1rem` (16px)
     - Small: `0.875rem` (14px)
   - نسبة 1.4x بين كل مستوى

3. **Line Height للعربي:**
   - Body: `1.8` (مش 1.5 — العربي يحتاج مساحة أكثر)
   - Headings: `1.3`

### 🎨 Color System

استبدل الألوان في `globals.css`:

```css
@theme {
  /* Primary — inspired by Taif's mountains and nature */
  --color-brand: oklch(0.62 0.18 155);        /* Forest green */
  --color-brand-light: oklch(0.72 0.15 155);   /* Lighter green */
  --color-brand-dark: oklch(0.45 0.16 155);    /* Deep forest */
  
  /* Accent — inspired by Taif's famous roses */
  --color-rose-accent: oklch(0.75 0.12 20);    /* Warm rose gold */
  
  /* Neutrals — tinted toward brand hue (155) */
  --color-charcoal: oklch(0.18 0.01 155);      /* Tinted, NOT pure black */
  --color-charcoal-light: oklch(0.25 0.01 155);
  --color-surface: oklch(0.97 0.005 155);      /* Warm cream */
  --color-surface-dark: oklch(0.93 0.005 155);
  
  /* Text */
  --color-text-primary: oklch(0.18 0.01 155);
  --color-text-secondary: oklch(0.45 0.01 155);
  --color-text-muted: oklch(0.60 0.008 155);
}
```

### 🏗️ Layout Fixes

1. **StatsSection:**
   - أزل `backdrop-blur-2xl` و `bg-brand/10 blur-3xl` — excessive glow
   - استبدل بـ `bg-charcoal` مع border بسيط
   - أزل `shadow-2xl shadow-black/50`

2. **BenefitsSection:**
   - بدل 3 cards متطابقة → استخدم alternating layout (واحد يسار، واحد يمين)
   - أو استخدم bento grid بأحجام مختلفة

3. **HeroSection:**
   - أزل `bg-gradient-to-r from-brand to-brand-light` على النص — gradient text ممنوع
   - استبدل بلون صلب: `text-brand-light`
   - أزل `shadow-[0_0_30px_rgba(0,166,81,0.4)]` — AI glow tell
   - أزل `glass` class من الأزرار

4. **FAQSection:**
   - استخدم `grid-template-rows` animation بدل `height: "auto"`
   - أضف +/× بدل ChevronDown

5. **NewsSection:**
   - بدل 3 cards متطابقة → featured card (كبيرة) + 2 cards صغيرة
   - Editorial layout مش uniform grid

6. **TestimonialsSection:**
   - أضف star rating (5 نجوم)
   - أضف اسم المسار/الفعالية تحت الاسم

7. **CTASection:**
   - أزل `shadow-2xl shadow-brand/20`
   - خليه أنظف بدون excessive decoration

### 🎬 Motion Fixes

1. **Easing:** كل الـ animations تستخدم `ease: [0.22, 1, 0.36, 1]` (ease-out-quart) ✅
2. **FAQ:** غيّر `height: 0 → "auto"` إلى `grid-template-rows: 0fr → 1fr` (أفضل performance)
3. **أضف `prefers-reduced-motion` fallback:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
   }
   ```

### 📱 Responsive Fixes

1. **Touch targets:** كل الأزرار لازم تكون 44px minimum (بعضها حالياً أقل)
2. **GallerySection:** على الموبايل `flex-[0_0_87%]` ممتاز ✅
3. **StatsSection:** `-mt-24 md:-mt-40` تأكد إنه ما يسبب overflow على الموبايل

### ♿ Accessibility

1. **Focus rings:** أضف `focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2` لكل الأزرار
2. **Alt text:** تأكد إن كل `<img>` عنده `alt` وصف حقيقي (مش "image" أو "photo")
3. **ARIA:** FAQSection أضف `role="region"` و `aria-labelledby`
4. **Semantic HTML:** استخدم `<section>` مع `aria-labelledby` لكل قسم

### 🚫 Anti-Patterns للإزالة

1. ❌ `glass` utility class → استبدل بـ `bg-charcoal/95` بسيط
2. ❌ `glass-dark` → `bg-charcoal/90 backdrop-blur-sm`
3. ❌ Gradient text على HeroSection H1
4. ❌ Glow shadows (`shadow-[0_0_30px_...]`)
5. ❌ `bg-brand/10 blur-3xl` decorative blurs
6. ❌ `transparenttextures.com/patterns/cubes.png` → أنظف بدون pattern أو pattern محلي
```

---

### أمر 5: `/animate` — إضافة حركة هادفة

```
/animate

## الحركات المطلوبة:

1. **Scroll Indicator:** أضف في HeroSection bottom:
   - سهم يشير لتحت مع حركة bounce خفيفة
   - يختفي بعد أول scroll

2. **Section Entrances:** كل section يدخل بـ:
   - Staggered fade-up (50ms بين كل عنصر)
   - Duration: 600ms
   - Easing: ease-out-quart
   - Trigger: `whileInView` مع `once: true`

3. **Counter Animation:** StatsSection عنده counter ✅ — حافظ عليه

4. **Gallery Hover:** zoom effect موجود ✅ — حافظ عليه

5. **FAQ Accordion:** 
   - استخدم grid-template-rows animation:
   ```tsx
   <motion.div
     initial={{ gridTemplateRows: "0fr" }}
     animate={{ gridTemplateRows: "1fr" }}
     exit={{ gridTemplateRows: "0fr" }}
   >
   ```

6. **Header Scroll:** transparent → solid موجود ✅

7. **أضف `prefers-reduced-motion`:** عطل كل الحركات للمستخدمين اللي اختاروا reduced motion
```

---

### أمر 6: `/colorize` — تحسين الألوان

```
/colorize

## لوحة الألوان المستهدفة:

مستوحاة من طبيعة الطائف: الجبال الخضراء، الورد الطائفي، الهواء النقي

| الدور | اللون | القيمة |
|-------|-------|--------|
| Primary | أخضر الغابة | `oklch(0.62 0.18 155)` |
| Primary Light | أخضر فاتح | `oklch(0.72 0.15 155)` |
| Primary Dark | أخضر داكن | `oklch(0.45 0.16 155)` |
| Accent | ذهبي الورد | `oklch(0.75 0.12 20)` |
| Background | كريمي دافئ | `oklch(0.97 0.005 155)` |
| Surface | رمادي دافئ | `oklch(0.93 0.005 155)` |
| Text Primary | فحمي مائل | `oklch(0.18 0.01 155)` |
| Text Secondary | رمادي مائل | `oklch(0.45 0.01 155)` |
| Text Muted | رمادي فاتح | `oklch(0.60 0.008 155)` |

**60-30-10 Rule:**
- 60% neutral/surface (cream, white, charcoal)
- 30% secondary (text, borders)
- 10% accent (brand green, rose gold highlights)

**لا تستخدم:**
- ❌ Purple/violet gradients
- ❌ Cyan on dark
- ❌ Gradient text
- ❌ Pure black (#000) or pure white (#fff)
- ❌ Glow effects (box-shadow with colored blur)
```

---

### أمر 7: `/typeset` — تحسين الخط

```
/typeset

## Font Pairing:

**Display Font (عناوين):** اختر واحد:
- **Reem Kufi** — geometric, distinctive, Saudi feel
- **Amiri** — Naskh style, elegant, traditional
- **Lemonada** — playful, friendly, modern

**Body Font:** Cairo (موجود ✅) — keep it for body text and UI

## Implementation:

```tsx
// layout.tsx
import { Cairo } from 'next/font/google';
import { Reem_Kufi } from 'next/font/google'; // أو Amiri

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-body',
});

const display = Reem_Kufi({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-display',
});

// استخدم الاتنين: className={`${cairo.variable} ${display.variable}`}
```

```css
/* globals.css */
h1, h2, h3 { font-family: var(--font-display), sans-serif; }
body, p, span, button { font-family: var(--font-body), sans-serif; }
```

## Type Scale (modular, 1.4 ratio):

| Level | Mobile | Desktop | Usage |
|-------|--------|---------|-------|
| H1 | 2.5rem | 4.5rem | Hero only |
| H2 | 1.875rem | 3rem | Section titles |
| H3 | 1.25rem | 1.5rem | Card titles |
| Body | 1rem | 1rem | Paragraphs |
| Small | 0.875rem | 0.875rem | Labels, meta |

## Arabic-specific:
- Line-height: 1.8 for body (not 1.5)
- Line-height: 1.3 for headings
- Max line length: 65ch
- No widows/orphans — use `text-balance` where supported
```

---

### أمر 8: `/layout` — تحسين التخطيط

```
/layout

## Spacing System:

استخدم 4px spacing scale:
```
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
--space-32: 128px;
```

## Section Spacing:
- Between sections: `py-24` (96px) — varies for rhythm
- Not all sections same height — create visual rhythm:
  - Hero: full viewport
  - Stats: compact
  - Benefits: generous
  - Bento: generous
  - Map: generous
  - Trust: compact
  - Gallery: generous
  - FAQ: medium
  - News: generous
  - Testimonials: medium
  - CTA: medium

## Layout Patterns:

### BenefitsSection — بدل uniform cards:
```
[  Text + Icon  ]  [        Image/Illustration        ]
[       Image/Illustration        ]  [  Text + Icon  ]
[  Text + Icon  ]  [        Image/Illustration        ]
```

### NewsSection — editorial layout:
```
[         Featured Card (2x)          ]
[  Card 2  ]  [  Card 3  ]
```

### Testimonials — masonry or varied:
```
[  Card 1 (tall)  ]  [  Card 2  ]
                     [  Card 3  ]
```

### FAQ — single column centered (existing ✅):
No change needed — single column is appropriate for FAQ.

## Max-widths:
- Content: 1280px (7xl)
- Text blocks: 65ch
- Full-bleed sections: hero, gallery, map
```

---

## 💡 ملخص سريع — أوامر بالترتيب:

| # | الأمر | الهدف |
|---|-------|-------|
| 1 | `/impeccable teach` | تعريف سياق المشروع |
| 2 | `/audit` | فحص المشاكل التقنية |
| 3 | `/critique` | مراجعة التصميم |
| 4 | `/polish` | التحسين النهائي (الأهم!) |
| 5 | `/animate` | تحسين الحركات |
| 6 | `/colorize` | تحسين الألوان |
| 7 | `/typeset` | تحسين الخطوط |
| 8 | `/layout` | تحسين التخطيط |

## ⚡ أمر واحد يجمع الكل (لو تبي اختصار):

```
/impeccable teach → /audit → /critique → /polish → /animate → /colorize → /typeset → /layout

Apply all improvements to the mush_altaif landing page. Project is at /Users/reda_abdel_galil/Downloads/mush_altaif/

Target: Make it feel like a REAL Saudi community initiative — warm, authentic, connected to Taif's nature — NOT a generic AI landing page.

Brand voice: دافئ ومجتمعي ومحفّز
Audience: سكان الطائف 18-65، مهتمين بالمشي والصحة
Theme: Light mode primary
Language: Arabic RTL
```

---

_Generated based on Impeccable v1 (github.com/pbakaus/impeccable) + mush_altaif project analysis_
_73 files, 11 homepage components, Next.js 16 + React 19 + Tailwind 4_
