import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Grid, Link, Typography, Paper, Card } from "@mui/material";
import Error from "../../images/error.png";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import "./Casousel.css";
import { useSelector, useDispatch } from "react-redux";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import { useNavigate } from "react-router-dom";
import {
  fetchbusinessempty,
  fetchlocationempty,
  updateapplyfilterserror,
  updateloader,
  fetchoverviewhighriskdata,
  updateexporttabledata,
  fetchtaburl,
} from "../../store/actions/sidebarActions";

const CarouselExample = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.sidebar.alerts);
  const [selectedalert, setselectedalert] = useState(false);
  const business = useSelector((state) => state.sidebar.business);
  const location = useSelector((state) => state.sidebar.location);
  const apply = useSelector((state) => state.sidebar.apply);
  const handleOOSRishDetection = () => {
    if (!business) {
      dispatch(fetchbusinessempty(true));
    }
    if (!location) {
      dispatch(fetchlocationempty(true));
    }
    if (!business || !location) {
      return;
    }
    if (!apply) {
      dispatch(updateapplyfilterserror(true));
      return;
    }

    setselectedalert(true);
    fetchData();
  };
  const fetchData = async () => {
    dispatch(updateloader(true));
    var data = { customer: 0 };
    try {
      const url = "http://localhost:5000/getoverview";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        dispatch(fetchoverviewhighriskdata(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
        navigate("/overviewhighrisk");
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleIrregularPO = () => {
    if (!business) {
      dispatch(fetchbusinessempty(true));
    }
    if (!location) {
      dispatch(fetchlocationempty(true));
    }
    if (!business || !location) {
      return;
    }
    if (!apply) {
      dispatch(updateapplyfilterserror(true));
      return;
    }

    setselectedalert(true);
    // navigate("/irregular");
  };

  const maxRecordsPerPage = 4;
  const papers = [];
  for (let i = 0; i < data.length; i += maxRecordsPerPage) {
    const paperData = data.slice(i, i + maxRecordsPerPage);
    papers.push(
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          backgroundColor: "#E7E9EE",
          boxShadow: "none",
          // border: "1px solid red",
          marginTop: "-15px",
        }}
        key={i}
      >
        <Grid container spacing={2} mt="0px" border="">
          {paperData.map((item, index) => (
            <Grid
              item
              xs={3}
              sx={{ cursor: "pointer" }}
              onClick={
                item.Title.includes("Irregular PO")
                  ? handleIrregularPO
                  : handleOOSRishDetection
              }
            >
              <Card
                className="status-card"
                sx={{ height: "170px", border: "1px solid #fff" }}
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
                      {item.Title}
                    </Typography>
                  </Box>
                </Box>
                <hr />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginInline: "8px",
                    marginBottom: "5px",
                  }}
                >
                  <Box>
                    <Typography color="#415A6C" fontSize="12px">
                      {item.Title.includes("Irregular PO")
                        ? "PO Number"
                        : "OOS Risk Detected"}
                    </Typography>
                    {item.DATA.map((res) => (
                      <Typography fontSize="12px" lineHeight="16px">
                        {res.Name}
                      </Typography>
                    ))}
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      color="#415A6C"
                      fontWeight={500}
                      fontSize="12px"
                    >
                      {item.Title.includes("Irregular PO")
                        ? "PO Date"
                        : "Reckitt WoC"}
                    </Typography>
                    {item.DATA.map((res) => (
                      <Typography
                        color="#F08C2A"
                        fontWeight={500}
                        fontSize={12}
                        // lineHeight="16px"
                        textAlign="center"
                      >
                        {res.Value}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    );
  }

  return (
    <div>
      <div className="status" style={{ margin: "13px 0px -3px 0px" }}>
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
      {papers.length > 0 && (
        <Carousel interval={50000} className="carouselcls">
          {papers.map((paper, index) => (
            <div key={index}>{paper}</div>
          ))}
        </Carousel>
      )}
      {papers.length == 0 && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={1}
          color="red"
        >
          <ReportProblemOutlinedIcon />
          <Typography fontSize="22px">No Alerts Found</Typography>
        </Box>
      )}
    </div>
  );
};

export default CarouselExample;
