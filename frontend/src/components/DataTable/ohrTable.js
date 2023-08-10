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
  Paper,
  Stack,
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
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import "./ohr.css";

import { useNavigate } from "react-router-dom";
// import MyBreadcrumbs from "./MyBreadcrumbs";

const OhrTable = ({ onData }) => {
  const navigate = useNavigate();
  const [expandedRow, setExpandedRow] = useState(null);

  // Function to handle row click and expand/collapse accordion
  const handleRowClick = (rowId) => {
    if (expandedRow === rowId) {
      setExpandedRow(null);
    } else {
      setExpandedRow(rowId);
    }
  };

  const [data, setData] = useState([
    {
      skuname: "Airwick Electrical Lemon",
      skucode: "23434534693dlf",
      timeframe: 4,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "60",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "Yes",
      details: [
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      skuname: "Airwick Electrical Lavende",
      skucode: "23434534693dlf1",
      timeframe: 8,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "70",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
      details: [
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      skuname: "Airwick Aersol Floral",
      skucode: "23434534693dlf2",
      timeframe: 12,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
      details: [
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      skuname: "Airwick Aersol Lemon",
      skucode: "23434534693dlf3",
      timeframe: 4,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
      details: [
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      skuname: "Candles White Melon",
      skucode: "23434534693dlf4",
      timeframe: 8,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
      details: [
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      skuname: "Candles White Orange",
      skucode: "23434534693dlf5",
      timeframe: 12,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
      details: [
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      skuname: "Mist Diffuser Calming Rose",
      skucode: "23434534693dlg1",
      timeframe: 12,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
      details: [
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      skuname: "Mist Diffuser Relaxing Lavender",
      skucode: "23434534693dlg2",
      timeframe: 4,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
      details: [
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      skuname: "Fabric Refresher Fresh Sea Air",
      skucode: "23434534693dlg3",
      timeframe: 8,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
      details: [
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      skuname: "Fabric Refresher Garden After Rain",
      skucode: "23434534693dlg4",
      timeframe: 8,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
      details: [
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      skuname: "Rose Garden Fabric Scent Booster",
      skucode: "23434534693dlg5",
      timeframe: 4,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "10",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
      details: [
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      skuname: "Rose Garden Fabric Scent Booster",
      skucode: "23434534693dlg6",
      timeframe: 25,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "6",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
      details: [
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      skuname: "Rose Garden Fabric Scent Booster",
      skucode: "23434534693dlg7",
      timeframe: 25,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "4",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
      details: [
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      skuname: "Rose Garden Fabric Scent Booster",
      skucode: "23434534693dlg8",
      timeframe: 25,
      netrevenue: "246.43",
      expectedola: "84%",
      servicelevel: "100",
      expectednetrevenue: "246.43",
      bestseller: "High",
      risk: "7",
      checkbox: false,
      costtoserve: "(£903.00)",
      reviewed: "No",
      details: [
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
          skucode: "23434534693dlf",
          timeframe: 4,
          netrevenue: "246.43",
          expectedola: "84%",
          servicelevel: "60",
          expectednetrevenue: "(£5,749.00)",
          bestseller: "High",
          risk: "10",
          checkbox: false,
          costtoserve: "(£903.00)",
          reviewed: "No",
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
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

  const SubTable = ({ details }) => (
    <div style={{ marginTop: "-18px" }}>
      <Typography fontSize={20} my={1} color="#415A6C" className="ms-title">
        Recent / current / Upcoming Campagins
      </Typography>

      <TableContainer component={Paper} className="tablecell-header">
        <Table>
          <TableHead>
            <TableRow className="tablecell-inside">
              <TableCell>Campaign Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>SKU focused?</TableCell>
              <TableCell>Active/Not Active</TableCell>
              <TableCell>Active/Not Active</TableCell>
              <TableCell>Retailer Inventory</TableCell>
              <TableCell>RB warehouse inventory</TableCell>
              <TableCell>Request Deactivation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {details.map((item, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                }}
              >
                <TableCell>
                  <Typography fontSize="13px">{item.skuname}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">{item.skucode}</Typography>
                </TableCell>

                <TableCell>
                  <Typography fontSize="13px">
                    {item.quantityOrdered}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.quantityForcasted}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.percentageDescrepency}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.percentageDescrepency}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.percentageDescrepency}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.percentageDescrepency}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.percentageDescrepency}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        fontSize={20}
        mx={4}
        my={1}
        color="#415A6C"
        className="ms-title"
      >
        Choose a Mitigation Strategy{" "}
      </Typography>
      <Stack
        direction="row"
        gap={4}
        sx={{ marginInline: "3%" }}
        // border="1px solid"
        p={2}
        borderRadius="5px"
        backgroundColor="#DCDCDC"
      >
        <Grid item xs={3} className="ms-grid" bgcolor="green" color="white">
          <Typography>Push Alternative</Typography>
        </Grid>
        <Grid item xs={3} className="ms-grid" bgcolor="red" color="white">
          <Typography>Reallocate</Typography>
        </Grid>
        <Grid item xs={3} className="ms-grid" bgcolor="white">
          <Typography>Redirect</Typography>
        </Grid>
        <Grid item xs={3} className="ms-grid" bgcolor="white">
          <Typography>Mitigation Scenario 4</Typography>
        </Grid>
      </Stack>
    </div>
  );

  return (
    <div style={{ border: "" }}>
      <TableContainer style={{ maxHeight: 730, width: "100%" }}>
        <Table stickyHeader>
          <TableHead className="t-head">
            <TableRow className="tablerow-title">
              <TableCell
                rowSpan={2}
                className="datatable-head"
                sx={{
                  backgroundColor: "#E5EBEF",
                  // backgroundColor: "red",
                  marginLeft: "2px",
                  // border: "1px solid red",
                  // width: "20px",
                }}
              ></TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  // backgroundColor: "red",
                  // cursor: "pointer",
                  backgroundColor: "#E5EBEF",
                  // height: "20px",
                }}
                onClick={() => handleSort("skuname")}
              >
                <Box
                  className="bdr-sku"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    width: "110px",
                    // height:"40px"
                    // marginLeft: "-20px",
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
                    <Typography fontSize={14} mt="12px" mx="-6px">
                      RB SKU
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                rowSpan={2}
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  className="bdr-skucode"
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
                    <Typography fontSize={14} mt="12px" mx="-6px">
                      Description
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                rowSpan={2}
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  className="bdr-skucode"
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
                    <Typography fontSize={14} mt="12px" mx="-6px">
                      RR Segment
                    </Typography>
                  </Box>
                </Box>
              </TableCell>

              <TableCell
                rowSpan={2}
                onClick={() => handleSort("")}
                sx={{ textAlign: "center", backgroundColor: "#E5EBEF" }}
              >
                <Box className="bdr-timeframe">
                  <Typography
                    lineHeight="16px"
                    sx={{ fontSize: "14px", color: "#415A6C" }}
                  >
                    WOC
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                className="merged-cell"
                colSpan={4}
                onClick={() => handleSort("servicelevel")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  className="bdr-netrevenue centered-content"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    width: "110px",
                  }}
                >
                  <Box mx="-7px">
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
                  <Box textAlign="center" mt="14px" mx="2px">
                    <Typography fontSize={14} lineHeight="16px">
                      OLA %
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                colSpan={4}
                onClick={() => handleSort("expectednetrevenue")}
                sx={{
                  color: "#415A6C",
                  textAlign: "center",
                  backgroundColor: "#E5EBEF",
                }}
              >
                <Box className="bdr-exptnetrevenue">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      width: "",
                      textAlign: "center",
                      width: "80px",
                      marginLeft: "-2px",
                      lineHeight: "16px",
                    }}
                  >
                    Expected Net Revenue
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                colSpan={4}
                onClick={() => handleSort("expectednetrevenue")}
                sx={{
                  color: "#415A6C",
                  textAlign: "center",
                  backgroundColor: "#E5EBEF",
                }}
              >
                <Box className="bdr-exptnetrevenue">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      width: "",
                      textAlign: "center",
                      width: "80px",
                      marginLeft: "-2px",
                      lineHeight: "16px",
                    }}
                  >
                    RAG
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                rowSpan={2}
                onClick={() => handleSort("expectednetrevenue")}
                sx={{
                  color: "#415A6C",
                  textAlign: "center",
                  backgroundColor: "#E5EBEF",
                }}
              >
                <Box className="bdr-exptnetrevenue">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      width: "",
                      textAlign: "center",
                      width: "80px",
                      marginLeft: "-2px",
                      lineHeight: "16px",
                    }}
                  >
                    Comment/Root Cause
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CW</TableCell>
              <TableCell>CW+1</TableCell>
              <TableCell>CW+2</TableCell>
              <TableCell>CW+3</TableCell>
              <TableCell>CW</TableCell>
              <TableCell>CW+1</TableCell>
              <TableCell>CW+2</TableCell>
              <TableCell>CW+3</TableCell>
              <TableCell>CW</TableCell>
              <TableCell>CW+1</TableCell>
              <TableCell>CW+2</TableCell>
              <TableCell>CW+3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <React.Fragment key={item.skucode}>
                <TableRow
                  onClick={() => handleRowClick(item.skucode)}
                  key={item.skucode}
                  className={item.checkbox ? "checked-row" : ""}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                  }}
                >
                  <TableCell fontSize={13}>
                    <Box
                      mt={{ lg: "-1px" }}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {expandedRow === item.skucode ? (
                        <RemoveIcon
                          fontSize="medium"
                          sx={{
                            color: "#415A6C",
                            cursor: "pointer",
                            fontWeight: "800",
                            marginTop: "-1px",
                            backgroundColor: "transparent",
                          }}
                        />
                      ) : (
                        <AddIcon
                          fontSize="medium"
                          sx={{
                            color: "#415A6C",
                            cursor: "pointer",
                            fontWeight: "800",
                            marginTop: "-1px",
                            backgroundColor: "transparent",
                          }}
                        />
                      )}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography ml="-8px" fontSize="13px">
                      {item.skucode}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        //   border: "1px solid",
                        width: "146px",
                        marginLeft: "-25px",
                        fontSize: "13px",
                      }}
                    >
                      {item.skuname}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "13px" }}>
                    {item.timeframe}
                  </TableCell>
                  <TableCell>
                    <Typography mx="7px" fontSize="13px">
                      {item.netrevenue}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      mx="10px"
                      sx={{
                        color: "#F08C2A",
                        textAlign: "center",
                        fontSize: "13px",
                      }}
                    >
                      {item.expectedola}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography mx="6px" fontSize="13px">
                      {item.servicelevel}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: "red", fontSize: "13px" }}>
                    {item.expectednetrevenue}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Typography mx="9px" fontSize="13px">
                      {" "}
                      {item.bestseller}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      mx="10px"
                      sx={{
                        color: "#F08C2A",
                        textAlign: "center",
                        fontSize: "13px",
                      }}
                    >
                      {item.expectedola}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography mx="6px" fontSize="13px">
                      {item.servicelevel}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: "red", fontSize: "13px" }}>
                    {item.expectednetrevenue}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Typography mx="9px" fontSize="13px">
                      {" "}
                      {item.bestseller}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      mx="10px"
                      sx={{
                        color: "#F08C2A",
                        textAlign: "center",
                        fontSize: "13px",
                      }}
                    >
                      {item.expectedola}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography mx="6px" fontSize="13px">
                      {item.servicelevel}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: "red", fontSize: "13px" }}>
                    {item.expectednetrevenue}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Typography mx="9px" fontSize="13px">
                      {" "}
                      {item.bestseller}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Typography mx="9px" fontSize="13px">
                      {" "}
                      {item.bestseller}
                    </Typography>
                  </TableCell>
                </TableRow>
                {expandedRow === item.skucode && (
                  <TableRow>
                    <TableCell colSpan={10}>
                      {/* Add your expanded table here */}
                      <SubTable details={item.details} />
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OhrTable;
