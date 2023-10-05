import React, { useState, useEffect } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import UpdateIcon from "@mui/icons-material/Update";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { fetchupdateresults } from "../../store/actions/sidebarActions";
import { useSelector, useDispatch } from "react-redux";

import "./Orderinvesti.css";

const Orderinvestigation2 = ({ constraints }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updateresults = useSelector((state) => state.sidebar.updateresults);
  // const suggRecord = useSelector(
  //   (state) => state.sidebar.stockreallocation.staticrow
  // );
  const suggRecord = {
    AvgYTDsellout: 600,
    Brand: "Airwick",
    "Business Unit": "Health",
    Channel: "Pharmacy",
    Customer: "Asda",
    Location: "Germany",
    "RB SKU": "3247398",
    Discription: "Airwick Electrical Lemon",
    "Sell out": 600,
    allocationconsumed: 180,
    cmuscore: 7.44,
    currentallocation: 400,
    newallocation: 400,
    currentcustSOH: 400,
    "custsoh-current": 1000,
    "custsoh-target": 900,
    "custwoc-current": 2,
    "custwoc-target": 4,
    expectedservicelevel: 0.94,
    idealallocationvalues: 800,
    openorders: 180,
    remainingallocation: 220,
    "sif-atf": 900,
    "sif-reckitt": 800,
    stocksafetoreallocate: 36,
    suggestedallocation: 2,
    sumofPOsinalloccycle: 900,
    testReallocation: 0,
  };
  const [counter, setCounter] = useState(0);
  const [weeksOnConv, setweeksOnConv] = useState(constraints[3].Value);
  const [minweeksOnConv, setminweeksOnConv] = useState(constraints[2].Value);
  const [expectedservice, setexpectedservice] = useState(constraints[1].Value);
  const [pctdeviation, setpctdeviation] = useState(constraints[0].Value);

  const handleUpdateResults = () => {
    dispatch(fetchupdateresults(true));
  };
  const handleweeksOnCovUp = () => {
    setweeksOnConv(weeksOnConv + 1);
  };

  const handleweeksOnCovDown = () => {
    setweeksOnConv(weeksOnConv - 1);
  };

  const handleminweeksOnCovUp = () => {
    setminweeksOnConv(minweeksOnConv + 1);
  };

  const handleminweeksOnCovDown = () => {
    setminweeksOnConv(minweeksOnConv - 1);
  };

  const handleExpectedserviceUp = () => {
    setexpectedservice(expectedservice + 1);
  };
  const handleExpectedserviceDown = () => {
    setexpectedservice(expectedservice - 1);
  };
  const handlePCTDeviationUp = () => {
    setpctdeviation(pctdeviation + 1);
  };
  const handlePCTDeviationDown = () => {
    setpctdeviation(pctdeviation - 1);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDateTime = `${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${now.getDate().toString().padStart(2, "0")}/${now
        .getFullYear()
        .toString()
        .slice(2)
        .padStart(2, "0")} ${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <Stack>
        <Box display="flex" className="sg-main" mt="10px">
          <Box className="sg-title">
            Scenario Generation:{" "}
            {suggRecord.Discription ? suggRecord.Discription + " " : ""}
            {suggRecord["RB SKU"] ? suggRecord["RB SKU"] : ""}
          </Box>
          <Box display="flex" marginTop="2px">
            <Typography>
              <VisibilityOutlinedIcon
                sx={{
                  height: "18px",
                  width: "40px",
                  marginTop: "2px",
                }}
              />
            </Typography>
            <Typography fontSize={14}>{currentDateTime}</Typography>
          </Box>
        </Box>
      </Stack>
      <Typography fontSize={24} color="#145A6C" mx="3px" mt="-3px">
        Constraints (Optional)
      </Typography>

      <Stack direction="row" border="">
        <div
          style={{
            display: "flex",
            borderRadius: "5px",
            backgroundColor: "#fff",
            padding: "15px",
            gap: "40px",
          }}
        >
          <Box className="const-bs1" borderRight="1px solid #dcdcdc">
            <Box display="flex" sx={{ color: "#415A6C" }}>
              <Typography className="constains-h1">
                {constraints[0].Name}
              </Typography>{" "}
              <Typography>
                <Tooltip
                  placement="top"
                  arrow
                  title="This constraint determines the maximum allowable deviation from the initial allocation that the reallocation engine can suggest."
                >
                  <InfoOutlinedIcon
                    sx={{
                      height: "22px",
                      marginTop: { lg: "0px", xs: "1px" },
                      marginLeft: "5px",
                    }}
                  />
                </Tooltip>
              </Typography>
            </Box>
            <Box display="flex">
              <Box
                display="flex"
                border="1px solid #E7E9EE"
                borderRadius="5px 5px"
                width="75px"
                height="35px"
                justifyContent="space-around"
                textAlign="center"
                marginTop="1%"
              >
                <Box margin="auto">
                  <Typography fontSize={20} color="#008824">
                    {pctdeviation}
                  </Typography>
                </Box>
                <Box>
                  <Typography mt="-5px" color="#7E919F">
                    <ArrowDropUpRoundedIcon
                      onClick={handlePCTDeviationUp}
                      sx={{ cursor: "pointer", fontSize: "30px" }}
                    />
                  </Typography>
                  <Typography mt="-22px" color="#7E919F">
                    <ArrowDropDownRoundedIcon
                      onClick={handlePCTDeviationDown}
                      sx={{ cursor: "pointer", fontSize: "30px" }}
                    />
                  </Typography>
                </Box>
              </Box>
              <Box border="" textAlign="center" mx={{ lg: "10px", xs: "10px" }}>
                <Typography
                  mt={{ lg: "13px", xs: "10px" }}
                  sx={{
                    width: { lg: "100px", xs: "70px" },
                    borderRadius: "18px 18px",
                    backgroundColor:
                      constraints[0].Label == 0
                        ? "#F44444"
                        : constraints[0].Label == 1
                        ? "orange"
                        : "#57a957",
                    color: "#fff",
                    padding: "2px 8px 2px 8px",
                  }}
                  fontSize={{ lg: 12, xs: 8 }}
                >
                  {constraints[0].Label == 0
                    ? "Not Satisfied"
                    : constraints[0].Label == 1
                    ? "Partially Satisfied"
                    : "Fully Satisfied"}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="const-bs2" borderRight="1px solid #dcdcdc">
            <Box display="flex" width="370px" sx={{ color: "#415A6C" }}>
              <Typography className="constains-h1">
                {constraints[1].Name}
              </Typography>
              <Typography>
                <Tooltip
                  placement="top"
                  arrow
                  title="This constraint establishes the minimum expected service level for any individual customer and restricts the maximum quantity of stock that can be reallocated from a customer."
                >
                  <InfoOutlinedIcon
                    sx={{
                      height: "22px",
                      marginTop: { lg: "0px", xs: "0px" },
                      marginLeft: "8px",
                    }}
                  />
                </Tooltip>
              </Typography>
            </Box>

            <Box display="flex">
              <Box
                display="flex"
                border="1px solid #E7E9EE"
                borderRadius="5px 5px"
                width="75px"
                height="35px"
                justifyContent="space-around"
                textAlign="center"
                marginTop="1%"
              >
                <Box margin="auto">
                  <Typography fontSize={20} color="#008824">
                    {expectedservice}
                  </Typography>
                </Box>
                <Box>
                  <Typography mt="-5px" color="#7E919F">
                    <ArrowDropUpRoundedIcon
                      onClick={handleExpectedserviceUp}
                      sx={{ cursor: "pointer", fontSize: "30px" }}
                    />
                  </Typography>
                  <Typography mt="-22px" color="#7E919F">
                    <ArrowDropDownRoundedIcon
                      onClick={handleExpectedserviceDown}
                      sx={{ cursor: "pointer", fontSize: "30px" }}
                    />
                  </Typography>
                </Box>
              </Box>
              <Box border="" textAlign="center" mx={{ lg: "10px", xs: "10px" }}>
                <Typography
                  mt={{ lg: "13px", xs: "10px" }}
                  sx={{
                    width: { lg: "100px", xs: "70px" },
                    borderRadius: "18px 18px",
                    backgroundColor:
                      constraints[1].Label == 0
                        ? "#F44444"
                        : constraints[1].Label == 1
                        ? "orange"
                        : "#57a957",
                    color: "#fff",
                    padding: "2px 8px 2px 8px",
                  }}
                  fontSize={{ lg: 12, xs: 8 }}
                >
                  {constraints[1].Label == 0
                    ? "Not Satisfied"
                    : constraints[1].Label == 1
                    ? "Partially Satisfied"
                    : "Fully Satisfied"}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="const-bs3">
            <Box
              display="flex"
              width="400px"
              mx={7}
              sx={{ color: "#415A6C" }}
              marginLeft={0}
            >
              <Typography className="constains-h1">
                {constraints[2].Name}
              </Typography>
              <Typography>
                <Tooltip
                  placement="top"
                  arrow
                  title="This constraint defines the minimum and maximum stock that can be reallocated to any one customer based on resultant deviation from the customer target stock level."
                >
                  <InfoOutlinedIcon
                    sx={{
                      height: "22px",
                      marginTop: { lg: "0px", xs: "1px" },
                      marginLeft: "8px",
                    }}
                  />
                </Tooltip>
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              mx={{ lg: 0, xs: "-10px" }}
              marginTop="1%"
            >
              <Box display="flex">
                <Typography
                  margin="auto"
                  marginRight="3px"
                  fontSize={{ lg: 13, xs: 10 }}
                >
                  Min
                </Typography>
                <Box
                  display="flex"
                  border="1px solid #E7E9EE"
                  borderRadius="5px 5px"
                  width="75px"
                  height="35px"
                  justifyContent="space-around"
                  textAlign="center"
                >
                  <Box margin="auto">
                    <Typography fontSize={20} color="#DD0000">
                      {minweeksOnConv}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography mt="-5px" color="#7E919F">
                      <ArrowDropUpRoundedIcon
                        onClick={handleminweeksOnCovUp}
                        sx={{ cursor: "pointer", fontSize: "30px" }}
                      />
                    </Typography>
                    <Typography mt="-22px" color="#7E919F">
                      <ArrowDropDownRoundedIcon
                        onClick={handleminweeksOnCovDown}
                        sx={{ cursor: "pointer", fontSize: "30px" }}
                      />
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" border="" mx={{ lg: "10px", xs: "7px" }}>
                <Typography
                  margin="auto"
                  marginRight="3px"
                  fontSize={{ lg: 13, xs: 10 }}
                >
                  Max
                </Typography>
                <Box
                  display="flex"
                  border="1px solid #E7E9EE"
                  borderRadius="5px 5px"
                  width="75px"
                  height="35px"
                  justifyContent="space-around"
                  textAlign="center"
                >
                  <Box margin="auto">
                    <Typography fontSize={20} color="#DD0000">
                      {weeksOnConv}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography mt="-5px" color="#7E919F">
                      <ArrowDropUpRoundedIcon
                        onClick={handleweeksOnCovUp}
                        sx={{ cursor: "pointer", fontSize: "30px" }}
                      />
                    </Typography>
                    <Typography mt="-22px" color="#7E919F">
                      <ArrowDropDownRoundedIcon
                        onClick={handleweeksOnCovDown}
                        sx={{ cursor: "pointer", fontSize: "30px" }}
                      />
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                border=""
                textAlign="center"
                mx={{ lg: "3px", xs: "0px" }}
                marginRight={{ lg: "60px", xs: "0px" }}
              >
                <Typography
                  mt={{ lg: "8px", xs: "10px" }}
                  sx={{
                    width: { lg: "100px", xs: "70px" },
                    borderRadius: "18px 18px",
                    backgroundColor:
                      constraints[3].Label == 0
                        ? "#F44444"
                        : constraints[3].Label == 1
                        ? "orange"
                        : "#57a957",
                    color: "#fff",
                    padding: "2px 8px 2px 8px",
                  }}
                  fontSize={{ lg: 12, xs: 8 }}
                >
                  {constraints[3].Label == 0
                    ? "Not Satisfied"
                    : constraints[3].Label == 1
                    ? "Partially Satisfied"
                    : "Fully Satisfied"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </Stack>
    </div>
  );
};

export default Orderinvestigation2;
