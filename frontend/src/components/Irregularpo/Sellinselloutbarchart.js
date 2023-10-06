import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import "./sellinsellout.css";
import { useSelector } from "react-redux";

const Sellinselloutbarchart = () => {
  const startingWeek = useSelector((state) => state.sidebar.currentWeekNumber);

  const data1 = [
    { name: "CW-3 (" + (startingWeek - 3) + ")", value: 30, fvalue: 92 },
    { name: "CW-2 (" + (startingWeek - 2) + ")", value: 42, fvalue: 90 },
    { name: "CW-1 (" + (startingWeek - 1) + ")", value: 55, fvalue: 93 },
    { name: "CW (" + startingWeek + ")", value: 31, fvalue: 90 },
    { name: "CW+1(" + (startingWeek + 1) + ")", value: 0, fvalue: 95 },
    { name: "CW+2 (" + (startingWeek + 2) + ")", value: 0, fvalue: 90 },
    { name: "CW+3(" + (startingWeek + 3) + ")", value: 0, fvalue: 95 },
  ];

  const labels = data1.map((data) => data.name);
  const values1 = data1.map((data) => data.value);
  const values2 = data1.map((data) => data.fvalue);

  const datasets = [
    {
      label: "Sell in actuals",
      data: values1,
      borderColor: "#FF007E",
      backgroundColor: "#FF007E",
      fill: false,
      tension: 0.3,
    },
    {
      label: "Sell in forecast",
      data: values2,
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

export default Sellinselloutbarchart;
