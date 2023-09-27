import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Welcome.css";

import Calendar from "../Calendar/Calendar";
import { useSelector } from "react-redux";

const Welcome = () => {
  const userDetails = useSelector((state) => state.sidebar.userDetails);
  console.log(userDetails);

  return (
    <Grid container className="multicolor">
      <Grid item xs={7} style={{ margin: "15px 0px" }} className="wlcm-grid">
        <Typography
          fontSize={{ lg: 42, xs: 38 }}
          mx="10px"
          className="welcome-title"
        >
          Welcome, {userDetails.Name}
        </Typography>
      </Grid>
      <Grid item xs={5} marginBottom="20px">
        <Calendar />
      </Grid>
    </Grid>
  );
};

export default Welcome;
