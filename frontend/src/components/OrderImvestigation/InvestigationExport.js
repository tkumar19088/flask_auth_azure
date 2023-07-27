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
} from "@mui/material";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import "./Investigation.css";
import { useNavigate } from "react-router-dom";

import Backdrop from "@mui/material/Backdrop";

const InvestigationExport = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another URL
    navigate("/airwickelectrical");
  };

  const [data, setData] = useState([
    {
      skuname: "Airwick Electrical Lemon",
      skucode: "23434534693dlf1",
      risk: "10",
      expectednetrevenue: "(£5,749.00)",
      expectedola: "84%",
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Airwick Electrical Lemon",
      skucode: "23434534693dlf2",
      risk: "10",
      expectednetrevenue: "(£5,749.00)",
      expectedola: "84%",
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Airwick Electrical Lemon",
      skucode: "23434534693dlf3",
      risk: "10",
      expectednetrevenue: "(£5,749.00)",
      expectedola: "84%",
      costtoserve: "(£903.00)",
      reviewed: "No",
    },
    {
      skuname: "Airwick Electrical Lemon",
      skucode: "23434534693dlf4",
      risk: "10",
      expectednetrevenue: "(£5,749.00)",
      expectedola: "84%",
      costtoserve: "(£903.00)",
      reviewed: "No",
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
                  <Typography fontSize={12}>Back</Typography>
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
                      onClick={() => handleSort("skuname")}
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
                          <Typography fontSize={14} mt="7px">
                            SKU
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
                          <Typography fontSize={14} mt="7px">
                            SKU Code
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      onClick={() => handleSort("risk")}
                      sx={{ backgroundColor: "#E5EBEF" }}
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
                          <Typography sx={{ fontSize: "14px" }}>
                            Risk
                            <InfoOutlinedIcon
                              sx={{ height: "15px", color: "#415A6C" }}
                            />
                            <Typography ml="-11px" mt="-5px">
                              {" "}
                              (1-10)
                            </Typography>
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{ backgroundColor: "#E5EBEF" }}
                      onClick={() => handleSort("expectednetrevenue")}
                      style={{
                        cursor: "pointer",
                        textAlign: "center",
                        backgroundColor: "#E5EBEF",
                      }}
                    >
                      <Box
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
                          <Typography fontSize={14} lineHeight="16px" mt="4px">
                            Expected NetRevenue
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      onClick={() => handleSort("expectedola")}
                      sx={{ backgroundColor: "#E5EBEF", textAlign: "center" }}
                    >
                      <Box
                        mx="5px"
                        sx={{
                          display: "flex",
                          textAlign: "center",
                          color: "#415A6C",

                          width: "70px",
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
                          <Typography
                            fontSize={14}
                            mt="8px"
                            ml="-2px"
                            lineHeight="16px"
                          >
                            Expected OLA
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      onClick={() => handleSort("costtoserve")}
                      sx={{ backgroundColor: "#E5EBEF" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "center",
                          color: "#415A6C",

                          width: "90px",
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
                          <Typography
                            fontSize={14}
                            ml="-10px"
                            mt="7px"
                            lineHeight="16px"
                          >
                            Costs to Serve
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      onClick={() => handleSort("reviewed")}
                      sx={{ backgroundColor: "#E5EBEF", textAlign: "center" }}
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
                          <Typography fontSize={14} textAlign="center" mt="7px">
                            Reviewed
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "#E5EBEF" }}
                      onClick={() => handleSort("empty")}
                      style={{
                        cursor: "pointer",
                        textAlign: "center",
                        backgroundColor: "#E5EBEF",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "center",
                          color: "#415A6C",
                          width: "110px",
                        }}
                      ></Box>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item) => (
                    <TableRow
                      key={item.skucode}
                      // className={item.checkbox ? "checked-row" : ""}
                    >
                      <TableCell>{item.skuname}</TableCell>
                      <TableCell>
                        <Typography ml="-10px">{item.skucode}</Typography>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center", color: "#DD0000" }}>
                        <Typography
                          mx="12px"
                          sx={{
                            width: "30px",
                            backgroundColor: "#DD0000",
                            color: "#fff",
                            // marginLeft: "29px",
                            textAlign: "center",
                          }}
                        >
                          {" "}
                          {item.risk}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "#DD0000", textAlign: "center" }}>
                        <Typography sx={{ border: "", marginLeft: "" }}>
                          {item.expectednetrevenue}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "#F08C2A", textAlign: "center" }}>
                        <Typography sx={{ border: "", marginLeft: "25px" }}>
                          {item.expectedola}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "#DD0000", textAlign: "center" }}>
                        <Typography sx={{ border: "", marginLeft: "" }}>
                          {item.costtoserve}
                        </Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#F08C2A",
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            width: "30px",
                            backgroundColor: "#DD0000",
                            color: "#fff",
                            marginLeft: "29px",
                          }}
                        >
                          {" "}
                          {item.reviewed}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "#F08C2A", textAlign: "center" }}>
                        <Box display="flex">
                          <Box
                            ml="-50px"
                            sx={{
                              borderRadius: "5px 5px",
                              border: "1px solid #415A6C",
                              padding: "4px 4px 0px 6px",
                              display: "flex",
                              justifyContent: "space-around",
                              color: "#415A6C",
                              cursor: "pointer",
                            }}
                          >
                            <Typography
                            //  onClick={handleClick}
                            >
                              AMEND
                            </Typography>
                            <Typography>
                              <PlayArrowIcon sx={{ height: "21px" }} />
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
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

export default InvestigationExport;
