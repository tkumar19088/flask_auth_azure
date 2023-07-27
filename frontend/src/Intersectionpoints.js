import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "First Dataset",
          data: [3, 5, 7, 9, 11, 13],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 2,
          fill: false
        },
        {
          label: "Second Dataset",
          data: [2, 4, 6, 8, 10, 12],
          borderColor: ["rgba(54, 162, 235, 1)"],
          borderWidth: 2,
          fill: false
        },
        {
          label: "Pink Fill",
          data: [3, 5, 7, 9, 11, 13],
          borderColor: "transparent",
          backgroundColor: "rgba(255, 192, 203, 0.2)",
          borderWidth: 2,
          fill: "-1",
          pointRadius: 0,
          pointHitRadius: 10,
        }
      ]
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;