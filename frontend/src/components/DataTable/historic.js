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

const startingWeek = 19;

const Historic = ({ onData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    navigate(-1);
  };

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

  
  // const data = useSelector((state) => state.sidebar.customerhistoric);

  const [data, setData] = useState([
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: 3300,
      "CW-1": 2200,
      "CW-2": 4600,
      "CW-3": 2600,
      "CW-4": 2500,
      "CW-5": 4900,
      "CW-6": 4600,
      "CW-7": 1900,
      "CW-8": 3300,
      "CW-9": 1600,
      Customer: "Amazon",
      Description: "AWICK,GB,SPNG DEL 4X250ML",
      "InitalSOH Week": 4700,
      Location: "United Kingdom",
      PPG: 6208713,
      "RB SKU": "3038049",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: 2700,
      "CW-1": 2400,
      "CW-2": 1900,
      "CW-3": 3800,
      "CW-4": 4900,
      "CW-5": 4200,
      "CW-6": 3200,
      "CW-7": 3200,
      "CW-8": 3900,
      "CW-9": 2100,
      Customer: "Amazon",
      Description: "AWICK,GB,FM RF PNKSP 392X250ML",
      "InitalSOH Week": 1500,
      Location: "United Kingdom",
      PPG: 2849279,
      "RB SKU": "3209375",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: 2500,
      "CW-1": 1600,
      "CW-2": 1500,
      "CW-3": 1900,
      "CW-4": 4300,
      "CW-5": 2900,
      "CW-6": 2500,
      "CW-7": 4100,
      "CW-8": 4200,
      "CW-9": 3500,
      Customer: "Amazon",
      Description: "AWICK,GB,FM TW RF RW 8X250ML",
      "InitalSOH Week": 2600,
      Location: "United Kingdom",
      PPG: 9014190,
      "RB SKU": "3232106",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: 4800,
      "CW-1": 3000,
      "CW-2": 2500,
      "CW-3": 2600,
      "CW-4": 4900,
      "CW-5": 4300,
      "CW-6": 3400,
      "CW-7": 1900,
      "CW-8": 2100,
      "CW-9": 4400,
      Customer: "Amazon",
      Description: "AWICK,GB,NA3,PSP 6X300ML",
      "InitalSOH Week": 2400,
      Location: "United Kingdom",
      PPG: 4725387,
      "RB SKU": "3246983",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: 3300,
      "CW-1": 2200,
      "CW-2": 2900,
      "CW-3": 1700,
      "CW-4": 5000,
      "CW-5": 4800,
      "CW-6": 1900,
      "CW-7": 3700,
      "CW-8": 1700,
      "CW-9": 4300,
      Customer: "Amazon",
      Description: "AWICK,GB,BOOSTER ROSE 12X300ML",
      "InitalSOH Week": 4500,
      Location: "United Kingdom",
      PPG: 6876698,
      "RB SKU": "3136081",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: 2400,
      "CW-1": 2300,
      "CW-2": 3000,
      "CW-3": 4400,
      "CW-4": 4300,
      "CW-5": 4000,
      "CW-6": 1500,
      "CW-7": 4300,
      "CW-8": 4200,
      "CW-9": 2500,
      Customer: "Amazon",
      Description: "AWICK,GB,REED ESO PBFIG 5X33ML",
      "InitalSOH Week": 3900,
      Location: "United Kingdom",
      PPG: 5227394,
      "RB SKU": "3167124",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: 2800,
      "CW-1": 4900,
      "CW-2": 2400,
      "CW-3": 5000,
      "CW-4": 2800,
      "CW-5": 4100,
      "CW-6": 3500,
      "CW-7": 5000,
      "CW-8": 3500,
      "CW-9": 1500,
      Customer: "Amazon",
      Description: "AWICK,GB,LE RF VAN BEAN 6X19ML",
      "InitalSOH Week": 1400,
      Location: "United Kingdom",
      PPG: 3035131,
      "RB SKU": "3200683",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: 3700,
      "CW-1": 3000,
      "CW-2": 3800,
      "CW-3": 1700,
      "CW-4": 3900,
      "CW-5": 3000,
      "CW-6": 4900,
      "CW-7": 2300,
      "CW-8": 2500,
      "CW-9": 4800,
      Customer: "Amazon",
      Description: "AWICK,GB,LE RF BERRY 2X5X19ML",
      "InitalSOH Week": 1900,
      Location: "United Kingdom",
      PPG: 6572089,
      "RB SKU": "3205304",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: 2200,
      "CW-1": 3000,
      "CW-2": 3900,
      "CW-3": 4200,
      "CW-4": 1700,
      "CW-5": 4600,
      "CW-6": 4100,
      "CW-7": 4900,
      "CW-8": 3600,
      "CW-9": 4400,
      Customer: "Amazon",
      Description: "AWICK,GB,APPLE LE RF 6X19ML",
      "InitalSOH Week": 3000,
      Location: "United Kingdom",
      PPG: 2824041,
      "RB SKU": "3228650",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: 1600,
      "CW-1": 4300,
      "CW-2": 4400,
      "CW-3": 4400,
      "CW-4": 1700,
      "CW-5": 2700,
      "CW-6": 2000,
      "CW-7": 2800,
      "CW-8": 4500,
      "CW-9": 3800,
      Customer: "Amazon",
      Description: "AWICK,GB,LE RF MALDIVES 5X19ML",
      "InitalSOH Week": 5000,
      Location: "United Kingdom",
      PPG: 6439551,
      "RB SKU": "3252952",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: 4900,
      "CW-1": 2100,
      "CW-2": 2900,
      "CW-3": 3000,
      "CW-4": 2100,
      "CW-5": 2200,
      "CW-6": 4700,
      "CW-7": 3300,
      "CW-8": 4800,
      "CW-9": 4000,
      Customer: "Amazon",
      Description: "AWICK,GB,EM RF APP&CIN 6X20ML",
      "InitalSOH Week": 4200,
      Location: "United Kingdom",
      PPG: 5281278,
      "RB SKU": "3266914",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: 3200,
      "CW-1": 4200,
      "CW-2": 3400,
      "CW-3": 3500,
      "CW-4": 4000,
      "CW-5": 3100,
      "CW-6": 1900,
      "CW-7": 3600,
      "CW-8": 3800,
      "CW-9": 3400,
      Customer: "Amazon",
      Description: "AWICK,GB,NOEL CNDL 6X105G",
      "InitalSOH Week": 3200,
      Location: "United Kingdom",
      PPG: 6317266,
      "RB SKU": "3228482",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: 3700,
      "CW-1": 3400,
      "CW-2": 5000,
      "CW-3": 2800,
      "CW-4": 3600,
      "CW-5": 1900,
      "CW-6": 3900,
      "CW-7": 4700,
      "CW-8": 1400,
      "CW-9": 4100,
      Customer: "Amazon",
      Description: "AWICK,GB,PMP FWTR GEL 12X70G",
      "InitalSOH Week": 3400,
      Location: "United Kingdom",
      PPG: 8392919,
      "RB SKU": "3234661",
    },
  ]);

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
                <div>CW-9</div>
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
                <div>CW-8</div>
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
                <div>CW-7</div>
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
                <div>CW-6</div>
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
                <div>CW-5</div>
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
                <div>CW-4</div>
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
                <div>CW-3</div>
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
                <div>CW-2</div>
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
                <div>CW-1</div>
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
                <div>CW</div>
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
                  <TableCell>
                    {" "}
                    <div className="alignment">{item.PPG}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item.Description}</div>
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
                    <div className="alignment">{item["InitalSOH Week"]}</div>
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
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Historic;
