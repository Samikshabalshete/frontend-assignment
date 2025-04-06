import React from 'react';

const Navigation = ({ step }) => {
  return (
    <div className="my-3">
      <p>Step {step} of 3</p>
      <progress value={step} max="3" className="w-100" />
    </div>
  );
};

export default Navigation;
