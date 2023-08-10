import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Slider } from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import "./DataTable.css";
import "./ScenarioGenarationData";

const ScenarioGenarationData = () => {
  const [data, setData] = useState([
    {
      skuname: "30.01.2023",
      skucode: "Airwick Electrical Lemon 23434534693dlf",
      selloutforecast: 100,
      recommendedsellin: 0,
      actualanticipatedsellin: 10,
      inventoryreckitt: 2000,
      inventoryretailer: 700,
      weeksofcoverage: 4.7,
      suggestedsupply: 12,
      checkbox: false,
    },
    {
      skuname: "30.01.2023",
      skucode: "Airwick Electrical Lemon 23434534693dlf",
      selloutforecast: 100,
      recommendedsellin: 0,
      actualanticipatedsellin: 10,
      inventoryreckitt: 2000,
      inventoryretailer: 700,
      weeksofcoverage: 4.7,
      suggestedsupply: 12,
      checkbox: false,
    },
    {
      skuname: "30.01.2023",
      skucode: "Airwick Electrical Lemon 23434534693dlf",
      selloutforecast: 100,
      recommendedsellin: 0,
      actualanticipatedsellin: 10,
      inventoryreckitt: 2000,
      inventoryretailer: 700,
      weeksofcoverage: 4.7,
      suggestedsupply: 12,
      checkbox: false,
    },
    {
      skuname: "30.01.2023",
      skucode: "Airwick Electrical Lemon 23434534693dlf",
      selloutforecast: 100,
      recommendedsellin: 0,
      actualanticipatedsellin: 10,
      inventoryreckitt: 2000,
      inventoryretailer: 700,
      weeksofcoverage: 4.7,
      suggestedsupply: 12,
      checkbox: false,
    },
    {
      skuname: "30.01.2023",
      skucode: "Airwick Electrical Lemon 23434534693dlf",
      selloutforecast: 100,
      recommendedsellin: 0,
      actualanticipatedsellin: 10,
      inventoryreckitt: 2000,
      inventoryretailer: 700,
      weeksofcoverage: 4.7,
      suggestedsupply: 12,
      checkbox: false,
    },
    {
      skuname: "30.01.2023",
      skucode: "Airwick Electrical Lemon 23434534693dlf",
      selloutforecast: 100,
      recommendedsellin: 0,
      actualanticipatedsellin: 10,
      inventoryreckitt: 2000,
      inventoryretailer: 700,
      weeksofcoverage: 4.7,
      suggestedsupply: 12,
      checkbox: false,
    },
    {
      skuname: "30.01.2023",
      skucode: "Airwick Electrical Lemon 23434534693dlf",
      selloutforecast: 100,
      recommendedsellin: 0,
      actualanticipatedsellin: 10,
      inventoryreckitt: 2000,
      inventoryretailer: 700,
      weeksofcoverage: 4.7,
      suggestedsupply: 12,
      checkbox: false,
    },
    {
      skuname: "30.01.2023",
      skucode: "Airwick Electrical Lemon 23434534693dlf",
      selloutforecast: 100,
      recommendedsellin: 0,
      actualanticipatedsellin: 10,
      inventoryreckitt: 2000,
      inventoryretailer: 700,
      weeksofcoverage: 4.7,
      suggestedsupply: 12,
      checkbox: false,
    },
    {
      skuname: "30.01.2023",
      skucode: "Airwick Electrical Lemon 23434534693dlf",
      selloutforecast: 100,
      recommendedsellin: 0,
      actualanticipatedsellin: 10,
      inventoryreckitt: 2000,
      inventoryretailer: 700,
      weeksofcoverage: 4.7,
      suggestedsupply: 12,
      checkbox: false,
    },
    {
      skuname: "30.01.2023",
      skucode: "Airwick Electrical Lemon 23434534693dlf",
      selloutforecast: 100,
      recommendedsellin: 0,
      actualanticipatedsellin: 10,
      inventoryreckitt: 2000,
      inventoryretailer: 700,
      weeksofcoverage: 4.7,
      suggestedsupply: 12,
      checkbox: false,
    },
    {
      skuname: "30.01.2023",
      skucode: "Airwick Electrical Lemon 23434534693dlf",
      selloutforecast: 100,
      recommendedsellin: 0,
      actualanticipatedsellin: 10,
      inventoryreckitt: 2000,
      inventoryretailer: 700,
      weeksofcoverage: 4.7,
      suggestedsupply: 12,
      checkbox: false,
    },
  ]);
  const [selectAll, setSelectAll] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  const handleSort = (property) => {
    let direction = "asc";
    if (sortConfig.key === property && sortConfig.direction === "asc") {
      direction = "desc";
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[property] < b[property]) return direction === "asc" ? -1 : 1;
      if (a[property] > b[property]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key: property, direction });
  };

  const handleCheckboxChange = (event, skucode) => {
    if (skucode === "selectAll") {
      const checked = event.target.checked;
      const updatedData = data.map((item) => ({
        ...item,
        checkbox: checked,
      }));
      setData(updatedData);
      setSelectAll(checked);
    } else {
      const updatedData = data.map((item) => {
        if (item.skucode === skucode) {
          return { ...item, checkbox: event.target.checked };
        }
        return item;
      });
      setData(updatedData);
      setSelectAll(updatedData.every((item) => item.checkbox));
    }
  };

  const getSortSymbol = (property) => {
    if (sortConfig.key === property) {
      if (sortConfig.direction === "asc") {
        return <ArrowDropUpIcon fontSize="small" />;
      } else {
        return <ArrowDropDownIcon fontSize="small" />;
      }
    }
    return null;
  };

  const [value, setValue] = useState(50);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TableContainer style={{ maxHeight: 450, width: "100%" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    // border: "1px solid",
                    // width: "90px",
                  }}
                >
                  <Box>
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      fontSize={14}
                      mt="7px"
                      //   mx="-3px"
                      width="43px"
                      lineHeight="16px"
                      textAlign="left"
                    >
                      Weeks Out
                    </Typography>
                  </Box>
                </Box>
              </TableCell>

              <TableCell
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                  }}
                >
                  <Box>
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      fontSize={14}
                      mt="7px"
                      //   mx="-3px"
                      width="70px"
                      lineHeight="16px"
                      textAlign="left"
                    >
                      Sell-out forecast
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  mx="-10px"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                  }}
                >
                  <Box>
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      fontSize={14}
                      mt="12px"
                      lineHeight="16px"
                      //   mx="-3px"
                      textAlign="left"
                      width="110px"
                    >
                      Recommended sell-in
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                  }}
                >
                  <Box textAlign="center">
                    <Box mt="13px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      fontSize={14}
                      mt="7px"
                      //   mx="-3px"
                      textAlign="left"
                      color="#FF007E"
                      lineHeight="16px"
                    >
                      Actual /
                    </Typography>
                    <Typography
                      textAlign="left"
                      fontSize={14}
                      lineHeight="16px"
                      mb="4px"
                    >
                      {" "}
                      Anticipated sell-in
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                  }}
                >
                  <Box>
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      fontSize={14}
                      mt="7px"
                      //   mx="-3px"
                      textAlign="left"
                      lineHeight="16px"
                    >
                      Inventory Rockitt
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                  }}
                >
                  <Box>
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      fontSize={14}
                      mt="7px"
                      //   mx="-3px"
                      textAlign="left"
                      lineHeight="16px"
                    >
                      Inventory Retailer
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                  }}
                >
                  <Box>
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      fontSize={14}
                      mt="7px"
                      lineHeight="16px"
                      //   mx="-3px"
                      textAlign="left"
                    >
                      Weeks of Coverage
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                  }}
                >
                  <Box>
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      fontSize={14}
                      mt="7px"
                      lineHeight="16px"
                      //   mx="-3px"
                      textAlign="left"
                    >
                      Suggested Supply
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  // mx="-20px"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    // border: "1px solid",
                    width: "170px",
                  }}
                >
                  <Box>
                    <Box mt="5px">
                      <ArrowDropUpIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                    <Box mt="-28px">
                      <ArrowDropDownIcon
                        style={{ height: "28px", width: "28px" }}
                      />
                    </Box>
                  </Box>
                  <Box textAlign="center" margin="auto">
                    <Typography
                      fontSize={14}
                      mt="-3px"
                      lineHeight="16px"
                      textAlign="left"
                      marginLeft="-20px"
                    >
                      Test Supply Options
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.skucode}
                className={item.checkbox ? "checked-row" : ""}
              >
                <TableCell>
                  <Typography>{item.skuname}</Typography>
                </TableCell>

                <TableCell sx={{ textAlign: "center" }}>
                  {item.selloutforecast}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography> {item.recommendedsellin}</Typography>
                </TableCell>
                <TableCell sx={{ color: "#F08C2A", textAlign: "center" }}>
                  <Typography sx={{ marginLeft: "-20px" }}>
                    {" "}
                    {item.actualanticipatedsellin}
                  </Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.inventoryreckitt}
                </TableCell>
                <TableCell sx={{ color: "red", textAlign: "center" }}>
                  {item.inventoryretailer}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.weeksofcoverage}
                </TableCell>
                <TableCell sx={{ textAlign: "center", color: "red" }}>
                  {item.suggestedsupply}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Box display="flex" width="120px" color="#DD00000">
                    <Box mt="6px">
                      {" "}
                      <WarningAmberRoundedIcon
                        sx={{ height: "17px", color: "#DD0000" }}
                      />
                    </Box>
                    <Box mt="4px" sx={{ marginInline: "5%", color: "#DD0000" }}>
                      <Typography id="slider-label" gutterBottom>
                        {value}
                      </Typography>
                    </Box>
                    <Box width="100%" ml="10%">
                      <Slider
                        value={value}
                        onChange={handleChange}
                        aria-labelledby="slider-label"
                      />
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScenarioGenarationData;
