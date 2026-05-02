# Neon Terminal

![Landing Image](https://res.cloudinary.com/suv4o/image/upload/q_auto,f_auto,w_750,e_sharpen:100/v1777292353/blog/from-google-stitch-design-to-live-site-with-claude-code-and-spec-kit/from-google-stitch-design-to-live-site-with-claude-code-and-spec-kit_eym9q2.jpg)

> This project is part of a blog article that walks through the design decisions and how it was built. You can read the full article here: [From Google Stitch Design to Live Site with Claude Code and Spec Kit](https://www.trpkovski.com/2026/05/03/from-google-stitch-design-to-live-site-with-claude-code-and-spec-kit)

---

A redesigned version of [trpkovski.com](https://www.trpkovski.com) built with Nuxt 4, Tailwind CSS v4, and TypeScript. The design follows a retro-futuristic "Neon Terminal" aesthetic inspired by 90s terminal interfaces, CRT screen glows, and cyberpunk hardware. The design was generated using Google Stitch's Ideate mode.

## Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com/) (Vue 3.5)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Content:** [Nuxt Content](https://content.nuxt.com/) (markdown-based articles, keyboard lab, and photo galleries)
- **Fonts:** Ubuntu (body) + Fira Code (mono) via [Nuxt Fonts](https://fonts.nuxt.com/)
- **Language:** TypeScript (strict mode)
- **Deployment:** Vercel (static site generation)

## Features

- CRT scanline overlay and neon glow animations
- Custom SVG cursors (arrow, blinking `>_` pointer, blinking `|` text cursor)
- AI-powered similar article recommendations using cosine similarity on pre-computed embeddings
- Terminal-styled audio player with transcript for article summaries
- Table of contents with scroll-aware active section highlighting
- Smooth page transitions
- Responsive design with mobile support

## Pages

| Route                               | Description                                                 |
| ----------------------------------- | ----------------------------------------------------------- |
| `/`                                 | Home page with hero sidebar and latest articles             |
| `/articles`                         | Searchable article list with load more pagination           |
| `/articles/:year/:month/:day/:slug` | Article detail with TOC, audio player, and similar articles |
| `/the-keyboard-lab`                 | Mechanical keyboard collection                              |
| `/the-keyboard-lab/:slug`           | Individual keyboard build page                              |
| `/through-the-lens`                 | Photography gallery categories                              |
| `/through-the-lens/:category`       | Photo category grid                                         |
| `/about-me`                         | Bio, tech stack, and career timeline                        |
| `/get-in-touch`                     | Contact form                                                |

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

To test on other devices on your local network (e.g. mobile):

```bash
npx nuxt dev --host
```

## Production

Generate the static site:

```bash
npm run generate
```

Preview the generated static site locally:

```bash
npm run preview
```

## Deployment

The project is configured for **Vercel static deployment** via the `vercel-static` Nitro preset in `nuxt.config.ts`.

1. Push the repository to GitHub
2. Import the repository in [Vercel](https://vercel.com/)
3. Leave all build settings as defaults (Vercel auto-detects Nuxt)
4. Click Deploy

Every push to `main` triggers a new deployment automatically.

## Project Structure

```
app/
  assets/css/          # Global styles and Tailwind theme
  components/          # Vue components (TerminalCard, AudioPlayer, etc.)
  data/                # Static data (career, tech stack, article embeddings)
  layouts/             # App layouts
  pages/               # File-based routing
  plugins/             # Client plugins (cursor blink animation)
content/
  articles/            # Markdown blog articles (organised by year/month/day)
  the-keyboard-lab/    # Keyboard build markdown files
  through-the-lens/    # Photography category markdown files
public/
  audio-summary/       # MP3 and transcript JSON files for article summaries
  images/              # Article and page images
  cursor-*.svg         # Custom cursor SVGs
```

## Content

Articles are written in markdown and stored in `content/articles/`. Each article has frontmatter with title, description, date, image, tags, and read time. Nuxt Content processes these at build time for static generation.

## SEO

This site is configured to **not be indexed** by search engines (`robots.txt` disallows all crawlers and a `noindex, nofollow` meta tag is set globally) since the primary blog at [trpkovski.com](https://www.trpkovski.com) is the canonical version.
