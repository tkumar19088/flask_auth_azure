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
import Errormodalpopup from "../Errormodalpopup/Errormodalpopup";

const Selloutforecast = () => {
  const navigate = useNavigate();
  const open = useSelector((state) => state.sidebar.errormodalopen);

  const loader = useSelector((state) => state.sidebar.loader);
  const [rBSKUdata, setrBSKUdata] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const defaultData = [
    { name: "Week 1", value: 0, kvalue: 0 },
    { name: "Week 2", value: 0, kvalue: 0 },
    { name: "Week 3", value: 0, kvalue: 0 },
    { name: "Week 4", value: 0, kvalue: 0 },
    { name: "Week 5", value: 0, kvalue: 0 },
    { name: "Week 6", value: 0, kvalue: 0 },
    { name: "Week 7", value: 0, kvalue: 0 },
    { name: "Week 8", value: 0, kvalue: 0 },
    { name: "Week 9", value: 0, kvalue: 0 },
    { name: "Week 10", value: 0, kvalue: 0 },
    { name: "Week 11", value: 0, kvalue: 0 },
    { name: "Week 12", value: 0, kvalue: 0 },
  ];
  const [selectedforecast, setselectedforecast] = useState(defaultData);
  const [error, seterror] = useState(true);
  const [isexportData, setexportData] = useState(false);
  const [exportTableData, setexportTableData] = useState([]);

  const convertedjson = (json) => {
    const convertedData = [];
    for (let i = 1; i <= 12; i++) {
      const week = `Week ${i}`;
      const value = parseFloat(json[0][`sola CW+${i}`]) || 0;
      convertedData.push({ name: week, value: value });
    }
    setselectedforecast(convertedData);
    setexportData(true);
  };

  const handleClick = () => {
    navigate("/");
  };
  const handleBack = () => {
    navigate(-1);
  };

  const handleApply = (jsonData) => {
    seterror(false);
    setexportData(false);
    setfilteredData(jsonData);
    var rbSkuArray = [];
    if (jsonData.length > 0) {
      rbSkuArray = jsonData.map((item) => item["RB SKU"]);
    } else {
      rbSkuArray = [];
      setselectedforecast(defaultData);
    }
    setrBSKUdata(rbSkuArray);
  };

  const handleSKUChange = (e) => {
    const skucode = e.target.value;
    if (skucode != "") {
      const json = filteredData.filter((item) => item["RB SKU"] == skucode);
      convertedjson(json);
      setexportTableData(json);
    }
  };
  const convertToCSV = (objArray) => {
    const array =
      typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
    let csv = "";

    // Generate the header row
    let header = "";
    for (let key in array[0]) {
      if (header !== "") header += ",";
      header += `"${key}"`; // Enclose headers in double quotes
    }
    csv += header + "\r\n";

    // Generate the data rows
    for (let i = 0; i < array.length; i++) {
      let line = "";
      for (let key in array[i]) {
        if (line !== "") line += ",";
        let value = array[i][key];

        // Check if value is null
        if (value === null) {
          value = "";
        } else {
          value = value.toString(); // Convert to string
          value = value.replace(/"/g, '""'); // Enclose values in double quotes and escape existing double quotes
        }

        line += `"${value}"`;
      }
      csv += line + "\r\n";
    }

    return csv;
  };
  const handleExportData = () => {
    console.log(exportTableData);
    const csvData = convertToCSV(exportTableData);
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "data.csv";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  return (
    <div>
      {loader && (
        <div className="loader-overlay">
          <img src={loaderImage} alt="Loading..." className="rotating-image" />
        </div>
      )}
      {open && <Errormodalpopup />}
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
            <Typography fontSize={14}>Forecast Builder : Sell-Out</Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px" }} />
            </Typography>
          </Box>
          <Grid container justifyContent="space-between" mt={1}>
            <Box display="flex" justifyItems="center" gap={4}>
              <Box>
                <Typography fontSize={24} color="#415A6C">
                  Forecast Builder : Sell-Out
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
              <Box
                display="flex"
                justifyContent="space-between"
                sx={{ marginBottom: "29px" ,marginTop:"-9px"}}
              >
                <Button
                  variant="contained"
                  size="small"
                  className="exportButton"
                  onClick={isexportData ? handleExportData : null}
                >
                  Export Data
                </Button>
              </Box>
            </Box>
          </Grid>
          {error && (
            <Typography color="red" fontSize={14} ml={53} mt="-20px">
              {" "}
              Please Select Filters First{" "}
            </Typography>
          )}
          <Box sx={{ border: "", width: 1550, height: 755 }} paddingLeft="30px">
            <Linechart data={selectedforecast} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Selloutforecast;
