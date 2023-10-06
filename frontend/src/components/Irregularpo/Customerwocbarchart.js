import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const Customerwocbarchart = () => {
  const startingWeek = useSelector((state) => state.sidebar.currentWeekNumber);

  const data1 = [
    { name: "CW (" + startingWeek + ")", value: 90 },
    { name: "CW+1 (" + (startingWeek + 1) + ")", value: 92 },
    { name: "CW+2 (" + (startingWeek + 2) + ")", value: 95 },
    { name: "CW+3 (" + (startingWeek + 3) + ")", value: 91 },
  ];

  const labels = data1.map((data) => data.name);
  const values1 = data1.map((data) => data.value);

  const datasets = [
    {
      label: "Customer WoC",
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
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            if (context.dataset.label === "Current Week") {
              label += ` (Week ${startingWeek})`;
            }
            return label;
          },
        },
      },
    },
    datasets: {
      bar: {
        barThickness: 30, // Adjust this value to change the bar width
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
