import {
  PLOT_POSITIONS, PLOT_FACINGS, VASTU_OPTIONS,
  PLOT_SIZE_UNITS, ROAD_WIDTH_UNITS, AREA_UNITS, SETBACK_UNITS,
} from "./formSchema";
import "./steps.css";

/* ── SVG plot position diagrams ─────────────────────────────────────────── */
const PlotDiagram = ({ type, selected }) => {
  const plotFill  = selected ? "#fff"                      : "#a18167";
  const roadFill  = selected ? "rgba(255,255,255,0.35)"    : "#e4d8cc";
  const neighFill = selected ? "rgba(255,255,255,0.22)"    : "#d4c8b8";
  const dotFill   = selected ? "rgba(255,255,255,0.55)"    : "#c0b4aa";
  const dashStroke= selected ? "rgba(255,255,255,0.65)"    : "#a18167";

  if (type === "corner") return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
      <rect x="2"  y="2"  width="35" height="35" rx="3" fill={plotFill} />
      <rect x="39" y="2"  width="13" height="50" rx="2" fill={roadFill} />
      <rect x="2"  y="39" width="35" height="13" rx="2" fill={roadFill} />
      <circle cx="45" cy="14" r="1.6" fill={dotFill} />
      <circle cx="45" cy="21" r="1.6" fill={dotFill} />
      <circle cx="14" cy="45" r="1.6" fill={dotFill} />
      <circle cx="23" cy="45" r="1.6" fill={dotFill} />
    </svg>
  );

  if (type === "center") return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
      <rect x="2"  y="2" width="13" height="35" rx="2" fill={neighFill} />
      <rect x="19" y="2" width="16" height="35" rx="3" fill={plotFill}  />
      <rect x="39" y="2" width="13" height="35" rx="2" fill={neighFill} />
      <rect x="2" y="39" width="50" height="13" rx="2" fill={roadFill}  />
      <circle cx="15" cy="45" r="1.6" fill={dotFill} />
      <circle cx="27" cy="45" r="1.6" fill={dotFill} />
      <circle cx="39" cy="45" r="1.6" fill={dotFill} />
    </svg>
  );

  if (type === "end") return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
      <rect x="2"  y="2" width="13" height="35" rx="2" fill={neighFill} />
      <rect x="18" y="2" width="13" height="35" rx="2" fill={neighFill} />
      <rect x="35" y="2" width="17" height="35" rx="3" fill={plotFill}  />
      <rect x="2" y="39" width="50" height="13" rx="2" fill={roadFill}  />
      <line x1="52" y1="3" x2="52" y2="37" stroke={dashStroke} strokeWidth="1.8" strokeDasharray="3 3" />
      <circle cx="20" cy="45" r="1.6" fill={dotFill} />
      <circle cx="34" cy="45" r="1.6" fill={dotFill} />
    </svg>
  );

  return null;
};

/* ── Self-contained measurement input — NO form-input class ─────────────── */
const MeasureInput = ({ valueKey, unitKey, unitOptions, placeholder, data, onField, error }) => (
  <div className={`measure-input-row ${error ? "measure-input-row--error" : ""}`}>
    <input
      className="measure-number"
      type="number"
      min="0"
      step="any"
      placeholder={placeholder}
      value={data[valueKey]}
      onChange={e => onField(valueKey, e.target.value)}
    />
    <select
      className="measure-unit"
      value={data[unitKey]}
      onChange={e => onField(unitKey, e.target.value)}
    >
      {unitOptions.map(u => (
        <option key={u.value} value={u.value}>{u.label}</option>
      ))}
    </select>
  </div>
);

/* ── Compass button ──────────────────────────────────────────────────────── */
const CompassBtn = ({ dir, d, set }) => {
  const opt = PLOT_FACINGS.find(f => f.value === dir);
  return (
    <div
      className={`compass-btn ${d.plotFacing === dir ? "compass-btn--selected" : ""}`}
      onClick={() => set("plotFacing", dir)}
    >
      {opt.short}
    </div>
  );
};

