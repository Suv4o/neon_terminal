<!--
  Sync Impact Report
  ==================
  Version change: 0.0.0 → 1.0.0 (MAJOR - initial ratification)
  Modified principles: N/A (initial creation)
  Added sections:
    - Core Principles (5 principles)
    - Design & Content Constraints
    - Development Workflow
    - Governance
  Removed sections: None
  Templates requiring updates:
    - .specify/templates/plan-template.md ✅ compatible (Constitution Check section aligns)
    - .specify/templates/spec-template.md ✅ compatible (requirements/scenarios structure fits)
    - .specify/templates/tasks-template.md ✅ compatible (phase structure supports SSG/component tasks)
  Follow-up TODOs: None
-->

# Neon Terminal Constitution

## Core Principles

### I. Design System Fidelity

All UI MUST follow the Neon Terminal design system defined in
`spec-kit-context.md`. This is the single source of truth for visual
design decisions.

- Colours, typography (Ubuntu body, Fira Code mono), spacing, and
  component patterns (Terminal Cards, Action Buttons, Tag Badges)
  MUST be consistent across every page.
- When Stitch-exported HTML conflicts with `spec-kit-context.md`,
  the context document wins.
- Custom CSS is permitted ONLY for CRT scanline overlay and
  keyframe animations. All other styling MUST use Tailwind utilities
  mapped to the design tokens.

### II. Static Site Generation

The site MUST be statically generated (SSG) using Nuxt's `generate`
command for deployment to Vercel.

- No server-side rendering at runtime. Every route MUST resolve to
  a pre-rendered HTML file.
- Dynamic data fetching (APIs, databases, CMS) is NOT permitted.
  All content MUST be hardcoded or sourced from local static files.
- `nuxt generate` MUST complete without errors before any deploy.

### III. Code Quality

TypeScript strict mode is mandatory. The codebase MUST pass Prettier
formatting and compile without type errors.

- Vue components MUST use `<script setup lang="ts">` with the
  Composition API exclusively.
- Shared UI patterns (TerminalCard, TagBadge, NavBar, Footer,
  NewsletterForm) MUST be extracted into reusable components.
- Prettier configuration: semicolons, double quotes, 4-space tabs,
  120-character print width, Tailwind plugin.
- No `any` types. No `@ts-ignore` without a linked issue explaining
  why.

### IV. Accessibility

WCAG AA minimum contrast ratios MUST be met despite the dark theme.
The terminal aesthetic MUST NOT compromise usability.

- Semantic HTML elements MUST be used (nav, main, article, section,
  header, footer, headings in order).
- All interactive elements MUST be keyboard-navigable with visible
  focus indicators.
- Images MUST have descriptive alt text. Decorative images MUST use
  `alt=""` or `aria-hidden="true"`.
- The CRT scanline overlay MUST use `pointer-events: none` so it
  never blocks interaction.

### V. Performance

The site MUST load fast and stay lightweight. CSS-only animations,
lazy-loaded images, and minimal JavaScript.

- No heavy JS animation libraries. All visual effects (glows,
  scanlines, hover transitions) MUST be CSS-only.
- Images MUST be lazy-loaded (`loading="lazy"`).
- Google Fonts MUST use `display=swap` to prevent FOIT.
- Bundle size MUST be kept minimal. No unnecessary dependencies.
- Transitions MUST be under 200ms to maintain the "clicky" terminal
  feel.

## Design & Content Constraints

- **Colour palette**: primary `#ee5f53`, background `#173353`,
  surface `#1b3b60`, text `#e0e6ed`, muted `#f1918b`,
  accent `#00ff41`. Tag colours per `spec-kit-context.md`.
- **Typography**: Fira Code for headings, labels, buttons, and code.
  Ubuntu for body text. No other fonts.
- **Borders**: 2px solid, 0px border radius everywhere. No rounded
  corners.
- **Shadows**: No drop shadows. Neon glows only
  (`0 0 12px rgba(238, 95, 83, 0.6)`).
- **UX copy**: All button labels, headings, and status messages MUST
  follow the terminal command patterns defined in
  `spec-kit-context.md` (e.g., `> READ.EXE`, `EXEC_TIME: 4ms`).
- **Content**: All page content is static/hardcoded for this
  prototype. No CMS, no API, no database.

## Development Workflow

- **Formatting**: Run Prettier before every commit. The `.prettierrc`
  config is authoritative.
- **File naming**: kebab-case for files, PascalCase for Vue
  component names.
- **Components**: One component per file in `components/` directory.
  `<script setup lang="ts">` only.
- **Styling**: Tailwind utility classes as the primary styling
  method. CSS custom properties defined in `spec-kit-context.md`
  for design tokens. Custom CSS only for scanlines and animations.
- **Spec-driven**: Follow the spec-kit workflow
  (constitution → specify → plan → tasks → implement). Do not skip
  steps.

## Governance

This constitution is the highest-authority document for the Neon
Terminal project. All implementation decisions MUST comply with these
principles.

- **Amendments** require updating this file, incrementing the
  version, and verifying that dependent templates remain aligned.
- **Versioning** follows semantic versioning: MAJOR for principle
  removals or incompatible redefinitions, MINOR for new principles
  or material expansions, PATCH for clarifications and wording fixes.
- **Compliance** is verified at plan time via the Constitution Check
  gate in `plan-template.md`. Any violation MUST be documented in
  the Complexity Tracking table with justification.
- **Runtime guidance** for development is in `CLAUDE.md` at the
  project root.

**Version**: 1.0.0 | **Ratified**: 2026-04-14 | **Last Amended**: 2026-04-14
