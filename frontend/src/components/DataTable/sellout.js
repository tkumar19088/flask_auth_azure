import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Typography,
  Stack,
  Button,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Sellout = ({ onData }) => {
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

  const data = useSelector((state) => state.sidebar.customersellout);

  // const [data, setData] = useState([
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 7245,
  //     "CW+1": 5387,
  //     "CW+2": 5747,
  //     "CW+3": 3465,
  //     "CW+4": 722,
  //     "CW+5": 3062,
  //     "CW+6": 6357,
  //     "CW+7": 3746,
  //     "CW+8": 8266,
  //     "CW+9": 6626,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,SPNG DEL 4X250ML",
  //     "InitalSOH Week": 4283,
  //     Location: "United Kingdom",
  //     PPG: 6208713,
  //     "RB SKU": "3038049",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 3727,
  //     "CW+1": 5691,
  //     "CW+2": 5689,
  //     "CW+3": 2258,
  //     "CW+4": 9849,
  //     "CW+5": 8350,
  //     "CW+6": 490,
  //     "CW+7": 4094,
  //     "CW+8": 9236,
  //     "CW+9": 6566,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,FM RF PNKSP 392X250ML",
  //     "InitalSOH Week": 4712,
  //     Location: "United Kingdom",
  //     PPG: 2849279,
  //     "RB SKU": "3209375",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 4958,
  //     "CW+1": 7414,
  //     "CW+2": 4379,
  //     "CW+3": 9201,
  //     "CW+4": 5462,
  //     "CW+5": 5983,
  //     "CW+6": 6719,
  //     "CW+7": 2106,
  //     "CW+8": 6902,
  //     "CW+9": 7696,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,FM TW RF RW 8X250ML",
  //     "InitalSOH Week": 1606,
  //     Location: "United Kingdom",
  //     PPG: 9014190,
  //     "RB SKU": "3232106",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 2554,
  //     "CW+1": 8738,
  //     "CW+2": 4090,
  //     "CW+3": 7228,
  //     "CW+4": 2051,
  //     "CW+5": 5656,
  //     "CW+6": 2589,
  //     "CW+7": 9136,
  //     "CW+8": 7293,
  //     "CW+9": 8212,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,NA3,PSP 6X300ML",
  //     "InitalSOH Week": 9038,
  //     Location: "United Kingdom",
  //     PPG: 4725387,
  //     "RB SKU": "3246983",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 7915,
  //     "CW+1": 8082,
  //     "CW+2": 7542,
  //     "CW+3": 5316,
  //     "CW+4": 4946,
  //     "CW+5": 8461,
  //     "CW+6": 6924,
  //     "CW+7": 6121,
  //     "CW+8": 5442,
  //     "CW+9": 7787,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,BOOSTER ROSE 12X300ML",
  //     "InitalSOH Week": 1197,
  //     Location: "United Kingdom",
  //     PPG: 6876698,
  //     "RB SKU": "3136081",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 1445,
  //     "CW+1": 2538,
  //     "CW+2": 7190,
  //     "CW+3": 3926,
  //     "CW+4": 8083,
  //     "CW+5": 8072,
  //     "CW+6": 8875,
  //     "CW+7": 8146,
  //     "CW+8": 9237,
  //     "CW+9": 8239,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,REED ESO PBFIG 5X33ML",
  //     "InitalSOH Week": 4105,
  //     Location: "United Kingdom",
  //     PPG: 5227394,
  //     "RB SKU": "3167124",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 2732,
  //     "CW+1": 7512,
  //     "CW+2": 8782,
  //     "CW+3": 1009,
  //     "CW+4": 4970,
  //     "CW+5": 1841,
  //     "CW+6": 6347,
  //     "CW+7": 9562,
  //     "CW+8": 6949,
  //     "CW+9": 2697,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,LE RF VAN BEAN 6X19ML",
  //     "InitalSOH Week": 3821,
  //     Location: "United Kingdom",
  //     PPG: 3035131,
  //     "RB SKU": "3200683",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 7914,
  //     "CW+1": 8052,
  //     "CW+2": 2407,
  //     "CW+3": 1934,
  //     "CW+4": 3549,
  //     "CW+5": 6461,
  //     "CW+6": 5910,
  //     "CW+7": 1292,
  //     "CW+8": 3666,
  //     "CW+9": 449,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,LE RF BERRY 2X5X19ML",
  //     "InitalSOH Week": 7924,
  //     Location: "United Kingdom",
  //     PPG: 6572089,
  //     "RB SKU": "3205304",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 5396,
  //     "CW+1": 9078,
  //     "CW+2": 7916,
  //     "CW+3": 3246,
  //     "CW+4": 9686,
  //     "CW+5": 8729,
  //     "CW+6": 5100,
  //     "CW+7": 6601,
  //     "CW+8": 1387,
  //     "CW+9": 2032,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,APPLE LE RF 6X19ML",
  //     "InitalSOH Week": 2891,
  //     Location: "United Kingdom",
  //     PPG: 2824041,
  //     "RB SKU": "3228650",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 9704,
  //     "CW+1": 459,
  //     "CW+2": 9552,
  //     "CW+3": 574,
  //     "CW+4": 1086,
  //     "CW+5": 3089,
  //     "CW+6": 296,
  //     "CW+7": 7913,
  //     "CW+8": 7758,
  //     "CW+9": 9976,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,LE RF MALDIVES 5X19ML",
  //     "InitalSOH Week": 7085,
  //     Location: "United Kingdom",
  //     PPG: 6439551,
  //     "RB SKU": "3252952",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 3864,
  //     "CW+1": 9229,
  //     "CW+2": 291,
  //     "CW+3": 5112,
  //     "CW+4": 9498,
  //     "CW+5": 6120,
  //     "CW+6": 8146,
  //     "CW+7": 3493,
  //     "CW+8": 938,
  //     "CW+9": 3453,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,EM RF APP&CIN 6X20ML",
  //     "InitalSOH Week": 8595,
  //     Location: "United Kingdom",
  //     PPG: 5281278,
  //     "RB SKU": "3266914",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 203,
  //     "CW+1": 6092,
  //     "CW+2": 9199,
  //     "CW+3": 4756,
  //     "CW+4": 8149,
  //     "CW+5": 2882,
  //     "CW+6": 6188,
  //     "CW+7": 1032,
  //     "CW+8": 4268,
  //     "CW+9": 562,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,NOEL CNDL 6X105G",
  //     "InitalSOH Week": 9580,
  //     Location: "United Kingdom",
  //     PPG: 6317266,
  //     "RB SKU": "3228482",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 5498,
  //     "CW+1": 2069,
  //     "CW+2": 3440,
  //     "CW+3": 1298,
  //     "CW+4": 3651,
  //     "CW+5": 8327,
  //     "CW+6": 7293,
  //     "CW+7": 5583,
  //     "CW+8": 2974,
  //     "CW+9": 2542,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,PMP FWTR GEL 12X70G",
  //     "InitalSOH Week": 2028,
  //     Location: "United Kingdom",
  //     PPG: 8392919,
  //     "RB SKU": "3234661",
  //   },
  // ]);

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
            {data.map((item, index) => (
              <React.Fragment key={item["RB SKU"]}>
                <TableRow
                  onClick={() => handleRowClick(item["RB SKU"])}
                  key={item["RB SKU"]}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                    // borderBottom: "1px solid #dcdcdc",
                  }}
                >
                  <TableCell
                    fontSize={13}
                    sx={{
                      display: "flex",
                      // gap: "16px",
                      padding: "12px",
                      border: "none",
                      borderBottom: "1px solid #dcdcdc",
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
                    <div>{item.Description}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item.Customer}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item.Brand}</div>
                  </TableCell>
                  <TableCell sx={{ width: "90px" }}>
                    <div className="alignment">{item.InitialSOHWeek}</div>
                  </TableCell>
                  <TableCell sx={{ width: "90px" }}>
                    <div className="alignment">{item["sola CW"]}</div>
                  </TableCell>
                  <TableCell sx={{ width: "90px" }}>
                    <div className="alignment">{item["sola CW+1"]}</div>
                  </TableCell>
                  <TableCell sx={{ width: "90px" }}>
                    <div className="alignment">{item["sola CW+2"]}</div>
                  </TableCell>
                  <TableCell sx={{ width: "90px" }}>
                    <div className="alignment">{item["sola CW+3"]}</div>
                  </TableCell>
                  <TableCell sx={{ width: "90px" }}>
                    <div className="alignment">{item["sola CW+4"]}</div>
                  </TableCell>
                  <TableCell sx={{ width: "90px" }}>
                    <div className="alignment">{item["sola CW+5"]}</div>
                  </TableCell>
                  <TableCell sx={{ width: "90px" }}>
                    <div className="alignment">{item["sola CW+6"]}</div>
                  </TableCell>
                  <TableCell sx={{ width: "90px" }}>
                    <div className="alignment">{item["sola CW+7"]}</div>
                  </TableCell>
                  <TableCell sx={{ width: "90px" }}>
                    <div className="alignment">{item["sola CW+8"]}</div>
                  </TableCell>
                  <TableCell sx={{ width: "90px" }}>
                    <div className="alignment">{item["sola CW+9"]}</div>
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

export default Sellout;
