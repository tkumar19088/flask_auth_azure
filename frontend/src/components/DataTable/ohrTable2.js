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
  updateexporttabledata,
} from "../../store/actions/sidebarActions";

const OhrTable2 = ({ onData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const startingWeek = useSelector((state) => state.sidebar.currentWeekNumber);
  const [expandedRow, setExpandedRow] = useState(null);
  const [pushAlternative, setpushAlternative] = useState(false);
  const [campaignsData, setcampaignsData] = useState([]);
  const [pushAlternativeData, setpushAlternativeData] = useState([]);
  const [iscampaigns, setiscampaigns] = useState(false);
  const data = useSelector((state) => state.sidebar.overviewcustomerdata);
  console.log(data);
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
      var data = { customer: 1, rbsku: rowId };
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
          //dispatch(fetchuserdetails(json));
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
        // setiscampaigns(true);
        setpushAlternativeData(json);
        //dispatch(fetchuserdetails(json));
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
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     "Cust SOH": 3400,
  //     "Cust WOC": 8,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,SPNG DEL 4X250ML",
  //     Location: "United Kingdom",
  //     PPG: 6208713,
  //     Promo: "No",
  //     "RAG CW": "G",
  //     "RAG CW +1": "R",
  //     "RAG CW+2": "A",
  //     "RAG CW+3": "G",
  //     "RB SKU": "3038049",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     "Cust SOH": 4200,
  //     "Cust WOC": 3,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,FM RF PNKSP 392X250ML",
  //     Location: "United Kingdom",
  //     PPG: 2849279,
  //     Promo: "Yes",
  //     "RAG CW": "A",
  //     "RAG CW +1": "G",
  //     "RAG CW+2": "R",
  //     "RAG CW+3": "A",
  //     "RB SKU": "3209375",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     "Cust SOH": 3200,
  //     "Cust WOC": 6,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,FM TW RF RW 8X250ML",
  //     Location: "United Kingdom",
  //     PPG: 9014190,
  //     Promo: "No",
  //     "RAG CW": "R",
  //     "RAG CW +1": "A",
  //     "RAG CW+2": "R",
  //     "RAG CW+3": "G",
  //     "RB SKU": "3232106",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     "Cust SOH": 2200,
  //     "Cust WOC": 2,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,NA3,PSP 6X300ML",
  //     Location: "United Kingdom",
  //     PPG: 4725387,
  //     Promo: "Yes",
  //     "RAG CW": "R",
  //     "RAG CW +1": "R",
  //     "RAG CW+2": "R",
  //     "RAG CW+3": "G",
  //     "RB SKU": "3246983",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     "Cust SOH": 3000,
  //     "Cust WOC": 7,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,BOOSTER ROSE 12X300ML",
  //     Location: "United Kingdom",
  //     PPG: 6876698,
  //     Promo: "Yes",
  //     "RAG CW": "A",
  //     "RAG CW +1": "R",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": "3136081",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     "Cust SOH": 1600,
  //     "Cust WOC": 9,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,REED ESO PBFIG 5X33ML",
  //     Location: "United Kingdom",
  //     PPG: 5227394,
  //     Promo: "Yes",
  //     "RAG CW": "A",
  //     "RAG CW +1": "A",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": "3167124",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     "Cust SOH": 2100,
  //     "Cust WOC": 7,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,LE RF VAN BEAN 6X19ML",
  //     Location: "United Kingdom",
  //     PPG: 3035131,
  //     Promo: "Yes",
  //     "RAG CW": "A",
  //     "RAG CW +1": "R",
  //     "RAG CW+2": "R",
  //     "RAG CW+3": "R",
  //     "RB SKU": "3200683",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     "Cust SOH": 2500,
  //     "Cust WOC": 4,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,LE RF BERRY 2X5X19ML",
  //     Location: "United Kingdom",
  //     PPG: 6572089,
  //     Promo: "Yes",
  //     "RAG CW": "G",
  //     "RAG CW +1": "G",
  //     "RAG CW+2": "R",
  //     "RAG CW+3": "G",
  //     "RB SKU": "3205304",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     "Cust SOH": 4100,
  //     "Cust WOC": 8,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,APPLE LE RF 6X19ML",
  //     Location: "United Kingdom",
  //     PPG: 2824041,
  //     Promo: "Yes",
  //     "RAG CW": "G",
  //     "RAG CW +1": "A",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": "3228650",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     "Cust SOH": 1800,
  //     "Cust WOC": 7,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,LE RF MALDIVES 5X19ML",
  //     Location: "United Kingdom",
  //     PPG: 6439551,
  //     Promo: "Yes",
  //     "RAG CW": "G",
  //     "RAG CW +1": "A",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "G",
  //     "RB SKU": "3252952",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     "Cust SOH": 3300,
  //     "Cust WOC": 10,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,EM RF APP&CIN 6X20ML",
  //     Location: "United Kingdom",
  //     PPG: 5281278,
  //     Promo: "No",
  //     "RAG CW": "G",
  //     "RAG CW +1": "G",
  //     "RAG CW+2": "A",
  //     "RAG CW+3": "G",
  //     "RB SKU": "3266914",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     "Cust SOH": 4500,
  //     "Cust WOC": 4,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,NOEL CNDL 6X105G",
  //     Location: "United Kingdom",
  //     PPG: 6317266,
  //     Promo: "Yes",
  //     "RAG CW": "R",
  //     "RAG CW +1": "A",
  //     "RAG CW+2": "A",
  //     "RAG CW+3": "A",
  //     "RB SKU": "3228482",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     "Cust SOH": 2100,
  //     "Cust WOC": 9,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,PMP FWTR GEL 12X70G",
  //     Location: "United Kingdom",
  //     PPG: 8392919,
  //     Promo: "Yes",
  //     "RAG CW": "G",
  //     "RAG CW +1": "G",
  //     "RAG CW+2": "G",
  //     "RAG CW+3": "A",
  //     "RB SKU": "3234661",
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
          >
            Choose a Mitigation Strategy
          </Button>
        </Box>
        <Box display="flex" className="ms-buttons">
          <Box
            className="ms-grid"
            onClick={handlePushAlternative}
            sx={{
              backgroundColor: pushAlternative ? "#FF007F" : "#415A6C",
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
              backgroundColor: "#415A6C",
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
                  color: "#415A6C",

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
                Reckitt Stock on Hand
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
                Customer WOC
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
      <TableContainer style={{ maxHeight: 691, width: "100%" }}>
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
                <Typography className="table-h1-title">Customer</Typography>
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
                <Typography className="table-h1-title">Customer SoH</Typography>
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                }}
              >
                <Typography className="table-h1-title">Customer WoC</Typography>
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
                Promo
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
            </TableRow>
            <TableRow className="t-row">
              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                  padding: "0px",
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
                  textAlign: "center",
                  padding: "0px",
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
                  padding: "0px",
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
                  padding: "0px",
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
                        // gap: "16px",
                        padding: "12px",
                        border: "none",
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
                        maxWidth: "100px", // Set the maximum width of the TableCell
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Tooltip title={item.Description}>
                        {" "}
                        {/* Tooltip component with the full text */}
                        {truncateText(item.Description, 60)}
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
                      {item.Customer}
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
                    <TableCell style={{ textAlign: "center", width: "30px" }}>
                      <Typography mx="7px" fontSize="13px">
                        {item.InitialSOHWeek}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ textAlign: "center", width: "30px" }}>
                      <Typography mx="7px" fontSize="13px">
                        {item["Cust WOC"] == null ? "-" : item["Cust WOC"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center" }}
                      sx={{ textAlign: "center", padding: "0px" }}
                    >
                      {item.Promo == null ? "-" : item.Promo}
                    </TableCell>

                    <TableCell
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        // width: "20px",
                      }}
                    >
                      <Typography
                        margin="auto"
                        sx={{
                          // marginLeft: "20px",
                          color: "#fff",
                          textAlign: "center",
                          fontSize: "13px",
                          // border:"1px solid",
                          width: "30px",
                          height: "25px",
                          backgroundColor: item["RAG CW"]
                            ? item["RAG CW"] == "G"
                              ? "#57a957"
                              : item["RAG CW"] == "R"
                              ? "#F44444"
                              : "orange"
                            : "",
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
                        // width: "20px",
                      }}
                    >
                      <Typography
                        margin="auto"
                        sx={{
                          fontSize: "13px",
                          color: "#fff",
                          width: "30px",
                          height: "25px",
                          backgroundColor: item["RAG CW +1"]
                            ? item["RAG CW +1"] == "G"
                              ? "#57a957"
                              : item["RAG CW +1"] == "R"
                              ? "#F44444"
                              : "orange"
                            : "",
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                          alignItems: "center",
                        }}
                      >
                        {item["RAG CW +1"]}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        // width: "20px",
                      }}
                    >
                      <Typography
                        margin="auto"
                        sx={{
                          fontSize: "13px",
                          color: "#fff",
                          width: "30px",
                          height: "25px",
                          backgroundColor: item["RAG CW+2"]
                            ? item["RAG CW+2"] == "G"
                              ? "#57a957"
                              : item["RAG CW+2"] == "R"
                              ? "#F44444"
                              : "orange"
                            : "",
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
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        // width: "20px",
                      }}
                    >
                      <Typography
                        margin="auto"
                        sx={{
                          // marginLeft: "20px",
                          fontSize: "13px",
                          color: "#fff",
                          width: "30px",
                          height: "25px",
                          backgroundColor: item["RAG CW+3"]
                            ? item["RAG CW+3"] == "G"
                              ? "#57a957"
                              : item["RAG CW+3"] == "R"
                              ? "#F44444"
                              : "orange"
                            : "",
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                          alignItems: "center",
                        }}
                      >
                        {item["RAG CW+3"]}
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

export default OhrTable2;
