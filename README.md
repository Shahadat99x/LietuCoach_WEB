# LietuCoach Web

The official website for LietuCoach - the offline-first Lithuanian learning app.

## Development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run local server:**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000).

## Environment Variables

Required in Vercel/Production:

- `NEXT_PUBLIC_SITE_URL`: The full URL of the site (e.g., `https://lietucoach.app`). used for canonical URLs and SEO.
- `NEXT_PUBLIC_APP_URL`: (Deprecated, use `NEXT_PUBLIC_SITE_URL`).

## Deployment (Vercel)

1. Connect this repo to Vercel.
2. Add environment variables in Project Settings.
3. Deploy `main` branch.

## Post-Deployment QA

See [PRODUCTION_QA.md](./PRODUCTION_QA.md) for a comprehensive checklist to run after every deployment.

1. Check `/robots.txt` and `/sitemap.xml`.
2. Verify Contact email is `hello@dhossain.com`.
3. Test the "Download" button flow.
