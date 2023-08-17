import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

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
import RefreshIcon from "@mui/icons-material/Refresh";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DownloadIcon from "@mui/icons-material/Download";

import { useNavigate } from "react-router-dom";

const Orderinvestigation2 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another URL
    // navigate("/scenariogeneration");
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
            fontSize={{ lg: 18, xs: 10 }}
            sx={{
              backgroundColor: "#D1F2C4",
              padding: "8px",
              borderRadius: "5px 5px",
              width: { lg: "460px" },
            }}
          >
            Scenario Generation: Airwick Electrical Lemon 112345
          </Typography>{" "}
          <Typography
            textAlign="center"
            // fontSize={15}
            sx={{ marginLeft: "15px" }}
          >
            <VisibilityOutlinedIcon
              sx={{
                height: "32px",
                width: "80px",
                //   textAlign: "center",
                marginTop: { lg: "7px", xs: "7px" },
                // marginLeft: "-7px",
              }}
            />{" "}
          </Typography>{" "}
          <Typography
            fontSize={{ lg: 24, xs: 12 }}
            mt={{ lg: "5px", xs: "5px" }}
            marginLeft="-13px"
          >
            {" "}
            01/01/23
          </Typography>
        </Box>
      </Grid>
      <Typography fontSize={26} color="#145A6C" mt="2%" mx="3px">
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
              <Typography fontSize={{ lg: 22, xs: 10 }}>
                % deviation from actual sell in{" "}
              </Typography>{" "}
              <Typography>
                <InfoOutlinedIcon
                  sx={{
                    height: "28px",
                    marginTop: { lg: "2px", xs: "1px" },
                    marginLeft: "5px",
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
            <Box display="flex" width="370px">
              <Typography fontSize={{ lg: 22, xs: 10 }}>
                Max % of total inventory allocated
              </Typography>
              <Typography>
                <InfoOutlinedIcon
                  sx={{
                    height: "28px",
                    marginTop: { lg: "2px", xs: "0px" },
                    marginLeft: "8px",
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
            <Box display="flex" width="400px" mx={7}>
              <Typography fontSize={{ lg: 22, xs: 10 }}>
                Weeks on Coverage
              </Typography>
              <Typography>
                <InfoOutlinedIcon
                  sx={{
                    height: "28px",
                    marginTop: { lg: "2px", xs: "1px" },
                    marginLeft: "8px",
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
        <Typography fontSize={28} mt="5px" color="#145A6C" mx="3px">
          Results
        </Typography>

        <Stack
          mt="-20px"
          direction="row"
          //   backgroundColor="red"
          height="120px"
          justifyContent="space-between"
          className="sa-stack"
        >
          <Box className="sa-box">
            <Typography className="sa-h1"> Expected Net Revenue</Typography>
            <Typography color="#008824" className="sa-h2">
              {" "}
              £7,749.00
            </Typography>
          </Box>
          <Box className="sa-box">
            <Typography className="sa-h1"> Expected OLA</Typography>
            <Typography color="#008824" className="sa-h2">
              {" "}
              94%
            </Typography>
          </Box>
          <Box className="sa-box">
            <Typography className="sa-h1"> Costs to serve</Typography>
            <Typography color="#DD0000" className="sa-h2">
              {" "}
              (£324.15)
            </Typography>
          </Box>
          <Box className="sa-boxbtn">
            Refesh <RefreshIcon className="btn-refresh" />
          </Box>
          <Box className="sa-boxbtn">
            Download this Scenario{" "}
            <DownloadForOfflineIcon className="btn-download" />
          </Box>
          <Box className="sa-boxbtn">
            Submit <DownloadIcon className="btn-submit" />
          </Box>
          <Box className="sa-boxbtn">
            Cancel <HighlightOffIcon className="btn-submit" />
          </Box>
        </Stack>
      </Grid>
    </div>
  );
};

export default Orderinvestigation2;
