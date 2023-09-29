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
  Paper,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Badge from "@mui/material/Badge";
import "./ohr.css";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import CheckIcon from "@mui/icons-material/Check";
import Tooltip from "@mui/material/Tooltip";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateloader,
  fetchstockreallocatedata,
  fetchstaticrow,
  updateexporttabledata,
} from "../../store/actions/sidebarActions";

const OhrTable = ({ onData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const startingWeek = useSelector((state) => state.sidebar.currentWeekNumber);
  const search = useSelector((state) => state.sidebar.search);
  const exporttabledata = useSelector((state) => state.sidebar.exporttabledata);
  const ohrdata = useSelector((state) => state.sidebar.overviewhighriskdata);
  const isragfilterohr = useSelector((state) => state.sidebar.isragfilterohr);
  const filteredohrdata = useSelector(
    (state) => state.sidebar.filteredoverviewhighriskdata
  );
  console.log(search);
  const data = isragfilterohr
    ? filteredohrdata
    : search
    ? exporttabledata
    : ohrdata;
  console.log(data);

  const [expandedRow, setExpandedRow] = useState(null);
  const [pushAlternative, setpushAlternative] = useState(false);
  const [campaignsData, setcampaignsData] = useState([]);
  const [pushAlternativeData, setpushAlternativeData] = useState([]);
  const [iscampaigns, setiscampaigns] = useState(false);
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  // Function to handle row click and expand/collapse accordion
  const handleRowClick = async (rowId) => {
    setpushAlternative(false);
    if (expandedRow === rowId) {
      setExpandedRow(null);
    } else {
      dispatch(updateloader(true));
      var data = { customer: 0, rbsku: rowId };
      try {
        const response = await fetch("http://localhost:5000/getcampaigns", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setiscampaigns(true);
          setcampaignsData(json);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        dispatch(updateloader(false));
      }
      setExpandedRow(rowId);
    }
  };
  const handlePushAlternative = async () => {
    setpushAlternative(true);
    dispatch(updateloader(true));
    var data = { rbsku: expandedRow };
    try {
      const response = await fetch("http://localhost:5000/getalternativeskus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        setpushAlternativeData(json);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleReallocate = async () => {
    dispatch(updateloader(true));
    var data = { rbsku: expandedRow };
    try {
      const response = await fetch("http://localhost:5000/rarbysku", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        dispatch(fetchstockreallocatedata(json));
        dispatch(fetchstaticrow(json.static_row));
        dispatch(updateexporttabledata(json));
        navigate("/stockreallocation");
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };

  // const [data, setData] = useState([
  //   {
  //     rbsku: "010612",
  //     ppg: "1234567",
  //     description: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     woc: "743",
  //     activepromo: "Yes",
  //     olacw: "84%",
  //     olacw1: "84%",
  //     olacw2: "84%",
  //     olacw3: "84%",
  //     exptnetrevcw: "£100",
  //     exptnetrevcw1: "£100",
  //     exptnetrevcw2: "£100",
  //     exptnetrevcw3: "£100",
  //     ragcw: "G",
  //     ragcw1: "R",
  //     ragcw2: "A",
  //     ragcw3: "G",
  //     reasoncode: "E0",
  //     comments: "Soft change to 3234328",
  //     campaugns: [
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Clubcard- CC Air freshener",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000.X",
  //         requestdeactivation: "No",
  //       },
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Clubcard- Was 9.25 Now 6.00",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000.Y",
  //         requestdeactivation: "No",
  //       },
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Clubcard- Was 9.25 Now 6.00",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000.Y",
  //         requestdeactivation: "No",
  //       },
  //     ],
  //     pushAlternativeTable: [
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //     ],

  //     details: [
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //     ],
  //   },
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",
  //     description: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     woc: "743",
  //     activepromo: "Yes",
  //     olacw: "84%",
  //     olacw1: "84%",
  //     olacw2: "84%",
  //     olacw3: "84%",
  //     exptnetrevcw: "£100",
  //     exptnetrevcw1: "£100",
  //     exptnetrevcw2: "£100",
  //     exptnetrevcw3: "£100",
  //     ragcw: "G",
  //     ragcw1: "R",
  //     ragcw2: "A",
  //     ragcw3: "G",
  //     reasoncode: "E0",
  //     comments: "Soft change to 3234328",
  //     campaugns: [
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Clubcard- CC Air freshener",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Clubcard- Was 9.25 Now 6.00",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Clubcard- Was 9.25 Now 6.00",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //     ],
  //     pushAlternativeTable: [
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //     ],

  //     details: [
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //     ],
  //   },
  //   {
  //     rbsku: "010614",
  //     ppg: "1234567",
  //     description: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     woc: "743",
  //     activepromo: "No",
  //     olacw: "84%",
  //     olacw1: "84%",
  //     olacw2: "84%",
  //     olacw3: "84%",
  //     exptnetrevcw: "£100",
  //     exptnetrevcw1: "£100",
  //     exptnetrevcw2: "£100",
  //     exptnetrevcw3: "£100",
  //     ragcw: "G",
  //     ragcw1: "R",
  //     ragcw2: "A",
  //     ragcw3: "G",
  //     reasoncode: "E0",
  //     comments: "Soft change to 3234328",
  //     campaugns: [
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Yes",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Yes",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Yes",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //     ],
  //     pushAlternativeTable: [
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //     ],

  //     details: [
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //     ],
  //   },
  //   {
  //     rbsku: "010615",
  //     ppg: "1234567",
  //     description: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     woc: "743",
  //     activepromo: "Yes",
  //     olacw: "84%",
  //     olacw1: "84%",
  //     olacw2: "84%",
  //     olacw3: "84%",
  //     exptnetrevcw: "£100",
  //     exptnetrevcw1: "£100",
  //     exptnetrevcw2: "£100",
  //     exptnetrevcw3: "£100",
  //     ragcw: "G",
  //     ragcw1: "R",
  //     ragcw2: "A",
  //     ragcw3: "G",
  //     reasoncode: "E0",
  //     comments: "Soft change to 3234328",
  //     campaugns: [
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Yes",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Yes",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //     ],
  //     pushAlternativeTable: [
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //     ],

  //     details: [
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //     ],
  //   },
  //   {
  //     rbsku: "010616",
  //     ppg: "1234567",
  //     description: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     woc: "743",
  //     activepromo: "No",
  //     olacw: "84%",
  //     olacw1: "84%",
  //     olacw2: "84%",
  //     olacw3: "84%",
  //     exptnetrevcw: "£100",
  //     exptnetrevcw1: "£100",
  //     exptnetrevcw2: "£100",
  //     exptnetrevcw3: "£100",
  //     ragcw: "G",
  //     ragcw1: "R",
  //     ragcw2: "A",
  //     ragcw3: "G",
  //     reasoncode: "E0",
  //     comments: "Soft change to 3234328",
  //     campaugns: [
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Yes",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Yes",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //     ],
  //     pushAlternativeTable: [
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //     ],

  //     details: [
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //     ],
  //   },
  //   {
  //     rbsku: "010617",
  //     ppg: "1234567",
  //     description: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     woc: "743",
  //     activepromo: "Yes",
  //     olacw: "84%",
  //     olacw1: "84%",
  //     olacw2: "84%",
  //     olacw3: "84%",
  //     exptnetrevcw: "£100",
  //     exptnetrevcw1: "£100",
  //     exptnetrevcw2: "£100",
  //     exptnetrevcw3: "£100",
  //     ragcw: "G",
  //     ragcw1: "R",
  //     ragcw2: "A",
  //     ragcw3: "G",
  //     reasoncode: "E0",
  //     comments: "Soft change to 3234328",
  //     campaugns: [
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Yes",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Yes",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //     ],
  //     pushAlternativeTable: [
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //     ],

  //     details: [
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //     ],
  //   },
  //   {
  //     rbsku: "010619",
  //     ppg: "1234567",
  //     description: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     woc: "743",
  //     activepromo: "Yes",
  //     olacw: "84%",
  //     olacw1: "84%",
  //     olacw2: "84%",
  //     olacw3: "84%",
  //     exptnetrevcw: "£100",
  //     exptnetrevcw1: "£100",
  //     exptnetrevcw2: "£100",
  //     exptnetrevcw3: "£100",
  //     ragcw: "G",
  //     ragcw1: "R",
  //     ragcw2: "A",
  //     ragcw3: "G",
  //     reasoncode: "E0",
  //     comments: "Soft change to 3234328",
  //     campaugns: [
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Yes",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Yes",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //     ],
  //     pushAlternativeTable: [
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //     ],

  //     details: [
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //     ],
  //   },
  //   {
  //     rbsku: "010620",
  //     ppg: "1234567",
  //     description: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     woc: "743",
  //     activepromo: "Yes",
  //     olacw: "84%",
  //     olacw1: "84%",
  //     olacw2: "84%",
  //     olacw3: "84%",
  //     exptnetrevcw: "£100",
  //     exptnetrevcw1: "£100",
  //     exptnetrevcw2: "£100",
  //     exptnetrevcw3: "£100",
  //     ragcw: "G",
  //     ragcw1: "R",
  //     ragcw2: "A",
  //     ragcw3: "G",
  //     reasoncode: "E0",
  //     comments: "Soft change to 3234328",
  //     campaugns: [
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Yes",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //       {
  //         campaignanme: "Airwick special",
  //         startdate: "12/05/2023",
  //         enddate: "31/08/2023",
  //         skufocused: "Yes",
  //         activestatus: "Active",
  //         retailersinvolved: "Tesco",
  //         retailerinventory: "250",
  //         rbwherehouseinventory: "1000",
  //         requestdeactivation: "No",
  //       },
  //     ],
  //     pushAlternativeTable: [
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //       {
  //         recomscore: "96%",
  //         title: "Airwick Electric Strawberry",
  //         sku: "1236467867",
  //         activecamp: "Active",
  //         stockavailblerb: "1,345",
  //         stockavailableamz: "234",
  //         sellinforecast: "234",
  //         selloutforecast: "100",
  //         wocestimation: "100",
  //         olaupliftestimation: "100",
  //         costestimation: "500",
  //         select: "Yes",
  //       },
  //     ],

  //     details: [
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //       {
  //         skuname: "Airwick",
  //         skucode: "23434534693dlf",
  //         timeframe: 4,
  //         netrevenue: "£12,246.43",
  //         expectedola: "84%",
  //         servicelevel: "60",
  //         expectednetrevenue: "(£5,749.00)",
  //         bestseller: "High",
  //         risk: "10",
  //         checkbox: false,
  //         costtoserve: "(£903.00)",
  //         reviewed: "No",
  //         quantityOrdered: "300",
  //         quantityForcasted: "500",
  //         percentageDescrepency: "-63.64%",
  //       },
  //     ],
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

  const [chooseData, setchooseData] = useState({});
  const [displayMigitates, setdisplayMigitates] = useState(false);

  const handleChooseMitigation = async () => {
    dispatch(updateloader(true));
    var data = { rbsku: expandedRow };
    try {
      const response = await fetch("http://localhost:5000/choosescenario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        setchooseData(json);
        setdisplayMigitates(true);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };

  const SubTable = ({ details }) => (
    <div style={{ marginTop: "-18px", padding: "10px" }} className="mini-table">
      <Typography
        fontSize={20}
        color="#415A6C"
        className="ms-title"
        style={{
          textAlign: "left",
          marginBottom: "10px",
        }}
      >
        Recent / Current / Upcoming Campaigns
      </Typography>

      <TableContainer component={Paper} className="tablecell-header">
        <Table className="campaignsTable">
          <TableHead>
            <TableRow className="tablecell-inside">
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
                border="1px solid #dddddd"
              >
                Campaign Name
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                Start Date
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                End Date
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                Offer Description
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                Customer
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  lineHeight: "16px",
                  color: "#415A6C",
                }}
              >
                Customer
                <br /> Inventory
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  lineHeight: "16px",
                  color: "#415A6C",
                }}
              >
                Customer <br />
                Allocation
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {details.length == 0 && (
              <TableRow>
                <TableCell
                  colSpan={20}
                  style={{ textAlign: "center", fontSize: "16px" }}
                >
                  No Records Found
                </TableCell>
              </TableRow>
            )}
            {details.map((item, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                  textAlign: "center",
                }}
              >
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.campaignname}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.startdate}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.enddate}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.offerdescription}
                  </Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.status}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.Customer}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.customerinventory}
                  </Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.customerallocation}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        // direction="row"
        justifyContent="center"
        textAlign="center"
        className="choosems-stack"
      >
        <Box display="flex" justifyContent="center" alignItems="center" my={1}>
          <Button
            variant="contained"
            size="medium"
            startIcon={<ReportProblemOutlinedIcon sx={{ color: "white" }} />}
            sx={{
              backgroundColor: "#415A6C",
              "&:hover": {
                backgroundColor: "#FF007F",
              },
              borderRadius: "50px",
            }}
            onClick={handleChooseMitigation}
          >
            Choose a Mitigation Strategy
          </Button>
        </Box>
        {displayMigitates && (
          <Box display="flex" className="ms-buttons">
            <Box
              className="ms-grid"
              onClick={handlePushAlternative}
              sx={{
                backgroundColor:
                  chooseData.pushaltskus == "True" && !pushAlternative
                    ? "green"
                    : pushAlternative
                    ? "#FF007F"
                    : "#415A6C",
                // backgroundColor: pushAlternative ? "#FF007F" : "#415A6C",
                "&:hover": {
                  backgroundColor: "#FF007F",
                },
              }}
            >
              <Typography className="ms-gridtitle">Push Alternative</Typography>
            </Box>
            <Box
              className="ms-grid"
              onClick={handleReallocate}
              sx={{
                backgroundColor:
                  chooseData.rarbysku == "True" ? "green" : "#415A6C",
                "&:hover": {
                  backgroundColor: "#FF007F",
                },
              }}
            >
              <Typography className="ms-gridtitle">Reallocate</Typography>
            </Box>
            <Box className="ms-grid">
              <Badge badgeContent="Coming Soon" className="redirect-badge">
                <Typography className="ms-gridtitle">Redirect</Typography>
              </Badge>
            </Box>
          </Box>
        )}
      </Stack>
    </div>
  );

  const PushAlternativeTable = ({ details }) => (
    <div>
      <TableContainer component={Paper} className="tablecell-header">
        <Table className="campaignsTable">
          <TableHead className="pushalternative-tablehead">
            <TableRow>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  textAlign: "center",
                  // padding: "0px",
                  height: "30px",
                  color: "#415A6C",
                }}
              >
                Recom.Score
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  // padding: "0px",
                  color: "#415A6C",
                }}
              >
                RB SKU
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                PPG
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                Description
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "110px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                Active Campaigns
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "110px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  lineHeight: "16px",
                  color: "#415A6C",
                }}
              >
                Reckitt SoH
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "130px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                Customer Inventory
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "110px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  lineHeight: "16px",
                  color: "#415A6C",
                }}
              >
                Sell-In Forecast <br />
                (S-OLA vs Kinaxis)
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "110px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                Sell-Out Forecast
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "110px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                  color: "#415A6C",
                }}
              >
                Customer WoC
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {details.length == 0 && (
              <TableRow>
                <TableCell
                  colSpan={20}
                  style={{ textAlign: "center", fontSize: "16px" }}
                >
                  No Records Found
                </TableCell>
              </TableRow>
            )}
            {details.map((item, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                  padding: "0px",
                }}
              >
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item["recom-score"]}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item["RB SKU"]}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.PPG}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.Description}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.activecampaigns}
                  </Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.reckittsoh}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.customerinventory}
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "40px" }}>
                    <Typography fontSize={15}>{item["sif-atf"]}</Typography>
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
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.sof}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.customerwoc}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

  return (
    <div style={{ border: "" }}>
      <TableContainer style={{ maxHeight: 711, width: "100%" }}>
        <Table>
          <TableHead className="t-head">
            <TableRow className="tablerow-title">
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                  textAlign: "center",
                  color: "#415A6C",
                }}
              >
                RB SKU
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                  textAlign: "center",
                  color: "#415A6C",
                }}
              >
                PPG
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                  textAlign: "center",
                  color: "#415A6C",
                }}
              >
                Description
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                }}
              >
                <Typography className="table-h1-title">Brand</Typography>
              </TableCell>

              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  // width: "60px",
                }}
              >
                <Typography className="table-h1-title">Reckitt WoC</Typography>
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                  lineHeight: "16px",
                  textAlign: "center",
                  color: "#415A6C",
                }}
              >
                Active Promo
              </TableCell>

              <TableCell
                colSpan={4}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                }}
              >
                <Typography className="table-h1-title" lineHeight="16px">
                  Service Level %
                </Typography>
              </TableCell>
              <TableCell
                colSpan={4}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                }}
              >
                <Box
                  className="bdr-exptnetrevenue"
                  textAlign="center"
                  // mt="3px"
                >
                  <Typography className="table-h1-title" lineHeight="16px">
                    Expected Gross Revenue
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                colSpan={4}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                }}
              >
                <Typography className="table-h1-title">RAG</Typography>
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                }}
              >
                <Typography className="table-h1-title">
                  Reason <br />
                  Code
                </Typography>
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                }}
              >
                <Box className="bdr-exptnetrevenue">
                  <Typography
                    className="table-h1-title"
                    sx={{
                      fontSize: "14px",
                      textAlign: "center",
                      lineHeight: "16px",
                    }}
                  >
                    Comment/Root Cause
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow className="t-row">
              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                }}
              >
                <Typography className="cw" sx={{ fontSize: "0.875rem" }}>
                  {" "}
                  CW{" "}
                </Typography>
                <div className="brack-number">({startingWeek + 0})</div>
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dcdcdc",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                }}
              >
                CW+1
                <div className="brack-number">({startingWeek + 1})</div>
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dcdcdc",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                  textAlign: "center",
                }}
              >
                CW+2
                <div className="brack-number">({startingWeek + 2})</div>
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dcdcdc",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                  textAlign: "center",
                }}
              >
                CW+3 <div className="brack-number">({startingWeek + 3})</div>
              </TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
                  textAlign: "center",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                }}
              >
                <Typography className="cw" sx={{ fontSize: "0.875rem" }}>
                  {" "}
                  CW{" "}
                </Typography>
                <div className="brack-number">({startingWeek + 0})</div>
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dcdcdc",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                }}
              >
                CW+1 <div className="brack-number">({startingWeek + 1})</div>
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dcdcdc",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                }}
              >
                CW+2 <div className="brack-number">({startingWeek + 2})</div>
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dcdcdc",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                }}
              >
                CW+3 <div className="brack-number">({startingWeek + 3})</div>
              </TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
                  textAlign: "center",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                }}
              >
                <Typography className="cw" sx={{ fontSize: "0.875rem" }}>
                  {" "}
                  CW{" "}
                </Typography>
                <div className="brack-number">({startingWeek + 0})</div>
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dcdcdc",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                }}
              >
                CW+1 <div className="brack-number">({startingWeek + 1})</div>
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dcdcdc",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                }}
              >
                CW+2 <div className="brack-number">({startingWeek + 2})</div>
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dcdcdc",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                }}
              >
                CW+3 <div className="brack-number">({startingWeek + 3})</div>
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
            {data ? (
              data.map((item, index) => (
                <React.Fragment key={item["RB SKU"]}>
                  <TableRow
                    onClick={() => handleRowClick(item["RB SKU"])}
                    key={item["RB SKU"]}
                    // className={item.checkbox ? "checked-row" : ""}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                      border: "1px solid #dcdcdc",
                    }}
                  >
                    <TableCell
                      fontSize={13}
                      sx={{
                        display: "flex",
                        padding: "12px",
                        border: "none",
                      }}
                    >
                      <Box
                        className="rbsku-expand"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {expandedRow === item["RB SKU"] ? (
                          <RemoveIcon
                            fontSize="medium"
                            sx={{
                              color: "#415A6C",
                              cursor: "pointer",
                              fontWeight: "800",
                              marginTop: "4px",
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
                              marginTop: "4px",
                              backgroundColor: "transparent",
                            }}
                          />
                        )}
                      </Box>
                      <Box className="rbsku-expand">
                        <Typography
                          fontSize="13px"
                          sx={{
                            marginTop: "7px",
                          }}
                        >
                          {item["RB SKU"]}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        fontSize: "13px",
                        // border: "1px solid",
                        padding: "10px",
                      }}
                    >
                      {item.PPG}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        fontSize: "13px",
                        padding: "0px",
                        maxWidth: "90px", // Set the maximum width of the TableCell
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Tooltip title={item.Description}>
                        {" "}
                        {/* Tooltip component with the full text */}
                        {item.Description
                          ? truncateText(item.Description, 10)
                          : "-"}
                      </Tooltip>
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        fontSize: "13px",
                        // border: "1px solid",
                        padding: "10px",
                      }}
                    >
                      {item.Brand}
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        width: "40px",
                        padding: "0px",
                      }}
                    >
                      <Typography fontSize="13px">
                        {item["Reckitt WOC"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center" }}
                      sx={{ textAlign: "center", padding: "0px" }}
                    >
                      {item["Active Promo"]}
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        width: "20px",
                        padding: "0px",
                      }}
                    >
                      <Typography
                        // mx="10px"
                        sx={{
                          textAlign: "center",
                          fontSize: "13px",
                        }}
                      >
                        {item["ExpSL CW"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        width: "20px",
                        padding: "0px",
                      }}
                    >
                      <Typography mx="6px" fontSize="13px">
                        {item["ExpSL CW+1"]}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ textAlign: "center", width: "20px" }}>
                      <Typography mx="6px" fontSize="13px">
                        {item["ExpSL CW+2"]}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ textAlign: "center", width: "20px" }}>
                      <Typography mx="6px" fontSize="13px">
                        {item["ExpSL CW+3"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        width: "20px",
                        padding: "0px",
                      }}
                    >
                      <Typography
                        // mx="10px"
                        sx={{
                          textAlign: "center",
                          fontSize: "13px",
                        }}
                      >
                        {item["Exp NR CW"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        width: "20px",
                        padding: "0px",
                      }}
                    >
                      <Typography fontSize="13px">
                        {item["Exp NR CW+1"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        width: "20px",
                        padding: "0px",
                      }}
                    >
                      <Typography fontSize="13px">
                        {item["Exp NR CW+2"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        width: "20px",
                        padding: "0px",
                      }}
                    >
                      <Typography fontSize="13px">
                        {item["Exp NR CW+3"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        width: "20px",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Typography
                        margin="auto"
                        sx={{
                          color: "#fff",
                          textAlign: "center",
                          fontSize: "13px",
                          width: "30px",
                          height: "25px",
                          backgroundColor:
                            item["RAG CW"] != "-"
                              ? item["RAG CW"] == 2
                                ? "#57a957"
                                : item["RAG CW"] == 0
                                ? "#F44444"
                                : "orange"
                              : "",
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                          alignItems: "center",
                        }}
                      >
                        {item["RAG CW"] != "-"
                          ? item["RAG CW"] == 2
                            ? "G"
                            : item["RAG CW"] == 0
                            ? "R"
                            : "A"
                          : "-"}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: "20px",
                      }}
                    >
                      <Typography
                        margin="auto"
                        sx={{
                          fontSize: "13px",
                          color: "#fff",
                          width: "30px",
                          height: "25px",
                          backgroundColor:
                            item["RAG CW+1"] != "-"
                              ? item["RAG CW+1"] == 2
                                ? "#57a957"
                                : item["RAG CW+1"] == 0
                                ? "#F44444"
                                : "orange"
                              : "",
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                          alignItems: "center",
                        }}
                      >
                        {item["RAG CW+1"] != "-"
                          ? item["RAG CW+1"] == 2
                            ? "G"
                            : item["RAG CW+1"] == 0
                            ? "R"
                            : "A"
                          : "-"}
                      </Typography>
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        width: "20px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        margin="auto"
                        sx={{
                          fontSize: "13px",
                          color: "#fff",
                          width: "30px",
                          height: "25px",
                          backgroundColor:
                            item["RAG CW+2"] != "-"
                              ? item["RAG CW+2"] == 2
                                ? "#57a957"
                                : item["RAG CW+2"] == 0
                                ? "#F44444"
                                : "orange"
                              : "",
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                          alignItems: "center",
                        }}
                      >
                        {item["RAG CW+2"] != "-"
                          ? item["RAG CW+2"] == 2
                            ? "G"
                            : item["RAG CW+2"] == 0
                            ? "R"
                            : "A"
                          : "-"}
                      </Typography>
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        width: "20px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        margin="auto"
                        sx={{
                          fontSize: "13px",
                          color: "#fff",
                          width: "30px",
                          height: "25px",
                          backgroundColor:
                            item["RAG CW+3"] != "-"
                              ? item["RAG CW+3"] == 2
                                ? "#57a957"
                                : item["RAG CW+3"] == 0
                                ? "#F44444"
                                : "orange"
                              : "",
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                          alignItems: "center",
                        }}
                      >
                        {item["RAG CW+3"] != "-"
                          ? item["RAG CW+3"] == 2
                            ? "G"
                            : item["RAG CW+3"] == 0
                            ? "R"
                            : "A"
                          : "-"}
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "center",
                        padding: "0px",
                        width: "60px",
                      }}
                    >
                      {item["Reason Code"]}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        maxWidth: "30px", // Set the maximum width of the TableCell
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        // with: "80px",
                      }}
                    >
                      <Typography mx="9px" fontSize="13px">
                        <Tooltip title={item["Comment RootCause"]}>
                          {" "}
                          {/* Tooltip component with the full text */}
                          {item["Comment RootCause"]
                            ? truncateText(item["Comment RootCause"], 10)
                            : "-"}
                        </Tooltip>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  {expandedRow === item["RB SKU"] && iscampaigns && (
                    <TableRow>
                      <TableCell colSpan={20}>
                        {/* Add your expanded table here */}
                        <SubTable details={campaignsData} />
                      </TableCell>
                    </TableRow>
                  )}
                  {expandedRow === item["RB SKU"] && pushAlternative && (
                    <TableRow>
                      <TableCell colSpan={20}>
                        {/* Add your expanded table here */}
                        <PushAlternativeTable details={pushAlternativeData} />
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OhrTable;
