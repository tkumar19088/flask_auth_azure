import React, { useEffect } from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../SidebarNew/Sidebar";
import { Box, Button, Grid, Typography } from "@mui/material";

import play from "../../images/play.png";
import "./AirwickElectrical.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Linechart from "../../Linechart";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { useNavigate } from "react-router-dom";

const AirwickElectrical = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/airwickelectrical2");
  };
  const handleBack = () => {
    navigate(-1);
  };

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
                <Typography
                  fontSize={{ xs: 12, lg: 12, xl: 18 }}
                  onClick={handleBack}
                >
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
              <ChevronRightIcon
                sx={{ height: { xs: "20px", lg: "20px", xl: "30px" } }}
              />
            </Typography>
            <Typography fontSize={{ xs: 14, lg: 14, xl: 20 }}>
              Order investigation
            </Typography>
          </Box>
          <Box mt="20px" mx="1px">
            <Typography fontSize={{ xs: 28, lg: 28, xl: 36 }} color="#415A6C">
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
            <Grid container justifyContent="end">
              <Grid item xs={2}>
                <Box className="btn-scenario">
                  <Typography
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
      </Grid>
    </div>
  );
};

export default AirwickElectrical;
