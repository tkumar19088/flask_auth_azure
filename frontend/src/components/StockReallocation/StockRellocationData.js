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

  const isWithinChannel = useSelector((state) => state.sidebar.isWithinChannel);
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
  //     AvgYTDsellout: 600,
  //     Brand: "Airwick",
  //     "Business Unit": "Health",
  //     Channel: "Pharmacy",
  //     Customer: "Asda",
  //     Location: "Germany",
  //     "RB SKU": "3247398",
  //     "Sell out": 600,
  //     allocationconsumed: 180,
  //     cmuscore: 7.44,
  //     currentallocation: 400,
  //     newallocation: 0,
  //     currentcustSOH: 400,
  //     "custsoh-current": 1000,
  //     "custsoh-target": 900,
  //     "custwoc-current": 2,
  //     "custwoc-target": 4,
  //     expectedservicelevel: 0.94,
  //     idealallocationvalues: 800,
  //     openorders: 180,
  //     remainingallocation: 220,
  //     "sif-atf": 900,
  //     "sif-reckitt": 800,
  //     stocksafetoreallocate: 36,
  //     suggestedallocation: 2,
  //     sumofPOsinalloccycle: 900,
  //   },
  //   {
  //     AvgYTDsellout: 500,
  //     Brand: "Finish",
  //     "Business Unit": "Nutrition",
  //     Channel: "PurePlay",
  //     Customer: "Amazon",
  //     Location: "United Kingdom",
  //     "RB SKU": "3256793",
  //     "Sell out": 300,
  //     allocationconsumed: 243,
  //     cmuscore: 3.84,
  //     currentallocation: 500,
  //     newallocation: 0,
  //     currentcustSOH: 1000,
  //     "custsoh-current": 600,
  //     "custsoh-target": 1000,
  //     "custwoc-current": 10,
  //     "custwoc-target": 10,
  //     expectedservicelevel: 0.9,
  //     idealallocationvalues: 600,
  //     openorders: 243,
  //     remainingallocation: 257,
  //     "sif-atf": 400,
  //     "sif-reckitt": 1000,
  //     stocksafetoreallocate: 243,
  //     suggestedallocation: 186,
  //     sumofPOsinalloccycle: 800,
  //   },
  //   {
  //     AvgYTDsellout: 800,
  //     Brand: "Airwick",
  //     "Business Unit": "Health",
  //     Channel: "PurePlay",
  //     Customer: "Asda",
  //     Location: "Australia",
  //     "RB SKU": "3194812",
  //     "Sell out": 800,
  //     allocationconsumed: 12,
  //     cmuscore: 1.46,
  //     currentallocation: 400,
  //     newallocation: 0,
  //     currentcustSOH: 700,
  //     "custsoh-current": 300,
  //     "custsoh-target": 400,
  //     "custwoc-current": 7,
  //     "custwoc-target": 11,
  //     expectedservicelevel: 0.9,
  //     idealallocationvalues: 700,
  //     openorders: 12,
  //     remainingallocation: 388,
  //     "sif-atf": 200,
  //     "sif-reckitt": 400,
  //     stocksafetoreallocate: 57,
  //     suggestedallocation: 9,
  //     sumofPOsinalloccycle: 500,
  //   },
  //   {
  //     AvgYTDsellout: 300,
  //     Brand: "Harpic",
  //     "Business Unit": "Health",
  //     Channel: "PurePlay",
  //     Customer: "Amazon",
  //     Location: "Australia",
  //     "RB SKU": "3250240",
  //     "Sell out": 200,
  //     allocationconsumed: 270,
  //     cmuscore: 8.0,
  //     currentallocation: 900,
  //     newallocation: 0,
  //     currentcustSOH: 900,
  //     "custsoh-current": 600,
  //     "custsoh-target": 1000,
  //     "custwoc-current": 10,
  //     "custwoc-target": 14,
  //     expectedservicelevel: 0.87,
  //     idealallocationvalues: 500,
  //     openorders: 270,
  //     remainingallocation: 630,
  //     "sif-atf": 200,
  //     "sif-reckitt": 300,
  //     stocksafetoreallocate: 315,
  //     suggestedallocation: 286,
  //     sumofPOsinalloccycle: 200,
  //   },
  //   {
  //     AvgYTDsellout: 900,
  //     Brand: "Vanish",
  //     "Business Unit": "Hygiene",
  //     Channel: "PurePlay",
  //     Customer: "Amazon",
  //     Location: "Australia",
  //     "RB SKU": "3173447",
  //     "Sell out": 400,
  //     allocationconsumed: 38,
  //     cmuscore: 5.69,
  //     currentallocation: 1000,
  //     newallocation: 0,
  //     currentcustSOH: 700,
  //     "custsoh-current": 700,
  //     "custsoh-target": 300,
  //     "custwoc-current": 4,
  //     "custwoc-target": 8,
  //     expectedservicelevel: 0.86,
  //     idealallocationvalues: 900,
  //     openorders: 38,
  //     remainingallocation: 962,
  //     "sif-atf": 1000,
  //     "sif-reckitt": 200,
  //     stocksafetoreallocate: 681,
  //     suggestedallocation: 188,
  //     sumofPOsinalloccycle: 900,
  //   },
  //   {
  //     AvgYTDsellout: 600,
  //     Brand: "Vanish",
  //     "Business Unit": "Hygiene",
  //     Channel: "PurePlay",
  //     Customer: "Amazon",
  //     Location: "United Kingdom",
  //     "RB SKU": "3066078",
  //     "Sell out": 200,
  //     allocationconsumed: 300,
  //     cmuscore: 4.18,
  //     currentallocation: 600,
  //     newallocation: 0,
  //     currentcustSOH: 900,
  //     "custsoh-current": 200,
  //     "custsoh-target": 200,
  //     "custwoc-current": 3,
  //     "custwoc-target": 7,
  //     expectedservicelevel: 0.91,
  //     idealallocationvalues: 500,
  //     openorders: 300,
  //     remainingallocation: 300,
  //     "sif-atf": 700,
  //     "sif-reckitt": 300,
  //     stocksafetoreallocate: 19,
  //     suggestedallocation: 4,
  //     sumofPOsinalloccycle: 500,
  //   },
  //   {
  //     AvgYTDsellout: 800,
  //     Brand: "Napisan",
  //     "Business Unit": "Health",
  //     Channel: "Groceries",
  //     Customer: "Asda",
  //     Location: "Australia",
  //     "RB SKU": "3102862",
  //     "Sell out": 800,
  //     allocationconsumed: 200,
  //     cmuscore: 5.89,
  //     currentallocation: 800,
  //     newallocation: 0,
  //     currentcustSOH: 900,
  //     "custsoh-current": 800,
  //     "custsoh-target": 900,
  //     "custwoc-current": 3,
  //     "custwoc-target": 7,
  //     expectedservicelevel: 0.91,
  //     idealallocationvalues: 400,
  //     openorders: 200,
  //     remainingallocation: 600,
  //     "sif-atf": 700,
  //     "sif-reckitt": 200,
  //     stocksafetoreallocate: 257,
  //     suggestedallocation: 142,
  //     sumofPOsinalloccycle: 200,
  //   },
  //   {
  //     AvgYTDsellout: 300,
  //     Brand: "Vanish",
  //     "Business Unit": "Hygiene",
  //     Channel: "Groceries",
  //     Customer: "Amazon",
  //     Location: "Germany",
  //     "RB SKU": "3173443",
  //     "Sell out": 400,
  //     allocationconsumed: 200,
  //     cmuscore: 4.14,
  //     currentallocation: 1000,
  //     newallocation: 0,
  //     currentcustSOH: 400,
  //     "custsoh-current": 200,
  //     "custsoh-target": 1000,
  //     "custwoc-current": 2,
  //     "custwoc-target": 7,
  //     expectedservicelevel: 0.88,
  //     idealallocationvalues: 800,
  //     openorders: 200,
  //     remainingallocation: 800,
  //     "sif-atf": 400,
  //     "sif-reckitt": 1000,
  //     stocksafetoreallocate: 54,
  //     suggestedallocation: 40,
  //     sumofPOsinalloccycle: 400,
  //   },
  //   {
  //     AvgYTDsellout: 500,
  //     Brand: "Airwick",
  //     "Business Unit": "Health",
  //     Channel: "Groceries",
  //     Customer: "Asda",
  //     Location: "Germany",
  //     "RB SKU": "3221252",
  //     "Sell out": 300,
  //     allocationconsumed: 348,
  //     cmuscore: 9.23,
  //     currentallocation: 400,
  //     newallocation: 0,
  //     currentcustSOH: 800,
  //     "custsoh-current": 1000,
  //     "custsoh-target": 800,
  //     "custwoc-current": 10,
  //     "custwoc-target": 12,
  //     expectedservicelevel: 0.91,
  //     idealallocationvalues: 800,
  //     openorders: 348,
  //     remainingallocation: 52,
  //     "sif-atf": 800,
  //     "sif-reckitt": 400,
  //     stocksafetoreallocate: 200,
  //     suggestedallocation: 128,
  //     sumofPOsinalloccycle: 500,
  //   },
  //   {
  //     AvgYTDsellout: 800,
  //     Brand: "Finish",
  //     "Business Unit": "Nutrition",
  //     Channel: "Pharmacy",
  //     Customer: "Amazon",
  //     Location: "United Kingdom",
  //     "RB SKU": "3252404",
  //     "Sell out": 300,
  //     allocationconsumed: 400,
  //     cmuscore: 0.47,
  //     currentallocation: 600,
  //     newallocation: 0,
  //     currentcustSOH: 300,
  //     "custsoh-current": 200,
  //     "custsoh-target": 500,
  //     "custwoc-current": 4,
  //     "custwoc-target": 9,
  //     expectedservicelevel: 0.86,
  //     idealallocationvalues: 600,
  //     openorders: 400,
  //     remainingallocation: 200,
  //     "sif-atf": 500,
  //     "sif-reckitt": 400,
  //     stocksafetoreallocate: 299,
  //     suggestedallocation: 99,
  //     sumofPOsinalloccycle: 1000,
  //   },
  // ];

  // const [suggectedRecord, setsuggectedRecord] = useState({
  //   AvgYTDsellout: 600,
  //   Brand: "Airwick",
  //   "Business Unit": "Health",
  //   Channel: "Pharmacy",
  //   Customer: "Asda",
  //   Location: "Germany",
  //   "RB SKU": "3247398",
  //   "Sell out": 600,
  //   allocationconsumed: 180,
  //   cmuscore: 7.44,
  //   currentallocation: 400,
  //   newallocation: 400,
  //   currentcustSOH: 400,
  //   "custsoh-current": 1000,
  //   "custsoh-target": 900,
  //   "custwoc-current": 2,
  //   "custwoc-target": 4,
  //   expectedservicelevel: 0.94,
  //   idealallocationvalues: 800,
  //   openorders: 180,
  //   remainingallocation: 220,
  //   "sif-atf": 900,
  //   "sif-reckitt": 800,
  //   stocksafetoreallocate: 36,
  //   suggestedallocation: 2,
  //   sumofPOsinalloccycle: 900,
  //   testReallocation: 0,
  // });
  const updateresults = useSelector((state) => state.sidebar.updateresults);
  const initialData = stockreallocationData
    ? stockreallocationData.map((obj) => ({
        ...obj, // Copy the existing properties of the object
        testReallocation: "", // Add the new key-value pair
      }))
    : [];
  // setData(results);
  const [data, setData] = useState(initialData);

  const channel = "Pharmacy";
  const filteredSamechannelResults = initialData.filter(
    (item) => item.Channel == channel
  );
  const dataSets = isWithinChannel ? filteredSamechannelResults : initialData;
  const [inputValues, setInputValues] = useState(initialData.map(() => ""));
  useEffect(() => {
    setData(dataSets);
  }, [isWithinChannel, dataSets]);
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
    // console.log(inputValues);
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
    setData(initialData);
  };
  return (
    <div style={{ border: "" }} id="captureMe">
      <TableContainer style={{ maxHeight: 465, width: "100%" }}>
        <Table stickyHeader className="stockReallocation">
          <TableHead>
            <TableRow>
              <TableCell className="stable-header">Customer</TableCell>
              <TableCell className="stable-header">Channel</TableCell>
              <TableCell className="stable-header">
                Sell-In Forecast <br />
                (S-OLA vs Kinaxis)
              </TableCell>
              <TableCell className="stable-header">
                Current Allocation
              </TableCell>
              <TableCell className="stable-header">New Allocation</TableCell>
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
                Customer SoH <br />
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
                <TableCell>{item.Channel}</TableCell>
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
            sx={{ width: "310px" }}
          >
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
            sx={{ width: "730px" }}
          >
            <Tooltip
              title="Run Optimization Model"
              arrow
              placement="top"
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
              placement="top"
              // ml={{ lg: "-19px" }}
              onClick={handleUpdateResults}
            >
              <Box className="sa-boxbtn">
                Update results
                <UpdateIcon className="btn-refresh" />
              </Box>
            </Tooltip>
            <Tooltip
              title="Reset Results"
              arrow
              placement="top"
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
              placement="top"
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
