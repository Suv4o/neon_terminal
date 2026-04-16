# Feature Specification: Neon Terminal Blog

**Feature Branch**: `001-neon-terminal-blog`
**Created**: 2026-04-14
**Status**: Draft
**Input**: User description: "Build a static personal developer blog with the Neon Terminal design system"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse Home Page (Priority: P1)

A visitor lands on the home page and sees the developer's identity,
latest articles, and a newsletter subscribe form. The page conveys the
retro-futuristic terminal aesthetic immediately.

**Why this priority**: The home page is the primary entry point and
sets the visual tone for the entire site. It must establish the Neon
Terminal brand and provide clear navigation paths.

**Independent Test**: Navigate to `/` and verify the hero section
displays the avatar, bio with `> whoami` heading, 3 latest article
cards in terminal frames, and a newsletter subscription form.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/`, **When** the page loads,
   **Then** they see a sticky left sidebar with avatar, `> whoami`
   heading, and bio text alongside 3 article cards on the right.
2. **Given** a visitor is on the home page, **When** they scroll to
   the bottom, **Then** they see a newsletter section titled
   `[ NEWSLETTER_DAEMON ]` with a terminal-styled subscribe form.
3. **Given** a visitor is on the home page, **When** they click an
   article card's `> READ.EXE` button, **Then** they navigate to
   the corresponding article detail page.

---

### User Story 2 - Read an Article (Priority: P1)

A visitor browses the article archive, finds an article of interest,
and reads the full content with a table of contents sidebar.

**Why this priority**: Articles are the core content of the blog.
Reading articles is the primary user journey and must work end-to-end.

**Independent Test**: Navigate to `/articles`, select an article, read
it on `/articles/:slug` with working TOC navigation and code blocks.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/articles`, **When** the page
   loads, **Then** they see a page titled `> ls -la ./archive` with
   a searchable list of articles showing date, title, and tag badges.
2. **Given** a visitor is on the articles page, **When** they type in
   the search field styled as `> grep "search..."`, **Then** the
   article list filters to match the search term.
3. **Given** a visitor clicks an article title, **When** the detail
   page loads, **Then** they see a 3-column layout with TOC sidebar,
   article content, and whitespace. The cover image appears in a
   terminal frame. Reading time shows as `EXEC_TIME: Nms`.
4. **Given** a visitor is reading an article, **When** they scroll
   through sections, **Then** the TOC sidebar highlights the active
   section with a `>` prefix.
5. **Given** a visitor reaches the end of an article, **When** they
   see the `EOF` marker, **Then** `[SHARE.SH]` and `> NEXT_POST`
   buttons are available.

---

### User Story 3 - Explore the Keyboard Lab (Priority: P2)

A visitor browses the mechanical keyboard collection and views
individual keyboard details.

**Why this priority**: The Keyboard Lab is a unique content section
that showcases the developer's hobby. It is secondary to articles but
adds personality to the site.

**Independent Test**: Navigate to `/the-keyboard-lab`, view the grid
of keyboard cards, click one to see its detail page at
`/the-keyboard-lab/:slug`.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/the-keyboard-lab`, **When** the
   page loads, **Then** they see a 2-column grid of keyboard cards
   with grayscale images, terminal headers with hex IDs, and
   `> INSPECT.EXE` buttons.
2. **Given** a visitor hovers over a keyboard card image, **When**
   the hover effect triggers, **Then** the image transitions from
   grayscale to full colour.
3. **Given** a visitor clicks `> INSPECT.EXE`, **When** the detail
   page loads, **Then** they see keyboard specs displayed as terminal
   readouts (e.g., `> Switch: [Topre 45g Silent]`).

---

### User Story 4 - Browse Photography Portfolio (Priority: P2)

A visitor explores the photography portfolio organized by categories
and views photos within a category.

**Why this priority**: The photography section adds visual richness
and personal dimension. It is secondary content but important for the
complete site experience.

**Independent Test**: Navigate to `/through-the-lens`, view category
cards, click one to see photos at `/through-the-lens/:category`.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/through-the-lens`, **When** the
   page loads, **Then** they see a 3-column grid of portrait-ratio
   category cards with backdrop-blur overlays, category names, and
   photo count badges like `[ 12 PHOTOS ]`.
2. **Given** a visitor clicks a category card, **When** the category
   page loads, **Then** they see photos within that category
   displayed in a gallery layout.

---

### User Story 5 - Learn About the Developer (Priority: P2)

A visitor reads the About Me page to learn about the developer's
background, tech stack, and career history.

**Why this priority**: Establishes credibility and personal connection.
Important for networking and job opportunities.

**Independent Test**: Navigate to `/about-me` and verify avatar,
tech stack listing, and career timeline are displayed.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/about-me`, **When** the page
   loads, **Then** they see an avatar in a terminal frame titled
   `IMG_VIEWER.SH`, a tech stack section titled
   `SYSTEM_CAPABILITIES --LIST` in 3 columns, and a career timeline
   styled as `GIT_LOG --CAREER --ONELINE` with commit hashes.

---

### User Story 6 - Send a Message (Priority: P3)

A visitor uses the contact form to send a message to the developer.

**Why this priority**: Contact functionality is important but used
less frequently. The form submission is client-side only for this
prototype (no backend processing).

**Independent Test**: Navigate to `/get-in-touch`, fill in the form,
and click submit.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/get-in-touch`, **When** the
   page loads, **Then** they see a terminal-styled form with fields
   labelled `IDENTIFY_USER`, `RETURN_PATH`, and `TRANSMISSION_DATA`,
   each with a `>` prefix.
