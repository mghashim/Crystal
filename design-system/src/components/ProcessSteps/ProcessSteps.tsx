import React from 'react';

export interface ProcessStep {
  /** Two-digit step marker, e.g. "01". */
  number: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

export interface ProcessStepsProps {
  steps: ProcessStep[];
}

/** Numbered horizontal step sequence connected by a hairline, e.g. a 4-step booking journey. Collapses to a 2-column grid on mobile. */
export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="process-steps">
      {steps.map((step, i) => (
        <div className="process-step" key={i}>
          <div className="step-num">{step.number}</div>
          <div className="step-title">{step.title}</div>
          <div className="step-desc">{step.description}</div>
        </div>
      ))}
    </div>
  );
}
