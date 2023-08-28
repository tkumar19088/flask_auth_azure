import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import { Box, Button, Grid, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Linechart from "./Linechart";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Sellinforecast.css";
import { useNavigate } from "react-router-dom";

const Sellinforecast = () => {
  const [lineChartData, setlineChartData] = useState(true);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const handleBack = () => {
    navigate(-1);
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
            <Typography fontSize={14}>Forecast Builder - Sell-In</Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px" }} />
            </Typography>
          </Box>
          <Grid container justifyContent="space-between" mt={1}>
            <Box mx="1px">
              <Typography
                fontSize={24}
                color="#415A6C"
                style={{ marginTop: "20px" }}
              >
                Forecast Builder - Sell-In
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ marginBottom: "20px" }}
            >
              <Button variant="contained" className="exportButton">
                Export Data
              </Button>
            </Box>
          </Grid>
          <Box sx={{ width: "100%" }}></Box>
          {lineChartData && (
            <Box>
              <Linechart />
            </Box>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Sellinforecast;
