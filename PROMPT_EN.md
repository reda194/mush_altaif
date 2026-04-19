# Mush Al-Taif — Design Improvement Prompt

> Copy each command block below and paste it directly into your AI coding agent (Claude Code, Codex, Cursor, etc.)

---

## Step 1: Install Impeccable

**Claude Code:**
```bash
cd /Users/reda_abdel_galil/Downloads/mush_altaif
cp -r dist/claude-code/.claude .
```

**Codex CLI:**
```bash
cp -r dist/codex/.codex/* ~/.codex/
```

**Cursor:**
```bash
cp -r dist/cursor/.cursor .
```

---

## Step 2: Run Commands in Order

### Command 1: Teach — Define project context

```
/impeccable teach

Target audience: Residents of Taif (men and women), ages 18-65, interested in health, sports, and walking in nature. Varying fitness levels from beginners to advanced.

Use cases:
- Find schedules and locations for weekly walking gatherings
- Register as a member or volunteer
- Discover walking and hiking trails in Taif
- Follow news and events of the association
- Contact the association management

Brand personality: Warm, community-driven, natural, authentically Saudi — not corporate or techy. Feels like a friendly local sports club.

3 concrete brand words: "warm and community-driven and motivating"

Tone: organic/natural, warm, community-driven, welcoming. Like a friendly sports club, not a corporate entity.

Differentiation: First walking association in Saudi Arabia — Taif's unique mountain character (mountains, roses, fresh air)

Theme: Light mode primary (users browse during daytime breaks). Dark mode as secondary option.

Language: Arabic RTL (Saudi dialect for casual text, formal Arabic for official content)
```

---

### Command 2: Audit — Technical quality check

```
/audit

Audit every component on the homepage:
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

Check these 5 dimensions:
1. Accessibility — WCAG contrast, ARIA labels, keyboard navigation, semantic HTML
2. Performance — layout thrashing, unoptimized images, missing lazy loading
3. Theming — hard-coded colors vs design tokens, dark mode coverage
4. Responsive — touch targets (44px min), mobile viewport, overflow issues
5. Anti-patterns — AI slop tells (glassmorphism, gradient text, glow shadows, uniform card grids)

Score each dimension 0-4. Report P0-P3 severity for each finding.
```

---

### Command 3: Critique — Design review

```
/critique

## Known Issues (from code analysis):

### Typography:
- Only ONE font (Cairo) used for everything. Needs a display + body font pair.
- H1 is clamp-free, using fixed sizes only.

### Excessive Glass/Glow Effects:
- StatsSection: backdrop-blur-2xl + bg-brand/10 blur-3xl + shadow-2xl shadow-black/50
- HeroSection: shadow-[0_0_30px_rgba(0,166,81,0.4)] — AI glow tell
- CTASection: shadow-2xl shadow-brand/20 — glow accent

### Everything Centered:
- BenefitsSection, FAQSection, TestimonialsSection all use text-center
- Creates monotonous visual rhythm

### Uniform Card Grids:
- BenefitsSection: 3 identical cards (icon + heading + text)
- NewsSection: 3 identical cards (image + heading + text)
- TestimonialsSection: 3 identical cards (avatar + quote)
- Classic AI-generated layout pattern

### Gradient Text:
- HeroSection H1 uses bg-gradient-to-r from-brand to-brand-light — banned by Impeccable

### Generic Stock Photos:
- All images from Unsplash, none from actual Taif
- Testimonial avatars are stock photos

### Pure Colors:
- bg-white and text-white without tinting
- #1a1a1a (charcoal) is close to pure black

### Positives to Keep:
- Cairo font (good for Arabic, just needs a display pair)
- Framer Motion with spring animations
- Lenis smooth scroll
- RTL support
- React Query setup
- Leaflet map integration
- Embla carousel
- Counter animation in StatsSection
- Mobile-first responsive
```

---

