import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../SidebarNew/Sidebar";
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
  const [weeksOnConvMax, setweeksOnConvMax] = useState(0);
  const [weeksOnConvMin, setweeksOnConvMin] = useState(0);

  const handleweeksOnCovUpMax = () => {
    setweeksOnConvMax(weeksOnConvMax + 1);
  };

  const handleweeksOnCovUpMin = () => {
    setweeksOnConvMin(weeksOnConvMin + 1);
  };

  const handleweeksOnCovDownMax = () => {
    setweeksOnConvMax(weeksOnConvMax - 1);
  };

  const handleweeksOnCovDownMin = () => {
    setweeksOnConvMin(weeksOnConvMin - 1);
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
            <Box mt={{ xs: "1px", lg: "1px", xl: "6px" }}>
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
                <Typography fontSize={{ xs: 12, lg: 12, xl: 18 }}>
                  Back
                </Typography>
              </Button>
            </Box>{" "}
            &#160;&#160;&#160;&#160;&#160;&#160;
            <Typography fontSize={{ xs: 14, lg: 14, xl: 20 }}>
              OOS Risk Dectection
            </Typography>
            <Typography>
              <ChevronRightIcon
                sx={{ height: { xs: "20px", lg: "20px", xl: "30px" } }}
              />
            </Typography>
            <Typography fontSize={{ xs: 14, lg: 14, xl: 20 }}>
              Overview High-Risk SKUs
            </Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px" }} />
            </Typography>
            <Typography fontSize={{ xs: 14, lg: 14, xl: 20 }}>
              Order investigation
            </Typography>
          </Box>
          <Box mt="1px" mx="1px">
            <Typography fontSize={28} color="#415A6C">
              Order Investigation: Airwick Electrical Lemon
            </Typography>
          </Box>

          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "5px 5px",
                marginBlock: "5px",
                // height: "200px",
              }}
            >
              <Linechart className="line-chat" />
            </Box>
          </Grid>
          <Grid item xs={12} border="">
            <Box
              display="flex"
              textAlign="center"
              mt={{ xs: "5px", lg: "5px", xl: "20px" }}
            >
              <Typography
                fontSize={{ xs: 16, lg: 16, xl: 22 }}
                sx={{
                  backgroundColor: "#D1F2C4",
                  padding: "4px 8px 2px 8px",
                  borderRadius: "5px 5px",
                }}
              >
                Airwick Electrical Lemon
              </Typography>{" "}
              <Box display="flex" textAlign="center" mt="6px">
                <Typography
                  margin="auto"
                  ml={{ xs: "7px", lg: "7px", xl: "12px" }}
                  mt={{ xs: "2px", lg: "2px", xl: "4px" }}
                  mr={{ xs: 0, lg: 0, xl: "6px" }}
                >
                  <VisibilityOutlinedIcon
                    sx={{
                      height: { xs: "18px", lg: "18px", xl: "24px" },
                    }}
                  />{" "}
                </Typography>
                <Typography
                  textAlign="center"
                  fontSize={{ xs: 15, lg: 15, xl: 22 }}
                >
                  01/01/23
                </Typography>{" "}
              </Box>
            </Box>
          </Grid>
          <Grid border="">
            <Typography
              fontSize={{ xs: 20, lg: 20, xl: 28 }}
              mt="5px"
              color="#145A6C"
            >
              Scenario Results
            </Typography>

            <Grid container item xs={12} border="">
              <Grid item xs={2}>
                <Box className="snrio-rslt1">
                  <Typography
                    className="scn-txt"
                    fontSize={{ xs: 14, lg: 14, xl: 20 }}
                    mt={{ xs: "5px", lg: "5px", xl: "5px" }}
                  >
                    Change in OLA
                  </Typography>
                  <Box display="flex">
                    <Typography
                      className="scn-text-g"
                      fontSize={{ xs: 20, lg: 20, xl: 25 }}
                    >
                      +2%
                    </Typography>
                    <Box display="flex" className="scn-text-g" mt={1}>
                      <ArrowDropUpRoundedIcon
                        sx={{
                          marginLeft: { xs: 0, lg: 0, xl: "7px" },
                        }}
                      />
                      <Typography
                        fontSize={{ xs: 14, lg: 14, xl: 18 }}
                        mx="-4px"
                      >
                        93%
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box className="snrio-rslt2" mx={{ lg: "-30px", xs: "10px" }}>
                  <Typography
                    className="scn-txt"
                    fontSize={{ xs: 14, lg: 14, xl: 20 }}
                    mt={{ xs: "5px", lg: "5px", xl: "5px" }}
                  >
                    Change in Net Revenue
                  </Typography>
                  <Box display="flex">
                    <Typography
                      className="scn-text-g"
                      fontSize={{ xs: 20, lg: 20, xl: 25 }}
                    >
                      +£2k
                    </Typography>
                    <Box display="flex" className="scn-text-g" mt={1}>
                      <ArrowDropUpRoundedIcon />
                      <Typography
                        fontSize={{ xs: 14, lg: 14, xl: 18 }}
                        mx="-4px"
                      >
                        £12k
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box
                  className="snrio-rslt3"
                  mx={{ lg: "-10px", xs: "70px", xl: "15px" }}
                >
                  <Typography
                    className="scn-txt"
                    fontSize={{ xs: 14, lg: 14, xl: 20 }}
                    mt={{ xs: "5px", lg: "5px", xl: "5px" }}
                  >
                    Change in Costs
                  </Typography>
                  <Box display="flex">
                    <Typography
                      className="scn-text-up"
                      fontSize={{ xs: 20, lg: 20, xl: 25 }}
                    >
                      (+£800)
                    </Typography>
                    <Box display="flex" className="scn-text-up" mt={1}>
                      <ArrowDropDownRoundedIcon />
                      <Typography
                        fontSize={{ xs: 14, lg: 14, xl: 18 }}
                        mx="-4px"
                      >
                        (£1.5k)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box className="snrio-rslt4" mx={{ lg: "15px", xs: "130px" }}>
                  <Typography
                    className="scn-txt"
                    fontSize={{ xs: 14, lg: 14, xl: "20px" }}
                    mt={{ xs: "5px", lg: "5px", xl: "5px" }}
                  >
                    Change in Profit
                  </Typography>
                  <Box display="flex">
                    <Typography
                      className="scn-text-g"
                      fontSize={{ xs: 20, lg: 20, xl: 25 }}
                    >
                      +£1.2k
                    </Typography>
                    <Box display="flex" className="scn-text-g" mt={1}>
                      <ArrowDropUpRoundedIcon />
                      <Typography
                        fontSize={{ xs: 14, lg: 14, xl: 18 }}
                        mx="-4px"
                      >
                        £10.5
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Typography
            fontSize={{ xs: 20, lg: 20, xl: 28 }}
            color="#145A6C"
            sx={{ marginTop: "10px" }}
          >
            Constraints (Optional)
          </Typography>

          <Grid container spacing={1} mt="5px">
            <Grid
              container
              item
              xs={10}
              p={1}
              // backgroundColor="#fff"
              // borderRadius="5px 5px"
              // border="1px solid"
              // width={{ xl: "75%" }}
            >
              <Box
                display="flex"
                backgroundColor="#fff"
                borderRadius="5px 5px"
                // border="1px solid"
                // width={{ xl: "75%" }}
                p={{ xs: "4px", lg: "5px", xl: 2 }}
                height={{ xs: "75px", lg: "75px", xl: "80px" }}
              >
                <Grid item xs={3} border="">
                  <Box
                    // border="1px solid"
                    display="flex"
                    width={{ xs: "160px", lg: "240px", xl: "320px" }}
                    ml={{ lg: "5px", xs: "1px" }}
                  >
                    <Typography fontSize={{ xs: 12, lg: 13, xl: 18 }}>
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
                  <Box
                    // border="1px solid"
                    display="flex"
                    width={{ xs: "190px", lg: "240px", xl: "320px" }}
                  >
                    <Typography fontSize={{ lg: 13, xs: 12, xl: 18 }}>
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
                  <Box
                    // border="1px solid"
                    display="flex"
                    width={{ xs: "140px", lg: "200px", xl: "260px" }}
                    mx={{ xs: 6 }}
                  >
                    <Typography fontSize={{ lg: 13, xs: 12, xl: 18 }}>
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
                    // mx="10px"
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
                            {weeksOnConvMin}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography mt="-2px" color="#7E919F">
                            <ArrowDropUpRoundedIcon
                              onClick={handleweeksOnCovUpMin}
                              sx={{ cursor: "pointer" }}
                            />
                          </Typography>
                          <Typography mt="-19px" color="#7E919F">
                            <ArrowDropDownRoundedIcon
                              onClick={handleweeksOnCovDownMin}
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
                            {weeksOnConvMax}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography mt="-2px" color="#7E919F">
                            <ArrowDropUpRoundedIcon
                              onClick={handleweeksOnCovUpMax}
                              sx={{ cursor: "pointer" }}
                            />
                          </Typography>
                          <Typography mt="-19px" color="#7E919F">
                            <ArrowDropDownRoundedIcon
                              onClick={handleweeksOnCovDownMax}
                              sx={{ cursor: "pointer" }}
                            />
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box
                className="btn-scenario"
                mt={{ xs: "52px", lg: "55px", xl: "70px" }}
              >
                <Typography
                  onClick={handleClick}
                  fontSize={{ lg: 12, xs: "8px", xl: 17 }}
                  mt={{ xs: 0, lg: 0, xl: "5px" }}
                >
                  GENERATE SCENARIO{" "}
                </Typography>{" "}
                <PlayArrowIcon
                  sx={{ height: "20px", marginLeft: { xl: "-10px" } }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AirwickElectrical2;
