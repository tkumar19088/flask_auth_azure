import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
// import "./LineChart.css";

const Linechart = () => {
  const data = [
    { name: "week1", value: 55 },
    { name: "week2", value: 50 },
    { name: "week3", value: 40 },
    { name: "week4", value: 40 },
  ];

  const datasets = [
    {
      label: "Sell in forecast",
      data: data.map((data) => data.value),
      borderColor: "#FF007E",
      backgroundColor: "#FF007E",
      fill: false,
      tension: 0.3,
    },
  ];

  const chartData = {
    labels: data.map((data) => data.name),
    datasets: datasets,
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        title: {
          display: true,
          text: "Weeks",
          font: {
            size: 18, // Adjust the font size as needed
          },
        },
        ticks: {
          font: {
            size: 15, // Adjust the font size for the tick labels
          },
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        beginAtZero: true,
        title: {
          display: true,
          text: "Sell-In Forecast",
          font: {
            size: 18, // Adjust the font size as needed
          },
        },
        ticks: {
          font: {
            size: 15, // Adjust the font size for the tick labels
          },
        },
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
