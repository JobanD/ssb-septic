/**
 * Service area (city) landing pages.
 *
 * Each entry here becomes its own page, a link in the "Service Areas" nav
 * dropdown, a card on /service-areas, and an entry in sitemap.xml.
 *
 * To add or update a page, paste the copy into an entry below:
 *   slug            → the URL path, without the leading slash
 *                     (e.g. "septic-service-kent" → ssbseptic.com/septic-service-kent)
 *   metaTitle       → <title> / SEO title
 *   metaDescription → SEO meta description
 *   heroTitle       → big header (H1) in the blue banner
 *   introHeading    → optional subtitle shown above the body text
 *   introText       → body text under the banner, one string per paragraph.
 *                     Wrap words in **double asterisks** to make them bold.
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
    introHeading?: string;
    introText: string[];
    draft?: boolean;
}

/** Copy for the /service-areas hub page. */
export const serviceAreasHub = {
    metaTitle: "Septic Service Areas in Western Washington | SSB Septic",
    metaDescription:
        "SSB Septic provides septic tank cleaning, pumping, repairs, installations, and tank locating across King, Pierce, and Snohomish County. Find your city.",
    heroTitle: "Our Service Areas",
    heroSubtitle: "Proudly serving King, Pierce & Snohomish County",
    introHeading: "Septic Services Near You",
    introText: [
        "We're SSB Septic, a family-owned company based in Covington. We provide **septic tank cleaning and pumping**, **septic system installation**, **septic repairs**, and **septic tank locating** for homes and businesses across Western Washington. Find your city below to learn more about service in your area.",
    ],
};

