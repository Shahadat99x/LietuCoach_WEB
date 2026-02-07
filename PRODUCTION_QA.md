# Production QA Checklist

Run these checks immediately after deployment to Vercel/Production.

## 1. SEO & Metadata Sanity Check

- [ ] **Robots.txt**: Visit `/robots.txt`.
  - Should allow `/`.
  - Should disallow `/api/`.
  - Should point to valid `sitemap.xml`.
- [ ] **Sitemap**: Visit `/sitemap.xml`.
  - Should load without errors.
  - Should include:
    - `/`
    - `/blog`
    - `/resources`
    - `/support`
    - Dynamic blog posts
- [ ] **Canonical URL**: View source of Homepage.
  - Search for `<link rel="canonical"`.
  - Ensure it points to `https://lietucoach.app/` (or your production URL).
- [ ] **Open Graph**: View source/Inspect `<head>`.
  - `og:image` should point to a valid absolute URL.
  - `og:url` should match the current page.

## 2. Critical Flows (Smoke Test)

- [ ] **Download Page**: Visit `/download`.
  - "Get it on Google Play" button should work (link to store or "Coming Soon").
- [ ] **Support**: Visit `/support`.
  - Contact email should be `hello@dhossain.com`.
  - `mailto:` links should open email client.
- [ ] **Start Here**: Visit `/start`.
  - Should load guide content.

## 3. Contact Info Verification

- [ ] Check Footer email link.
- [ ] Check `/privacy` and `/terms` for correct contact email (`hello@dhossain.com`).
