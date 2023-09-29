import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Linechart from "./Linechart";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Selloutforecast.css";
import { useNavigate } from "react-router-dom";
// import Filtersdropdown from "../OverviewHighRisk/Filtersdropdown";
import Filtersout from "./Filterout";

const Selloutforecast = () => {
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
            <Typography fontSize={14}>Forecast Builder - Sell-Out</Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px" }} />
            </Typography>
          </Box>
          <Grid container justifyContent="space-between" mt={1}>
            <Box display="flex" justifyItems="center" gap={4}>
              <Box>
                <Typography fontSize={24} color="#415A6C">
                  Forecast Builder - Sell-Out
                </Typography>
              </Box>
              <Box>
                
                <Filtersout />
              </Box>
              <Box>
                <Box sx={{ minWidth: 200, marginTop: "-12px" }}>
                  <FormControl
                    variant="standard"
                    sx={{ minWidth: 200 }}
                    size="small"
                  >
                    <InputLabel>SKU</InputLabel>
                    <Select>
                      <MenuItem value="Airwick">123456</MenuItem>

                      <MenuItem value="Gaviscon">123456</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Box sx={{ border: "", marginTop: "10px" }}></Box>
              <Box
                display="flex"
                justifyContent="space-between"
                sx={{ marginBottom: "20px" }}
              >
                <Button
                  variant="contained"
                  size="small"
                  className="exportButton"
                >
                  Export Data
                </Button>
              </Box>
            </Box>
          </Grid>
          <Box sx={{ width: "100%" }}></Box>
          {lineChartData && (
            <Box
              sx={{ border: "", width: 1550, height: 755 }}
              paddingLeft="30px"
            >
              <Linechart />
            </Box>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Selloutforecast;
