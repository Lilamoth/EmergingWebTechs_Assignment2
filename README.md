# Self-Driving Car Tutorial & Real Estate Price Prediction App

## Project Overview
This repository contains two projects:

1. **Self-Driving Car Tutorial**: A self-driving car simulation project that applies machine learning algorithms to control the movement of a car in a simulated environment.
2. **Real Estate Price Prediction App**: An app that predicts real estate prices using a neural network built with Brain.js, taking various property features such as area, number of bedrooms, bathrooms, location, and age of the property to predict its price.

## Features & Technologies Used

### Self-Driving Car Tutorial:
- **Machine Learning**: Uses machine learning algorithms to enable the car to drive autonomously within a simulated environment.
- **Environment**: A simulation environment where the car can make decisions based on inputs such as images from a camera, sensor data, etc.

### Real Estate Price Prediction App:
- **Frontend**: React.js
- **Machine Learning**: Brain.js (for neural network)
- **Styling**: Bootstrap
- **Data Visualization**: Chart.js
- **Persistent Storage**: LocalStorage or IndexedDB
- **Deployment**:GitHub Pages

## How to Run Locally

### Self-Driving Car Tutorial:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Lilamoth/EmergingWebTechs_Assignment2.git
   ```
2. **Follow the tutorial steps (instructions will be inside the self-driving car folder)**.
3. **Run the simulation** (command or file depends on the specific setup).

### Real Estate Price Prediction App:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Lilamoth/EmergingWebTechs_Assignment2.git
   ```
2. **Navigate to the Project Folder**:
   ```bash
   cd EmergingWebTechs_Assignment2/Part2_Real_Estate/react-app
   ```
3. **Install Dependencies**: Install the required packages:
   ```bash
   npm install
   ```
4. **Run the App**: Start the development server:
   ```bash
   npm start
   ```
   The app will be running at http://localhost:3000.

## Features Implemented

### Self-Driving Car Tutorial:
- **Autonomous Driving**: The car can navigate through the environment using machine learning techniques.
- **Sensor Integration**: The car makes decisions based on inputs from virtual sensors or camera feeds.

### Real Estate Price Prediction App:
- **Data Input Form**: Users can enter property details (area, number of bedrooms, bathrooms, location, and age of the property).
- **Neural Network Model**: A simple neural network is trained using Brain.js, which predicts property prices based on the user input.
- **Data Visualization**: The app displays a comparison between predicted prices and actual prices using Chart.js.
- **Persistent Model Storage**: The trained model is stored in LocalStorage or IndexedDB, allowing users to reuse the model without retraining.
- **Responsive UI**: The app is styled using Bootstrap and is fully responsive across different devices.
- **Error Handling**: Implemented error handling for invalid inputs and failed predictions.

## Technologies Used

### Self-Driving Car Tutorial:
- No Libraries used

## Data Collection & Preprocessing

### Real Estate Price Prediction App:
A real estate dataset (real_estate_dataset.xlsx) was used for training the neural network. Data was preprocessed by normalizing values (min-max scaling) to ensure accurate predictions.

## Deployment

The app is deployed using Netlify (or Vercel/GitHub Pages based on your choice). You can access the live version of the Real Estate Price Prediction App here.
