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

const Irregularpo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    scroll.scrollToTop(); // Scrolls to the top of the page when the component mounts
  }, []);

  const handleClick = () => {
    navigate("/airwickelectrical");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const data = [
    {
      id: 1,
      poNumber: "PO no 123",
      poReceiptDate: "20-07-2023",
      poStatus: "Yes",
      noSKUsinPO: 10,
      noSKUsIrregular: 20,
      totalForecastedRevenue: "£12,246.43",
      totalPORevenue: "£50,246.43",
      irregularPO: "Yes",
      details: [
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
      ],
    },
    {
      id: 2,
      poNumber: "PO no 500",
      poReceiptDate: "10-07-2023",
      poStatus: "Yes",
      noSKUsinPO: 20,
      noSKUsIrregular: 40,
      totalForecastedRevenue: "£56,246.43",
      totalPORevenue: "£78,246.43",
      irregularPO: "Yes",
      details: [
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
                  // cursor: "pointer",
                }}
                style={{
                  // cursor: "pointer",
                  textAlign: "center",
                  backgroundColor: "#E5EBEF",
                }}
              >
                <Box
                  className="bdr-sku"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    width: "110px",
                    marginLeft: "-20px",
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
              <TableCell
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
                      SKU Code
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
            <TableCell sx={{ textAlign: "center", backgroundColor: "#E5EBEF" }}>
              <Box className="bdr-timeframe">
                <Typography
                  lineHeight="16px"
                  sx={{ fontSize: "14px", color: "#415A6C" }}
                >
                  TimeFrame <br />
                  (weeks)
                </Typography>
              </Box>
            </TableCell>
            <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
              <Box
                className="bdr-netrevenue"
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
                    Net Revenue
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
                <Box textAlign="center" mt="3px" mx="-10px">
                  <Typography fontSize={14} lineHeight="16px" mt="3px">
                    Expected OLA
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
              <Box
                className="bdr-servicelevel"
                sx={{
                  display: "flex",
                  textAlign: "center",
                  color: "#415A6C",
                  // marginLeft: "-25px",
                  width: "65px",
                }}
              >
                <Box mx="-5px">
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
                <Box textAlign="center" mt="3px" mx="-10px">
                  <Typography fontSize={14} lineHeight="16px" mt="3px">
                    Service Level{" "}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell
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
                  Expected NetRevenue
                </Typography>
              </Box>
            </TableCell>
            <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
              <Box
                className="bdr-bestseller"
                sx={{
                  display: "flex",
                  textAlign: "center",
                  color: "#415A6C",
                  // marginLeft: "-20px",
                  width: "46px",
                }}
              >
                <Box sx={{ marginRight: "" }}>
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
                <Box textAlign="center" mt="1px" mx="-6px">
                  <Typography lineHeight="16px" mt="6px" fontSize={14}>
                    Best Seller
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
              <Box
                className="bdr-risk"
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
                    <InfoOutlinedIcon sx={{ height: "15px", color: "red" }} />
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
          {details.map((item, index) => (
            <TableRow
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
              }}
            >
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
              <TableCell>
                <Typography ml="-8px" fontSize="13px">
                  {item.skucode}
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
              <TableCell
                sx={{ textAlign: "center", color: "red", fontSize: "13px" }}
              >
                {item.risk}
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
        <Grid
          item
          xs={10}
          p={3}
          sx={{
            backgroundColor: "#F5F6F8",
            Height: 870,
          }}
        >
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
              <Typography fontSize={14}>Overview High-Risk SKUs</Typography>
            </Box>
            <Box mt="20px" mx="1px">
              <Typography fontSize={28} color="#415A6C">
                Order Investigation
              </Typography>
            </Box>
            <TableContainer style={{ maxHeight: 732, width: "100%" }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ backgroundColor: "#E5EBEF" }}
                      style={{
                        cursor: "pointer",
                        textAlign: "center",
                        backgroundColor: "#E5EBEF",
                      }}
                    >
                      <Box
                        ml="5px"
                        sx={{
                          display: "flex",
                          textAlign: "center",
                          color: "#415A6C",
                          width: "110px",
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
                            PO No
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
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
                            PO Receipt date
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
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
                            PO Status
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
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
                            No. SKUs in PO
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
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
                            No.Irregular SKUs
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
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
                            Total forecasted Revenue
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
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
                            Total PO Revenue
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ backgroundColor: "#E5EBEF" }}>
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
                            Irregular PO
                          </Typography>
                        </Box>
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
                        <TableCell fontSize={13}>{item.poNumber}</TableCell>
                        <TableCell>
                          <Typography fontSize={13} ml="-10px">
                            {item.poReceiptDate}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography fontSize={13} ml="-10px">
                            {item.poStatus}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography fontSize={13} ml="-10px">
                            {item.noSKUsinPO}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography fontSize={13} ml="-10px">
                            {item.noSKUsIrregular}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography fontSize={13} ml="-10px">
                            {item.totalForecastedRevenue}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography fontSize={13} ml="-10px">
                            {item.totalPORevenue}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography fontSize={13} ml="-10px">
                            {item.irregularPO}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      {expandedRow === item.id && (
                        <TableRow>
                          <TableCell colSpan={2}>
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
