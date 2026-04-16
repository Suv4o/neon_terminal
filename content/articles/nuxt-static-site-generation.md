---
title: "Static Site Generation with Nuxt 4"
description: "How to build blazing-fast static sites with Nuxt 4's generate command and deploy them to Vercel."
date: "2026-01-10"
cover: "/images/articles/nuxt-ssg.svg"
tags: ["NuxtJS", "TypeScript", "Vite"]
readingTime: 6
---

## Why Static Sites?

Static site generation (SSG) pre-renders every page at build time, resulting in fast load times and excellent SEO without a running server.

## Nuxt 4 and SSG

Nuxt 4 makes static generation straightforward with the `nuxt generate` command:

```bash
npx nuxt generate
```

This creates a `.output/public` directory with static HTML files for every route.

## Content-Driven Pages

With `@nuxt/content`, markdown files in the `content/` directory are automatically transformed into pages with full SEO metadata.

## Deploying to Vercel

Configure the Nitro preset in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
    nitro: {
        preset: "vercel-static",
    },
});
```

## Performance Benefits

Pre-rendered pages achieve sub-second load times, perfect Lighthouse scores, and zero server costs.

## Conclusion

Nuxt 4's static generation combined with Vercel deployment is a powerful stack for content-heavy websites.
