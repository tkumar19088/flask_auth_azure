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
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// import "./DataTable.css";

import { useNavigate } from "react-router-dom";
// import MyBreadcrumbs from "./MyBreadcrumbs";
// import MyBreadcrumbs from "../../MyBreadcrumbs";

const DataTable2 = ({ onData }) => {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      skuname: "Airwick Electrical Lemon",
      skucode: "23434534693dlf",
      timeframe: 4,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "60",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Airwick Electrical Lavende",
      skucode: "23434534693dlf1",
      timeframe: 8,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "70",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Airwick Aersol Floral",
      skucode: "23434534693dlf2",
      timeframe: 12,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Airwick Aersol Lemon",
      skucode: "23434534693dlf3",
      timeframe: 4,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Candles White Melon",
      skucode: "23434534693dlf4",
      timeframe: 8,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Candles White Orange",
      skucode: "23434534693dlf5",
      timeframe: 12,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Mist Diffuser Calming Rose",
      skucode: "23434534693dlg1",
      timeframe: 12,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Mist Diffuser Relaxing Lavender",
      skucode: "23434534693dlg2",
      timeframe: 4,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Fabric Refresher Fresh Sea Air",
      skucode: "23434534693dlg3",
      timeframe: 8,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Fabric Refresher Garden After Rain",
      skucode: "23434534693dlg4",
      timeframe: 8,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Rose Garden Fabric Scent Booster",
      skucode: "23434534693dlg5",
      timeframe: 4,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Rose Garden Fabric Scent Booster",
      skucode: "23434534693dlg6",
      timeframe: 25,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "6",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Rose Garden Fabric Scent Booster",
      skucode: "23434534693dlg7",
      timeframe: 25,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "4",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Rose Garden Fabric Scent Booster",
      skucode: "23434534693dlg8",
      timeframe: 25,
      netrevenue: "£12,246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "(£5,749.00)",
      bestseller: "High",
      risk: "7",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
  ]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRowsData, setselectedRowsData] = useState([]);
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
  // var selectedRowsData = [];
  const handleCheckboxChange = (event, skucode) => {
    if (skucode === "selectAll") {
      const checked = event.target.checked;
      const updatedData = data.map((item) => ({
        ...item,
        checkbox: checked,
      }));
      setData(updatedData);
      setSelectAll(checked);

      // setselectedRowsData((prevDataArray) => [...prevDataArray, data]);
      // selectedRowsData.push(data);
      onData(data);
    } else {
      const updatedData = data.map((item) => {
        if (item.skucode === skucode) {
          setselectedRowsData((prevDataArray) => [...prevDataArray, item]);
          selectedRowsData.push(item);
          onData(selectedRowsData);
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
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Box className="btn-datatable">
        <Box className="btn-back">
          <ArrowBackIosNewIcon
            className="arrow-backicon"
            sx={{
              height: "12px",
              width: "12px",
              borderRadius: "50%",
              backgroundColor: "#FF007E",
              color: "#fff",
              alignSelf: "center",
            }}
          />
          <Typography mt="2px" mx="5px" fontSize="11px" onClick={handleBack}>
            Back
          </Typography>
        </Box>
      </Box>{" "}
      <Typography p={1} fontSize="26px">
        Overview High-Risk SKUs
      </Typography>
      <Grid container>
      <Grid item xs={2}>a</Grid>
        <Grid item xs={10}  sm={10}>
          <TableContainer style={{ maxHeight: 730 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: "yellow",
                      //   backgroundColor: "#E5EBEF",
                      //   marginLeft: "5px",
                    }}
                  >
                    <Checkbox
                      checked={selectAll}
                      onChange={(event) =>
                        handleCheckboxChange(event, "selectAll")
                      }
                    />
                  </TableCell>
                  <TableCell
                    // sx={{ backgroundColor: "#E5EBEF" }}
                    onClick={() => handleSort("skuname")}
                    style={{
                      cursor: "pointer",
                      //   textAlign: "center",
                      //   backgroundColor: "#E5EBEF",
                      backgroundColor: "red",
                    }}
                  >
                    SKU
                  </TableCell>
                  <TableCell
                    onClick={() => handleSort("skucode")}
                    sx={{
                      //  backgroundColor: "#E5EBEF"
                      backgroundColor: "green",
                    }}
                  >
                    SKU Code
                  </TableCell>

                  <TableCell
                    onClick={() => handleSort("")}
                    sx={{
                      //  backgroundColor: "#E5EBEF"
                      backgroundColor: "red",
                    }}
                  >
                    TimeFrame (weeks)
                  </TableCell>
                  <TableCell
                    onClick={() => handleSort("servicelevel")}
                    sx={{ backgroundColor: "yellow" }}
                  >
                    Net Revenue
                  </TableCell>
                  <TableCell
                    onClick={() => handleSort("servicelevel")}
                    sx={{ backgroundColor: "orange" }}
                  >
                    Expected OLA
                  </TableCell>
                  <TableCell
                    onClick={() => handleSort("servicelevel")}
                    sx={{ backgroundColor: "red" }}
                  >
                    Searvice Level
                  </TableCell>
                  <TableCell
                    onClick={() => handleSort("expectednetrevenue")}
                    sx={{
                      //   color: "#415A6C",
                      //   textAlign: "center",
                      backgroundColor: "yellow",
                    }}
                  >
                    Expected NetRevenue
                  </TableCell>
                  <TableCell
                    onClick={() => handleSort("bestseller")}
                    sx={{ backgroundColor: "red" }}
                  >
                    Best Seller
                  </TableCell>
                  <TableCell
                    onClick={() => handleSort("risk")}
                    sx={{ backgroundColor: "green" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        color: "#415A6C",
                        width: "80px",
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
                        <Typography mt="6px" sx={{ fontSize: "14px" }}>
                          Risk
                          <InfoOutlinedIcon
                            sx={{ height: "15px", color: "red" }}
                          />
                          <Typography ml="-15px" mt="-4px">
                            {" "}
                            (1-10)
                          </Typography>
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
                      <Checkbox
                        checked={item.checkbox}
                        onChange={(event) =>
                          handleCheckboxChange(event, item.skucode)
                        }
                      />
                    </TableCell>
                    <TableCell>{item.skuname}</TableCell>
                    <TableCell>{item.skucode}</TableCell>
                    <TableCell>{item.timeframe}</TableCell>
                    <TableCell>{item.netrevenue}</TableCell>
                    <TableCell>{item.expectedola}</TableCell>
                    <TableCell>{item.servicelevel}</TableCell>
                    <TableCell>{item.expectednetrevenue}</TableCell>
                    <TableCell>{item.bestseller}</TableCell>
                    <TableCell>{item.risk}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default DataTable2;
