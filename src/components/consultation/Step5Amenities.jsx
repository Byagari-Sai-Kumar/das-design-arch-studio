import { KITCHEN_LAYOUTS, AMENITIES_LIST, YES_NO } from "./formSchema";
import "./steps.css";

const YesNoCards = ({ value, onChange }) => (
  <div className="card-group" style={{ flexWrap: "nowrap", gap: 10 }}>
    {YES_NO.map(opt => (
      <div
        key={opt.value}
        className={`select-card ${value === opt.value ? "selected" : ""}`}
        style={{ flex: "0 0 80px", minWidth: 72 }}
        onClick={() => onChange(opt.value)}
      >
        <span className="card-label">{opt.label}</span>
      </div>
    ))}
  </div>
);

const Step5Amenities = ({ formData, updateField }) => {
  const d = formData.amenities;
  const set = (field, value) => updateField("amenities", field, value);

  const toggleAmenity = (value) => {
    const current = d.selectedAmenities;
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    set("selectedAmenities", updated);
  };

  return (
    <div>
      <h2 className="step-section-title">Kitchen & Amenities</h2>
      <p className="step-section-sub">
        Customise your home with the spaces and features that matter to your lifestyle.
      </p>

      {/* Kitchen Layout */}
      <p className="subsection-label">Kitchen Layout</p>
      <div className="card-group">
        {KITCHEN_LAYOUTS.map(opt => (
          <div
            key={opt.value}
            className={`select-card ${d.kitchenLayout === opt.value ? "selected" : ""}`}
            onClick={() => set("kitchenLayout", opt.value)}
          >
            <span className="card-label">{opt.label}</span>
            <span className="card-desc">{opt.desc}</span>
          </div>
        ))}
      </div>

      <div className="form-divider" />

      {/* Utility requirements */}
      <p className="subsection-label">Utility Requirements</p>
      <div className="utility-grid">
        {[
          { key: "servantRoom",     label: "Servant Room"      },
          { key: "waterTank",       label: "Water Tank (Roof)" },
          { key: "undergroundTank", label: "Underground Tank"  },
          { key: "septicTank",      label: "Septic Tank"       },
        ].map(item => (
          <div key={item.key} className="utility-row">
            <span className="utility-label">{item.label}</span>
            <YesNoCards
              value={d[item.key]}
              onChange={v => set(item.key, v)}
            />
          </div>
        ))}
      </div>

      <div className="form-divider" />

      {/* Premium Amenities */}
      <p className="subsection-label">Premium Amenities</p>
      <p className="step-section-sub" style={{ marginBottom: 18 }}>
        Select all that you'd like in your dream home.
      </p>
      <div className="amenities-grid">
        {AMENITIES_LIST.map(amenity => {
          const isSelected = d.selectedAmenities.includes(amenity.value);
          return (
            <div
              key={amenity.value}
              className={`amenity-card ${isSelected ? "amenity-card--selected" : ""}`}
              onClick={() => toggleAmenity(amenity.value)}
            >
              <span className="amenity-icon">{amenity.icon}</span>
              <span className="amenity-label">{amenity.label}</span>
              {isSelected && <div className="amenity-check">✓</div>}
            </div>
          );
        })}
      </div>

      {d.selectedAmenities.length > 0 && (
        <p className="amenities-count">
          {d.selectedAmenities.length} amenit{d.selectedAmenities.length === 1 ? "y" : "ies"} selected
        </p>
      )}
    </div>
  );
};

export default Step5Amenities;
