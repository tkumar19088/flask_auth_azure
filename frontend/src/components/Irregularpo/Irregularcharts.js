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
            <Typography fontSize={14} sx={{ color: "#415A6C" }}>OOS Risk Detection</Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px",color: "#415A6C" }} />
            </Typography>
            <Typography fontSize={14} sx={{ color: "#415A6C" }}>Irregular PO</Typography>
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
                  borderRadius: "3px",
                }}
              >
                <Grid container item xs={6} justifyContent="space-around">
                  <Typography fontSize="28px">
                    Po issue : (incorrect SKU/Price/Volume)
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" justifyContent="space-around">
                    <Typography fontSize={20}>PO price: £1.00</Typography>
                    <Typography fontSize={20}>Agreed price: £10.00</Typography>
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
            <Grid item xs={2} className="kpi-box">
              <Typography>Sell in forecast (S-OLA / Kinaxis)</Typography>
              <Typography color="green">1000 (800)</Typography>
            </Grid>
            <Grid item xs={2} className="kpi-box">
              <Typography>Sell out forecast</Typography>
              <Typography color="green">1000</Typography>
            </Grid>
            <Grid item xs={2} className="kpi-box">
              <Typography>Quantity ordered</Typography>
              <Typography color="green">900</Typography>{" "}
            </Grid>
            <Grid item xs={2} className="kpi-box">
              <Typography>Percentage discrepancy</Typography>
              <Typography color="green">10%</Typography>
            </Grid>
            <Grid item xs={2} className="kpi-box">
              <Typography>Customer SoH (Current / target)</Typography>
              <Typography color="green">1000 (800)</Typography>
            </Grid>
            <Grid item xs={2} className="kpi-box">
              <Typography>Customer WoC (Current / target)</Typography>
              <Typography color="green">3 (5)</Typography>{" "}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Irregularcharts;
