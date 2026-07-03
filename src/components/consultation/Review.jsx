import {
  PLOT_POSITIONS, PLOT_FACINGS, VASTU_OPTIONS,
  DESIGN_STYLES, FLOOR_OPTIONS,
  KITCHEN_LAYOUTS, AMENITIES_LIST,
} from "./formSchema";
import "./Review.css";

const optLabel = (options, value) =>
  options.find(o => o.value === value)?.label || value || "—";

const dash = (v) => (v !== undefined && v !== null && v !== "" ? v : "—");

const Section = ({ title, stepNum, onEdit, children }) => (
  <div className="review-section">
    <div className="review-section-header">
      <h3 className="review-section-title">{title}</h3>
      <button className="review-edit-btn" onClick={() => onEdit(stepNum)}>Edit</button>
    </div>
    <div className="review-section-body">{children}</div>
  </div>
);

const Row = ({ label, value }) => (
  <div className="review-row">
    <span className="review-row-label">{label}</span>
    <span className="review-row-value">{dash(value)}</span>
  </div>
);

const Review = ({ formData, onEdit }) => {
  const { personal, plot, project, family, amenities, brief } = formData;

  const budgetLabel = project.budgetAmount
    ? `₹ ${project.budgetAmount}${project.budgetAmount >= 500000000 ? "+" : ""}`
    : "—";

  const plotSize = plot.plotSizeValue
    ? `${plot.plotSizeValue} ${optLabel([{value:plot.plotSizeUnit,label:plot.plotSizeUnit},...[]], plot.plotSizeUnit) || plot.plotSizeUnit}`
    : "—";
  const plotSizeDisplay = plot.plotSizeValue
    ? `${plot.plotSizeValue} ${plot.plotSizeUnit.toUpperCase()}`
    : "—";

  const roadWidth = plot.roadWidthValue
    ? `${plot.roadWidthValue} ${plot.roadWidthUnit}`
    : "—";

  const constArea = plot.constructionAreaValue
    ? `${plot.constructionAreaValue} ${plot.constructionAreaUnit.toUpperCase()}`
    : "—";

  const setbacks = [
    plot.setbackFront  ? `Front: ${plot.setbackFront}${plot.setbackUnit === "meters" ? "m" : "ft"}` : null,
    plot.setbackRear   ? `Rear: ${plot.setbackRear}${plot.setbackUnit === "meters" ? "m" : "ft"}` : null,
    plot.setbackLeft   ? `Left: ${plot.setbackLeft}${plot.setbackUnit === "meters" ? "m" : "ft"}` : null,
    plot.setbackRight  ? `Right: ${plot.setbackRight}${plot.setbackUnit === "meters" ? "m" : "ft"}` : null,
  ].filter(Boolean).join(" · ") || "—";

  const floorDisplay = project.floorLevels === "other" && project.floorCustom
    ? project.floorCustom
    : optLabel(FLOOR_OPTIONS, project.floorLevels);

  const amenityLabels = (amenities.selectedAmenities || [])
    .map(v => AMENITIES_LIST.find(a => a.value === v)?.label)
    .filter(Boolean);

  return (
    <div className="review-wrapper">
      <div className="review-banner">
        <span className="review-banner-icon">✦</span>
        <div>
          <p className="review-banner-title">Almost there!</p>
          <p className="review-banner-sub">
            Please review your details before submitting. Use Edit to go back to any section.
          </p>
        </div>
      </div>

      {/* 1 — Personal */}
      <Section title="Personal Details" stepNum={1} onEdit={onEdit}>
        <Row label="Name"    value={`${personal.firstName} ${personal.lastName}`} />
        <Row label="Email"   value={personal.email} />
        <Row label="Phone"   value={personal.phone} />
        <Row label="City"    value={personal.city} />
        <Row label="State"   value={personal.state} />
        <Row label="Country" value={personal.country} />
      </Section>

      {/* 2 — Plot */}
      <Section title="Plot Details" stepNum={2} onEdit={onEdit}>
        <Row label="Plot Size"         value={plotSizeDisplay} />
        <Row label="Start Date"        value={plot.startDate} />
        <Row label="Road Width"        value={roadWidth} />
        <Row label="Construction Area" value={constArea} />
        <Row label="Setbacks"          value={setbacks} />
        <Row label="Plot Position"     value={optLabel(PLOT_POSITIONS, plot.plotPosition)} />
        <Row label="Plot Facing"       value={optLabel(PLOT_FACINGS,   plot.plotFacing)} />
        <Row label="Vastu"             value={optLabel(VASTU_OPTIONS,  plot.vastu)} />
      </Section>

      {/* 3 — Project */}
      <Section title="Project Details" stepNum={3} onEdit={onEdit}>
        <Row label="Budget"        value={budgetLabel} />
        <Row label="Design Style"  value={optLabel(DESIGN_STYLES, project.designStyle)} />
        <Row label="Floor Levels"  value={floorDisplay} />
      </Section>

      {/* 4 — Family */}
      <Section title="Family Requirements" stepNum={4} onEdit={onEdit}>
        <Row label="Family Members"   value={family.familyMembers} />
        <Row label="Bedrooms"         value={family.bedrooms} />
        <Row label="Bathtub"          value={family.bathtub} />
        <Row label="Informal Sitting" value={family.informalSitting} />
        <Row label="Formal Sitting"   value={family.formalSitting} />
        <Row label="Dining Seating"   value={family.diningSitting} />
        <Row label="Parking"          value={family.parking} />
      </Section>

      {/* 5 — Amenities */}
      <Section title="Kitchen & Amenities" stepNum={5} onEdit={onEdit}>
        <Row label="Kitchen Layout"   value={optLabel(KITCHEN_LAYOUTS, amenities.kitchenLayout)} />
        <Row label="Servant Room"     value={amenities.servantRoom} />
        <Row label="Water Tank"       value={amenities.waterTank} />
        <Row label="Underground Tank" value={amenities.undergroundTank} />
        <Row label="Septic Tank"      value={amenities.septicTank} />
        {amenityLabels.length > 0 ? (
          <div className="review-row review-amenities-row">
            <span className="review-row-label">Amenities</span>
            <div className="review-amenity-tags">
              {amenityLabels.map(a => <span key={a} className="review-amenity-tag">{a}</span>)}
            </div>
          </div>
        ) : (
          <Row label="Amenities" value="None selected" />
        )}
      </Section>

      {/* 6 — Brief */}
      <Section title="Design Brief" stepNum={6} onEdit={onEdit}>
        {brief.designBrief ? (
          <div className="review-brief-text">{brief.designBrief}</div>
        ) : (
          <p className="review-empty">No brief provided.</p>
        )}
        {brief.files.length > 0 && (
          <>
            <p className="review-attachments-label">Attachments ({brief.files.length})</p>
            <div className="review-file-list">
              {brief.files.map((f, i) => (
                <div key={i} className="review-file-chip">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{marginRight:4,flexShrink:0}}>
                    <rect x="1" y="1" width="7" height="10" rx="1" stroke="var(--color-primary)" strokeWidth="1.2"/>
                    <path d="M3 4h3M3 6h3M3 8h2" stroke="var(--color-primary)" strokeWidth="0.9" strokeLinecap="round"/>
                  </svg>
                  {f.name || f}
                </div>
              ))}
            </div>
          </>
        )}
        <div className="review-consent-check">
          <span className="review-consent-tick">✓</span>
          Consent to contact &amp; accuracy confirmed
        </div>
      </Section>
    </div>
  );
};

export default Review;
