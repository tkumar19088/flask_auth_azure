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
  Stack,
  Grid,
} from "@mui/material";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Tooltip from "@mui/material/Tooltip";
import UpdateIcon from "@mui/icons-material/Update";
import FilterDramaOutlinedIcon from "@mui/icons-material/FilterDramaOutlined";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

import Orderinvestigation2 from "./Orderinvestigation2";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const StockReallocationData = ({ onData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [data, setData] = useState([]);

  const stockreallocationData = useSelector(
    (state) => state.sidebar.stockreallocation
  );
  const suggectedRecord = useSelector((state) => state.sidebar.suggectedRecord);
  const updateresults = useSelector((state) => state.sidebar.updateresults);
  const initialData = stockreallocationData.map((obj) => ({
    ...obj, // Copy the existing properties of the object
    testReallocation: "", // Add the new key-value pair
  }));
  // setData(results);
  const [data, setData] = useState(initialData);
  console.log(data);
  const [inputValues, setInputValues] = useState(initialData.map(() => ""));

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    if (value > 0) {
      value = -value;
    }
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateResults = () => {
    console.log(inputValues);
    var testallocation = 0;
    const updatedData = data.map((item, index) => {
      if (inputValues[index] !== "") {
        const currentallocation =
          item.currentallocation + parseInt(inputValues[index]);
        const remainingallocation = currentallocation - item.allocationconsumed;
        const expectedservice = Math.min(
          currentallocation /
            Math.max(
              item["sif-atf"],
              item.sumofPOsinalloccycle + item.openorders
            ),
          2
        );
        const expectedservicelevel = parseFloat(expectedservice.toFixed(2));
        const updatedCustomerSOH = Math.max(
          item.currentcustSOH +
            item.allocationconsumed +
            Math.min(remainingallocation, item.openorders) -
            item["Sell out"],
          0
        );
        const updatedCustomer = updatedCustomerSOH / item.AvgYTDsellout;
        const updatedCustomerWOC = parseFloat(updatedCustomer.toFixed(2));
        const stocksafetoreallocate = Math.max(
          remainingallocation -
            Math.max(
              item["sif-atf"] - item.sumofPOsinalloccycle,
              item.openorders
            ),
          0
        );
        const suggestedallocation =
          item.idealallocationvalues - currentallocation;

        //Static row data update//
        suggectedRecord.currentallocation =
          suggectedRecord.currentallocation - parseInt(inputValues[index]);
        suggectedRecord.remainingallocation =
          suggectedRecord.currentallocation -
          suggectedRecord.allocationconsumed;
        const suggexpectedservice = Math.min(
          suggectedRecord.currentallocation /
            Math.max(
              suggectedRecord["sif-atf"],
              suggectedRecord.sumofPOsinalloccycle + suggectedRecord.openorders
            ),
          2
        );
        suggectedRecord.expectedservicelevel = parseFloat(
          suggexpectedservice.toFixed(2)
        );
        suggectedRecord["custsoh-current"] = Math.max(
          suggectedRecord.currentcustSOH +
            suggectedRecord.allocationconsumed +
            Math.min(
              suggectedRecord.remainingallocation,
              suggectedRecord.openorders
            ) -
            suggectedRecord["Sell out"],
          0
        );
        const suggupdatedCustomer =
          suggectedRecord["custsoh-current"] / suggectedRecord.AvgYTDsellout;
        suggectedRecord["custwoc-current"] = parseFloat(
          suggupdatedCustomer.toFixed(2)
        );
        suggectedRecord.stocksafetoreallocate = Math.max(
          suggectedRecord.remainingallocation -
            Math.max(
              suggectedRecord["sif-atf"] - suggectedRecord.sumofPOsinalloccycle,
              suggectedRecord.openorders
            ),
          0
        );
        suggectedRecord.suggestedallocation =
          suggectedRecord.idealallocationvalues -
          suggectedRecord.currentallocation;
        testallocation += Math.abs(inputValues[index]);
        return {
          ...item,
          currentallocation: currentallocation,
          remainingallocation: remainingallocation,
          expectedservicelevel: expectedservicelevel,
          "custsoh-current": updatedCustomerSOH,
          "custwoc-current": updatedCustomerWOC,
          stocksafetoreallocate: stocksafetoreallocate,
          suggestedallocation: suggestedallocation,
        };
      } else {
        return item;
      }
    });
    suggectedRecord.testReallocation = testallocation;

    setData(updatedData);
  };

  // const [data, setData] = useState([
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.X",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "600",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.Y",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.Y",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.X",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.Y",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.X",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.Y",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.Y",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.Y",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  // ]);
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
    // setData(sortedData);
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
      // setData(updatedData);
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
      //setData(updatedData);
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

  const handleDownloadScreenCapture = () => {
    html2canvas(document.documentElement).then((canvas) => {
      const screenshotDataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = screenshotDataUrl;
      a.download = "screenshot.png";
      a.click();
    });
  };

  const handleResetResults = () => {
    setData(initialData);
  };
  return (
    <div style={{ border: "" }}>
      <TableContainer style={{ maxHeight: 462, width: "100%" }}>
        <Table stickyHeader className="stockReallocation">
          <TableHead>
            <TableRow>
              <TableCell className="stable-header">Customer</TableCell>
              <TableCell className="stable-header">Channel</TableCell>
              <TableCell className="stable-header">
                Sell-In Forecast <br />
                (Artefact vs Reckitt)
              </TableCell>
              <TableCell className="stable-header">
                Current Allocation
              </TableCell>
              <TableCell className="stable-header">
                Allocation consumed to date
              </TableCell>
              <TableCell className="stable-header">
                Remaining allocation
              </TableCell>
              <TableCell className="stable-header">Open orders</TableCell>
              <TableCell className="stable-header">
                Expected Service level
              </TableCell>
              <TableCell className="stable-header">
                Customer SOH <br />
                (current vs target)
              </TableCell>
              <TableCell className="stable-header">
                Customer WoC <br />
                (current vs target)
              </TableCell>
              <TableCell className="stable-header">CMU Score</TableCell>
              <TableCell className="stable-header">
                Stock safe to reallocate
              </TableCell>
              <TableCell className="stable-header">
                Ideal Allocation Values
              </TableCell>
              <TableCell className="stable-header">
                Suggested Reallocation
              </TableCell>
              <TableCell className="stable-header">
                Test reallocation scenario
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
            {data.length > 0 && (
              <TableRow className="s-row1">
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    // textAlign: "center",
                  }}
                >
                  <Typography fontSize={14}>
                    {suggectedRecord.Customer}
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.Channel}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={13}>
                      {suggectedRecord["sif-atf"]}
                    </Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {suggectedRecord["sif-reckitt"]}
                    </Typography>
                  </Box>
                </TableCell>{" "}
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.currentallocation}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                    width: 80,
                  }}
                >
                  {suggectedRecord.allocationconsumed}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.remainingallocation}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.openorders}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.expectedservicelevel}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography
                      fontSize={13}
                      sx={{
                        color:
                          suggectedRecord["custsoh-current"] >=
                          suggectedRecord["custsoh-target"]
                            ? "green"
                            : "red",
                      }}
                    >
                      {suggectedRecord["custsoh-current"]}
                    </Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        fontWeight: "600",
                        color: "#6e8c78",
                      }}
                    >
                      {suggectedRecord["custsoh-target"]}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography
                      fontSize={13}
                      sx={{
                        color:
                          suggectedRecord["custwoc-current"] >=
                          suggectedRecord["custwoc-target"]
                            ? "green"
                            : "red",
                      }}
                    >
                      {suggectedRecord["custwoc-current"]}
                    </Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        fontWeight: "600",
                        color: "#6e8c78",
                      }}
                    >
                      {suggectedRecord["custwoc-target"]}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.cmuscore}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.stocksafetoreallocate}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.idealallocationvalues}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.suggestedallocation}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                    // padding: "0px",
                  }}
                >
                  {suggectedRecord.testReallocation}
                </TableCell>
              </TableRow>
            )}

            {data.map((item, index) => (
              <TableRow
                key={item.skucode}
                className={item.checkbox ? "checked-row s-row2" : "s-row2"}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                }}
              >
                <TableCell>{item.Customer}</TableCell>
                <TableCell>{item.Channel}</TableCell>
                <TableCell>
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={13}>{item["sif-atf"]}</Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {item["sif-reckitt"]}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ textAlign: "center", padding: "0px" }}>
                  {item.currentallocation}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.allocationconsumed}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.remainingallocation}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.openorders}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.expectedservicelevel}
                </TableCell>
                <TableCell>
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography
                      fontSize={13}
                      sx={{
                        color:
                          item["custsoh-current"] >= item["custsoh-target"]
                            ? "green"
                            : "red",
                      }}
                    >
                      {item["custsoh-current"]}
                    </Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        fontWeight: "600",
                        color: "#6e8c78",
                      }}
                    >
                      {item["custsoh-target"]}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography
                      fontSize={13}
                      sx={{
                        color:
                          item["custwoc-current"] > item["custwoc-target"]
                            ? "green"
                            : "red",
                      }}
                    >
                      {item["custwoc-current"]}
                    </Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        fontWeight: "600",
                        color: "#6e8c78",
                      }}
                    >
                      {item["custwoc-target"]}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.cmuscore}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.stocksafetoreallocate}
                </TableCell>
                <TableCell sx={{ textAlign: "center", padding: "0px" }}>
                  {item.idealallocationvalues}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.suggestedallocation}
                </TableCell>
                <TableCell sx={{ textAlign: "center", padding: "0px" }}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        width: "10ch",
                        height: "2ch",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <input
                      type="number"
                      value={inputValues[index]}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Orderinvestigation2 />
      <Grid>
        <Typography fontSize={24} mt="1px" color="#145A6C" mx="3px">
          Results
        </Typography>

        <Stack
          mt="-30px"
          direction="row"
          //   backgroundColor="red"
          height="120px"
          justifyContent="space-between"
          className="sa-stack"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ width: "380px" }}
          >
            <Box className="sa-box">
              <Typography className="sa-h1">
                {" "}
                Average expected service level
              </Typography>
              <Typography color="#008824" className="sa-h2">
                {" "}
                £7,749.00
              </Typography>
            </Box>
            <Box className="sa-box">
              <Typography className="sa-h1"> Expected OLA</Typography>
              <Typography color="#008824" className="sa-h2">
                {" "}
                94%
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            sx={{ width: "730px" }}
          >
            <Tooltip
              title="Reallocate Suggested Supply"
              arrow
              placement="top-start"
              // ml={{ lg: "-19px" }}
              onClick={handleUpdateResults}
            >
              <Box className="sa-boxbtn">
                Run Optimization
                <FilterDramaOutlinedIcon className="btn-refresh" />
              </Box>
            </Tooltip>
            <Tooltip
              title="Reallocate Suggested Supply"
              arrow
              placement="top-start"
              // ml={{ lg: "-19px" }}
              onClick={handleUpdateResults}
            >
              <Box className="sa-boxbtn">
                Update results
                <UpdateIcon className="btn-refresh" />
              </Box>
            </Tooltip>
            <Tooltip
              title="Reallocate Suggested Supply"
              arrow
              placement="top-start"
              // ml={{ lg: "-19px" }}
            >
              <Box className="sa-boxbtn" onClick={handleResetResults}>
                Reset results
                <RotateLeftIcon className="btn-refresh" />
              </Box>
            </Tooltip>
            <Tooltip
              title="Download this scenario"
              arrow
              placement="top-start"
              // ml={{ lg: "-19px" }}
            >
              <Box className="sa-boxbtn" onClick={handleDownloadScreenCapture}>
                Download
                <DownloadForOfflineIcon className="btn-download" />
              </Box>
            </Tooltip>
          </Box>
        </Stack>
      </Grid>
    </div>
  );
};

export default StockReallocationData;
