import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Planning.css";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { useNavigate } from "react-router-dom";
import {
  fetchoverviewhighriskdata,
  updateloader,
} from "../../store/actions/sidebarActions";
import { useDispatch } from "react-redux";
import Badge from "@mui/material/Badge";

const Planning = ({ filterStatus }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [oosriskselectedBG, setoosriskselectedBG] = useState(false);
  const [irregularselectedBG, setirregularselectedBG] = useState(false);
  const handleOOSRisk = () => {
    filterStatus(true);
    setirregularselectedBG(false);
    setoosriskselectedBG(true);
    fetchData();
  };
  const fetchData = async () => {
    dispatch(updateloader(true));
    var data = { customer: 0 };
    try {
      const response = await fetch("http://localhost:5000/getoverview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchoverviewhighriskdata(json));
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
  const handleirregularpo = () => {
    filterStatus(true);
    setoosriskselectedBG(false);
    setirregularselectedBG(true);
  };
  const handleReallocation = () => {
    filterStatus(true);
    setoosriskselectedBG(false);
    setirregularselectedBG(false);
  };

  const handleSellinforecast = () => {
    navigate("/sellinforecast");
  };

  const handleSelloutforecast = () => {
    navigate("/selloutforecast");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Grid>
        <Grid container spacing={{ md: 2, lg: 2, xl: 5 }} item xs={12} mt={1}>
          <Grid item xs={4}>
            <Box className="pln-cards-header">
              <Typography color="#fff" className="plan-title">
                Forecast
              </Typography>
            </Box>
            <Box className="pln-card-bd" onClick={handleSellinforecast}>
              <Box className="pln-cards-cnt">
                <Typography
                  fontSize={{ lg: 14, xs: 12 }}
                  className="plan-minititile"
                >
                  Sell-In Forecast
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />
              </Box>
            </Box>
            <Box className="pln-card-bd" onClick={handleSelloutforecast}>
              <Box className="pln-cards-cnt">
                <Typography
                  fontSize={{ lg: 14, xs: 12 }}
                  className="plan-minititile"
                >
                  Sell-Out Forecast
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="pln-cards-header">
              <Typography color="#fff" className="plan-title">
                Monitor
              </Typography>
            </Box>{" "}
            <Box
              className="pln-card-bd"
              onClick={handleOOSRisk}
              style={{
                backgroundColor: oosriskselectedBG ? "#ff007e" : "#fff",
                color: oosriskselectedBG ? "#fff" : "black",
              }}
            >
              <Box className="pln-cards-cnt">
                <Typography
                  fontSize={{ lg: 14, xs: 12 }}
                  className="plan-minititile"
                >
                  OOS Risk Detection
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />
              </Box>
            </Box>
            <Box
              className="pln-card-bd"
              onClick={handleirregularpo}
              style={{
                backgroundColor: irregularselectedBG ? "#ff007e" : "#fff",
                color: irregularselectedBG ? "#fff" : "black",
              }}
            >
              <Box className="pln-cards-cnt">
                <Badge badgeContent="Coming Soon" className="sku-badge">
                  <Typography
                    fontSize={{ lg: 14, xs: 12 }}
                    className="plan-minititile"
                  >
                    Irregular PO
                  </Typography>
                </Badge>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box className="pln-cards-header">
              <Typography color="#fff" className="plan-title">
                Promotion
              </Typography>
            </Box>{" "}
            <Box
              className="pln-card-bd"
              onClick={handleReallocation}
              style={{
                backgroundColor: "#fff",
                color: "black",
              }}
            >
              <Box className="pln-cards-cnt">
                <Badge badgeContent="Coming Soon" className="systamatic-badge">
                  <Typography
                    fontSize={{ lg: 14, xs: 12 }}
                    className="plan-minititile"
                  >
                    SKU Prioritization for Promotion
                  </Typography>
                </Badge>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Planning;
