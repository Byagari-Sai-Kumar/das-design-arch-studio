import { useState } from "react";
import { DESIGN_STYLES, FLOOR_OPTIONS } from "./formSchema";
import "./steps.css";

/* ── Piecewise linear budget mapping ───────────────────────────────────────
 *
 *  Slider position 0–400, step 1
 *  Segments:
 *    0  – 90  → ₹10L  to ₹1Cr   (1 Lakh per step)
 *    90 – 180 → ₹1Cr  to ₹5Cr   (~4.4L per step)
 *   180 – 280 → ₹5Cr  to ₹20Cr  (~15L per step)
 *   280 – 400 → ₹20Cr to ₹50Cr  (~25L per step)
 *
 *  This guarantees 11, 12, 13 ... lakh resolution at the low end.
 * ──────────────────────────────────────────────────────────────────────── */

const SLIDER_MAX    = 400;
const MIN_AMOUNT    = 1000000;   // ₹10 Lakh
const MAX_AMOUNT    = 500000000; // ₹50 Crore

const posToAmount = (pos) => {
  pos = Math.max(0, Math.min(SLIDER_MAX, pos));
  if (pos <= 90)  return MIN_AMOUNT + pos * 100000;                                         // 10L–1Cr
  if (pos <= 180) return 10000000  + (pos - 90)  * (40000000  / 90);                       // 1Cr–5Cr
  if (pos <= 280) return 50000000  + (pos - 180) * (150000000 / 100);                      // 5Cr–20Cr
                  return 200000000 + (pos - 280) * (300000000 / 120);                       // 20Cr–50Cr
};

const amountToPos = (amount) => {
  if (amount <= MIN_AMOUNT)   return 0;
  if (amount <= 10000000)     return Math.round((amount - MIN_AMOUNT) / 100000);
  if (amount <= 50000000)     return Math.round(90  + (amount - 10000000)  * 90  / 40000000);
  if (amount <= 200000000)    return Math.round(180 + (amount - 50000000)  * 100 / 150000000);
  return Math.min(SLIDER_MAX, Math.round(280 + (amount - 200000000) * 120 / 300000000));
};

/* Tick labels shown below slider */
const TICKS = [
  { pos: 0,   label: "₹10L"  },
  { pos: 90,  label: "₹1Cr"  },
  { pos: 180, label: "₹5Cr"  },
  { pos: 280, label: "₹20Cr" },
  { pos: 400, label: "₹50Cr+" },
];

/* Gradient per design style */
const STYLE_GRADIENTS = {
  "classical":     "linear-gradient(160deg,#c9b8a0 0%,#a08060 100%)",
  "neo-classical": "linear-gradient(160deg,#b8a898 0%,#8a7060 100%)",
  "contemporary":  "linear-gradient(160deg,#9fb5c0 0%,#5a7a8a 100%)",
  "modern":        "linear-gradient(160deg,#b0b8be 0%,#6a7880 100%)",
  "colonial":      "linear-gradient(160deg,#c4b090 0%,#8a6040 100%)",
  "japandi":       "linear-gradient(160deg,#c8c4b8 0%,#7a7870 100%)",
  "other":         "linear-gradient(160deg,#d4c8b8 0%,#9a8870 100%)",
  "not-sure":      "linear-gradient(160deg,#d0cbc4 0%,#9a9490 100%)",
};

