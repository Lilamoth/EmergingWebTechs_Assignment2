import React, { useState, useEffect } from 'react';
import { predictPrice, trainModel } from './brainModel'; // Ensure trainModel is imported
import { saveModel, loadModel } from './indexedDB';
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
  const [model, setModel] = useState(null);

  useEffect(() => {
    loadModel('trainedModel').then((loadedModel) => {
      if (loadedModel) {
        setModel(loadedModel);
      }
    });
  }, []);

  const handleTrainModel = () => {
    const trainedModel = trainModel(); // Replace with actual model training logic
    setModel(trainedModel);
    saveModel('trainedModel', trainedModel).then(() => {
      alert('Model saved successfully!');
    }).catch((error) => {
      console.error('Error saving model:', error);
    });
  };

  const handleSaveModel = () => {
    if (model) {
      saveModel('trainedModel', model).then(() => {
        alert('Model saved successfully!');
      }).catch((error) => {
        console.error('Error saving model:', error);
      });
    } else {
      alert('No model to save.');
    }
  };

  const handleLoadModel = () => {
    loadModel('trainedModel').then((loadedModel) => {
      if (loadedModel) {
        setModel(loadedModel);
        alert('Model loaded successfully!');
      } else {
        alert('No model found in IndexedDB.');
      }
    }).catch((error) => {
      console.error('Error loading model:', error);
    });
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
    if (model) {
      const price = predictPrice(formData, model);
      setPredictedPrice(price);
      setActualPrices([...actualPrices, formData.actualPrice]); // Assuming actualPrice is part of formData
      setPredictedPrices([...predictedPrices, price]);
    } else {
      alert('Model not loaded. Please train or load a model first.');
    }
  };

  return (
    <div className="app-container">
      <div className="form-container">
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
        <button onClick={handleTrainModel} className="btn btn-secondary mt-3">Train Model</button>
        <button onClick={handleSaveModel} className="btn btn-secondary mt-3">Save Model</button>
        <button onClick={handleLoadModel} className="btn btn-secondary mt-3">Load Model</button>
      </div>
      <div className="data-visualization-container">
        <PriceChart actualPrices={actualPrices} predictedPrices={predictedPrices} />
      </div>
    </div>
  );
}

export default App;
