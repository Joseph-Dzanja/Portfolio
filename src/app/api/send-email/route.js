import nodemailer from "nodemailer";

const LIMITS = { name: 100, email: 200, subject: 150, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort per-IP rate limit. Serverless instances don't share memory,
// so this slows down casual abuse rather than guaranteeing a hard cap.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  if (hits.size > 1000) hits.clear();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const json = (body, status) => Response.json(body, { status });

// Strip line breaks so user input can't add extra mail headers.
const oneLine = (s) => s.replace(/[\r\n]+/g, " ").trim();

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Honeypot filled in: pretend success so bots don't retry.
  if (body.website) return json({ success: true }, 200);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (rateLimited(ip)) {
    return json({ error: "Too many messages. Please try again later." }, 429);
  }

  const fields = {};
  for (const key of Object.keys(LIMITS)) {
    const value = typeof body[key] === "string" ? body[key].trim() : "";
    if (value.length > LIMITS[key]) {
      return json({ error: `The ${key} field is too long.` }, 400);
    }
    fields[key] = value;
  }

  const { name, email, subject, message } = fields;
  if (!name || !message) return json({ error: "Please fill in your name and message." }, 400);
  if (!EMAIL_RE.test(email)) return json({ error: "Please enter a valid email address." }, 400);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Gmail app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: { name: oneLine(name), address: email },
      subject: oneLine(subject ? `${subject} (from ${name})` : `Message from ${name}`),
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(none)"}\n\n${message}`,
    });
    return json({ success: true }, 200);
  } catch (err) {
    console.error("Email error:", err);
    return json({ error: "Failed to send. Please try again." }, 500);
  }
}