/* ── Component ───────────────────────────────────────────────────────────── */
const Step3Project = ({ formData, updateField, errors }) => {
  const d   = formData.project;
  const set = (field, value) => updateField("project", field, value);

  /* Local string state for the custom input — lets user freely edit before we validate */
  const [customRaw, setCustomRaw] = useState(String(d.budgetAmount));
  const [customError, setCustomError] = useState("");

  /* Compute slider position from the stored raw amount */
  const sliderPos = Math.min(SLIDER_MAX, amountToPos(d.budgetAmount));

  /* Fill % — cap at 100 when custom amount exceeds 50Cr */
  const fillPct = d.budgetAmount >= MAX_AMOUNT
    ? 100
    : (sliderPos / SLIDER_MAX) * 100;

  /* Slider moved → update formData + keep custom input in sync */
  const onSliderChange = (e) => {
    const pos = parseInt(e.target.value, 10);
    const amount = Math.round(posToAmount(pos));
    set("budgetAmount", amount);
    setCustomRaw(String(amount));
    setCustomError("");
  };

  /* User types in custom input — store raw string only, no clamping yet */
  const onCustomChange = (e) => {
    const raw = e.target.value.replace(/\D/g, ""); // digits only
    setCustomRaw(raw);
    setCustomError(""); // clear error while typing
  };

  /* On blur — validate and commit to formData */
  const onCustomBlur = () => {
    if (customRaw === "") {
      setCustomError("Please enter a budget amount");
      return;
    }
    const num = parseInt(customRaw, 10);
    if (num < MIN_AMOUNT) {
      setCustomError("Minimum budget is ₹10,00,000 (10 Lakh)");
      /* Don't update formData — keep last valid value in slider */
      return;
    }
    setCustomError("");
    set("budgetAmount", num);
  };

  return (
    <div>
      <h2 className="step-section-title">Project Details</h2>
      <p className="step-section-sub">
        Tell us about the scale and vision for your project.
      </p>

      {/* ── Budget slider ────────────────────────────────────────── */}
      <p className="subsection-label">Budget Range</p>

      <div className="budget-slider-card">
        {/* Live amount display */}
        <div className="budget-display">
          <span className="budget-display-value">
            ₹ {d.budgetAmount}
            {d.budgetAmount >= MAX_AMOUNT && <span className="budget-display-plus">+</span>}
          </span>
        </div>

        {/* Slider */}
        <div className="budget-slider-wrapper">
          <input
            type="range"
            className="budget-slider"
            min="0"
            max={SLIDER_MAX}
            step="1"
            value={sliderPos}
            style={{ "--fill-pct": `${fillPct}%` }}
            onChange={onSliderChange}
          />
          <div className="budget-ticks">
            {TICKS.map(t => (
              <span
                key={t.pos}
                className="budget-tick"
                style={{ left: `${(t.pos / SLIDER_MAX) * 100}%` }}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Custom numeric input */}
        <div className="budget-custom-row">
          <label className="budget-custom-label">Enter exact amount (₹):</label>
          <div className={`budget-custom-input-wrap ${customError ? "budget-custom-input-wrap--error" : ""}`}>
            <span className="budget-rupee">₹</span>
            <input
              className="budget-custom-input"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="e.g. 45000000"
              value={customRaw}
              onChange={onCustomChange}
              onBlur={onCustomBlur}
            />
          </div>
          {customError && (
            <span className="budget-custom-error">{customError}</span>
          )}
          {!customError && d.budgetAmount >= MAX_AMOUNT && (
            <span className="budget-over-max">Full bar shown for 50Cr+</span>
          )}
        </div>
      </div>

      <div className="form-divider" />

      {/* ── Design Style ─────────────────────────────────────────── */}
      <p className="subsection-label">
        Design Style <span className="required-star">*</span>
      </p>
      {errors.designStyle && (
        <p className="form-error" style={{ marginBottom: 10 }}>{errors.designStyle}</p>
      )}
      <div className="style-grid">
        {DESIGN_STYLES.map(opt => (
          <div
            key={opt.value}
            className={`style-card ${d.designStyle === opt.value ? "style-card--selected" : ""}`}
            style={{ background: STYLE_GRADIENTS[opt.value] }}
            onClick={() => set("designStyle", opt.value)}
          >
            <div className="style-card-overlay" />
            <div className="style-card-content">
              <span className="style-card-label">{opt.label}</span>
              <span className="style-card-desc">{opt.desc}</span>
            </div>
            {d.designStyle === opt.value && (
              <div className="style-card-check">✓</div>
            )}
          </div>
        ))}
      </div>

      <div className="form-divider" />

      {/* ── Floor Levels ─────────────────────────────────────────── */}
      <p className="subsection-label">
        Number of Floors <span className="required-star">*</span>
      </p>
      {errors.floorLevels && (
        <p className="form-error" style={{ marginBottom: 10 }}>{errors.floorLevels}</p>
      )}
      <div className="floor-grid">
        {FLOOR_OPTIONS.map(opt => (
          <div
            key={opt.value}
            className={`floor-card ${d.floorLevels === opt.value ? "floor-card--selected" : ""}`}
            onClick={() => set("floorLevels", opt.value)}
          >
            {opt.label}
          </div>
        ))}
      </div>

      {d.floorLevels === "other" && (
        <div className="form-group" style={{ marginTop: 16, maxWidth: 300 }}>
          <label className="form-label">
            Specify Floors <span className="required-star">*</span>
          </label>
          <input
            className={`form-input ${errors.floorCustom ? "error" : ""}`}
            type="text"
            placeholder="e.g. G+5, Basement+G+3..."
            value={d.floorCustom}
            onChange={e => set("floorCustom", e.target.value)}
          />
          {errors.floorCustom && (
            <span className="form-error">{errors.floorCustom}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Step3Project;
