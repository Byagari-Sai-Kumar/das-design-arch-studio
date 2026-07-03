import "./NavigationButtons.css";

const NavigationButtons = ({
  currentStep,
  totalSteps,
  isReview,
  isSubmitting,
  onNext,
  onPrev,
  onSubmit,
}) => {
  const isFirstStep = currentStep === 1;

  return (
    <div className="nav-buttons-wrapper">
      <div className="nav-buttons-inner">
        {/* Previous */}
        {!isFirstStep && (
          <button
            className="nav-btn nav-btn--prev"
            onClick={onPrev}
            disabled={isSubmitting}
          >
            ← Previous
          </button>
        )}

        {/* Spacer when no Prev button on step 1 */}
        {isFirstStep && <span />}

        {/* Next or Submit */}
        {isReview ? (
          <button
            className="nav-btn nav-btn--submit"
            onClick={onSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="nav-btn-spinner">
                <span className="spinner-ring" /> Submitting…
              </span>
            ) : (
              "Submit Consultation ✦"
            )}
          </button>
        ) : (
          <button
            className="nav-btn nav-btn--next"
            onClick={onNext}
            disabled={isSubmitting}
          >
            {currentStep === totalSteps ? "Review →" : "Next →"}
          </button>
        )}
      </div>
    </div>
  );
};

export default NavigationButtons;
