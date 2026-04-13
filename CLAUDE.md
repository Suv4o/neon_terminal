# Neon Terminal - Project Instructions

## What This Project Is

A redesigned version of [trpkovski.com](https://www.trpkovski.com) built with Nuxt 4, Tailwind CSS, and TypeScript. The design follows the "Neon Terminal" aesthetic - a retro-futuristic developer blog inspired by 90s terminal interfaces, CRT screen glows, and cyberpunk hardware. The design was generated using Google Stitch's Ideate mode.

## Reference Materials

- **Design system & page specs:** `spec-kit-context.md` (corrected, authoritative design system - use this over the Stitch DESIGN.md)
- **Stitch exported screens:** `../stitch_neon_terminal_prd/` (HTML + PNG for each page - use as visual/structural reference only, do NOT copy directly due to inconsistencies)
- **Current blog source code:** https://github.com/Suv4o/personal-blog-2023 (reference for site structure, routing patterns, and content types)

## Spec-Kit Workflow

This project uses GitHub's spec-kit for spec-driven development. Run the slash commands in order:

### Step 1: `/speckit-constitution`
```
Project: Neon Terminal - a redesigned version of trpkovski.com built with Nuxt 4, Tailwind CSS, and TypeScript.

Principles:

1. Design System Fidelity - All UI must follow the Neon Terminal design system defined in spec-kit-context.md. Colours, typography (Ubuntu body, Fira Code mono), spacing, and component patterns (Terminal Cards, Action Buttons, Tag Badges) MUST be consistent across every page.

2. Static Site Generation - The site MUST be statically generated (SSG) using Nuxt's generate command for deployment to Vercel. No server-side rendering at runtime.

3. Code Quality - TypeScript strict mode. Prettier formatting. Vue Composition API with script setup. Reusable components for shared patterns (TerminalCard, TagBadge, NavBar, Footer, NewsletterForm).

4. Accessibility - WCAG AA minimum contrast ratios despite the dark theme. Semantic HTML. Keyboard navigation. Terminal aesthetic must not compromise usability.

5. Performance - CSS animations only (no heavy JS libraries). Lazy load images. Minimal bundle. Google Fonts with display=swap. CRT scanline overlay must be purely CSS with pointer-events: none.
```

### Step 2: `/speckit-specify`
```
Build a static personal developer blog with the "Neon Terminal" design system. The full design system, page specifications, component patterns, and UX copy are defined in spec-kit-context.md - read that file for all details.

Reference the existing blog at https://github.com/Suv4o/personal-blog-2023 for site structure and routing patterns.

The site has these pages: Home (/), Articles (/articles), Article Detail (/articles/:slug), The Keyboard Lab (/the-keyboard-lab), Keyboard Detail (/the-keyboard-lab/:slug), Through The Lens (/through-the-lens), Photo Category (/through-the-lens/:category), About Me (/about-me), Get In Touch (/get-in-touch).

Content is static/hardcoded for this prototype - no CMS or API needed. Use placeholder content that matches the terminal aesthetic.
```

### Step 3: `/speckit-clarify` (optional but recommended)

### Step 4: `/speckit-plan`
```
Tech stack: Nuxt 4 with TypeScript, Tailwind CSS v4 with @tailwindcss/vite plugin, Vue Composition API with script setup. Static site generation for Vercel deployment. Google Fonts (Ubuntu + Fira Code). No backend, no database, no CMS - all content hardcoded.
```

### Step 5: `/speckit-tasks`

### Step 6: `/speckit-analyze` (optional - cross-check consistency)

### Step 7: `/speckit-implement`

## Code Conventions

- **Formatting:** Prettier with `.prettierrc` config (semi, double quotes, 4-space tabs, 120 print width, Tailwind plugin)
- **Components:** Vue SFC with `<script setup lang="ts">`, Composition API only
- **Styling:** Tailwind CSS utility classes, custom CSS only for CRT scanline overlay and animations
- **File naming:** kebab-case for files, PascalCase for components
- **Fonts:** Ubuntu (body) + Fira Code (mono) via Google Fonts
