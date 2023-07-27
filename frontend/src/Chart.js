import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const ChartComponent = () => {
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
      label: "Dataset 1",
      data: values1,
      borderColor: "#F08C2A",
      fill: false,
      tension: 0.3,
    },
    {
      label: "Dataset 2",
      data: values2,
      borderColor: "#FF007E",
      fill: false,
      tension: 0.3,
    },
  ];

  const intersectionPoints = [];

  for (let i = 0; i < data1.length - 1; i++) {
    const x1 = i;
    const x2 = i + 1;
    const y1 = data1[i].value;
    const y2 = data1[i + 1].value;
    const y3 = data2[i].value;
    const y4 = data2[i + 1].value;

    // Check if the two lines intersect
    if ((y1 > y3 && y2 < y4) || (y1 < y3 && y2 > y4)) {
      // Calculate the x-coordinate of the intersection point using linear interpolation
      const x = x1 + ((y3 - y1) * (x2 - x1)) / (y2 - y1 - y4 + y3);

      // Calculate the y-coordinate of the intersection point using linear interpolation
      const y = y3 + ((x - x1) * (y4 - y3)) / (x2 - x1);

      intersectionPoints.push({ x, y });
    }
  }

  console.log(intersectionPoints);
  const fillDataset = {
    label: "Fill",
    data: intersectionPoints.map((value, index) =>
      value > values2[index] ? value : null
    ),
    borderColor: "rgba(0, 0, 0, 0)",
    backgroundColor: intersectionPoints.map((value, index) =>
      value > values2[index] ? "rgba(255, 192, 203, 0.5)" : "transparent"
    ),
    fill: true,
    tension: 0.3,
  };

  const chartData = {
    labels: labels,
    datasets: [fillDataset, ...datasets],
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
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      style={{
        // border: "1px solid red",
        // height: "450px",
      }}
    >
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;
