import React, { useState, useEffect } from 'react';
import { predictPrice } from './brainModel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file
import PriceChart from './PriceChart'; // Import the PriceChart component

function App() {
  const [formData, setFormData] = useState({
    area: '',
    bedrooms: '',
    bathrooms: '',
    location: '',
    age: ''
  });
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [actualPrices, setActualPrices] = useState([]);
  const [predictedPrices, setPredictedPrices] = useState([]);

  useEffect(() => {
    const savedModel = localStorage.getItem('trainedModel');
    if (savedModel) {
      // Assuming predictPrice can load a model from a JSON string
      predictPrice.loadModel(JSON.parse(savedModel));
    }
  }, []);

  const handleSaveModel = () => {
    const model = predictPrice.getModel(); // Assuming predictPrice can return the model as a JSON string
    localStorage.setItem('trainedModel', JSON.stringify(model));
    alert('Model saved successfully!');
  };

  const handleLoadModel = () => {
    const savedModel = localStorage.getItem('trainedModel');
    if (savedModel) {
      predictPrice.loadModel(JSON.parse(savedModel));
      alert('Model loaded successfully!');
    } else {
      alert('No model found in LocalStorage.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const price = predictPrice(formData);
    setPredictedPrice(price);
    setActualPrices([...actualPrices, formData.actualPrice]); // Assuming actualPrice is part of formData
    setPredictedPrices([...predictedPrices, price]);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Real Estate Price Predictor</h1>
      <p>Enter the details of the property to predict the price:</p>
      <hr />
      <h2>Property Details</h2>
     
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Area (sq ft)</label>
          <input type="number" className="form-control" name="area" value={formData.area} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Bedrooms</label>
          <input type="number" className="form-control" name="bedrooms" value={formData.bedrooms} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Bathrooms</label>
          <input type="number" className="form-control" name="bathrooms" value={formData.bathrooms} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Location (1 for Cities and 2 for Suburbs)</label>
          <input type="number" className="form-control" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Age of Property (years)</label>
          <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Predict Price</button>
      </form>
      {predictedPrice && (
        <div className="mt-4">
          <h2>Predicted Price: ${predictedPrice.toFixed(2)}</h2>
        </div>
      )}
      <button onClick={handleSaveModel} className="btn btn-secondary mt-3">Save Model</button>
      <button onClick={handleLoadModel} className="btn btn-secondary mt-3">Load Model</button>
      <PriceChart actualPrices={actualPrices} predictedPrices={predictedPrices} />
    </div>
  );
}

export default App;
