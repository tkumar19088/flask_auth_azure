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

const Irregularpo = () => {
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
    {
      id: 7,
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
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14}>SKU</Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14}>SKU Code</Typography>
            </TableCell>

            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14} lineHeight="16px">
                Quantity Ordered
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14} lineHeight="16px">
                Quantity Forecasted
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14} lineHeight="16px">
                % Discrepancy
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14}>Reviewed</Typography>
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
              <TableCell sx={{ textAlign: "center" }}>
                <Typography fontSize="13px">{item.skuname}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography fontSize="13px">{item.skucode}</Typography>
              </TableCell>

              <TableCell sx={{ textAlign: "center" }}>
                <Typography fontSize="13px">{item.quantityOrdered}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography fontSize="13px">
                  {item.quantityForcasted}
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#F08C2A",
                    fontSize: "13px",
                  }}
                >
                  {item.percentageDescrepency}
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Button
                  variant="outlined"
                  endIcon={<PlayArrowIcon />}
                  size="small"
                  onClick={handleClick}
                  className="btn-invst"
                >
                  Investigate
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div>
      <Topbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className="bg-containerdashboard">
          <div>
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
              <Typography fontSize={14}>OOS Risk Dectection</Typography>
              <Typography>
                <ChevronRightIcon sx={{ height: "20px" }} />
              </Typography>
              <Typography fontSize={14}>Irregular PO</Typography>
            </Box>
            <Box mt="20px" mx="1px">
              <Typography fontSize={28} color="#415A6C">
                Irregular PO
              </Typography>
            </Box>
            <TableContainer style={{ maxHeight: 732, width: "100%" }}>
              <Table stickyHeader>
                <TableHead className="thead-main">
                  <TableRow>
                    <TableCell
                      style={{
                        // cursor: "pointer",
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      <Box>
                        <Typography fontSize={14} ml={{ lg: "-10px" }}>
                          PO Number
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
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
                    <TableCell
                      sx={{
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      <Box textAlign="center" color="#415A6C">
                        <Typography fontSize={14}>PO Status</Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      <Box textAlign="center" color="#415A6C">
                        <Typography fontSize={14} lineHeight={{ lg: "16px" }}>
                          No SKUs in PO
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      <Box textAlign="center" color="#415A6C">
                        <Typography
                          fontSize={14}
                          mt="7px"
                          ml="14px"
                          lineHeight={{ lg: "16px" }}
                          width={{ lg: "110px" }}
                          // border="1px solid"
                        >
                          No.Irregular SKUs
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "center",
                          color: "#415A6C",
                        }}
                      >
                        <Box sx={{ marginRight: "-10px" }}>
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
                        <Box textAlign="center">
                          <Typography
                            fontSize={14}
                            mt="7px"
                            mx="0px"
                            width={{ lg: "80px" }}
                            lineHeight={{ lg: "16px" }}
                            // sx={{ border: "1px solid" }}
                          >
                            Quantity Ordered
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "center",
                          color: "#415A6C",
                          width: "120px",
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
                              Quantity Forecasted
                            </Typography>
                          </Box>
                          <Tooltip
                            title="Timeframe: 20/7/23 - 27/7/23"
                            arrow
                            placement="top-start"
                            ml={{ lg: "-19px" }}
                          >
                            <Box mt={{ lg: "5px" }} ml={{ lg: "-5px" }}>
                              <InfoOutlinedIcon
                                sx={{ height: "15px", color: "#000" }}
                              />
                            </Box>
                          </Tooltip>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "center",
                          color: "#415A6C",
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
                        <Box textAlign="center">
                          <Typography fontSize={14} mt="7px" mx="-4px">
                            % Discrepancy
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      <Box
                        textAlign="center"
                        sx={{ color: "#415A6C" }}
                        mt={{ lg: "-7px" }}
                      >
                        <Typography fontSize={14}>Irregular PO</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <TableRow
                        onClick={() => handleRowClick(item.id)}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
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
                          <Typography
                            mx="20px"
                            fontSize={13}
                            textAlign="center"
                          >
                            {item.poStatus}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            mx="20px"
                            fontSize={13}
                            textAlign="center"
                          >
                            {item.noSKUsinPO}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography fontSize={13} textAlign="center">
                            {item.noSKUsIrregular}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            mx="20px"
                            fontSize={13}
                            textAlign="center"
                          >
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Irregularpo;
