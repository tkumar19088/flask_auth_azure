import React, { useState, useEffect } from "react";

import { Box, Button, Grid, Typography } from "@mui/material";

import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import "./OverviewHighRisk.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DataTable from "../../DataTable";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import MyBreadcrumbs from "../../MyBreadcrumbs";

function OverviewHighRisk() {
  const navigate = useNavigate();
  const [selectedData, setselectedData] = useState();

  const handleClick = () => {
    // Navigate to another URL
    navigate("/orderinvestigation", { state: { data: selectedData } });
  };

  const handleDataFromChild = (data) => {
    console.log("Data received from child:", data);
    setselectedData(data);
    // Do something with the data in the parent component
  };

  useEffect(() => {
    scroll.scrollToTop(); // Scrolls to the top of the page when the component mounts
  }, []);
  return (
    <div>
      <Topbar />
      <Grid container xs={12} className="overviewHighRisk">
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} p={2} className="bg-container">
          <Box display="flex" fontSize={14} mx="1px">
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
                <Typography
                  fontSize={12}
                  //  onClick={handleBack}
                >
                  Back
                </Typography>
              </Button>
            </Box>{" "}
            &#160;&#160;&#160;&#160;&#160;&#160;
            <Typography fontSize={14}>OOS Risk Dectection</Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px" }} />
            </Typography>
            <Typography fontSize={14}>Overview High-Risk SKUs</Typography>
          </Box>
          <Box mx="1px" sx={{ marginBlock: "10px" }}>
            <Typography fontSize={28} color="#415A6C">
              Overview High-Risk SKUs{" "}
            </Typography>
          </Box>
          <DataTable onData={handleDataFromChild} />
          <Grid className="btn-generateList">
            <Button
              style={{
                color: "#E7E9EE",
                backgroundColor: "#415A6C",
                display: "flex",
                borderRadius: "5px 5px",
                padding: "4px 16px 4px 16px",
                textAlign: "center",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              <Typography onClick={handleClick}>GENERATE SKU LIST </Typography>{" "}
              &#160;&#160;&#160;&#160;
              <PlayArrowIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default OverviewHighRisk;
