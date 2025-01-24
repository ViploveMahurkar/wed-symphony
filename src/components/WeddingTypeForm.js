import React, { useState } from 'react';
import './WeddingTypeForm.css';

const WeddingTypeForm = ({ onNext, onPrevious, currentStep, setWeddingType }) => {
  const [selectedType, setSelectedType] = useState('');

  const handleNext = () => {
    setWeddingType(selectedType); // Store selected type
    onNext(); // Trigger the next step
  };

  const handlePrevious = () => {
    onPrevious(); // Trigger the previous step
  };

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="wedding-type-form-container">
      <h2>What type of wedding are you envisioning?</h2>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="Local"
            checked={selectedType === 'Local'}
            onChange={handleChange}
          />
          Local Wedding
        </label>
        <label>
          <input
            type="radio"
            value="National Destination"
            checked={selectedType === 'National Destination'}
            onChange={handleChange}
          />
          National Destination Wedding
        </label>
        <label>
          <input
            type="radio"
            value="International Destination"
            checked={selectedType === 'International Destination'}
            onChange={handleChange}
          />
          International Destination Wedding
        </label>
      </div>

      <div className="buttons">
        <button type="button" onClick={handlePrevious} disabled={currentStep === 1}>
          Previous
        </button>
        <button type="button" onClick={handleNext} disabled={!selectedType}>
          Next
        </button>
      </div>
    </div>
  );
};

export default WeddingTypeForm;
