# Impeccable Design Prompt — Mush Al-Taif (جمعية مشاة الطائف)

## Copy this entire prompt and paste it into your AI coding tool (Cursor, Claude Code, Codex, etc.)

---

/impeccable

## Project Context

This is the official website for **Mushaat At-Ta'if** (جمعية مشاة الطائف) — the Taif Walking Association, a Saudi nonprofit sports/community organization promoting walking culture, healthy lifestyles, and community sports in the Taif region, aligned with Saudi Vision 2030.

### Tech Stack
- **Next.js 16** (App Router, React 19 with React Compiler)
- **Tailwind CSS v4** with `@theme` custom tokens
- **Framer Motion 12** for animations
- **Lenis** for smooth scrolling
- **Embla Carousel** for galleries
- **TypeScript 5**, RTL Arabic (`lang="ar" dir="rtl"`)
- **Font**: Google Cairo (Arabic, weights 300/400/600/700)

### Current Design Tokens
```
brand: #00a651 (vibrant green)
brand-light: #33b874
charcoal: #1a1a1a
charcoal-light: #2d2d2d
surface: #f8f9fa
surface-dark: #e9ecef
```

### Homepage Sections (in order)
1. HeroSection — Full-screen parallax hero with hiking image, gradient overlay, animated tagline
2. StatsSection — Animated counter cards (3500+ members, 120K+ km, 45 initiatives, 15K volunteer hours)
3. BenefitsSection — Three benefit cards (physical health, mental clarity, social connection)
4. BentoSection — Bento-grid layout: membership, governance, events, trail guide
5. MapSection — OpenStreetMap embed centered on Taif with floating info card
6. TrustSection — Partner logos grid (National Center, Ministry of Sport, Vision 2030, Taif Municipality)
7. GallerySection — Embla carousel of trail images with autoplay, RTL, distance/difficulty badges
8. FAQSection — Accordion FAQ (4 questions)
9. NewsSection — Three news cards with images, categories, dates
10. TestimonialsSection — Three testimonial cards
11. CTASection — Green branded CTA banner

## What I Need

Redesign and improve the entire website to look like it was designed by a professional human design studio — not AI-generated. Apply ALL of the following Impeccable commands systematically:

### Phase 1: /audit — Evaluate Current State
Run a full technical quality check across:
- Accessibility (WCAG AA compliance, contrast ratios, heading hierarchy)
- Performance (image optimization, animation performance, bundle size)
- Responsive design (touch targets, fluid layouts, mobile experience)
- Anti-pattern detection using ALL 37 Impeccable rules

### Phase 2: /critique — Design Review
Evaluate the current design from a UX perspective:
- Visual hierarchy — is the eye guided correctly?
- Information architecture — does content flow logically?
- Emotional resonance — does it feel like a vibrant Saudi community org?
- Cognitive load — are sections digestible?
- Does it look like generic AI output or a bespoke human design?

### Phase 3: /typeset — Typography Overhaul
- The site currently uses ONLY Cairo font for everything. This violates the "Single font for everything" anti-pattern.
- **Fix**: Pair a distinctive Arabic display font for headings (e.g., **Tajawal Bold**, **Almarai**, **Cairo** for headings only) with a refined body font (e.g., **IBM Plex Sans Arabic**, **Noto Sans Arabic**)
- Establish clear typographic scale with at least 1.25x ratio between steps
- Ensure body text is 16px minimum, line-height 1.5-1.7
- Avoid flat type hierarchy — create strong contrast between heading levels
- Do NOT use all-caps for body text

### Phase 4: /layout — Spatial Design
- Fix monotonous spacing — use tight groupings for related items and generous separations between sections
- Break free from "everything centered" — use asymmetric layouts for sections like Benefits, News
- Fix identical card grids — vary card sizes, use editorial layouts
- Eliminate nested cards (card inside card)
- Don't wrap everything in cards — use spacing and typography for visual grouping
- Ensure line length is 65-75ch maximum for readability
- Create visual rhythm — alternating section backgrounds, varying section heights

