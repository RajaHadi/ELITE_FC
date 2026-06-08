# ELITE INTELLIGENCE FC

A frontend-only football team showcase website for **ELITE INTELLIGENCE FC** — built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## Features

- **Squad** — Player profiles with stats (pace, shooting, passing, etc.) and biographies
- **Fixtures** — Match results and upcoming fixtures with scorelines and man of the match
- **Stats** — Team-wide aggregate statistics
- **Responsive** — Mobile-first 2-column grid, hamburger navigation on small screens
- **Dark themed** — Gold (#cc962b) accent over dark brown (#452d09) palette
- **Custom fonts** — Staatliches (headings) + Teko (body) for a sporty feel

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 16 (App Router) | Framework |
| React 19 | UI library |
| TypeScript 5 (strict) | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero section with team logo and tagline |
| `/players` | Squad — all players in a responsive grid |
| `/players/[id]` | Individual player profile with stats hexagon |
| `/matches` | Fixtures — past results and upcoming matches |
| `/matches/[id]` | Match detail |
| `/stats` | Team statistics |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm run lint
```

## Project Structure

```
fb-app/
├── app/              # Next.js App Router pages
│   ├── matches/
│   ├── players/
│   ├── stats/
│   └── layout.tsx
├── components/       # React components
│   ├── home/
│   ├── ui/
│   ├── Footer.tsx
│   └── Navbar.tsx
├── data/             # Static data (players, matches)
├── types/            # TypeScript interfaces
├── public/           # Static assets (logo, player images)
└── lib/              # Utility functions
```

## Data

All data is static — no backend, CMS, or external API. Player and match info lives in `data/` as typed TypeScript arrays.

## License

MIT

---

Developed by **Raja Mannan Khan**
