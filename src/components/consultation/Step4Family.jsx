import { YES_NO } from "./formSchema";
import "./steps.css";

/* Reusable number stepper */
const Stepper = ({ value, min = 0, max = 20, onChange }) => (
  <div className="number-stepper">
    <button
      className="stepper-btn"
      onClick={() => onChange(Math.max(min, value - 1))}
      type="button"
    >−</button>
    <span className="stepper-value">{value}</span>
    <button
      className="stepper-btn"
      onClick={() => onChange(Math.min(max, value + 1))}
      type="button"
    >+</button>
  </div>
);

/* Yes/No card pair */
const YesNoCards = ({ value, onChange }) => (
  <div className="card-group" style={{ flexWrap: "nowrap", gap: 10 }}>
    {YES_NO.map(opt => (
      <div
        key={opt.value}
        className={`select-card ${value === opt.value ? "selected" : ""}`}
        style={{ flex: "0 0 90px", minWidth: 80 }}
        onClick={() => onChange(opt.value)}
      >
        <span className="card-label">{opt.label}</span>
      </div>
    ))}
  </div>
);

const Step4Family = ({ formData, updateField }) => {
  const d = formData.family;
  const set = (field, value) => updateField("family", field, value);

  return (
    <div>
      <h2 className="step-section-title">Family Requirements</h2>
      <p className="step-section-sub">
        Help us understand who will be living in this space so we can design it right.
      </p>

      <div className="family-grid">
        {/* Family Members */}
        <div className="family-row">
          <div className="family-row-label">
            <span className="family-field-title">Family Members</span>
            <span className="family-field-sub">Total number of people</span>
          </div>
          <Stepper value={d.familyMembers} min={1} onChange={v => set("familyMembers", v)} />
        </div>

        <div className="form-divider" style={{ margin: "4px 0" }} />

        {/* Bedrooms */}
        <div className="family-row">
          <div className="family-row-label">
            <span className="family-field-title">Bedrooms</span>
            <span className="family-field-sub">Including master bedroom</span>
          </div>
          <Stepper value={d.bedrooms} min={1} onChange={v => set("bedrooms", v)} />
        </div>

        <div className="form-divider" style={{ margin: "4px 0" }} />

        {/* Bathtub */}
        <div className="family-row">
          <div className="family-row-label">
            <span className="family-field-title">Bathtub</span>
            <span className="family-field-sub">Do you need a bathtub?</span>
          </div>
          <YesNoCards value={d.bathtub} onChange={v => set("bathtub", v)} />
        </div>

        <div className="form-divider" style={{ margin: "4px 0" }} />

        {/* Informal Sitting */}
        <div className="family-row">
          <div className="family-row-label">
            <span className="family-field-title">Informal Sitting</span>
            <span className="family-field-sub">Seating count</span>
          </div>
          <Stepper value={d.informalSitting} min={0} onChange={v => set("informalSitting", v)} />
        </div>

        <div className="form-divider" style={{ margin: "4px 0" }} />

        {/* Formal Sitting */}
        <div className="family-row">
          <div className="family-row-label">
            <span className="family-field-title">Formal Sitting</span>
            <span className="family-field-sub">Drawing / living room seating</span>
          </div>
          <Stepper value={d.formalSitting} min={0} onChange={v => set("formalSitting", v)} />
        </div>

        <div className="form-divider" style={{ margin: "4px 0" }} />

        {/* Dining Sitting */}
        <div className="family-row">
          <div className="family-row-label">
            <span className="family-field-title">Dining Seating</span>
            <span className="family-field-sub">Chairs around dining table</span>
          </div>
          <Stepper value={d.diningSitting} min={0} onChange={v => set("diningSitting", v)} />
        </div>

        <div className="form-divider" style={{ margin: "4px 0" }} />

        {/* Parking */}
        <div className="family-row">
          <div className="family-row-label">
            <span className="family-field-title">Parking Spaces</span>
            <span className="family-field-sub">Number of vehicles</span>
          </div>
          <Stepper value={d.parking} min={0} max={10} onChange={v => set("parking", v)} />
        </div>
      </div>
    </div>
  );
};

export default Step4Family;
