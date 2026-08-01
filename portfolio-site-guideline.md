# Portfolio Website — Build Guideline

**Owner:** Talha
**Direction:** Minimal, technical, Nothing-inspired design language. White base + dark mode toggle. Built to grow from portfolio → small business site.
**Goal of this doc:** enough detail that you (or an AI pair-coder like Antigravity) can build this without a designer, and without re-deciding fundamentals mid-build.

---

## 1. Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14+ (App Router), TypeScript** | File-based routing, image optimization, easy static export or Vercel deploy |
| Styling | **Tailwind CSS** | Fast iteration, no separate CSS files to maintain |
| Animation | **Framer Motion** | Scroll-reveals, hover states — used sparingly |
| Components | **shadcn/ui** (optional, add as needed) | Pre-built accessible primitives (forms, dialogs) you restyle instead of building from scratch |
| Dark mode | **next-themes** | Handles toggle + persistence + system preference in a few lines |
| Fonts | Google Fonts via `next/font` | Zero layout shift, self-hosted automatically |
| Hosting | **Vercel** | Zero-config deploy from GitHub, generous free tier |
| 3D embed | **iframe** to your published PlayCanvas project (v1) | Simplest; swap to self-hosted static export later if you want tighter control |

Don't add a CMS yet. Hardcode your case studies as local data (JSON/TS files) until you actually have 8-10+ pieces and it becomes painful to edit by hand. Adding Sanity/Contentful now is premature complexity.

---

## 2. Design Language — "Nothing, but for hardware viz"

### 2.1 Core principles
- **Restraint over decoration.** No gradients, no drop shadows, no glassmorphism. If an element doesn't need to be there, remove it.
- **Exposed structure.** Thin 1px borders/grid lines are a *feature*, not a bug. Show measurements, show alignment. This mirrors your actual work (CAD, technical renders).
- **One accent color.** Everything else is black/white/gray. Pick one accent and use it sparingly — for links, active states, and one hero moment. Suggestion: a cold technical blue or a warm engineering orange (test both against your render thumbnails; pick whichever doesn't fight with the cars' paint colors).
- **Typography does the personality work.** Mixing a monospace display font with a clean sans body font is doing 80% of the "Nothing" feeling. You don't need custom illustration or iconography.
- **Generous whitespace.** Err on the side of too much padding, not too little. Sparse per-screen content density.
- **Motion is functional, not decorative.** Fade + slight upward slide on scroll-into-view. Instant, crisp hover states. No bounce, no parallax, no 3D tilt gimmicks.

### 2.2 Typography

```
Display / Headings: 'Space Mono' or 'JetBrains Mono' (Google Fonts)
Body: 'Inter' (Google Fonts)
```

- Headings: mono, uppercase or normal case (test both), slightly increased letter-spacing (`tracking-wide` / `tracking-wider`)
- Body: sans, normal case, comfortable line-height (`leading-relaxed`)
- Numbers/labels/meta text (dates, tags, specs): mono, smaller size, often at reduced opacity (`text-neutral-500`)

### 2.3 Color system (Tailwind CSS variables)

Define these as CSS custom properties in `globals.css` so dark mode is a variable swap, not a rewrite:

```css
:root {
  --background: 0 0% 100%;      /* white */
  --foreground: 0 0% 8%;        /* near-black text */
  --muted: 0 0% 45%;            /* secondary text */
  --border: 0 0% 90%;           /* hairline grid/borders */
  --accent: [pick one — e.g. 217 91% 60% for blue];
}

.dark {
  --background: 0 0% 6%;
  --foreground: 0 0% 96%;
  --muted: 0 0% 60%;
  --border: 0 0% 18%;
  --accent: [same hue, maybe +10% lightness for contrast on dark];
}
```

Rule of thumb: **never introduce a second accent color.** If you need to differentiate categories (e.g. "robotics" vs "automotive" tags), use the accent at different opacities, or plain gray, not a new hue.

### 2.4 Spacing & layout rules
- Section vertical padding: `py-24` to `py-32` (desktop), `py-16` (mobile)
- Max content width: `max-w-6xl` or `max-w-7xl`, centered
- Grid gaps: `gap-8` to `gap-12` minimum — don't let cards touch
- Borders instead of shadows for cards/dividers: `border border-border` not `shadow-lg`
- Corner radius: keep it small and consistent — `rounded-sm` or `rounded-md`, or **zero radius** for a sharper, more "engineering" feel. Pick one and use it everywhere.

---

## 3. Site structure

```
/                    Homepage — hero, featured work grid, quick pitch, contact CTA
/work                Full portfolio grid, filterable by category
/work/[slug]         Individual case study page
/configurator        PlayCanvas car configurator, full-page embed
/services            What you offer (seed for business expansion)
/pricing             Tiered pricing (see Section 5 below)
/about               Background, tools, process
/contact             Form + direct email/booking
```

