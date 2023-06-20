import React from 'react';
import './index.scss';

const StepFlow = ({ steps }) => {
  return (
    <div className="step-flow">
      {steps.map((step, index) => (
        <div key={index} className={`step ${step.completed ? 'completed' : ''}`}>
          <div className="step-number">{index + 1}</div>
          {/* <div className="step-label">{step.label}</div> */}
        </div>
      ))}
    </div>
  );
};

export default StepFlow;