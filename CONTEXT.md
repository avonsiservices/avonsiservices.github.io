# Avonsi Services — Project Context & Continuation Guide
> Generated: March 2026  
> For use in a new Claude Code / CLI session to continue this project

---

## Session Start Checklist

**Always confirm current branch is `draft` (or a feature branch) before making changes:**

```bash
git branch --show-current
```

---

## Who You Are

- **Brand:** Avonsi Services
- **Site:** avonsiservices.github.io (avonsi.com pending redirect)  
- **Purpose:** Personal blog/publishing space for articles on agentic engineering and related frameworks  
- **Style:** Black and white editorial — clean, professional, low-strain charcoal dark mode.
- **License:** MIT License for code (see LICENSE file), CC BY 4.0 for content (see site footer).

---

## Repo Structure

```
avonsiservices.github.io/
├── index.html              ← Landing Page (Curriculum Roadmap)
├── notes/                  ← Articles and Field Notes
│   ├── agentic-engineering/ ← "The Agentic Engineering Journey"
│   └── path-to-transform/   ← Intro Blog Post for Curriculum
├── guides/                 ← Deep-dive SPA curriculum
│   ├── ddd/                ← Guide 1: Domain-Driven Design
│   ├── event-storming/     ← Guide 2: Event Storming
│   ├── flowcharts/         ← Guide 3: Flowchart-First Path
│   ├── ddd-to-context/     ← Guide 4: Domain Context Engineering
│   ├── bmad/               ← Guide 5: BMAD Method
│   ├── attractor/          ← Guide 6: Attractor Framework
│   └── synthesis/          ← Guide 7: From Domain to Factory
└── assets/
    ├── style.css           ← Global base styles + Dark Mode tokens
    ├── landing.css         ← Home page specific styles
    ├── article.css         ← Long-form article styles (callouts, grids)
    ├── guide.css           ← SPA-specific styles (nav clusters, toc)
    ├── components.js       ← Web Components (<site-header-home>, <guide-header>, etc.)
    └── guide.js            ← Shared SPA navigation logic (showPage, navNext)
```

---

## Design System & Standards

### 🌑 Global Dark Mode
- **Logic:** Lives in `assets/components.js`. Uses `document.documentElement.classList.toggle('dark')`.
- **Persistence:** Saved to `localStorage` as `avons-theme`.
- **CSS:** Controlled via `html.dark body { ... }` variable overrides in `style.css`.
- **Palette:** Neutral Charcoal (`#1a1a1a`) background with off-white (`#e0e0e0`) text.

### 📦 Web Components (`assets/components.js`)
| Tag | Purpose | Attributes |
|-----|---------|------------|
| `<site-header-home>` | Home page navigation | N/A |
| `<site-header-article>` | Article navigation (Home link) | N/A |
| `<guide-header>` | SPA Guide navigation | `title="Guide Name"` |
| `<site-footer>` | Shared centered footer | N/A |
| `<utterances-comments>` | GitHub Issue-based comments | `repo="owner/repo"` (e.g., `avonsiservices/avonsiservices.github.io`) |

### 📖 SPA Guide System (`assets/guide.js`)
- **Structure:** Use `<div class="guide-page" id="page-n">` for chapters.
- **Navigation:** `showPage(n)` handles hiding/showing pages and updating the header title/buttons.
- **Keyboard:** Left/Right arrows and Up/Down arrows work for chapter navigation.

### 💡 Callout System (Unified)
Classes defined in `article.css`:
- `.callout-insight`: **Green** (#4a9068) — Key concepts, insights, definitions.
- `.callout-warn`: **Red** (#8b1a1a) — Risks, watch-outs, warnings.
- `.callout-quote`: **Black/Rule** — Pull quotes or lists.

---

## How to Add a New Deep-Dive Guide

1. Create folder: `guides/topic-name/`
2. Create `index.html` with this shell:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Title — Avonsi Services</title>
  <link rel="stylesheet" href="../../assets/style.css">
  <link rel="stylesheet" href="../../assets/guide.css">
  <script src="../../assets/components.js" defer></script>
  <script src="../../assets/guide.js" defer></script>
</head>
<body>
  <guide-header title="Topic Name"></guide-header>
  
  <div class="guide-page active" id="page-0">
    <!-- TOC Content -->
  </div>
  
  <div class="guide-page" id="page-1">
    <!-- Chapter 1 -->
  </div>

  <site-footer></site-footer>
</body>
</html>
```
3. Add to `index.html` (Home) in the "Published" column and the "Topics" sidebar.

---

## Maintenance & Operations

### 🛡️ Local Development
To prevent browser caching while working locally, always use the custom dev server:
```bash
python3 serve.py
```
This serves the site at `http://localhost:8080` with caching disabled.

### 🚀 Cache-Busting (Deploying Updates)
The site uses a simple query-string versioning system (`?v=X.X`) for shared assets (CSS, JS, Logo). 

**When to bump the version:**
Whenever you make changes to:
- `assets/*.css`
- `assets/*.js`
- `assets/logo.png`

**How to bump:**
Update the `?v=1.1` parameter in all `<link>`, `<script>`, and `<img>` tags across:
1. `index.html` (root)
2. All `notes/*/index.html` files
3. All `guides/*/index.html` files
4. Header definitions in `assets/components.js`

This ensures that returning visitors immediately see your latest design and logic updates rather than stale cached versions.

### 🔍 SEO Meta Tags
Meta tags for search engines and social media sharing (Open Graph, Twitter Cards) are automatically generated and injected into the `<head>` of `index.html`, all `notes/*/index.html`, and all `guides/*/index.html` files.

**To update/re-generate meta tags:**
Run the `add_meta_tags.py` script located in the repository root. This script extracts page titles and descriptions to create the meta tags, ensuring consistency and proper formatting.

## Known Issues / Backlog

-   **Email Obfuscation Improvement:** Investigate replacing current SpamSpan implementation with a more modern approach like `undergroundwires/safe-email` for improved robustness and maintainability.
-   **PDF Regeneration:** Regenerate `agentic-engineering-journey.pdf` after B&W colour scheme change and font update (current PDF still uses old styling).
-   **Landing Page Evolution:** Evolve landing page toward karpathy.ai style once more articles exist.
-   **SEO Meta Tags (Advanced):** Implement more dynamic `og:image` and `description` generation based on article content, rather than generic site-wide values.

---

## Git Workflow

1. Work on `feature/name` branch.
2. Merge to `draft`.
3. Tag release on `draft`.
4. Merge `draft` to `main` to go live on GitHub Pages.
