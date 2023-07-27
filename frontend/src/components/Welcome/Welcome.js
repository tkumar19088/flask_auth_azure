import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Welcome.css";

import Calendar from "../Calendar/Calendar";

const Welcome = () => {
  return (
    <Grid container className="multicolor">
      <Grid item xs={7} p={1}>
        <Typography fontSize={{ lg: 42, xs: 38 }} mx="10px">
          Welcome
        </Typography>
        <Typography fontSize={{ lg: 42, xs: 36 }} mx="10px" lineHeight="40px">
          Long name example
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Calendar />
      </Grid>
    </Grid>
  );
};

export default Welcome;
