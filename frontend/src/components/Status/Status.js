import React from "react";

import { Box, Grid, Link, Typography } from "@mui/material";

// import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Rightarrow from "../../images/Rightarrow.png";

import Error from "../../images/error.png";

import "./Status.css";

const Status = ({ filterStatus }) => {
  const handleFilterStatus = () => {
    filterStatus(true);
  };

  return (
    <div>
      <div className="status">
        <div>
          <Typography fontSize={{ lg: 28, xs: 24, xl: 38 }} color="#415A6C">
            Current Status / Alert Section
          </Typography>
        </div>
        <div className="btn-alert">
          &#160;&#160;
          <p>See all alerts</p> &#160;&#160;
          <img src={Rightarrow} alt="alerts" className="alt-icon" />
          &#160;
        </div>
      </div>

      <Grid container spacing={2} mt="-20px" border="">
        <Grid
          item
          xs={4}
          // m={1}
          onClick={handleFilterStatus}
          sx={{ cursor: "pointer" }}
        >
          <Box
            sx={{
              borderRadius: "5px 5px ",
              backgroundColor: "#fff",
              boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
              height: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <img
                  src={Error}
                  alt="error"
                  className="error-icon"
                  style={{ marginTop: "8px" }}
                />{" "}
              </Box>
              <Box m={1}>
                <Typography
                  fontSize={{ lg: 18, xs: 13, xl: 26 }}
                  // fontWeight={{ xl: 200 }}
                  lineHeight={{ xl: 1 }}
                >
                  OOS Risk Detection on Airwick
                </Typography>
                <Typography fontSize={{ lg: 18, xs: 13, xl: 26 }}>
                  {" "}
                  UK SKUs.
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "#7E919F",
                      fontSize: { xs: "14px", lg: "14px", xl: 20 },
                    }}
                  >
                    {" "}
                    Use cases
                  </Link>
                </Typography>
              </Box>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginInline: "11px",
                marginBottom: "5px",
              }}
              // marginBottom={{lg:1,xs:-1}}
            >
              <Box>
                <Typography
                  color="#415A6C"
                  fontWeight={500}
                  fontSize={{ xs: 13, lg: "12px", xl: "20px" }}
                >
                  OOS Risk Dectected
                </Typography>
                <Typography fontSize={{ lg: 14, xs: 11, xl: 20 }}>
                  Airwick Electrical Lemon
                </Typography>
                <Typography
                  fontSize={{ lg: 14, xs: 11, xl: 20 }}
                  lineHeight={{ lg: "16px", xs: "16px" }}
                >
                  Airwick Electrical Lavender
                </Typography>
                <Typography fontSize={{ lg: 14, xs: 11, xl: 20 }}>
                  Airwick Aersol Floral
                </Typography>
              </Box>
              <Box>
                {" "}
                <Typography
                  color="#415A6C"
                  fontWeight={500}
                  fontSize={{ xs: 12, lg: 12, xl: 20 }}
                >
                  Expected OLA
                </Typography>
                <Typography
                  sx={{ marginBlock: "2px" }}
                  color="#F08C2A"
                  fontWeight={500}
                  fontSize={{ xs: 12, lg: 12, xl: 18 }}
                >
                  84%
                </Typography>
                <Typography
                  color="#F08C2A"
                  fontWeight={500}
                  fontSize={{ xs: 12, lg: 12, xl: 18 }}
                  lineHeight={{ lg: "16px", xs: "12px" }}
                >
                  86%
                </Typography>
                <Typography
                  sx={{ marginBlock: "2px" }}
                  color="#F08C2A"
                  fontWeight={500}
                  fontSize={{ xs: 12, lg: 12, xl: 18 }}
                >
                  87%
                </Typography>
              </Box>
            </Box>
          </Box>{" "}
        </Grid>
        <Grid item xs={4} sx={{ cursor: "pointer" }}>
          <Box
            sx={{
              borderRadius: "5px 5px ",
              backgroundColor: "#fff",
              boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
              height: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <img
                  src={Error}
                  alt="error"
                  className="error-icon"
                  style={{ marginTop: "8px" }}
                />{" "}
              </Box>
              <Box m={1}>
                <Typography
                  fontSize={{ lg: 18, xs: 13, xl: 26 }}
                  lineHeight={{ xl: 1 }}
                >
                  Vanish SKUs identified for
                </Typography>
                <Typography fontSize={{ lg: 18, xs: 13, xl: 26 }}>
                  promotion prioritisation
                </Typography>
              </Box>
            </Box>
            <hr />
            <Box sx={{ marginInline: "20px", color: "#415A6C" }}>
              <Typography
                fontSize={{ lg: 16, xs: 14, xl: 22 }}
                lineHeight={{ lg: "20px", xs: "17px", xl: "26px" }}
              >
                Some SKUs have opportunity for promotion priotisation.{" "}
              </Typography>
            </Box>
          </Box>{" "}
        </Grid>
        <Grid item xs={4} sx={{ cursor: "pointer" }}>
          <Box
            sx={{
              borderRadius: "5px 5px ",
              backgroundColor: "#fff",
              boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
              height: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <img
                  src={Error}
                  alt="error"
                  className="error-icon"
                  style={{ marginTop: "8px" }}
                />{" "}
              </Box>
              <Box m={1}>
                <Typography
                  fontSize={{ lg: 18, xs: 13, xl: 26 }}
                  lineHeight={{ xl: 1 }}
                >
                  OOS Risk Detected on Finish
                </Typography>
                <Typography fontSize={{ lg: 18, xs: 13, xl: 26 }}>
                  UK SKUs{" "}
                </Typography>
              </Box>
            </Box>
            <hr />
            <Box sx={{ marginInline: "20px", color: "#415A6C" }}>
              <Typography
                fontSize={{ lg: 16, xs: 13, xl: 22 }}
                lineHeight={{ lg: "20px", xs: "17px", xl: "26px" }}
              >
                Some SKUs require actions due to OOS risk, press to inspect.{" "}
              </Typography>
            </Box>
          </Box>{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default Status;
