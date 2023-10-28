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
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import "./StockReallocation.css";

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

  const isWithinChannel = useSelector((state) => state.sidebar.isWithinChannel);
  const referenceData = useSelector(
    (state) => state.sidebar.withinChannelData.other_rows
  );
  const referenceSuggData = useSelector(
    (state) => state.sidebar.withinChannelData.static_row
  );
  const stockreallocationData = useSelector(
    (state) => state.sidebar.stockreallocation.other_rows
  );
  const constraints = useSelector(
    (state) => state.sidebar.stockreallocation.constraints
  );
  const results = useSelector(
    (state) => state.sidebar.stockreallocation.results
  );
  const suggRecord = useSelector(
    (state) => state.sidebar.stockreallocation.static_row
  );

  const [suggectedRecord, setsuggectedRecord] = useState(suggRecord);

  const static_row = useSelector((state) => state.sidebar.suggectedRecord);
  // console.log(referenceSuggData);

  const channel = referenceSuggData.Channel;

  // const firstRecord = useState(referenceSuggData);
  // console.log(referenceSuggData);
  const firstRecord = JSON.parse(JSON.stringify(referenceSuggData));

  const filteredSamechannelResults = stockreallocationData.filter(
    (item) => item.Channel == channel
  );
  const getChannelData = () => {
    var result = isWithinChannel ? filteredSamechannelResults : referenceData;
    return result;
  };
  const dataSets = getChannelData();

  const initialData = dataSets.map((obj) => ({
    ...obj,
    testReallocation: "",
  }));
  const [data, setData] = useState(initialData);
  console.log(data.length);
  // const lengthofArray = Array.from({ length: data.length }, () => 0);
  // console.log(lengthofArray);
  const [inputValues, setInputValues] = useState(
    Array.from({ length: referenceData.length }, () => "")
  );
  console.log(inputValues);
  // const [dataFetched, setDataFetched] = useState(false);
  const [reset, serReset] = useState(false);
  useEffect(() => {
    const filterData = () => {
      const filteredData = isWithinChannel
        ? filteredSamechannelResults
        : referenceData;
      setData(filteredData);
      setsuggectedRecord(firstRecord);

      // referenceSuggData.testallocation = "";
      // setsuggectedRecord({});
    };

    filterData();
    if (reset) {
      setsuggectedRecord(firstRecord);
    }
  }, [isWithinChannel, stockreallocationData, referenceData, reset]);
  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    if (value > 0) {
      value = -value;
    }
    newInputValues[index] = value;
    console.log(newInputValues);
    setInputValues(newInputValues);
  };
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateResults = () => {
    // console.log(inputValues);
    var testallocation = 0;
    const updatedData = data.map((item, index) => {
      if (inputValues[index] !== "") {
        //current allocation//
        const currentallocation =
          item.currentallocation + parseInt(inputValues[index]);
        // proposed allocation //
        const proposedallocation =
          item.currentallocation + parseInt(inputValues[index]);
        //Remaining allocation //
        const remainingallocation = currentallocation - item.allocationconsumed;
        const aloocated_value =
          proposedallocation == 0 ? currentallocation : proposedallocation;
        const expectedservice = Math.min(
          (aloocated_value /
            Math.max(
              item["sif-atf"],
              item.sumofPOsinalloccycle + item.openorders
            )) *
            100,
          100
        );
        const expectedservicelevel =
          parseFloat(expectedservice.toFixed(2)) + "%";
        const updatedCustomerSOH = Math.max(
          item.currentcustSOH +
            item.allocationconsumed +
            remainingallocation -
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
          item.idealallocationvalues - aloocated_value;

        //Static row data update//
        testallocation += Math.abs(inputValues[index]);
        suggectedRecord.testReallocation = testallocation;

        suggectedRecord.newallocation =
          suggectedRecord.currentallocation + suggectedRecord.testReallocation;
        //calculate new allocated final value
        const newallocation_val =
          suggectedRecord.newallocation == 0
            ? suggectedRecord.currentallocation
            : suggectedRecord.newallocation;
        //remaining allocation
        suggectedRecord.remainingallocation =
          newallocation_val - suggectedRecord.allocationconsumed;

        const suggexpectedservice = Math.min(
          (newallocation_val /
            Math.max(
              suggectedRecord["sif-atf"],
              suggectedRecord.sumofPOsinalloccycle + suggectedRecord.openorders
            )) *
            100,
          100
        );

        suggectedRecord.expectedservicelevel =
          parseFloat(suggexpectedservice.toFixed(2)) + "%";

        suggectedRecord["custsoh-current"] = Math.max(
          suggectedRecord.currentcustSOH +
            suggectedRecord.allocationconsumed +
            suggectedRecord.remainingallocation -
            suggectedRecord["Sell out"],
          0
        );

        const suggupdatedCustomer =
          suggectedRecord["custsoh-current"] / suggectedRecord.AvgYTDsellout;
        suggectedRecord["custwoc-current"] = parseFloat(
          suggupdatedCustomer.toFixed(2)
        );

        // suggectedRecord.stocksafetoreallocate = Math.max(
        //   suggectedRecord.remainingallocation -
        //     Math.max(
        //       suggectedRecord["sif-atf"] - suggectedRecord.sumofPOsinalloccycle,
        //       suggectedRecord.openorders
        //     ),
        //   0
        // );

        suggectedRecord.suggestedallocation =
          suggectedRecord.idealallocationvalues - newallocation_val;

        setsuggectedRecord(suggectedRecord);
        // newInputValues[index] = value;
        // setInputValues((inputValues[index], ""));
        // handleInputChange(index, "");

        return {
          ...item,
          newallocation: proposedallocation,
          remainingallocation: remainingallocation,
          expectedservicelevel: expectedservicelevel,
          "custsoh-current": updatedCustomerSOH,
          "custwoc-current": updatedCustomerWOC,
          stocksafetoreallocate: stocksafetoreallocate,
          suggestedallocation: suggestedallocation,
        };
      } else {
        // handleInputChange(index, "");
        return item;
      }
    });
    setData(updatedData);
    const newInputValues = [...inputValues];
    for (let i = 0; i < newInputValues.length; i++) {
      newInputValues[i] = "";
      setInputValues(newInputValues);
    }
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
    serReset(true);
    setsuggectedRecord(firstRecord);
    const filteredData = isWithinChannel
      ? filteredSamechannelResults
      : referenceData;
    setData(filteredData);
    const newInputValues = [...inputValues];
    for (let i = 0; i < newInputValues.length; i++) {
      newInputValues[i] = "";
      setInputValues(newInputValues);
    }

    // handleInputChange(index, "");
  };
  return (
    <div style={{ border: "" }} id="captureMe">
      <TableContainer style={{ maxHeight: 445, width: "100%" }}>
        <Table stickyHeader className="stockReallocation">
          <TableHead>
            <TableRow>
              <TableCell className="stable-header">Customer</TableCell>
              <TableCell className="stable-header">Channel</TableCell>
              <TableCell className="stable-header">
                Sell-In Forecast <br />
                (S-OLA / Kinaxis)
              </TableCell>
              <TableCell className="stable-header">
                Current Allocation
              </TableCell>
              <TableCell className="stable-header">
                Proposed Allocation
              </TableCell>
              <TableCell className="stable-header">
                Allocation Consumed to Date
              </TableCell>
              <TableCell className="stable-header">
                Remaining Allocation
              </TableCell>
              <TableCell className="stable-header">
                Stock Safe to Reallocate
              </TableCell>
              <TableCell className="stable-header">
                Ideal Allocation Values
              </TableCell>
              <TableCell className="stable-header">
                Suggested Reallocation
              </TableCell>
              <TableCell className="stable-header">Open Orders</TableCell>
              <TableCell className="stable-header">
                Expected Weekly Service Level
              </TableCell>
              <TableCell className="stable-header">
                Customer SoH <br />
                (current / target)
              </TableCell>
              <TableCell className="stable-header">
                Customer WoC <br />
                (current / target)
              </TableCell>
              <TableCell className="stable-header">CMU Score</TableCell>
              <TableCell className="stable-header">Test Reallocation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(suggectedRecord).length > 0 && (
              <TableRow className="s-row1">
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
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
                    width: "90px",
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
                  <Box
                    display="flex"
                    sx={{ textAlign: "center", justifyContent: "center" }}
                  >
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
                  }}
                >
                  {suggectedRecord.newallocation}
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
                  <Box
                    display="flex"
                    sx={{ textAlign: "center", justifyContent: "center" }}
                  >
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
                  <Box
                    display="flex"
                    sx={{ textAlign: "center", justifyContent: "center" }}
                  >
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
                    // padding: "0px",
                  }}
                >
                  {suggectedRecord.testReallocation}
                </TableCell>
              </TableRow>
            )}
            {data.length == 0 && (
              <TableRow>
                <TableCell
                  colSpan={20}
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    color: "red",
                  }}
                >
                  No Alternate Retailers within Channel
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
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {item.Customer}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {item.Channel}
                </TableCell>
                <TableCell sx={{ width: "120px" }}>
                  <Box
                    display="flex"
                    sx={{
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
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
                <TableCell sx={{ textAlign: "center", padding: "0px" }}>
                  {item.newallocation}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.allocationconsumed}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.remainingallocation}
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
                <TableCell sx={{ textAlign: "center" }}>
                  {item.openorders}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.expectedservicelevel}
                </TableCell>
                <TableCell sx={{ width: "120px" }}>
                  <Box
                    display="flex"
                    sx={{
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
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
                <TableCell sx={{ width: "120px" }}>
                  <Box
                    display="flex"
                    sx={{
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
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
      <Orderinvestigation2 constraints={constraints} />
      <Grid>
        <Typography fontSize={24} mt="1px" color="#145A6C" my={1}>
          Results
        </Typography>

        <Stack
          mt="-35px"
          direction="row"
          height="120px"
          justifyContent="space-between"
          className="sa-stack"
        >
          <Box display="flex" sx={{ gap: "30px" }}>
            <Box className="sa-box">
              <Typography className="sa-h1"> {results[0].Name}</Typography>
              <Typography color="#008824" className="sa-h2">
                {" "}
                {results[0].Value}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            sx={{ width: "650px" }}
          >
            <Tooltip
              title="Run Optimization Model"
              arrow
              placement="top"
              // ml={{ lg: "-19px" }}
              onClick={handleUpdateResults}
            >
              <Button
                className="sa-boxbtn"
                variant="contained"
                endIcon={<FilterDramaOutlinedIcon />}
              >
                Run Optimization
              </Button>
            </Tooltip>
            <Tooltip
              title="Reallocate Suggested Supply"
              arrow
              placement="top"
              onClick={handleUpdateResults}
            >
              <Button
                className="sa-boxbtn"
                variant="contained"
                endIcon={<UpdateIcon />}
              >
                Update Results
              </Button>
            </Tooltip>
            <Tooltip
              title="Reset Results"
              arrow
              placement="top"
              onClick={handleResetResults}
            >
              <Button
                className="sa-boxbtn"
                variant="contained"
                endIcon={<RotateLeftIcon />}
              >
                Reset Results
              </Button>
            </Tooltip>
            <Tooltip
              title="Download this scenario"
              arrow
              placement="top"
              onClick={handleDownloadScreenCapture}
            >
              <Button
                className="sa-boxbtn"
                variant="contained"
                endIcon={<DownloadForOfflineIcon />}
              >
                Download
              </Button>
            </Tooltip>
          </Box>
        </Stack>
      </Grid>
    </div>
  );
};

export default StockReallocationData;
