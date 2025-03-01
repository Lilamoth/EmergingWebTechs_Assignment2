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

export function predictPrice(formData) {
  const normalizedInput = {
    area: formData.area / 2000,
    bedrooms: formData.bedrooms / 5,
    bathrooms: formData.bathrooms / 3,
    location: formData.location / 2,
    age: formData.age / 30,
  };

  const output = net.run(normalizedInput);
  return output.price * 500000;
}

export function getPredictions() {
  return data.map((item) => {
    const normalizedInput = {
      area: item.area / 2000,
      bedrooms: item.bedrooms / 5,
      bathrooms: item.bathrooms / 3,
      location: item.location / 2,
      age: item.age / 30,
    };
    const output = net.run(normalizedInput);
    return {
      actual: item.price,
      predicted: output.price * 500000,
    };
  });
}

// Add these methods to handle model storage
let trainedModel = null; // Define the trainedModel variable

export function getModel() {
  // Assuming you have a trained model object
  return trainedModel; // Replace with your actual model object
}

export function loadModel(model) {
  // Assuming you can load the model from a JSON object
  trainedModel = model; // Replace with your actual model loading logic
}
