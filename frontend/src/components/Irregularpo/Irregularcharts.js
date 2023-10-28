import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import "./Irregularchart.css";
import html2canvas from "html2canvas";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import Historicalbarchart from "./Historicalbarchart";
import Customerwocbarchart from "./Customerwocbarchart";
import Sellinselloutbarchart from "./Sellinselloutbarchart";
import Promo from "./Promo";
import { useSelector, useDispatch } from "react-redux";

const Irregularcharts = () => {
  const [value, setValue] = useState("one");
  const [irregularPO, setirregularPO] = useState(true);
  const [serviceLevel, setserviceLevel] = useState(false);
  const [lineChartData, setlineChartData] = useState(true);
  const [barChartData, setbarChartData] = useState(false);

  const navigate = useNavigate();
  const loader = useSelector((state) => state.sidebar.loader);
  const chartdata = useSelector((state) => state.sidebar.irregularchartdata);
  const skudata = chartdata.skudata;
  console.log(chartdata);
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

  const handleScreenshort = () => {
    html2canvas(document.documentElement).then((canvas) => {
      const screenshotDataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = screenshotDataUrl;
      a.download = "screenshot.png";
      a.click();
    });
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
              <Typography fontSize={20} color="#415A6C">
                Irregular PO :
                <span style={{ fontSize: "18px" }}>
                  {skudata.poNumber} : {skudata.description}
                </span>
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
              onClick={handleScreenshort}
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
                    PO Issue :
                    <span style={{ color: "#415A6C" }}>
                      {" "}
                      {skudata.alert == "-" ? "No Issue" : skudata.alert}
                    </span>
                  </Typography>
                  <Typography fontSize={18} color="brown">
                    {skudata.alert == "-"
                      ? ""
                      : skudata.alert == "Irregular Volume"
                      ? "Quantity Ordered since Monday : "
                      : "PO Price : "}

                    <span style={{ color: "#415A6C" }}>
                      {skudata.alert == "-"
                        ? ""
                        : skudata.po_issue == "Irregular Volume"
                        ? skudata.quantityordered == null
                          ? " -"
                          : skudata.quantityordered
                        : skudata.po_price == null
                        ? " -"
                        : skudata.po_price}
                    </span>
                  </Typography>
                  <Typography fontSize={18} color="brown">
                    {skudata.alert == "-"
                      ? ""
                      : skudata.alert == "Irregular Volume"
                      ? "Quantity Forecasted : "
                      : "Agreed Price : "}
                    <span style={{ color: "#415A6C" }}>
                      {skudata.alert == "-"
                        ? ""
                        : skudata.po_issue == "Irregular Volume"
                        ? skudata["sif-sola"] == null
                          ? "-"
                          : skudata["sif-sola"]
                        : skudata.agreed_price == null
                        ? "-"
                        : skudata.agreed_price}
                    </span>
                  </Typography>
                </Grid>
              </Card>

              <Grid item xs={4}>
                <Historicalbarchart data={chartdata.histepos} />
              </Grid>
              <Grid item xs={4}>
                <Customerwocbarchart data={chartdata.wocgraphdata} />
              </Grid>
              <Grid item xs={4}>
                <Sellinselloutbarchart data={chartdata.sellin} />
              </Grid>
            </Grid>
          )}
          {barChartData && (
            <Box>
              <Promo />
            </Box>
          )}

          <Box mx="1px" mt="-35px" sx={{ marginBottom: "10px" }}>
            <Typography fontSize={20} color="#415A6C">
              KPIs
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ marginBottom: "25px" }}>
            <Grid item xs={3} className="kpi-box">
              <Typography fontSize="13px">Sell-Out Forecast (CW)</Typography>
              <Typography color="green">
                {skudata.sof == null ? "-" : skudata.sof}
              </Typography>
            </Grid>
            <Grid item xs={3} className="kpi-box">
              <Typography fontSize="13px">
                Quantity Ordered since Monday
              </Typography>
              <Typography color="green">
                {skudata.quantityordered == null
                  ? "-"
                  : skudata.quantityordered}
              </Typography>{" "}
            </Grid>
            <Grid item xs={3} className="kpi-box">
              <Typography fontSize="13px">
                Percentage Discrepancy (S-OLA / Kinaxis)
              </Typography>
              <Typography color="green">
                {skudata.percentage_discrepancy == null
                  ? "-"
                  : skudata.percentage_discrepancy}
              </Typography>
            </Grid>
            <Grid item xs={3} className="kpi-box">
              <Typography fontSize="13px">
                Customer SoH (Current / Target)
              </Typography>
              <Typography color="green">
                {skudata["CustSOH_current"] == null
                  ? "-"
                  : skudata["CustSOH_current"]}{" "}
                (
                {skudata["CustSOH_target"] == null
                  ? "-"
                  : skudata["CustSOH_target"]}
                )
              </Typography>
            </Grid>
          </Stack>
          <Typography fontSize={20} color="#415A6C" my={2}>
            Add Current / Upcoming Promo
          </Typography>
          <Box>
            <Promo data={chartdata.campaigns} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Irregularcharts;
