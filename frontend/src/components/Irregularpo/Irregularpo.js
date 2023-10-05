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
    // navigate("/historicaldata");
    navigate("/irregularcharts");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const data = [
    {
      id: 1,
      poNumber: "PO no 123",
      customerPoNumber: "PO no 123",
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
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
        },
        {
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
        },
      ],
    },
    {
      id: 2,
      poNumber: "PO no 500",
      customerPoNumber: "PO no 500",
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
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
        },
        {
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
        },
      ],
    },
    {
      id: 3,
      poNumber: "PO no 500",
      customerPoNumber: "PO no 500",
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
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
        },
        {
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
        },
      ],
    },
    {
      id: 4,
      poNumber: "PO no 500",
      customerPoNumber: "PO no 500",
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
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
        },
        {
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
        },
      ],
    },
    {
      id: 5,
      poNumber: "PO no 500",
      customerPoNumber: "PO no 500",
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
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
        },
        {
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
        },
      ],
    },
    {
      id: 6,
      poNumber: "PO no 500",
      customerPoNumber: "PO no 500",
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
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
        },
        {
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
        },
      ],
    },
    {
      id: 7,
      poNumber: "PO no 500",
      customerPoNumber: "PO no 500",
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
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
        },
        {
          rbsku: "Airwick",
          ppg: "23434534693dlf",
          description: "AWICK,IE,STICK UP LAVX12",
          alert: "Incorrect volume",
          quantity: "400",
          sellin: "400",
          percentage: "40%",
          orderprice: "£2.50",
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
              <Typography fontSize={14}>RB SKU</Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14}>PPG</Typography>
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
                Description
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
                Alert type
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
                Quantity ordered
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
              <Typography fontSize={14}>
                Sell-in forecast (S-OLA / Kinaxis)
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
              <Typography fontSize={14}>Percentage discrepancy</Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14}>Order Price</Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14}>Deep dive</Typography>
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
                <Typography fontSize="13px">{item.rbsku}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography fontSize="13px">{item.ppg}</Typography>
              </TableCell>

              <TableCell sx={{ textAlign: "center" }}>
                <Typography fontSize="13px">{item.description}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography fontSize="13px">{item.alert}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  {item.quantity}
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>{item.sellin}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {item.percentage}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {item.orderprice}
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
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Reckitt PO number
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Customer PO number
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      PO Receipt Date
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      PO delivery date
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      PO Status
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      No SKUs in PO
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      No.Irregular SKUs
                    </TableCell>

                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Irregular PO
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
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {expandedRow === item.id ? (
                              <RemoveIcon
                                fontSize="medium"
                                sx={{
                                  color: "#415A6C",
                                  cursor: "pointer",
                                  fontWeight: "800",
                                  // marginTop: "-1px",
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
                        <TableCell sx={{ textAlign: "center" }}>
                          {item.customerPoNumber}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {item.poReceiptDate}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {item.poReceiptDate}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {item.poStatus}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {item.noSKUsinPO}
                        </TableCell>
                        <TableCell>
                          <Typography fontSize={13} textAlign="center">
                            {item.noSKUsIrregular}
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
