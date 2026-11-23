import type { APIRoute } from "astro";
import { serviceAreas } from "../data/serviceAreas";

const SITE = "https://ssbseptic.com";

const staticPages: { path: string; priority: string }[] = [
    { path: "/", priority: "1.00" },
    { path: "/about", priority: "0.80" },
    { path: "/services", priority: "0.80" },
    { path: "/faq", priority: "0.80" },
    { path: "/contact", priority: "0.80" },
    { path: "/policy", priority: "0.60" },
];

/** Generated at build time so new service area pages are picked up automatically. */
export const GET: APIRoute = () => {
    const pages = [...staticPages];
    if (serviceAreas.length > 0) {
        pages.push({ path: "/service-areas", priority: "0.80" });
        for (const area of serviceAreas) {
            pages.push({ path: `/${area.slug}`, priority: "0.70" });
        }
    }

    const urls = pages
        .map(
            ({ path, priority }) =>
                `    <url>\n        <loc>${SITE}${path}</loc>\n        <priority>${priority}</priority>\n    </url>`,
        )
        .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

    return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};