2. **Given** a visitor fills in all fields, **When** they click
   `> SEND_TRANSMISSION.EXE`, **Then** a success confirmation is
   displayed.

---

### User Story 7 - Navigate the Site (Priority: P1)

A visitor uses the navigation bar and footer to move between all
pages of the site.

**Why this priority**: Navigation is foundational infrastructure that
all other stories depend on. Without it, no page is reachable.

**Independent Test**: Verify the fixed top nav bar appears on every
page with all links working, and the footer displays social links.

**Acceptance Scenarios**:

1. **Given** a visitor is on any page, **When** they look at the top
   of the viewport, **Then** they see a fixed navigation bar with
   `trpkovski.com` branding and links: Articles, The Keyboard Lab,
   Through The Lens, About Me, Get In Touch.
2. **Given** a visitor hovers over a nav link, **When** the hover
   effect triggers, **Then** the link displays a coral neon glow.
3. **Given** a visitor is on any page, **When** they scroll to the
   footer, **Then** they see social links for X, Bluesky, LinkedIn,
   GitHub, and Instagram.
4. **Given** a visitor is on a mobile device, **When** they view the
   navigation, **Then** they see a hamburger menu icon that opens a
   mobile menu.

---

### Edge Cases

- What happens when a visitor navigates to a non-existent route?
  A custom 404 page with terminal error styling (`ERR_CONNECTION_REFUSED`)
  MUST be displayed.
- What happens when a visitor searches for articles with no matches?
  An empty state message (`NO LOGS FOUND`) MUST be displayed.
- What happens on very small viewports (< 320px)?
  The layout MUST remain usable with single-column stacking and no
  horizontal overflow.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Site MUST render 9 distinct pages matching the routes
  defined in the site structure (Home, Articles, Article Detail,
  Keyboard Lab, Keyboard Detail, Through The Lens, Photo Category,
  About Me, Get In Touch).
- **FR-002**: Navigation bar MUST be fixed to the top of the viewport
  on all pages with backdrop blur and all page links.
- **FR-003**: Footer MUST appear on all pages with social links for
  X, Bluesky, LinkedIn, GitHub, and Instagram.
- **FR-004**: Home page MUST display a 40/60 split layout with sticky
  hero sidebar (avatar, bio) and 3 latest article cards.
- **FR-005**: Articles page MUST display a searchable, filterable list
  of articles with tag badges, dates, and `[ LOAD_MORE.EXE ]`
  pagination.
- **FR-006**: Article detail page MUST display content in a 3-column
  layout with TOC sidebar that tracks scroll position.
- **FR-007**: The Keyboard Lab MUST display a 2-column grid of
  keyboard cards with grayscale-to-colour hover effect on images.
- **FR-008**: Through The Lens MUST display a responsive grid
  (3-col desktop, 2-col tablet, 1-col mobile) of portrait-ratio
  category cards.
- **FR-009**: About Me MUST display avatar, tech stack in 3 columns,
  and career timeline with commit hash styling.
- **FR-010**: Get In Touch MUST display a terminal-styled contact
  form with validation.
- **FR-011**: All pages MUST include a CRT scanline overlay that is
  purely cosmetic (CSS-only, `pointer-events: none`).
- **FR-012**: All interactive elements MUST be keyboard-navigable
  with visible focus indicators.
- **FR-013**: The site MUST be fully responsive across mobile,
  tablet, and desktop viewports.
- **FR-014**: A 404 error page MUST be displayed for unmatched routes,
  styled with terminal error aesthetics.
- **FR-015**: All content MUST be hardcoded (no CMS, API, or database
  dependencies).
- **FR-016**: Newsletter subscribe form MUST be present on the home
  page with terminal prompt styling.

### Key Entities

- **Article**: Title, slug, cover image, publication date, reading
  time, tags (from predefined tag list), content body, excerpt.
- **Keyboard**: Name, slug, hex ID, cover image, switch type, layout,
  description, specs.
- **Photo Category**: Name, slug, cover image, photo count, list of
  photo URLs.
- **Tag**: Name, colour (from the tag colour map in the design system).
- **Career Entry**: Company, role, date range, commit hash (decorative).
- **Tech Stack Item**: Name, category (e.g., frontend, backend, tools).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All 9 pages render correctly and are navigable within
  2 clicks from the home page.
- **SC-002**: The site passes WCAG AA contrast ratio checks on all
  text elements against the dark background.
- **SC-003**: Page load time is under 3 seconds on a standard
  broadband connection for any page.
- **SC-004**: The site is fully functional without JavaScript for
  core content viewing (SSG pre-rendered HTML).
- **SC-005**: All pages display correctly on viewports from 320px
  to 2560px wide.
- **SC-006**: The CRT scanline overlay is visible on all pages but
  does not interfere with any interactive element.
- **SC-007**: Article search filters results as the user types,
  with results appearing within 300ms.
- **SC-008**: All navigation links correctly route to their target
  pages without full page reloads (client-side navigation).

## Assumptions

- The site targets modern evergreen browsers (Chrome, Firefox, Safari,
  Edge - latest 2 versions). No IE11 support.
- All content (articles, keyboards, photos) uses placeholder/hardcoded
  data for this prototype phase. Real content migration is a future
  concern.
- The newsletter subscribe form captures input visually but does not
  submit to any backend service.
- The contact form validates fields client-side but does not send
  data to any server.
- Social links in the footer link to the developer's actual profiles
  (URLs to be provided or use `#` placeholders).
- Images use placeholder URLs or local assets. Image optimization
  is handled by the framework's built-in tooling.
- The site will be deployed to Vercel as a static site. Build and
  deployment configuration is part of implementation, not this spec.
