import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Button, Grid, Typography } from "@mui/material";

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
          mt={-2}
          display="flex"
          //   justifyContent="space-between"
          textAlign="center"
        >
          <Typography
            fontSize={{ lg: 12, xs: 10 }}
            sx={{
              backgroundColor: "#D1F2C4",
              padding: "4px 8px 2px 8px",
              borderRadius: "5px 5px",
              width: { xs: "260px" },
            }}
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
                height: "14px",
                //   textAlign: "center",
                marginTop: { lg: "7px", xs: "7px" },
                marginLeft: "-7px",
              }}
            />{" "}
          </Typography>{" "}
          <Typography
            fontSize={{ lg: 15, xs: 12 }}
            mt={{ lg: "3px", xs: "5px" }}
          >
            {" "}
            01/01/23
          </Typography>
        </Box>
      </Grid>
      <Typography fontSize={20} color="#145A6C" mt="2%" mx="3px">
        Constraints (Optional)
      </Typography>
      <Grid
        container
        spacing={1}
        border=""
        mt="5px"
        mx={{ lg: "1px", xs: "1px" }}
      >
        <Grid
          container
          item
          xs={11}
          p={1}
          backgroundColor="#fff"
          borderRadius="5px 5px"
        >
          <Grid item xs={3} border="">
            <Box display="flex" ml={{ lg: "5px", xs: "1px" }}>
              <Typography fontSize={{ lg: 13, xs: 10 }}>
                % deviation from actual sell in{" "}
              </Typography>{" "}
              <Typography>
                <InfoOutlinedIcon
                  sx={{
                    height: "17px",
                    marginTop: { lg: "2px", xs: "1px" },
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
                    width: { lg: "100px", xs: "70px" },
                    borderRadius: "18px 18px",
                    backgroundColor: "#55C3F0",
                    color: "#fff",
                    padding: "2px 8px 2px 8px",
                  }}
                  fontSize={{ lg: 12, xs: 8 }}
                >
                  Partially Satisfied
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Box border="1px solid #E5EBEF" height="65px" ml={2}></Box>
          <Grid item xs={3} border="" ml={2}>
            <Box display="flex" width="240px">
              <Typography fontSize={{ lg: 13, xs: 10 }}>
                Max % of total inventory allocated
              </Typography>
              <Typography>
                <InfoOutlinedIcon
                  sx={{
                    height: "17px",
                    marginTop: { lg: "2px", xs: "0px" },
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
                    width: { lg: "100px", xs: "70px" },
                    borderRadius: "18px 18px",
                    backgroundColor: "#55C3F0",
                    color: "#fff",
                    padding: "2px 8px 2px 8px",
                  }}
                  fontSize={{ lg: 12, xs: 8 }}
                >
                  Partially Satisfied
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Box border="1px solid #E5EBEF" height="65px" ml={4}></Box>

          <Grid item xs={4} border="" ml={2}>
            <Box display="flex" width="200px" mx={7}>
              <Typography fontSize={{ lg: 13, xs: 10 }}>
                Weeks on Coverage
              </Typography>
              <Typography>
                <InfoOutlinedIcon
                  sx={{ height: "17px", marginTop: { lg: "2px", xs: "1px" } }}
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
              <Box border="" textAlign="center" mx={{ lg: "3px", xs: "0px" }}>
                <Typography
                  mt={{ lg: "8px", xs: "10px" }}
                  sx={{
                    width: { lg: "100px", xs: "70px" },
                    borderRadius: "18px 18px",
                    backgroundColor: "#55C3F0",
                    color: "#fff",
                    padding: "2px 8px 2px 8px",
                  }}
                  fontSize={{ lg: 12, xs: 8 }}
                >
                  Partially Satisfied
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid mt="2%">
        <Typography fontSize={20} mt="5px" color="#145A6C" mx="3px">
          Results
        </Typography>

        <Grid container spacing={1} item xs={12} border="">
          <Grid item xs={2}>
            <Box
              className="snrio-rslt1"
              border="1px solid #E7E9EE"
              width={{ lg: "160px", xs: "130px" }}
            >
              <Typography
                mt={{ lg: "6px", xs: "7px" }}
                fontSize={{ lg: 14, xs: 12 }}
                className="scn-txt"
              >
                Expected Net Revenue
              </Typography>
              <Typography
                fontSize={{ lg: 18 }}
                color="#008824"
                className="scn-txt"
              >
                £7,749.00
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              className="snrio-rslt1"
              border="1px solid #E7E9EE"
              // mt={{ lg: "6px", xs: "7px" }}
              width={{ lg: "120px" }}
              mx={{ lg: "25px", xs: "30px" }}
            >
              <Typography
                mt={{ lg: "6px", xs: "7px" }}
                className="scn-txt"
                fontSize={{ lg: 14, xs: 12 }}
              >
                Expected OLA
              </Typography>
              <Typography
                className="scn-txt"
                fontSize={{ lg: 18 }}
                color="#008824"
              >
                94%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              className="snrio-rslt1"
              border="1px solid #E7E9EE"
              width={{ lg: "120px" }}
              mx={{ lg: "10px", xs: "40px" }}
            >
              <Typography
                mt={{ lg: "6px", xs: "7px" }}
                className="scn-txt"
                fontSize={{ lg: 14, xs: 12 }}
              >
                Costs to serve
              </Typography>
              <Typography
                className="scn-txt"
                fontSize={{ lg: 18 }}
                color="#DD0000"
              >
                (£324.15)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              border="1px solid #B7C3CA"
              display="flex"
              borderRadius="5px 5px"
              justifyContent="space-around"
              padding={{ lg: "4px 6px", xs: "2px 4px" }}
              mt={{ lg: "29px", xs: "29px" }}
              color="#415A6C"
              sx={{ cursor: "pointer" }}
              ml={{ lg: "0px", xs: "50px" }}
              width={{ lg: "160px", xs: "140px" }}
            >
              <Typography
                fontSize={{ lg: "12px", xs: 10 }}
                mt={{ lg: "1px", xs: "2px" }}
              >
                SIMULATED SCENARIO{" "}
              </Typography>{" "}
              <PlayArrowIcon sx={{ height: "20px" }} />
            </Box>
          </Grid>
          <Grid item xs={2} mx={{ lg: "15px" }}>
            <Box
              border="1px solid"
              display="flex"
              borderRadius="5px 5px"
              justifyContent="space-around"
              padding={{ lg: "4px 6px", xs: "2px 4px" }}
              mt={{ lg: "29px", xs: "29px" }}
              color="#E7E9EE"
              backgroundColor="#415A6C"
              sx={{ cursor: "pointer" }}
              ml={{ lg: "0px", xs: "80px" }}
              width={{ lg: "160px", xs: "140px" }}
            >
              <Typography
                fontSize={{ lg: "12px", xs: 10 }}
                mt={{ lg: "1px", xs: "2px" }}
              >
                SAVE SCENARIO{" "}
              </Typography>{" "}
              <SaveIcon sx={{ height: "20px" }} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Orderinvestigationairwick;
