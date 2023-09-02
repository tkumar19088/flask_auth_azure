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

import { useNavigate } from "react-router-dom";
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
      ppg: "1234567",
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
          rbwherehouseinventory: "1000.X",
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
          rbwherehouseinventory: "1000.Y",
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
          rbwherehouseinventory: "1000.Y",
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
      ppg: "1234567",
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
      ppg: "1234567",
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
      ppg: "1234567",
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
      ppg: "1234567",
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
          <Button variant="contained" size="medium" startIcon={<ReportProblemOutlinedIcon  sx={{ color: "red"}} />} sx={{backgroundColor:"#415A6C"}}>
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
                <Typography className="table-h1-title">WOC</Typography>
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
                <Typography className="table-h1-title">
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
              <TableCell
                sx={{
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
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
                    <Box className="rbsku-expand">
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
                  <TableCell style={{ textAlign: "center" }}>
                    <Typography mx="6px" fontSize="13px">
                      {item.exptnetrevcw1}
                    </Typography>
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <Typography mx="6px" fontSize="13px">
                      {item.exptnetrevcw2}
                    </Typography>
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
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

                  <TableCell sx={{ textAlign: "center", padding: "0px" }}>
                    {item.reasoncode}
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
