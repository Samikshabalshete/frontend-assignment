import React from 'react';

const Step2 = ({ formData, setFormData }) => {
  return (
    <div className="form-group">
      <h2>Step 2: Address Information</h2>
      <input
        className="form-control my-2"
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <input
        className="form-control my-2"
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
    </div>
  );
};

export default Step2;
