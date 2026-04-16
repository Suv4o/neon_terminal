# Tasks: Neon Terminal Blog

**Input**: Design documents from `specs/001-neon-terminal-blog/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, quickstart.md

**Tests**: No tests explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization, dependency installation, and configuration

- [x] T001 Install `@nuxt/content` and `@nuxt/fonts` modules via `npm install @nuxt/content @nuxt/fonts`
- [x] T002 Update `nuxt.config.ts` to register modules (`@nuxt/content`, `@nuxt/fonts`), set `nitro.preset: 'vercel-static'`, and configure Nuxt Content collections for `content/articles/`
- [x] T003 Configure Tailwind CSS v4 design tokens in `app/assets/css/main.css` using `@theme` directive: colours (primary, background, surface, text, muted, accent, tag colours), fonts (Fira Code mono, Ubuntu sans), neon glow box-shadow, scanline overlay CSS, and text selection styles per `spec-kit-context.md`
- [x] T004 [P] Create placeholder image directories: `public/images/articles/`, `public/images/keyboards/`, `public/images/photos/`, and add `public/images/avatar.webp` placeholder

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared layout, navigation, and reusable components that ALL user stories depend on

**CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 Create `CrtOverlay.vue` component in `app/components/crt-overlay.vue` — fixed-position full-viewport div with `repeating-linear-gradient` scanlines, `pointer-events: none`, `z-index: 9999`
- [x] T006 Create `ActionButton.vue` component in `app/components/action-button.vue` — reusable `> COMMAND.EXE` styled button with props for label text, sharp corners, primary border, solid-fill hover with inverted colours, neon glow on hover, Fira Code font
- [x] T007 [P] Create `TagBadge.vue` component in `app/components/tag-badge.vue` — `[#TagName]` format, Fira Code 12px, coloured background from tag colour map, accepts tag name prop and looks up colour from `app/data/tags.ts`
- [x] T008 [P] Create tag colour map in `app/data/tags.ts` — typed constant mapping tag names to hex colours per `spec-kit-context.md` (JavaScript #ffd700, TypeScript #3075bf, AI #03e3fc, CSS #a30d8a, NuxtJS #022832, Firebase #ff9900, Node #3e863d, Python #356B99, ReactJS #61dafb, Vite #bd34fe)
- [x] T009 [P] Create social links data in `app/data/social.ts` — typed array of SocialLink objects (name, url, icon) for X, Bluesky, LinkedIn, GitHub, Instagram
- [x] T010 Create `TerminalCard.vue` component in `app/components/terminal-card.vue` — 3-part construction: hardware header (24px dark bar with `[ ] [ ] [x]` window controls and filename prop), media bay (slot for cover image with primary colour overlay, grayscale-to-colour hover via CSS filter), console output (slot for text content)
- [x] T011 Create `NavBar.vue` component in `app/components/nav-bar.vue` — fixed top bar with backdrop blur, `trpkovski.com` branding in Fira Code, uppercase nav links (Articles, The Keyboard Lab, Through The Lens, About Me, Get In Touch) with coral hover glow, mobile hamburger menu with slide-out menu panel, crosshair cursor on links
- [x] T012 Create `FooterBar.vue` component in `app/components/footer-bar.vue` — social links from `app/data/social.ts`, terminal-styled layout, links to external profiles
- [x] T013 Create default layout in `app/layouts/default.vue` — includes NavBar, `<slot />` wrapped in `<main>`, FooterBar, and CrtOverlay. Set background colour to `#173353`, text colour to `#e0e6ed`
- [x] T014 Update `app/app.vue` to use `<NuxtLayout>` wrapping `<NuxtPage />` (remove NuxtWelcome)

**Checkpoint**: Foundation ready — NavBar, FooterBar, CRT overlay, and shared components available. User story implementation can now begin in parallel.

---

## Phase 3: User Story 7 - Navigate the Site (Priority: P1)

**Goal**: Visitors can navigate between all pages using the navbar and footer. All routes resolve correctly.

**Independent Test**: Visit every route and verify NavBar + FooterBar appear consistently, all links work, and mobile menu functions.

### Implementation for User Story 7

- [x] T015 [US7] Create `app/pages/index.vue` — minimal placeholder with page title `> whoami`
- [x] T016 [P] [US7] Create `app/pages/articles/index.vue` — minimal placeholder with page title `> ls -la ./archive`
- [x] T017 [P] [US7] Create `app/pages/articles/[slug].vue` — minimal placeholder with dynamic slug display
- [x] T018 [P] [US7] Create `app/pages/the-keyboard-lab/index.vue` — minimal placeholder with page title
- [x] T019 [P] [US7] Create `app/pages/the-keyboard-lab/[slug].vue` — minimal placeholder with dynamic slug display
- [x] T020 [P] [US7] Create `app/pages/through-the-lens/index.vue` — minimal placeholder with page title
- [x] T021 [P] [US7] Create `app/pages/through-the-lens/[category].vue` — minimal placeholder with dynamic category display
- [x] T022 [P] [US7] Create `app/pages/about-me.vue` — minimal placeholder with page title
- [x] T023 [P] [US7] Create `app/pages/get-in-touch.vue` — minimal placeholder with page title
- [x] T024 [US7] Create custom 404 error page in `app/error.vue` — terminal error styling with `ERR_CONNECTION_REFUSED` message, link back to home

**Checkpoint**: All 9 routes resolve. NavBar links navigate correctly. Footer visible on all pages. Mobile hamburger menu works. 404 page displays for invalid routes.

---

## Phase 4: User Story 1 - Browse Home Page (Priority: P1)

**Goal**: Home page displays hero sidebar with avatar and bio, 3 latest article cards, and newsletter subscribe form.

**Independent Test**: Navigate to `/` and verify the 40/60 split layout, avatar, `> whoami` heading, 3 article cards, and newsletter form.

### Implementation for User Story 1

- [x] T025 [P] [US1] Create 3 placeholder markdown articles in `content/articles/` with frontmatter (title, description, date, cover, tags, readingTime) and lorem-ipsum body content
- [x] T026 [P] [US1] Create `ArticleCard.vue` component in `app/components/article-card.vue` — uses TerminalCard with article data: hardware header showing filename, media bay with cover image, console output with title, excerpt, TagBadge components for tags, reading time as `EXEC_TIME: Nms`, and `> READ.EXE` ActionButton linking to `/articles/:slug`
- [x] T027 [P] [US1] Create `NewsletterForm.vue` component in `app/components/newsletter-form.vue` — `[ NEWSLETTER_DAEMON ]` heading, terminal prompt style `> ./subscribe.sh`, borderless input with blinking block cursor `█` (CSS animation), `[ENTER]` submit button, client-side only (no backend)
- [x] T028 [US1] Implement `app/pages/index.vue` — asymmetric 40/60 split layout: sticky left sidebar with avatar image in terminal frame, `> whoami` heading with typing animation, bio text; right side with 3 latest article cards (query via `queryCollection()` from Nuxt Content, sorted by date desc, limit 3) using ArticleCard component; newsletter section at bottom

**Checkpoint**: Home page renders with hero, 3 article cards from markdown content, and newsletter form. `> READ.EXE` buttons link to article detail pages.

---

## Phase 5: User Story 2 - Read an Article (Priority: P1)

**Goal**: Visitors can browse the article archive, search/filter articles, and read full articles with TOC sidebar.

**Independent Test**: Navigate to `/articles`, search for an article, click through to detail page, verify TOC tracks scroll.

### Implementation for User Story 2

- [x] T029 [P] [US2] Create `SearchFilter.vue` component in `app/components/search-filter.vue` — terminal-styled input with `> grep "search..."` placeholder, Fira Code font, filters articles by title/tags as user types
- [x] T030 [P] [US2] Create `TableOfContents.vue` component in `app/components/table-of-contents.vue` — receives TOC data from Nuxt Content, renders heading links in 250px sidebar, tracks active section on scroll via Intersection Observer, highlights active item with `>` prefix
- [x] T031 [US2] Implement `app/pages/articles/index.vue` — page title `> ls -la ./archive`, SearchFilter component, flat list of articles queried via `queryCollection()` showing date, title, TagBadge components, dotted border separators, `[ LOAD_MORE.EXE ]` pagination button, `NO LOGS FOUND` empty state when search has no results
- [x] T032 [US2] Implement `app/pages/articles/[slug].vue` — fetch article by slug via `queryCollection()`, 3-column layout: TableOfContents sidebar (250px) | article content (720px) | whitespace; cover image in terminal frame below title and tags; reading time as `EXEC_TIME: Nms`; render markdown via `<ContentRenderer>`; code blocks with coral left border and `[COPY]` button; EOF marker at end with `[SHARE.SH]` and `> NEXT_POST` ActionButtons

**Checkpoint**: Article archive displays searchable list. Article detail renders markdown with TOC sidebar. Code blocks styled. Navigation between articles works.

---

## Phase 6: User Story 3 - Explore the Keyboard Lab (Priority: P2)

**Goal**: Visitors can browse the keyboard collection grid and view individual keyboard detail pages.

**Independent Test**: Navigate to `/the-keyboard-lab`, see 2-column grid, click a keyboard card, verify detail page with specs.

### Implementation for User Story 3

- [x] T033 [P] [US3] Create keyboard data in `app/data/keyboards.ts` — typed array of 4 placeholder Keyboard objects with name, slug, hexId, cover, switchType, layout, description, and specs
- [x] T034 [P] [US3] Create `KeyboardCard.vue` component in `app/components/keyboard-card.vue` — uses TerminalCard: hardware header with hex ID (`ID: 0x2A1F`), media bay with grayscale-to-colour hover (CSS `filter: grayscale(100%)` → `grayscale(0)` on hover), console output with name, switch type readout, and `> INSPECT.EXE` ActionButton linking to `/the-keyboard-lab/:slug`
- [x] T035 [US3] Implement `app/pages/the-keyboard-lab/index.vue` — 2-column grid of KeyboardCard components populated from `app/data/keyboards.ts`
- [x] T036 [US3] Implement `app/pages/the-keyboard-lab/[slug].vue` — find keyboard by slug from data, display full specs as terminal readouts (`> Switch: [Topre 45g Silent]`), cover image in terminal frame, all metadata fields

**Checkpoint**: Keyboard Lab grid displays. Cards have grayscale hover effect. Detail pages show full specs.

---

## Phase 7: User Story 4 - Browse Photography Portfolio (Priority: P2)

**Goal**: Visitors can browse photo categories and view photos within a category.

**Independent Test**: Navigate to `/through-the-lens`, see category grid, click a category, see photos.

### Implementation for User Story 4

- [x] T037 [P] [US4] Create photo category data in `app/data/photos.ts` — typed array of 6 placeholder PhotoCategory objects with name, slug, cover, terminalName, and photos array
- [x] T038 [P] [US4] Create `PhotoCategoryCard.vue` component in `app/components/photo-category-card.vue` — portrait-ratio card (`aspect-[4/5]`), terminal header (`CAT_01_ASTRO.EXE`), cover image with backdrop-blur category name overlay, photo count badge `[ N PHOTOS ]`, links to `/through-the-lens/:category`
- [x] T039 [US4] Implement `app/pages/through-the-lens/index.vue` — responsive grid: 3 columns desktop, 2 tablet, 1 mobile. PhotoCategoryCard components populated from `app/data/photos.ts`
- [x] T040 [US4] Implement `app/pages/through-the-lens/[category].vue` — find category by slug from data, display photos in gallery grid layout with terminal-styled header

**Checkpoint**: Photo category grid renders responsively. Category detail pages show photo galleries.

---

## Phase 8: User Story 5 - Learn About the Developer (Priority: P2)

**Goal**: About Me page displays avatar, tech stack, and career timeline.

**Independent Test**: Navigate to `/about-me` and verify all three sections render correctly.

### Implementation for User Story 5

- [x] T041 [P] [US5] Create career data in `app/data/career.ts` — typed array of 4 placeholder CareerEntry objects with company, role, dateRange, commitHash, description
- [x] T042 [P] [US5] Create tech stack data in `app/data/tech-stack.ts` — typed array of TechStackItem objects across categories: frontend, backend, tools, cloud
- [x] T043 [US5] Implement `app/pages/about-me.vue` — avatar in terminal frame titled `IMG_VIEWER.SH`; tech stack section `SYSTEM_CAPABILITIES --LIST` displayed in 3-column grid grouped by category; career timeline styled as `GIT_LOG --CAREER --ONELINE` with decorative commit hashes, company, role, and date range

**Checkpoint**: About Me page shows avatar, tech stack in 3 columns, and career timeline with git-log styling.

---

## Phase 9: User Story 6 - Send a Message (Priority: P3)

**Goal**: Contact form with terminal styling and client-side validation.

**Independent Test**: Navigate to `/get-in-touch`, fill in all fields, submit, see success message.

### Implementation for User Story 6

- [x] T044 [US6] Implement `app/pages/get-in-touch.vue` — terminal-styled form with labels as commands: `IDENTIFY_USER` (name), `RETURN_PATH` (email), `TRANSMISSION_DATA` (message); `>` prefix on each input; bottom border only appearing on focus; client-side validation (required fields, email format); `> SEND_TRANSMISSION.EXE` ActionButton; success confirmation message on submit; social links section with commands like `> ssh github.com/trpkovski` using data from `app/data/social.ts`

**Checkpoint**: Contact form validates and shows success. Social links display.

---

## Phase 10: Polish & Cross-Cutting Concerns

**Purpose**: Responsive refinements, SEO, and build validation

- [x] T045 [P] Add SEO meta tags via `useHead()` on each page — title, description, Open Graph tags
- [x] T046 [P] Verify responsive breakpoints across all pages: mobile (< 768px), tablet (768–1024px), desktop (> 1024px) — fix any layout issues
- [x] T047 [P] Add keyboard focus indicators to all interactive elements — visible outline with primary colour glow on focus
- [x] T048 Verify `nuxt generate` completes without errors and all routes are pre-rendered
- [x] T049 Run Prettier formatting across all files via `npx prettier --write .`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **US7 Navigation (Phase 3)**: Depends on Foundational — creates all page stubs
- **US1 Home (Phase 4)**: Depends on Foundational + placeholder articles (T025)
- **US2 Articles (Phase 5)**: Depends on Foundational + placeholder articles (T025)
- **US3 Keyboards (Phase 6)**: Depends on Foundational
- **US4 Photos (Phase 7)**: Depends on Foundational
- **US5 About Me (Phase 8)**: Depends on Foundational
- **US6 Contact (Phase 9)**: Depends on Foundational
- **Polish (Phase 10)**: Depends on all user stories being complete

### User Story Dependencies

- **US7 (P1)**: Can start after Foundational — creates page stubs for all other stories
- **US1 (P1)**: Can start after Foundational — independent of other stories
- **US2 (P1)**: Can start after Foundational — shares article data with US1
- **US3 (P2)**: Can start after Foundational — fully independent
- **US4 (P2)**: Can start after Foundational — fully independent
- **US5 (P2)**: Can start after Foundational — fully independent
- **US6 (P3)**: Can start after Foundational — fully independent

### Within Each User Story

- Data files before components
- Components before page implementations
- Index pages before detail pages

### Parallel Opportunities

- T004, T007, T008, T009 can run in parallel (setup data files)
- T015–T023 can all run in parallel (page stubs)
- T025, T026, T027 can run in parallel (US1 data + components)
- T029, T030 can run in parallel (US2 components)
- T033, T034 can run in parallel (US3 data + component)
- T037, T038 can run in parallel (US4 data + component)
- T041, T042 can run in parallel (US5 data files)
- T045, T046, T047 can run in parallel (polish tasks)

---

## Implementation Strategy

### MVP First (US7 + US1 + US2)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL — blocks all stories)
3. Complete Phase 3: US7 Navigation (all routes working)
4. Complete Phase 4: US1 Home Page
5. Complete Phase 5: US2 Articles
6. **STOP and VALIDATE**: Test navigation, home page, and article reading end-to-end
7. Deploy/demo if ready

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add US7 → All routes working → Deploy/Demo
3. Add US1 → Home page live → Deploy/Demo
4. Add US2 → Articles readable → Deploy/Demo (MVP!)
5. Add US3 → Keyboard Lab → Deploy/Demo
6. Add US4 → Photo portfolio → Deploy/Demo
7. Add US5 → About Me → Deploy/Demo
8. Add US6 → Contact form → Deploy/Demo
9. Polish → Final deploy

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- US7 (Navigation) is listed first despite being Story 7 because it creates the page stubs all other stories build upon
