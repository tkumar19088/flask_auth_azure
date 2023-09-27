import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import "./Irregularchart.css";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import Historicalbarchart from "./Historicalbarchart";
import Customerwocbarchart from "./Customerwocbarchart";
import Sellinselloutbarchart from "./Sellinselloutbarchart";
import Promo from "./Promo";

const Irregularcharts = () => {
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
        <Grid item xs={10} className="bg-containerdashboard">
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
                Irregular PO : PO no 123 : Amazon, Airwick Electrical Lemon
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
                Assess
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
                Promo
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
          {lineChartData && (
            <Grid spacing={1} container>
              <Grid
                container
                sx={{
                  backgroundColor: "#415A6C",
                  color: "#fff",
                  alignItems: "center",
                }}
              >
                <Grid item xs={6}>
                  <Typography fontSize="28px">
                    Po issue : (incorrect SKU/Price/Volume)
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" justifyContent="">
                    <Typography fontSize={20}>PO price: £1.00</Typography>
                    <Typography fontSize={20}>Agreed price: £10.00</Typography>
                  </Box>
                  <Box display="flex" justifyContent="">
                    <Typography fontSize={20}>Quantity Ordered: 200</Typography>
                    <Typography fontSize={20}>Quantity forecasted: 500</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Grid item xs={6}>
                <Historicalbarchart />
              </Grid>
              <Grid item xs={6}>
                <Customerwocbarchart />
              </Grid>
              <Grid item xs={12}>
                <Sellinselloutbarchart />
              </Grid>
            </Grid>
          )}
          {barChartData && (
            <Box>
              <Promo />
            </Box>
          )}

          <Box mx="1px" mt={{ lg: "20px", xs: 5 }}>
            <Typography fontSize={28} color="#415A6C">
              KPIs
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Box className="kpi-box">Reckitt stock on hand</Box>
            <Box className="kpi-box">Stock Allocation to Customer</Box>
            <Grid item xs={2} className="kpi-box">
              Monthly Allocation consumed to date
            </Grid>
            <Grid item xs={2} className="kpi-box">
              Customer inventory
            </Grid>
            <Grid item xs={2} className="kpi-box">
              Customer 6 month average order quantity
            </Grid>
            <Grid item xs={2} className="kpi-box">
              Customer’s order quantity variance
            </Grid>
          </Stack>

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
                  Stock Allocation to Customer
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

export default Irregularcharts;
