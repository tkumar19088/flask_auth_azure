import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./LineChart2.css";

const Linechart2 = () => {
  const data1 = [
    { name: "w1", value: 55 },
    { name: "w2", value: 50 },
    { name: "w3", value: 50 },
    { name: "w4", value: 40 },
    { name: "w5", value: 50 },
    { name: "w6", value: 30 },
    { name: "w7", value: 25 },
    { name: "w8", value: 50 },
    { name: "w9", value: 70 },
    { name: "w10", value: 30 },
    { name: "w11", value: 10 },
    { name: "w12", value: 30 },
  ];

  const data2 = [
    { name: "w1", value: 15 },
    { name: "w2", value: 25 },
    { name: "w3", value: 45 },
    { name: "w4", value: 45 },
    { name: "w5", value: 35 },
    { name: "w6", value: 25 },
    { name: "w7", value: 75 },
    { name: "w8", value: 35 },
    { name: "w9", value: 65 },
    { name: "w10", value: 45 },
    { name: "w11", value: 25 },
    { name: "w12", value: 15 },
  ];

  const labels = data1.map((data) => data.name);
  const values1 = data1.map((data) => data.value);
  const values2 = data2.map((data) => data.value);

  const datasets = [
    {
      label: "Order quantity for this SKU",
      data: values1,
      borderColor: "#F08C2A",
      backgroundColor: "#F08C2A",
      fill: false,
      tension: 0.3,
    },
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

export default Linechart2;
