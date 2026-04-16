# Implementation Plan: Neon Terminal Blog

**Branch**: `001-neon-terminal-blog` | **Date**: 2026-04-15 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/001-neon-terminal-blog/spec.md`

## Summary

Build a static personal developer blog with 9 pages using the "Neon
Terminal" retro-futuristic design system. The site uses Nuxt 4 with
Nuxt Content for markdown-based articles, Tailwind CSS v4 for styling
with custom design tokens, and Vue Composition API components. All
content is either markdown files (articles) or TypeScript data files
(keyboards, photos, career). The site is statically generated for
Vercel deployment.

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode)
**Primary Dependencies**: Nuxt 4.4.2, Vue 3.5, Tailwind CSS 4.2,
`@nuxt/content` v3, `@nuxt/fonts`
**Storage**: File-based — markdown in `content/`, data in `app/data/`
**Testing**: Manual visual testing + `nuxt generate` build validation
**Target Platform**: Static web (Vercel), modern browsers
**Project Type**: Static site (SSG)
**Performance Goals**: < 3s page load, CSS-only animations, minimal JS
**Constraints**: No runtime SSR, no external APIs, no database
**Scale/Scope**: 9 pages, ~12 reusable components, ~6 data files,
placeholder articles

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Design System Fidelity | ✅ PASS | All tokens from `spec-kit-context.md` mapped to Tailwind theme. Stitch exports used as visual reference only. Custom CSS limited to scanlines + animations. |
| II. Static Site Generation | ✅ PASS | `nuxt generate` for all routes. Nuxt Content pre-renders markdown at build time. No runtime SSR. `nitro.preset: 'vercel-static'`. |
| III. Code Quality | ✅ PASS | TypeScript strict. `<script setup lang="ts">` for all components. Prettier with existing `.prettierrc`. Reusable components: TerminalCard, TagBadge, NavBar, FooterBar, NewsletterForm. |
| IV. Accessibility | ✅ PASS | Semantic HTML (nav, main, article, section). Keyboard navigation. Alt text on images. Scanline overlay uses `pointer-events: none`. WCAG AA contrast verified against dark background. |
| V. Performance | ✅ PASS | CSS-only effects. `@nuxt/fonts` with `display=swap`. Lazy-loaded images. Transitions < 200ms. No heavy JS libraries. |

## Project Structure

### Documentation (this feature)

```text
specs/001-neon-terminal-blog/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── spec.md              # Feature specification
└── tasks.md             # Phase 2 output (/speckit-tasks)
```

### Source Code (repository root)

```text
app/
├── assets/
│   └── css/
│       └── main.css            # Tailwind @theme + design tokens + scanlines
├── components/
│   ├── NavBar.vue              # Fixed top navigation with mobile menu
│   ├── FooterBar.vue           # Social links footer
│   ├── TerminalCard.vue        # Reusable 3-part card (header/media/console)
│   ├── TagBadge.vue            # [#TagName] coloured badge
│   ├── NewsletterForm.vue      # Terminal-styled subscribe form
│   ├── ArticleCard.vue         # Article card for home + archive
│   ├── KeyboardCard.vue        # Keyboard card for the lab
│   ├── PhotoCategoryCard.vue   # Portrait-ratio photo category card
│   ├── TableOfContents.vue     # Scroll-tracking TOC sidebar
│   ├── SearchFilter.vue        # Terminal-styled search input
│   ├── ActionButton.vue        # > COMMAND.EXE styled button
│   └── CrtOverlay.vue          # Scanline overlay component
├── data/
│   ├── tags.ts                 # Tag name → colour map
│   ├── keyboards.ts            # Keyboard collection data
│   ├── photos.ts               # Photo categories + photo arrays
│   ├── career.ts               # Career timeline entries
│   ├── tech-stack.ts           # Tech stack items by category
│   └── social.ts               # Social media links
├── layouts/
│   └── default.vue             # NavBar + main slot + FooterBar + CrtOverlay
├── pages/
│   ├── index.vue               # Home: hero sidebar + article cards
│   ├── articles/
│   │   ├── index.vue           # Articles archive with search + pagination
│   │   └── [slug].vue          # Article detail with TOC
│   ├── the-keyboard-lab/
│   │   ├── index.vue           # Keyboard grid
│   │   └── [slug].vue          # Keyboard detail
│   ├── through-the-lens/
│   │   ├── index.vue           # Photo category grid
│   │   └── [category].vue      # Photos within category
│   ├── about-me.vue            # Bio + tech stack + career timeline
│   └── get-in-touch.vue        # Terminal contact form
└── app.vue                     # Root: NuxtLayout wrapper

content/
└── articles/                   # Markdown blog articles with frontmatter

public/
└── images/                     # Static assets (placeholder images)
    ├── articles/
    ├── keyboards/
    ├── photos/
    └── avatar.webp

nuxt.config.ts                  # Nuxt config: modules, fonts, nitro preset
```

**Structure Decision**: Single Nuxt 4 application. Articles use Nuxt
Content markdown in `content/articles/`. All other content uses
TypeScript data files in `app/data/`. Components live in
`app/components/` for Nuxt auto-import. Pages use file-based routing
under `app/pages/`.

## Complexity Tracking

> No constitution violations. No complexity justifications needed.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| — | — | — |
