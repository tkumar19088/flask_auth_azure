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
      rbsku: "010613",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
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
      rbsku: "010614",
      description: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      woc: "743",
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
    <div style={{ marginTop: "-18px" }} className="mini-table">
      <Typography
        fontSize={20}
        my={1}
        color="#415A6C"
        className="ms-title"
        style={{
          textAlign: "left",
        }}
      >
        Recent / current / Upcoming Campagins
      </Typography>

      <TableContainer component={Paper} className="tablecell-header">
        <Table>
          <TableHead>
            <TableRow className="tablecell-inside">
              <TableCell>Campaign Name</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Start Date</TableCell>
              <TableCell sx={{ textAlign: "center" }}>End Date</TableCell>
              <TableCell sx={{ textAlign: "center" }}>SKU focused?</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                Active/Not Active
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                Active/Not Active
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                Retailer Inventory
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                RB warehouse inventory
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
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
        my={3}
        backgroundColor="#E5EBEF"
        // p={4}
      >
        <Typography
          fontSize={16}
          // mx={-2}
          // my={3}
          color="#415A6C"
          className="ms-title"
        >
          Choose a Mitigation Strategy
        </Typography>
        <Box
          className="ms-grid"
          bgcolor="green"
          color="white"
          onClick={handlePushAlternative}
        >
          <Typography fontSize={20}>Push Alternative</Typography>
        </Box>
        <Box
          className="ms-grid"
          bgcolor="red"
          color="white"
          onClick={handleReallocate}
        >
          <Typography fontSize={20}>Reallocate</Typography>
        </Box>
        <Box className="ms-grid" bgcolor="white">
          <Badge badgeContent="Coming Soon" className="redirect-badge">
            <Typography fontSize={20}>Redirect</Typography>
          </Badge>
        </Box>
        <Box className="ms-grid" bgcolor="white">
          <Badge badgeContent="Coming Soon" className="retailer-badge">
            <Typography fontSize={20}>Retailer Negotiation</Typography>
          </Badge>
        </Box>
      </Stack>
    </div>
  );

  const PushAlternativeTable = ({ details }) => (
    <div style={{ marginTop: "-18px" }}>
      <TableContainer component={Paper} className="tablecell-header">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: "", width: "60px" }}>
                Recom.Score
              </TableCell>
              <TableCell
                sx={{ border: "", width: "60px", textAlign: "center" }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{ border: "", width: "60px", textAlign: "center" }}
              >
                SKU
              </TableCell>
              <TableCell
                sx={{ border: "", width: "60px", textAlign: "center" }}
              >
                Active Camplaigns
              </TableCell>
              <TableCell
                sx={{ border: "", width: "60px", textAlign: "center" }}
              >
                Stock Available RB
              </TableCell>
              <TableCell
                sx={{ border: "", width: "60px", textAlign: "center" }}
              >
                Stock Available AMZ
              </TableCell>
              <TableCell
                sx={{ border: "", width: "60px", textAlign: "center" }}
              >
                Sell-in forecast
              </TableCell>
              <TableCell
                sx={{ border: "", width: "60px", textAlign: "center" }}
              >
                Sell-out forecast
              </TableCell>
              <TableCell
                sx={{ border: "", width: "60px", textAlign: "center" }}
              >
                Customer Woc
              </TableCell>
              <TableCell
                sx={{ border: "", width: "60px", textAlign: "center" }}
              >
                OLA Uplift estimation
              </TableCell>
              <TableCell
                sx={{ border: "", width: "60px", textAlign: "center" }}
              >
                Cost estimation
              </TableCell>
              <TableCell
                sx={{ border: "", width: "60px", textAlign: "center" }}
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
      <TableContainer style={{ maxHeight: 530, width: "100%" }}>
        <Table>
          <TableHead className="t-head">
            <TableRow className="tablerow-title">
              <TableCell
                rowSpan={2}
                sx={{
                  // backgroundColor: "red",
                  // cursor: "pointer",
                  backgroundColor: "#E5EBEF",
                  // height: "20px",
                }}
                onClick={() => handleSort("skuname")}
              >
                <Box
                  className="bdr-sku"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    width: "110px",
                    // height:"40px"
                    // marginLeft: "-20px",
                  }}
                >
                  <Box className="sorting-h1-title">
                    <Box mt="5px">
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
                  <Box textAlign="center">
                    <Typography
                      fontSize={14}
                      mt="12px"
                      className="table-h1-title"
                    >
                      RB SKU
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                rowSpan={2}
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  className="bdr-skucode"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                  }}
                >
                  <Box className="sorting-h1-title">
                    <Box mt="5px">
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
                  <Box textAlign="center">
                    <Typography
                      fontSize={14}
                      mt="12px"
                      className="table-h1-title"
                    >
                      Description
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                rowSpan={2}
                onClick={() => handleSort("skucode")}
                sx={{ backgroundColor: "#E5EBEF" }}
              >
                <Box
                  className="bdr-skucode"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                  }}
                >
                  <Box className="sorting-h1-title">
                    <Box mt="5px">
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
                  <Box textAlign="center">
                    <Typography
                      fontSize={14}
                      mt="12px"
                      className="table-h1-title"
                      lineHeight="16px"
                      // width={120}
                    >
                      RR Segment
                    </Typography>
                  </Box>
                </Box>
              </TableCell>

              <TableCell
                rowSpan={2}
                onClick={() => handleSort("")}
                sx={{ textAlign: "center", backgroundColor: "#E5EBEF" }}
              >
                <Box className="bdr-timeframe">
                  <Typography
                    className="table-h1-title"
                    lineHeight="16px"
                    sx={{ fontSize: "14px", color: "#415A6C" }}
                  >
                    WOC
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                colSpan={4}
                onClick={() => handleSort("servicelevel")}
                sx={{
                  backgroundColor: "#E5EBEF",
                  // border: "1px solid",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  // display: "flex",
                }}
                // border="1px solid"
              >
                <Box
                  className="bdr-netrevenue centered-content"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "#415A6C",
                    // width: "110px",
                    justifyContent: "center",
                  }}
                >
                  <Box mx="-7px" className="sorting-ola">
                    <Box mt="5px">
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
                  <Box textAlign="center" mt="14px">
                    <Typography
                      fontSize={18}
                      lineHeight="16px"
                      // className="tabletitle-ola"
                    >
                      OLA %
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                colSpan={4}
                onClick={() => handleSort("expectednetrevenue")}
                sx={{
                  color: "#415A6C",
                  textAlign: "center",
                  backgroundColor: "#E5EBEF",
                  // borderRight: "0.1px solid red",
                }}
              >
                <Box
                  className="bdr-exptnetrevenue"
                  textAlign="center"
                  mt="14px"
                >
                  <Typography fontSize={18} lineHeight="16px">
                    Expected Net Revenue
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                colSpan={4}
                onClick={() => handleSort("expectednetrevenue")}
                sx={{
                  color: "#415A6C",
                  textAlign: "center",
                  backgroundColor: "#E5EBEF",
                  borderLeft: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                <Box className="bdr-exptnetrevenue">
                  <Typography
                    className="table-h1-title"
                    sx={{
                      fontSize: "14px",
                      textAlign: "center",
                      marginLeft: "-2px",
                      lineHeight: "16px",
                    }}
                  >
                    RAG
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                rowSpan={2}
                onClick={() => handleSort("expectednetrevenue")}
                sx={{
                  color: "#415A6C",
                  textAlign: "center",
                  backgroundColor: "#E5EBEF",
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
              <TableCell>
                CW <div className="brack-number">({startingWeek + 0})</div>
              </TableCell>
              <TableCell>
                CW+1
                <div className="brack-number">({startingWeek + 1})</div>
              </TableCell>
              <TableCell>
                CW+2
                <div className="brack-number">({startingWeek + 2})</div>
              </TableCell>
              <TableCell>
                CW+3 <div className="brack-number">({startingWeek + 3})</div>
              </TableCell>
              <TableCell>
                CW <div className="brack-number">({startingWeek + 0})</div>
              </TableCell>
              <TableCell>
                CW+1 <div className="brack-number">({startingWeek + 1})</div>
              </TableCell>
              <TableCell>
                CW+2 <div className="brack-number">({startingWeek + 2})</div>
              </TableCell>
              <TableCell>
                CW+3 <div className="brack-number">({startingWeek + 3})</div>
              </TableCell>
              <TableCell
                sx={{ borderLeft: "1px solid rgba(224, 224, 224, 1)" }}
              >
                CW <div className="brack-number">({startingWeek + 0})</div>
              </TableCell>
              <TableCell>
                CW+1 <div className="brack-number">({startingWeek + 1})</div>
              </TableCell>
              <TableCell>
                CW+2 <div className="brack-number">({startingWeek + 2})</div>
              </TableCell>
              <TableCell>
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
                      mx="10px"
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        fontSize: "13px",
                        // border:"1px solid",
                        width: "30px",
                        height: "25px",
                        backgroundColor:
                          item.ragcw == "G"
                            ? "green"
                            : item.ragcw == "R"
                            ? "red"
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
                      mx="6px"
                      sx={{
                        fontSize: "13px",
                        color: "#fff",
                        width: "30px",
                        height: "25px",
                        backgroundColor:
                          item.ragcw1 == "G"
                            ? "green"
                            : item.ragcw1 == "R"
                            ? "red"
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
                      mx="6px"
                      sx={{
                        fontSize: "13px",
                        color: "#fff",
                        width: "30px",
                        height: "25px",
                        backgroundColor:
                          item.ragcw2 == "G"
                            ? "green"
                            : item.ragcw2 == "R"
                            ? "red"
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
                      mx="6px"
                      sx={{
                        fontSize: "13px",
                        color: "#fff",
                        width: "30px",
                        height: "25px",
                        backgroundColor:
                          item.ragcw3 == "G"
                            ? "green"
                            : item.ragcw3 == "R"
                            ? "red"
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
