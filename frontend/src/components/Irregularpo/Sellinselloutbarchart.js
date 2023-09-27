import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const Sellinselloutbarchart = () => {
  const data1 = [
    { name: "w1", value: 90 },
    { name: "w2", value: 92 },
    { name: "w3", value: 95 },
    { name: "w4", value: 91 },
    { name: "w5", value: 98 },
    { name: "w6", value: 97 },
    { name: "w7", value: 93 },
    { name: "w8", value: 91 },
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
    // height: "300px",
    flex: "1", // Make it flexible and take up available width
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={chartContainerStyle}>
        <Bar data={chartData} options={chartOptions} className="l-chart"  />
      </div>
    </div>
  );
};

export default Sellinselloutbarchart;
