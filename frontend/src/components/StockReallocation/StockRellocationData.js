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
    (state) => state.sidebar.withinChannelData.otherrows
  );
  const referenceSuggData = useSelector(
    (state) => state.sidebar.withinChannelData.staticrow
  );
  const stockreallocationData = useSelector(
    (state) => state.sidebar.stockreallocation.otherrows
  );
  const constraints = useSelector(
    (state) => state.sidebar.stockreallocation.constraints
  );
  const results = useSelector(
    (state) => state.sidebar.stockreallocation.results
  );
  const suggRecord = useSelector(
    (state) => state.sidebar.stockreallocation.staticrow
  );
  const [suggectedRecord, setsuggectedRecord] = useState(suggRecord);

  // const stockreallocationData = [
  //   {
  //     AvgYTDsellout: 200,
  //     Brand: "Airwick",
  //     Channel: "Pure Play",
  //     Customer: "Ocado",
  //     Location: "United Kingdom",
  //     "RB SKU": "3247398",
  //     "Sell out": 200,
  //     "Supply to Reallocate": 0,
  //     allocationconsumed: 904,
  //     cmuscore: 4.5,
  //     currentallocation: 1306.5,
  //     currentcustSOH: 7034.0,
  //     "custsoh-current": 6020,
  //     "custsoh-target": 10452,
  //     "custwoc-current": 35.17,
  //     "custwoc-target": 6,
  //     expectedservicelevel: "75%",
  //     idealallocationvalues: 0,
  //     newallocation: 0,
  //     openorders: 310,
  //     remainingallocation: 402.5,
  //     "sif-atf": 900,
  //     "sif-reckitt": 1742,
  //     stocksafetoreallocate: 0,
  //     suggestedallocation: -1306.5,
  //     sumofPOsinalloccycle: 904,
  //   },
  //   {
  //     AvgYTDsellout: 100,
  //     Brand: "Airwick",
  //     Channel: "Grocery",
  //     Customer: "Asda",
  //     Location: "United Kingdom",
  //     "RB SKU": "3247398",
  //     "Sell out": 100,
  //     "Supply to Reallocate": 0,
  //     allocationconsumed: 1230,
  //     cmuscore: 5.0,
  //     currentallocation: 1802.0,
  //     currentcustSOH: 6234.0,
  //     "custsoh-current": 5002,
  //     "custsoh-target": 5520,
  //     "custwoc-current": 62.34,
  //     "custwoc-target": 3,
  //     expectedservicelevel: "98%",
  //     idealallocationvalues: 0,
  //     newallocation: 0,
  //     openorders: 102,
  //     remainingallocation: 572.0,
  //     "sif-atf": 900,
  //     "sif-reckitt": 1840,
  //     stocksafetoreallocate: 0,
  //     suggestedallocation: -1802.0,
  //     sumofPOsinalloccycle: 1230,
  //   },
  //   {
  //     AvgYTDsellout: 200,
  //     Brand: "Airwick",
  //     Channel: "Grocery",
  //     Customer: "Waitrose",
  //     Location: "United Kingdom",
  //     "RB SKU": "3247398",
  //     "Sell out": 300,
  //     "Supply to Reallocate": 0,
  //     allocationconsumed: 1024,
  //     cmuscore: 3.2,
  //     currentallocation: 2004.0,
  //     currentcustSOH: 5135.0,
  //     "custsoh-current": 4359,
  //     "custsoh-target": 3128,
  //     "custwoc-current": 25.675,
  //     "custwoc-target": 2,
  //     expectedservicelevel: "100%",
  //     idealallocationvalues: 0,
  //     newallocation: 0,
  //     openorders: 52,
  //     remainingallocation: 980.0,
  //     "sif-atf": 900,
  //     "sif-reckitt": 1564,
  //     stocksafetoreallocate: 440,
  //     suggestedallocation: -2004.0,
  //     sumofPOsinalloccycle: 1024,
  //   },
  //   {
  //     AvgYTDsellout: 100,
  //     Brand: "Airwick",
  //     Channel: "Grocery",
  //     Customer: "Morrisons",
  //     Location: "United Kingdom",
  //     "RB SKU": "3247398",
  //     "Sell out": 100,
  //     "Supply to Reallocate": 0,
  //     allocationconsumed: 0,
  //     cmuscore: 3.2,
  //     currentallocation: 1230.0,
  //     currentcustSOH: 7943.0,
  //     "custsoh-current": 8043,
  //     "custsoh-target": 7200,
  //     "custwoc-current": 79.43,
  //     "custwoc-target": 5,
  //     expectedservicelevel: "85%",
  //     idealallocationvalues: 0,
  //     newallocation: 0,
  //     openorders: 0,
  //     remainingallocation: 1230.0,
  //     "sif-atf": 900,
  //     "sif-reckitt": 1440,
  //     stocksafetoreallocate: 692,
  //     suggestedallocation: -1230.0,
  //     sumofPOsinalloccycle: 902,
  //   },
  //   {
  //     AvgYTDsellout: 100,
  //     Brand: "Airwick",
  //     Channel: "Grocery",
  //     Customer: "Tesco",
  //     Location: "United Kingdom",
  //     "RB SKU": "3247398",
  //     "Sell out": 100,
  //     "Supply to Reallocate": 0,
  //     allocationconsumed: 0,
  //     cmuscore: 4.3,
  //     currentallocation: 3039.0,
  //     currentcustSOH: 8802.0,
  //     "custsoh-current": 8800,
  //     "custsoh-target": 7000,
  //     "custwoc-current": 88.02,
  //     "custwoc-target": 4,
  //     expectedservicelevel: "100%",
  //     idealallocationvalues: 0,
  //     newallocation: 0,
  //     openorders: 102,
  //     remainingallocation: 3039.0,
  //     "sif-atf": 900,
  //     "sif-reckitt": 1750,
  //     stocksafetoreallocate: 2493,
  //     suggestedallocation: -3039.0,
  //     sumofPOsinalloccycle: 1204,
  //   },
  //   {
  //     AvgYTDsellout: 100,
  //     Brand: "Airwick",
  //     Channel: "Grocery",
  //     Customer: "Sainsburys",
  //     Location: "United Kingdom",
  //     "RB SKU": "3247398",
  //     "Sell out": 100,
  //     "Supply to Reallocate": 0,
  //     allocationconsumed: 0,
  //     cmuscore: 2.7,
  //     currentallocation: 1402.0,
  //     currentcustSOH: 2240.0,
  //     "custsoh-current": 2340,
  //     "custsoh-target": 4960,
  //     "custwoc-current": 22.4,
  //     "custwoc-target": 4,
  //     expectedservicelevel: "100%",
  //     idealallocationvalues: 0,
  //     newallocation: 0,
  //     openorders: 0,
  //     remainingallocation: 1402.0,
  //     "sif-atf": 900,
  //     "sif-reckitt": 1240,
  //     stocksafetoreallocate: 802,
  //     suggestedallocation: -1402.0,
  //     sumofPOsinalloccycle: 640,
  //   },
  //   {
  //     AvgYTDsellout: 100,
  //     Brand: "Airwick",
  //     Channel: "Discounter",
  //     Customer: "TJ Morris",
  //     Location: "United Kingdom",
  //     "RB SKU": "3247398",
  //     "Sell out": 100,
  //     "Supply to Reallocate": 0,
  //     allocationconsumed: 502,
  //     cmuscore: 3.1,
  //     currentallocation: 751.5,
  //     currentcustSOH: 5853.0,
  //     "custsoh-current": 5400,
  //     "custsoh-target": 3006,
  //     "custwoc-current": 58.53,
  //     "custwoc-target": 3,
  //     expectedservicelevel: "75%",
  //     idealallocationvalues: 0,
  //     newallocation: 0,
  //     openorders: 51,
  //     remainingallocation: 249.5,
  //     "sif-atf": 900,
  //     "sif-reckitt": 1002,
  //     stocksafetoreallocate: 0,
  //     suggestedallocation: -751.5,
  //     sumofPOsinalloccycle: 502,
  //   },
  //   {
  //     AvgYTDsellout: 100,
  //     Brand: "Airwick",
  //     Channel: "Discounter",
  //     Customer: "Lidl",
  //     Location: "United Kingdom",
  //     "RB SKU": "3247398",
  //     "Sell out": 100,
  //     "Supply to Reallocate": 0,
  //     allocationconsumed: 320,
  //     cmuscore: 3.9,
  //     currentallocation: 1402.0,
  //     currentcustSOH: 5863.0,
  //     "custsoh-current": 5430,
  //     "custsoh-target": 2486,
  //     "custwoc-current": 58.63,
  //     "custwoc-target": 2,
  //     expectedservicelevel: "100%",
  //     idealallocationvalues: 0,
  //     newallocation: 0,
  //     openorders: 213,
  //     remainingallocation: 1082.0,
  //     "sif-atf": 900,
  //     "sif-reckitt": 1243,
  //     stocksafetoreallocate: 159,
  //     suggestedallocation: -1402.0,
  //     sumofPOsinalloccycle: 320,
  //   },
  // ];

  // const [suggectedRecord, setsuggectedRecord] = useState({
  //   AvgYTDsellout: 100,
  //   Brand: "Airwick",
  //   Channel: "Pure Play",
  //   Customer: "Amazon",
  //   Location: "United Kingdom",
  //   "RB SKU": "3247398",
  //   "Sell out": 100,
  //   "Supply to Reallocate": 0,
  //   allocationconsumed: 1440,
  //   cmuscore: 2.2,
  //   currentallocation: 1519.5,
  //   currentcustSOH: 6421.5,
  //   "custsoh-current": 5002,
  //   "custsoh-target": 8104,
  //   "custwoc-current": 64.215,
  //   "custwoc-target": 4,
  //   expectedservicelevel: "75%",
  //   idealallocationvalues: 0,
  //   newallocation: 0,
  //   openorders: 266,
  //   remainingallocation: 79.5,
  //   "sif-atf": 900,
  //   "sif-reckitt": 2026,
  //   stocksafetoreallocate: 0,
  //   suggestedallocation: -1519.5,
  //   sumofPOsinalloccycle: 1440,
  // });
  // const updateresults = useSelector((state) => state.sidebar.updateresults);

  const channel = "Pure Play";

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
  console.log(data);
  const [inputValues, setInputValues] = useState(
    new Array(initialData.length).fill("")
  );
  console.log(inputValues);
  // const [dataFetched, setDataFetched] = useState(false);
  useEffect(() => {
    const filterData = () => {
      const filteredData = isWithinChannel
        ? filteredSamechannelResults
        : referenceData;
      setData(filteredData);
    };

    filterData();
  }, [isWithinChannel, stockreallocationData, referenceData]);
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
        suggectedRecord.newallocation =
          suggectedRecord.newallocation - parseInt(inputValues[index]);

        suggectedRecord.remainingallocation =
          suggectedRecord.newallocation - suggectedRecord.allocationconsumed;

        const suggexpectedservice = Math.min(
          suggectedRecord.newallocation /
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
          suggectedRecord.idealallocationvalues - suggectedRecord.newallocation;

        testallocation += Math.abs(inputValues[index]);
        suggectedRecord.testReallocation = testallocation;
        setsuggectedRecord(suggectedRecord);
        // newInputValues[index] = value;
        // setInputValues((inputValues[index], ""));
        handleInputChange(index, "");

        return {
          ...item,
          newallocation: currentallocation,
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
    const filteredData = isWithinChannel
      ? filteredSamechannelResults
      : referenceData;
    setData(filteredData);
    const newInputValues = [...inputValues];
    console.log(newInputValues);
    for (let i = 0; i < newInputValues.length; i++) {
      newInputValues[i] = "";
      setInputValues(newInputValues);
    }
    setsuggectedRecord(referenceSuggData);

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
              <TableCell className="stable-header">New Allocation</TableCell>
              <TableCell className="stable-header">
                Allocation Consumed to Date
              </TableCell>
              <TableCell className="stable-header">
                Remaining Allocation
              </TableCell>
              <TableCell className="stable-header">Open Orders</TableCell>
              <TableCell className="stable-header">
                Expected Service Level
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
              <TableCell className="stable-header">
                Stock Safe to Reallocate
              </TableCell>
              <TableCell className="stable-header">
                Ideal Allocation Values
              </TableCell>
              <TableCell className="stable-header">
                Suggested Reallocation
              </TableCell>
              <TableCell className="stable-header">
                Test Reallocation Scenario
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
            <Box className="sa-box">
              <Typography className="sa-h1"> {results[1].Name}</Typography>
              <Typography color="#008824" className="sa-h2">
                {" "}
                {results[1].Value}
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
