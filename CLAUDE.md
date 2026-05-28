# coreyhobson.com — Astro rebuild

> **You are Claude Code.** You are building this site. Hermes is reviewing your work. Follow these instructions exactly.

## Identity

This is the personal site of Corey Hobson, Lead Product Designer at Fugro on GroundIQ. He was previously Head of UX at Motorsport Games (Le Mans Ultimate, Race Control) and Senior UX Designer at Yoast SEO. He works at the intersection of product design, AI, and complex data platforms.

The site showcases his work (case studies), his thinking (blog), and his personal projects. It replaces a stale WordPress site that still says "Head of UX at Motorsport Games."

## Aesthetic

**Model: Foster + Partners.** Dark, confident, work-first. You are building a site that feels like an architecture/engineering firm's portfolio — not a SaaS landing page, not a developer blog, not an AI startup.

### Color palette

| Role | Hex | Notes |
|---|---|---|
| Background | `#0D1112` | Near-black with a hint of warmth — not pure `#000` |
| Surface/card | `#14181A` | Slightly lifted, subtle elevation |
| Text primary | `#E6E4E0` | Warm off-white, never pure `#FFF` |
| Text muted | `#8B8580` | Warm gray, readable on dark |
| Accent | `#C2703E` | Copper/amber — the only warm punch |
| Accent hover | `#D4854F` | Lighter copper for interactions |
| Border | `#2A2724` | Subtle, barely visible |

Never use: electric blue, neon green, purple gradients, glowing effects.

### Typography

- **Headlines:** Arial Black or equivalent heavy sans-serif. Bold, confident, no tracking tricks.
- **Body:** system-ui sans-serif stack. Clean, readable, 16px minimum.
- **Code/meta:** SF Mono or system monospace for dates, tags, metadata.
- No serif faces. No Google Fonts unless they're functionally necessary. System fonts load instantly.

### Layout principles

- Full-bleed images wherever possible. Images are the primary visual element.
- Generous white space (dark space). Cards have breathing room.
- Single column for reading (blog posts, case study bodies). Grids for listings.
- No rounded corners above 4px. No glassmorphism. No shadows heavier than barely-perceptible.
- Borders over shadows for separation. This reads as architectural, not SaaS.

### What to NEVER do
- Green-on-black terminal aesthetic. You are not Cursor, Warp, or any AI tool.
- Animated gradient backgrounds. Instant disqualification.
- Cards with heavy box-shadows and 12px border-radius. This is not Linear or Vercel.
- Em-dashes in copy. Never.
- AI-isms in copy: "delve," "unlock," "supercharge," "game-changer," "revolutionize."
- Sycophantic tone. Corey is direct. The site should be too.

## Tech stack

- **Astro 5** — static site generation
- **Tailwind CSS** — utility-first styling
- **Content collections** — all content as markdown with frontmatter
- **Deploy:** Vercel (static export or serverless)
- **Package manager:** pnpm

No React hydration unless absolutely necessary for interactivity. Every page should render to flat HTML. Avoid JavaScript.

## Structure

```
/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
├── CLAUDE.md                    # This file
├── public/
│   ├── favicon.ico
│   └── images/                   # Static images
└── src/
    ├── layouts/
    │   ├── BaseLayout.astro      # Nav, footer, SEO, dark bg
    │   ├── BlogPost.astro        # Reading layout
    │   ├── CaseStudy.astro       # Portfolio layout
    │   └── Project.astro         # Personal project layout
    ├── pages/
    │   ├── index.astro           # Homepage
    │   ├── about.astro           # About page
    │   ├── blog/
    │   │   ├── index.astro       # Blog listing
    │   │   └── [...slug].astro   # Dynamic blog route
    │   ├── work/
    │   │   ├── index.astro       # Case study listing
    │   │   └── [...slug].astro   # Dynamic case study route
    │   ├── projects/
    │   │   ├── index.astro       # Project listing
    │   │   └── [...slug].astro   # Dynamic project route
    │   └── rss.xml.js            # RSS feed
    ├── content/
    │   ├── blog/                 # Markdown blog posts
    │   ├── case-studies/         # Markdown case studies
    │   └── projects/             # Markdown project pages
    ├── components/
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── Card.astro
    │   └── ImageGallery.astro
    └── styles/
        └── global.css
```

## Content collections

### Blog posts (`src/content/blog/`)
```yaml
title: string
description: string
date: Date
tags: string[]
draft: boolean
```

### Case studies (`src/content/case-studies/`)
```yaml
title: string
description: string
client: string
role: string
date: Date
tags: string[]
draft: boolean
image: string           # path in public/images/
website?: string
```

### Projects (`src/content/projects/`)
```yaml
title: string
description: string
date: Date
tags: string[]
draft: boolean
image?: string
repo?: string           # GitHub URL
live_url?: string
status: "active" | "maintained" | "archived"
```

