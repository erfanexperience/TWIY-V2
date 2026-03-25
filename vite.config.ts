import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * TWIY keeps the source art at Assests/fav.png. Vite would hash /Assests/fav.png if linked from HTML
 * because that path exists under the project root. Copying to public/favicon.png gives stable URLs
 * for browsers, iOS/Android, and social crawlers (og:image must stay consistent).
 */
function syncFaviconToPublic(): {
  name: string;
  buildStart: () => void;
} {
  return {
    name: "sync-favicon-assests-to-public",
    buildStart() {
      const src = path.join(__dirname, "Assests", "fav.png");
      const dest = path.join(__dirname, "public", "favicon.png");
      if (!fs.existsSync(src)) {
        console.warn(`[vite] Assests/fav.png not found; favicon sync skipped.`);
        return;
      }
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);

      // Some browsers prefer `favicon.ico`, and GitHub Pages will serve what we place in `public/`.
      const srcIco = path.join(__dirname, "Assests", "fav.ico");
      const destIco = path.join(__dirname, "public", "favicon.ico");
      if (!fs.existsSync(srcIco)) {
        console.warn(`[vite] Assests/fav.ico not found; favicon.ico sync skipped.`);
        return;
      }
      fs.copyFileSync(srcIco, destIco);
    },
  };
}

function injectSocialMeta(siteUrl: string): {
  name: string;
  transformIndexHtml(html: string): string;
} {
  const site = siteUrl.trim().replace(/\/$/, "");
  return {
    name: "inject-open-graph-meta",
    transformIndexHtml(html: string) {
      const block = site
        ? `
    <meta property="og:site_name" content="TWIY Health" />
    <meta property="og:title" content="TWIY Health" />
    <meta property="og:description" content="TWIY Health — surgical distribution and foot &amp; ankle technology expertise, surgeon support, and manufacturer partnerships across the Southeast United States." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${site}/" />
    <meta property="og:image" content="${site}/favicon.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="TWIY Health" />
    <meta name="twitter:description" content="TWIY Health — surgical distribution and foot &amp; ankle technology expertise across the Southeast United States." />
    <meta name="twitter:image" content="${site}/favicon.png" />
    <link rel="canonical" href="${site}/" />`
        : "";
      return html.replace("<!--__SOCIAL_META__-->", block);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const site = env.VITE_PUBLIC_SITE_URL ?? "";

  return {
    plugins: [react(), syncFaviconToPublic(), injectSocialMeta(site)],
    server: {
      port: 5173,
      strictPort: true,
    },
  };
});
