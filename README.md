# AstroPower Clock — React Starter (Hackathon 2026)

Next.js 16 + React 19 dashboard for `GET /api/v1/today` windows-only API.

## Quick start

```bash
npm install
cp .env.example .env.local
# edit .env.local -> NEXT_PUBLIC_ASTROPOWER_API_KEY=ASTROPOWER_HACK_xxx
# get at https://astropower.co.in/hackathon#register or use demo-key-hackathon-2026
npm run dev
```

Open http://localhost:3000 — Today's Timing dashboard loads.

## What is included

- `app/page.tsx` — fetches `demo-delhi` windows, renders `TimingDashboard`
- `components/TimingDashboard.tsx` — cards for `good/warn/bad/neutral` with `career/wealth/...`
- Handles 1000/day 10/min limits, caches by date

## API

```
GET https://astropower.co.in/api/v1/today?profile=demo-delhi&date=2026-05-18
Header: x-api-key: ASTROPOWER_API_KEY
```
