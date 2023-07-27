import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Button, Grid, Typography } from "@mui/material";

import play from "../../images/play.png";
import "./AirwickElectrical2.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Linechart from "../../Linechart";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import Badge from "@mui/material/Badge";

import { useNavigate } from "react-router-dom";

import "./AirwickElectrical2.css";

const AirwickElectrical2 = () => {
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
    <div>
      <Topbar />
      <Grid container className="airwikElectric2">
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} p={2} className="airwikElectric2-body">
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
                <Typography fontSize={12}>Back</Typography>
              </Button>
            </Box>{" "}
            &#160;&#160;&#160;&#160;&#160;&#160;
            <Typography fontSize={14}>OOS Risk Dectection</Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px" }} />
            </Typography>
            <Typography fontSize={14}>Overview High-Risk SKUs</Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px" }} />
            </Typography>
            <Typography fontSize={14}>Order investigation</Typography>
          </Box>
          <Box mt="1px" mx="1px">
            <Typography fontSize={28} color="#415A6C">
              Order Investigation: Airwick Electrical Lemon
            </Typography>
          </Box>

          <Grid item xs={12} className="line-chart">
            <Linechart />
          </Grid>
          <Grid item xs={12} border="">
            <Box display="flex" textAlign="center" mt="5px">
              <Typography
                fontSize={16}
                sx={{
                  backgroundColor: "#D1F2C4",
                  padding: "4px 8px 2px 8px",
                  borderRadius: "5px 5px",
                }}
              >
                Airwick Electrical Lemon
              </Typography>{" "}
              <Box display="flex" textAlign="center" mt="6px">
                <Typography margin="auto" ml="7px" mt="2px">
                  <VisibilityOutlinedIcon
                    sx={{
                      height: "18px",
                    }}
                  />{" "}
                </Typography>
                <Typography textAlign="center" fontSize={15}>
                  01/01/23
                </Typography>{" "}
              </Box>
            </Box>
          </Grid>
          <Grid border="">
            <Typography fontSize={20} mt="5px" color="#145A6C">
              Scenario Results
            </Typography>

            <Grid container item xs={12} border="">
              <Grid item xs={2}>
                <Box className="snrio-rslt1">
                  <Typography className="scn-txt">Change in OLA</Typography>
                  <Box display="flex">
                    <Typography className="scn-text-g" fontSize={20}>
                      +2%
                    </Typography>
                    <Box display="flex" className="scn-text-g" mt={1}>
                      <ArrowDropUpRoundedIcon />
                      <Typography fontSize={14} mx="-4px">
                        93%
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box className="snrio-rslt2" mx={{ lg: "-30px", xs: "10px" }}>
                  <Typography className="scn-txt">
                    Change in Net Revenue
                  </Typography>
                  <Box display="flex">
                    <Typography className="scn-text-g" fontSize={20}>
                      +£2k
                    </Typography>
                    <Box display="flex" className="scn-text-g" mt={1}>
                      <ArrowDropUpRoundedIcon />
                      <Typography fontSize={14} mx="-4px">
                        £12k
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box className="snrio-rslt2" mx={{ lg: "-10px", xs: "70px" }}>
                  <Typography className="scn-txt">Change in Costs</Typography>
                  <Box display="flex">
                    <Typography className="scn-text-up" fontSize={20}>
                      (+£800)
                    </Typography>
                    <Box display="flex" className="scn-text-up" mt={1}>
                      <ArrowDropDownRoundedIcon />
                      <Typography fontSize={14} mx="-4px">
                        (£1.5k)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box className="snrio-rslt2" mx={{ lg: "15px", xs: "130px" }}>
                  <Typography className="scn-txt">Change in Profit</Typography>
                  <Box display="flex">
                    <Typography className="scn-text-g" fontSize={20}>
                      +£1.2k
                    </Typography>
                    <Box display="flex" className="scn-text-g" mt={1}>
                      <ArrowDropUpRoundedIcon />
                      <Typography fontSize={14} mx="-4px">
                        £10.5
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Typography fontSize={20} color="#145A6C" sx={{ marginTop: "10px" }}>
            Constraints (Optional)
          </Typography>

          <Grid container spacing={1} border="" mt="5px">
            <Grid
              container
              item
              xs={10}
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
                <Box
                  display="flex"
                  border="1px solid #E7E9EE"
                  borderRadius="5px 5px"
                  width="75px"
                  height="35px"
                  justifyContent="space-around"
                  textAlign="center"
                  marginTop={{ lg: "1%", xs: "0px" }}
                  mx={{ lg: "5px", xs: "1px" }}
                >
                  <Box margin="auto">
                    <Typography fontSize={20} color="#008824">
                      10%
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
              </Grid>
              <Box border="1px solid #E5EBEF" height="65px" ml={4}></Box>

              <Grid item xs={4} border="" ml={2}>
                <Box display="flex" width="200px" mx={7}>
                  <Typography fontSize={{ lg: 13, xs: 10 }}>
                    Weeks on Coverage
                  </Typography>
                  <Typography>
                    <InfoOutlinedIcon
                      sx={{
                        height: "17px",
                        marginTop: { lg: "2px", xs: "1px" },
                      }}
                    />
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  // border="1px solid red"
                  width="240px"
                  mx="10px"
                  marginTop="1%"
                >
                  <Box display="flex">
                    <Typography margin="auto" marginRight="3px">
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
                  <Box display="flex">
                    <Typography margin="auto" marginRight="3px">
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
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Box className="btn-scenario" mt="46px">
                <Typography
                  fontSize={{ lg: 12, xs: "8px" }}
                  onClick={handleClick}
                >
                  GENERATE SCENARIO{" "}
                </Typography>{" "}
                <PlayArrowIcon sx={{ height: "20px" }} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AirwickElectrical2;
