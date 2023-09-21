import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Stack,
  Button,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StockPosition from "./stockPositionTable";
import { useSelector, useDispatch } from "react-redux";
import {
  updateloader,
  fetchstockreallocatedata,
  updateexporttabledata,
} from "../../store/actions/sidebarActions";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Badge from "@mui/material/Badge";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

const StockPosition2 = ({ onData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack = () => {
    navigate(-1);
  };

  const startingWeek = useSelector((state) => state.sidebar.currentWeekNumber);
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

  const data = useSelector((state) => state.sidebar.customerstockposition);

  // const [data, setData] = useState([
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 3063,
  //     "CW+1": 9142,
  //     "CW+2": 6497,
  //     "CW+3": 3559,
  //     "CW+4": 6915,
  //     "CW+5": 7245,
  //     "CW+6": 5677,
  //     "CW+7": 8086,
  //     "CW+8": 291,
  //     "CW+9": 7378,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,SPNG DEL 4X250ML",
  //     "InitalSOH Week": 5833,
  //     Location: "United Kingdom",
  //     PPG: 6208713,
  //     "RB SKU": "3038049",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 6000,
  //     "CW+1": 5648,
  //     "CW+2": 6372,
  //     "CW+3": 2817,
  //     "CW+4": 2273,
  //     "CW+5": 8551,
  //     "CW+6": 7886,
  //     "CW+7": 9920,
  //     "CW+8": 5010,
  //     "CW+9": 1859,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,FM RF PNKSP 392X250ML",
  //     "InitalSOH Week": 5887,
  //     Location: "United Kingdom",
  //     PPG: 2849279,
  //     "RB SKU": "3209375",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 1889,
  //     "CW+1": 9916,
  //     "CW+2": 2504,
  //     "CW+3": 1894,
  //     "CW+4": 5771,
  //     "CW+5": 605,
  //     "CW+6": 5825,
  //     "CW+7": 1178,
  //     "CW+8": 8977,
  //     "CW+9": 328,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,FM TW RF RW 8X250ML",
  //     "InitalSOH Week": 7482,
  //     Location: "United Kingdom",
  //     PPG: 9014190,
  //     "RB SKU": "3232106",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 9673,
  //     "CW+1": 7826,
  //     "CW+2": 9681,
  //     "CW+3": 1098,
  //     "CW+4": 3927,
  //     "CW+5": 1791,
  //     "CW+6": 927,
  //     "CW+7": 7564,
  //     "CW+8": 6877,
  //     "CW+9": 4465,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,NA3,PSP 6X300ML",
  //     "InitalSOH Week": 3818,
  //     Location: "United Kingdom",
  //     PPG: 4725387,
  //     "RB SKU": "3246983",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 9186,
  //     "CW+1": 9979,
  //     "CW+2": 8372,
  //     "CW+3": 6183,
  //     "CW+4": 3016,
  //     "CW+5": 5243,
  //     "CW+6": 3526,
  //     "CW+7": 2408,
  //     "CW+8": 8770,
  //     "CW+9": 9957,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,BOOSTER ROSE 12X300ML",
  //     "InitalSOH Week": 8859,
  //     Location: "United Kingdom",
  //     PPG: 6876698,
  //     "RB SKU": "3136081",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 8290,
  //     "CW+1": 4653,
  //     "CW+2": 2987,
  //     "CW+3": 4167,
  //     "CW+4": 7603,
  //     "CW+5": 526,
  //     "CW+6": 9082,
  //     "CW+7": 8204,
  //     "CW+8": 4829,
  //     "CW+9": 4845,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,REED ESO PBFIG 5X33ML",
  //     "InitalSOH Week": 6421,
  //     Location: "United Kingdom",
  //     PPG: 5227394,
  //     "RB SKU": "3167124",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 9896,
  //     "CW+1": 9850,
  //     "CW+2": 2337,
  //     "CW+3": 5529,
  //     "CW+4": 8030,
  //     "CW+5": 9949,
  //     "CW+6": 7978,
  //     "CW+7": 5186,
  //     "CW+8": 5918,
  //     "CW+9": 6839,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,LE RF VAN BEAN 6X19ML",
  //     "InitalSOH Week": 1922,
  //     Location: "United Kingdom",
  //     PPG: 3035131,
  //     "RB SKU": "3200683",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 5111,
  //     "CW+1": 6169,
  //     "CW+2": 9584,
  //     "CW+3": 7952,
  //     "CW+4": 4303,
  //     "CW+5": 7825,
  //     "CW+6": 1303,
  //     "CW+7": 2611,
  //     "CW+8": 357,
  //     "CW+9": 384,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,LE RF BERRY 2X5X19ML",
  //     "InitalSOH Week": 3667,
  //     Location: "United Kingdom",
  //     PPG: 6572089,
  //     "RB SKU": "3205304",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 9746,
  //     "CW+1": 7282,
  //     "CW+2": 7393,
  //     "CW+3": 948,
  //     "CW+4": 3383,
  //     "CW+5": 6284,
  //     "CW+6": 6737,
  //     "CW+7": 9832,
  //     "CW+8": 5270,
  //     "CW+9": 3373,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,APPLE LE RF 6X19ML",
  //     "InitalSOH Week": 2218,
  //     Location: "United Kingdom",
  //     PPG: 2824041,
  //     "RB SKU": "3228650",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 9167,
  //     "CW+1": 4338,
  //     "CW+2": 5851,
  //     "CW+3": 2586,
  //     "CW+4": 5427,
  //     "CW+5": 8906,
  //     "CW+6": 3857,
  //     "CW+7": 8614,
  //     "CW+8": 5220,
  //     "CW+9": 4752,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,LE RF MALDIVES 5X19ML",
  //     "InitalSOH Week": 4974,
  //     Location: "United Kingdom",
  //     PPG: 6439551,
  //     "RB SKU": "3252952",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 7537,
  //     "CW+1": 3571,
  //     "CW+2": 4404,
  //     "CW+3": 3149,
  //     "CW+4": 1221,
  //     "CW+5": 2767,
  //     "CW+6": 8324,
  //     "CW+7": 9035,
  //     "CW+8": 5039,
  //     "CW+9": 7935,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,EM RF APP&CIN 6X20ML",
  //     "InitalSOH Week": 7105,
  //     Location: "United Kingdom",
  //     PPG: 5281278,
  //     "RB SKU": "3266914",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 5459,
  //     "CW+1": 2663,
  //     "CW+2": 4075,
  //     "CW+3": 755,
  //     "CW+4": 8631,
  //     "CW+5": 7605,
  //     "CW+6": 831,
  //     "CW+7": 9090,
  //     "CW+8": 9154,
  //     "CW+9": 7125,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,NOEL CNDL 6X105G",
  //     "InitalSOH Week": 1777,
  //     Location: "United Kingdom",
  //     PPG: 6317266,
  //     "RB SKU": "3228482",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 2652,
  //     "CW+1": 4447,
  //     "CW+2": 7247,
  //     "CW+3": 8711,
  //     "CW+4": 8371,
  //     "CW+5": 8424,
  //     "CW+6": 5953,
  //     "CW+7": 1246,
  //     "CW+8": 9623,
  //     "CW+9": 8627,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,PMP FWTR GEL 12X70G",
  //     "InitalSOH Week": 4237,
  //     Location: "United Kingdom",
  //     PPG: 8392919,
  //     "RB SKU": "3234661",
  //   },
  // ]);

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
    <div>
      <TableContainer style={{ maxHeight: 705 }}>
        <Table stickyHeader>
          <TableHead className="supply-tablehead">
            <TableRow className="supply-tablerow">
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                RB SKU
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                PPG
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Description
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Customer
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Brand
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Initial SOH Week{" "}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW</div>
                <div>({startingWeek})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+1</div>
                <div className="brack-number">({startingWeek + 1})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+2</div>
                <div className="brack-number">({startingWeek + 2})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+3</div>
                <div className="brack-number">({startingWeek + 3})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+4</div>
                <div className="brack-number">({startingWeek + 4})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+5</div>
                <div className="brack-number">({startingWeek + 5})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+6</div>
                <div className="brack-number">({startingWeek + 6})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+7</div>
                <div className="brack-number">({startingWeek + 7})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+8</div>
                <div className="brack-number">({startingWeek + 8})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+9</div>
                <div className="brack-number">({startingWeek + 9})</div>{" "}
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
            {data.map((item) => (
              <React.Fragment key={item["RB SKU"]}>
                <TableRow
                  onClick={() => handleRowClick(item["RB SKU"])}
                  key={item["RB SKU"]}
                >
                  <TableCell
                    fontSize={13}
                    sx={{
                      display: "flex",
                      // gap: "16px",
                      padding: "12px",
                      border: "none",
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
                  <TableCell>
                    {" "}
                    <div className="alignment">{item.PPG}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">
                      {truncateText(item.Description, 10)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item.Customer}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item.Brand}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">
                      {parseFloat(item.InitialSOHWeek).toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">
                      {parseFloat(item.CW).toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">
                      {parseFloat(item["CW+1"]).toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">
                      {parseFloat(item["CW+2"]).toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">
                      {parseFloat(item["CW+3"]).toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">
                      {parseFloat(item["CW+4"]).toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">
                      {parseFloat(item["CW+5"]).toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">
                      {parseFloat(item["CW+6"]).toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">
                      {parseFloat(item["CW+7"]).toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">
                      {parseFloat(item["CW+8"]).toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">
                      {parseFloat(item["CW+9"]).toFixed(2)}
                    </div>
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StockPosition2;
