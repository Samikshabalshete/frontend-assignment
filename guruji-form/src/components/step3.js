import React from 'react';

const Step3 = ({ formData }) => {
  return (
    <div>
      <h2>Step 3: Confirm Your Details</h2>
      <ul className="list-group">
        <li className="list-group-item">Name: {formData.name}</li>
        <li className="list-group-item">Email: {formData.email}</li>
        <li className="list-group-item">Address: {formData.address}</li>
        <li className="list-group-item">City: {formData.city}</li>
      </ul>
    </div>
  );
};

export default Step3;
