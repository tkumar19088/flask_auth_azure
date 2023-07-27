import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Planning.css";
import qubes from "../../images/qubes.png";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";

const Planning = ({ filterStatus }) => {
  const handleFilterStatus = () => {
    filterStatus(true);
  };

  return (
    <div>
      <Grid>
        <Grid container spacing={2} item xs={12} mt={1}>
          <Grid item xs={3}>
            <Box className="pln-cards-header">
              <Typography color="#fff">Demand Planning</Typography>
            </Box>{" "}
            <Box className="pln-card-bd">
              <Box className="pln-cards-cnt">
                <Typography fontSize={{ lg: 14, xs: 12 }} fontWeight={500}>
                  Forecast Builder - Sell Out
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />
              </Box>
            </Box>{" "}
            <Box className="pln-card-bd">
              <Box className="pln-cards-cnt">
                <Typography fontSize={{ lg: 14, xs: 12 }} fontWeight={500}>
                  Market Price Match
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />{" "}
              </Box>
            </Box>{" "}
          </Grid>
          <Grid item xs={3}>
            <Box className="pln-cards-header">
              <Typography color="#fff">Demand Scenarios</Typography>
            </Box>{" "}
            <Box className="pln-card-bd">
              <Box className="pln-cards-cnt">
                <Typography fontSize={{ lg: 14, xs: 12 }} fontWeight={500}>
                  Scenario Selection
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />{" "}
              </Box>
            </Box>{" "}
            <Box className="pln-card-bd-L">
              <Box className="pln-cards-cnt">
                <Typography fontSize={{ lg: 14, xs: 12 }} fontWeight={500} lineHeight="16px">
                  Systamatic data-driven forecast validation
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />{" "}
              </Box>
            </Box>{" "}
          </Grid>

          <Grid item xs={3}>
            <Box className="pln-cards-header">
              <Typography color="#fff">Supply Planning</Typography>
            </Box>{" "}
            <Box className="pln-card-bd">
              <Box className="pln-cards-cnt">
                <Typography fontSize={{ lg: 14, xs: 12 }} fontWeight={500}>
                  Forecast builder - Sell-In{" "}
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />{" "}
              </Box>
            </Box>{" "}
          </Grid>

          <Grid item xs={3}>
            <Box className="pln-cards-header">
              <Typography color="#fff">Distribution Planning</Typography>
            </Box>{" "}
            <Box className="pln-card-bd">
              <Box className="pln-cards-cnt">
                <Typography fontSize={{ lg: 14, xs: 12 }} fontWeight={500}>
                  SKU Prioritisation{" "}
                </Typography>
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
            <Box className="pln-card-bd">
              <Box className="pln-cards-cnt">
                <Typography fontSize={{ lg: 14, xs: 12 }} fontWeight={500}>
                  Smart Stock Reallocation
                </Typography>
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
