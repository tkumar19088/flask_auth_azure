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
import {
  updateloader,
  updateerrortextmessage,
  updateerrormodalpopup,
  fetchstockreallocatedata,
  updatewithinchanneldata,
  fetchstaticrow,
  updateexporttabledata,
} from "../../store/actions/sidebarActions";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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
  const constraintsData = useSelector(
    (state) => state.sidebar.stockreallocation.constraints
  );
  const [constraints, setconstraints] = useState(constraintsData);

  const resultsData = useSelector(
    (state) => state.sidebar.stockreallocation.results
  );
  const [results, setresults] = useState(resultsData);

  const suggRecord = useSelector(
    (state) => state.sidebar.stockreallocation.static_row
  );

  const [suggectedRecord, setsuggectedRecord] = useState(suggRecord);

  const channel = referenceSuggData.Channel;
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
  // console.log(data.length);
  // const lengthofArray = Array.from({ length: data.length }, () => 0);
  // console.log(lengthofArray);
  const [inputValues, setInputValues] = useState(
    Array.from({ length: referenceData.length }, () => "")
  );
  // console.log(inputValues);
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
    // setconstraints(constraintsData);
  }, [isWithinChannel, stockreallocationData, referenceData, reset]);
  const handleInputChange = (index, value, remainingallocation) => {
    const newInputValues = [...inputValues];
    value = Math.abs(value);
    // if (value > 0) {
    //   value = -value;
    // }
    value = Math.min(parseInt(value), remainingallocation);
    newInputValues[index] = -value;
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
  };

  // const suggRecord = JSON.parse(JSON.stringify(referenceSuggData));

  const [weeksOnConv, setweeksOnConv] = useState(constraints[3].Value);
  const [minweeksOnConv, setminweeksOnConv] = useState(constraints[2].Value);
  const [expectedservice, setexpectedservice] = useState(constraints[1].Value);
  const [pctdeviation, setpctdeviation] = useState(constraints[0].Value);

  const handleweeksOnCovUp = (e) => {
    setweeksOnConv(e.target.value);
  };
  const handleminweeksOnCovUp = (e) => {
    setminweeksOnConv(e.target.value);
  };
  const handleExpectedserviceUp = (e) => {
    const value = Math.min(parseInt(e.target.value), 100);
    setexpectedservice(value);
  };
  const handlePCTDeviationUp = (e) => {
    const value = Math.min(parseInt(e.target.value), 100);
    setpctdeviation(value);
  };
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDateTime = `${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${now.getDate().toString().padStart(2, "0")}/${now
        .getFullYear()
        .toString()
        .slice(2)
        .padStart(2, "0")} ${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handleOptimization = async () => {
    dispatch(updateloader(true));
    var data = {
      rbsku: parseInt(suggRecord["RB SKU"]),
      MINIMUM_SERVICE_LEVEL: parseInt(expectedservice),
      ALLOCATION_CHANGE_THRESHOLD: parseInt(pctdeviation),
      WOC_MIN: parseInt(minweeksOnConv),
      WOC_MAX: parseInt(weeksOnConv),
    };
    try {
      const url = "http://localhost:5000/runoptimizemodel";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const info = await response.json();
        const json = info.data;
        if (info.status === "success") {
          console.log(json);
          dispatch(fetchstockreallocatedata(json));
          dispatch(updatewithinchanneldata(json));
          dispatch(fetchstaticrow(json.static_row));
          dispatch(updateexporttabledata(json.other_rows));

          setconstraints(json.constraints);
          setweeksOnConv(json.constraints[3].Value);
          setminweeksOnConv(json.constraints[2].Value);
          setexpectedservice(json.constraints[1].Value);
          setpctdeviation(json.constraints[0].Value);
          setresults(json.results);
        } else {
          dispatch(updateerrortextmessage(info.message));
          dispatch(updateerrormodalpopup(true));
        }
      } else {
        dispatch(updateerrortextmessage(response.statusText));
        dispatch(updateerrormodalpopup(true));
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
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
                Expected Allocation Consumption
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
              <TableCell className="stable-header">Exp Weekly SL (%)</TableCell>
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
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          e.target.value,
                          item.remainingallocation
                        )
                      }
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack>
        <Box display="flex" className="sg-main" mt="10px">
          <Box className="sg-title">
            Scenario Generation:{" "}
            {suggRecord["RB SKU"] ? suggRecord["RB SKU"] : ""} :&nbsp;
            {suggRecord.Customer ? suggRecord.Customer : ""}
          </Box>
          <Box display="flex" marginTop="2px">
            <Typography>
              <VisibilityOutlinedIcon
                sx={{
                  height: "18px",
                  width: "40px",
                  marginTop: "2px",
                }}
              />
            </Typography>
            <Typography fontSize={14}>{currentDateTime}</Typography>
          </Box>
        </Box>
      </Stack>
      <Typography fontSize={24} color="#145A6C" mx="3px" marginBottom="10px">
        Constraints (Optional)
      </Typography>

      <Stack direction="row" border="">
        <div
          style={{
            display: "flex",
            borderRadius: "5px",
            backgroundColor: "#fff",
            padding: "15px",
            gap: "40px",
          }}
        >
          <Box className="const-bs1" borderRight="1px solid #dcdcdc">
            <Box display="flex" sx={{ color: "#415A6C" }}>
              <Typography className="constains-h1">
                {constraints[0].Name}
              </Typography>{" "}
              <Typography>
                <Tooltip
                  placement="top"
                  arrow
                  title="This constraint determines the maximum allowable deviation from the initial allocation that the reallocation engine can suggest."
                >
                  <InfoOutlinedIcon
                    sx={{
                      height: "22px",
                      marginTop: { lg: "0px", xs: "1px" },
                      marginLeft: "5px",
                    }}
                  />
                </Tooltip>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <input
                type="number"
                value={pctdeviation}
                onChange={handlePCTDeviationUp}
                style={{
                  height: "38px",
                  width: "80px",
                  textAlign: "center",
                  color: "#008824",
                  fontSize: "17px",
                  marginTop: "5px",
                  border: "1px solid #E7E9EE",
                  borderRadius: "5PX",
                  boxSizing: "border-box",
                }}
              />
              <Box
                border=""
                textAlign="center"
                mx={{ lg: "10px", xs: "10px" }}
                mt="5px"
              >
                <Typography
                  sx={{
                    width: { lg: "100px", xs: "70px" },
                    borderRadius: "18px 18px",
                    backgroundColor:
                      constraints[0].Label == 0
                        ? "#F44444"
                        : constraints[0].Label == 1
                        ? "orange"
                        : "#57a957",
                    color: "#fff",
                    padding: "2px 8px 2px 8px",
                  }}
                  fontSize={{ lg: 12, xs: 8 }}
                >
                  {constraints[0].Label == 0
                    ? "Not Satisfied"
                    : constraints[0].Label == 1
                    ? "Partially Satisfied"
                    : "Fully Satisfied"}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="const-bs2" borderRight="1px solid #dcdcdc">
            <Box display="flex" width="370px" sx={{ color: "#415A6C" }}>
              <Typography className="constains-h1">
                {constraints[1].Name}
              </Typography>
              <Typography>
                <Tooltip
                  placement="top"
                  arrow
                  title="This constraint establishes the minimum expected service level for any individual customer and restricts the maximum quantity of stock that can be reallocated from a customer."
                >
                  <InfoOutlinedIcon
                    sx={{
                      height: "22px",
                      marginTop: { lg: "0px", xs: "0px" },
                      marginLeft: "8px",
                    }}
                  />
                </Tooltip>
              </Typography>
            </Box>

            <Box display="flex">
              <input
                type="number"
                value={expectedservice}
                onChange={handleExpectedserviceUp}
                style={{
                  height: "38px",
                  width: "80px",
                  textAlign: "center",
                  color: "#008824",
                  fontSize: "17px",
                  marginTop: "5px",
                  border: "1px solid #E7E9EE",
                  borderRadius: "5PX",
                  boxSizing: "border-box",
                }}
              />
              <Box border="" textAlign="center" mx={{ lg: "10px", xs: "10px" }}>
                <Typography
                  mt={{ lg: "13px", xs: "10px" }}
                  sx={{
                    width: { lg: "100px", xs: "70px" },
                    borderRadius: "18px 18px",
                    backgroundColor:
                      constraints[1].Label == 0
                        ? "#F44444"
                        : constraints[1].Label == 1
                        ? "orange"
                        : "#57a957",
                    color: "#fff",
                    padding: "2px 8px 2px 8px",
                  }}
                  fontSize={{ lg: 12, xs: 8 }}
                >
                  {constraints[1].Label == 0
                    ? "Not Satisfied"
                    : constraints[1].Label == 1
                    ? "Partially Satisfied"
                    : "Fully Satisfied"}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="const-bs3">
            <Box
              display="flex"
              width="400px"
              mx={7}
              sx={{ color: "#415A6C" }}
              marginLeft={0}
            >
              <Typography className="constains-h1">
                {constraints[2].Name}
              </Typography>
              <Typography>
                <Tooltip
                  placement="top"
                  arrow
                  title="This constraint defines the minimum and maximum stock that can be reallocated to any one customer based on resultant deviation from the customer target stock level."
                >
                  <InfoOutlinedIcon
                    sx={{
                      height: "22px",
                      marginTop: { lg: "0px", xs: "1px" },
                      marginLeft: "8px",
                    }}
                  />
                </Tooltip>
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              mx={{ lg: 0, xs: "-10px" }}
              marginTop="1%"
            >
              <Box display="flex">
                <Typography
                  margin="auto"
                  marginRight="3px"
                  fontSize={{ lg: 13, xs: 10 }}
                >
                  Min
                </Typography>
                <input
                  type="number"
                  value={minweeksOnConv}
                  onChange={handleminweeksOnCovUp}
                  style={{
                    height: "38px",
                    width: "80px",
                    textAlign: "center",
                    color: "#008824",
                    fontSize: "17px",
                    border: "1px solid #E7E9EE",
                    borderRadius: "5PX",
                    boxSizing: "border-box",
                  }}
                />
              </Box>
              <Box display="flex" border="" mx={{ lg: "10px", xs: "7px" }}>
                <Typography
                  margin="auto"
                  marginRight="3px"
                  fontSize={{ lg: 13, xs: 10 }}
                >
                  Max
                </Typography>
                <input
                  type="number"
                  value={weeksOnConv}
                  onChange={handleweeksOnCovUp}
                  style={{
                    height: "38px",
                    width: "80px",
                    textAlign: "center",
                    color: "#008824",
                    fontSize: "17px",
                    border: "1px solid #E7E9EE",
                    borderRadius: "5PX",
                    boxSizing: "border-box",
                  }}
                />
              </Box>
              <Box
                border=""
                textAlign="center"
                mx={{ lg: "3px", xs: "0px" }}
                marginRight={{ lg: "60px", xs: "0px" }}
                mt="1px"
              >
                <Typography
                  mt={{ lg: "8px", xs: "10px" }}
                  sx={{
                    width: { lg: "100px", xs: "70px" },
                    borderRadius: "18px 18px",
                    backgroundColor:
                      constraints[3].Label == 0
                        ? "#F44444"
                        : constraints[3].Label == 1
                        ? "orange"
                        : "#57a957",
                    color: "#fff",
                    padding: "2px 8px 2px 8px",
                  }}
                  fontSize={{ lg: 12, xs: 8 }}
                >
                  {constraints[3].Label == 0
                    ? "Not Satisfied"
                    : constraints[3].Label == 1
                    ? "Partially Satisfied"
                    : "Fully Satisfied"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </Stack>
      <Grid>
        <Typography fontSize={24} mt="1px" color="#145A6C" my="10px">
          Results
        </Typography>

        <Stack
          mt="-35px"
          direction="row"
          height="120px"
          justifyContent="space-between"
          className="sa-stack"
        >
          <Box display="flex" sx={{ gap: "30px", marginTop: "6px" }}>
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
            sx={{ width: "650px", marginTop: "25px" }}
          >
            <Tooltip
              title="Run Optimization Model"
              arrow
              placement="top"
              // ml={{ lg: "-19px" }}
              onClick={handleOptimization}
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
