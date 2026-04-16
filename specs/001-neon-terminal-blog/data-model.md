# Data Model: Neon Terminal Blog

**Date**: 2026-04-15
**Feature**: 001-neon-terminal-blog

## Entities

### Article (Nuxt Content — Markdown frontmatter)

Stored as markdown files in `content/articles/`.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | yes | Article title |
| description | string | yes | Short excerpt for cards and meta |
| date | string (ISO date) | yes | Publication date |
| cover | string (path) | yes | Cover image path |
| tags | string[] | yes | Tag names from predefined list |
| readingTime | number | yes | Minutes to read (displayed as `EXEC_TIME: Nms`) |

The markdown body is the article content. TOC is auto-generated from
headings by Nuxt Content.

**Example frontmatter**:
```yaml
---
title: "Building a Terminal UI with CSS"
description: "How to create retro CRT effects using modern CSS"
date: "2026-03-15"
cover: "/images/articles/terminal-css.webp"
tags: ["CSS", "TypeScript"]
readingTime: 5
---
```

### Tag

Defined as a constant map in `app/data/tags.ts`.

| Field | Type | Description |
|-------|------|-------------|
| name | string | Display name (e.g., "JavaScript") |
| color | string (hex) | Badge background colour |

### Keyboard

Defined in `app/data/keyboards.ts`.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | yes | Keyboard name |
| slug | string | yes | URL slug |
| hexId | string | yes | Decorative hex ID (e.g., `0x2A1F`) |
| cover | string (path) | yes | Cover image path |
| switchType | string | yes | Switch description |
| layout | string | yes | Layout type (e.g., "65%", "TKL") |
| description | string | yes | Short description |
| specs | Record<string, string> | yes | Key-value pairs for terminal readouts |

### PhotoCategory

Defined in `app/data/photos.ts`.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | yes | Category display name |
| slug | string | yes | URL slug |
| cover | string (path) | yes | Category cover image |
| terminalName | string | yes | Terminal-style name (e.g., `CAT_01_ASTRO.EXE`) |
| photos | Photo[] | yes | Array of photo objects |

### Photo

Nested within PhotoCategory.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| src | string (path) | yes | Image path |
| alt | string | yes | Accessibility description |
| caption | string | no | Optional caption |

### CareerEntry

Defined in `app/data/career.ts`.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| company | string | yes | Company name |
| role | string | yes | Job title |
| dateRange | string | yes | Date range (e.g., "2020 – 2023") |
| commitHash | string | yes | Decorative git hash (e.g., `a3f2c1d`) |
| description | string | no | Brief role description |

### TechStackItem

Defined in `app/data/tech-stack.ts`.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | yes | Technology name |
| category | string | yes | Category: "frontend", "backend", "tools", "cloud" |

### SocialLink

Defined in `app/data/social.ts`.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | yes | Platform name |
| url | string | yes | Profile URL |
| icon | string | yes | Icon identifier |

## Relationships

- Article → Tag: many-to-many (article.tags references tag names)
- PhotoCategory → Photo: one-to-many (nested array)
- TechStackItem grouped by category for display
- CareerEntry ordered by date for timeline display
- SocialLink used in Footer and Get In Touch page
