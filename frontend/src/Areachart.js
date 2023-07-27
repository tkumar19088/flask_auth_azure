import React from "react";
import { Line, Scatter } from "react-chartjs-2";

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

const interpolateLine = (data) => {
  return data.map(({ value }, index) => [index, value]);
};

const getIntersectionPoints = (data1, data2) => {
  const line1 = interpolateLine(data1);
  const line2 = interpolateLine(data2);

  const intersectionPoints = [];
  let i = 0;
  let j = 0;

  while (i < line1.length - 1 && j < line2.length - 1) {
    const [x1, y1] = line1[i];
    const [x2, y2] = line1[i + 1];
    const [x3, y3] = line2[j];
    const [x4, y4] = line2[j + 1];

    const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    if (denominator !== 0) {
      const px =
        ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) /
        denominator;
      const py =
        ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) /
        denominator;

      if (
        px >= Math.min(x1, x2) &&
        px <= Math.max(x1, x2) &&
        px >= Math.min(x3, x4) &&
        px <= Math.max(x3, x4)
      ) {
        intersectionPoints.push({ x: px, y: py });
      }
    }

    if (x2 < x4) {
      i++;
    } else {
      j++;
    }
  }

  return intersectionPoints;
};

const getFilledAreaPoints = (data1, data2, intersectionPoints) => {
  const line1 = interpolateLine(data1);
  const line2 = interpolateLine(data2);

  const sortedPoints = intersectionPoints.slice().sort((a, b) => a.x - b.x);

  const filledAreaPoints = [];
  let prevPoint = { x: 0, y: 0 };

  for (const point of sortedPoints) {
    const { x: x1, y: y1 } = prevPoint;
    const { x: x2, y: y2 } = point;

    const line1Points = line1.filter(([x]) => x >= x1 && x <= x2);
    const line2Points = line2.filter(([x]) => x >= x1 && x <= x2);

    for (let i = 0; i < line1Points.length - 1; i++) {
      const [x1l1, y1l1] = line1Points[i];
      const [x2l1, y2l1] = line1Points[i + 1];
      const yl1 = y1l1 + ((y2l1 - y1l1) / (x2l1 - x1l1)) * (x2 - x1l1);

      const [x1l2, y1l2] = line2Points[i];
      const [x2l2, y2l2] = line2Points[i + 1];
      const yl2 = y1l2 + ((y2l2 - y1l2) / (x2l2 - x1l2)) * (x2 - x1l2);

      filledAreaPoints.push({ x: x2, y: (yl1 + yl2) / 2 });
    }

    prevPoint = point;
  }

  return filledAreaPoints;
};

const IntersectionPoints = () => {
  const intersectionPoints = getIntersectionPoints(data1, data2);
  const filledAreaPoints = getFilledAreaPoints(data1, data2, intersectionPoints);

  const chartData = {
    datasets: [
      {
        label: "Data1",
        data: interpolateLine(data1),
        fill: false,
        borderColor: "red",
        tension:'0.3'
      },
      {
        label: "Data2",
        data: interpolateLine(data2),
        fill: false,
        borderColor: "blue",
        tension:'0.3'
      },
      {
        label: "Filled Area",
        data: filledAreaPoints,
        showLine: true,
        fill: true,
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        borderColor: "transparent",
        pointRadius: 0,
        tension:'0.3'
      },
    ],
  };

  // Options for Chart.js line chart
  const chartOptions = {
    scales: {
      x: {
        type: "linear",
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1>Intersection Points Chart</h1>
      <Line data={chartData} options={chartOptions} />
      <div>
        {intersectionPoints &&
          intersectionPoints.map((point, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                left: point.x,
                top: point.y,
                backgroundColor: "green",
                borderRadius: "50%",
                width: 5,
                height: 5,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default IntersectionPoints;
