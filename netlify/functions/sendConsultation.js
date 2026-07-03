/**
 * sendConsultation.js — Netlify Function
 *
 * Receives a multipart/form-data POST with:
 *   - data  : JSON string of all consultation fields
 *   - files : one or more uploaded files (optional)
 *
 * Sends two emails via Nodemailer (Gmail SMTP):
 *   1. Owner — full HTML table + files as attachments
 *   2. Visitor — branded thank-you email
 *
 * ENV VARS required (set in Netlify UI or .env):
 *   EMAIL_USER   — Gmail address used to send
 *   EMAIL_PASS   — Gmail App Password (not account password)
 *   OWNER_EMAIL  — Email where owner receives submissions
 */

const nodemailer = require("nodemailer");
const Busboy     = require("busboy");

/* ── Multipart parser ────────────────────────────────────────────────────── */
function parseMultipart(event) {
  return new Promise((resolve, reject) => {
    const fields = {};
    const files  = [];

    const bb = Busboy({
      headers: { "content-type": event.headers["content-type"] || event.headers["Content-Type"] },
    });

    bb.on("field", (name, value) => {
      fields[name] = value;
    });

    bb.on("file", (name, stream, info) => {
      const chunks = [];
      stream.on("data", chunk => chunks.push(chunk));
      stream.on("end", () => {
        files.push({
          filename:    info.filename,
          contentType: info.mimeType,
          content:     Buffer.concat(chunks),
        });
      });
    });

    bb.on("finish", () => resolve({ fields, files }));
    bb.on("error",  reject);

    const body = event.isBase64Encoded
      ? Buffer.from(event.body, "base64")
      : Buffer.from(event.body || "");

    bb.write(body);
    bb.end();
  });
}

/* ── Transporter ─────────────────────────────────────────────────────────── */
const createTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

/* ── Helper: safe value display ───────────────────────────────────────────── */
const val   = (v) => (v !== undefined && v !== null && v !== "" ? v : "—");
const yesNo = (v) => (v === "yes" ? "✅ Yes" : v === "no" ? "❌ No" : "—");

