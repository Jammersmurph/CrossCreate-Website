# CrossCreate

The website for CrossCreate, a Minecraft Java–Bedrock Create server project. Built with Astro and TypeScript as a static site.

- Website: https://crosscreate.org
- Pages address: https://crosscreate.pages.dev
- Repository: https://github.com/Jammersmurph/CrossCreate-Website
- Hosting: Cloudflare Pages project `crosscreate`, connected to GitHub; pushes to `main` deploy automatically.

## Requirements

- Node.js >= 22.23.4 (see `.nvmrc`)
- npm

## Local development

```sh
npm install
npm run dev        # http://localhost:4321
```

## Checks and production build

```sh
npm run check      # astro check (TypeScript + .astro diagnostics)
npm run build      # astro check && astro build -> dist/
npm run preview    # preview the built site
```

The build output is `dist/`.

## Cloudflare Pages

- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION=22`
- Framework preset: Astro (or None; the build command handles it)

## Content

All copy, versions, features, setup steps, and FAQs live in `src/data/site.ts`. Edit that file rather than the components.

The logo is a single replaceable file: `public/logo.svg`, referenced everywhere through `site.logo.src`. Drop in an official logo at that path (or change `site.logo.src`) and it updates the header, footer, favicon, and social card. Set `site.logo.wordmark` to `false` if the replacement artwork already includes the “CrossCreate” name.

The site intentionally describes the project as in development. The hostname is `mc.CrossCreate.org`. Public ports, a modpack, Discord, supported Bedrock versions, and a launch date are not yet confirmed. The server's internal Java port must not be assumed to be its public port.

## Security

`public/_headers` sets a strict Content Security Policy and long-lived caching for hashed `/_astro/*` assets. Stylesheets and scripts are emitted as external files (`build.inlineStylesheets: 'never'`, `vite.build.assetsInlineLimit: 0`) so the `script-src 'self'` / `style-src 'self'` rules hold.

The policy also allows Cloudflare Web Analytics (`static.cloudflareinsights.com` for the beacon, `cloudflareinsights.com` for its endpoint) because Cloudflare injects that script into Pages responses. Remove those two origins if analytics is turned off.

## Files

- `src/data/site.ts` — typed site content
- `src/pages/index.astro` — page composition
- `src/components/` — header, hero, machine, assembly, notes, outro, footer
- `src/styles/global.css` — dark industrial design and responsive rules
- `src/scripts/main.ts` — clipboard copy interaction with accessible toast
- `src/layouts/Layout.astro` — metadata, social tags, header/footer shell
- `public/logo.svg` — single brand mark
- `public/factory.svg` — original isometric workshop illustration
- `public/og.png` — 1200×630 social preview
- `public/_headers` — Cloudflare Pages headers

The artwork in `public/factory.svg`, `public/logo.svg`, and `public/og.png` was created for this website. No game screenshots, Mojang assets, or Create branding assets are bundled. Fonts are loaded from Google Fonts with local fallbacks.

The website does not access AMP, store credentials, or change the Minecraft server.
