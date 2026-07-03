/**
 * validation.js — pure field validators, no React imports.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s\-().]{7,20}$/;

function req(value, label) {
  if (!value || (typeof value === "string" && !value.trim())) return `${label} is required`;
  return null;
}

/* ── Step 1 ───────────────────────────────────────────────────────────────── */
export function validateStep1(data) {
  const { firstName, lastName, email, phone, city, state, country } = data.personal;
  const errors = {};

  const fn = req(firstName, "First name"); if (fn) errors.firstName = fn;
  const ln = req(lastName,  "Last name");  if (ln) errors.lastName  = ln;

  if (!email?.trim())                    errors.email = "Email is required";
  else if (!EMAIL_RE.test(email.trim())) errors.email = "Enter a valid email address";

  if (!phone?.trim())                    errors.phone = "Phone number is required";
  else if (!PHONE_RE.test(phone.trim())) errors.phone = "Enter a valid phone number";

  const ct = req(city,    "City");    if (ct) errors.city    = ct;
  const st = req(state,   "State");   if (st) errors.state   = st;
  const co = req(country, "Country"); if (co) errors.country = co;

  return { isValid: Object.keys(errors).length === 0, errors };
}

/* ── Step 2 — Plot size, road width, construction area + facing mandatory ── */
export function validateStep2(data) {
  const { plotFacing, plotSizeValue, roadWidthValue, constructionAreaValue } = data.plot;
  const errors = {};

  if (!String(plotSizeValue).trim())        errors.plotSizeValue        = "Plot size is required";
  if (!String(roadWidthValue).trim())       errors.roadWidthValue       = "Road width is required";
  if (!String(constructionAreaValue).trim()) errors.constructionAreaValue = "Construction area is required";
  if (!plotFacing)                          errors.plotFacing            = "Plot facing is required for architectural planning";

  return { isValid: Object.keys(errors).length === 0, errors };
}

/* ── Step 3 — Design style + floors mandatory ─────────────────────────────── */
export function validateStep3(data) {
  const { designStyle, floorLevels, floorCustom } = data.project;
  const errors = {};

  if (!designStyle)  errors.designStyle  = "Please select a design style";
  if (!floorLevels)  errors.floorLevels  = "Please select number of floors";
  if (floorLevels === "other" && !floorCustom?.trim()) {
    errors.floorCustom = "Please specify the number of floors";
  }

  return { isValid: Object.keys(errors).length === 0, errors };
}

/* ── Step 4 — all optional ────────────────────────────────────────────────── */
export function validateStep4() {
  return { isValid: true, errors: {} };
}

/* ── Step 5 — all optional ────────────────────────────────────────────────── */
export function validateStep5() {
  return { isValid: true, errors: {} };
}

/* ── Step 6 — consents mandatory ─────────────────────────────────────────── */
export function validateStep6(data) {
  const { consentContact, consentAccuracy } = data.brief;
  const errors = {};

  if (!consentContact)  errors.consentContact  = "Please accept this to continue";
  if (!consentAccuracy) errors.consentAccuracy = "Please confirm this to continue";

  return { isValid: Object.keys(errors).length === 0, errors };
}

/* ── Dispatcher ──────────────────────────────────────────────────────────── */
export function validateStep(stepNumber, formData) {
  switch (stepNumber) {
    case 1: return validateStep1(formData);
    case 2: return validateStep2(formData);
    case 3: return validateStep3(formData);
    case 4: return validateStep4(formData);
    case 5: return validateStep5(formData);
    case 6: return validateStep6(formData);
    default: return { isValid: true, errors: {} };
  }
}
