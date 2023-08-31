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
} from "@mui/material";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Badge from "@mui/material/Badge";
import "./CustomerTable.css";

import { useNavigate } from "react-router-dom";
const startingWeek = 28;

const CustomerTable = ({ onData }) => {
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
      ppg: "1234567",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "£100",

      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "100",

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
      ppg: "1234567",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "£100",

      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "100",

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
      ppg: "1234567",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "£100",

      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "100",

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
      ppg: "1234567",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "£100",

      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "100",

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
      ppg: "1234567",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "£100",

      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "100",

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
      ppg: "1234567",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "£100",

      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "100",

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
      ppg: "1234567",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "£100",

      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "100",

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
      ppg: "1234567",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
      activepromo: "£100",

      olacw: "84%",
      olacw1: "84%",
      olacw2: "84%",
      olacw3: "84%",
      exptnetrevcw: "£100",
      exptnetrevcw1: "£100",
      exptnetrevcw2: "100",

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
                }}
              >
                Customer Inventory
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                }}
              >
                Customer Allocation
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
                Current OLA
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
                Customer Inventory
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
              <TableCell
                sx={{
                  border: "",
                  width: "110px",
                  textAlign: "center",
                  border: "1px solid #dcdcdc",
                  backgroundColor: "#E5EBEF",
                }}
              >
                OLA Uplift estimation
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
                Cost estimation
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
                <TableCell>
                  <Typography fontSize="13px">{item.recomscore}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">{item.sku}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">{item.sku}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="13px">{item.title}</Typography>
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
                  textAlign: "center",
                  color: "#415A6C",
                }}
              >
                Current OLA
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
                  Customer inventory
                </Typography>
              </TableCell>

              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                }}
              >
                <Typography className="table-h1-title">Customer Woc</Typography>
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
                Sell-out forecast
              </TableCell>

              <TableCell
                colSpan={4}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                }}
              >
                <Typography className="table-h1-title">
                  Historic ePOS actuals
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
                <Typography className="table-h1-title">
                  ePOS variance
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
                <Typography className="table-h1-title">
                  Reckitt Sell-in forecast
                </Typography>
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
                <Typography className="cw"> CW </Typography>
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
                    sx={{
                      display: "flex",
                      gap: "16px",
                      padding: "12px",
                      border: "none",
                    }}
                    border="1px solid red"
                  >
                    <Box
                      className="rbsku-expand"
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
                            // marginTop: "21px",
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
                            // marginTop: "21px",
                            backgroundColor: "transparent",
                          }}
                        />
                      )}
                    </Box>
                    <Box
                      className="rbsku-expand"
                      sx={{
                        alignItems: "center",
                      }}
                    >
                      <Typography ml="-8px" fontSize="13px" mt="3px">
                        {item.rbsku}
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
                    {item.ppg}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      fontSize: "13px",
                      padding: "0px",
                    }}
                  >
                    {item.description}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      fontSize: "13px",
                      // border: "1px solid",
                      padding: "0px",
                    }}
                  >
                    {item.rrsegment}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <Typography mx="7px" fontSize="13px">
                      {item.woc}
                    </Typography>
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "center" }}
                    sx={{ textAlign: "center", padding: "0px" }}
                  >
                    {item.activepromo}
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "center" }}
                    sx={{ textAlign: "center", padding: "0px" }}
                  >
                    {item.activepromo}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
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
                  <TableCell style={{ textAlign: "center" }}>
                    <Typography mx="6px" fontSize="13px">
                      {item.olacw1}
                    </Typography>
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <Typography mx="6px" fontSize="13px">
                      {item.olacw2}
                    </Typography>
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <Typography mx="6px" fontSize="13px">
                      {item.olacw3}
                    </Typography>
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
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
                    <Box display="flex"  ml="40px">
                      <Typography fontSize="15px" mt="-5px">
                        {item.exptnetrevcw2}
                      </Typography>
                      <Typography
                        fontSize={13}
                        sx={{
                          marginLeft: "12px",
                          marginTop: "2px",
                          fontWeight: "600",
                          color:
                            item.exptnetrevcw2 >= item.exptnetrevcw2
                              ? "green"
                              : "red",
                        }}
                      >
                        {item.exptnetrevcw2}
                      </Typography>
                    </Box>
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

export default CustomerTable;
