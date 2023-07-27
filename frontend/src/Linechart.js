import React from "react";
import Chart from "./Chart";

const Linechart = () => {
  const data1 = [
    { name: "Jan", value: 55 },
    { name: "Feb", value: 50 },
    { name: "Mar", value: 50 },
    { name: "Mar", value: 40 },
    { name: "Mar", value: 50 },
    // ...
  ];

  const data2 = [
    { name: "Jan", value: 15 },
    { name: "Feb", value: 25 },
    { name: "Mar", value: 65 },
    { name: "Mar", value: 45 },
    { name: "Mar", value: 35 },
    // ...
  ];

  return (
    <div>
      <Chart data1={data1} data2={data2} />
    </div>
  );
};

export default Linechart;
