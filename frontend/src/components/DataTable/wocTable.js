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

const WocTable = ({ onData }) => {
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
        const response = await fetch("https://testingsmartola.azurewebsites.net/getcampaigns", {
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
      const response = await fetch("https://testingsmartola.azurewebsites.net/getalternativeskus", {
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
      const response = await fetch("https://testingsmartola.azurewebsites.net/rarbysku", {
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

  const data = useSelector((state) => state.sidebar.reckittwoc);

  // const [data, setData] = useState([
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",
  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
  //   },
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
  //   },
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
  //   },
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
  //   },
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
  //   },
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
  //   },
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
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
          <TableHead>
            <TableRow>
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
                Initial Reckitt SoH{" "}
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
                  </TableCell>{" "}
                  <TableCell>
                    {" "}
                    <div className="alignment">{item.Description}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item.Brand}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item.intialreckittsoh}</div>
                  </TableCell>{" "}
                  <TableCell>
                    {" "}
                    <div className="alignment">{item["WOC CW"]}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item["WOC CW+1"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["WOC CW+2"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["WOC CW+3"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["WOC CW+4"]}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item["WOC CW+5"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["WOC CW+6"]}</div>
                  </TableCell>
                  <TableCell>
                    <div className="alignment">{item["WOC CW+7"]}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item["WOC CW+8"]}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="alignment">{item["WOC CW+9"]}</div>
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

export default WocTable;
