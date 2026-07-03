import "./steps.css";

const COUNTRIES = [
  "India", "United States", "United Kingdom", "UAE", "Singapore",
  "Australia", "Canada", "Germany", "France", "Other",
];

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman & Nicobar", "Chandigarh", "Delhi", "Jammu & Kashmir", "Ladakh",
  "Lakshadweep", "Puducherry",
];

const Step1Personal = ({ formData, updateField, errors }) => {
  const d = formData.personal;

  const field = (key, label, type = "text", required = false) => (
    <div className="form-group">
      <label className="form-label">
        {label}
        {required && <span className="required-star">*</span>}
      </label>
      <input
        className={`form-input ${errors[key] ? "error" : ""}`}
        type={type}
        value={d[key]}
        placeholder={label}
        onChange={e => updateField("personal", key, e.target.value)}
        autoComplete="off"
      />
      {errors[key] && <span className="form-error">{errors[key]}</span>}
    </div>
  );

  return (
    <div>
      <h2 className="step-section-title">Personal Details</h2>
      <p className="step-section-sub">
        Help us get to know you. All information is kept strictly confidential.
      </p>

      <div className="form-grid">
        {field("firstName", "First Name", "text", true)}
        {field("lastName",  "Last Name",  "text", true)}
        {field("email",     "Email Address", "email", true)}
        {field("phone",     "Phone Number",  "tel",   true)}
        {field("city",      "City",    "text", true)}

        {/* State dropdown */}
        <div className="form-group">
          <label className="form-label">
            State <span className="required-star">*</span>
          </label>
          <select
            className={`form-select ${errors.state ? "error" : ""}`}
            value={d.state}
            onChange={e => updateField("personal", "state", e.target.value)}
          >
            <option value="">Select State</option>
            {INDIAN_STATES.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
            <option value="Other">Other</option>
          </select>
          {errors.state && <span className="form-error">{errors.state}</span>}
        </div>

        {/* Country dropdown — full width */}
        <div className="form-group full-width">
          <label className="form-label">
            Country <span className="required-star">*</span>
          </label>
          <select
            className={`form-select ${errors.country ? "error" : ""}`}
            value={d.country}
            onChange={e => updateField("personal", "country", e.target.value)}
          >
            {COUNTRIES.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.country && <span className="form-error">{errors.country}</span>}
        </div>
      </div>

      <p className="step-privacy-note">
        🔒 Your information is secure and will only be used to contact you about your project.
      </p>
    </div>
  );
};

export default Step1Personal;
