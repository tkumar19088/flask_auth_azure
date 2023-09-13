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
  Typography,Box
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

const startingWeek = 28;

const Ola = ({ onData }) => {
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

  // const data = useSelector((state) => state.sidebar.customerola);

  const [data, setData] = useState([
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: "83%",
      "CW+1": "66%",
      "CW+2": "95%",
      "CW+3": "81%",
      "CW+4": "92%",
      "CW+5": "90%",
      "CW+6": "75%",
      "CW+7": "94%",
      "CW+8": "85%",
      "CW+9": "78%",
      Customer: "Amazon",
      Description: "AWICK,GB,SPNG DEL 4X250ML",
      "InitalSOH Week": 3000,
      Location: "United Kingdom",
      PPG: 6208713,
      "RB SKU": "3038049",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: "94%",
      "CW+1": "74%",
      "CW+2": "82%",
      "CW+3": "71%",
      "CW+4": "81%",
      "CW+5": "90%",
      "CW+6": "77%",
      "CW+7": "87%",
      "CW+8": "66%",
      "CW+9": "75%",
      Customer: "Amazon",
      Description: "AWICK,GB,FM RF PNKSP 392X250ML",
      "InitalSOH Week": 3400,
      Location: "United Kingdom",
      PPG: 2849279,
      "RB SKU": "3209375",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: "84%",
      "CW+1": "75%",
      "CW+2": "83%",
      "CW+3": "77%",
      "CW+4": "91%",
      "CW+5": "88%",
      "CW+6": "76%",
      "CW+7": "87%",
      "CW+8": "90%",
      "CW+9": "90%",
      Customer: "Amazon",
      Description: "AWICK,GB,FM TW RF RW 8X250ML",
      "InitalSOH Week": 3300,
      Location: "United Kingdom",
      PPG: 9014190,
      "RB SKU": "3232106",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: "79%",
      "CW+1": "67%",
      "CW+2": "91%",
      "CW+3": "89%",
      "CW+4": "85%",
      "CW+5": "80%",
      "CW+6": "74%",
      "CW+7": "80%",
      "CW+8": "82%",
      "CW+9": "67%",
      Customer: "Amazon",
      Description: "AWICK,GB,NA3,PSP 6X300ML",
      "InitalSOH Week": 1400,
      Location: "United Kingdom",
      PPG: 4725387,
      "RB SKU": "3246983",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: "69%",
      "CW+1": "86%",
      "CW+2": "72%",
      "CW+3": "66%",
      "CW+4": "84%",
      "CW+5": "76%",
      "CW+6": "87%",
      "CW+7": "91%",
      "CW+8": "90%",
      "CW+9": "78%",
      Customer: "Amazon",
      Description: "AWICK,GB,BOOSTER ROSE 12X300ML",
      "InitalSOH Week": 2700,
      Location: "United Kingdom",
      PPG: 6876698,
      "RB SKU": "3136081",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: "78%",
      "CW+1": "71%",
      "CW+2": "78%",
      "CW+3": "72%",
      "CW+4": "82%",
      "CW+5": "81%",
      "CW+6": "77%",
      "CW+7": "72%",
      "CW+8": "90%",
      "CW+9": "86%",
      Customer: "Amazon",
      Description: "AWICK,GB,REED ESO PBFIG 5X33ML",
      "InitalSOH Week": 2000,
      Location: "United Kingdom",
      PPG: 5227394,
      "RB SKU": "3167124",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: "83%",
      "CW+1": "93%",
      "CW+2": "76%",
      "CW+3": "80%",
      "CW+4": "78%",
      "CW+5": "88%",
      "CW+6": "81%",
      "CW+7": "87%",
      "CW+8": "86%",
      "CW+9": "90%",
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
      CW: "87%",
      "CW+1": "88%",
      "CW+2": "71%",
      "CW+3": "91%",
      "CW+4": "79%",
      "CW+5": "76%",
      "CW+6": "88%",
      "CW+7": "92%",
      "CW+8": "78%",
      "CW+9": "86%",
      Customer: "Amazon",
      Description: "AWICK,GB,LE RF BERRY 2X5X19ML",
      "InitalSOH Week": 3700,
      Location: "United Kingdom",
      PPG: 6572089,
      "RB SKU": "3205304",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: "69%",
      "CW+1": "84%",
      "CW+2": "89%",
      "CW+3": "82%",
      "CW+4": "94%",
      "CW+5": "92%",
      "CW+6": "83%",
      "CW+7": "85%",
      "CW+8": "82%",
      "CW+9": "93%",
      Customer: "Amazon",
      Description: "AWICK,GB,APPLE LE RF 6X19ML",
      "InitalSOH Week": 2500,
      Location: "United Kingdom",
      PPG: 2824041,
      "RB SKU": "3228650",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: "69%",
      "CW+1": "84%",
      "CW+2": "87%",
      "CW+3": "95%",
      "CW+4": "81%",
      "CW+5": "76%",
      "CW+6": "86%",
      "CW+7": "66%",
      "CW+8": "72%",
      "CW+9": "68%",
      Customer: "Amazon",
      Description: "AWICK,GB,LE RF MALDIVES 5X19ML",
      "InitalSOH Week": 1900,
      Location: "United Kingdom",
      PPG: 6439551,
      "RB SKU": "3252952",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: "66%",
      "CW+1": "88%",
      "CW+2": "84%",
      "CW+3": "78%",
      "CW+4": "92%",
      "CW+5": "73%",
      "CW+6": "93%",
      "CW+7": "84%",
      "CW+8": "89%",
      "CW+9": "73%",
      Customer: "Amazon",
      Description: "AWICK,GB,EM RF APP&CIN 6X20ML",
      "InitalSOH Week": 1800,
      Location: "United Kingdom",
      PPG: 5281278,
      "RB SKU": "3266914",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: "66%",
      "CW+1": "75%",
      "CW+2": "93%",
      "CW+3": "80%",
      "CW+4": "74%",
      "CW+5": "66%",
      "CW+6": "79%",
      "CW+7": "72%",
      "CW+8": "95%",
      "CW+9": "94%",
      Customer: "Amazon",
      Description: "AWICK,GB,NOEL CNDL 6X105G",
      "InitalSOH Week": 2900,
      Location: "United Kingdom",
      PPG: 6317266,
      "RB SKU": "3228482",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      CW: "91%",
      "CW+1": "70%",
      "CW+2": "74%",
      "CW+3": "68%",
      "CW+4": "66%",
      "CW+5": "86%",
      "CW+6": "71%",
      "CW+7": "91%",
      "CW+8": "84%",
      "CW+9": "67%",
      Customer: "Amazon",
      Description: "AWICK,GB,PMP FWTR GEL 12X70G",
      "InitalSOH Week": 2300,
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
                    <div className="alignment">{item.CW}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item["CW+1"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["CW+2"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["CW+3"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["CW+4"]}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item["CW+5"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["CW+6"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["CW+7"]}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item["CW+8"]}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item["CW+9"]}</div>
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

export default Ola;