/* ── Owner HTML email ─────────────────────────────────────────────────────── */
const buildOwnerEmail = (data, attachedFileNames) => {
  const { personal, plot, project, family, amenities, brief } = data;

  const tableRow = (label, value) => `
    <tr>
      <td style="padding:10px 16px;background:#f7f5f0;font-size:12px;font-weight:600;
                 color:#9a8a7e;text-transform:uppercase;letter-spacing:0.5px;
                 white-space:nowrap;width:180px;vertical-align:top;
                 border-bottom:1px solid #ede4d8;">${label}</td>
      <td style="padding:10px 16px;font-size:14px;color:#3a2f28;font-weight:500;
                 border-bottom:1px solid #ede4d8;vertical-align:top;">${val(value)}</td>
    </tr>`;

  const sectionHeader = (title) => `
    <tr>
      <td colspan="2" style="padding:14px 16px 10px;background:#a18167;
                              color:#fff;font-size:13px;font-weight:700;
                              letter-spacing:0.8px;text-transform:uppercase;">
        ${title}
      </td>
    </tr>`;

  const plotSize  = plot.plotSizeValue        ? `${plot.plotSizeValue} ${plot.plotSizeUnit}`               : "—";
  const roadWidth = plot.roadWidthValue       ? `${plot.roadWidthValue} ${plot.roadWidthUnit}`             : "—";
  const constArea = plot.constructionAreaValue? `${plot.constructionAreaValue} ${plot.constructionAreaUnit}`: "—";

  const setbackUnit = plot.setbackUnit === "meters" ? "m" : "ft";
  const setbacks = [
    plot.setbackFront && `Front: ${plot.setbackFront}${setbackUnit}`,
    plot.setbackRear  && `Rear: ${plot.setbackRear}${setbackUnit}`,
    plot.setbackLeft  && `Left: ${plot.setbackLeft}${setbackUnit}`,
    plot.setbackRight && `Right: ${plot.setbackRight}${setbackUnit}`,
  ].filter(Boolean).join(" · ") || "—";

  const budgetDisplay = project.budgetLabel || "—";

  const floorDisplay = project.floorLevels === "other" && project.floorCustom
    ? project.floorCustom
    : project.floorLevels || "—";

  const amenityTags = (amenities.selectedAmenities || []).join(", ") || "None";

  const fileDisplay = attachedFileNames.length
    ? attachedFileNames.join(", ") + " (attached)"
    : "None";

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#faf9f6;font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:680px;margin:32px auto;background:#fff;
              border-radius:16px;overflow:hidden;
              box-shadow:0 4px 24px rgba(58,47,40,0.1);">

    <div style="background:linear-gradient(135deg,#a18167 0%,#8a6b50 100%);
                padding:36px 40px;text-align:center;">
      <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;
                text-transform:uppercase;color:rgba(255,255,255,0.75);">
        New Consultation Request
      </p>
      <h1 style="margin:0;font-size:26px;color:#fff;font-weight:700;">
        Design Arch Studio
      </h1>
      <p style="margin:10px 0 0;font-size:14px;color:rgba(255,255,255,0.85);">
        ${personal.firstName} ${personal.lastName} · ${personal.email}
      </p>
    </div>

    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${sectionHeader("1 — Personal Details")}
      ${tableRow("Full Name",   `${personal.firstName} ${personal.lastName}`)}
      ${tableRow("Email",       personal.email)}
      ${tableRow("Phone",       personal.phone)}
      ${tableRow("City",        personal.city)}
      ${tableRow("State",       personal.state)}
      ${tableRow("Country",     personal.country)}

      ${sectionHeader("2 — Plot Details")}
      ${tableRow("Plot Size",         plotSize)}
      ${tableRow("Start Date",        plot.startDate)}
      ${tableRow("Plot Position",     plot.plotPosition)}
      ${tableRow("Plot Facing",       plot.plotFacing)}
      ${tableRow("Vastu",             plot.vastu)}
      ${tableRow("Road Width",        roadWidth)}
      ${tableRow("Setbacks",          setbacks)}
      ${tableRow("Construction Area", constArea)}

      ${sectionHeader("3 — Project Details")}
      ${tableRow("Budget",       budgetDisplay)}
      ${tableRow("Design Style", project.designStyle)}
      ${tableRow("Floor Levels", floorDisplay)}

      ${sectionHeader("4 — Family Requirements")}
      ${tableRow("Family Members",   family.familyMembers)}
      ${tableRow("Bedrooms",         family.bedrooms)}
      ${tableRow("Bathtub",          yesNo(family.bathtub))}
      ${tableRow("Informal Sitting", family.informalSitting)}
      ${tableRow("Formal Sitting",   family.formalSitting)}
      ${tableRow("Dining Seating",   family.diningSitting)}
      ${tableRow("Parking Spaces",   family.parking)}

      ${sectionHeader("5 — Kitchen & Amenities")}
      ${tableRow("Kitchen Layout",    amenities.kitchenLayout)}
      ${tableRow("Servant Room",      yesNo(amenities.servantRoom))}
      ${tableRow("Water Tank",        yesNo(amenities.waterTank))}
      ${tableRow("Underground Tank",  yesNo(amenities.undergroundTank))}
      ${tableRow("Septic Tank",       yesNo(amenities.septicTank))}
      ${tableRow("Premium Amenities", amenityTags)}

      ${sectionHeader("6 — Design Brief")}
      ${tableRow("Brief",       brief.designBrief || "—")}
      ${tableRow("Attachments", fileDisplay)}
    </table>

    <div style="padding:24px 40px;background:#f7f5f0;text-align:center;
                border-top:1px solid #ede4d8;">
      <p style="margin:0;font-size:12px;color:#9a8a7e;">
        Submitted via <a href="https://designarchstudio.in" style="color:#a18167;text-decoration:none;">designarchstudio.in</a>
        · Design Arch Studio
      </p>
    </div>
  </div>
</body>
</html>`;
};

/* ── Visitor acknowledgement email ────────────────────────────────────────── */
const buildVisitorEmail = (firstName) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#faf9f6;font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:560px;margin:32px auto;background:#fff;
              border-radius:16px;overflow:hidden;
              box-shadow:0 4px 24px rgba(58,47,40,0.1);">

    <div style="background:linear-gradient(135deg,#a18167 0%,#8a6b50 100%);
                padding:40px;text-align:center;">
      <p style="margin:0 0 16px;font-size:13px;font-weight:700;letter-spacing:3px;
                text-transform:uppercase;color:rgba(255,255,255,0.7);">Design Arch Studio</p>
      <h1 style="margin:0;font-size:24px;color:#fff;font-weight:700;">
        Thank You, ${firstName}!
      </h1>
    </div>

    <div style="padding:36px 40px;text-align:center;">
      <p style="font-size:16px;color:#3a2f28;line-height:1.75;margin:0 0 12px;font-weight:500;">
        We've received your project brief at <strong>Design Arch Studio</strong>.
      </p>
      <p style="font-size:14px;color:#7a6a5e;line-height:1.75;margin:0 0 32px;">
        Our team will carefully review your requirements and get back to you within
        <strong style="color:#3a2f28;">24 hours</strong> to discuss next steps.
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f5f0;border-radius:12px;margin-bottom:24px;border-collapse:collapse;">
        <tr><td style="padding:20px 24px 8px;">
          <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#a18167;">What Happens Next</p>
        </td></tr>
        <tr><td style="padding:8px 24px 20px;">
          <p style="margin:0 0 10px;font-size:13px;color:#3a2f28;"><strong>1.</strong> Our architect reviews your brief</p>
          <p style="margin:0 0 10px;font-size:13px;color:#3a2f28;"><strong>2.</strong> We schedule a free 30-minute discovery call</p>
          <p style="margin:0;font-size:13px;color:#3a2f28;"><strong>3.</strong> We present an initial concept and proposal</p>
        </td></tr>
      </table>

      <p style="font-size:13px;color:#9a8a7e;margin:0;line-height:1.8;">
        Have a question in the meantime?<br>
        <a href="mailto:designarchstudio646@gmail.com" style="color:#a18167;font-weight:600;text-decoration:none;">designarchstudio646@gmail.com</a>
        &nbsp;·&nbsp;
        <a href="tel:+918019898569" style="color:#a18167;font-weight:600;text-decoration:none;">+91 80198 98569</a>
      </p>
    </div>

    <div style="padding:20px 40px;background:#f7f5f0;text-align:center;border-top:1px solid #ede4d8;">
      <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#b0a097;">Design Arch Studio</p>
      <p style="margin:0;font-size:11px;color:#c8bdb3;">
        Hyderabad, India &nbsp;·&nbsp;
        <a href="https://designarchstudio.in" style="color:#a18167;text-decoration:none;font-weight:600;">designarchstudio.in</a>
      </p>
    </div>
  </div>
</body>
</html>`;

/* ── Database hook (stub) ─────────────────────────────────────────────────── */
async function saveToDatabase(data) {
  // Replace with MySQL/PostgreSQL insert when ready
}

/* ── Handler ──────────────────────────────────────────────────────────────── */
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let data, files;
  try {
    const parsed = await parseMultipart(event);
    data  = JSON.parse(parsed.fields.data);
    files = parsed.files; // [{ filename, contentType, content: Buffer }]
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request" }) };
  }

  const { personal } = data;
  if (!personal?.firstName || !personal?.email || !personal?.phone) {
    return { statusCode: 422, body: JSON.stringify({ error: "Required fields missing" }) };
  }

  const transporter = createTransporter();
  const attachedFileNames = files.map(f => f.filename);

  // Nodemailer attachments format
  const attachments = files.map(f => ({
    filename:    f.filename,
    content:     f.content,
    contentType: f.contentType,
  }));

  try {
    await transporter.sendMail({
      from:        `"Design Arch Studio" <${process.env.EMAIL_USER}>`,
      to:          process.env.OWNER_EMAIL,
      subject:     `New Consultation: ${personal.firstName} ${personal.lastName} — ${personal.city}`,
      html:        buildOwnerEmail(data, attachedFileNames),
      attachments,
    });

    await transporter.sendMail({
      from:    `"Design Arch Studio" <${process.env.EMAIL_USER}>`,
      to:      personal.email,
      subject: "We've received your consultation request — Design Arch Studio",
      html:    buildVisitorEmail(personal.firstName),
    });

    await saveToDatabase(data);

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("sendConsultation error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to send email" }) };
  }
};
