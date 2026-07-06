# Omnilex — Landing Page

Bold, AI-native landing page for Omnilex's legal service offering. Static front end + one Vercel serverless function for the early-access waitlist.

## Structure
- `index.html` — the full single-page site (styles + JS inline, no build step)
- `api/waitlist.js` — Vercel serverless function handling `POST /api/waitlist`

## Run locally
Any static server works for the page, e.g. `npx serve .`. For the API route, run `vercel dev` (needs the Vercel CLI) so `/api/waitlist` is served.

## Wire up the waitlist
Open `api/waitlist.js` and replace the `TODO` with your store/CRM (Resend, Loops, Airtable, HubSpot…). The front end posts `{ email }` to `/api/waitlist`.

## Content to finalise (search for these)
- `[PILOT 01–05]` — replace the trust-strip placeholders with real client logos once approved
- `[SECURITY DETAIL]` — confirm data-handling / certification claims with the team
- `[QUOTE — attribution to be added]` — add a real attributed quote
- Jurisdiction list in the FAQ

## Deploy
Push to Vercel (zero config — static + `/api`).
