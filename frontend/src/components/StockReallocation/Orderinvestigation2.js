import React, { useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import UpdateIcon from '@mui/icons-material/Update';
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

const Orderinvestigation2 = () => {
  const navigate = useNavigate();

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
    <div>
      <Stack>
        <Box display="flex" className="sg-main">
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

      <Typography fontSize={24} color="#145A6C" mx="3px" mt="-3px">
        Constraints (Optional)
      </Typography>
      <Grid
        container
        spacing={1}
        mt="3px"
        mx={{ lg: "1px", xs: "1px" }}
        // border="1px solid red"
      >
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
      <Grid>
        <Typography fontSize={28} mt="1px" color="#145A6C" mx="3px">
          Results
        </Typography>

        <Stack
          mt="-30px"
          direction="row"
          //   backgroundColor="red"
          height="120px"
          justifyContent="space-between"
          className="sa-stack"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ width: "380px" }}
          >
            <Box className="sa-box">
              <Typography className="sa-h1">
                {" "}
                Average expected service level
              </Typography>
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
            sx={{ width: "500px" }}
          >
            <Tooltip
              title="Reallocate Suggested Supply"
              arrow
              placement="top-start"
              // ml={{ lg: "-19px" }}
            >
              <Box className="sa-boxbtn">
                Update results
                <UpdateIcon className="btn-refresh" />
              </Box>
            </Tooltip>
            <Tooltip
              title="Reallocate Suggested Supply"
              arrow
              placement="top-start"
              // ml={{ lg: "-19px" }}
            >
              <Box className="sa-boxbtn">
                Reset results
                <RefreshIcon className="btn-refresh" />
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
