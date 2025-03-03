import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import '../styles/ChartStyles.css';

const ChartComponent = ({ data, options }) => {
  return (
    <div className="chart-container">
      <div className="chart-title">My Custom Chart</div>
      <Line data={data} options={options} />
      <div className="chart-legend">Legend: ...</div>
    </div>
  );
};

export default ChartComponent;
