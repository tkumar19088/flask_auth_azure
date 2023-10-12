import React from "react";
import "./StartingPage.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
const StartingPage = () => {
  const items = [
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 4" },
    // Add more items as needed
  ];
  const items2 = [
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    // Add more items as needed
  ];
  const itemsr = [
    { id: 1, content: "Item 1" },
    // { id: 2, content: "Item 2" },
    // { id: 3, content: "Item 3" },
    // Add more items as needed
  ];
  const items3 = [
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 1" },
    { id: 5, content: "Item 2" },
    { id: 6, content: "Item 3" },
    // Add more items as needed
  ];
  return (
    <div>
      <Grid container spacing={5} padding="6%">
        <Grid container spacing={2} item xs={8}>
          {items.map((item) => (
            <Grid item key={item.id} xs={7} lg={3}>
              <Paper
                elevation={3}
                style={{ textAlign: "center", height: "160px" }}
              >
                {item.content}
              </Paper>
            </Grid>
          ))}
          {items2.map((item) => (
            <Grid item key={item.id} xs={5} lg={4}>
              <Paper
                elevation={3}
                style={{ textAlign: "center", height: "160px" }}
              >
                {item.content}
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ textAlign: "center", height: "100%" }}>
            RB
          </Paper>
        </Grid>
        <Grid container spacing={2} item xs={8}>
          {items3.map((item) => (
            <Grid item key={item.id} xs={7} lg={4}>
              <Paper
                elevation={3}
                style={{
                  textAlign: "center",
                  height: "160px",
                  backgroundColor: "pink",
                }}
              >
                {item.content}
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ textAlign: "center", height: "100%" }}>
            RB2
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default StartingPage;
