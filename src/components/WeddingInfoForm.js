import React from 'react';

const WeddingInfoForm = ({ formData, setFormData, setStep }) => {
  const handleNext = () => {
    setStep(3); // Move to the next step
  };

  const handleBack = () => {
    setStep(1); // Go back to the previous step
  };

  return (
    <div className="form-container">
      <h2>Wedding Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="weddingDate">Wedding Date:</label>
          <input
            type="date"
            id="weddingDate"
            name="weddingDate"
            value={formData.weddingDate}
            onChange={(e) =>
              setFormData({ ...formData, weddingDate: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">Wedding City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="brideName">Bride's Name:</label>
          <input
            type="text"
            id="brideName"
            name="brideName"
            value={formData.brideName}
            onChange={(e) =>
              setFormData({ ...formData, brideName: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="groomName">Groom's Name:</label>
          <input
            type="text"
            id="groomName"
            name="groomName"
            value={formData.groomName}
            onChange={(e) =>
              setFormData({ ...formData, groomName: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="numberOfGuests">Number of Guests:</label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={(e) =>
              setFormData({ ...formData, numberOfGuests: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="weddingDuration">Wedding Duration (in days):</label>
          <input
            type="number"
            id="weddingDuration"
            name="weddingDuration"
            value={formData.weddingDuration}
            onChange={(e) =>
              setFormData({ ...formData, weddingDuration: e.target.value })
            }
            required
          />
        </div>

        <div className="form-navigation">
          <button type="button" onClick={handleBack}>
            Previous
          </button>
          <button type="button" onClick={handleNext}>
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default WeddingInfoForm;