### Command 4: Polish — Final improvements (MOST IMPORTANT)

```
/polish

## Required Changes (in priority order):

### 1. Typography (CRITICAL)

Add a display font paired with Cairo:
- Display options: Reem Kufi, Amiri, or Lemonada (pick ONE that feels Saudi/organic)
- Body: keep Cairo
- Use CSS variables: --font-display and --font-body

Type scale with clamp():
- H1: clamp(2.5rem, 5vw + 1rem, 4.5rem) — hero only
- H2: clamp(1.875rem, 3vw + 0.5rem, 3rem) — section titles
- H3: clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem) — card titles
- Body: 1rem (16px)
- Small: 0.875rem (14px)

Arabic-specific:
- Body line-height: 1.8 (NOT 1.5 — Arabic needs more space)
- Heading line-height: 1.3
- Max line length: 65ch

### 2. Color System

Replace colors in globals.css with OKLCH:

--color-brand: oklch(0.62 0.18 155);        /* Forest green */
--color-brand-light: oklch(0.72 0.15 155);   /* Lighter green */
--color-brand-dark: oklch(0.45 0.16 155);    /* Deep forest */
--color-rose-accent: oklch(0.75 0.12 20);    /* Taif rose gold */
--color-charcoal: oklch(0.18 0.01 155);      /* Tinted black */
--color-charcoal-light: oklch(0.25 0.01 155);
--color-surface: oklch(0.97 0.005 155);      /* Warm cream */
--color-surface-dark: oklch(0.93 0.005 155);
--color-text-primary: oklch(0.18 0.01 155);
--color-text-secondary: oklch(0.45 0.01 155);
--color-text-muted: oklch(0.60 0.008 155);

### 3. Remove Anti-Patterns

- REMOVE gradient text on HeroSection H1 → use solid color text-brand-light
- REMOVE shadow-[0_0_30px_rgba(0,166,81,0.4)] from hero button → use simple shadow
- REMOVE glass utility class → replace with bg-charcoal/95
- REMOVE glass-dark → replace with bg-charcoal/90 backdrop-blur-sm
- REMOVE bg-brand/10 blur-3xl decorative blurs from StatsSection
- REMOVE shadow-2xl shadow-brand/20 from CTASection
- REMOVE transparenttextures.com pattern overlay from CTASection

### 4. Layout Variation

BenefitsSection: replace 3 identical cards with alternating layout:
- Row 1: [Text + Icon LEFT] [Image/Visual RIGHT]
- Row 2: [Image/Visual LEFT] [Text + Icon RIGHT]
- Row 3: [Text + Icon LEFT] [Image/Visual RIGHT]

NewsSection: replace 3 identical cards with editorial layout:
- Row 1: [Featured Card spanning full width]
- Row 2: [Card 2] [Card 3]

TestimonialsSection: add star ratings and route/event name under each person.

### 5. FAQ Accordion Fix

Replace height: 0 → "auto" animation with:
- grid-template-rows: 0fr → 1fr (better performance, no layout thrash)
- Use +/× icon instead of ChevronDown

### 6. Accessibility

- Add focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 to ALL buttons
- Ensure every <img> has meaningful alt text in Arabic
- Add aria-labelledby to each <section>
- FAQ: add role="region"

### 7. Reduced Motion

Add to globals.css:
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### Command 5: Animate

```
/animate

Add purposeful motion:

1. HeroSection scroll indicator: arrow pointing down with subtle ease-out-quart bounce, disappears after first scroll

2. Section entrances: staggered fade-up (50ms between items), 600ms duration, ease-out-quart, whileInView with once: true

3. FAQ accordion: use grid-template-rows animation (0fr → 1fr), NOT height: auto

4. Gallery hover zoom: keep existing (it works well)

5. StatsSection counter: keep existing counter animation

6. Header: keep transparent → solid on scroll

