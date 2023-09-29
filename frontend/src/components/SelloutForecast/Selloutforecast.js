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
import "./Selloutforecast.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import loaderImage from "../../images/Logo-bar.png";
import Filtersout from "./Filterout";

const Selloutforecast = () => {
  const navigate = useNavigate();

  const loader = useSelector((state) => state.sidebar.loader);
  const [rBSKUdata, setrBSKUdata] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [selectedforecast, setselectedforecast] = useState([
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

  const convertedjson = (json) => {
    const convertedData = [];
    for (let i = 1; i <= 12; i++) {
      const week = `week${i}`;
      const value = parseFloat(json[0][`sola CW+${i}`]) || 0;
      convertedData.push({ name: week, value: value });
    }
    setselectedforecast(convertedData);
  };

  const handleClick = () => {
    navigate("/");
  };
  const handleBack = () => {
    navigate(-1);
  };

  const handleApply = (jsonData) => {
    setfilteredData(jsonData);
    const rbSkuArray = jsonData.map((item) => item["RB SKU"]);
    setrBSKUdata(rbSkuArray);
  };

  const handleSKUChange = (e) => {
    const skucode = e.target.value;
    if (skucode != "") {
      const json = filteredData.filter((item) => item["RB SKU"] == skucode);
      convertedjson(json);
    }
  };

  return (
    <div>
      {loader && (
        <div className="loader-overlay">
          <img src={loaderImage} alt="Loading..." className="rotating-image" />
        </div>
      )}
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
                  Forecast Builder - Sell-Out
                </Typography>
              </Box>
              <Box>
                {" "}
                <Filtersout apply={handleApply} />
              </Box>
              <Box>
                <Box
                  sx={{ minWidth: 200, marginTop: "-12px" }}
                  className="sku-dropdown"
                >
                  <FormControl
                    variant="standard"
                    sx={{ minWidth: 200 }}
                    size="small"
                  >
                    <InputLabel>SKU</InputLabel>
                    <Select
                      onChange={handleSKUChange}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 250, // Set the maximum height for the dropdown
                          },
                        },
                      }}
                    >
                      <MenuItem value="">Select</MenuItem>
                      {rBSKUdata.length > 0 &&
                        rBSKUdata.map((item) => (
                          <MenuItem value={item}>{item}</MenuItem>
                        ))}
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
          <Box sx={{ border: "", width: 1550, height: 755 }} paddingLeft="30px">
            <Linechart data={selectedforecast} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Selloutforecast;
