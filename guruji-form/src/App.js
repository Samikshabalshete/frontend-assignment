import React, { useState } from 'react';
import Step1 from './components/step1';
import Step2 from './components/step2';
import Step3 from './components/step3';
import Navigation from './components/Navigation';
import AnimatedStepWrapper from './AnimatedStepWrapper';

const App = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
  });

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    setLoading(true);
    setError('');
    setTimeout(() => {
      const success = Math.random() > 0.2;
      setLoading(false);
      if (success) {
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Form Submitted Successfully!');
      } else {
        setError('Something went wrong. Please try again.');
      }
    }, 2000);
  };

  return (
    <div className="container mt-5">
      <Navigation step={step} />

      <AnimatedStepWrapper>
        {step === 1 && (
          <Step1 formData={formData} setFormData={setFormData} />
        )}
        {step === 2 && (
          <Step2 formData={formData} setFormData={setFormData} />
        )}
        {step === 3 && <Step3 formData={formData} />}
      </AnimatedStepWrapper>

      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {loading && (
        <div className="spinner-border text-primary my-3" role="status"></div>
      )}

      <div className="d-flex justify-content-between mt-4">
        {step > 1 && (
          <button className="btn btn-secondary" onClick={prevStep}>
            Back
          </button>
        )}
        {step < 3 ? (
          <button className="btn btn-primary" onClick={nextStep}>
            Next
          </button>
        ) : (
          <button className="btn btn-success" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