7. All animations must respect prefers-reduced-motion
```

---

### Command 6: Colorize

```
/colorize

Apply this nature-inspired palette (Taif mountains + roses):

| Role          | Color         | Value                    |
|---------------|---------------|--------------------------|
| Primary       | Forest green  | oklch(0.62 0.18 155)    |
| Primary Light | Light green   | oklch(0.72 0.15 155)    |
| Primary Dark  | Deep forest   | oklch(0.45 0.16 155)    |
| Accent        | Rose gold     | oklch(0.75 0.12 20)     |
| Background    | Warm cream    | oklch(0.97 0.005 155)   |
| Surface       | Warm gray     | oklch(0.93 0.005 155)   |
| Text Primary  | Tinted dark   | oklch(0.18 0.01 155)    |
| Text Secondary| Tinted gray   | oklch(0.45 0.01 155)    |
| Text Muted    | Light gray    | oklch(0.60 0.008 155)   |

60-30-10 rule:
- 60% neutral/surface (cream, charcoal)
- 30% secondary (text, borders)
- 10% accent (brand green, rose gold highlights)

NEVER use: purple gradients, cyan-on-dark, gradient text, pure black/white, glow effects
```

---

### Command 7: Typeset

```
/typeset

Font pairing:
- Display (headings): Reem Kufi OR Amiri OR Lemonada — pick the one that feels most Saudi/organic
- Body (text + UI): Cairo (already installed)

Implementation:
1. Import both fonts in layout.tsx
2. Set CSS variables: --font-display and --font-body
3. Apply in globals.css:
   h1, h2, h3 { font-family: var(--font-display), sans-serif; }
   body, p, span, button { font-family: var(--font-body), sans-serif; }

Type scale (1.4x ratio, fluid with clamp):
- H1: clamp(2.5rem, 5vw + 1rem, 4.5rem) — hero only
- H2: clamp(1.875rem, 3vw + 0.5rem, 3rem) — sections
- H3: clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem) — cards
- Body: 1rem
- Small: 0.875rem

Arabic rules:
- Body line-height: 1.8
- Heading line-height: 1.3
- Max width: 65ch
- Use text-balance where supported
```

---

### Command 8: Layout

```
/layout

Spacing scale (4px base):
4, 8, 12, 16, 24, 32, 48, 64, 96, 128

Section rhythm (vary spacing — NOT the same everywhere):
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

BenefitsSection → alternating layout:
[Text + Icon LEFT]  [Visual RIGHT]
[Visual LEFT]       [Text + Icon RIGHT]
[Text + Icon LEFT]  [Visual RIGHT]

NewsSection → editorial layout:
[         Featured Card (full width)          ]
[  Card 2              ]  [  Card 3           ]

Max-widths:
- Content: 1280px (max-w-7xl)
- Text blocks: 65ch
- Full-bleed: hero, gallery, map

Use gap for sibling spacing, NOT margins.
Use container queries for components, viewport queries for page layout.
```

---

## 🚀 One-Shot Version (all commands combined)

```
/impeccable teach

Target audience: Taif residents 18-65 interested in walking, hiking, and community health. All fitness levels.
Brand words: warm, community-driven, motivating.
Tone: organic/natural, welcoming local sports club feel.
Differentiation: First walking association in Saudi Arabia + Taif's mountain/rose heritage.
Theme: Light mode primary. Language: Arabic RTL.

Then run /audit /critique /polish /animate /colorize /typeset /layout on the mush_altaif landing page.

Project: /Users/reda_abdel_galil/Downloads/mush_altaif/
Tech: Next.js 16, React 19, Tailwind 4, Framer Motion, Lenis, Leaflet, Embla Carousel.

Goal: Transform from generic AI-looking landing page to a distinctive, authentic Saudi community initiative that reflects Taif's nature and culture. Remove all AI slop tells. Add proper font pairing, OKLCH color system, varied layouts, and purposeful motion.
```
