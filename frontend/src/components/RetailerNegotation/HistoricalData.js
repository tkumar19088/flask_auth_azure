import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import { Box, Button, Grid, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Linechart from "../../Linechart";
import Linechart2 from "./LineChart2";
import Barchart from "./Barchart";
import "./RetailerNegation.css";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const HistoricalData = () => {
  const [value, setValue] = useState("one");
  const [irregularPO, setirregularPO] = useState(true);
  const [serviceLevel, setserviceLevel] = useState(false);
  const [lineChartData, setlineChartData] = useState(true);
  const [barChartData, setbarChartData] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const handleBack = () => {
    navigate(-1);
  };

  const handleClickFirstTab = () => {
    setirregularPO(true);
    setlineChartData(true);
    setserviceLevel(false);
    setbarChartData(false);
  };
  const handleClickSecondTab = () => {
    setirregularPO(false);
    setlineChartData(false);
    setserviceLevel(true);
    setbarChartData(true);
  };

  return (
    <div>
      <Topbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={10}
          p={2}
          sx={{
            backgroundColor: "#F5F6F8",
          }}
        >
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
                <Typography fontSize={12} onClick={handleBack}>
                  Back
                </Typography>
              </Button>
            </Box>{" "}
            &#160;&#160;&#160;&#160;&#160;&#160;
            <Typography fontSize={14}>OOS Risk Dectection</Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px" }} />
            </Typography>
            <Typography fontSize={14}>Irregular PO</Typography>
          </Box>
          <Grid container justifyContent="space-between" mt={1}>
            <Box mx="1px">
              <Typography fontSize={24} color="#415A6C">
                Irregular PO : PO no 123 : Airwick Electrical Lemon
              </Typography>
            </Box>
          </Grid>

          <Grid container marginBlock="15px" justifyContent="space-between">
            <Box display="flex">
              <Box
                onClick={handleClickFirstTab}
                className="btn-export"
                sx={{
                  backgroundColor: irregularPO ? "#FF007E" : "#415A6C",
                  color: "#fff",
                }}
              >
                Irregular PO
              </Box>

              <Box
                className="btn-export"
                onClick={handleClickSecondTab}
                sx={{
                  backgroundColor: serviceLevel ? "#FF007E" : "#415A6C",
                  color: "#fff",
                  marginLeft: "10px",
                }}
              >
                Service Level
              </Box>
            </Box>
            <Box>
              <Box
                className="btn-export"
                sx={{ backgroundColor: "#415A6C", color: "#fff" }}
              >
                Export Data
              </Box>
            </Box>
          </Grid>
          <Box sx={{ width: "100%" }}></Box>
          {lineChartData && (
            <Box>
              <Linechart2 />
            </Box>
          )}
          {barChartData && (
            <Box>
              <Barchart />
            </Box>
          )}

          <Box mx="1px" mt={{ lg: "20px", xs: 5 }}>
            <Typography fontSize={28} color="#415A6C">
              KPIs
            </Typography>
          </Box>

          <Grid container spacing={1} item xs={12} border="">
            <Grid item xs={2}>
              <Box
                margin="auto"
                className="snrio-rslt1"
                border="1px solid #E7E9EE"
                width={{ lg: "160px", xs: "130px" }}
                height={{ lg: "90px" }}
              >
                <Typography
                  mt={{ lg: "15px" }}
                  fontSize={{ lg: 14, xs: 12 }}
                  className="scn-txt"
                >
                  Reckitt stock on hand
                </Typography>
                <Typography
                  alignSelf="center"
                  fontSize={{ lg: 18 }}
                  color="#008824"
                  className="scn-txt"
                  textAlign="center"
                  mt={{ lg: "20px" }}
                  ml={{ lg: "-30px" }}
                >
                  10000
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box
                className="snrio-rslt1"
                border="1px solid #E7E9EE"
                width={{ lg: "160px", xs: "130px" }}
                height={{ lg: "90px" }}
              >
                <Typography
                  lineHeight={{ lg: "16px" }}
                  mt={{ lg: "15px", xs: "7px" }}
                  fontSize={{ lg: 14, xs: 12 }}
                  className="scn-txt"
                >
                  Stock Allocation to Amazon
                </Typography>
                <Typography
                  fontSize={{ lg: 18 }}
                  color="#008824"
                  className="scn-txt"
                  textAlign="center"
                  ml={{ lg: "-30px" }}
                  mt={{ lg: "10px" }}
                >
                  5000
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box
                className="snrio-rslt1"
                border="1px solid #E7E9EE"
                width={{ lg: "160px", xs: "130px" }}
                height={{ lg: "90px" }}
              >
                <Box>
                  <Typography
                    lineHeight={{ lg: "16px" }}
                    mt={{ lg: "15px", xs: "7px" }}
                    fontSize={{ lg: 14, xs: 12 }}
                    className="scn-txt"
                  >
                    Monthly Allocation consumed to date
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  // justifyContent="space-between"
                  // border="1px solid"
                >
                  <Typography
                    fontSize={{ lg: 18 }}
                    color="#008824"
                    className="scn-txt"
                    ml={{ lg: "10px" }}
                    mt={{ lg: "10px" }}
                  >
                    65%
                  </Typography>
                  <Typography
                    color="#008824"
                    fontSize={12}
                    mt={{ lg: "15px" }}
                    ml={{ lg: "50px" }}
                  >
                    3250
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box
                className="snrio-rslt1"
                border="1px solid #E7E9EE"
                width={{ lg: "160px", xs: "130px" }}
                height={{ lg: "90px" }}
              >
                <Typography
                  // alignSelf="center"
                  mt={{ lg: "15px", xs: "7px" }}
                  fontSize={{ lg: 14, xs: 12 }}
                  className="scn-txt"
                >
                  Customer inventory
                </Typography>
                <Typography
                  alignSelf="center"
                  fontSize={{ lg: 18 }}
                  color="#008824"
                  className="scn-txt"
                  mt={{ lg: "20px" }}
                  textAlign="center"
                  ml={{ lg: "-30px" }}
                >
                  1400
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box
                className="snrio-rslt1"
                border="1px solid #E7E9EE"
                width={{ lg: "160px", xs: "130px" }}
                height={{ lg: "90px" }}
              >
                <Typography
                  lineHeight={{ lg: "16px" }}
                  mt={{ lg: "15px", xs: "7px" }}
                  fontSize={{ lg: 14, xs: 12 }}
                  className="scn-txt"
                >
                  Customer 6 month average order quantity
                </Typography>
                <Typography
                  fontSize={{ lg: 18 }}
                  color="#008824"
                  className="scn-txt"
                  textAlign="center"
                  ml={{ lg: "-30px" }}
                  mt={{ lg: "10px" }}
                >
                  5000
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box
                className="snrio-rslt1"
                border="1px solid #E7E9EE"
                width={{ lg: "160px", xs: "130px" }}
                height={{ lg: "90px" }}
              >
                <Typography
                  lineHeight={{ lg: "16px" }}
                  mt={{ lg: "15px", xs: "7px" }}
                  fontSize={{ lg: 14, xs: 12 }}
                  className="scn-txt"
                >
                  Customer’s order quantity variance
                </Typography>
                <Typography
                  fontSize={{ lg: 18 }}
                  color="#008824"
                  className="scn-txt"
                  textAlign="center"
                  ml={{ lg: "-30px" }}
                  mt={{ lg: "10px" }}
                >
                  +25%
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HistoricalData;

<Grid
  container
  item
  xs={12}
  // border="1px solid"
  backgroundColor="#fff"
  justifyContent="space-around"
  p="2px 0 0 0"
  borderRadius="5px 5px"
>
  <Box className="kpis-box">
    <Typography
      lineHeight={{ lg: "16px", xs: "12px" }}
      fontSize={{ lg: "13px", xs: "11px" }}
    >
      current reckitt stock on hand (reckitt inventory)
    </Typography>
    <Typography
      fontSize={{ lg: 20, xs: "18px" }}
      mt={{ lg: "0px", xs: "3px" }}
      color="#008824"
    >
      1000
    </Typography>
  </Box>
  <Box className="virtical-line"></Box>

  <Box className="kpis-box">
    <Typography
      lineHeight={{ lg: "16px", xs: "12px" }}
      fontSize={{ lg: "13px", xs: "11px" }}
    >
      stock allocation to customer
    </Typography>
    <Typography
      fontSize={{ lg: 20, xs: "18px" }}
      mt={{ lg: "0px", xs: "3px" }}
      color="#008824"
    >
      1000
    </Typography>
  </Box>
  <Box className="virtical-line"></Box>

  <Box className="kpis-box">
    <Typography
      lineHeight={{ lg: "16px", xs: "12px" }}
      fontSize={{ lg: "13px", xs: "11px" }}
    >
      stock allocation to customer
    </Typography>
    <Typography
      fontSize={{ lg: 20, xs: "18px" }}
      mt={{ lg: "0px", xs: "3px" }}
      color="#008824"
    >
      1000
    </Typography>
  </Box>
  <Box className="virtical-line"></Box>

  <Box className="kpis-box">
    <Typography
      lineHeight={{ lg: "16px", xs: "12px" }}
      fontSize={{ lg: "13px", xs: "11px" }}
    >
      monthly allocation consumed to date
    </Typography>
    <Typography
      fontSize={{ lg: 20, xs: "18px" }}
      mt={{ lg: "0px", xs: "3px" }}
      color="#008824"
    >
      1000
    </Typography>
  </Box>
  <Box className="virtical-line"></Box>

  <Box className="kpis-box">
    <Typography
      lineHeight={{ lg: "16px", xs: "12px" }}
      fontSize={{ lg: "13px", xs: "11px" }}
    >
      customer 6 months average order quantity
    </Typography>
    <Typography
      fontSize={{ lg: 20, xs: "18px" }}
      mt={{ lg: "0px", xs: "3px" }}
      color="#008824"
    >
      1000
    </Typography>
  </Box>
  <Box className="virtical-line"></Box>

  <Box className="kpis-box">
    <Typography
      lineHeight={{ lg: "16px", xs: "12px" }}
      fontSize={{ lg: "13px", xs: "11px" }}
    >
      Customer's order quantity variance
    </Typography>
    <Typography
      fontSize={{ lg: 20, xs: "18px" }}
      mt={{ lg: "0px", xs: "3px" }}
      color="#008824"
    >
      1000
    </Typography>
  </Box>
</Grid>;
