import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Planning.css";
import qubes from "../../images/qubes.png";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";

const Planning = ({ filterStatus }) => {
  const navigate = useNavigate();

  const [oosriskselectedBG, setoosriskselectedBG] = useState(false);
  const [irregularselectedBG, setirregularselectedBG] = useState(false);
  const [reallocationselectedBG, setreallocationselectedBG] = useState(false);

  const handleOOSRisk = () => {
    filterStatus(true);
    setirregularselectedBG(false);
    setreallocationselectedBG(false);
    setoosriskselectedBG(true);
  };
  const handleirregularpo = () => {
    filterStatus(true);
    setoosriskselectedBG(false);
    setreallocationselectedBG(false);
    setirregularselectedBG(true);
  };
  const handleReallocation = () => {
    filterStatus(true);
    setoosriskselectedBG(false);
    setirregularselectedBG(false);
    setreallocationselectedBG(true);
  };

  const handleSellinforecast = () => {
    navigate("/sellinforecast");
  };

  const handleSelloutforecast = () => {
    navigate("/selloutforecast");
  };

  return (
    <div>
      <Grid mt={3}>
        <Grid container spacing={{ md: 2, lg: 2, xl: 5 }} item xs={12} mt={1}>
          <Grid item xs={4}>
            <Box className="pln-cards-header">
              <Typography color="#fff" className="plan-title">
                Forecasting
              </Typography>
            </Box>
            <Box className="pln-card-bd" onClick={handleSellinforecast}>
              <Box className="pln-cards-cnt">
                <Typography
                  fontSize={{ lg: 14, xs: 12 }}
                  className="plan-minititile"
                >
                  Sell in Forecasting Model
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
                  Sell out Forecasting Model
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
                Monitoring
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
                  OSS Risk Dectection
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
                <Typography
                  fontSize={{ lg: 14, xs: 12 }}
                  className="plan-minititile"
                >
                  Irregular PO
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
                Reallocate
              </Typography>
            </Box>{" "}
            <Box
              className="pln-card-bd"
              onClick={handleReallocation}
              style={{
                backgroundColor: reallocationselectedBG ? "#ff007e" : "#fff",
                color: reallocationselectedBG ? "#fff" : "black",
              }}
            >
              <Box className="pln-cards-cnt">
                <Typography
                  fontSize={{ lg: 14, xs: 12 }}
                  className="plan-minititile"
                >
                  Customer Reallocation
                </Typography>
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
