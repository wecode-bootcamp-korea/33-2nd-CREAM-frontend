import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ConditionChart = ({ graphData }) => {
  const salesDays = graphData.map(data => data.created_at).reverse();
  const salesPrcie = graphData.map(data => data.price).reverse();

  const data = {
    labels: salesDays,
    datasets: [
      {
        data: salesPrcie,
        type: 'line',
        borderColor: '#ef6253',
        borderWidth: 1,
        pointRadius: 0,
        pointHoverBorderWidth: 2,
        tension: 0,
        spanGaps: true,
      },
    ],
  };

  return <Line data={data} width={560} height={200} options={GRAPH_OPTIONS} />;
};

const GRAPH_OPTIONS = {
  plugins: {
    legend: {
      labels: false,
    },
  },
  scales: {
    x: {
      grid: {
        drawBorder: false,
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      position: 'right',
      beginAtZero: true,
      grid: {
        drawBorder: false,
        display: false,
      },
      ticks: {
        max: 1000000,
        stepSize: 200000,
        fontColor: '#f4f4f4',
      },
    },
  },
};

export default ConditionChart;
