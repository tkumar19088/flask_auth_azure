import React, { useState, useEffect } from "react";

import { Box, Button, Grid, Typography } from "@mui/material";

import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import "./OverviewHighRisk.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DataTable from "../../DataTable";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
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

        <Grid item xs={10} p={2} className="overviewHighRisk-main">
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
