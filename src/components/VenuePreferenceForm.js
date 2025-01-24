import React from 'react';
import './ContactUs.css';

const VenuePreferencesForm = ({ formData, handleChange, setStep }) => {
  return (
    <div className="form-container">
      <h2>Venue Preferences</h2>
      <form>
        <div className="form-group">
          <label htmlFor="venueType">Type of Venue:</label>
          <select
            id="venueType"
            name="venueType"
            value={formData.venueType}
            onChange={handleChange}
            required
          >
            <option value="">Select Venue Type</option>
            <option value="beach">Beach Wedding</option>
            <option value="garden">Garden Wedding</option>
            <option value="banquetHall">Banquet Hall</option>
            <option value="outdoor">Outdoor Wedding</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="specialRequirements">Special Venue Requirements:</label>
          <textarea
            id="specialRequirements"
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleChange}
            placeholder="e.g., Accessibility, Parking, etc."
          />
        </div>

        <div className="form-navigation">
          <button type="button" onClick={() => setStep(3)}>
            Previous
          </button>
          <button type="button" onClick={() => setStep(5)}>
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default VenuePreferencesForm;
