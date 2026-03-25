/**
 * Ensures Open Graph / Twitter image URLs are absolute (required for iMessage, many social crawlers).
 * Uses VITE_PUBLIC_SITE_URL when set at build time, otherwise the current origin when this runs in the browser.
 */
export function applySocialPreviewMeta(): void {
  if (typeof document === "undefined") return;

  const configured = (import.meta.env.VITE_PUBLIC_SITE_URL as string | undefined)?.trim().replace(/\/$/, "") || "";
  const origin = configured || (typeof window !== "undefined" ? window.location.origin : "");
  if (!origin) return;

  const imageUrl = `${origin}/favicon.png`;
  const title = "TWIY Health";
  const description =
    "TWIY Health — surgical distribution and foot & ankle technology expertise, surgeon support, and manufacturer partnerships across the Southeast United States.";
  const url = `${origin}/`;

  const upsertMeta = (attrs: Record<string, string>) => {
    const selectorKey = attrs.property ?? attrs.name;
    if (!selectorKey) return;
    const attrName = attrs.property ? "property" : "name";
    let el = document.head.querySelector<HTMLMetaElement>(`meta[${attrName}="${selectorKey}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attrName, selectorKey);
      document.head.appendChild(el);
    }
    if (attrs.content) el.setAttribute("content", attrs.content);
  };

  upsertMeta({ property: "og:title", content: title });
  upsertMeta({ property: "og:description", content: description });
  upsertMeta({ property: "og:type", content: "website" });
  upsertMeta({ property: "og:url", content: url });
  upsertMeta({ property: "og:image", content: imageUrl });
  upsertMeta({ property: "og:image:type", content: "image/png" });
  upsertMeta({ property: "og:locale", content: "en_US" });

  upsertMeta({ name: "twitter:card", content: "summary_large_image" });
  upsertMeta({ name: "twitter:title", content: title });
  upsertMeta({ name: "twitter:description", content: description });
  upsertMeta({ name: "twitter:image", content: imageUrl });
}
