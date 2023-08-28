import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Welcome.css";

import Calendar from "../Calendar/Calendar";

const Welcome = () => {
  return (
    <Grid container className="multicolor">
      <Grid item xs={7} style={{ margin: "15px 0px" }}>
        <Typography fontSize={{ lg: 42, xs: 38 }} mx="10px" className="welcome-title">
          Welcome
        </Typography>
        <Typography fontSize={{ lg: 42, xs: 36 }} mx="10px" lineHeight="40px" className="welcome-contname">
          Kumar, Pavan (Contractor)
        </Typography>
      </Grid>
      <Grid item xs={5} marginBottom="5px">
        <Calendar />
      </Grid>
    </Grid>
  );
};

export default Welcome;
