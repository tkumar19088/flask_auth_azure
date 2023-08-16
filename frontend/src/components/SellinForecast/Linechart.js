import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
// import "./LineChart.css";

const Linechart = () => {
  const data1 = [
    { name: "w1", value: 55 },
    { name: "w2", value: 50 },
    { name: "w3", value: 40 },
    { name: "w4", value: 40 },
  ];

  const data2 = [
    { name: "w1", value: 15 },
    { name: "w2", value: 65 },
    { name: "w3", value: 75 },
    { name: "w4", value: 20 },
  ];

  const labels = data1.map((data) => data.name);
  const values1 = data1.map((data) => data.value);
  const values2 = data2.map((data) => data.value);

  const datasets = [
    {
      label: "Sell in forecast",
      data: values2,
      borderColor: "#FF007E",
      backgroundColor: "#FF007E",
      fill: false,
      tension: 0.3,
    },
  ];

  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={chartOptions} className="l-chart" />
    </div>
  );
};

export default Linechart;
