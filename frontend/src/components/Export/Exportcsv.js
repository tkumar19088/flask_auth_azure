import React from "react";

function ExportCSV() {
  const data = [
    {
      "Business Unit": "Hygiene",
      Channel: "PurePlay",
      Customer: "Amazon",
      Location: "United Kingdom",
      allocationconsumed: 272,
      cmuscore: 5.18,
      currentallocation: 300,
      "custsoh-current": 300,
      "custsoh-target": 600,
      "custwoc-current": 3,
      "custwoc-target": 6,
      expectedservicelevel: 0.88,
      openorders: 272,
      remainingallocation: 28,
      "sif-atf": 300,
      "sif-reckitt": 700,
      stocksafetoreallocate: 254,
      suggestedallocation: 224,
    },
    {
      "Business Unit": "Health",
      Channel: "PurePlay",
      Customer: "Amazon",
      Location: "India",
      allocationconsumed: 519,
      cmuscore: 5.29,
      currentallocation: 700,
      "custsoh-current": 1000,
      "custsoh-target": 500,
      "custwoc-current": 6,
      "custwoc-target": 7,
      expectedservicelevel: 0.93,
      openorders: 519,
      remainingallocation: 181,
      "sif-atf": 200,
      "sif-reckitt": 300,
      stocksafetoreallocate: 200,
      suggestedallocation: 69,
    },
    {
      "Business Unit": "Health",
      Channel: "Groceries",
      Customer: "Asda",
      Location: "India",
      allocationconsumed: 150,
      cmuscore: 0.42,
      currentallocation: 200,
      "custsoh-current": 500,
      "custsoh-target": 600,
      "custwoc-current": 5,
      "custwoc-target": 10,
      expectedservicelevel: 0.88,
      openorders: 150,
      remainingallocation: 50,
      "sif-atf": 500,
      "sif-reckitt": 400,
      stocksafetoreallocate: 142,
      suggestedallocation: 110,
    },
    {
      "Business Unit": "Nutrition",
      Channel: "Pharmacy",
      Customer: "Amazon",
      Location: "United Kingdom",
      allocationconsumed: 300,
      cmuscore: 2.56,
      currentallocation: 1000,
      "custsoh-current": 300,
      "custsoh-target": 1000,
      "custwoc-current": 4,
      "custwoc-target": 5,
      expectedservicelevel: 0.95,
      openorders: 300,
      remainingallocation: 700,
      "sif-atf": 700,
      "sif-reckitt": 600,
      stocksafetoreallocate: 163,
      suggestedallocation: 12,
    },
    {
      "Business Unit": "Health",
      Channel: "Pharmacy",
      Customer: "Amazon",
      Location: "United Kingdom",
      allocationconsumed: 153,
      cmuscore: 2.72,
      currentallocation: 400,
      "custsoh-current": 500,
      "custsoh-target": 500,
      "custwoc-current": 4,
      "custwoc-target": 7,
      expectedservicelevel: 0.95,
      openorders: 153,
      remainingallocation: 247,
      "sif-atf": 700,
      "sif-reckitt": 300,
      stocksafetoreallocate: 143,
      suggestedallocation: 89,
    },
    {
      "Business Unit": "Health",
      Channel: "Pharmacy",
      Customer: "Amazon",
      Location: "Germany",
      allocationconsumed: 200,
      cmuscore: 9.72,
      currentallocation: 1000,
      "custsoh-current": 200,
      "custsoh-target": 800,
      "custwoc-current": 9,
      "custwoc-target": 11,
      expectedservicelevel: 0.91,
      openorders: 200,
      remainingallocation: 800,
      "sif-atf": 200,
      "sif-reckitt": 700,
      stocksafetoreallocate: 88,
      suggestedallocation: 80,
    },
    {
      "Business Unit": "Health",
      Channel: "Groceries",
      Customer: "Asda",
      Location: "Germany",
      allocationconsumed: 260,
      cmuscore: 8.76,
      currentallocation: 500,
      "custsoh-current": 600,
      "custsoh-target": 400,
      "custwoc-current": 4,
      "custwoc-target": 4,
      expectedservicelevel: 0.87,
      openorders: 260,
      remainingallocation: 240,
      "sif-atf": 600,
      "sif-reckitt": 600,
      stocksafetoreallocate: 67,
      suggestedallocation: 16,
    },
    {
      "Business Unit": "Hygiene",
      Channel: "Groceries",
      Customer: "Asda",
      Location: "India",
      allocationconsumed: 33,
      cmuscore: 0.34,
      currentallocation: 200,
      "custsoh-current": 800,
      "custsoh-target": 500,
      "custwoc-current": 3,
      "custwoc-target": 6,
      expectedservicelevel: 0.92,
      openorders: 33,
      remainingallocation: 167,
      "sif-atf": 300,
      "sif-reckitt": 400,
      stocksafetoreallocate: 34,
      suggestedallocation: 35,
    },
    {
      "Business Unit": "Health",
      Channel: "Groceries",
      Customer: "Asda",
      Location: "Germany",
      allocationconsumed: 148,
      cmuscore: 0.96,
      currentallocation: 300,
      "custsoh-current": 400,
      "custsoh-target": 900,
      "custwoc-current": 4,
      "custwoc-target": 10,
      expectedservicelevel: 0.93,
      openorders: 148,
      remainingallocation: 152,
      "sif-atf": 800,
      "sif-reckitt": 300,
      stocksafetoreallocate: 42,
      suggestedallocation: 38,
    },
    {
      "Business Unit": "Health",
      Channel: "Groceries",
      Customer: "Asda",
      Location: "Germany",
      allocationconsumed: 200,
      cmuscore: 9.19,
      currentallocation: 400,
      "custsoh-current": 300,
      "custsoh-target": 500,
      "custwoc-current": 4,
      "custwoc-target": 8,
      expectedservicelevel: 0.91,
      openorders: 200,
      remainingallocation: 200,
      "sif-atf": 200,
      "sif-reckitt": 500,
      stocksafetoreallocate: 101,
      suggestedallocation: 46,
    },
  ];
  const convertToCSV = (objArray) => {
    const array =
      typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
    let csv = "";
    for (let i = 0; i < array.length; i++) {
      let line = "";
      for (let key in array[i]) {
        if (line !== "") line += ",";
        line += array[i][key];
      }
      csv += line + "\r\n";
    }
    return csv;
  };

  const downloadCSV = () => {
    const csvData = convertToCSV(data);

    // Create a Blob containing the CSV data
    const blob = new Blob([csvData], { type: "text/csv" });

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element to trigger the download
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "data.csv";

    // Trigger a click event on the link element to download the file
    document.body.appendChild(a);
    a.click();

    // Clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div>
      <button onClick={downloadCSV}>Export CSV</button>
    </div>
  );
}

export default ExportCSV;
