import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
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
            <Typography fontSize={14} sx={{ color: "#415A6C" }}>
              OOS Risk Detection
            </Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px", color: "#415A6C" }} />
            </Typography>
            <Typography fontSize={14} sx={{ color: "#415A6C" }}>
              Irregular PO
            </Typography>
          </Box>
          <Grid container justifyContent="space-between" my="20px">
            <Box mx="1px">
              <Typography fontSize={24} color="#415A6C">
                Irregular PO : PO no 123 : Amazon, Airwick Electrical Lemon
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="small"
              sx={{
                textTransform: "none",
                height: "30px",
                backgroundColor: "#415A6C",
                "&:hover": {
                  backgroundColor: "#FF007F",
                },
              }}
            >
              Export Data
            </Button>
          </Grid>

          {lineChartData && (
            <Grid spacing={1} container item xs={12}>
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                  color: "#415A6C",
                  marginBottom: "10px",
                }}
              >
                <Grid container item xs={12} justifyContent="space-around">
                  <Typography fontSize="18px" color="brown">
                    PO issue :
                    <span style={{ color: "#415A6C" }}> Incorrect Price</span>
                  </Typography>
                  <Typography fontSize={18} color="brown">
                    PO Price: <span style={{ color: "#415A6C" }}>£1.00</span>
                  </Typography>
                  <Typography fontSize={18} color="brown">
                    Agreed Price:
                    <span style={{ color: "#415A6C" }}> £10.00</span>
                  </Typography>
                </Grid>
              </Card>

              <Grid item xs={4}>
                <Historicalbarchart />
              </Grid>
              <Grid item xs={4}>
                <Customerwocbarchart />
              </Grid>
              <Grid item xs={4}>
                <Sellinselloutbarchart />
              </Grid>
            </Grid>
          )}
          {barChartData && (
            <Box>
              <Promo />
            </Box>
          )}

          <Box mx="1px" mt="-35px" sx={{ marginBottom: "10px" }}>
            <Typography fontSize={28} color="#415A6C">
              KPIs
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ marginBottom: "25px" }}>
            <Grid item xs={2} className="kpi-box">
              <Typography fontSize="13px">
                Sell in forecast (S-OLA / Kinaxis)
              </Typography>
              <Typography color="green">1000 (800)</Typography>
            </Grid>
            <Grid item xs={2} className="kpi-box">
              <Typography fontSize="13px">Sell out forecast</Typography>
              <Typography color="green">1000</Typography>
            </Grid>
            <Grid item xs={2} className="kpi-box">
              <Typography fontSize="13px">Quantity ordered</Typography>
              <Typography color="green">900</Typography>{" "}
            </Grid>
            <Grid item xs={2} className="kpi-box">
              <Typography fontSize="13px">Percentage discrepancy</Typography>
              <Typography color="green">10%</Typography>
            </Grid>
            <Grid item xs={2} className="kpi-box">
              <Typography fontSize="13px">
                Customer SoH (Current / target)
              </Typography>
              <Typography color="green">1000 (800)</Typography>
            </Grid>
            <Grid item xs={2} className="kpi-box">
              <Typography fontSize="13px">
                Customer WoC (Current / target)
              </Typography>
              <Typography color="green">3 (5)</Typography>{" "}
            </Grid>
          </Stack>
          <Box>
            <Promo />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Irregularcharts;
