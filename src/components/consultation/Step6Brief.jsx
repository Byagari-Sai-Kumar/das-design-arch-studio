import { useRef, useState } from "react";
import "./steps.css";

const ACCEPTED    = ".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.webp";
const MAX_SIZE_MB   = 10;
const MAX_TOTAL_MB  = 20;

const formatSize = (bytes) => {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const isImage = (file) => file.type.startsWith("image/");

/* Clean SVG upload icon */
const UploadIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="12" fill="var(--color-bg-card)" />
    <path d="M20 26V14M20 14L15 19M20 14L25 19" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 28h14" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Step6Brief = ({ formData, updateField, errors }) => {
  const d        = formData.brief;
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [sizeError,  setSizeError]  = useState("");

  const addFiles = (newFiles) => {
    setSizeError("");
    const oversized = Array.from(newFiles).filter(f => f.size > MAX_SIZE_MB * 1024 * 1024);
    if (oversized.length) setSizeError(`${oversized.length} file(s) exceeded ${MAX_SIZE_MB} MB and were skipped.`);
    const valid = Array.from(newFiles).filter(f => f.size <= MAX_SIZE_MB * 1024 * 1024);
    const merged = [...d.files, ...valid];
    const totalMB = merged.reduce((sum, f) => sum + f.size, 0) / (1024 * 1024);
    if (totalMB > MAX_TOTAL_MB) {
      setSizeError(`Total size exceeds ${MAX_TOTAL_MB} MB. Please remove some files.`);
      return;
    }
    updateField("brief", "files", merged);
  };

  const removeFile = (index) =>
    updateField("brief", "files", d.files.filter((_, i) => i !== index));

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const handleConsent = (field, checked) => {
    updateField("brief", field, checked);
  };

  return (
    <div>
      <h2 className="step-section-title">Design Brief</h2>
      <p className="step-section-sub">
        Describe your vision and upload any relevant documents. Then confirm two quick consents to proceed.
      </p>

      {/* Brief textarea */}
      <div className="form-group" style={{ marginBottom: 28 }}>
        <label className="form-label">Your Design Brief</label>
        <textarea
          className="form-textarea brief-textarea"
          rows={7}
          placeholder="Tell us about your dream home — lifestyle, priorities, must-haves, inspiration, special requirements…"
          value={d.designBrief}
          onChange={e => updateField("brief", "designBrief", e.target.value)}
        />
      </div>

      {/* Upload zone */}
      <p className="subsection-label">Attachments</p>
      <p className="step-section-sub" style={{ marginBottom: 14 }}>
        Plot drawings, site photos, or reference images — PDF, DWG, JPG, PNG.<br />
        Max <strong>{MAX_SIZE_MB} MB per file</strong> · Max <strong>20 MB total</strong> across all files.
      </p>

      <div
        className={`drop-zone ${isDragging ? "drop-zone--active" : ""}`}
        onDragEnter={() => setIsDragging(true)}
        onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef} type="file" multiple accept={ACCEPTED}
          style={{ display: "none" }}
          onChange={e => addFiles(e.target.files)}
        />
        <UploadIcon />
        <p className="drop-zone-text">
          <strong>Drag & drop files here</strong> or{" "}
          <span className="drop-zone-link">click to browse</span>
        </p>
        <p className="drop-zone-hint">Plot drawings · Site images · Reference images</p>
      </div>

      {sizeError && <p className="form-error" style={{ marginTop: 6 }}>{sizeError}</p>}

      {/* File list */}
      {d.files.length > 0 && (() => {
        const totalBytes = d.files.reduce((sum, f) => sum + f.size, 0);
        const totalMB    = totalBytes / (1024 * 1024);
        const overLimit  = totalMB > MAX_TOTAL_MB;
        return (
          <div className="file-list">
            {d.files.map((file, i) => (
              <div key={i} className="file-item">
                <div className="file-item-left">
                  {isImage(file) ? (
                    <img className="file-thumb" src={URL.createObjectURL(file)} alt={file.name} />
                  ) : (
                    <div className="file-thumb file-thumb--doc">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="2" width="14" height="18" rx="2" stroke="var(--color-primary)" strokeWidth="1.5"/>
                        <path d="M7 7h6M7 10h6M7 13h4" stroke="var(--color-primary)" strokeWidth="1.2" strokeLinecap="round"/>
                        <path d="M14 2v5h5" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  <div className="file-info">
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">{formatSize(file.size)}</span>
                  </div>
                </div>
                <button className="file-remove" onClick={e => { e.stopPropagation(); removeFile(i); }} type="button">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            ))}
            <p className="file-total" style={{ color: overLimit ? "#c0392b" : undefined }}>
              Total: {totalMB.toFixed(1)} MB / {MAX_TOTAL_MB} MB
              {overLimit && " — please remove some files"}
            </p>
          </div>
        );
      })()}

      {/* ── Consent checkboxes ─────────────────────────────────────────── */}
      <div className="consent-section">
        <p className="subsection-label" style={{ marginBottom: 14 }}>Before You Submit</p>

        <label className={`consent-row ${errors.consentContact ? "consent-row--error" : ""}`}>
          <input
            type="checkbox"
            className="consent-checkbox"
            checked={d.consentContact}
            onChange={e => handleConsent("consentContact", e.target.checked)}
          />
          <span className="consent-text">
            I agree to be contacted by <strong>Das Design Arch Studio</strong> regarding my consultation request and project.
          </span>
        </label>
        {errors.consentContact && (
          <p className="form-error consent-error">{errors.consentContact}</p>
        )}

        <label className={`consent-row ${errors.consentAccuracy ? "consent-row--error" : ""}`}>
          <input
            type="checkbox"
            className="consent-checkbox"
            checked={d.consentAccuracy}
            onChange={e => handleConsent("consentAccuracy", e.target.checked)}
          />
          <span className="consent-text">
            I confirm that the information provided is accurate to the best of my knowledge.
          </span>
        </label>
        {errors.consentAccuracy && (
          <p className="form-error consent-error">{errors.consentAccuracy}</p>
        )}
      </div>
    </div>
  );
};

export default Step6Brief;
