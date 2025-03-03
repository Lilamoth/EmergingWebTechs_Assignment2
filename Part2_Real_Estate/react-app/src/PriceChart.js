import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PriceChart = ({ actualPrices, predictedPrices }) => {
  const data = {
    labels: actualPrices.map((_, index) => `Property ${index + 1}`),
    datasets: [
      {
        label: 'Actual Prices',
        data: actualPrices,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Predicted Prices',
        data: predictedPrices,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Comparison of Predicted Prices vs. Actual Prices',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default PriceChart;
