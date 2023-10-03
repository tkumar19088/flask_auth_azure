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
import { useState, useEffect } from "react";
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

const Historic = ({ onData }) => {
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
      setdisplayMigitates(false);
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
    navigate("/stockreallocation");
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

  const data = useSelector((state) => state.sidebar.customerhistoric);
  const closeExpandedRow = () => {
    setExpandedRow(null);
    setdisplayMigitates(false);
  };

  useEffect(() => {
    closeExpandedRow();
  }, [data]);

  // const [data, setData] = useState([
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 3300,
  //     "CW-1": 2200,
  //     "CW-2": 4600,
  //     "CW-3": 2600,
  //     "CW-4": 2500,
  //     "CW-5": 4900,
  //     "CW-6": 4600,
  //     "CW-7": 1900,
  //     "CW-8": 3300,
  //     "CW-9": 1600,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,SPNG DEL 4X250ML",
  //     "InitalSOH Week": 4700,
  //     Location: "United Kingdom",
  //     PPG: 6208713,
  //     "RB SKU": "3038049",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 2700,
  //     "CW-1": 2400,
  //     "CW-2": 1900,
  //     "CW-3": 3800,
  //     "CW-4": 4900,
  //     "CW-5": 4200,
  //     "CW-6": 3200,
  //     "CW-7": 3200,
  //     "CW-8": 3900,
  //     "CW-9": 2100,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,FM RF PNKSP 392X250ML",
  //     "InitalSOH Week": 1500,
  //     Location: "United Kingdom",
  //     PPG: 2849279,
  //     "RB SKU": "3209375",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 2500,
  //     "CW-1": 1600,
  //     "CW-2": 1500,
  //     "CW-3": 1900,
  //     "CW-4": 4300,
  //     "CW-5": 2900,
  //     "CW-6": 2500,
  //     "CW-7": 4100,
  //     "CW-8": 4200,
  //     "CW-9": 3500,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,FM TW RF RW 8X250ML",
  //     "InitalSOH Week": 2600,
  //     Location: "United Kingdom",
  //     PPG: 9014190,
  //     "RB SKU": "3232106",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 4800,
  //     "CW-1": 3000,
  //     "CW-2": 2500,
  //     "CW-3": 2600,
  //     "CW-4": 4900,
  //     "CW-5": 4300,
  //     "CW-6": 3400,
  //     "CW-7": 1900,
  //     "CW-8": 2100,
  //     "CW-9": 4400,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,NA3,PSP 6X300ML",
  //     "InitalSOH Week": 2400,
  //     Location: "United Kingdom",
  //     PPG: 4725387,
  //     "RB SKU": "3246983",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 3300,
  //     "CW-1": 2200,
  //     "CW-2": 2900,
  //     "CW-3": 1700,
  //     "CW-4": 5000,
  //     "CW-5": 4800,
  //     "CW-6": 1900,
  //     "CW-7": 3700,
  //     "CW-8": 1700,
  //     "CW-9": 4300,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,BOOSTER ROSE 12X300ML",
  //     "InitalSOH Week": 4500,
  //     Location: "United Kingdom",
  //     PPG: 6876698,
  //     "RB SKU": "3136081",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 2400,
  //     "CW-1": 2300,
  //     "CW-2": 3000,
  //     "CW-3": 4400,
  //     "CW-4": 4300,
  //     "CW-5": 4000,
  //     "CW-6": 1500,
  //     "CW-7": 4300,
  //     "CW-8": 4200,
  //     "CW-9": 2500,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,REED ESO PBFIG 5X33ML",
  //     "InitalSOH Week": 3900,
  //     Location: "United Kingdom",
  //     PPG: 5227394,
  //     "RB SKU": "3167124",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 2800,
  //     "CW-1": 4900,
  //     "CW-2": 2400,
  //     "CW-3": 5000,
  //     "CW-4": 2800,
  //     "CW-5": 4100,
  //     "CW-6": 3500,
  //     "CW-7": 5000,
  //     "CW-8": 3500,
  //     "CW-9": 1500,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,LE RF VAN BEAN 6X19ML",
  //     "InitalSOH Week": 1400,
  //     Location: "United Kingdom",
  //     PPG: 3035131,
  //     "RB SKU": "3200683",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 3700,
  //     "CW-1": 3000,
  //     "CW-2": 3800,
  //     "CW-3": 1700,
  //     "CW-4": 3900,
  //     "CW-5": 3000,
  //     "CW-6": 4900,
  //     "CW-7": 2300,
  //     "CW-8": 2500,
  //     "CW-9": 4800,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,LE RF BERRY 2X5X19ML",
  //     "InitalSOH Week": 1900,
  //     Location: "United Kingdom",
  //     PPG: 6572089,
  //     "RB SKU": "3205304",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 2200,
  //     "CW-1": 3000,
  //     "CW-2": 3900,
  //     "CW-3": 4200,
  //     "CW-4": 1700,
  //     "CW-5": 4600,
  //     "CW-6": 4100,
  //     "CW-7": 4900,
  //     "CW-8": 3600,
  //     "CW-9": 4400,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,APPLE LE RF 6X19ML",
  //     "InitalSOH Week": 3000,
  //     Location: "United Kingdom",
  //     PPG: 2824041,
  //     "RB SKU": "3228650",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 1600,
  //     "CW-1": 4300,
  //     "CW-2": 4400,
  //     "CW-3": 4400,
  //     "CW-4": 1700,
  //     "CW-5": 2700,
  //     "CW-6": 2000,
  //     "CW-7": 2800,
  //     "CW-8": 4500,
  //     "CW-9": 3800,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,LE RF MALDIVES 5X19ML",
  //     "InitalSOH Week": 5000,
  //     Location: "United Kingdom",
  //     PPG: 6439551,
  //     "RB SKU": "3252952",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 4900,
  //     "CW-1": 2100,
  //     "CW-2": 2900,
  //     "CW-3": 3000,
  //     "CW-4": 2100,
  //     "CW-5": 2200,
  //     "CW-6": 4700,
  //     "CW-7": 3300,
  //     "CW-8": 4800,
  //     "CW-9": 4000,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,EM RF APP&CIN 6X20ML",
  //     "InitalSOH Week": 4200,
  //     Location: "United Kingdom",
  //     PPG: 5281278,
  //     "RB SKU": "3266914",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 3200,
  //     "CW-1": 4200,
  //     "CW-2": 3400,
  //     "CW-3": 3500,
  //     "CW-4": 4000,
  //     "CW-5": 3100,
  //     "CW-6": 1900,
  //     "CW-7": 3600,
  //     "CW-8": 3800,
  //     "CW-9": 3400,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,NOEL CNDL 6X105G",
  //     "InitalSOH Week": 3200,
  //     Location: "United Kingdom",
  //     PPG: 6317266,
  //     "RB SKU": "3228482",
  //   },
  //   {
  //     Brand: "Airwick",
  //     "Business Unit": "Hygiene",
  //     CW: 3700,
  //     "CW-1": 3400,
  //     "CW-2": 5000,
  //     "CW-3": 2800,
  //     "CW-4": 3600,
  //     "CW-5": 1900,
  //     "CW-6": 3900,
  //     "CW-7": 4700,
  //     "CW-8": 1400,
  //     "CW-9": 4100,
  //     Customer: "Amazon",
  //     Description: "AWICK,GB,PMP FWTR GEL 12X70G",
  //     "InitalSOH Week": 3400,
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
              textTransform: "none",
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
                (S-OLA / Kinaxis)
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
                Initial SoH Week{" "}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW-9</div>
                <div>({startingWeek - 9})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW-8</div>
                <div className="brack-number">({startingWeek - 8})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW-7</div>
                <div className="brack-number">({startingWeek - 7})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW-6</div>
                <div className="brack-number">({startingWeek - 6})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW-5</div>
                <div className="brack-number">({startingWeek - 5})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW-4</div>
                <div className="brack-number">({startingWeek - 4})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW-3</div>
                <div className="brack-number">({startingWeek - 3})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW-2</div>
                <div className="brack-number">({startingWeek - 2})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW-1</div>
                <div className="brack-number">({startingWeek - 1})</div>
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
                <div className="brack-number">({startingWeek})</div>{" "}
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
                    sx={{
                      display: "flex",
                      // padding: "12px",
                      border: "none",
                      alignItems: "center",
                      // fontSize: "13px",
                      justifyContent: "center",
                      borderBottom: "1px solid #dcdcdc",
                    }}
                  >
                    {expandedRow === item["RB SKU"] ? (
                      <RemoveIcon
                        fontSize="medium"
                        sx={{
                          color: "#415A6C",
                          cursor: "pointer",
                          fontWeight: "800",
                          // marginTop: "4px",
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
                          marginTop: "-2px",
                          backgroundColor: "transparent",
                        }}
                      />
                    )}
                    {item["RB SKU"]}
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
                  <TableCell>
                    <div className="alignment">{item.InitialSOHWeek}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item["CW-9"]}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item["CW-8"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["CW-7"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["CW-6"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["CW-5"]}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item["CW-4"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["CW-3"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["CW-2"]}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item["CW-1"]}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item.CW}</div>
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

export default Historic;
