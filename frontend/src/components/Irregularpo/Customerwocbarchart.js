import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
const getNextYearWeekNumbers = () => {
  const currentDate = new Date();
  const currentWeekNumber = getWeekNumber(currentDate);
  return Array.from({ length: 7 }, (_, index) => (currentWeekNumber + index) % 52 + 1);
};

const getWeekNumber = (date) => {
  const yearStart = new Date(date.getFullYear(), 0, 1);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  return Math.floor(((date - yearStart) / millisecondsPerDay + 1) / 7);
};
const Customerwocbarchart = ({ data }) => {
  const nextWeekNumbers = getNextYearWeekNumbers();

  const startingWeek = useSelector((state) => state.sidebar.currentWeekNumber);
  console.log(data);
  const details = data.length >= 1 ? data[0] : data;
  const data1 = [
    { name: "CW (" + startingWeek + ")", value: details["Cust WoC CW"] },
    {
      name: "CW+1 (" + (nextWeekNumbers[0]) + ")",
      value: details["Cust WoC CW+1"],
    },
    {
      name: "CW+2 (" + (nextWeekNumbers[1]) + ")",
      value: details["Cust WoC CW+2"],
    },
    {
      name: "CW+3 (" + (nextWeekNumbers[2]) + ")",
      value: details["Cust WoC CW+3"],
    },
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
