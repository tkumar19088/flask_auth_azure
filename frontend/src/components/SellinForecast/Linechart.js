import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";
// import "./LineChart.css";

const Linechart = ({ data }) => {
  const datasets = [
    {
      label: "S-OLA",
      data: data.map((data) => data.value),
      borderColor: "#FF007E",
      backgroundColor: "#FF007E",
      fill: false,
      tension: 0.3,
    },
    {
      label: "Kinaxis", // Label for the second line
      data: data.map((data) => data.kvalue),
      borderColor: "orange", // Color for the second line
      backgroundColor: "orange",
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
          text: "Weeks Forecasted",
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
      <Box sx={{ border: "", width: 1550, height: 755 }}>
        <Line data={chartData} options={chartOptions} className="l-chart" />
      </Box>
    </div>
  );
};

export default Linechart;
