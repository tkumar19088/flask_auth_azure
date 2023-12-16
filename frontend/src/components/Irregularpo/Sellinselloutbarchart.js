import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import "./sellinsellout.css";
import { useSelector } from "react-redux";

const getNextYearWeekNumbers = () => {
  const currentDate = new Date();
  const currentWeekNumber = getWeekNumber(currentDate);
  return Array.from({ length: 7 }, (_, index) => (currentWeekNumber + index) % 52 + 1);
};

const getPreviousYearWeekNumbers = () => {
  const currentDate = new Date();
  const currentWeekNumber = getWeekNumber(currentDate);
  return Array.from({ length: 9 }, (_, index) => (currentWeekNumber - index + 51) % 52 || 52);
};

const getWeekNumber = (date) => {
  const yearStart = new Date(date.getFullYear(), 0, 1);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  return Math.floor(((date - yearStart) / millisecondsPerDay + 1) / 7);
};
const Sellinselloutbarchart = ({ data }) => {
  const nextWeekNumbers = getNextYearWeekNumbers();
  const previousWeekNumbers = getPreviousYearWeekNumbers();
  const startingWeek = useSelector((state) => state.sidebar.currentWeekNumber);
  console.log(data);
  const details = data.length >= 1 ? data[0] : data;
  const data1 = [
    {
      name: "CW-3 (" + previousWeekNumbers[2] + ")",
      value: details["sellinactuals CW-3"],
      fvalue: details["sola CW+3"],
    },
    {
      name: "CW-2 (" +previousWeekNumbers[1] + ")",
      value: details["sellinactuals CW-2"],
      fvalue: details["sola CW+2"],
    },
    {
      name: "CW-1 (" + previousWeekNumbers[0] + ")",
      value: details["sellinactuals CW-1"],
      fvalue: details["sola CW+1"],
    },
    {
      name: "CW (" + startingWeek + ")",
      value: details["sellinactuals CW"],
      fvalue: details["sif CW"],
    },
    {
      name: "CW+1(" + nextWeekNumbers[0] + ")",
      value: 0,
      fvalue: details["sif CW+1"],
    },
    {
      name: "CW+2 (" + nextWeekNumbers[1] + ")",
      value: 0,
      fvalue: details["sif CW+2"],
    },
    {
      name: "CW+3(" + nextWeekNumbers[2] + ")",
      value: 0,
      fvalue: details["sif CW+3"],
    },
  ];

  const labels = data1.map((data) => data.name);
  const values1 = data1.map((data) => data.value);
  const values2 = data1.map((data) => data.fvalue);

  const datasets = [
    {
      label: "Sell-In Actuals",
      data: values1,
      borderColor: "#FF007E",
      backgroundColor: "#FF007E",
      fill: false,
      tension: 0.3,
    },
    {
      label: "Sell-In Forecast",
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
