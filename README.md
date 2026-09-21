# Khaled Yousef — AI Quality Engineering

Portfolio built with Next.js, React, Tailwind CSS, and Framer Motion. GitHub hosts the source code; Render builds and hosts the static site.

## Local development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Development uses `.next-preview` to keep its cache separate from production builds.

## Content

- `components/Portfolio.tsx`: homepage, project pipeline, and contact information.
- `components/QualitySignal.tsx`: neural-network and CI/CD animation.
- `components/BrandMark.tsx`: KY logo.
- `lib/projects.ts`: project content and repository links.
- `lib/activity.json`: dated repository activity snapshot.
- `app/globals.css`: layout and visual styling.

## Render deployment

Create a **Static Site** linked to `khaled-yousef-TV/Newporto` with:

| Setting | Value |
| --- | --- |
| Branch | `main` |
| Root directory | Repository root (leave blank) |
| Build command | `npm ci && npm run build` |
| Publish directory | `out` |
| Auto-deploy | On Commit |

Next.js uses `output: "export"` to generate the static site. Render builds directly from the repository; no GitHub Actions workflow is required.

- Render URL: https://portofolio-vlj9.onrender.com
- Custom domain: https://khaledyousef.io

Manage domain verification and HTTPS in Render's **Settings → Custom Domains**, and DNS records in Squarespace. Domain routing is configured in those services, not in repository files.

## Production validation

```sh
npm run build
```

The exported pages and assets are written to `out/`.
