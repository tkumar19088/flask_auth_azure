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
import { useSelector } from "react-redux";

const startingWeek = 28;

const OhrTable = ({ onData }) => {
  const navigate = useNavigate();

  const data = useSelector((state) => state.sidebar.overviewhighriskdata);
  console.log(data);

  const [expandedRow, setExpandedRow] = useState(null);
  const [pushAlternative, setpushAlternative] = useState(false);
  const [filteredData, setfilteredData] = useState([]);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  // Function to handle row click and expand/collapse accordion
  const handleRowClick = (rowId) => {
    setpushAlternative(false);
    if (expandedRow === rowId) {
      setExpandedRow(null);
    } else {
      setExpandedRow(rowId);
    }
  };

  const handlePushAlternative = () => {
    setpushAlternative(true);
  };
  const handleReallocate = () => {
    navigate("/stockreallocation");
  };
  // const data = [
  //   {
  //     "Active Promo": "Yes",
  //     Brand: "Harpic",
  //     "Comment RootCause":
  //       "factory delays and SOF, stock being loaded 27.06, ETA 12.07;  C0 - Factory & Supply Planning related issue;  ;  0",
  //     Description: "HARPC,GB,6X8 TAB,LAV CLNR",
  //     "Exp NR CW": 2801.74,
  //     "Exp NR CW+1": 5912.99,
  //     "Exp NR CW+2": 9814.04,
  //     "Exp NR CW+3": 6362.18,
  //     "OLA PCT CW": 0.93,
  //     "OLA PCT CW+1": 0.74,
  //     "OLA PCT CW+2": 0.88,
  //     "OLA PCT CW+3": 0.95,
  //     PPG: 9920845,
  //     "RAG CW": "A",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3028027,
  //     "Reason Code": "E0",
  //     "Reckitt WOC": 3.0,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Airwick",
  //     "Comment RootCause": ";  ;  ;  0",
  //     Description: "AWICK,GB,PANDORA VANILLA",
  //     "Exp NR CW": 8727.12,
  //     "Exp NR CW+1": 6580.38,
  //     "Exp NR CW+2": 2547.08,
  //     "Exp NR CW+3": 5499.84,
  //     "OLA PCT CW": 0.88,
  //     "OLA PCT CW+1": 0.71,
  //     "OLA PCT CW+2": 0.71,
  //     "OLA PCT CW+3": 0.72,
  //     PPG: 8952547,
  //     "RAG CW": "G",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3126431,
  //     "Reason Code": "E2",
  //     "Reckitt WOC": 3.0,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Finish",
  //     "Comment RootCause": ";  ;  ;  0",
  //     Description: "FINSH,GB,DWC REGLR 8X250ML",
  //     "Exp NR CW": 1604.63,
  //     "Exp NR CW+1": 481.34,
  //     "Exp NR CW+2": 1491.35,
  //     "Exp NR CW+3": 9357.35,
  //     "OLA PCT CW": 0.92,
  //     "OLA PCT CW+1": 0.92,
  //     "OLA PCT CW+2": 0.69,
  //     "OLA PCT CW+3": 0.76,
  //     PPG: 8289222,
  //     "RAG CW": "G",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3249097,
  //     "Reason Code": "E0",
  //     "Reckitt WOC": 2.8,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Airwick",
  //     "Comment RootCause":
  //       ";  ;  ;  approx 3300 cs was sped up for end of wk 28 (PMs not confirmed yet)",
  //     Description: "AWICK,GB,EUCFREES 8X237ML",
  //     "Exp NR CW": 9218.49,
  //     "Exp NR CW+1": 3688.21,
  //     "Exp NR CW+2": 901.02,
  //     "Exp NR CW+3": 8948.62,
  //     "OLA PCT CW": 0.75,
  //     "OLA PCT CW+1": 0.74,
  //     "OLA PCT CW+2": 0.8,
  //     "OLA PCT CW+3": 0.75,
  //     PPG: 1710831,
  //     "RAG CW": "A",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "A",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3168444,
  //     "Reason Code": "E3",
  //     "Reckitt WOC": 3.0,
  //   },
  //   {
  //     "Active Promo": "Yes",
  //     Brand: "Airwick",
  //     "Comment RootCause": ";  B0 - S&OP/Demand Planning;  ;  0",
  //     Description: "AWICK,GB,DOLPHIN MEDSUN *6",
  //     "Exp NR CW": 626.48,
  //     "Exp NR CW+1": 1264.46,
  //     "Exp NR CW+2": 7085.81,
  //     "Exp NR CW+3": 4680.48,
  //     "OLA PCT CW": 0.72,
  //     "OLA PCT CW+1": 0.95,
  //     "OLA PCT CW+2": 0.73,
  //     "OLA PCT CW+3": 0.93,
  //     PPG: 7002824,
  //     "RAG CW": "G",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3013422,
  //     "Reason Code": "E1",
  //     "Reckitt WOC": 2.0,
  //   },
  //   {
  //     "Active Promo": "Yes",
  //     Brand: "Finish",
  //     "Comment RootCause":
  //       "Obsolete ;  L0 - Obsolete / Discontinued items;  ;  0",
  //     Description: "FINSH,GB,PWR ESS LEM 16X15TABS",
  //     "Exp NR CW": 4822.97,
  //     "Exp NR CW+1": 2860.23,
  //     "Exp NR CW+2": 4401.06,
  //     "Exp NR CW+3": 3838.75,
  //     "OLA PCT CW": 0.87,
  //     "OLA PCT CW+1": 0.66,
  //     "OLA PCT CW+2": 0.76,
  //     "OLA PCT CW+3": 0.72,
  //     PPG: 1670250,
  //     "RAG CW": "G",
  //     "RAG CW+1": "R",
  //     "RAG CW+2": "R",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3205612,
  //     "Reason Code": "E0",
  //     "Reckitt WOC": 3.0,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Finish",
  //     "Comment RootCause":
  //       "Obsolete;  L0 - Obsolete / Discontinued items;  ;  0",
  //     Description: "FINSH,GB,POWER AIO REG 4X80TAB",
  //     "Exp NR CW": 2306.49,
  //     "Exp NR CW+1": 9833.61,
  //     "Exp NR CW+2": 2657.59,
  //     "Exp NR CW+3": 1286.49,
  //     "OLA PCT CW": 0.88,
  //     "OLA PCT CW+1": 0.87,
  //     "OLA PCT CW+2": 0.75,
  //     "OLA PCT CW+3": 0.74,
  //     PPG: 5275881,
  //     "RAG CW": "R",
  //     "RAG CW+1": "R",
  //     "RAG CW+2": "R",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3204693,
  //     "Reason Code": "E1",
  //     "Reckitt WOC": 3.0,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Calgon",
  //     "Comment RootCause": ";  ;  ;  0",
  //     Description: "CALGN,GB,HYGIENE GEL 1.2L",
  //     "Exp NR CW": 7421.23,
  //     "Exp NR CW+1": 3439.46,
  //     "Exp NR CW+2": 2223.13,
  //     "Exp NR CW+3": 6646.96,
  //     "OLA PCT CW": 0.79,
  //     "OLA PCT CW+1": 0.75,
  //     "OLA PCT CW+2": 0.95,
  //     "OLA PCT CW+3": 0.71,
  //     PPG: 8583822,
  //     "RAG CW": "G",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3264603,
  //     "Reason Code": "E3",
  //     "Reckitt WOC": 3.0,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Airwick",
  //     "Comment RootCause": ";  ;  ;  0",
  //     Description: "AWICK,GB,CRISP LNN RF3X2X250ML",
  //     "Exp NR CW": 835.82,
  //     "Exp NR CW+1": 2654.74,
  //     "Exp NR CW+2": 131.49,
  //     "Exp NR CW+3": 7577.6,
  //     "OLA PCT CW": 0.95,
  //     "OLA PCT CW+1": 0.93,
  //     "OLA PCT CW+2": 0.71,
  //     "OLA PCT CW+3": 0.92,
  //     PPG: 1762699,
  //     "RAG CW": "G",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3251952,
  //     "Reason Code": "E1",
  //     "Reckitt WOC": 2.0,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Airwick",
  //     "Comment RootCause": ";  ;  ;  0",
  //     Description: "AWICK,GB,FM PUR SPRG 3X2X250ML",
  //     "Exp NR CW": 1940.62,
  //     "Exp NR CW+1": 1835.99,
  //     "Exp NR CW+2": 5005.81,
  //     "Exp NR CW+3": 2681.03,
  //     "OLA PCT CW": 0.69,
  //     "OLA PCT CW+1": 0.89,
  //     "OLA PCT CW+2": 0.7,
  //     "OLA PCT CW+3": 0.93,
  //     PPG: 8190542,
  //     "RAG CW": "G",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3240631,
  //     "Reason Code": "E0",
  //     "Reckitt WOC": 2.0,
  //   },
  //   {
  //     "Active Promo": "Yes",
  //     Brand: "Vanish",
  //     "Comment RootCause": "At SS;  ;  ;  0",
  //     Description: "VANSH,GB,GOLD WHT 6X1.5KG",
  //     "Exp NR CW": 9501.4,
  //     "Exp NR CW+1": 1868.63,
  //     "Exp NR CW+2": 7381.05,
  //     "Exp NR CW+3": 4382.62,
  //     "OLA PCT CW": 0.91,
  //     "OLA PCT CW+1": 0.91,
  //     "OLA PCT CW+2": 0.8,
  //     "OLA PCT CW+3": 0.86,
  //     PPG: 5379724,
  //     "RAG CW": "G",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3258416,
  //     "Reason Code": "E3",
  //     "Reckitt WOC": 3.0,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Harpic",
  //     "Comment RootCause": "allocating stock from 1200;  ;  ;  0",
  //     Description: "HARPC,GB,BL,EUCALYPTS 12X750ML",
  //     "Exp NR CW": 2502.2,
  //     "Exp NR CW+1": 5507.44,
  //     "Exp NR CW+2": 1170.8,
  //     "Exp NR CW+3": 6827.93,
  //     "OLA PCT CW": 0.85,
  //     "OLA PCT CW+1": 0.81,
  //     "OLA PCT CW+2": 0.82,
  //     "OLA PCT CW+3": 0.68,
  //     PPG: 8736023,
  //     "RAG CW": "G",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3038099,
  //     "Reason Code": "E1",
  //     "Reckitt WOC": 2.0,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Airwick",
  //     "Comment RootCause": ";  ;  ;  0",
  //     Description: "AWICK,GB,PINEAP AMB CDL 1X500G",
  //     "Exp NR CW": 5824.88,
  //     "Exp NR CW+1": 7014.73,
  //     "Exp NR CW+2": 5980.74,
  //     "Exp NR CW+3": 9999.09,
  //     "OLA PCT CW": 0.95,
  //     "OLA PCT CW+1": 0.91,
  //     "OLA PCT CW+2": 0.73,
  //     "OLA PCT CW+3": 0.82,
  //     PPG: 3998963,
  //     "RAG CW": "A",
  //     "RAG CW+1": "A",
  //     "RAG CW+2": "A",
  //     "RAG CW+3": "A",
  //     "RB SKU": 3188839,
  //     "Reason Code": "E1",
  //     "Reckitt WOC": 6.0,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Airwick",
  //     "Comment RootCause":
  //       "SOF driven by B&M, ProdOrd: 7509 on 01/07& that will bring us back to SS;  B0 - S&OP/Demand Planning;  ;  0",
  //     Description: "AWICK,GB,FM RF WRP 3X2X250ML",
  //     "Exp NR CW": 8063.25,
  //     "Exp NR CW+1": 8976.12,
  //     "Exp NR CW+2": 1686.29,
  //     "Exp NR CW+3": 4775.5,
  //     "OLA PCT CW": 0.76,
  //     "OLA PCT CW+1": 0.77,
  //     "OLA PCT CW+2": 0.88,
  //     "OLA PCT CW+3": 0.68,
  //     PPG: 3858094,
  //     "RAG CW": "G",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3247127,
  //     "Reason Code": "E2",
  //     "Reckitt WOC": 2.0,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Finish",
  //     "Comment RootCause": ";  ;  ;  0",
  //     Description: "FINSH,GB,POWER AIO REG6X20TAB",
  //     "Exp NR CW": 8136.01,
  //     "Exp NR CW+1": 7287.58,
  //     "Exp NR CW+2": 7425.15,
  //     "Exp NR CW+3": 4030.55,
  //     "OLA PCT CW": 0.91,
  //     "OLA PCT CW+1": 0.77,
  //     "OLA PCT CW+2": 0.94,
  //     "OLA PCT CW+3": 0.83,
  //     PPG: 6110344,
  //     "RAG CW": "G",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3205208,
  //     "Reason Code": "E1",
  //     "Reckitt WOC": 2.4,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Calgon",
  //     "Comment RootCause":
  //       "Not at SS - OOS risk WC 17.07;  B0 - S&OP/Demand Planning;  0;  0",
  //     Description: "CALGN,GB,4 IN ONE 5X45 TABS",
  //     "Exp NR CW": 8034.88,
  //     "Exp NR CW+1": 5630.77,
  //     "Exp NR CW+2": 3510.68,
  //     "Exp NR CW+3": 7724.66,
  //     "OLA PCT CW": 0.93,
  //     "OLA PCT CW+1": 0.77,
  //     "OLA PCT CW+2": 0.66,
  //     "OLA PCT CW+3": 0.68,
  //     PPG: 2069202,
  //     "RAG CW": "R",
  //     "RAG CW+1": "R",
  //     "RAG CW+2": "A",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3248070,
  //     "Reason Code": "E1",
  //     "Reckitt WOC": 3.0,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Calgon",
  //     "Comment RootCause":
  //       "Obsolete - Rekey to 3246420;  L0 - Obsolete / Discontinued items;  ;  0",
  //     Description: "CALGN,GB,GEL,6X750ML",
  //     "Exp NR CW": 2322.48,
  //     "Exp NR CW+1": 9300.38,
  //     "Exp NR CW+2": 1125.6,
  //     "Exp NR CW+3": 1403.59,
  //     "OLA PCT CW": 0.71,
  //     "OLA PCT CW+1": 0.79,
  //     "OLA PCT CW+2": 0.69,
  //     "OLA PCT CW+3": 0.69,
  //     PPG: 8085920,
  //     "RAG CW": "G",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 8083252,
  //     "Reason Code": "E1",
  //     "Reckitt WOC": 2.4,
  //   },
  //   {
  //     "Active Promo": "Yes",
  //     Brand: "Finish",
  //     "Comment RootCause": "NPD;  ;  ;  0",
  //     Description: "FINSH,GB,PWR ESS REG 7X50TABS",
  //     "Exp NR CW": 3755.36,
  //     "Exp NR CW+1": 9636.49,
  //     "Exp NR CW+2": 450.96,
  //     "Exp NR CW+3": 3002.49,
  //     "OLA PCT CW": 0.78,
  //     "OLA PCT CW+1": 0.67,
  //     "OLA PCT CW+2": 0.8,
  //     "OLA PCT CW+3": 0.9,
  //     PPG: 2637730,
  //     "RAG CW": "R",
  //     "RAG CW+1": "R",
  //     "RAG CW+2": "R",
  //     "RAG CW+3": "R",
  //     "RB SKU": 3261397,
  //     "Reason Code": "E1",
  //     "Reckitt WOC": 3.0,
  //   },
  //   {
  //     "Active Promo": "Yes",
  //     Brand: "Finish",
  //     "Comment RootCause": ";  ;  ;  0",
  //     Description: "FINSH,GB,QTM ULT LEM 4X100TABS",
  //     "Exp NR CW": 2535.44,
  //     "Exp NR CW+1": 6671.96,
  //     "Exp NR CW+2": 9698.94,
  //     "Exp NR CW+3": 1766.75,
  //     "OLA PCT CW": 0.87,
  //     "OLA PCT CW+1": 0.84,
  //     "OLA PCT CW+2": 0.91,
  //     "OLA PCT CW+3": 0.88,
  //     PPG: 9931973,
  //     "RAG CW": "G",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3204725,
  //     "Reason Code": "E1",
  //     "Reckitt WOC": 2.4,
  //   },
  //   {
  //     "Active Promo": "No",
  //     Brand: "Airwick",
  //     "Comment RootCause": ";  ;  ;  0",
  //     Description: "AWICK,GB,LE KIT WRP 4X19ML",
  //     "Exp NR CW": 1761.68,
  //     "Exp NR CW+1": 4903.32,
  //     "Exp NR CW+2": 1282.69,
  //     "Exp NR CW+3": 8177.28,
  //     "OLA PCT CW": 0.81,
  //     "OLA PCT CW+1": 0.78,
  //     "OLA PCT CW+2": 0.69,
  //     "OLA PCT CW+3": 0.69,
  //     PPG: 9465786,
  //     "RAG CW": "G",
  //     "RAG CW+1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": 3247350,
  //     "Reason Code": "E3",
  //     "Reckitt WOC": 3.0,
  //   },
  // ];
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
                }}
              >
                Start Date
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                }}
              >
                End Date
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                }}
              >
                Offer Description
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
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
                }}
              >
                Customer <br />
                Allocation
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {details.map((item, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                  textAlign: "center",
                }}
              >
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.campaignanme}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.startdate}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.enddate}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.skufocused}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.activestatus}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.retailersinvolved}
                  </Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.retailerinventory}
                  </Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.rbwherehouseinventory}
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
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "-3px", marginBottom: "10px" }}
        >
          <Button
            variant="contained"
            size="medium"
            startIcon={<ReportProblemOutlinedIcon sx={{ color: "white" }} />}
            sx={{ backgroundColor: "#415A6C" }}
          >
            Choose a Mitigation Strategy
          </Button>
        </Box>
        <Box display="flex" className="ms-buttons">
          <Box className="ms-grid" onClick={handlePushAlternative}>
            <Typography className="ms-gridtitle">Push Alternative</Typography>
          </Box>
          <Box className="ms-grid" onClick={handleReallocate}>
            <Typography className="ms-gridtitle">Reallocate</Typography>
          </Box>
          <Box className="ms-grid">
            <Badge badgeContent="Coming Soon" className="redirect-badge">
              <Typography className="ms-gridtitle">Redirect</Typography>
            </Badge>
          </Box>
        </Box>
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
                }}
              >
                Active Camplaigns
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "110px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                }}
              >
                Reckitt Stock on hand
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "130px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                }}
              >
                Custom inventory
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "110px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                }}
              >
                Sell-in forecast
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "110px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                }}
              >
                Sell-out forecast
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "110px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                }}
              >
                Customer Woc
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {details.map((item, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                  padding: "0px",
                }}
              >
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.recomscore}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.sku}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.sku}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.title}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.activecamp}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.stockavailblerb}
                  </Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.stockavailableamz}
                  </Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.sellinforecast}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">
                    {item.selloutforecast}
                  </Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Typography fontSize="13px">{item.wocestimation}</Typography>
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
      <TableContainer style={{ maxHeight: 686, width: "100%" }}>
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
                }}
              >
                <Typography className="table-h1-title">Reckitt WOC</Typography>
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
                  Service Level
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
                    Expected Net Revenue
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
                        gap: "16px",
                        padding: "12px",
                        border: "none",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        className="rbsku-expand"
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        {expandedRow === item["RB SKU"] ? (
                          <RemoveIcon
                            fontSize="medium"
                            sx={{
                              color: "#415A6C",
                              cursor: "pointer",
                              fontWeight: "800",
                              // marginTop: "-1px",
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
                              // marginTop: "-1px",
                              marginTop: "4px",
                              backgroundColor: "transparent",
                            }}
                          />
                        )}
                      </Box>
                      <Box className="rbsku-expand">
                        <Typography
                          ml="-8px"
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
                        maxWidth: "30px", // Set the maximum width of the TableCell
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
                        padding: "0px",
                      }}
                    >
                      {item.Brand}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      <Typography mx="7px" fontSize="13px">
                        {item["Reckitt WOC"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center" }}
                      sx={{ textAlign: "center", padding: "0px" }}
                    >
                      {item["Active Promo"]}
                    </TableCell>
                    <TableCell style={{ textAlign: "center", width: "20px" }}>
                      <Typography
                        mx="10px"
                        sx={{
                          textAlign: "center",
                          fontSize: "13px",
                        }}
                      >
                        {item["OLA PCT CW"]}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ textAlign: "center", width: "20px" }}>
                      <Typography mx="6px" fontSize="13px">
                        {item["OLA PCT CW+1"]}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ textAlign: "center", width: "20px" }}>
                      <Typography mx="6px" fontSize="13px">
                        {item["OLA PCT CW+2"]}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ textAlign: "center", width: "20px" }}>
                      <Typography mx="6px" fontSize="13px">
                        {item["OLA PCT CW+3"]}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ textAlign: "center", width: "20px" }}>
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
                    <TableCell style={{ textAlign: "center", width: "20px" }}>
                      <Typography fontSize="13px">
                        {item["Exp NR CW+1"]}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ textAlign: "center", width: "20px" }}>
                      <Typography fontSize="13px">
                        {item["Exp NR CW+2"]}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ textAlign: "center", width: "20px" }}>
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
                            item["RAG CW"] == "G"
                              ? "#57a957"
                              : item["RAG CW"] == "R"
                              ? "#F44444"
                              : "orange",
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                          alignItems: "center",
                        }}
                      >
                        {item["RAG CW"]}
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
                            item["RAG CW+1"] == "G"
                              ? "#57a957"
                              : item["RAG CW+1"] == "R"
                              ? "#F44444"
                              : "orange",
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                          alignItems: "center",
                        }}
                      >
                        {item["RAG CW+1"]}
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
                            item["RAG CW+2"] == "G"
                              ? "#57a957"
                              : item["RAG CW+2"] == "R"
                              ? "#F44444"
                              : "orange",
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                          alignItems: "center",
                        }}
                      >
                        {item["RAG CW+2"]}
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
                            item["RAG CW+3"] == "G"
                              ? "#57a957"
                              : item["RAG CW+3"] == "R"
                              ? "#F44444"
                              : "orange",
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                          alignItems: "center",
                        }}
                      >
                        {item["RAG CW+3"]}
                      </Typography>
                    </TableCell>

                    <TableCell sx={{ textAlign: "center", padding: "0px" }}>
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
                  {expandedRow === item["RB SKU"] && (
                    <TableRow>
                      <TableCell colSpan={20}>
                        {/* Add your expanded table here */}
                        <SubTable details={item.campaugns} />
                      </TableCell>
                    </TableRow>
                  )}
                  {expandedRow === item["RB SKU"] && pushAlternative && (
                    <TableRow>
                      <TableCell colSpan={20}>
                        {/* Add your expanded table here */}
                        <PushAlternativeTable
                          details={item.pushAlternativeTable}
                        />
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
