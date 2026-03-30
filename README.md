# Session Signal Landing Page

Marketing landing page for **Session Signal**, a lightweight booking + reminder product for boutique performance studios.

Built with Next.js.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4

## Run Locally

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Start dev server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - build production bundle
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Project Structure

```text
app/
  layout.tsx              # Root layout
  page.tsx                # Homepage composition
  globals.css             # Global styles + theme tokens

components/landing/       # Homepage sections
  navbar.tsx
  hero.tsx
  social-proof.tsx
  features.tsx
  how-it-works.tsx
  testimonials.tsx
  cta.tsx
  faq.tsx
  footer.tsx

components/ui/            # Reusable UI primitives
hooks/                    # Shared hooks
lib/utils.ts              # Utility helpers
public/                   # Static assets/images
```

## Editing Content

Most copy and layout updates happen in `components/landing/*`.

- Hero headline/CTA: `components/landing/hero.tsx`
- Navigation links and pilot button: `components/landing/navbar.tsx`
- Footer links and brand text: `components/landing/footer.tsx`
- Section order: `app/page.tsx`

## Deployment

Deploy as a standard Next.js app (for example on Vercel):

1. Push this repository.
2. Import the project into your hosting provider.
3. Build command: `npm run build`
4. Start command: `npm run start`

## Notes

- Pilot signup currently links to a Google Form from CTA/nav buttons.
- No environment variables are required for the current implementation.
