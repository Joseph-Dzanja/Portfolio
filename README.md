# Joseph Dzanja: Portfolio

My personal portfolio site: who I am, what I've built, and how to reach me.

**Stack:** Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · Framer Motion · Nodemailer

## Features

- Single-page layout with scroll-spy navigation and accessible tabs (keyboard navigable)
- Featured project case studies plus a grid of smaller projects
- Contact form backed by a Next.js route handler, with validation, a honeypot and basic rate limiting
- SEO: Open Graph image generated at build time, sitemap, robots.txt and Person structured data
- Respects `prefers-reduced-motion`, and content stays visible without JavaScript

## Editing content

All content lives in `src/data/`, so updating the site rarely means touching components:

| File | What it holds |
| --- | --- |
| `profile.js` | Name, contact details, social links, tagline, site URL |
| `experience.js` | Work history and education |
| `projects.js` | Featured and smaller projects (add `image` for a screenshot) |
| `skills.js` | Capabilities and the tech stack grid |

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

### Environment variables

Create `.env.local`:

```bash
EMAIL_USER=you@gmail.com        # Gmail account that sends and receives contact form mail
EMAIL_PASS=xxxxxxxxxxxxxxxx     # Gmail app password, not your account password
NEXT_PUBLIC_SITE_URL=https://jhdzanja.com   # used for canonical URLs, sitemap and OG tags
```

## Deployment

Deployed on Netlify. Set the environment variables above in the site settings.
