import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Grid, Link, Typography, Paper } from "@mui/material";
import Error from "../../images/error.png";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const CarouselExample = () => {
  return (
    <div>
      <div className="status" style={{ margin: "3px 0px -3px 0px" }}>
        <div>
          <Typography my={1} fontSize={{ lg: 23, xs: 24 }} color="#415A6C">
            Current Status / Alerts Section
          </Typography>
        </div>
        <div className="btn-alert">
          &#160;&#160;
          <p style={{ fontWeight: "500" }}>See all alerts</p> &#160;&#160;
          <ChevronRightRoundedIcon className="seeAllIcon" />
          &#160;
        </div>
      </div>

      <Carousel interval={30000}>
        <Paper
          elevation={3}
          sx={{ padding: 2, backgroundColor: "#E7E9EE", boxShadow: "none" }}
        >
          <Grid
            container
            spacing={{ md: 2, lg: 3, xl: 5 }}
            mt="-20px"
            border=""
          >
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  borderRadius: "5px 5px ",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                  height: "100%",
                }}
              >
                <Box className="cs-cardsheader">
                  <Box>
                    <img
                      src={Error}
                      alt="error"
                      className="error-icon"
                      style={{ marginTop: "8px" }}
                    />{" "}
                  </Box>
                  <Box m={1}>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      OOS Risk Detection on Airwick
                    </Typography>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      {" "}
                      UK SKUs.
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
                    <Typography color="#415A6C" fontSize="14px">
                      OOS Risk Dectected
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      Airwick Electrical Lemon
                    </Typography>
                    <Typography
                      fontSize={{ lg: 14, xs: 12 }}
                      lineHeight={{ lg: "16px", xs: "16px" }}
                    >
                      Airwick Electrical Lavender
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      Airwick Aersol Floral
                    </Typography>
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      color="#415A6C"
                      fontWeight={500}
                      fontSize="14px"
                    >
                      Expected Service
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      textAlign="center"
                    >
                      84%
                    </Typography>
                    <Typography
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      lineHeight={{ lg: "16px", xs: "12px" }}
                      textAlign="center"
                    >
                      86%
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      textAlign="center"
                    >
                      87%
                    </Typography>
                  </Box>
                </Box>
              </Box>{" "}
            </Grid>
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  borderRadius: "5px 5px ",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                  height: "100%",
                }}
              >
                <Box className="cs-cardsheader">
                  <Box>
                    <img
                      src={Error}
                      alt="error"
                      className="error-icon"
                      style={{ marginTop: "8px" }}
                    />{" "}
                  </Box>
                  <Box m={1}>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      OOS Risk Detection on Gaviscon
                    </Typography>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      {" "}
                      UK SKUs.
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
                    <Typography color="#415A6C" fontSize="14px">
                      OOS Risk Dectected
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      Gaviscon double action
                    </Typography>
                    <Typography
                      fontSize={{ lg: 14, xs: 12 }}
                      lineHeight={{ lg: "16px", xs: "16px" }}
                    >
                      Gaviscon regular
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      Gaviscon advance{" "}
                    </Typography>
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      color="#415A6C"
                      fontWeight={500}
                      fontSize="14px"
                    >
                      Expected Service
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      textAlign="center"
                    >
                      84%
                    </Typography>
                    <Typography
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      lineHeight={{ lg: "16px", xs: "12px" }}
                      textAlign="center"
                    >
                      86%
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      textAlign="center"
                    >
                      87%
                    </Typography>
                  </Box>
                </Box>
              </Box>{" "}
            </Grid>
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  borderRadius: "5px 5px ",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                  height: "100%",
                }}
              >
                <Box className="cs-cardsheader">
                  <Box>
                    <img
                      src={Error}
                      alt="error"
                      className="error-icon"
                      style={{ marginTop: "8px" }}
                    />
                  </Box>
                  <Box m={1}>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      Irregular PO Dectected - Airwick
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
                >
                  <Box>
                    <Typography color="#415A6C" fontSize="14px">
                      PO Number
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      PO 1234
                    </Typography>
                    <Typography
                      fontSize={{ lg: 14, xs: 12 }}
                      lineHeight={{ lg: "16px", xs: "16px" }}
                    >
                      PO 1234
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      PO 1234
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      color="#415A6C"
                      fontWeight={500}
                      fontSize="14px"
                    >
                      PO Date
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                    >
                      31-08-2023
                    </Typography>
                    <Typography
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      lineHeight={{ lg: "16px", xs: "12px" }}
                    >
                      31-08-2023
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                    >
                      31-08-2023
                    </Typography>
                  </Box>
                </Box>
              </Box>{" "}
            </Grid>
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  borderRadius: "5px 5px ",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                  height: "100%",
                }}
              >
                <Box className="cs-cardsheader">
                  <Box>
                    <img
                      src={Error}
                      alt="error"
                      className="error-icon"
                      style={{ marginTop: "8px" }}
                    />
                  </Box>
                  <Box m={1}>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      Irregular PO Dectected - Gaviscon
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
                >
                  <Box>
                    <Typography color="#415A6C" fontSize="14px">
                      PO Number
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      PO 1234
                    </Typography>
                    <Typography
                      fontSize={{ lg: 14, xs: 12 }}
                      lineHeight={{ lg: "16px", xs: "16px" }}
                    >
                      PO 1234
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      PO 1234
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      color="#415A6C"
                      fontWeight={500}
                      fontSize="14px"
                    >
                      PO Date
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                    >
                      31-08-2023
                    </Typography>
                    <Typography
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      lineHeight={{ lg: "16px", xs: "12px" }}
                    >
                      31-08-2023
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                    >
                      31-08-2023
                    </Typography>
                  </Box>
                </Box>
              </Box>{" "}
            </Grid>
          </Grid>
        </Paper>
        <Paper
          elevation={3}
          sx={{ padding: 2, backgroundColor: "#E7E9EE", boxShadow: "none" }}
        >
          <Grid
            container
            spacing={{ md: 2, lg: 3, xl: 5 }}
            mt="-20px"
            border=""
          >
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  borderRadius: "5px 5px ",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                  height: "100%",
                }}
              >
                <Box className="cs-cardsheader">
                  <Box>
                    <img
                      src={Error}
                      alt="error"
                      className="error-icon"
                      style={{ marginTop: "8px" }}
                    />{" "}
                  </Box>
                  <Box m={1}>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      OOS Risk Detection on Airwick
                    </Typography>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      {" "}
                      UK SKUs.
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
                    <Typography color="#415A6C" fontSize="14px">
                      OOS Risk Dectected
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      Airwick Electrical Lemon
                    </Typography>
                    <Typography
                      fontSize={{ lg: 14, xs: 12 }}
                      lineHeight={{ lg: "16px", xs: "16px" }}
                    >
                      Airwick Electrical Lavender
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      Airwick Aersol Floral
                    </Typography>
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      color="#415A6C"
                      fontWeight={500}
                      fontSize="14px"
                    >
                      Expected Service
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      textAlign="center"
                    >
                      84%
                    </Typography>
                    <Typography
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      lineHeight={{ lg: "16px", xs: "12px" }}
                      textAlign="center"
                    >
                      86%
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      textAlign="center"
                    >
                      87%
                    </Typography>
                  </Box>
                </Box>
              </Box>{" "}
            </Grid>
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  borderRadius: "5px 5px ",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                  height: "100%",
                }}
              >
                <Box className="cs-cardsheader">
                  <Box>
                    <img
                      src={Error}
                      alt="error"
                      className="error-icon"
                      style={{ marginTop: "8px" }}
                    />{" "}
                  </Box>
                  <Box m={1}>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      OOS Risk Detection on Gaviscon
                    </Typography>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      {" "}
                      UK SKUs.
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
                    <Typography color="#415A6C" fontSize="14px">
                      OOS Risk Dectected
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      Gaviscon double action
                    </Typography>
                    <Typography
                      fontSize={{ lg: 14, xs: 12 }}
                      lineHeight={{ lg: "16px", xs: "16px" }}
                    >
                      Gaviscon regular
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      Gaviscon advance{" "}
                    </Typography>
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      color="#415A6C"
                      fontWeight={500}
                      fontSize="14px"
                    >
                      Expected Service
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      textAlign="center"
                    >
                      84%
                    </Typography>
                    <Typography
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      lineHeight={{ lg: "16px", xs: "12px" }}
                      textAlign="center"
                    >
                      86%
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      textAlign="center"
                    >
                      87%
                    </Typography>
                  </Box>
                </Box>
              </Box>{" "}
            </Grid>
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  borderRadius: "5px 5px ",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                  height: "100%",
                }}
              >
                <Box className="cs-cardsheader">
                  <Box>
                    <img
                      src={Error}
                      alt="error"
                      className="error-icon"
                      style={{ marginTop: "8px" }}
                    />
                  </Box>
                  <Box m={1}>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      Irregular PO Dectected - Airwick
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
                >
                  <Box>
                    <Typography color="#415A6C" fontSize="14px">
                      PO Number
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      PO 1234
                    </Typography>
                    <Typography
                      fontSize={{ lg: 14, xs: 12 }}
                      lineHeight={{ lg: "16px", xs: "16px" }}
                    >
                      PO 1234
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      PO 1234
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      color="#415A6C"
                      fontWeight={500}
                      fontSize="14px"
                    >
                      PO Date
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                    >
                      31-08-2023
                    </Typography>
                    <Typography
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      lineHeight={{ lg: "16px", xs: "12px" }}
                    >
                      31-08-2023
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                    >
                      31-08-2023
                    </Typography>
                  </Box>
                </Box>
              </Box>{" "}
            </Grid>
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  borderRadius: "5px 5px ",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                  height: "100%",
                }}
              >
                <Box className="cs-cardsheader">
                  <Box>
                    <img
                      src={Error}
                      alt="error"
                      className="error-icon"
                      style={{ marginTop: "8px" }}
                    />
                  </Box>
                  <Box m={1}>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      Irregular PO Dectected - Gaviscon
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
                >
                  <Box>
                    <Typography color="#415A6C" fontSize="14px">
                      PO Number
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      PO 1234
                    </Typography>
                    <Typography
                      fontSize={{ lg: 14, xs: 12 }}
                      lineHeight={{ lg: "16px", xs: "16px" }}
                    >
                      PO 1234
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      PO 1234
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      color="#415A6C"
                      fontWeight={500}
                      fontSize="14px"
                    >
                      PO Date
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                    >
                      31-08-2023
                    </Typography>
                    <Typography
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      lineHeight={{ lg: "16px", xs: "12px" }}
                    >
                      31-08-2023
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                    >
                      31-08-2023
                    </Typography>
                  </Box>
                </Box>
              </Box>{" "}
            </Grid>
          </Grid>
        </Paper>
        <Paper
          elevation={3}
          sx={{ padding: 2, backgroundColor: "#E7E9EE", boxShadow: "none" }}
        >
          <Grid
            container
            spacing={{ md: 2, lg: 3, xl: 5 }}
            mt="-20px"
            border=""
          >
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  borderRadius: "5px 5px ",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                  height: "100%",
                }}
              >
                <Box className="cs-cardsheader">
                  <Box>
                    <img
                      src={Error}
                      alt="error"
                      className="error-icon"
                      style={{ marginTop: "8px" }}
                    />{" "}
                  </Box>
                  <Box m={1}>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      OOS Risk Detection on Airwick
                    </Typography>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      {" "}
                      UK SKUs.
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
                    <Typography color="#415A6C" fontSize="14px">
                      OOS Risk Dectected
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      Airwick Electrical Lemon
                    </Typography>
                    <Typography
                      fontSize={{ lg: 14, xs: 12 }}
                      lineHeight={{ lg: "16px", xs: "16px" }}
                    >
                      Airwick Electrical Lavender
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      Airwick Aersol Floral
                    </Typography>
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      color="#415A6C"
                      fontWeight={500}
                      fontSize="14px"
                    >
                      Expected Service
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      textAlign="center"
                    >
                      84%
                    </Typography>
                    <Typography
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      lineHeight={{ lg: "16px", xs: "12px" }}
                      textAlign="center"
                    >
                      86%
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      textAlign="center"
                    >
                      87%
                    </Typography>
                  </Box>
                </Box>
              </Box>{" "}
            </Grid>
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  borderRadius: "5px 5px ",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                  height: "100%",
                }}
              >
                <Box className="cs-cardsheader">
                  <Box>
                    <img
                      src={Error}
                      alt="error"
                      className="error-icon"
                      style={{ marginTop: "8px" }}
                    />{" "}
                  </Box>
                  <Box m={1}>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      OOS Risk Detection on Gaviscon
                    </Typography>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      {" "}
                      UK SKUs.
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
                    <Typography color="#415A6C" fontSize="14px">
                      OOS Risk Dectected
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      Gaviscon double action
                    </Typography>
                    <Typography
                      fontSize={{ lg: 14, xs: 12 }}
                      lineHeight={{ lg: "16px", xs: "16px" }}
                    >
                      Gaviscon regular
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      Gaviscon advance{" "}
                    </Typography>
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      color="#415A6C"
                      fontWeight={500}
                      fontSize="14px"
                    >
                      Expected Service
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      textAlign="center"
                    >
                      84%
                    </Typography>
                    <Typography
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      lineHeight={{ lg: "16px", xs: "12px" }}
                      textAlign="center"
                    >
                      86%
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      textAlign="center"
                    >
                      87%
                    </Typography>
                  </Box>
                </Box>
              </Box>{" "}
            </Grid>
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  borderRadius: "5px 5px ",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                  height: "100%",
                }}
              >
                <Box className="cs-cardsheader">
                  <Box>
                    <img
                      src={Error}
                      alt="error"
                      className="error-icon"
                      style={{ marginTop: "8px" }}
                    />
                  </Box>
                  <Box m={1}>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      Irregular PO Dectected - Airwick
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
                >
                  <Box>
                    <Typography color="#415A6C" fontSize="14px">
                      PO Number
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      PO 1234
                    </Typography>
                    <Typography
                      fontSize={{ lg: 14, xs: 12 }}
                      lineHeight={{ lg: "16px", xs: "16px" }}
                    >
                      PO 1234
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      PO 1234
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      color="#415A6C"
                      fontWeight={500}
                      fontSize="14px"
                    >
                      PO Date
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                    >
                      31-08-2023
                    </Typography>
                    <Typography
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      lineHeight={{ lg: "16px", xs: "12px" }}
                    >
                      31-08-2023
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                    >
                      31-08-2023
                    </Typography>
                  </Box>
                </Box>
              </Box>{" "}
            </Grid>
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  borderRadius: "5px 5px ",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                  height: "100%",
                }}
              >
                <Box className="cs-cardsheader">
                  <Box>
                    <img
                      src={Error}
                      alt="error"
                      className="error-icon"
                      style={{ marginTop: "8px" }}
                    />
                  </Box>
                  <Box m={1}>
                    <Typography fontSize={{ lg: 18, xs: 13 }}>
                      Irregular PO Dectected - Gaviscon
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
                >
                  <Box>
                    <Typography color="#415A6C" fontSize="14px">
                      PO Number
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      PO 1234
                    </Typography>
                    <Typography
                      fontSize={{ lg: 14, xs: 12 }}
                      lineHeight={{ lg: "16px", xs: "16px" }}
                    >
                      PO 1234
                    </Typography>
                    <Typography fontSize={{ lg: 14, xs: 12 }}>
                      PO 1234
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      color="#415A6C"
                      fontWeight={500}
                      fontSize="14px"
                    >
                      PO Date
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                    >
                      31-08-2023
                    </Typography>
                    <Typography
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                      lineHeight={{ lg: "16px", xs: "12px" }}
                    >
                      31-08-2023
                    </Typography>
                    <Typography
                      sx={{ marginBlock: "2px" }}
                      color="#F08C2A"
                      fontWeight={500}
                      fontSize={12}
                    >
                      31-08-2023
                    </Typography>
                  </Box>
                </Box>
              </Box>{" "}
            </Grid>
          </Grid>
        </Paper>
      </Carousel>
    </div>
  );
};

export default CarouselExample;
