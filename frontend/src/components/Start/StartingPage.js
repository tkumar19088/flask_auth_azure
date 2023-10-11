import React from "react";
import "./StartingPage.css";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const StartingPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={7} container>
          <Grid xs={3} border="1px solid">1</Grid>
          <Grid xs={3} border="1px solid">1</Grid>
          <Grid xs={3} border="1px solid">1</Grid>
          <Grid xs={3} border="1px solid">1</Grid>
          
          <Grid xs={4}></Grid>
          <Grid xs={4}></Grid>
          <Grid xs={4}></Grid>
        </Grid>
        <Grid xs={5}></Grid>
      </Grid>
    </Box>
  );
};

export default StartingPage;
