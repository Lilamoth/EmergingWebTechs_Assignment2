import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './PropertyForm.css'; // Import custom CSS for additional styling

function PropertyForm({ onPredict }) {
  const [formData, setFormData] = useState({
    area: "",
    bedrooms: "",
    bathrooms: "",
    location: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(formData);
  };

  const handleClear = () => {
    setFormData({
      area: "",
      bedrooms: "",
      bathrooms: "",
      location: "",
      age: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="property-form p-3">
      <div className="form-group">
        <label htmlFor="area">Area (sq ft):</label>
        <input type="number" name="area" id="area" value={formData.area} onChange={handleChange} required className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="bedrooms">Bedrooms:</label>
        <input type="number" name="bedrooms" id="bedrooms" value={formData.bedrooms} onChange={handleChange} required className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="bathrooms">Bathrooms:</label>
        <input type="number" name="bathrooms" id="bathrooms" value={formData.bathrooms} onChange={handleChange} required className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location (1=Downtown, 2=Suburb):</label>
        <input type="number" name="location" id="location" value={formData.location} onChange={handleChange} required className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age of Property:</label>
        <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} required className="form-control" />
      </div>
      <div className="form-buttons d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">Predict</button>
        <button type="button" onClick={handleClear} className="btn btn-secondary">Clear</button>
      </div>
    </form>
  );
}

export default PropertyForm;
