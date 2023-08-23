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
} from "@mui/material";
import { useState } from "react";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TextField from "@mui/material/TextField";

// import "./DataTable.css";

import { useNavigate } from "react-router-dom";
import StockReallocation from "./StockReallocation";
import { TextRotationAngledown } from "@mui/icons-material";
// import MyBreadcrumbs from "./MyBreadcrumbs";

const StockReallocationData = ({ onData }) => {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      customer: "Amazon",
      channel: "Pureplay",
      sellinforecastartefact: "300",
      sellinforecastreckitt: "500",
      currentallocation: "200",
      allcConsumedDate: "50",
      remAllocation: "150",
      openOrders: "50",
      expectServiceLevel: "100%",
      custSohcurrent: "500",
      custSohTarget: "600",
      custWoccurrent: "300",
      custWocTarget: "400",
      price: "£6.00",
      cmuScore: "4.4",
      stockSafeRealloc: "100",
      suggAlloc: "100",
      testReallocation: "20",
    },
    {
      customer: "Amazon",
      channel: "Pureplay",
      sellinforecastartefact: "300",
      sellinforecastreckitt: "500",
      currentallocation: "200",
      allcConsumedDate: "50",
      remAllocation: "150",
      openOrders: "50",
      expectServiceLevel: "100%",
      custSohcurrent: "500",
      custSohTarget: "600",
      custWoccurrent: "300",
      custWocTarget: "400",
      price: "£6.00",
      cmuScore: "4.4",
      stockSafeRealloc: "100",
      suggAlloc: "100",
      testReallocation: "20",
    },
    {
      customer: "Amazon",
      channel: "Pureplay",
      sellinforecastartefact: "300",
      sellinforecastreckitt: "500",
      currentallocation: "200",
      allcConsumedDate: "50",
      remAllocation: "150",
      openOrders: "50",
      expectServiceLevel: "100%",
      custSohcurrent: "500",
      custSohTarget: "600",
      custWoccurrent: "300",
      custWocTarget: "400",
      price: "£6.00",
      cmuScore: "4.4",
      stockSafeRealloc: "100",
      suggAlloc: "100",
      testReallocation: "20",
    },
    {
      customer: "Amazon",
      channel: "Pureplay",
      sellinforecastartefact: "300",
      sellinforecastreckitt: "500",
      currentallocation: "200",
      allcConsumedDate: "50",
      remAllocation: "150",
      openOrders: "50",
      expectServiceLevel: "100%",
      custSohcurrent: "500",
      custSohTarget: "600",
      custWoccurrent: "300",
      custWocTarget: "400",
      price: "£6.00",
      cmuScore: "4.4",
      stockSafeRealloc: "100",
      suggAlloc: "100",
      testReallocation: "20",
    },
    {
      customer: "Amazon",
      channel: "Pureplay",
      sellinforecastartefact: "300",
      sellinforecastreckitt: "500",
      currentallocation: "200",
      allcConsumedDate: "50",
      remAllocation: "150",
      openOrders: "50",
      expectServiceLevel: "100%",
      custSohcurrent: "500",
      custSohTarget: "600",
      custWoccurrent: "300",
      custWocTarget: "400",
      price: "£6.00",
      cmuScore: "4.4",
      stockSafeRealloc: "100",
      suggAlloc: "100",
      testReallocation: "20",
    },
    {
      customer: "Amazon",
      channel: "Pureplay",
      sellinforecastartefact: "300",
      sellinforecastreckitt: "500",
      currentallocation: "200",
      allcConsumedDate: "50",
      remAllocation: "150",
      openOrders: "50",
      expectServiceLevel: "100%",
      custSohcurrent: "500",
      custSohTarget: "600",
      custWoccurrent: "300",
      custWocTarget: "400",
      price: "£6.00",
      cmuScore: "4.4",
      stockSafeRealloc: "100",
      suggAlloc: "100",
      testReallocation: "20",
    },
    {
      customer: "Amazon",
      channel: "Pureplay",
      sellinforecastartefact: "300",
      sellinforecastreckitt: "500",
      currentallocation: "200",
      allcConsumedDate: "50",
      remAllocation: "150",
      openOrders: "50",
      expectServiceLevel: "100%",
      custSohcurrent: "500",
      custSohTarget: "600",
      custWoccurrent: "300",
      custWocTarget: "400",
      price: "£6.00",
      cmuScore: "4.4",
      stockSafeRealloc: "100",
      suggAlloc: "100",
      testReallocation: "20",
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
    <div style={{ border: "" }}>
      <TableContainer style={{ maxHeight: 425, width: "100%" }}>
        <Table stickyHeader className="stockReallocation">
          <TableHead>
            <TableRow>
              <TableCell
                style={{ textAlign: "center", border: "1px solid #dcdcdc" }}
                className="sr-header"
              >
                Customer
              </TableCell>
              <TableCell
                style={{ textAlign: "center", border: "1px solid #dcdcdc" }}
                className="sr-header"
              >
                Channel
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  width: "140px",
                }}
                className="sr-header"
              >
                Sell-In Forecast
                <br />
                (Artefact vs Reckitt)
              </TableCell>
              <TableCell
                style={{ textAlign: "center", border: "1px solid #dcdcdc" }}
                className="sr-header"
              >
                Current Allocation
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  width: "130px",
                }}
                className="sr-header"
              >
                Allocation consumed to date
              </TableCell>
              <TableCell
                style={{ textAlign: "center", border: "1px solid #dcdcdc" }}
                className="sr-header"
              >
                Remaining allocation
              </TableCell>
              <TableCell
                style={{ textAlign: "center", border: "1px solid #dcdcdc" }}
                className="sr-header"
              >
                Open orders
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  width: "90px",
                }}
                className="sr-header"
              >
                Expected Service level
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                  width: "120px",
                  border: "1px solid #dcdcdc",
                }}
                className="sr-header"
              >
                Customer SOH <br />
                (current vs target)
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                  width: "120px",
                  border: "1px solid #dcdcdc",
                }}
                className="sr-header"
              >
                Customer WoC <br />
                (current vs target)
              </TableCell>
              <TableCell
                style={{ textAlign: "center", border: "1px solid #dcdcdc" }}
                className="sr-header"
              >
                Price
              </TableCell>
              <TableCell
                style={{ textAlign: "center", border: "1px solid #dcdcdc" }}
                className="sr-header"
              >
                CMU Score
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  width: "90px",
                }}
                className="sr-header"
              >
                Stock safe to reallocate
              </TableCell>
              <TableCell
                style={{ textAlign: "center", border: "1px solid #dcdcdc" }}
                className="sr-header"
              >
                Suggested Allocation
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  width: "110px",
                }}
                className="sr-header"
              >
                Test reallocation scenario
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={data[0].skucode}
              className={data[0].checkbox ? "checked-row" : ""}
              style={{
                backgroundColor: "rgb(198 223 215)",
              }}
            >
              <TableCell>{data[0].customer}</TableCell>
              <TableCell>{data[0].channel}</TableCell>
              <TableCell>
                <Box display="flex" sx={{ marginLeft: "50px" }}>
                  <Typography fontSize={15}>
                    {data[0].sellinforecastartefact}
                  </Typography>
                  <Typography
                    fontSize={13}
                    sx={{
                      marginLeft: "12px",
                      marginTop: "10px",
                      color: "#6e8c78",
                    }}
                  >
                    {data[0].sellinforecastreckitt}
                  </Typography>
                </Box>
              </TableCell>{" "}
              <TableCell>{data[0].currentallocation}</TableCell>
              <TableCell>{data[0].allcConsumedDate}</TableCell>
              <TableCell>{data[0].remAllocation}</TableCell>
              <TableCell>{data[0].openOrders}</TableCell>
              <TableCell>{data[0].expectServiceLevel}</TableCell>
              <TableCell>
                <Box display="flex" sx={{ marginLeft: "50px" }}>
                  <Typography
                    fontSize={15}
                    sx={{
                      color:
                        data[0].custSohcurrent > data[0].custSohTarget
                          ? "black"
                          : "red",
                    }}
                  >
                    {data[0].custSohcurrent}
                  </Typography>
                  <Typography
                    fontSize={13}
                    sx={{
                      marginLeft: "12px",
                      marginTop: "10px",
                      color: "#6e8c78",
                    }}
                  >
                    {data[0].custSohTarget}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" sx={{ marginLeft: "50px" }}>
                  <Typography
                    fontSize={15}
                    sx={{
                      color:
                        data[0].custWoccurrent > data[0].custWocTarget
                          ? "black"
                          : "red",
                    }}
                  >
                    {data[0].custWoccurrent}
                  </Typography>
                  <Typography
                    fontSize={13}
                    sx={{
                      marginLeft: "12px",
                      marginTop: "10px",
                      color: "#6e8c78",
                    }}
                  >
                    {data[0].custWocTarget}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>{data[0].price}</TableCell>
              <TableCell>{data[0].cmuScore}</TableCell>
              <TableCell>{data[0].stockSafeRealloc}</TableCell>
              <TableCell>{data[0].suggAlloc}</TableCell>
              <TableCell>{data[0].testReallocation}</TableCell>
            </TableRow>
            {data.map((item, index) => (
              <TableRow
                key={item.skucode}
                className={item.checkbox ? "checked-row" : ""}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                }}
              >
                <TableCell>{item.customer}</TableCell>
                <TableCell>{item.channel}</TableCell>
                <TableCell>
                  <Box display="flex" sx={{ marginLeft: "50px" }}>
                    <Typography fontSize={15}>
                      {item.sellinforecastartefact}
                    </Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {item.sellinforecastreckitt}
                    </Typography>
                  </Box>
                </TableCell>{" "}
                <TableCell>{item.currentallocation}</TableCell>
                <TableCell>{item.allcConsumedDate}</TableCell>
                <TableCell>{item.remAllocation}</TableCell>
                <TableCell>{item.openOrders}</TableCell>
                <TableCell>{item.expectServiceLevel}</TableCell>
                <TableCell>
                  <Box display="flex" sx={{ marginLeft: "50px" }}>
                    <Typography
                      fontSize={15}
                      sx={{
                        color:
                          item.custSohcurrent > item.custSohTarget
                            ? "#6e8c78"
                            : "red",
                      }}
                    >
                      {item.custSohcurrent}
                    </Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {item.custSohTarget}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" sx={{ marginLeft: "50px" }}>
                    <Typography
                      fontSize={15}
                      sx={{
                        color:
                          item.custWoccurrent > item.custWocTarget
                            ? "#6e8c78"
                            : "red",
                      }}
                    >
                      {item.custWoccurrent}
                    </Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {item.custWocTarget}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.cmuScore}</TableCell>
                <TableCell>{item.stockSafeRealloc}</TableCell>
                <TableCell>{item.suggAlloc}</TableCell>
                <TableCell>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        width: "10ch",
                        height: "3ch",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <input type="number" name="testReallocation" />
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

export default StockReallocationData;
