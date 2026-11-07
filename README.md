# CrossCreate

A lightweight, responsive website for the CrossCreate Minecraft Java–Bedrock Create server. Plain HTML, CSS, and JavaScript; no build step or application dependencies.

## Local preview

Run `python3 -m http.server 8080 --directory public` and open http://localhost:8080.

## Cloudflare Pages

- Production branch: `main`
- Build command: leave empty
- Output directory: `public`
- Connect the GitHub repository through Cloudflare Pages for automatic deployments on push.

The site intentionally describes the project as in development. The hostname is `mc.CrossCreate.org`. Public ports, a modpack, Discord, supported Bedrock versions, and a launch date are not yet confirmed. Update `public/index.html` once these are ready. The server's internal Java port must not be assumed to be its public port.

Artwork in `public/factory.svg` and the favicon were created for this website. No game screenshots, Mojang assets, or Create branding assets are bundled. Fonts are loaded from Google Fonts with local fallbacks.

## Files

- `public/index.html`: content, join guide, and FAQ
- `public/styles.css`: responsive visual design
- `public/script.js`: copy-address interaction with accessible feedback
- `public/_headers`: Cloudflare Pages security headers

The website does not access AMP, store credentials, or change the Minecraft server.