### Phase 5: /colorize — Color Strategy
- The current palette is minimal (green + charcoal + surface). Add strategic color depth.
- Create a warm, nature-inspired palette that reflects Taif's landscape:
  - Primary: Keep the brand green (#00a651) but add tonal variations (darker, lighter, muted)
  - Accent: Add a warm terracotta/sand tone reflecting Taif's mountains
  - Neutrals: Tinted grays (not pure gray — add slight green or warm undertone)
  - Background: Not pure white — use warm off-white or very light warm gray
- Do NOT use purple/violet gradients, cyan-on-dark, or neon glows (AI slop patterns)
- Ensure all text meets WCAG AA contrast (4.5:1 body, 3:1 large text)
- No gradient text on headings — use solid colors

### Phase 6: /animate — Purposeful Motion
- Replace any bounce/elastic easing with smooth exponential easing (ease-out-quart/quint/expo)
- Do NOT animate width/height/padding/margin — use transform and opacity only
- Add purposeful micro-interactions:
  - Smooth hover states on cards (subtle scale + shadow, not bounce)
  - Stagger animations for card grids with varied delays
  - Scroll-triggered reveals with subtle fade-up (not dramatic)
  - Smooth accordion open/close for FAQ
  - Button press feedback (subtle scale down)
- Keep animations functional, not decorative — they should guide attention

### Phase 7: /delight — Moments of Joy
- Add personality touches that make the site memorable:
  - Trail difficulty indicators with creative visual treatment (not just badges)
  - Animated counter numbers that feel satisfying
  - Subtle parallax on gallery images
  - Creative section transitions (not just fade-in)
  - A "walking steps" progress indicator for scroll position
  - Member count that feels alive (subtle pulse or gentle count-up)
- These should feel natural to the walking/hiking theme, not generic

### Phase 8: /adapt — Responsive Excellence
- Ensure ALL sections work beautifully from 320px mobile to 4K desktop
- Touch targets minimum 44x44px
- Mobile navigation must be smooth and complete
- Cards should stack gracefully, not just shrink
- Gallery carousel must support swipe gestures naturally
- No amputated features on mobile — adapt, don't strip

### Phase 9: /clarify — UX Writing
- Review all Arabic copy for clarity and impact
- Eliminate redundant information (sections that repeat the heading)
- Ensure microcopy is clear: button labels, form placeholders, error messages
- Every word must earn its place
- The voice should be warm, community-oriented, and authentically Saudi

### Phase 10: /distill — Simplify
- Remove any visual noise or unnecessary complexity
- If a section doesn't serve the user's journey, merge or remove it
- Strip decorative elements that don't communicate meaning
- Reduce the number of visual treatments — pick 2-3 patterns and use them consistently

### Phase 11: /bolder — Amplify Where It Matters
- The hero section should feel commanding — make the photography and typography bolder
- Stats should feel impactful — not just numbers in cards
- The CTA should feel urgent and compelling
- Trail cards should evoke adventure and excitement
- The brand identity (green + walking + Taif + community) should be unmistakable

### Phase 12: /polish — Final Quality Pass
- Fix alignment, spacing, and consistency across all sections
- Ensure perfect pixel alignment
- Verify all hover/focus/active states
- Check dark mode implementation (the site has next-themes)
- Ensure consistent border-radius usage (don't mix too many radii)
- Add proper focus-visible styles for keyboard navigation
- Optimize images (use Next.js Image component with proper sizing)
- Add proper aria-labels and semantic HTML

### Phase 13: /harden — Production Ready
- Error handling for map embeds (fallback if OpenStreetMap fails)
- Empty states for dynamic sections (news, events, gallery)
- Loading skeletons for async content
- Text overflow handling (truncate with ellipsis where needed)
- Ensure all interactive elements have proper disabled states
- Add skip-to-content link for accessibility
- Verify heading hierarchy (no skipped levels)
- Test with screen reader in mind

## Anti-Patterns to AVOID (from Impeccable's 37 rules)

### Visual Details
- NO border accent on rounded elements (thick border + border-radius clash)
- NO glassmorphism everywhere (blur/glass as decoration)
- NO modals by reflex (use inline solutions instead)
- NO rounded rectangles with generic drop shadows
- NO side-tab accent borders on cards
- NO sparklines as decoration

### Typography
- NO flat type hierarchy (sizes too close together)
- NO icon tile stacked above heading (the universal AI card template)
- NO single font for everything (pair display + body fonts)
- NO overused fonts (Inter, Roboto, Open Sans — we use Arabic fonts, pick distinctive ones)
- NO all-caps body text
- NO monospace as "technical" shorthand

### Color & Contrast
- NO AI color palette (purple/violet gradients, cyan-on-dark)
- NO dark mode with glowing accents
- NO gradient text on headings
- NO gray text on colored backgrounds
- NO pure black (#000000) background

### Layout & Space
- NOT everything centered (use left-aligned text with asymmetric layouts)
- NO hero metric layout (big number, small label, 3 supporting stats)
- NO identical card grids (same-sized cards repeated endlessly)
- NO monotonous spacing (same value everywhere)
- NO nested cards (card inside card)
- NO wrapping everything in cards
- NO line length over 80 characters

### Motion
- NO bounce or elastic easing (use exponential easing)
- NO layout property animation (no width/height/padding/margin animation)

### Interaction
- NOT every button is a primary button (build hierarchy)
- NO redundant information

### Responsive
- NO amputating features on mobile

### General Quality
- NO cramped padding (minimum 8px, ideal 12-16px)
- NO justified text without hyphenation
- NO low contrast text (must meet WCAG AA)
- NO skipped heading levels
- NO tight line height (minimum 1.5x for body)
- NO body text below 14px (ideal 16px)
- NO wide letter spacing on body text (above 0.05em)

## Design Direction

The site should feel like a premium Saudi community organization — warm, trustworthy, and alive. Think of it as the digital equivalent of a well-designed visitor center at a national park. It should:

1. **Feel authentically Saudi** — not a generic template
2. **Evoke Taif's nature** — mountains, roses, cool climate, trails
3. **Build trust** — clear governance, real numbers, partner logos
4. **Inspire action** — make people want to join, volunteer, walk
5. **Look handcrafted** — not like every other AI-generated nonprofit site

The design language should use:
- Organic shapes and nature-inspired visual elements
- A warm, earthy color palette anchored by the brand green
- Strong Arabic typography with clear hierarchy
- Photography-forward layouts (Taif's landscapes are stunning — leverage them)
- Subtle motion that feels like walking — smooth, steady, purposeful
- Generous whitespace that lets content breathe

## Output

Redesign all components following the phases above. Generate production-ready code that I can directly use in my Next.js project. Maintain the existing project structure and file organization. Preserve all existing data and functionality — only improve the visual design, UX, and code quality.
