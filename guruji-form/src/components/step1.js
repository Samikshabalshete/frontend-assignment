import React from 'react';

const Step1 = ({ formData, setFormData }) => {
  return (
    <div className="form-group">
      <h2>Step 1: Personal Information</h2>
      <input
        className="form-control my-2"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        className="form-control my-2"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </div>
  );
};

export default Step1;