### 3.1 Homepage sections (in order)
1. **Hero** — your name/studio name, one-line positioning statement (e.g. "3D visualization for hardware companies that don't have a CAD-to-render pipeline yet"), maybe a subtle looping render or a static hero image. Optional: a live embedded mini version of the PlayCanvas configurator as the hero itself, once it's polished.
2. **Featured work** — 3-6 best pieces, grid, image + title + one-line category tag. Click through to `/work/[slug]`.
3. **Capabilities strip** — short list: "Product renders · ZBrush sculpts · Animation · Web configurators · Digital twins" — plain text or a simple horizontal list, no icons needed.
4. **About teaser** — 2-3 sentences, link to full `/about`.
5. **Contact CTA** — simple, direct: "Have a product that needs to be seen properly? [Get in touch →]"

### 3.2 Case study page (`/work/[slug]`) structure
1. Title + client/context + role
2. Hero image or embedded viewer
3. Brief (what was the ask)
4. Process (2-4 short paragraphs or bullet points — don't over-narrate)
5. Image gallery (grid, lightbox on click)
6. Tools used (tag list — Blender, ZBrush, Substance, etc.)
7. Next/previous case study nav

Keep copy short. The renders should do the talking — this isn't a blog.

---

## 4. Component checklist (build these once, reuse everywhere)

- [ ] `<Header />` — logo/name, nav links, dark mode toggle
- [ ] `<Footer />` — minimal, contact links, maybe a mono-styled timestamp/location easter egg
- [ ] `<ThemeToggle />` — sun/moon or simple text toggle, uses `next-themes`
- [ ] `<WorkCard />` — image + title + tag, used in grids
- [ ] `<Section />` — wrapper enforcing consistent vertical padding/max-width
- [ ] `<Button />` — one primary style (accent-filled), one secondary style (outline/ghost)
- [ ] `<Tag />` — small mono pill/label for categories and tools
- [ ] `<FadeIn />` — Framer Motion wrapper for scroll-reveal, wrap sections in this
- [ ] `<ContactForm />` — name, email, message, maybe a "project type" select

Build these first, in isolation, before assembling pages. It'll keep the whole site visually consistent without you having to remember your own spacing rules every time.

---

## 5. Pricing page — starter tiers

Based on your current market position (from our pricing conversation), a rough structure:

| Tier | What's included | Starting price |
|---|---|---|
| Single render / hero still | 1 product, studio lighting, up to 3 revisions | $300–800 |
| Render set | Multiple angles/variants of one product | Custom, scoped per project |
| Web configurator (image sequence) | Pre-rendered 360° turntable, drag-to-rotate, static hosting | $1,500–4,000 |
| Web configurator (real-time) | Interactive 3D (PlayCanvas), 2-4 swappable parts/trims | $4,000–9,000 |
| Full integration | Configurator embedded + wired into client's site, quote/contact flow | $8,000–18,000 |

Don't publish exact numbers if you're not ready to commit — "Starting from $X" or "Get a quote" is fine for v1. You can always tighten this once you've closed a few direct deals.

---

## 6. Build order (do it in this sequence)

1. **Scaffold** — `create-next-app` with TypeScript + Tailwind, set up `globals.css` color variables, install `next-themes` and `framer-motion`
2. **Fonts + theme toggle** — get typography and dark mode working on a blank page first. Confirm it feels right before building anything else.
3. **Core components** — Header, Footer, Section, Button, Tag, WorkCard (see checklist above)
4. **Homepage** — assemble sections using the components. Use placeholder images/copy if renders aren't ready.
5. **`/work` grid + one real `/work/[slug]` page** — get the case-study template right with one real project before duplicating it
6. **`/about` and `/contact`** — these are simple, quick wins once components exist
7. **`/services` and `/pricing`** — mostly text + the pricing table, low effort once the design system exists
8. **`/configurator`** — embed the PlayCanvas iframe last, once the site shell is solid
9. **Polish pass** — scroll animations, responsive check on mobile, favicon, meta tags/OG images for link previews

---

## 7. Things to deliberately NOT do (v1)

- No CMS — hardcode content until it's genuinely painful not to have one
- No blog — you don't need one yet, adds maintenance burden for no return right now
- No custom illustration/iconography — the mono/sans type pairing + whitespace does the visual work
- No parallax or 3D scroll gimmicks — fights the "restraint" principle
- No client testimonials section until you actually have a few — an empty or fake-looking testimonials section hurts more than it helps
- No multi-language support — not needed yet, adds real complexity

---

## 8. Reference direction (for visual inspiration, not code)

- Nothing (nothing.tech) — typography, restraint, exposed-structure motif
- Framer marketplace dark templates — **Darkfolio**, **BASELANE**, **Torch** — for layout/grid rhythm reference only, don't build inside Framer itself
- Automotive/industrial product sites generally lean this direction more than generic "creative portfolio" templates — keep referencing that category, not generic dev-portfolio sites

---

## 9. When to bring in outside help again

Come back for help (me, or a professional) when you hit one of these:
- You want the site to feel meaningfully more "designed" than this baseline allows (custom illustration, motion systems beyond scroll-reveal)
- You're adding a CMS or e-commerce logic
- You're building the self-hosted (non-iframe) PlayCanvas integration and need tighter loading-state coordination between the site shell and the 3D canvas
- You've got real client feedback and need to re-scope the pricing/services pages around what's actually converting
