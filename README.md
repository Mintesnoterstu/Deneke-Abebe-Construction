# Deneke Abebe Construction

Public website for **Deneke Abebe Construction (DAC)**, a family-owned general contractor in Addis Ababa, Ethiopia, established 31 March 1995.

This is a static-first Next.js 15 site. There is no backend, database, or API.

## Stack

- Next.js 15 (App Router)
- TypeScript (strict)
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Vercel

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Update company content

Edit these files only:

- `src/data/company.ts` — name, phones, email, services, values, stats, navigation
- `src/data/projects.ts` — project photographs, titles, and categories

Do not hardcode company facts in components.

## Images

Client photographs live in `public/image/` with the original filenames unchanged.

## Deploy on Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repo. Vercel detects Next.js.
4. Click **Deploy**. No environment variables are required.

The site will be live at `https://<project-name>.vercel.app`.
