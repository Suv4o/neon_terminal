# Quickstart: Neon Terminal Blog

## Prerequisites

- Node.js 20+
- npm or pnpm

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server runs at `http://localhost:3000`.

## Project Structure

```
app/
├── assets/css/main.css     # Tailwind config + design tokens + scanlines
├── components/             # Reusable Vue components
│   ├── NavBar.vue
│   ├── FooterBar.vue
│   ├── TerminalCard.vue
│   ├── TagBadge.vue
│   ├── NewsletterForm.vue
│   └── ...
├── data/                   # Static TypeScript data files
│   ├── tags.ts
│   ├── keyboards.ts
│   ├── photos.ts
│   ├── career.ts
│   ├── tech-stack.ts
│   └── social.ts
├── layouts/
│   └── default.vue         # NavBar + Footer + CRT overlay
├── pages/                  # File-based routing
│   ├── index.vue
│   ├── articles/
│   │   ├── index.vue
│   │   └── [slug].vue
│   ├── the-keyboard-lab/
│   │   ├── index.vue
│   │   └── [slug].vue
│   ├── through-the-lens/
│   │   ├── index.vue
│   │   └── [category].vue
│   ├── about-me.vue
│   └── get-in-touch.vue
└── app.vue                 # Root component with NuxtLayout

content/
└── articles/               # Markdown blog articles
    ├── building-terminal-ui.md
    ├── typescript-strict-mode.md
    └── ...

public/
└── images/                 # Static images
    ├── articles/
    ├── keyboards/
    ├── photos/
    └── avatar.webp
```

## Key Commands

```bash
npm run dev        # Development server with HMR
npm run build      # Build for production
npm run generate   # Static site generation (SSG)
npm run preview    # Preview generated site locally
```

## Adding a New Article

Create a markdown file in `content/articles/`:

```markdown
---
title: "Your Article Title"
description: "Short description for cards"
date: "2026-04-15"
cover: "/images/articles/your-image.webp"
tags: ["TypeScript", "CSS"]
readingTime: 5
---

Your article content here...
```

## Design System Reference

All design tokens, colour values, typography, and component patterns
are defined in `spec-kit-context.md` at the project root.