/* ── Step 2 ──────────────────────────────────────────────────────────────── */
const Step2Plot = ({ formData, updateField, errors }) => {
  const d   = formData.plot;
  const set = (field, value) => updateField("plot", field, value);

  return (
    <div>
      <h2 className="step-section-title">Plot Details</h2>
      <p className="step-section-sub">
        Share what you know about your plot — even rough figures help us plan better.
      </p>

      {/* ── Basic measurements ───────────────────────────────────── */}
      <div className="form-grid">

        <div className="form-group">
          <label className="form-label">
            Plot Size <span className="required-star">*</span>
          </label>
          <MeasureInput
            valueKey="plotSizeValue" unitKey="plotSizeUnit"
            unitOptions={PLOT_SIZE_UNITS} placeholder="e.g. 200"
            data={d} onField={set} error={errors.plotSizeValue}
          />
          {errors.plotSizeValue && <span className="form-error">{errors.plotSizeValue}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Expected Start Date</label>
          <input
            className="form-input"
            type="date"
            value={d.startDate}
            onChange={e => set("startDate", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Road Width <span className="required-star">*</span>
          </label>
          <MeasureInput
            valueKey="roadWidthValue" unitKey="roadWidthUnit"
            unitOptions={ROAD_WIDTH_UNITS} placeholder="e.g. 30"
            data={d} onField={set} error={errors.roadWidthValue}
          />
          {errors.roadWidthValue && <span className="form-error">{errors.roadWidthValue}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">
            Construction Area <span className="required-star">*</span>
          </label>
          <MeasureInput
            valueKey="constructionAreaValue" unitKey="constructionAreaUnit"
            unitOptions={AREA_UNITS} placeholder="e.g. 3500"
            data={d} onField={set} error={errors.constructionAreaValue}
          />
          {errors.constructionAreaValue && (
            <span className="form-error">{errors.constructionAreaValue}</span>
          )}
        </div>

      </div>

      <div className="form-divider" />

      {/* ── Government Setbacks ──────────────────────────────────── */}
      <div className="setbacks-header">
        <p className="subsection-label" style={{ margin: 0 }}>Government Setbacks</p>
        <div className="unit-toggle-group">
          {SETBACK_UNITS.map(u => (
            <button
              key={u.value} type="button"
              className={`unit-toggle-btn ${d.setbackUnit === u.value ? "unit-toggle-btn--active" : ""}`}
              onClick={() => set("setbackUnit", u.value)}
            >
              {u.label}
            </button>
          ))}
        </div>
      </div>
      <div className="setbacks-grid">
        {[
          { key: "setbackFront", label: "Front"      },
          { key: "setbackRear",  label: "Rear"       },
          { key: "setbackLeft",  label: "Left Side"  },
          { key: "setbackRight", label: "Right Side" },
        ].map(item => (
          <div className="form-group" key={item.key}>
            <label className="form-label">
              {item.label} ({d.setbackUnit === "meters" ? "m" : "ft"})
            </label>
            <input
              className="form-input"
              type="number" min="0" step="0.1"
              placeholder="e.g. 3"
              value={d[item.key]}
              onChange={e => set(item.key, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="form-divider" />

      {/* ── Plot Position ─────────────────────────────────────────── */}
      <p className="subsection-label">Plot Position</p>
      <div className="plot-position-group">
        {PLOT_POSITIONS.map(opt => {
          const isSel = d.plotPosition === opt.value;
          return (
            <div
              key={opt.value}
              className={`plot-pos-card ${isSel ? "plot-pos-card--selected" : ""}`}
              onClick={() => set("plotPosition", opt.value)}
            >
              <PlotDiagram type={opt.value} selected={isSel} />
              <span className="plot-pos-label">{opt.label}</span>
              <span className="plot-pos-desc">{opt.desc}</span>
            </div>
          );
        })}
      </div>

      <div className="form-divider" />

      {/* ── Plot Facing ───────────────────────────────────────────── */}
      <p className="subsection-label">
        Plot Facing <span className="required-star">*</span>
      </p>
      <div className="compass-grid">
        {["north-west","north","north-east"].map(dir => <CompassBtn key={dir} dir={dir} d={d} set={set} />)}
        {["west", null, "east"].map((dir, i) =>
          dir ? <CompassBtn key={dir} dir={dir} d={d} set={set} />
               : <div key={i} className="compass-centre">◎</div>
        )}
        {["south-west","south","south-east"].map(dir => <CompassBtn key={dir} dir={dir} d={d} set={set} />)}
      </div>
      {d.plotFacing && (
        <p className="compass-selection-label">
          Selected: <strong>{PLOT_FACINGS.find(f => f.value === d.plotFacing)?.label}</strong>
        </p>
      )}
      {errors.plotFacing && (
        <p className="form-error" style={{ textAlign: "center", marginTop: 6 }}>
          {errors.plotFacing}
        </p>
      )}

      <div className="form-divider" />

      {/* ── Vastu ─────────────────────────────────────────────────── */}
      <p className="subsection-label">Vastu Preference</p>
      <div className="card-group">
        {VASTU_OPTIONS.map(opt => (
          <div
            key={opt.value}
            className={`select-card ${d.vastu === opt.value ? "selected" : ""}`}
            onClick={() => set("vastu", opt.value)}
          >
            <span className="card-label">{opt.label}</span>
            <span className="card-desc">{opt.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step2Plot;
