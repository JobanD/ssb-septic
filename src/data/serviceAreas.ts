/**
 * Service area (city) landing pages.
 *
 * Each entry here becomes its own page, a link in the "Service Areas" nav
 * dropdown, a card on /service-areas, and an entry in sitemap.xml.
 *
 * To add or update a page, paste the copy into an entry below:
 *   slug            → the URL path, without the leading slash
 *                     (e.g. "septic-services-kent-wa" → ssbseptic.com/septic-services-kent-wa)
 *   metaTitle       → <title> / SEO title
 *   metaDescription → SEO meta description
 *   heroTitle       → big header in the blue banner
 *   introHeading    → subtitle shown under the banner
 *   introText       → body text under the subtitle, one string per paragraph
 *
 * Entries marked `draft: true` only show up in local dev (`npm run dev`),
 * never on the live site. Remove the flag once the real copy is in.
 */

export interface ServiceArea {
    slug: string;
    city: string;
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroSubtitle?: string;
    introHeading: string;
    introText: string[];
    draft?: boolean;
}

/** Copy for the /service-areas hub page. */
export const serviceAreasHub = {
    metaTitle: "Service Areas – SSB Septic | King & Snohomish County, WA",
    metaDescription:
        "SSB Septic provides septic tank cleaning, pumping, repairs, and installations across King and Snohomish County. Find your city.",
    heroTitle: "Our Service Areas",
    heroSubtitle: "Proudly serving King & Snohomish County",
    introHeading: "Septic Services Near You",
    introText: [
        "PLACEHOLDER – replace with the service areas page copy.",
    ],
};

/** Helper for placeholder entries until the real copy arrives. */
function placeholder(city: string, slug: string): ServiceArea {
    return {
        slug,
        city,
        metaTitle: `Septic Services in ${city}, WA – SSB Septic`,
        metaDescription: `PLACEHOLDER meta description for ${city}.`,
        heroTitle: `Septic Services in ${city}, WA`,
        introHeading: `PLACEHOLDER subtitle for ${city}`,
        introText: [`PLACEHOLDER text for ${city}. Replace with the final copy.`],
        draft: true,
    };
}

const allServiceAreas: ServiceArea[] = [
    placeholder("Kent", "septic-services-kent-wa"),
    placeholder("Seattle", "septic-services-seattle-wa"),
    placeholder("Covington", "septic-services-covington-wa"),
    placeholder("Renton", "septic-services-renton-wa"),
    placeholder("Federal Way", "septic-services-federal-way-wa"),
    placeholder("Auburn", "septic-services-auburn-wa"),
    placeholder("Tukwila", "septic-services-tukwila-wa"),
    placeholder("Des Moines", "septic-services-des-moines-wa"),
    placeholder("Normandy Park", "septic-services-normandy-park-wa"),
    placeholder("Burien", "septic-services-burien-wa"),
];

/** Areas that should be built and linked in the current environment. */
export const serviceAreas: ServiceArea[] = allServiceAreas.filter(
    (area) => import.meta.env.DEV || !area.draft,
);
