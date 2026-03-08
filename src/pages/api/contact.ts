import type { APIRoute } from "astro";

const SERVICE_OPTIONS = new Set([
  "Septic Pumping",
  "Septic Inspection",
  "Septic Repair",
  "Septic Installation",
  "Emergency Service",
  "Other",
]);

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

function sanitizeText(value: unknown, maxLength: number) {
  return String(value ?? "")
    .trim()
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .slice(0, maxLength);
}

function parseServices(rawServices: unknown) {
  const services = Array.isArray(rawServices)
    ? rawServices
    : typeof rawServices === "string"
      ? rawServices.split(",")
      : [];

  const cleaned = services
    .map((service) => sanitizeText(service, 60))
    .filter((service) => SERVICE_OPTIONS.has(service));

  return Array.from(new Set(cleaned));
}

function validate(payload: ReturnType<typeof buildLeadPayload>) {
  const errors: Record<string, string> = {};

  if (!/^[A-Za-z][A-Za-z' -]{0,49}$/.test(payload.firstName)) {
    errors.firstName = "Enter a valid first name.";
  }

  if (!/^[A-Za-z][A-Za-z' -]{0,49}$/.test(payload.lastName)) {
    errors.lastName = "Enter a valid last name.";
  }

  if (!/^[A-Za-z0-9][A-Za-z0-9.,#'\/ -]{4,119}$/.test(payload.streetAddress)) {
    errors.streetAddress = "Enter a valid street address.";
  }

  if (!/^[A-Za-z][A-Za-z' -]{1,79}$/.test(payload.city)) {
    errors.city = "Enter a valid city.";
  }

  if (!/^\d{5}(?:-\d{4})?$/.test(payload.zip)) {
    errors.zip = "Enter a valid ZIP code.";
  }

  if (!payload.services.length) {
    errors.services = "Select at least one service.";
  }

  return errors;
}

function buildLeadPayload(body: Record<string, unknown>) {
  return {
    firstName: sanitizeText(body.firstName, 50),
    lastName: sanitizeText(body.lastName, 50),
    streetAddress: sanitizeText(body.streetAddress, 120),
    city: sanitizeText(body.city, 80),
    zip: sanitizeText(body.zip, 10),
    services: parseServices(body.services),
    tracking: {
      gclid: sanitizeText(body.gclid, 200),
      gbraid: sanitizeText(body.gbraid, 200),
      wbraid: sanitizeText(body.wbraid, 200),
      utm_source: sanitizeText(body.utm_source, 200),
      utm_medium: sanitizeText(body.utm_medium, 200),
      utm_campaign: sanitizeText(body.utm_campaign, 200),
      landing_page: sanitizeText(body.landing_page, 500),
      referrer: sanitizeText(body.referrer, 500),
    },
    submittedAt: new Date().toISOString(),
    source: "ssbseptic.com/contact",
  };
}

function getEnv(key: string) {
  const nodeEnv = (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env;
  return import.meta.env[key] ?? nodeEnv?.[key];
}

async function parseBody(request: Request) {
  const contentType = String(request.headers?.get?.("content-type") || "").toLowerCase();
  const parseForm = async () => {
    const form = await request.clone().formData();
    const body: Record<string, unknown> = {};
    for (const [key, value] of form.entries()) {
      if (key === "services") continue;
      body[key] = typeof value === "string" ? value : "";
    }
    body.services = form.getAll("services").map((value) => String(value));
    return body;
  };

  if (contentType.includes("application/json")) {
    return (await request.json()) as Record<string, unknown>;
  }

  if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
    return parseForm();
  }

  try {
    return (await request.clone().json()) as Record<string, unknown>;
  } catch {}

  try {
    return await parseForm();
  } catch {}

  const raw = await request.text();
  const params = new URLSearchParams(raw);
  const body = Object.fromEntries(params.entries()) as Record<string, unknown>;
  body.services = params.getAll("services");
  return body;
}

async function sendToWebhook(payload: ReturnType<typeof buildLeadPayload>) {
  const webhookUrl = getEnv("LEAD_WEBHOOK_URL");
  if (!webhookUrl) return false;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(getEnv("LEAD_WEBHOOK_SECRET")
        ? { "X-Lead-Secret": getEnv("LEAD_WEBHOOK_SECRET") as string }
        : {}),
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Webhook delivery failed with status ${response.status}`);
  }

  return true;
}

async function sendWithResend(payload: ReturnType<typeof buildLeadPayload>) {
  const apiKey = getEnv("RESEND_API_KEY");
  const toEmail = getEnv("LEAD_TO_EMAIL");
  const fromEmail = getEnv("LEAD_FROM_EMAIL") || "Website Leads <onboarding@resend.dev>";

  if (!apiKey || !toEmail) return false;

  const html = `
    <h2>New SSB Septic Lead</h2>
    <p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p>
    <p><strong>Address:</strong> ${payload.streetAddress}, ${payload.city}, ${payload.zip}</p>
    <p><strong>Services:</strong> ${payload.services.join(", ")}</p>
    <hr />
    <p><strong>Submitted At:</strong> ${payload.submittedAt}</p>
    <p><strong>GCLID:</strong> ${payload.tracking.gclid || "-"}</p>
    <p><strong>GBRAID:</strong> ${payload.tracking.gbraid || "-"}</p>
    <p><strong>WBRAID:</strong> ${payload.tracking.wbraid || "-"}</p>
    <p><strong>UTM Source:</strong> ${payload.tracking.utm_source || "-"}</p>
    <p><strong>UTM Medium:</strong> ${payload.tracking.utm_medium || "-"}</p>
    <p><strong>UTM Campaign:</strong> ${payload.tracking.utm_campaign || "-"}</p>
    <p><strong>Landing Page:</strong> ${payload.tracking.landing_page || "-"}</p>
    <p><strong>Referrer:</strong> ${payload.tracking.referrer || "-"}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: "New Lead: SSB Septic Contact Form",
      html,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend delivery failed with status ${response.status}`);
  }

  return true;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await parseBody(request);
    const honeypot = sanitizeText(body.website, 100);

    if (honeypot) {
      return json(200, { ok: true });
    }

    const payload = buildLeadPayload(body);
    const errors = validate(payload);

    if (Object.keys(errors).length > 0) {
      return json(400, { ok: false, errors });
    }

    let deliveredToWebhook = false;
    let deliveredToResend = false;

    try {
      deliveredToWebhook = await sendToWebhook(payload);
    } catch (error) {
      console.error("Webhook delivery failed", error);
    }

    try {
      deliveredToResend = await sendWithResend(payload);
    } catch (error) {
      console.error("Resend delivery failed", error);
    }

    if (!deliveredToWebhook && !deliveredToResend) {
      return json(503, {
        ok: false,
        error: "Lead destination is not configured or unavailable.",
      });
    }

    return json(200, { ok: true });
  } catch (error) {
    console.error("Lead submission failed", error);
    return json(500, {
      ok: false,
      error: "Unable to submit form right now. Please call us instead.",
    });
  }
};
