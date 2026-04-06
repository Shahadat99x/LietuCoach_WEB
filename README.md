# LietuCoach Web
LietuCoach Web is the public website for **LietuCoach**, an offline-first Lithuanian learning app for Android beginners.  
It combines marketing pages, SEO-focused content, and a structured learning hub (blog + guides) built with Next.js App Router and MDX.

## Overview
This project is the web front-end for introducing the LietuCoach app, guiding new learners, and supporting users with legal/support documentation.

It is built for:
- New Lithuanian learners looking for practical beginner resources
- Android users who want the app download and onboarding flow
- Visitors who need support, privacy, terms, and data-deletion information

## ✨ Key Features
- Landing page with clear value proposition and app CTAs
- Dedicated **Download** page for Android with Play Store linking
- **Start Here** 7-day beginner roadmap page
- Content system for:
  - Blog index + dynamic blog post pages from MDX
  - Resource index + dynamic resource pages from MDX
- Embedded in-content CTA blocks for resource/blog pages
- Support center with focused troubleshooting pages (offline, audio, account, bug reporting)
- Privacy policy, terms of service, and data deletion pages
- SEO foundations:
  - Route metadata
  - Dynamic sitemap (`/sitemap.xml`)
  - robots rules (`/robots.txt`)
  - JSON-LD structured data (Organization, SoftwareApplication, Article, LearningResource)
- UTM-tagged Play Store links for CTA attribution
- Mobile UX enhancements (sticky app-install CTA + mobile nav drawer)
- Vercel cron endpoint (`/api/keepalive`) to ping Supabase health/REST routes

## 🛠 Tech Stack
- **Frontend**: Next.js 16 (App Router), React 19, TypeScript
- **Styling/UI**: Tailwind CSS v4, Lucide icons
- **Content**: MDX via `next-mdx-remote`, frontmatter parsing via `gray-matter`
- **Infrastructure / DevOps**:
  - Vercel deployment config (`vercel.json`)
  - GitHub Actions CI (`npm ci`, `npm run lint`, `npm run build`)
- **Integrations / Services**:
  - Google Play Store outbound CTAs with UTM attribution
  - Supabase health checks through keepalive API route

## 🏗 Architecture Overview
The app is structured as a Next.js App Router site:

- `src/app/*` contains route pages and metadata/system routes
- `content/blog/*.mdx` and `content/resources/*.mdx` store article/guide source
- `src/lib/mdx.ts` loads MDX files from disk and parses frontmatter
- Dynamic routes (`/blog/[slug]`, `/resources/[slug]`) generate static params from local MDX content
- Shared UI is componentized into layout, home, mdx, support, and ui modules

Primary data flow:
1. Author MDX in `/content`
2. Parse frontmatter/content at build/runtime via `getAllContent` / `getContentBySlug`
3. Render route pages and inject metadata/JSON-LD
4. Route CTA clicks through `getPlayStoreLink(...)` to append standard UTM params

## 📸 Demo / Screenshots
- **Configured production URL**: `https://lietucoach.app`
- Suggested screenshots to add in this README:
  1. Homepage hero + primary “Get it on Google Play” CTA
  2. `/start` 7-day roadmap timeline section
  3. Resource detail page showing MDX content + embedded CTA
  4. Support center page
- Useful GIF idea (optional):  
  “Homepage → open a resource guide → click in-content app CTA” quick navigation flow.

## 🚀 Getting Started
### Prerequisites
- Node.js 20+
- npm

### Installation
```bash
npm install
```

### Environment Variables
Create a local `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Optional (only needed for `/api/keepalive` route):

```bash
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
CRON_SECRET=...
```

### Run Locally
```bash
npm run dev
```
Then open: `http://localhost:3000`

### Build / Production
```bash
npm run build
npm run start
```

CI workflow currently runs:
```bash
npm run lint
npm run build
```

## 📁 Project Structure
```text
.
├── content/
│   ├── blog/                # MDX blog posts
│   └── resources/           # MDX learning guides
├── docs/
│   ├── PLAY_STORE_LISTING_KIT.md
│   └── UTM_ATTRIBUTION.md
├── src/
│   ├── app/
│   │   ├── api/keepalive/   # Vercel cron health check endpoint
│   │   ├── blog/            # Blog index + [slug]
│   │   ├── resources/       # Resource index + [slug]
│   │   ├── support/         # Help center and subpages
│   │   ├── download/        # App download page
│   │   ├── start/           # 7-day roadmap page
│   │   ├── privacy/ terms/ data-deletion/
│   │   ├── layout.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── manifest.ts
│   ├── components/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── mdx/
│   │   ├── support/
│   │   └── ui/
│   ├── config/              # Site and navigation config
│   └── lib/                 # Content loading + analytics URL helpers
├── .github/workflows/ci.yml
├── vercel.json
└── PRODUCTION_QA.md
```

## 🔄 Core Workflows / API / User Flow
- **Marketing → install flow**: visitor lands on home/start/download pages and uses UTM-tagged “Get App” CTAs.
- **Content flow**: MDX content is listed on index pages and rendered on dynamic `[slug]` routes.
- **Support flow**: users navigate support topics and contact support via `mailto`.
- **SEO workflow**: metadata, JSON-LD, sitemap, and robots are generated from config + content.
- **Keepalive API flow** (`GET /api/keepalive`):
  - checks Supabase auth health endpoint
  - falls back to Supabase REST endpoint
  - returns health status JSON for cron monitoring

## 💡 Engineering Highlights
- Clean App Router route organization for public web + system routes
- Reusable MDX content pipeline for scalable blog/resource publishing
- Centralized CTA attribution logic (`getPlayStoreLink`) with consistent UTM taxonomy
- Strong SEO baseline beyond basic meta tags (structured data + sitemap + robots)
- Mobile-focused UX decisions (sticky CTA, mobile navigation overlay/drawer)
- Deployment-minded operational detail: cron-driven backend keepalive endpoint
- CI integration with lint/build quality gates in GitHub Actions

## ⚠ Challenges / Trade-offs
- This repository is web-only; core Android app logic is outside this codebase.
- Some support/legal copy references app capabilities that are not verifiable from this repo alone.
- Current CI lint step is configured, but the repository presently contains lint issues that should be resolved for a consistently green pipeline.

## 🗺 Roadmap
- Add real product screenshots and/or short demo GIF to improve recruiter and reviewer scanability
- Add automated tests (component and route-level) for key public pages and MDX rendering
- Resolve current lint issues and enforce a zero-error CI baseline
- Add an `.env.example` file to standardize onboarding for contributors
- Add Open Graph image assets and page-level previews for richer link sharing

## 👤 Author
- **GitHub**: https://github.com/Shahadat99x
- **Portfolio**: _Add your portfolio URL_
- **LinkedIn**: _Add your LinkedIn URL_
