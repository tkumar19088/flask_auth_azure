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
  Paper,
  Stack,
  Grid,
} from "@mui/material";
import { useState } from "react";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Badge from "@mui/material/Badge";

import "./ohr.css";

import { useNavigate } from "react-router-dom";
// import MyBreadcrumbs from "./MyBreadcrumbs";
const startingWeek = 28;

const OhrTable = ({ onData }) => {
  const navigate = useNavigate();
  const [expandedRow, setExpandedRow] = useState(null);
  const [pushAlternative, setpushAlternative] = useState(false);

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

  const [data, setData] = useState([
    {
      rbsku: "010612",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "Yes",
      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "£100",
      exptnetrevcw3: "£100",
      ragcw: "G",
      ragcw1: "R",
      ragcw2: "A",
      ragcw3: "G",
      reasoncode: "E0",
      comments: "Soft change to 3234328",
      campaugns: [
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Clubcard- CC Air freshener",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Clubcard- Was 9.25 Now 6.00",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
      ],
      pushAlternativeTable: [
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
      ],

      details: [
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      rbsku: "010613",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "Yes",
      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "£100",
      exptnetrevcw3: "£100",
      ragcw: "G",
      ragcw1: "R",
      ragcw2: "A",
      ragcw3: "G",
      reasoncode: "E0",
      comments: "Soft change to 3234328",
      campaugns: [
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Clubcard- CC Air freshener",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Clubcard- Was 9.25 Now 6.00",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
      ],
      pushAlternativeTable: [
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
      ],

      details: [
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      rbsku: "010614",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "No",
      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "£100",
      exptnetrevcw3: "£100",
      ragcw: "G",
      ragcw1: "R",
      ragcw2: "A",
      ragcw3: "G",
      reasoncode: "E0",
      comments: "Soft change to 3234328",
      campaugns: [
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Yes",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Yes",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
      ],
      pushAlternativeTable: [
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
      ],

      details: [
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      rbsku: "010615",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "Yes",
      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "£100",
      exptnetrevcw3: "£100",
      ragcw: "G",
      ragcw1: "R",
      ragcw2: "A",
      ragcw3: "G",
      reasoncode: "E0",
      comments: "Soft change to 3234328",
      campaugns: [
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Yes",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Yes",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
      ],
      pushAlternativeTable: [
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
      ],

      details: [
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      rbsku: "010616",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "No",
      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "£100",
      exptnetrevcw3: "£100",
      ragcw: "G",
      ragcw1: "R",
      ragcw2: "A",
      ragcw3: "G",
      reasoncode: "E0",
      comments: "Soft change to 3234328",
      campaugns: [
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Yes",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Yes",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
      ],
      pushAlternativeTable: [
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
      ],

      details: [
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      rbsku: "010617",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "Yes",
      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "£100",
      exptnetrevcw3: "£100",
      ragcw: "G",
      ragcw1: "R",
      ragcw2: "A",
      ragcw3: "G",
      reasoncode: "E0",
      comments: "Soft change to 3234328",
      campaugns: [
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Yes",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Yes",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
      ],
      pushAlternativeTable: [
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
      ],

      details: [
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      rbsku: "010619",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "Yes",
      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "£100",
      exptnetrevcw3: "£100",
      ragcw: "G",
      ragcw1: "R",
      ragcw2: "A",
      ragcw3: "G",
      reasoncode: "E0",
      comments: "Soft change to 3234328",
      campaugns: [
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Yes",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Yes",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
      ],
      pushAlternativeTable: [
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
      ],

      details: [
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
    },
    {
      rbsku: "010620",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "Yes",
      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "£100",
      exptnetrevcw3: "£100",
      ragcw: "G",
      ragcw1: "R",
      ragcw2: "A",
      ragcw3: "G",
      reasoncode: "E0",
      comments: "Soft change to 3234328",
      campaugns: [
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Yes",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
        {
          campaignanme: "Airwick special",
          startdate: "12/05/2023",
          enddate: "31/08/2023",
          skufocused: "Yes",
          activestatus: "Active",
          retailersinvolved: "Tesco",
          retailerinventory: "250",
          rbwherehouseinventory: "1000",
          requestdeactivation: "No",
        },
      ],
      pushAlternativeTable: [
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
        {
          recomscore: "96%",
          title: "Airwick Electric Strawberry",
          sku: "1236467867",
          activecamp: "Active",
          stockavailblerb: "1,345",
          stockavailableamz: "234",
          sellinforecast: "234",
          selloutforecast: "100",
          wocestimation: "100",
          olaupliftestimation: "100",
          costestimation: "500",
          select: "Yes",
        },
      ],

      details: [
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
        {
          skuname: "Airwick",
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
          quantityOrdered: "300",
          quantityForcasted: "500",
          percentageDescrepency: "-63.64%",
        },
      ],
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
        my={2}
        color="#415A6C"
        className="ms-title"
        style={{
          textAlign: "left",
        }}
      >
        Recent / Current / Upcoming Campaigns
      </Typography>

      <TableContainer component={Paper} className="tablecell-header">
        <Table className="campaignsTable">
          <TableHead>
            <TableRow className="tablecell-inside">
              <TableCell
                sx={{ textAlign: "center", border: "1px solid #dcdcdc" }}
                border="1px solid #dddddd"
              >
                Campaign Name
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", border: "1px solid #dcdcdc" }}
              >
                Start Date
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", border: "1px solid #dcdcdc" }}
              >
                End Date
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", border: "1px solid #dcdcdc" }}
              >
                Offer Description
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", border: "1px solid #dcdcdc" }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", border: "1px solid #dcdcdc" }}
              >
                Customer
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", border: "1px solid #dcdcdc" }}
              >
                Customer Inventory
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", border: "1px solid #dcdcdc" }}
              >
                Customer Allocation
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", border: "1px solid #dcdcdc" }}
              >
                Request Deactivation
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
                  <Typography fontSize="13px">{item.campaignanme}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">{item.startdate}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">{item.enddate}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">{item.skufocused}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">{item.activestatus}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.retailersinvolved}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.retailerinventory}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.rbwherehouseinventory}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.requestdeactivation}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        direction="row"
        justifyContent="space-between"
        backgroundColor="#E5EBEF"
        className="choosems-stack"
        // my={2}
      >
        <Typography color="#415A6C" className="ms-title">
          Choose a Mitigation Strategy
        </Typography>
        <Box display="flex" className="ms-buttons">
          <Box
            className="ms-grid"
            bgcolor="#57a957"
            color="white"
            borderRadius="50px"
            onClick={handlePushAlternative}
          >
            <Typography className="ms-gridtitle">Push Alternative</Typography>
          </Box>
          <Box
            className="ms-grid"
            bgcolor="#f44444"
            color="white"
            borderRadius="50px"
            onClick={handleReallocate}
          >
            <Typography className="ms-gridtitle">Reallocate</Typography>
          </Box>
          <Box
            className="ms-grid"
            bgcolor="#b6acac"
            color="white"
            borderRadius="50px"
          >
            <Badge badgeContent="Coming Soon" className="redirect-badge">
              <Typography className="ms-gridtitle">Redirect</Typography>
            </Badge>
          </Box>
          <Box
            className="ms-grid"
            bgcolor="#b6acac"
            color="white"
            borderRadius="50px"
          >
            <Badge badgeContent="Coming Soon" className="retailer-badge">
              <Typography className="ms-gridtitle">
                Retailer Negotiation
              </Typography>
            </Badge>
          </Box>
        </Box>
      </Stack>
    </div>
  );

  const PushAlternativeTable = ({ details }) => (
    <div>
      <TableContainer component={Paper} className="tablecell-header">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ border: "", width: "60px", border: "1px solid #dcdcdc" }}
              >
                Recom.Score
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                }}
              >
                SKU
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                }}
              >
                Active Camplaigns
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                }}
              >
                Stock Available RB
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                }}
              >
                Stock Available AMZ
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                }}
              >
                Sell-in forecast
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                }}
              >
                Sell-out forecast
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                }}
              >
                Customer Woc
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                }}
              >
                OLA Uplift estimation
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                }}
              >
                Cost estimation
              </TableCell>
              <TableCell
                sx={{
                  border: "",
                  width: "60px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                }}
              >
                Select
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
                  <Typography fontSize="13px">{item.recomscore}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">{item.title}</Typography>
                </TableCell>

                <TableCell>
                  <Typography fontSize="13px">{item.sku}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">{item.activecamp}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.stockavailblerb}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.stockavailableamz}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">{item.sellinforecast}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.selloutforecast}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">{item.wocestimation}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">
                    {item.olaupliftestimation}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">{item.costestimation}</Typography>
                </TableCell>
                <TableCell sx={{ color: "#F08C2A", textAlign: "center" }}>
                  <Box
                    sx={{
                      borderRadius: "5px 5px",
                      border: "1px solid #415A6C",
                      padding: "4px 0px 0px 8px",
                      display: "flex",
                      justifyContent: "space-around",
                      color: "#415A6C",
                      cursor: "pointer",
                    }}
                    width={{ lg: "90px" }}
                    ml={{ lg: "-10px" }}
                  >
                    <Typography
                      fontSize={{ lg: "11px" }}
                      sx={{ paddingBottom: "5px" }}
                    >
                      Push
                    </Typography>
                  </Box>
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
      <TableContainer style={{ maxHeight: 642, width: "100%" }}>
        <Table>
          <TableHead className="t-head">
            <TableRow className="tablerow-title">
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                }}
              >
                <Box
                  sx={{
                    // border: "1px solid",
                    display: "flex",
                    width: "90px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box color="#415A6C">
                    <Box mt="8px">
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
                  <Box textAlign="center" className="table-h1-title">
                    RB SKU
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                }}
              >
                <Typography className="table-h1-title">Description</Typography>
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
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
                <Typography className="table-h1-title">WOC</Typography>
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                }}
              >
                <Typography width="60px" className="table-h1-title">
                  Active Promo ?
                </Typography>
              </TableCell>

              <TableCell
                colSpan={4}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                }}
              >
                <Typography className="table-h1-title">OLA %</Typography>
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
                }}
              >
                <Box className="bdr-exptnetrevenue">
                  <Typography
                    className="table-h1-title"
                    sx={{
                      fontSize: "14px",
                      textAlign: "center",
                      // width: "80px",
                      // marginLeft: "-2px",
                      lineHeight: "16px",
                    }}
                  >
                    Comment/Root Cause
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow className="t-row">
              <TableCell sx={{ textAlign: "center", color: "#415A6C" }}>
                <Typography className="cw"> CW </Typography>
                <div className="brack-number">({startingWeek + 0})</div>
              </TableCell>
              <TableCell sx={{ border: "1px solid #dcdcdc", color: "#415A6C" }}>
                CW+1
                <div className="brack-number">({startingWeek + 1})</div>
              </TableCell>
              <TableCell sx={{ border: "1px solid #dcdcdc", color: "#415A6C" }}>
                CW+2
                <div className="brack-number">({startingWeek + 2})</div>
              </TableCell>
              <TableCell sx={{ border: "1px solid #dcdcdc", color: "#415A6C" }}>
                CW+3 <div className="brack-number">({startingWeek + 3})</div>
              </TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
                  textAlign: "center",
                  color: "#415A6C",
                }}
              >
                <Typography className="cw"> CW </Typography>
                <div className="brack-number">({startingWeek + 0})</div>
              </TableCell>
              <TableCell sx={{ border: "1px solid #dcdcdc", color: "#415A6C" }}>
                CW+1 <div className="brack-number">({startingWeek + 1})</div>
              </TableCell>
              <TableCell sx={{ border: "1px solid #dcdcdc", color: "#415A6C" }}>
                CW+2 <div className="brack-number">({startingWeek + 2})</div>
              </TableCell>
              <TableCell sx={{ border: "1px solid #dcdcdc", color: "#415A6C" }}>
                CW+3 <div className="brack-number">({startingWeek + 3})</div>
              </TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
                  textAlign: "center",
                  color: "#415A6C",
                }}
              >
                <Typography className="cw"> CW </Typography>
                <div className="brack-number">({startingWeek + 0})</div>
              </TableCell>
              <TableCell sx={{ border: "1px solid #dcdcdc", color: "#415A6C" }}>
                CW+1 <div className="brack-number">({startingWeek + 1})</div>
              </TableCell>
              <TableCell sx={{ border: "1px solid #dcdcdc", color: "#415A6C" }}>
                CW+2 <div className="brack-number">({startingWeek + 2})</div>
              </TableCell>
              <TableCell sx={{ border: "1px solid #dcdcdc", color: "#415A6C" }}>
                CW+3 <div className="brack-number">({startingWeek + 3})</div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <React.Fragment key={item.rbsku}>
                <TableRow
                  onClick={() => handleRowClick(item.rbsku)}
                  key={item.rbsku}
                  // className={item.checkbox ? "checked-row" : ""}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                    border: "1px solid #dcdcdc",
                  }}
                >
                  <TableCell
                    fontSize={13}
                    sx={{ display: "flex", gap: "16px" }}
                  >
                    <Box
                      mt={{ lg: "-1px" }}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {expandedRow === item.rbsku ? (
                        <RemoveIcon
                          fontSize="medium"
                          sx={{
                            color: "#415A6C",
                            cursor: "pointer",
                            fontWeight: "800",
                            // marginTop: "-1px",
                            marginTop: "21px",
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
                            marginTop: "21px",
                            backgroundColor: "transparent",
                          }}
                        />
                      )}
                    </Box>
                    <Box>
                      <Typography
                        ml="-8px"
                        fontSize="13px"
                        sx={{
                          marginTop: "23px",
                        }}
                      >
                        {item.rbsku}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        //   border: "1px solid",
                        width: "146px",
                        marginLeft: "-25px",
                        fontSize: "13px",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "13px" }}>
                    {item.rrsegment}
                  </TableCell>
                  <TableCell>
                    <Typography mx="7px" fontSize="13px">
                      {item.woc}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center", padding: "16px 16px 16px 27px" }}
                  >
                    <Typography width="40px">{item.activepromo}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      mx="10px"
                      sx={{
                        textAlign: "center",
                        fontSize: "13px",
                      }}
                    >
                      {item.olacw}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography mx="6px" fontSize="13px">
                      {item.olacw1}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography mx="6px" fontSize="13px">
                      {item.olacw2}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography mx="6px" fontSize="13px">
                      {item.olacw3}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      mx="10px"
                      sx={{
                        textAlign: "center",
                        fontSize: "13px",
                      }}
                    >
                      {item.exptnetrevcw}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography mx="6px" fontSize="13px">
                      {item.exptnetrevcw1}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography mx="6px" fontSize="13px">
                      {item.exptnetrevcw2}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography mx="6px" fontSize="13px">
                      {item.exptnetrevcw3}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      // mx="30px"
                      sx={{
                        marginLeft: "20px",
                        color: "#fff",
                        textAlign: "center",
                        fontSize: "13px",
                        // border:"1px solid",
                        width: "30px",
                        height: "25px",
                        backgroundColor:
                          item.ragcw == "G"
                            ? "#57a957"
                            : item.ragcw == "R"
                            ? "#F44444"
                            : "orange",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      {item.ragcw}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      // mx="6px"
                      sx={{
                        marginLeft: "20px",

                        fontSize: "13px",
                        color: "#fff",
                        width: "30px",
                        height: "25px",
                        backgroundColor:
                          item.ragcw1 == "G"
                            ? "#57a957"
                            : item.ragcw1 == "R"
                            ? "#F44444"
                            : "orange",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      {item.ragcw1}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      // mx="6px"
                      sx={{
                        marginLeft: "20px",
                        fontSize: "13px",
                        color: "#fff",
                        width: "30px",
                        height: "25px",
                        backgroundColor:
                          item.ragcw2 == "G"
                            ? "#57a957"
                            : item.ragcw2 == "R"
                            ? "#F44444"
                            : "orange",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      {item.ragcw2}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      // mx="6px"
                      sx={{
                        marginLeft: "20px",
                        fontSize: "13px",
                        color: "#fff",
                        width: "30px",
                        height: "25px",
                        backgroundColor:
                          item.ragcw3 == "G"
                            ? "#57a957"
                            : item.ragcw3 == "R"
                            ? "#F44444"
                            : "orange",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      {item.ragcw3}
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ textAlign: "center" }}>
                    <Typography>{item.reasoncode}</Typography>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Typography mx="9px" fontSize="13px">
                      {" "}
                      {item.comments}
                    </Typography>
                  </TableCell>
                </TableRow>
                {expandedRow === item.rbsku && (
                  <TableRow>
                    <TableCell colSpan={20}>
                      {/* Add your expanded table here */}
                      <SubTable details={item.campaugns} />
                    </TableCell>
                  </TableRow>
                )}
                {expandedRow === item.rbsku && pushAlternative && (
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OhrTable;
