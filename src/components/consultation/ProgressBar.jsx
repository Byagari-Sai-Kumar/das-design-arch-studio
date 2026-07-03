import { STEPS } from "./formSchema";
import "./ProgressBar.css";

const ProgressBar = ({ currentStep, totalSteps, isReview }) => {
  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar-track">
        {STEPS.map((step, index) => {
          const isCompleted = currentStep > step.number;
          const isCurrent   = currentStep === step.number;
          const isLast      = index === STEPS.length - 1;

          return (
            <div className="progress-step-group" key={step.number}>
              {/* Circle */}
              <div className="progress-step-col">
                <div
                  className={`progress-circle
                    ${isCompleted ? "progress-circle--done" : ""}
                    ${isCurrent   ? "progress-circle--active" : ""}
                  `}
                >
                  {isCompleted ? (
                    <span className="progress-check">✓</span>
                  ) : (
                    <span className="progress-num">{step.number}</span>
                  )}
                </div>
                <span
                  className={`progress-label
                    ${isCurrent   ? "progress-label--active" : ""}
                    ${isCompleted ? "progress-label--done" : ""}
                  `}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector line (not after last step) */}
              {!isLast && (
                <div
                  className={`progress-line ${isCompleted ? "progress-line--done" : ""}`}
                />
              )}
            </div>
          );
        })}

        {/* Review bubble */}
        <div className="progress-step-group">
          <div className="progress-step-col">
            <div className={`progress-circle ${isReview ? "progress-circle--active" : ""}`}>
              <span className="progress-num">✦</span>
            </div>
            <span className={`progress-label ${isReview ? "progress-label--active" : ""}`}>
              Review
            </span>
          </div>
        </div>
      </div>

      {/* Thin fill bar behind circles */}
      <div className="progress-fill-bar">
        <div
          className="progress-fill-bar-inner"
          style={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
