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
import Tooltip from "@mui/material/Tooltip";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

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

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div style={{ marginTop: "5px" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        // className="optimistarion-box"
        my={1}
      >
        <Box display="flex" className="optimistarion-box">
          <Typography fontSize={18} color="#415A6C" className="radiobtn-title">
            Optimisation Target :
          </Typography>

          <label>
            <input
              type="radio"
              value="red"
              checked={selectedOption === "red"}
              onChange={handleOptionChange}
            />
            Minimise ( | Current WoC - Target WoC | )
          </label>
          <label>
            <input
              type="radio"
              value="green"
              checked={selectedOption === "green"}
              onChange={handleOptionChange}
            />
            Maximise revenue
          </label>
        </Box>
        <Box display="flex">
          <Box className="sg-title">
            Scenario Generation: Airwick Electrical Lemon 112345
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
            <Typography fontSize={14}>01/01/23 05:03:20</Typography>
          </Box>
        </Box>
      </Stack>
      <Typography fontSize={24} color="#145A6C" mx="3px">
        Constraints (Optional)
      </Typography>
      <Grid container spacing={1} mt="5px" mx={{ lg: "1px", xs: "1px" }}>
        <Stack direction="row" className="constains-innerbox">
          <Grid item xs={3} border="">
            <Box
              display="flex"
              ml={{ lg: "5px", xs: "1px" }}
              sx={{ color: "#415A6C" }}
            >
              <Typography className="constains-h1">
                % Deviation from initial allocation{" "}
              </Typography>{" "}
              <Typography>
                <InfoOutlinedIcon
                  sx={{
                    height: "22px",
                    marginTop: { lg: "0px", xs: "1px" },
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
          <Box className="vertical-line"></Box>
          <Grid item xs={3} border="" ml={2}>
            <Box display="flex" width="370px" sx={{ color: "#415A6C" }}>
              <Typography className="constains-h1">
                Minimum expected sevice level
              </Typography>
              <Typography>
                <InfoOutlinedIcon
                  sx={{
                    height: "22px",
                    marginTop: { lg: "0px", xs: "0px" },
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
          <Box className="vertical-line2 "></Box>

          <Grid item xs={4} border="" ml={2}>
            <Box
              display="flex"
              width="400px"
              mx={7}
              sx={{ color: "#415A6C" }}
              marginLeft={0}
            >
              <Typography className="constains-h1">
                Deviation from target WOC
              </Typography>
              <Typography>
                <InfoOutlinedIcon
                  sx={{
                    height: "22px",
                    marginTop: { lg: "0px", xs: "1px" },
                    marginLeft: "8px",
                  }}
                />
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
        </Stack>
      </Grid>
      <Grid mt="10px">
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
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ width: "450px" }}
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
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            sx={{ width: "320px" }}
          >
            <Tooltip
              title="Reallocate Suggested Supply"
              arrow
              placement="top-start"
              // ml={{ lg: "-19px" }}
            >
              <Box className="sa-boxbtn">
                Reallocate <RefreshIcon className="btn-refresh" />
              </Box>
            </Tooltip>
            <Tooltip
              title="Download this scenario"
              arrow
              placement="top-start"
              // ml={{ lg: "-19px" }}
            >
              <Box className="sa-boxbtn">
                Download
                <DownloadForOfflineIcon className="btn-download" />
              </Box>
            </Tooltip>
          </Box>
        </Stack>
      </Grid>
    </div>
  );
};

export default Orderinvestigation2;
<Typography
  fontSize={{ lg: 16, xs: 10 }}
  sx={{
    backgroundColor: "#D1F2C4",
    borderRadius: "5px 5px",
    width: { lg: "410px" },
  }}
>
  Scenario Generation: Airwick Electrical Lemon 112345
</Typography>;
