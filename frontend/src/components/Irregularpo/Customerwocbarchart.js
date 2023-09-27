import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Customerwocbarchart = () => {
  const data1 = [
    { name: "w1", value: 90 },
    { name: "w2", value: 92 },
    { name: "w3", value: 95 },
    { name: "w4", value: 91 },
  ];

  const labels = data1.map((data) => data.name);
  const values1 = data1.map((data) => data.value);

  const datasets = [
    {
      label: "Service Level",
      data: values1,
      borderColor: "#F08C2A",
      backgroundColor: "#F08C2A",
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
  const chartContainerStyle = {
    height: "300px", // You can adjust the height as per your requirement
  };
  return (
    <div style={chartContainerStyle}>
      <Bar data={chartData} options={chartOptions} className="l-chart" />
    </div>
  );
};

export default Customerwocbarchart;