const allServiceAreas: ServiceArea[] = [
    {
        slug: "septic-service-auburn",
        city: "Auburn",
        metaTitle: "Septic Tank Pumping and Repair in Auburn, WA",
        metaDescription: "Schedule septic tank cleaning and pumping in Auburn, WA. SSB Septic also installs and repairs septic systems and helps locate buried tanks.",
        heroTitle: "Septic Service in Auburn, Washington",
        introText: [
            "We're SSB Septic, a family-owned company based in Covington. We provide **septic tank cleaning and pumping** for homes and businesses in **Auburn**. On a routine visit, we empty the tank, haul away the waste, and check the parts we can see while it's open. If you have the last pump-out invoice, it may tell us the tank size when you book.",
            "We also handle **septic system installation** for new construction and replace systems that are past repair. If you're building, a site plan is a useful starting point for an estimate. If the drains are still backing up after a pump-out, we'll look for the cause and explain any **septic repairs** we recommend. We offer **24/7 emergency septic service** if sewage is backing up into your home.",
            "If you don't know where the tank is, ask us about **septic tank locating**. An old septic drawing may show where the lids sit in relation to the house. If the drawing is missing or doesn't get us close enough, we can use a locator. We can also dig out buried lids when the tank needs to be opened.",
        ],
    },
    {
        slug: "septic-service-bellevue",
        city: "Bellevue",
        metaTitle: "Septic Pumping and Repairs in Bellevue, WA",
        metaDescription: "Book septic tank cleaning and pumping in Bellevue, WA. SSB Septic also handles new system installations, replacements, and repairs.",
        heroTitle: "Septic Service in Bellevue, Washington",
        introText: [
            "If your home in **Bellevue** runs on a septic system, you can come to us for routine **septic tank cleaning and pumping**. We're SSB Septic, a family-owned crew based in Covington. We pump out the tank, take away the waste, and check the parts we can see with the lids off. If you have a record of the last service, keep it handy when you book.",
            "We handle **septic system installation** for new builds and for properties with a system that needs replacement. If you already have a drawing or site plan, send it over when you ask for an estimate. A wet spot that keeps showing up over the drainfield or a backup that keeps coming back may call for **septic system repair**. We'll check the system and explain what we found before recommending work.",
            "If the previous owner never showed you the tank, we can help with **septic tank locating**. Check your paperwork for a sketch or notes from a previous service visit. If there's no useful record, we can use a locator to find the tank. Let us know if the lids may be under landscaping or if there's a narrow gate to get through.",
        ],
    },
    {
        slug: "septic-service-bonney-lake",
        city: "Bonney Lake",
        metaTitle: "Septic Service in Bonney Lake, WA | SSB Septic",
        metaDescription: "Get your septic tank cleaned and pumped in Bonney Lake, WA. SSB Septic also quotes new installations and checks systems that need repairs.",
        heroTitle: "Septic Service in Bonney Lake, Washington",
        introText: [
            "If more people are living in the house than when the tank was last pumped, it may be due sooner than you think. We're SSB Septic, and we provide **septic tank cleaning and pumping** in **Bonney Lake**. We take away the waste and check the parts we can see while the tank is open. We can also talk through when to schedule the next visit based on the tank size and how much use it gets. We also offer **pump and holding tank cleaning** if the property has a separate tank that needs servicing.",
            "We offer **septic system installation** for new builds and replace systems that can't be repaired. When you ask for an estimate, let us know if you're building on a vacant lot or replacing a system that's still in use. If an alarm keeps going off or the drains are backing up, we can check the system and explain what **septic repair** would involve. Tell us if the alarm went quiet on its own or kept going until someone reset it.",
            "We offer **septic tank locating** if you're unsure where the lids are. When there's more than one tank on a property, an old invoice or system drawing can help identify what's there. If the paperwork doesn't show where to look, we can use a locator. Tell us when you book if the lids are likely to be buried.",
        ],
    },
    {
        slug: "septic-service-bothell",
        city: "Bothell",
        metaTitle: "Septic Tank Service in Bothell, WA | SSB Septic",
        metaDescription: "Schedule septic tank cleaning and pumping in Bothell, WA. SSB Septic also installs and repairs systems and can locate buried tanks.",
        heroTitle: "Septic Service in Bothell, Washington",
        introText: [
            "We're SSB Septic, and we provide **septic tank cleaning and pumping** for homes and businesses in **Bothell**. We empty the tank, haul away the waste, and look over the parts we can see while it's open. Before we close it up, we'll let you know if anything needs attention. If it's your first time booking service at the property, share any pump-out records the previous owner left you.",
            "We handle **septic installation** for new construction and full replacements. If the septic work is part of a larger project, let us know what stage the job is at and share any plans you have. We also do **septic system repair** when there's a problem with an existing system. If an alarm or backup started after recent work, tell us what was done and when the trouble started.",
            "If nobody showed you where the tank is, we can help with **septic tank locating**. An old inspection report may include a sketch of the tank and drainfield. Send it over if you have one, especially if it shows the distance from the house to the tank. We can use a locator when the records leave us guessing and dig out the lids if needed.",
        ],
    },
    {
        slug: "septic-service-burien",
        city: "Burien",
        metaTitle: "Septic Pumping and System Repair in Burien, WA",
        metaDescription: "Book septic tank cleaning and pumping in Burien, WA. SSB Septic can also quote replacements and check systems that need repairs.",
        heroTitle: "Septic Service in Burien, Washington",
        introText: [
            "We're SSB Septic, and we provide **septic tank cleaning and pumping** for homes and businesses in **Burien**. Some customers are getting back on a regular pumping schedule, while others need service before a home sale. We empty the tank, take away the waste, and check the parts we can see with the lids open. If the sale has a deadline, let us know when you schedule the pump-out.",
            "We can quote a **full septic system replacement** if the old system can't be repaired. Let us know if the building is occupied and share any drawings you have of the existing setup. If you're getting repeat alarms or backups, we can check the system and talk you through the **septic system repair** we recommend. We offer **24/7 emergency septic service** for urgent backups, and you can also ask about a **septic inspection** if you're getting ready to sell.",
            "If there's no clear record of where the lids are, ask about **septic tank locating**. Older inspection reports sometimes have a sketch that shows where the tank is in the yard. We can use a locator if there's no drawing or the property has changed since it was made. If the lids are under grass or old landscaping, we can dig them out so the tank can be serviced.",
        ],
    },
    {
        slug: "septic-service-covington",
        city: "Covington",
        metaTitle: "Septic Service in Covington, WA | SSB Septic",
        metaDescription: "Book septic tank cleaning and pumping with SSB Septic in Covington, WA. We also install and repair systems and locate buried tanks.",
        heroTitle: "Septic Service in Covington, Washington",
        introText: [
            "We're SSB Septic, a family-owned septic company in **Covington**. We provide **septic tank cleaning and pumping** for homes and businesses around town. When we come out, we empty the tank, haul away the waste, and check what we can while the lids are off. If we spot anything that needs fixing, we'll show you what we found.",
            "We handle **new septic system installation** for construction projects and can replace a system that's beyond repair. If you already have a site plan or a drawing of the existing system, share it when you request a quote. If an alarm goes off or a soggy patch over the drainfield keeps coming back, we can take a look and explain any **septic system repair** we recommend. For urgent backups, we offer **24/7 emergency septic service**.",
            "If you don't know where the tank sits, we offer **septic tank locating**. Sometimes the last service record or a sketch of the property is enough to show us where to start. We can use a locator if the records don't tell us much. We can dig out buried lids, too, so you don't have to find them before you book.",
        ],
    },
    {
        slug: "septic-service-federal-way",
        city: "Federal Way",
        metaTitle: "Septic Service in Federal Way, WA | SSB Septic",
        metaDescription: "Schedule septic tank cleaning and pumping in Federal Way, WA. Ask SSB Septic about new installations, replacements, or system repairs.",
        heroTitle: "Septic Service in Federal Way, Washington",
        introText: [
            "SSB Septic provides **septic tank cleaning and pumping** in **Federal Way**. Our crew is based in nearby Covington, and we work on tanks for homes and businesses. When your tank is due, we'll pump it out, haul off the waste, and look over the visible parts. Let us know the tank size and when it was last serviced if you have those details.",
            "We quote **septic system installation** for new buildings and for properties that need a full replacement. Tell us what's on the lot now so we know what the new system would be going in around. We also handle **septic repair** when an alarm or backup keeps coming back, even if it clears before we get there. For sewage backing up into the house, we offer **24/7 emergency septic service**.",
            "We can help with **septic tank locating** if the lids aren't visible. If they used to be near a fence or shed, mention that even if the yard looks different now. We can check available records and use a locator if needed. When the lids are buried, let us know up front so we can allow time to dig them out.",
        ],
    },
    {
        slug: "septic-service-kent",
        city: "Kent",
        metaTitle: "Septic Service in Kent, WA | SSB Septic",
        metaDescription: "Book septic tank cleaning and pumping in Kent, WA. SSB Septic also installs and repairs systems and can help find buried tank lids.",
        heroTitle: "Septic Service in Kent, Washington",
        introText: [
            "We're SSB Septic, a family-owned company based in Covington, and we provide **septic tank cleaning and pumping** in **Kent**. If you just bought a home and nobody left you a service record, we can help you get caught up. We empty the tank, haul away the waste, and look over the parts we can see while it's open. After the visit, we can talk about when to put the next pump-out on the calendar.",
            "We do **septic installation** for new construction and **full system replacements**. A site plan helps when you're building, and old septic records are useful when you're replacing a system. If several drains are backing up or you smell sewage in the yard, we can look into it and explain what a **septic system repair** would involve. We also offer **24/7 emergency septic service** for active backups.",
            "If you got the keys but never found out where the tank is, ask us about **septic tank locating**. We can check county records for a drawing and use an electronic locator if needed. A receipt from the previous owner may also have notes about access to the lids. We can uncover the lids once we've found them so the tank is ready to service.",
        ],
    },
    {
        slug: "septic-service-maple-valley",
        city: "Maple Valley",
        metaTitle: "Septic Pumping and Repair in Maple Valley, WA",
        metaDescription: "Book septic tank cleaning and pumping in Maple Valley, WA. SSB Septic also installs and repairs systems and can locate buried tanks.",
        heroTitle: "Septic Service in Maple Valley, Washington",
        introText: [
            "If it's been a while since your last pump-out, we can get you on the schedule for **septic tank cleaning and pumping** in **Maple Valley**. We're SSB Septic, a family-owned crew based in Covington. We empty the tank, haul away the waste, and check the parts we can see while it's open. If you're unsure when it was last pumped, tell us what you know about the system when you book.",
            "We handle **septic system installation** for new builds and replace systems that have failed. If you have a site plan, send it over when you ask for an estimate so we can see where the system is meant to go. If the drains are backing up or a wet patch keeps showing up over the drainfield, we can check the problem and explain any **septic repairs** we recommend. Let us know if you've recently changed anything in that part of the yard.",
            "We offer **septic tank locating** if you don't know where the tank or lids are. If you're planning a fence or patio, it's worth finding the lids before the work starts. An old site sketch can give us a place to start, and we can use a locator if the sketch doesn't show enough. Knowing where the lids are makes it easier to keep them accessible for the next pump-out.",
        ],
    },
    {
        slug: "septic-service-puyallup",
        city: "Puyallup",
        metaTitle: "Septic Service in Puyallup, WA | SSB Septic",
        metaDescription: "Schedule septic tank cleaning and pumping in Puyallup, WA. SSB Septic also provides new system installations, replacements, and repairs.",
        heroTitle: "Septic Service in Puyallup, Washington",
        introText: [
            "We're SSB Septic, and we do **septic tank cleaning and pumping** for homeowners, landlords, and businesses in **Puyallup**. Whether you live on the property or manage it for someone else, we'll empty the tank, haul away the waste, and check the visible parts. If someone else is meeting the crew, let us know who can give us access. It also helps to know where the truck can park before we get there.",
            "We handle **septic installation** for new buildings and full replacements. If the building will stay open or occupied during the work, let us know when the crew can get in. When there's an alarm or a backup, we'll talk to whoever noticed it, check the system, and explain any **septic system repair** it needs. We offer **24/7 emergency septic service** for urgent backups.",
            "If nobody at the property knows where the tank is, ask us about **septic tank locating**. A previous maintenance invoice or a sketch from the owner may show where the crew last opened the lids. If that doesn't get us far enough, we can use a locator and uncover buried lids. Pass along what we find to whoever handles the next service call so they have it handy.",
        ],
    },
    {
        slug: "septic-service-renton",
        city: "Renton",
        metaTitle: "Septic Tank Pumping and Repairs in Renton, WA",
        metaDescription: "Book septic tank cleaning and pumping in Renton, WA. SSB Septic also handles new installations, full replacements, and system repairs.",
        heroTitle: "Septic Service in Renton, Washington",
        introText: [
            "We're SSB Septic, and we provide **septic tank cleaning and pumping** in **Renton**. If the system is working and it's time for regular service, we'll empty the tank, haul away the waste, and check the parts we can see. If the last crew left a receipt with the tank size, that's useful when you book. We can also talk through when you're likely to need another pump-out.",
            "We do **new septic system installation** and can quote a **full septic system replacement** if the old one can't be repaired. Let us know whether it's a new build or a property with a system still in use. If the same trouble came back after someone pumped the tank or replaced a part, we can take a look and explain what a **septic system repair** would involve. If sewage is backing up into the building, we offer **24/7 emergency septic service**.",
            "We can help with **septic tank locating** if the lids aren't in plain sight. If you've got a drawing, send it over along with anything you remember about where the last crew worked. If the drawing is missing, we can check available records and use a locator if needed. If we need to dig to open the tank, we can handle that as part of the visit.",
        ],
    },
    {
        slug: "septic-service-sammamish",
        city: "Sammamish",
        metaTitle: "Septic Tank Pumping in Sammamish, WA | SSB Septic",
        metaDescription: "Book septic tank cleaning and pumping in Sammamish, WA. SSB Septic can also quote new systems, handle repairs, and locate buried tanks.",
        heroTitle: "Septic Service in Sammamish, Washington",
        introText: [
            "We help **Sammamish** homeowners keep up with **septic tank cleaning and pumping**. If it's been a few years since the last visit or the house is getting more use, we can talk through whether the tank is due. We'll empty it, haul away the waste, and check the parts we can see with the lids off. The tank size and date of the last pump-out help when deciding when to book again.",
            "We offer **septic system installation** for new construction and for properties that need a full replacement. If you're planning an addition, share the plans when you ask for a quote so we can see where the work is meant to go. An alarm that keeps going off or a wet spot that won't go away can be a reason to have us check the system for **septic repair**. We'll explain what we find, and we offer **24/7 emergency septic service** for active backups.",
            "Before a major yard project, it helps to know where the tank sits. Our **septic tank locating** service can help if the lids are hidden and you don't know where to look. Check your property paperwork for an old sketch, especially one that also shows the drainfield. If the records don't show enough, we can use a locator to find the tank.",
        ],
    },
    {
        slug: "septic-service-seattle",
        city: "Seattle",
        metaTitle: "Septic Service for Seattle Properties | SSB Septic",
        metaDescription: "Schedule septic tank cleaning and pumping in Seattle, WA. SSB Septic also handles system replacements, repairs, and tank locating.",
        heroTitle: "Septic Service in Seattle, Washington",
        introText: [
            "If your **Seattle** property runs on a septic system, we can take care of **septic tank cleaning and pumping**. We're SSB Septic, a family-owned crew based in Covington. We empty the tank, take away the waste, and check the parts we can see with the lids open. If you manage the property for someone else, let us know who can meet the crew and where the truck can park. We also offer **holding tank cleaning**, so mention it when you book if the property has a separate holding tank.",
            "We can quote **septic system replacement** when the old setup is past repair. A drawing of the existing system and a photo of the access can help when there's limited space for equipment. If you're dealing with an alarm or a backup, we can inspect the problem and explain any **septic repairs** we recommend. If another crew has already worked on the system, let us know what they did and when.",
            "We offer **septic tank locating** if you don't know where the lids are. Old property paperwork may show a tank even if you can't see the lids in the yard. If a sketch is missing or doesn't match the current layout, we can use a locator. Tell us if the likely area is behind a gate or if something on the property limits access.",
        ],
    },
    {
        slug: "septic-service-tacoma",
        city: "Tacoma",
        metaTitle: "Septic Pumping and Repairs in Tacoma, WA",
        metaDescription: "Book septic tank cleaning and pumping in Tacoma, WA. SSB Septic also installs new systems, handles repairs, and locates buried tanks.",
        heroTitle: "Septic Service in Tacoma, Washington",
        introText: [
            "We're SSB Septic, and we provide **septic tank cleaning and pumping** for homes and businesses in **Tacoma**. On a routine visit, we empty the tank, take the waste away, and look over the visible parts. If your property has a long driveway, tell us where the truck can get in and park. If you already know the tank size or have a receipt from the last service, share it when you book.",
            "We handle **septic system installation** for new builds and replace systems that have failed. Let us know what's already on the property and whether the building will stay occupied during the job. If the system is backing up, we can check it and talk you through the **septic repair** we recommend. We offer **24/7 emergency septic service** for urgent backups.",
            "If you've never seen the lids, ask us about **septic tank locating**. If the previous owner marked the spot on a drawing, show us where they marked it when we arrive. We can use a locator when the records aren't enough. Once we've found the tank, we can uncover the lids if they're buried.",
        ],
    },
    {
        slug: "septic-service-woodinville",
        city: "Woodinville",
        metaTitle: "Septic Tank Pumping and Repair in Woodinville, WA",
        metaDescription: "Schedule septic tank cleaning and pumping in Woodinville, WA. SSB Septic also installs and repairs systems and helps find buried tanks.",
        heroTitle: "Septic Service in Woodinville, Washington",
        introText: [
            "SSB Septic provides **septic tank cleaning and pumping** in the **Woodinville** area. We empty the tank, haul away the waste, and check what we can while the lids are off. If the house has changed hands and you don't know when the tank was last serviced, mention that when you schedule. Any invoice or inspection report you have can help us understand what's been done so far.",
            "We do **septic system installation** for new construction and full replacements. If there's already a tank and drainfield on the property, a sketch can help us see where the equipment needs to go. If pumping helped only briefly and the trouble came back, we can take a look and explain what kind of **septic repair** we'd recommend. Tell us what work was done and how long the problem stayed away.",
            "If you need **septic tank locating**, give us the full street address so we can check the appropriate records. Some Woodinville mailing addresses are outside city limits, so the postal city alone doesn't tell us where to look. An old site drawing can help us narrow down the location. If that still leaves the lids out of sight, we can use a locator and uncover them when needed.",
        ],
    },
];

/** Areas that should be built and linked in the current environment. */
export const serviceAreas: ServiceArea[] = allServiceAreas.filter(
    (area) => import.meta.env.DEV || !area.draft,
);
