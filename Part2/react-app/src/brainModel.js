import { NeuralNetwork } from "brain.js";
import data from "./data.json";

const net = new NeuralNetwork();

// Normalize data
const trainingData = data.map((item) => ({
  input: {
    area: item.area / 2000,
    bedrooms: item.bedrooms / 5,
    bathrooms: item.bathrooms / 3,
    location: item.location / 2,
    age: item.age / 30,
  },
  output: { price: item.price / 500000 },
}));

// Train the neural network
net.train(trainingData, {
  iterations: 2000,
  log: true,
  logPeriod: 100,
  learningRate: 0.01,
});

export function predictPrice(formData, model) {
  // Define and return the logic to predict price based on formData and model
  const normalizedInput = {
    area: formData.area / 2000,
    bedrooms: formData.bedrooms / 5,
    bathrooms: formData.bathrooms / 3,
    location: formData.location / 2,
    age: formData.age / 30,
  };

  const output = model.run(normalizedInput);
  return output.price * 500000;
}

export function getPredictions(model, inputData) {
  // Define and return predictions based on the model and inputData
  return data.map((item) => {
    const normalizedInput = {
      area: item.area / 2000,
      bedrooms: item.bedrooms / 5,
      bathrooms: item.bathrooms / 3,
      location: item.location / 2,
      age: item.age / 30,
    };
    const output = model.run(normalizedInput);
    return {
      actual: item.price,
      predicted: output.price * 500000,
    };
  });
}

export function handlePredictPriceClick(formData) {
  const model = net; // Use the trained neural network directly
  return predictPrice(formData, model);
}

export function trainModel() {
  // Re-add the trainModel function
  net.train(trainingData, {
    iterations: 2000,
    log: true,
    logPeriod: 100,
    learningRate: 0.01,
  });
  return net;
}