## Content to create

These markdown files will be provided by Hermes after scaffold:

### Existing content (from WordPress)
1. `src/content/blog/2022-02-14-hotjar.md` — "3 reasons to use Hotjar as a designer"
2. `src/content/blog/2022-02-22-gamification.md` — "The role of gamification in UX design"
3. `src/content/blog/2023-09-30-cognitive-load.md` — "Minimizing Cognitive Load: Strategies for Simplifying Complex Systems in Game UX"
4. `src/content/case-studies/le-mans-ultimate.md` — Lead UX, Motorsport Games
5. `src/content/case-studies/race-control.md` — Lead UX, Studio397/rFactor 2

### New content (Hermes will create)
6. `src/content/case-studies/yoast-seo.md` — Senior UX Designer, Shopify launch
7. `src/content/case-studies/mirro.md` — Designer, E-Health platform
8. `src/content/case-studies/groundiq.md` — Lead Product Designer (placeholder until public)
9. `src/content/projects/hobsonmedia.md` — Home media server
10. `src/content/projects/m1-assistant.md` — Personal AI assistant build
11. `src/content/projects/uxrstudy.md` — Notion template storefront

## Homepage layout

1. Hero: name, title ("Lead Product Designer at Fugro"), one-line thesis
2. Work section: 3-4 case study cards with full-bleed images
3. Writing section: 3 latest blog posts
4. Projects teaser: 3 personal projects
5. Footer: email, GitHub, LinkedIn

## About page content

Rewrite from the current WordPress about page. The current one says "Head of UX at Motorsport Games." The new one should lead with Fugro/GroundIQ. Structure:

- What Corey does now (Lead Product Designer, GroundIQ)
- How he works (product design + strategy, AI-first workflows, design engineering)
- Background (Motorsport Games, Yoast, Mirro)
- Contact

Voice: professional, direct, third-person. No "passionate about," no "believes in the power of."

## Quality gates

Hermes will review every PR before merge. You must pass:

1. **Aesthetics:** Does every page match the Foster + Partners reference? Dark background, copper accent, full-bleed images, confident typography. No AI-sludge.
2. **Performance:** Lighthouse 95+. All pages static HTML. No JS unless interactive.
3. **Content:** No placeholder text. No lorem ipsum. Real copy in every slot.
4. **No AI-isms:** No em-dashes. No "delve," "unlock," "supercharge." Direct, professional voice.
5. **Mobile:** Every page works at 375px width.

## Working with Hermes

- Hermes owns the CLAUDE.md, content files, and design direction
- You (Claude Code) own implementation: Astro components, styles, build config
- Hermes reviews every change before it lands
- When stuck, ask — don't guess at aesthetics

## Coding Standards

These rules prevent recurring issues. Follow them on every change.

### Images
- **Always use `<img>` tags with `width`/`height` and descriptive `alt` text.** No `alt=""` on content images.
- Prefer local images in `public/images/`. External image URLs need explicit approval.
- Add `fetchpriority="high"` to the first visible hero image on index and listing pages.

### Accessibility
- Every page must include a **skip navigation link** (provided by BaseLayout).
- Toggle buttons (mobile menu, etc.) must have `aria-expanded` and `aria-controls` attributes, with JS that toggles them.
- External links (`target="_blank"`) must include `aria-label="opens in new tab"`.
- All `<time>` elements must have a `datetime` attribute with ISO format.
- `:focus-visible` styles are defined globally — do not override them without replacing them.

### SEO & Metadata
- Canonical URLs are normalized in BaseLayout (no trailing slashes). Do not set `canonicalURL` manually unless there's a specific reason.
- Blog posts that republish content should have a `canonical` field in frontmatter pointing to the original.
- All pages must include Open Graph and Twitter Card meta (provided by BaseLayout).
- Article pages get `article:published_time` and `article:author` automatically.
- Every project must have a `404.astro` page.

### Code Quality
- **Never duplicate utility functions.** Use `src/utils/format.ts` for `formatDate` and `slugFromId`.
- All frontmatter fields must be declared in `src/content/config.ts` schemas with appropriate Zod types.
- `sharp` is a devDependency, not a regular dependency.
- `package.json` must include `check` (`astro check`) and `typecheck` (`tsc --noEmit`) scripts.
- Run `npx prettier --write <file>` after editing files.

### Security & Config
- `vercel.json` must include security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- Never hardcode API keys, tokens, or secrets in any file.

### Content Hygiene
- **No dead links.** Remove references to old WordPress URLs (`coreyhobson.com/wp-content/...`).
- Draft posts stay `draft: true`. Finished posts get `draft: false`.
- All images referenced in frontmatter must exist in `public/images/`.
- No em-dashes in copy. No AI-isms ("delve", "unlock", "supercharge", etc.).
