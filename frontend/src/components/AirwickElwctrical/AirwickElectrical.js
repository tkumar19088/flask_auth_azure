import React, { useEffect } from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Button, Grid, Typography } from "@mui/material";

import play from "../../images/play.png";
import "./AirwickElectrical.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Linechart from "../../Linechart";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const AirwickElectrical = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/airwickelectrical2");
  };
  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    scroll.scrollToTop(); // Scrolls to the top of the page when the component mounts
  }, []);

  return (
    <div>
      <Topbar />
      <Grid container className="airwikElectric">
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={10}
          p={2}
          sx={{
            backgroundColor: "#F5F6F8",
          }}
        >
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
          <Box mt="20px" mx="1px">
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
            <Grid container>
              <Grid item xs={10}></Grid>
              <Grid item xs={2}>
                <Box className="btn-scenario">
                  <Typography fontSize={12} onClick={handleClick}>
                    GENERATE SCENARIO{" "}
                  </Typography>{" "}
                  <PlayArrowIcon sx={{ height: "20px" }} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AirwickElectrical;
