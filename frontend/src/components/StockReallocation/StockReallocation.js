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
import { useSelector } from "react-redux";

function StockReallocation() {
  const navigate = useNavigate();
  const [selectedData, setselectedData] = useState();
  const exporttabledata = useSelector((state) => state.sidebar.exporttabledata);

  const handleClick = () => {
    // Navigate to another URL
    navigate("/orderinvestigation", { state: { data: selectedData } });
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
      header += key;
    }
    csv += header + "\r\n";

    // Generate the data rows
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
                <Typography fontSize={12}>Back</Typography>
              </Button>
            </Box>{" "}
            &#160;&#160;&#160;&#160;&#160;&#160;
            <Typography fontSize={14}>OOS Risk Dectection</Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px" }} />
            </Typography>
            <Typography fontSize={14}>Overview High-Risk SKUs</Typography>
          </Box>
          <Typography
            fontSize={16}
            sx={{ color: "#415A6C" }}
            margin="5px 0px -10px 3px"
          >
            Scenario Generation: Airwick Electrical Lemon 112345
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
              width="450px"
              marginTop="10px"
            >
              <Button
                variant="contained"
                className="srbr-btnshvr"
                sx={{
                  backgroundColor: "#FF007E",
                  textDecoration: "none",
                  textTransform: "none",
                }}
              >
                Within same channel
              </Button>

              <Button
                variant="contained"
                className="srbr-btns"
                sx={{
                  backgroundColor: "#415A6C",
                  textDecoration: "none",
                  textTransform: "none",
                }}
              >
                Across channels
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
                Export Data
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
