import React, { useState } from 'react';
import './ContactUs.css';
import CustomerInfoForm from './CustomerInfoForm';  // Importing step 1
import WeddingInfoForm from './WeddingInfoForm';  // Importing step 2
import VenuePreferenceForm from './VenuePreferenceForm';  // Importing step 4
import WeddingTypeForm from './WeddingTypeForm';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    weddingDate: '',
    city: '',
    brideName: '',
    groomName: '',
    numberOfGuests: '',
    weddingDuration: '',
    eventType: '',
    preferredDestination: '',
    venueType: '',
    specialRequirements: '',
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      {step === 1 && (
        <CustomerInfoForm
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      )}

      {step === 2 && (
        <WeddingInfoForm
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <WeddingTypeForm
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          setStep={setStep}
        />
      )}
      {step === 4 && (
        <VenuePreferenceForm
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      )}

      {/* Add more steps here as needed */}
    </div>
  );
};

export default MultiStepForm;
