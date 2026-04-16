# Research: Neon Terminal Blog

**Date**: 2026-04-15
**Feature**: 001-neon-terminal-blog

## R1: Nuxt Content Module for Markdown Articles

**Decision**: Use `@nuxt/content` v3 for markdown-based article content.

**Rationale**: The user explicitly requested Nuxt Content for
markdown-based content. The existing blog at
`personal-blog-2023/content/` already has markdown articles with
YAML frontmatter. Nuxt Content provides built-in markdown rendering,
frontmatter parsing, content querying, and automatic route generation
— all compatible with SSG via `nuxt generate`.

**Alternatives considered**:
- Hardcoded Vue components per article: rejected — poor authoring
  experience, doesn't scale, user explicitly wants markdown.
- Custom markdown pipeline (remark/rehype): rejected — Nuxt Content
  already wraps these with Nuxt integration.

**Key findings**:
- Nuxt Content v3 uses `content/` directory at project root
- Markdown files use YAML frontmatter for metadata (title, date,
  tags, cover image, description)
- `queryCollection()` API for listing/filtering articles
- `<ContentRenderer>` component for rendering markdown to HTML
- Fully compatible with `nuxt generate` — all content pages are
  pre-rendered at build time
- Code syntax highlighting via built-in Shiki integration
- TOC generation via `article.body.toc` for the sidebar

## R2: Nuxt 4 File-Based Routing

**Decision**: Use Nuxt 4's `app/pages/` directory for file-based
routing with dynamic segments for slugs and categories.

**Rationale**: Nuxt 4 moves pages under the `app/` directory. Dynamic
routes use bracket syntax (`[slug].vue`). This maps cleanly to the
9-page site structure.

**Route mapping**:
- `app/pages/index.vue` → `/`
- `app/pages/articles/index.vue` → `/articles`
- `app/pages/articles/[slug].vue` → `/articles/:slug`
- `app/pages/the-keyboard-lab/index.vue` → `/the-keyboard-lab`
- `app/pages/the-keyboard-lab/[slug].vue` → `/the-keyboard-lab/:slug`
- `app/pages/through-the-lens/index.vue` → `/through-the-lens`
- `app/pages/through-the-lens/[category].vue` → `/through-the-lens/:category`
- `app/pages/about-me.vue` → `/about-me`
- `app/pages/get-in-touch.vue` → `/get-in-touch`

## R3: Tailwind CSS v4 Design Token Configuration

**Decision**: Define Neon Terminal design tokens using Tailwind CSS v4's
`@theme` directive in `app/assets/css/main.css`.

**Rationale**: Tailwind v4 uses CSS-first configuration via `@theme`
instead of `tailwind.config.js`. Design tokens from
`spec-kit-context.md` map directly to custom theme values.

**Implementation**:
- Extend colours: primary, background, surface, text, muted, accent,
  plus tag colours
- Extend fonts: `font-mono` → Fira Code, `font-sans` → Ubuntu
- Custom box-shadow for neon glow
- CSS custom properties for scanline overlay and selection styles

## R4: Google Fonts Loading

**Decision**: Load Ubuntu and Fira Code via `@fontsource` packages
or `<link>` tags in the Nuxt head config with `display=swap`.

**Rationale**: Constitution mandates `display=swap` for performance.
Using `@fontsource` npm packages is more reliable for SSG than
CDN links and avoids external network dependency during build.

**Alternatives considered**:
- Google Fonts CDN `<link>`: viable but adds external dependency
- `@nuxt/fonts` module: good option, auto-optimises fonts
- `@fontsource` packages: self-hosted, zero external requests

**Decision**: Use `@nuxt/fonts` module — it automatically detects
font usage in CSS, downloads them locally, and applies `display=swap`.
Most ergonomic for Nuxt projects.

## R5: Content Structure for Non-Article Content

**Decision**: Keyboards and photo categories use TypeScript data files
in `app/data/`, not Nuxt Content markdown.

**Rationale**: Keyboards and photos are structured data (specs, image
lists) not long-form prose. TypeScript files provide type safety and
are simpler for this content type. Only blog articles benefit from
markdown authoring.

**Data files**:
- `app/data/keyboards.ts` — array of keyboard objects
- `app/data/photos.ts` — array of photo category objects
- `app/data/career.ts` — career timeline entries
- `app/data/tech-stack.ts` — tech stack items

## R6: CRT Scanline Overlay Implementation

**Decision**: Global CSS `::after` pseudo-element on `<body>` or a
fixed-position `<div>` with `pointer-events: none`.

**Rationale**: Constitution mandates CSS-only, non-interactive overlay.
A fixed-position element with `repeating-linear-gradient` covers the
full viewport. `z-index: 9999` + `pointer-events: none` ensures it's
visible but never blocks interaction.

## R7: Static Site Generation Compatibility

**Decision**: Configure `nuxt.config.ts` with `ssr: true` (default)
and use `nuxt generate` for pre-rendering all routes.

**Rationale**: Nuxt Content v3 with `nuxt generate` pre-renders all
content pages automatically. Dynamic routes from content collections
are discovered at build time. No nitro server needed at runtime.

**Key config**:
- `nitro.prerender.routes` for any non-content dynamic routes
- `nitro.preset: 'vercel-static'` for Vercel deployment
