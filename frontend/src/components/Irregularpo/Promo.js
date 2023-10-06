import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Box,
  Grid,
  Button,
  Paper,
} from "@mui/material";
import { useState, useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DoDisturbOutlinedIcon from "@mui/icons-material/DoDisturbOutlined";
import "./Irregularpro.css";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import LocalHospitalSharpIcon from "@mui/icons-material/LocalHospitalSharp";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Tooltip from "@mui/material/Tooltip";

const Promo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    scroll.scrollToTop(); // Scrolls to the top of the page when the component mounts
  }, []);

  const handleClick = () => {
    // navigate("/historicaldata");
    navigate("/irregularcharts");
  };

  const handleBack = () => {
    navigate(-1);
  };

  // const data = [
  //   {
  //     id: 1,
  //     poNumber: "PO no 123",
  //     customerPoNumber: "PO no 123",
  //     poReceiptDate: "20-07-2023",
  //     poStatus: "Open",
  //     noSKUsinPO: 80,
  //     noSKUsIrregular: 25,
  //     totalForecastedRevenue: "500",
  //     totalPORevenue: "800",
  //     irregularPO: "Yes",
  //     perDiscepency: "-84%",
  //     details: [
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     poNumber: "PO no 500",
  //     customerPoNumber: "PO no 500",
  //     poReceiptDate: "10-07-2023",
  //     poStatus: "Delayed",
  //     noSKUsinPO: 60,
  //     noSKUsIrregular: 40,
  //     totalForecastedRevenue: "500",
  //     totalPORevenue: "800",
  //     irregularPO: "Yes",
  //     perDiscepency: "-84%",
  //     details: [
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     poNumber: "PO no 500",
  //     customerPoNumber: "PO no 500",
  //     poReceiptDate: "10-07-2023",
  //     poStatus: "Stock",
  //     noSKUsinPO: 50,
  //     noSKUsIrregular: 20,
  //     totalForecastedRevenue: "500",
  //     totalPORevenue: "800",
  //     irregularPO: "Yes",
  //     perDiscepency: "-84%",
  //     details: [
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //     ],
  //   },

  // ];

  const data = [
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      Customer: "L4 TESCO HYHO PLAN TO",
      Location: "United Kingdom",
      "RB SKU": 3277069,
      campaignname: "AIRWICK WEEK 35 RR PIPEFILL",
      customerallocation: "100",
      customerinventory: "400",
      enddate: "2023-10-24",
      offerdescription: "Price Reduction",
      startdate: "2023-10-11",
      status: "Draft",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      Customer: "L4 TESCO HYHO PLAN TO",
      Location: "United Kingdom",
      "RB SKU": 3277069,
      campaignname: "P13 MIST KIT LSM BREAK \u00a38 CC",
      customerallocation: "100",
      customerinventory: "400",
      enddate: "2024-01-09",
      offerdescription: "Price Reduction",
      startdate: "2023-12-13",
      status: "Draft",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      Customer: "L4 TESCO HYHO PLAN TO",
      Location: "United Kingdom",
      "RB SKU": 3277069,
      campaignname: "P13 MIST KIT LSM BREAK \u00a38 CC",
      customerallocation: "100",
      customerinventory: "400",
      enddate: "2024-01-09",
      offerdescription: "Price Reduction",
      startdate: "2023-12-13",
      status: "Draft",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      Customer: "L4 TESCO HYHO PLAN TO",
      Location: "United Kingdom",
      "RB SKU": 3277069,
      campaignname: "P13 MIST KIT LSM BREAK \u00a38 CC",
      customerallocation: "100",
      customerinventory: "400",
      enddate: "2024-01-09",
      offerdescription: "Price Reduction",
      startdate: "2023-12-13",
      status: "Draft",
    },
  ];
  const [expandedRow, setExpandedRow] = useState(null);

  // Function to handle row click and expand/collapse accordion
  const handleRowClick = (rowId) => {
    if (expandedRow === rowId) {
      setExpandedRow(null);
    } else {
      setExpandedRow(rowId);
    }
  };

  return (
    <div>
      <TableContainer
        component={Paper}
        className="tablecell-header"
        style={{ maxHeight: 306, width: "100%" }}
      >
        <Table className="campaignsTable">
          <TableHead>
            <TableRow className="tablecell-inside">
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
                border="1px solid #dddddd"
              >
                Campaign Name
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                Start Date
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                End Date
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                Offer Description
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                Customer
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  lineHeight: "16px",
                  color: "#415A6C",
                }}
              >
                Customer
                <br /> Inventory
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  lineHeight: "16px",
                  color: "#415A6C",
                }}
              >
                Customer <br />
                Allocation
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length == 0 && (
              <TableRow>
                <TableCell
                  colSpan={20}
                  style={{ textAlign: "center", fontSize: "16px" }}
                >
                  No Records Found
                </TableCell>
              </TableRow>
            )}
            {data.map((item, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                  textAlign: "center",
                }}
              >
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.campaignname}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.startdate}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.enddate}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.offerdescription}
                  </Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.status}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.Customer}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.customerinventory}
                  </Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.customerallocation}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Promo;
