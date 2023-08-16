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
import "./NewohrTable.css";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import LocalHospitalSharpIcon from "@mui/icons-material/LocalHospitalSharp";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Tooltip from "@mui/material/Tooltip";

const NewohrTable = () => {
  const navigate = useNavigate();

  useEffect(() => {
    scroll.scrollToTop(); // Scrolls to the top of the page when the component mounts
  }, []);

  const handleClick = () => {
    navigate("/historicaldata");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const data = [
    {
      id: 1,
      poNumber: "PO no 123",
      poReceiptDate: "20-07-2023",
      poStatus: "Open",
      noSKUsinPO: 80,
      noSKUsIrregular: 25,
      totalForecastedRevenue: "500",
      totalPORevenue: "800",
      irregularPO: "Yes",
      perDiscepency: "-84%",
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
      id: 2,
      poNumber: "PO no 500",
      poReceiptDate: "10-07-2023",
      poStatus: "Delayed",
      noSKUsinPO: 60,
      noSKUsIrregular: 40,
      totalForecastedRevenue: "500",
      totalPORevenue: "800",
      irregularPO: "Yes",
      perDiscepency: "-84%",
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
      id: 3,
      poNumber: "PO no 500",
      poReceiptDate: "10-07-2023",
      poStatus: "Stock",
      noSKUsinPO: 50,
      noSKUsIrregular: 20,
      totalForecastedRevenue: "500",
      totalPORevenue: "800",
      irregularPO: "Yes",
      perDiscepency: "-84%",
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
      id: 4,
      poNumber: "PO no 500",
      poReceiptDate: "10-07-2023",
      poStatus: "Open",
      noSKUsinPO: 70,
      noSKUsIrregular: 30,
      totalForecastedRevenue: "500",
      totalPORevenue: "800",
      irregularPO: "Yes",
      perDiscepency: "-84%",
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
      id: 5,
      poNumber: "PO no 500",
      poReceiptDate: "10-07-2023",
      poStatus: "Open",
      noSKUsinPO: 70,
      noSKUsIrregular: 30,
      totalForecastedRevenue: "500",
      totalPORevenue: "800",
      irregularPO: "Yes",
      perDiscepency: "-84%",
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
      id: 6,
      poNumber: "PO no 500",
      poReceiptDate: "10-07-2023",
      poStatus: "Open",
      noSKUsinPO: 70,
      noSKUsIrregular: 30,
      totalForecastedRevenue: "500",
      totalPORevenue: "800",
      irregularPO: "Yes",
      perDiscepency: "-84%",
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

  // SubTable component to display the nested table
  const SubTable = ({ details }) => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
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
                    SKU
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
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
                  <Typography
                    fontSize={14}
                    mt="12px"
                    mx="-6px"
                    // border="1px solid green"
                  >
                    SKU Code
                  </Typography>
                </Box>
              </Box>
            </TableCell>

            <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
              <Box
                className="bdr-netrevenue"
                sx={{
                  display: "flex",
                  textAlign: "center",
                  color: "#415A6C",
                  // width: "110px",
                }}
              >
                <Box textAlign="center" mx="2px">
                  <Typography fontSize={14} lineHeight="16px">
                    Quantity Ordered
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
              <Box
                className="bdr-netrevenue"
                sx={{
                  display: "flex",
                  textAlign: "center",
                  color: "#415A6C",
                  // width: "110px",
                }}
              >
                <Box textAlign="center" mx="2px">
                  <Typography fontSize={14} lineHeight="16px">
                    Quantity Forecasted
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
              <Box
                className="bdr-expectedola"
                sx={{
                  display: "flex",
                  textAlign: "center",
                  color: "#415A6C",
                  // marginLeft: "-25px",
                  width: "85px",
                }}
              >
                <Box textAlign="center" mt="3px" mx="-10px">
                  <Typography fontSize={14} lineHeight="16px" mt="3px">
                    % Discrepancy
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                textAlign: "center",
                width: { lg: "40px" },
              }}
            >
              <Box
                // ml="-5px"
                sx={{
                  display: "flex",
                  textAlign: "center",
                  color: "#415A6C",
                }}
              >
                <Box textAlign="center">
                  <Typography fontSize={14} textAlign="center" mt="7px">
                    Reviewed
                  </Typography>
                </Box>
              </Box>
            </TableCell>
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
                <Typography ml="8px" fontSize="13px">
                  {item.skuname}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography ml="8px" fontSize="13px">
                  {item.skucode}
                </Typography>
              </TableCell>

              <TableCell>
                <Typography ml="28%" fontSize="13px">
                  {item.quantityOrdered}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography ml="28%" fontSize="13px">
                  {item.quantityForcasted}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  ml="10px"
                  sx={{
                    color: "#F08C2A",
                    // textAlign: "center",
                    fontSize: "13px",
                  }}
                >
                  {item.percentageDescrepency}
                </Typography>
              </TableCell>
              <TableCell sx={{ color: "#F08C2A", textAlign: "center" }}>
                <Box
                  // ml="-10px"
                  sx={{
                    borderRadius: "5px 5px",
                    border: "1px solid #415A6C",
                    padding: "4px 0px 0px 8px",
                    display: "flex",
                    justifyContent: "space-around",
                    color: "#415A6C",
                    cursor: "pointer",
                  }}
                  width={{ lg: "90px" }}
                  ml={{ lg: "-10px" }}
                >
                  <Typography onClick={handleClick} fontSize={{ lg: "11px" }}>
                    INVESTIGATE
                  </Typography>
                  <Typography>
                    <PlayArrowIcon sx={{ height: "15px" }} />
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div>
      <TableContainer style={{ maxHeight: 732, width: "100%" }}>
        <Table stickyHeader>
          <TableHead className="thead-main">
            <TableRow>
              <TableCell
                rowSpan={2}
                style={{
                  // cursor: "pointer",
                  textAlign: "center",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                }}
              >
                <Box>
                  <Typography fontSize={14} ml={{ lg: "-10px" }}>
                    PO Number
                  </Typography>
                </Box>
              </TableCell>
              <TableCell rowSpan={2} sx={{ backgroundColor: "#E5EBEF" }}>
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                  }}
                >
                  <Box marginRight="-3px" mt={{ lg: "7px" }}>
                    <Box>
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
                  <Box textAlign="center" alignSelf="center">
                    <Typography
                      fontSize={14}
                      // mt="7px"
                      // mx="-4px"
                      lineHeight={{ lg: "16px" }}
                      // width={{ lg: "90px" }}
                    >
                      PO Receipt Date
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell rowSpan={2} sx={{ backgroundColor: "#E5EBEF" }}>
                <Box textAlign="center" color="#415A6C">
                  <Typography fontSize={14}>PO Status</Typography>
                </Box>
              </TableCell>
              <TableCell rowSpan={2} sx={{ backgroundColor: "#E5EBEF" }}>
                <Box textAlign="center" color="#415A6C">
                  <Typography fontSize={14} lineHeight={{ lg: "16px" }}>
                    No SKUs in PO
                  </Typography>
                </Box>
              </TableCell>

              <TableCell sx={{ backgroundColor: "#E5EBEF" }}></TableCell>
              <TableCell sx={{ backgroundColor: "#E5EBEF", width: "10px" }}>
                OLA %
              </TableCell>
              <TableCell sx={{ backgroundColor: "#E5EBEF" }}></TableCell>
              <TableCell sx={{ backgroundColor: "#E5EBEF" }}></TableCell>

              <TableCell colSpan={4} sx={{ backgroundColor: "#E5EBEF" }}>
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    width: "50px",
                  }}
                >
                  <Box>
                    <Box>
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
                  <Box display="flex">
                    <Box textAlign="center">
                      <Typography
                        sx={{ fontSize: "14px" }}
                        mt="6px"
                        lineHeight={{ lg: "16px" }}
                      >
                        Quantity
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </TableCell>
              <TableCell rowSpan={2} sx={{ backgroundColor: "#E5EBEF" }}>
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                  }}
                >
                  <Box textAlign="center">
                    <Typography fontSize={14} mt="7px" mx="-4px">
                      % Discrepancy
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: "5px" }}>CW</TableCell>
              <TableCell style={{ width: "5px" }}>CW</TableCell>
              <TableCell style={{ width: "5px" }}>CW</TableCell>
              <TableCell style={{ width: "5px" }}>CW</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <React.Fragment key={item.id}>
                <TableRow
                  onClick={() => handleRowClick(item.id)}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                  }}
                >
                  <TableCell fontSize={13}>
                    <Box
                      mt={{ lg: "-1px" }}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {expandedRow === item.id ? (
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
                      {item.poNumber}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography fontSize={13} textAlign="center">
                      {item.poReceiptDate}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography mx="20px" fontSize={13} textAlign="center">
                      {item.poStatus}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography mx="20px" fontSize={13} textAlign="center">
                      {item.noSKUsinPO}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontSize={13} textAlign="center">
                      {item.noSKUsIrregular}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography mx="20px" fontSize={13} textAlign="center">
                      {item.totalForecastedRevenue}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontSize={13} textAlign="center">
                      {item.totalPORevenue}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontSize={13} textAlign="center">
                      {item.perDiscepency}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontSize={13} textAlign="center">
                      <DoDisturbOutlinedIcon
                        sx={{
                          color: "red",
                          fontSize: "1rem",
                          marginTop: "7px",
                        }}
                      />
                    </Typography>
                  </TableCell>
                </TableRow>
                {expandedRow === item.id && (
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

export default NewohrTable;
