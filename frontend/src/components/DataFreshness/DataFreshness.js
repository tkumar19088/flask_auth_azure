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
  Grid,
  Button,
  Paper,
} from "@mui/material";
import { useState, useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DoDisturbOutlinedIcon from "@mui/icons-material/DoDisturbOutlined";
// import "./Irregularpro.css";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import LocalHospitalSharpIcon from "@mui/icons-material/LocalHospitalSharp";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import {
  updateloader,
  fetchoirregularchartdata,
  updateerrormodalpopup,
  updateerrortextmessage,
} from "../../store/actions/sidebarActions";
import loaderImage from "../../images/Logo-bar.png";

const DataFreshness = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loader = useSelector((state) => state.sidebar.loader);
  //   const data = useSelector((state) => state.sidebar.irregulardata);
  const [podetails, setpodetails] = useState([]);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };
  const data = [
    {
      BU: "Hygiene",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Airwick",
      "Data Parameter": "Reckitt SoH",
      Dataset: "Reckitt Inventory",
      Source: "Panorama",
      Frequency: "Daily",
      "Pull date": "23/10/2023",
      "power bi dashboard or file": "Airwick Reckitt inventory.pbix",
    },
    {
      BU: "Hygiene",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Airwick",
      "Data Parameter":
        "Customer Inventory,Customer SoH,Target Customer SoH,Customer WoC,Target Customer WoC,Stock Position",
      Dataset: "Customer Inventory",
      Source: "Panorama",
      Frequency: "Daily",
      "Pull date": "23/10/2023",
      "power bi dashboard or file": "Airwick retailer inventory.pbix",
    },
    {
      BU: "Hygiene",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Airwick",
      "Data Parameter":
        "Supply,Demand,Expected SOH at EOW,WOC at EOW,Case Shortages,Expected Service,Stock Position,RAG,Reason Code,Comment/Root Cause,",
      Dataset: "Forecasted supply (from factory) and Aggregated Demand",
      Source: "Seyed Houssini",
      Frequency: "Weekly (EoD Tuesday)",
      "Pull date": "17/10/2023",
      "power bi dashboard or file":
        "Market Data/Hygiene/Weekly Refresh/Weekly service projection/Weekly Service Projection Live Filev2.xlsx",
    },
    {
      BU: "Hygiene",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Airwick",
      "Data Parameter": "Customer Allocation",
      Dataset: "Allocation data",
      Source: "Seyed Houssini",
      Frequency: "Weekly (EoD Tuesday)",
      "Pull date": "17/10/2023",
      "power bi dashboard or file":
        "Market Data/Hygiene/Weekly Refresh/Allocation/export.XLSX",
    },
    {
      BU: "Hygiene",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Airwick",
      "Data Parameter":
        "Open Orders,Allocation consumed to date,Remaining allocation,Reckitt PO number,Customer PO number,PO Receipt Date,PO delivery date,PO Status,No SKUs in PO,No Irregular SKUs,Quantity Orered,%Discrepancy",
      Dataset: "PO data (Sell-in)",
      Source: "Panorama",
      Frequency: "Daily",
      "Pull date": "23/10/2023",
      "power bi dashboard or file": "Airwick sell-in.pbix",
    },
    {
      BU: "Hygiene",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Airwick",
      "Data Parameter": "Reckitt Sell in forecast,No Irregular SKUs",
      Dataset: "Sell in forecast",
      Source: "Panorama",
      Frequency: "Weekly (Monday)",
      "Pull date": "16/10/2023",
      "power bi dashboard or file": "Airwick Reckitt sell-in forecast.pbix",
    },
    {
      BU: "Hygiene",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Airwick",
      "Data Parameter": "Historic ePOS,",
      Dataset: "Sell out actuals (ePOS/POS)",
      Source: "Panorama",
      Frequency: "Weekly (Monday)",
      "Pull date": "16/10/2023",
      "power bi dashboard or file":
        "Asda Airwick sell-out.pbix Amazon Airwick sell-out.pbix",
    },
    {
      BU: "Health, Hygiene",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Airwick, Gaviscon",
      "Data Parameter":
        "Campaign Name,Start Datem End Date,Offer Description,Status,Customer",
      Dataset: "Promotion Data",
      Source: "Rachel Moorhouse",
      Frequency: "Weekly (Monday)",
      "Pull date": "25/09/2023",
      "power bi dashboard or file": "-",
    },
    {
      BU: "Health",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Gaviscon",
      "Data Parameter": "Reckitt SoH",
      Dataset: "Reckitt Inventory",
      Source: "Pulse",
      Frequency: "Daily",
      "Pull date": "23/10/2023",
      "power bi dashboard or file": "Gaviscon Reckitt inventory.pbix",
    },
    {
      BU: "Health",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Gaviscon",
      "Data Parameter":
        "Customer Inventory,Customer SoH,Target Customer SoH,Customer WoC,Target Customer WoC,Stock Position",
      Dataset: "Customer Inventory",
      Source: "Pulse",
      Frequency: "Daily",
      "Pull date": "27/09/2023",
      "power bi dashboard or file": "Gaviscon Reckitt inventory.pbix",
    },
    {
      BU: "Health",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Gaviscon",
      "Data Parameter":
        "Supply,Demand,Expected SOH at EOW,WOC at EOW,Case Shortages,Expected Service,Stock Position,RAG,Reason Code,Comment/Root Cause,",
      Dataset: "Forecasted supply (from factory) and Aggregated Demand",
      Source: "Umar Ahmed",
      Frequency: "Weekly (EoD Tuesday)",
      "Pull date": "17/10/2023",
      "power bi dashboard or file":
        "Market Data/Health/Weekly Refresh/Receipt vs Demand/Receipts vs Demand.xlsx",
    },
    {
      BU: "Health",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Gaviscon",
      "Data Parameter": "Customer Allocation",
      Dataset: "Allocation data",
      Source: "Pulse",
      Frequency: "Weekly (Monday)",
      "Pull date": "16/10/2023",
      "power bi dashboard or file": "Health allocations.pbix",
    },
    {
      BU: "Health",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Gaviscon",
      "Data Parameter":
        "Open Orders,Allocation consumed to date,Remaining allocation,Reckitt PO number,Customer PO number,PO Receipt Date,PO delivery date,PO Status,No SKUs in PO,No Irregular SKUs,Quantity Orered,%Discrepancy",
      Dataset: "PO data (Sell-in)",
      Source: "Pulse",
      Frequency: "Daily",
      "Pull date": "23/10/2023",
      "power bi dashboard or file": "Gaviscon sell-in.pbix",
    },
    {
      BU: "Health",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Gaviscon",
      "Data Parameter": "Reckitt Sell in forecast,No Irregular SKUs",
      Dataset: "Sell in forecast",
      Source: "Pulse",
      Frequency: "Does not exist",
      "Pull date": "Does not exist",
      "power bi dashboard or file": "Gaviscon sell-out.pbix",
    },
    {
      BU: "Health",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Gaviscon",
      "Data Parameter": "Historic ePOS,",
      Dataset: "Sell out actuals (ePOS/POS)",
      Source: "Pulse",
      Frequency: "Weekly (Monday)",
      "Pull date": "16/10/2023",
      "power bi dashboard or file": "Gaviscon sell-out.pbix",
    },
    {
      BU: "Health,Hygiene",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Gaviscon,Air Wick",
      "Data Parameter": "CMU Score",
      Dataset: "CMU Score",
      Source:
        "Elvira Robertson - Mapped to Health SKUs using mapping provided by Brian VanderWerff",
      Frequency: "Weekly (Monday)",
      "Pull date": "02/28/2023",
      "power bi dashboard or file": "Gaviscon sell-out.pbix",
    },
    {
      BU: "Health,Hygiene",
      Location: "United Kingdom",
      Customer: "Asda,Amazon",
      Brand: "Gaviscon,Air Wick",
      "Data Parameter": "Channel",
      Dataset: "Channel",
      "Name of Source File":
        "RBONE_Local_customer_hierarchy,RB_UKGPH_LOCAL_CUSTOMER_HIER",
      Source: "Lucia Chacon",
      Frequency: "Weekly (Monday)",
      "Pull date": "08/25/2023",
      "power bi dashboard or file": "Gaviscon sell-out.pbix",
    },
  ];
  // const [chartData, setchartData] = useState([]);
  // console.log(data);
  const handleClick = async (po_id, rbsku) => {
    // navigate("/historicaldata");
    dispatch(updateloader(true));
    var data = { po_id: po_id, rbsku: rbsku };
    try {
      const response = await fetch(
        "http://localhost:5000/getirrposku",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        // setchartData(json);
        dispatch(fetchoirregularchartdata(json));
        // setiscampaigns(true);
        // setpodetails(json);
        navigate("/irregularcharts");
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

  const handleBack = () => {
    navigate(-1);
  };

  // const data = [
  //   {
  //     id: 1,
  //     poNumber: "PO no 123",
  //     customerPoNumber: "PO no 123",
  //     poReceiptDate: "20-07-2023",
  //     poStatus: "Open",
  //     noSKUsinPO: 80,
  //     noSKUsIrregular: 25,
  //     totalForecastedRevenue: "500",
  //     totalPORevenue: "800",
  //     irregularPO: "Yes",
  //     perDiscepency: "-84%",
  //     details: [
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     poNumber: "PO no 500",
  //     customerPoNumber: "PO no 500",
  //     poReceiptDate: "10-07-2023",
  //     poStatus: "Delayed",
  //     noSKUsinPO: 60,
  //     noSKUsIrregular: 40,
  //     totalForecastedRevenue: "500",
  //     totalPORevenue: "800",
  //     irregularPO: "Yes",
  //     perDiscepency: "-84%",
  //     details: [
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     poNumber: "PO no 500",
  //     customerPoNumber: "PO no 500",
  //     poReceiptDate: "10-07-2023",
  //     poStatus: "Stock",
  //     noSKUsinPO: 50,
  //     noSKUsIrregular: 20,
  //     totalForecastedRevenue: "500",
  //     totalPORevenue: "800",
  //     irregularPO: "Yes",
  //     perDiscepency: "-84%",
  //     details: [
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     poNumber: "PO no 500",
  //     customerPoNumber: "PO no 500",
  //     poReceiptDate: "10-07-2023",
  //     poStatus: "Open",
  //     noSKUsinPO: 70,
  //     noSKUsIrregular: 30,
  //     totalForecastedRevenue: "500",
  //     totalPORevenue: "800",
  //     irregularPO: "Yes",
  //     perDiscepency: "-84%",
  //     details: [
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     poNumber: "PO no 500",
  //     customerPoNumber: "PO no 500",
  //     poReceiptDate: "10-07-2023",
  //     poStatus: "Open",
  //     noSKUsinPO: 70,
  //     noSKUsIrregular: 30,
  //     totalForecastedRevenue: "500",
  //     totalPORevenue: "800",
  //     irregularPO: "Yes",
  //     perDiscepency: "-84%",
  //     details: [
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     poNumber: "PO no 500",
  //     customerPoNumber: "PO no 500",
  //     poReceiptDate: "10-07-2023",
  //     poStatus: "Open",
  //     noSKUsinPO: 70,
  //     noSKUsIrregular: 30,
  //     totalForecastedRevenue: "500",
  //     totalPORevenue: "800",
  //     irregularPO: "Yes",
  //     perDiscepency: "-84%",
  //     details: [
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     poNumber: "PO no 500",
  //     customerPoNumber: "PO no 500",
  //     poReceiptDate: "10-07-2023",
  //     poStatus: "Open",
  //     noSKUsinPO: 70,
  //     noSKUsIrregular: 30,
  //     totalForecastedRevenue: "500",
  //     totalPORevenue: "800",
  //     irregularPO: "Yes",
  //     perDiscepency: "-84%",
  //     details: [
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //       {
  //         rbsku: "Airwick",
  //         ppg: "23434534693dlf",
  //         description: "AWICK,IE,STICK UP LAVX12",
  //         alert: "Incorrect volume",
  //         quantity: "400",
  //         sellin: "400",
  //         percentage: "40%",
  //         orderprice: "£2.50",
  //       },
  //     ],
  //   },
  // ];
  const [expandedRow, setExpandedRow] = useState(null);

  // Function to handle row click and expand/collapse accordion
  const handleRowClick = async (rowId) => {
    if (expandedRow === rowId) {
      setExpandedRow(null);
    } else {
      dispatch(updateloader(true));
      var data = { po_id: rowId };
      try {
        const response = await fetch(
          "http://localhost:5000/getirrpodetails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setpodetails(json);
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
      setExpandedRow(rowId);
    }
  };

  // SubTable component to display the nested table
  const SubTable = ({ details }) => (
    <TableContainer component={Paper} style={{ maxHeight: 425, width: "100%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14}>RB SKU</Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14}>PPG</Typography>
            </TableCell>

            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14} lineHeight="16px">
                Description
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14} lineHeight="16px">
                Alert type
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14} lineHeight="16px">
                Quantity ordered
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14}>
                Sell-in forecast (S-OLA / Kinaxis)
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14}>Percentage discrepancy</Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14}>Order Price</Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E5EBEF",
                border: "1px solid #dcdcdc",
                textAlign: "center",
                color: "#415A6C",
              }}
            >
              <Typography fontSize={14}>Deep dive</Typography>
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
              <TableCell sx={{ textAlign: "center" }}>
                <Typography fontSize="13px">{item.rbsku}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography fontSize="13px">{item.ppg}</Typography>
              </TableCell>

              <TableCell sx={{ textAlign: "center" }}>
                <Typography fontSize="13px">{item.description}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography fontSize="13px">{item.alert}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  {item.quantity}
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>{item.sellin}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {item.percentage}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {item.orderprice}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Button
                  variant="outlined"
                  endIcon={<PlayArrowIcon />}
                  size="small"
                  onClick={() => handleClick(item.poNumber, item.rbsku)} // Wrap handleClick inside an anonymous function
                  className="btn-invst"
                >
                  Investigate
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div>
      {loader && (
        <div className="loader-overlay">
          <img src={loaderImage} alt="Loading..." className="rotating-image" />
        </div>
      )}
      <Topbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className="bg-containerdashboard">
          <div>
            <Box display="flex" fontSize={14} mx="1px">
              <Box mt="1px">
                <Button
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    borderRadius: "30px 30px ",
                    border: "#fff",
                    marginTop: "-6px",
                    height: "24px",
                    // width: "27px",
                  }}
                >
                  <ArrowBackIosNewIcon
                    sx={{
                      height: "12px",
                      width: "12px",
                      border: "1px solid",
                      borderRadius: "50%",
                      backgroundColor: "#FF007E",
                      color: "#fff",
                    }}
                  />
                  &#160;
                  <Typography fontSize={12} onClick={handleBack}>
                    Back
                  </Typography>
                </Button>
              </Box>{" "}
              &#160;&#160;&#160;&#160;&#160;&#160;
            </Box>
            <Box mt="20px" mx="1px">
              <Typography fontSize={28} color="#415A6C">
                Data Freshness
              </Typography>
            </Box>
            <TableContainer style={{ maxHeight: 732, width: "100%" }}>
              <Table stickyHeader>
                <TableHead className="thead-main">
                  <TableRow>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Business Unit
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Location
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Customer
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Brand
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Data Parameter
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Dataset
                    </TableCell>

                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Source
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Frequency
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Pull Date
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Power BI Dashboard or File
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item, index) => (
                    <TableRow
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                      }}
                    >
                      <TableCell sx={{ textAlign: "center" }}>
                        {item.BU}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {item.Location}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {item.Customer}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {item.Brand}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Tooltip title={item["Data Parameter"]}>
                          {truncateText(item["Data Parameter"], 25)}
                        </Tooltip>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Tooltip title={item.Dataset}>
                          {truncateText(item.Dataset, 15)}
                        </Tooltip>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Tooltip title={item.Source}>
                          {truncateText(item.Source, 15)}
                        </Tooltip>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {item.Frequency}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {item["Pull date"]}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Tooltip title={item["power bi dashboard or file"]}>
                          {item["power bi dashboard or file"].length > 0
                            ? truncateText(
                                item["power bi dashboard or file"],
                                25
                              )
                            : "-"}
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DataFreshness;
