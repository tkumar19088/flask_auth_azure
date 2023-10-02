import React, { useState, useEffect } from "react";

import { Box, Button, Grid, Typography } from "@mui/material";

import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import "./StockReallocation.css";
import { useNavigate } from "react-router-dom";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import StockReallocationData from "./StockRellocationData";
import Orderinvestigation2 from "./Orderinvestigation2";
import { useSelector, useDispatch } from "react-redux";
import { updateiswithinchannel } from "../../store/actions/sidebarActions";

function StockReallocation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedData, setselectedData] = useState();
  const exporttabledata = useSelector((state) => state.sidebar.exporttabledata);
  const isWithinChannel = useSelector((state) => state.sidebar.isWithinChannel);
  // const suggRecord = useSelector(
  //   (state) => state.sidebar.stockreallocation.staticrow
  // );
  const suggRecord = {
    AvgYTDsellout: 600,
    Brand: "Airwick",
    "Business Unit": "Health",
    Channel: "Pharmacy",
    Customer: "Asda",
    Location: "Germany",
    "RB SKU": "3247398",
    Discription: "Airwick Electrical Lemon",
    "Sell out": 600,
    allocationconsumed: 180,
    cmuscore: 7.44,
    currentallocation: 400,
    newallocation: 400,
    currentcustSOH: 400,
    "custsoh-current": 1000,
    "custsoh-target": 900,
    "custwoc-current": 2,
    "custwoc-target": 4,
    expectedservicelevel: 0.94,
    idealallocationvalues: 800,
    openorders: 180,
    remainingallocation: 220,
    "sif-atf": 900,
    "sif-reckitt": 800,
    stocksafetoreallocate: 36,
    suggestedallocation: 2,
    sumofPOsinalloccycle: 900,
    testReallocation: 0,
  };
  const [acrossChannel, setacrossChannel] = useState(false);
  const handleClick = () => {
    // Navigate to another URL
    navigate("/orderinvestigation", { state: { data: selectedData } });
  };

  const handleWithinSameChannel = () => {
    setacrossChannel(false);
    dispatch(updateiswithinchannel(true));
  };
  const handleAcreossChannels = () => {
    setacrossChannel(true);
    dispatch(updateiswithinchannel(false));
  };

  const handleDataFromChild = (data) => {
    console.log("Data received from child:", data);
    setselectedData(data);
    // Do something with the data in the parent component
  };
  const convertToCSV = (objArray) => {
    const array =
      typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
    let csv = "";

    // Generate the header row
    let header = "";
    for (let key in array[0]) {
      if (header !== "") header += ",";
      header += `"${key}"`; // Enclose headers in double quotes
    }
    csv += header + "\r\n";

    // Generate the data rows
    for (let i = 0; i < array.length; i++) {
      let line = "";
      for (let key in array[i]) {
        if (line !== "") line += ",";
        let value = array[i][key];

        // Check if value is null
        if (value === null) {
          value = "";
        } else {
          value = value.toString(); // Convert to string
          value = value.replace(/"/g, '""'); // Enclose values in double quotes and escape existing double quotes
        }

        line += `"${value}"`;
      }
      csv += line + "\r\n";
    }

    return csv;
  };
  const handleExportTableData = () => {
    const csvData = convertToCSV(exporttabledata);
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "data.csv";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Topbar />
      <Grid container xs={12} className="overviewHighRisk">
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className="bg-container">
          <Box
            display="flex"
            fontSize={14}
            mx="1px"
            className="breadcrumb-sabox"
          >
            <Box mt="1px">
              <Button
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: "30px 30px ",
                  border: "#fff",
                  marginTop: "-6px",
                  height: "24px",
                  // width: "27px",
                }}
              >
                <ArrowBackIosNewIcon
                  sx={{
                    height: "12px",
                    width: "12px",
                    border: "1px solid",
                    borderRadius: "50%",
                    backgroundColor: "#FF007E",
                    color: "#fff",
                  }}
                />
                &#160;
                <Typography fontSize={12} onClick={handleBack}>
                  Back
                </Typography>
              </Button>
            </Box>{" "}
            &#160;&#160;&#160;&#160;&#160;&#160;
            <Typography fontSize={14} sx={{ color: "#415A6C" }}>
              OOS Risk Detection
            </Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px",color: "#415A6C" }} />
            </Typography>
            <Typography fontSize={14} sx={{ color: "#415A6C" }}>Overview High-Risk SKUs</Typography>
          </Box>
          <Typography
            fontSize={16}
            sx={{ color: "#415A6C" }}
            margin="5px 0px -10px 3px"
          >
            Scenario Generation:{" "}
            {suggRecord.Discription ? suggRecord.Discription + " " : ""}
            {suggRecord["RB SKU"] ? suggRecord["RB SKU"] : ""}
          </Typography>
          <Box
            mx="1px"
            sx={{ marginTop: "" }}
            display="flex"
            justifyContent="space-between"
            // border="1px solid"
            height="55px"
          >
            <Box>
              <Typography
                fontSize={30}
                color="#415A6C"
                className="srbr-h1"
                marginTop="7px"

                // mt="1px"
              >
                Stock Reallocation between Retailers
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width="500px"
              marginTop="10px"
            >
              <Button
                variant="contained"
                className="srbr-btnshvr"
                sx={{
                  backgroundColor: isWithinChannel ? "#FF007E" : "#415A6C",
                  textDecoration: "none",
                  textTransform: "none",
                }}
                onClick={handleWithinSameChannel}
              >
                Within Same Channel
              </Button>

              <Button
                variant="contained"
                className="srbr-btns"
                sx={{
                  backgroundColor: acrossChannel ? "#FF007E" : "#415A6C",
                  textDecoration: "none",
                  textTransform: "none",
                }}
                onClick={handleAcreossChannels}
              >
                Across Channels
              </Button>
              <Button
                variant="contained"
                className="srbr-btns"
                sx={{
                  backgroundColor: "#415A6C",
                  textDecoration: "none",
                  textTransform: "none",
                }}
                onClick={handleExportTableData}
              >
                Export Raw Data
              </Button>
            </Box>
          </Box>
          <StockReallocationData onData={handleDataFromChild} />
        </Grid>
      </Grid>
    </div>
  );
}

export default StockReallocation;
