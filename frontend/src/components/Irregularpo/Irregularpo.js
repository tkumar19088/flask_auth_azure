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
import "./Irregularpro.css";
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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Errormodalpopup from "../Errormodalpopup/Errormodalpopup";

const Irregularpo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const open = useSelector((state) => state.sidebar.errormodalopen);
  const loader = useSelector((state) => state.sidebar.loader);
  const data = useSelector((state) => state.sidebar.irregulardata);
  const [podetails, setpodetails] = useState([]);
  // const [chartData, setchartData] = useState([]);
  // console.log(data);
  const handleClick = async (po_id, rbsku) => {
    // navigate("/historicaldata");
    dispatch(updateloader(true));
    var data = { po_id: po_id, rbsku: rbsku };
    try {
      const response = await fetch(
        "https://testingsmartola.azurewebsites.net/getirrposku",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log(response);
      if (response.ok) {
        const info = await response.json();
        const json = info.data;
        if (info.status === "success") {
          dispatch(fetchoirregularchartdata(json));
          navigate("/irregularcharts");
        } else {
          dispatch(updateerrortextmessage(info.message));
          dispatch(updateerrormodalpopup(true));
        }
      } else {
        console.log(response.json());
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
          "https://testingsmartola.azurewebsites.net/getirrpodetails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (response.ok) {
          const info = await response.json();
          const json = info.data;
          if (info.status === "success") {
            setpodetails(json);
          } else {
            dispatch(updateerrortextmessage(info.message));
            dispatch(updateerrormodalpopup(true));
          }
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
                Alert Type
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
                Quantity Ordered Since Monday
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
                Sell-In Forecast (S-OLA / Kinaxis)
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
              <Typography fontSize={14}>Cum. Percentage Discrepancy</Typography>
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
              <Typography fontSize={14}>Deep Dive</Typography>
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
                  {item.quantityordered}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                <Box display="flex" sx={{ justifyContent: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {item["sif-sola"]}
                  </Typography>
                  <Typography
                    fontSize={13}
                    sx={{
                      marginLeft: "5px",
                      marginTop: "10px",
                      color: "#6e8c78",
                    }}
                  >
                    {item["sif-kinaxis"]}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {item.percentage_discrepancy}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {item.po_price}
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
      {open && <Errormodalpopup />}
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
              <Typography fontSize={14}>Irregular PO</Typography>
            </Box>
            <Box
              mt="20px"
              mx="1px"
              display="flex"
              alignSelf="center"
              alignItems="center"
              gap="5px"
              color="#415A6C"
            >
              <Typography fontSize={24} color="#415A6C">
                Recent POs
              </Typography>
              (
              <Typography fontSize={15} color="#415A6C" mt="5px">
                last 1 month
              </Typography>
              )
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
                      Reckitt PO Number
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      PO Receipt Date
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      PO Delivery Date
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      PO Status
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      No SKUs in PO
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      No.Irregular SKUs
                    </TableCell>

                    <TableCell
                      style={{
                        textAlign: "center",
                        color: "#415A6C",
                        backgroundColor: "#E5EBEF",
                        border: "1px solid #dcdcdc",
                      }}
                    >
                      Irregular PO
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item, index) => (
                    <React.Fragment key={item.poNumber}>
                      <TableRow
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                        }}
                      >
                        <TableCell
                          fontSize={13}
                          onClick={() => handleRowClick(item.poNumber)}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {expandedRow === item.poNumber ? (
                              <RemoveIcon
                                fontSize="medium"
                                sx={{
                                  color: "#415A6C",
                                  cursor: "pointer",
                                  fontWeight: "800",
                                  // marginTop: "-1px",
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
                                  marginTop: "-1px",
                                  backgroundColor: "transparent",
                                }}
                              />
                            )}
                            {item.poNumber}
                          </Box>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {item.poReceiptDate}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {item.poDeliveryDate}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {item.poStatus}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {item.noSKUsinPO}
                        </TableCell>
                        <TableCell>
                          <Typography fontSize={13} textAlign="center">
                            {item.noSKUsIrregular}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography fontSize={13} textAlign="center">
                            {item.noSKUsIrregular > 0 ? (
                              <DoDisturbOutlinedIcon
                                sx={{
                                  color: "red",
                                  fontSize: "1rem",
                                  marginTop: "7px",
                                }}
                              />
                            ) : (
                              <CheckCircleOutlineIcon
                                sx={{
                                  color: "green",
                                  fontSize: "1rem",
                                  marginTop: "7px",
                                }}
                              />
                            )}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      {expandedRow === item.poNumber && (
                        <TableRow>
                          <TableCell colSpan={10}>
                            {/* Add your expanded table here */}
                            <SubTable details={podetails} />
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
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

export default Irregularpo;
