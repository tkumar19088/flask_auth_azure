import React, { useState, useEffect } from "react";

import { Box, Button, Grid, Typography } from "@mui/material";

import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import "./StockReallocation.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import DataTable from "../../DataTable";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import StockReallocationData from "./StockRellocationData";
import Orderinvestigation2 from "./Orderinvestigation2";
// import MyBreadcrumbs from "../../MyBreadcrumbs";

function StockReallocation() {
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
          <Box display="flex" fontSize={14} mx="1px" className="bread-crumb">
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
          <Typography className="safilter-title" my={1}>
            Filters : SKU
          </Typography>

          <Typography
            fontSize={22}
            sx={{ color: "#415A6C" }}
            marginBottom="-35px"
          >
            Scenario Generation: Airwick Electrical Lemon 112345
          </Typography>
          <Box
            mx="1px"
            sx={{ marginBlock: "15px" }}
            display="flex"
            justifyContent="space-between"
            // border="1px solid"
            height="55px"
          >
            <Box>
              <Typography
                fontSize={38}
                color="#415A6C"
                className="srbr-h1"
                mt="13px"
              >
                Stock Reallocation between Retailers{" "}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" width="550px">
              <Button variant="contained" className="srbr-btnswithin">
                Within same channel
              </Button>

              <Button variant="contained" className="srbr-btns">
                Across channels
              </Button>
              <Button variant="contained" className="srbr-btns">
                Export Excel
              </Button>
            </Box>
          </Box>
          <StockReallocationData onData={handleDataFromChild} />
          <Orderinvestigation2 />
        </Grid>
      </Grid>
    </div>
  );
}

export default StockReallocation;
