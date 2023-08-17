import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Planning.css";
import qubes from "../../images/qubes.png";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";

const Planning = ({ filterStatus }) => {
  const navigate = useNavigate();

  const handleFilterStatus = () => {
    filterStatus(true);
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
          <Grid item xs={3}>
            <Box className="pln-cards-header">
              <Typography color="#fff" className="plan-title">
                Demand Planning
              </Typography>
            </Box>
            <Box className="pln-card-bd" onClick={handleSelloutforecast}>
              <Box className="pln-cards-cnt">
                <Typography fontSize={{ lg: 14, xs: 12 }}>
                  Forecast Builder - Sell Out
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />
              </Box>
            </Box>
            <Box className="pln-card-bd12">
              <Box className="pln-cards-cnt hover-none">
                <Badge badgeContent="Coming Soon" className="market-badge">
                  <Typography fontSize={{ lg: 14, xs: 12 }}>
                    Market Price Match
                  </Typography>
                </Badge>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />{" "}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="pln-cards-header">
              <Typography color="#fff" className="plan-title">
                Demand Scenarios
              </Typography>
            </Box>{" "}
            <Box className="pln-card-bd21">
              <Box className="pln-cards-cnt">
                <Badge badgeContent="Coming Soon" className="scenario-badge">
                  <Typography fontSize={{ lg: 14, xs: 12 }}>
                    Scenario Selection
                  </Typography>
                </Badge>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />{" "}
              </Box>
            </Box>{" "}
            <Box className="pln-card-bd222">
              <Box className="pln-cards-cnt">
                <Badge badgeContent="Coming Soon" className="systamatic-badge">
                  <Typography fontSize={{ lg: 14, xs: 12 }}>
                    Systamatic data-driven forecast validation
                  </Typography>
                </Badge>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />{" "}
              </Box>
            </Box>{" "}
            
          </Grid>

          <Grid item xs={3}>
            <Box className="pln-cards-header">
              <Typography color="#fff" className="plan-title">
                Supply Planning
              </Typography>
            </Box>{" "}
            <Box className="pln-card-bd" onClick={handleSellinforecast}>
              <Box className="pln-cards-cnt">
                <Typography fontSize={{ lg: 14, xs: 12 }}>
                  Forecast builder - Sell-In{" "}
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />
              </Box>
            </Box>{" "}
          </Grid>

          <Grid item xs={3}>
            <Box className="pln-cards-header">
              <Typography color="#fff" className="plan-title">
                Distribution Planning
              </Typography>
            </Box>{" "}
            <Box className="pln-card-bd41">
              <Box className="pln-cards-cnt">
                <Badge badgeContent="Coming Soon" className="sku-badge">
                  <Typography fontSize={{ lg: 14, xs: 12 }}>
                    SKU Prioritisation{" "}
                  </Typography>
                </Badge>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />{" "}
              </Box>
            </Box>{" "}
            <Box className="pln-card-bd42" onClick={handleFilterStatus}>
              <Box className="pln-cards-cnt">
                <Typography fontSize={{ lg: 14, xs: 12 }} fontWeight={500}>
                  OOS Risk Detection
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />{" "}
              </Box>
            </Box>{" "}
            <Box className="pln-card-bd43">
              <Box className="pln-cards-cnt">
                <Badge badgeContent="Coming Soon" className="smartstock-badge">
                  <Typography fontSize={{ lg: 14, xs: 12 }} fontWeight={500}>
                    Smart Stock Reallocation
                  </Typography>
                </Badge>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />{" "}
              </Box>
            </Box>{" "}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Planning;
