import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";

import play from "../../images/play.png";
// import "./AirwickElectrical.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Linechart from "../../Linechart";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SaveIcon from "@mui/icons-material/Save";
import "./ScenarioGeneration.css";
import { useNavigate } from "react-router-dom";

const Orderinvestigationairwick = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another URL
    navigate("/scenariogeneration");
  };

  const [counter, setCounter] = useState(0);
  const [weeksOnConv, setweeksOnConv] = useState(0);

  // Function is called everytime increment button is clicked
  const handleweeksOnCovUp = () => {
    // Counter state is incremented
    setCounter(weeksOnConv + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleweeksOnCovDown = () => {
    // Counter state is decremented
    setweeksOnConv(weeksOnConv - 1);
  };
  const handleClick3 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

  return (
    <div style={{ marginBlock: "3%" }}>
      {" "}
      <Grid item xs={6}>
        <Box
          mt="10px"
          display="flex"
          //   justifyContent="space-between"
          textAlign="center"
        >
          <Typography
            // border="1px solid"
            sx={{
              backgroundColor: "#D1F2C4",
              padding: "4px 8px 2px 8px",
              borderRadius: "5px 5px",
              width: { xs: "260px", lg: "260px", xl: "400px" },
            }}
            fontSize={{ lg: 12, xs: 10, xl: 18 }}
          >
            Order Investigation: Airwick Electrical Lemon
          </Typography>{" "}
          <Typography
            textAlign="center"
            // fontSize={15}
            sx={{ marginLeft: "15px" }}
          >
            <VisibilityOutlinedIcon
              sx={{
                height: { xs: "14px", lg: "14px", xl: "20px" },
                //   textAlign: "center",
                marginTop: { lg: "7px", xs: "7px" },
                marginLeft: "-7px",
              }}
            />{" "}
          </Typography>{" "}
          <Typography
            fontSize={{ lg: 15, xs: 12, xl: 20 }}
            mt={{ lg: "3px", xs: "5px", xl: "1px" }}
            ml={{ xs: 0, lg: 0, xl: "5px" }}
          >
            {" "}
            01/01/23
          </Typography>
        </Box>
      </Grid>
      <Typography
        fontSize={{ xs: 20, lg: 20, xl: 36 }}
        color="#145A6C"
        mt="2%"
        mx="3px"
      >
        Constraints (Optional)
      </Typography>
      <Grid
        container
        spacing={1}
        // border=" 1px solid red"
        mt="5px"
        mx={{ lg: "1px", xs: "1px" }}
      >
        <Box
          display="flex"
          p={1}
          backgroundColor="#fff"
          borderRadius="5px 5px"
          // border=" 1px solid red"
          width={{ xs: "97%", lg: "90%", xl: "90%" }}
          height={{ xl: "90px" }}
        >
          <Grid item xs={3} border="">
            <Box
              display="flex"
              ml={{ lg: "5px", xs: "1px" }}
              // border="1px solid"
              // width={{ xl: "300px" }}
            >
              <Typography fontSize={{ xs: 13, lg: 16, xl: 20 }}>
                % deviation from actual sell in
              </Typography>{" "}
              <Typography>
                <InfoOutlinedIcon
                  sx={{
                    height: { xs: "14px", lg: "20px", xl: "100%" },
                    marginTop: { lg: "2px", xs: "1px", xl: "2px" },
                    ml: { xs: 0, lg: "5px", xl: "5px" },
                  }}
                />
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
                    {counter}%
                  </Typography>
                </Box>
                <Box>
                  <Typography mt="-2px" color="#7E919F">
                    <ArrowDropUpRoundedIcon />
                  </Typography>
                  <Typography mt="-19px" color="#7E919F">
                    <ArrowDropDownRoundedIcon />
                  </Typography>
                </Box>
              </Box>
              <Box border="" textAlign="center" mx={{ lg: "10px", xs: "10px" }}>
                <Typography
                  mt={{ lg: "8px", xs: "10px" }}
                  sx={{
                    // width: { lg: "100px", xs: "70px" },
                    borderRadius: "18px 18px",
                    backgroundColor: "#55C3F0",
                    color: "#fff",
                    // padding: "2px 8px 2px 8px",
                    width: { xs: "110px", lg: "140px", xl: "290" },
                    height: { xs: "20px", lg: "25px", xl: "25px" },
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                  fontSize={{ lg: 14, xs: 11, xl: 14 }}
                >
                  Partially Satisfied
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Box border="1px solid #E5EBEF" height="65px" ml={2}></Box>
          <Grid item xs={3} border="" ml={2}>
            <Box
              display="flex"
              // border="1px solid"
              // width={{ xs: "240px", lg: "240px", xl: "400" }}
            >
              <Typography fontSize={{ xs: 13, lg: 16, xl: 20 }}>
                Max % of total inventory allocated
              </Typography>
              <Typography>
                <InfoOutlinedIcon
                  sx={{
                    height: { xs: "14px", lg: "20px", xl: "100%" },
                    marginTop: { lg: "2px", xs: "1px", xl: "2px" },
                    ml: { xs: 0, lg: "5px", xl: "5px" },
                  }}
                />
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
                    {counter}%
                  </Typography>
                </Box>
                <Box>
                  <Typography mt="-2px" color="#7E919F">
                    <ArrowDropUpRoundedIcon />
                  </Typography>
                  <Typography mt="-19px" color="#7E919F">
                    <ArrowDropDownRoundedIcon />
                  </Typography>
                </Box>
              </Box>
              <Box border="" textAlign="center" mx={{ lg: "10px", xs: "10px" }}>
                <Typography
                  mt={{ lg: "8px", xs: "10px" }}
                  sx={{
                    // width: { lg: "100px", xs: "70px" },
                    borderRadius: "18px 18px",
                    backgroundColor: "#55C3F0",
                    color: "#fff",
                    // padding: "2px 8px 2px 8px",
                    width: { xs: "110px", lg: "140px", xl: "290" },
                    height: { xs: "20px", lg: "25px", xl: "25px" },
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                  fontSize={{ lg: 14, xs: 11, xl: 14 }}
                >
                  Partially Satisfied
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Box border="1px solid #E5EBEF" height="65px" ml={4}></Box>

          <Grid item xs={4} border="" ml={2}>
            <Box
              display="flex"
              //  width="200px"
              mx={7}
            >
              <Typography fontSize={{ xs: 13, lg: 16, xl: 20 }}>
                Weeks on Coverage
              </Typography>
              <Typography>
                <InfoOutlinedIcon
                  sx={{
                    height: { xs: "14px", lg: "20px", xl: "100%" },
                    marginTop: { lg: "2px", xs: "1px", xl: "2px" },
                    ml: { xs: 0, lg: "5px", xl: "5px" },
                  }}
                />
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              // border="1px solid red"
              // width="240px"
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
                      {counter}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography mt="-2px" color="#7E919F">
                      <ArrowDropUpRoundedIcon
                        onClick={handleClick3}
                        sx={{ cursor: "pointer" }}
                      />
                    </Typography>
                    <Typography mt="-19px" color="#7E919F">
                      <ArrowDropDownRoundedIcon
                        onClick={handleClick3}
                        sx={{ cursor: "pointer" }}
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
                    <Typography mt="-2px" color="#7E919F">
                      <ArrowDropUpRoundedIcon
                        onClick={handleweeksOnCovUp}
                        sx={{ cursor: "pointer" }}
                      />
                    </Typography>
                    <Typography mt="-19px" color="#7E919F">
                      <ArrowDropDownRoundedIcon
                        onClick={handleweeksOnCovDown}
                        sx={{ cursor: "pointer" }}
                      />
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                // border="1px solid red"
                textAlign="center"
                mx={{ lg: "3px", xs: "0px" }}
              >
                <Typography
                  // border="1px solid red"
                  mt={{ lg: "8px", xs: "10px" }}
                  sx={{
                    borderRadius: "18px 18px",
                    backgroundColor: "#55C3F0",
                    color: "#fff",
                    width: { xs: "110px", lg: "140px", xl: "290" },
                    height: { xs: "20px", lg: "25px", xl: "25px" },
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                  fontSize={{ lg: 14, xs: 11, xl: 14 }}
                >
                  Partially Satisfied
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
      <Grid mt="10px" border="">
        <Typography
          fontSize={{ xs: 20, lg: 20, xl: 36 }}
          mt="5px"
          color="#145A6C"
          mx="3px"
        >
          Results
        </Typography>

        <Grid
          mt={{ xs: 1 }}
          container
          spacing={1}
          item
          xs={12}
          //  border="1px solid red"
        >
          <Box
            className="snrio-rslt1"
            border="1px solid #E7E9EE"
            width={{ xs: "130px", lg: "160px", xl: "200px" }}
          >
            <Typography
              mt={{ lg: "6px", xs: "7px" }}
              fontSize={{ xs: 12, lg: 14, xl: 18 }}
              className="scn-txt"
            >
              Expected Net Revenue
            </Typography>
            <Typography
              fontSize={{ xs: 18, lg: 18, xl: 20 }}
              color="#008824"
              className="scn-txt"
            >
              £7,749.00
            </Typography>
          </Box>

          <Box
            className="snrio-rslt1"
            border="1px solid #E7E9EE"
            // mt={{ lg: "6px", xs: "7px" }}
            width={{ lg: "120px", xl: "160px" }}
            mx={{ lg: "25px", xs: "20px" }}
          >
            <Typography
              mt={{ lg: "6px", xs: "7px" }}
              className="scn-txt"
              fontSize={{ lg: 14, xs: 12, xl: 20 }}
            >
              Expected OLA
            </Typography>
            <Typography
              className="scn-txt"
              fontSize={{ lg: 18, xl: 20 }}
              color="#008824"
            >
              94%
            </Typography>
          </Box>

          <Box
            className="snrio-rslt1"
            border="1px solid #E7E9EE"
            width={{ lg: "120px", xl: "160px" }}
            mx={{ lg: "10px", xs: "0px" }}
          >
            <Typography
              mt={{ lg: "6px", xs: "7px" }}
              className="scn-txt"
              fontSize={{ lg: 14, xs: 12, xl: 20 }}
            >
              Costs to serve
            </Typography>
            <Typography
              className="scn-txt"
              fontSize={{ lg: 18, xl: 20 }}
              color="#DD0000"
            >
              (£324.15)
            </Typography>
          </Box>
          <Box className="btn-rslt-main">
            <Box
              className="btn-ruslt"
              border="1px solid #B7C3CA"
              color="#415A6C"
            >
              <Typography
                ml={{ lg: "6px", xs: "12px" }}
                mt={{ lg: "3px", xs: "4px" }}
                fontSize={{ lg: "13px", xs: "12px", xl: 22 }}
              >
                SIMULATED SCENARIO{" "}
              </Typography>{" "}
              <PlayArrowIcon
                sx={{
                  height: { lg: "18px", xs: "16px", xl: 40 },
                  ml: { lg: "0px", xs: "6px", xl: "10px" },
                  mt: { lg: "2px", xs: "3px", xl: "-1px" },
                }}
              />
            </Box>
            <Box
              className="btn-ruslt"
              backgroundColor="#415A6C"
              border="1px solid #415A6C"
              color="#B7C3CA"
              ml={{ lg: "20px", xs: "15px" }}
            >
              <Typography
                ml={{ lg: "15px", xs: "18px" }}
                mt={{ lg: "3px", xs: "4px" }}
                fontSize={{ lg: "13px", xs: "12px", xl: 22 }}
              >
                SAVE SCENARIO{" "}
              </Typography>{" "}
              <SaveIcon
                sx={{
                  height: { lg: "18px", xs: "16px", xl: 40 },
                  ml: { lg: "25px", xs: "30px",xl:"50px" },
                  mt: { lg: "3px", xs: "4px", xl: "-2px" },
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Orderinvestigationairwick;
