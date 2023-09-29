import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Linechart from "./Linechart";
import FormControl from "@mui/material/FormControl";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Sellinforecast.css";
import { useNavigate } from "react-router-dom";
// import Filtersdropdown from "../OverviewHighRisk/Filtersdropdown";
import Filtersin from "./Filtersin";

const Sellinforecast = () => {
  const navigate = useNavigate();
  const [lineChartData, setlineChartData] = useState(true);
  const [sellinData1, setsellinData1] = useState([
    { name: "week1", value: 0 },
    { name: "week2", value: 0 },
    { name: "week3", value: 0 },
    { name: "week4", value: 0 },
    { name: "week5", value: 0 },
    { name: "week6", value: 0 },
    { name: "week7", value: 0 },
    { name: "week8", value: 0 },
    { name: "week9", value: 0 },
    { name: "week10", value: 0 },
    { name: "week11", value: 0 },
    { name: "week12", value: 0 },
  ]);
  const [sellinData2, setsellinData2] = useState([
    { name: "week2", value: 10 },
    { name: "week3", value: 0 },
    { name: "week4", value: 0 },
    { name: "week5", value: 10 },
  ]);

  const json = [
    {
      Brand: "Gaviscon",
      "Business Unit": "Health",
      Customer: "Amazon",
      Description: "GAVIS,GB,ANI LIQ 600MLX6",
      InitialSOHWeek: "-",
      Location: "United Kingdom",
      PPG: "ADN",
      "RB SKU": 43497,
      "kinaxis CW+1": "10",
      "kinaxis CW+12": "-",
      "kinaxis CW+4": "20",
      "kinaxis CW+8": "-",
      "sola CW": "32.24",
      "sola CW+1": "32.08",
      "sola CW+2": "36.78",
      "sola CW+3": "31.77",
      "sola CW+4": "45.02",
      "sola CW+5": "46.07",
      "sola CW+6": "48.03",
      "sola CW+7": "48.84",
      "sola CW+8": "52.39",
      "sola CW+9": "46.58",
    },
  ];

  const convertedData = [];
  for (let i = 1; i <= 12; i++) {
    const week = `week${i}`;
    const value = parseFloat(json[0][`sola CW+${i}`]) || 0;
    const kvalue = parseFloat(json[0][`kinaxis CW+${i}`]) || 0;
    convertedData.push({ name: week, value: value, kvalue: kvalue });
  }

  console.log(convertedData);

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
            // border: "1px solid red",
            height: "889px",
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
            <Box display="flex" justifyItems="center" gap={4}>
              <Box>
                <Typography fontSize={24} color="#415A6C">
                  Forecast Builder - Sell-In
                </Typography>
              </Box>
              <Box>
                {" "}
                <Filtersin />
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
          {lineChartData && (
            <Box
              sx={{ border: "", width: 1550, height: 755 }}
              paddingLeft="30px"
            >
              <Linechart data={convertedData} />
            </Box>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Sellinforecast;
