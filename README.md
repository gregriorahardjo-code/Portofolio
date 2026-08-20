# Portfolio starter

A Next.js (App Router) portfolio scaffold: home, projects, about, and
contact pages, sharing one design system defined in `app/globals.css`.
The homepage hero renders an actual SVG horn-profile cross-section
computed from cosine-blend / exponential / stepped taper equations —
swap in your own signature element if it doesn't fit your content.

## Run it locally

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
app/
  layout.js        root layout, loads fonts, wraps nav + footer
  globals.css       all design tokens (color, type, spacing) live here
  page.js           home page
  projects/page.js  projects list
  about/page.js     about page
  contact/page.js   contact page
components/
  Nav.js            top navigation
  HornProfile.js     interactive hero SVG
  ProjectCard.js     reusable project card
```

## What to customize

- Replace "Your Name" and placeholder text in `app/page.js`, `app/about/page.js`, `app/contact/page.js`.
- Edit the `projects` array in `app/projects/page.js` with your real work.
- Colors and fonts are CSS variables at the top of `app/globals.css` —
  change `--brass`, `--wave`, `--bg`, etc. to retheme the whole site.
- Swap `mailto:you@example.com` and social links in `app/contact/page.js`.

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Go to vercel.com, sign in with GitHub, click "Add New Project."
3. Select the repo — Vercel auto-detects Next.js and sets the build
   command (`next build`) and output automatically.
4. Click Deploy. You'll get a live URL like `yourname.vercel.app`.
5. Every push to the connected branch redeploys automatically.
