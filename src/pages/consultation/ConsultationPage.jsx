import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import initialValues from "../../components/consultation/initialValues";
import { validateStep } from "../../components/consultation/validation";
import { TOTAL_STEPS } from "../../components/consultation/formSchema";
import ProgressBar from "../../components/consultation/ProgressBar";
import NavigationButtons from "../../components/consultation/NavigationButtons";
import Step1Personal from "../../components/consultation/Step1Personal";
import Step2Plot from "../../components/consultation/Step2Plot";
import Step3Project from "../../components/consultation/Step3Project";
import Step4Family from "../../components/consultation/Step4Family";
import Step5Amenities from "../../components/consultation/Step5Amenities";
import Step6Brief from "../../components/consultation/Step6Brief";
import Review from "../../components/consultation/Review";
import "./consultationPage.css";

const REVIEW_STEP = TOTAL_STEPS + 1;

const ConsultationPage = () => {
  const [formData, setFormData]       = useState(initialValues);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors]           = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted]   = useState(false);
  const [animDir, setAnimDir]           = useState("forward"); // for slide direction
  const formTopRef = useRef(null);
  const navigate   = useNavigate();

  /* Scroll to form top on every step change — offset for fixed navbar */
  useEffect(() => {
    if (!formTopRef.current) return;
    const navbarH = window.innerHeight * 0.1 + 24; // 10vh + buffer
    const top = formTopRef.current.getBoundingClientRect().top + window.scrollY - navbarH;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, [currentStep]);

  /* Generic field updater — merges into the correct step sub-object */
  const updateField = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
    /* Clear error for field on change */
    if (errors[field]) {
      setErrors(prev => { const e = { ...prev }; delete e[field]; return e; });
    }
  };

  const handleNext = () => {
    const { isValid, errors: stepErrors } = validateStep(currentStep, formData);
    if (!isValid) {
      setErrors(stepErrors);
      /* Scroll to first error */
      formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setErrors({});
    setAnimDir("forward");
    setCurrentStep(prev => (prev < TOTAL_STEPS ? prev + 1 : REVIEW_STEP));
  };

  const handlePrev = () => {
    setErrors({});
    setAnimDir("back");
    setCurrentStep(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleEditStep = (step) => {
    setAnimDir("back");
    setCurrentStep(step);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      /* Build JSON payload — strip File objects (sent separately) */
      const payload = {
        ...formData,
        project: { ...formData.project, budgetLabel: `₹ ${formData.project.budgetAmount}` },
        brief:   { ...formData.brief,   files: formData.brief.files.map(f => f.name) },
      };

      /* Send as multipart so actual files travel with the submission */
      const body = new FormData();
      body.append("data", JSON.stringify(payload));
      formData.brief.files.forEach(f => body.append("files", f));

      const res = await fetch("/.netlify/functions/sendConsultation", {
        method: "POST",
        body,
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Success Screen ───────────────────────────────────────────────────── */
  if (isSubmitted) {
    return (
      <div className="consultation-success">
        <div className="success-card">
          <div className="success-checkmark">✓</div>
          <h2 className="success-title">Thank You!</h2>
          <p className="success-sub">
            Your consultation request has been received.<br />
            We will get back to you within <strong>24 hours</strong>.
          </p>
          <p className="success-email">
            A confirmation has been sent to <strong>{formData.personal.email}</strong>
          </p>
          <button className="success-home-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  /* ── Step Renderer ────────────────────────────────────────────────────── */
  const renderStep = () => {
    const props = { formData, updateField, errors };
    switch (currentStep) {
      case 1: return <Step1Personal {...props} />;
      case 2: return <Step2Plot     {...props} />;
      case 3: return <Step3Project  {...props} />;
      case 4: return <Step4Family   {...props} />;
      case 5: return <Step5Amenities {...props} />;
      case 6: return <Step6Brief    {...props} />;
      case REVIEW_STEP: return <Review formData={formData} onEdit={handleEditStep} />;
      default: return null;
    }
  };

  const isReview      = currentStep === REVIEW_STEP;
  const progressStep  = isReview ? TOTAL_STEPS : currentStep;

  return (
    <div className="consultation-page">
      {/* Page Header */}
      <div className="consultation-header">
        <p className="consultation-eyebrow">Architecture Consultation</p>
        <h1 className="consultation-title">Start Your Project</h1>
        <p className="consultation-subtitle">
          Tell us about your vision — we'll craft a space that tells your story.
        </p>
      </div>

      {/* Form Card */}
      <div className="consultation-card" ref={formTopRef}>
        <ProgressBar currentStep={progressStep} totalSteps={TOTAL_STEPS} isReview={isReview} />

        {/* Step content with animation */}
        <div className={`step-wrapper step-anim-${animDir}`} key={currentStep}>
          {renderStep()}
        </div>

        <NavigationButtons
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          isReview={isReview}
          isSubmitting={isSubmitting}
          onNext={handleNext}
          onPrev={handlePrev}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ConsultationPage;
