# Areesha Saleem — Portfolio

React + **TypeScript** + Vite + Framer Motion. Black & maroon theme with subtle sparkle.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then builds to /dist
```

## Where to edit things

All content lives in `src/data/` — you never need to touch the components.

| File | What it controls |
| --- | --- |
| `src/data/projects.ts` | Every project card **and its redirect URL** |
| `src/data/experience.ts` | RankArrow, TEDx, 2BTech, Digifloat… |
| `src/data/skills.ts` | Skill groups (`isNew: true` adds a ✦ NEW badge) + the scrolling marquee |
| `src/data/profile.ts` | Name, rotating hero roles, contact info, "Now" chips |
| `src/data/misc.ts` | Certifications, education, achievements |

### Adding a project link (the redirect)

Open `src/data/projects.ts` and paste the URL into the project's `url` field:

```ts
{
  id: "adscope",
  title: "AdScope",
  ...
  url: "https://adscope.example.com",   // ← paste here
}
```

- A project with a URL shows a **Visit project ↗** button (opens in a new tab).
- A project with `url: ""` shows a muted **Link coming soon** label.
- SERPSummary is already linked to `https://serpsummary.com`.

## Deploy to GitHub Pages

1. Push this folder to your `Areesha-Saleem.github.io` repo (`main` branch).
2. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
