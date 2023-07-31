import React, { useEffect } from "react";
import "./ScenarioGeneration.css";
import Topbar from "../Topbar/Topbar";
import { Box, Button, Grid, Typography } from "@mui/material";
import Sidebar from "../SidebarNew/Sidebar";
// import DataTable from "../../DataTable";
import ScenarioGenarationData from "./ScenarioGenarationData";
import Orderinvestigationairwick from "./Orderinvestigationairwick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const ScenarioGeneration = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Topbar />
      <Grid
        container
        xs={12}
        justifyContent="space-between"
        className="scenarioGen"
      >
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={10}
          p={2}
          sx={{
            backgroundColor: "#F5F6F8",
            // padding: "0px 25px 0px 25px",
          }}
        >
          <Box display="flex" fontSize={14} mx="1px">
            <Box mt={{ xs: "1px", lg: "1px", xl: "6px" }}>
              <Button
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: "30px 30px ",
                  border: "#fff",
                  marginTop: "-6px",
                  height: "24px",
                  // width: "27px",
                }}
              >
                <ArrowBackIosNewIcon
                  sx={{
                    height: "12px",
                    width: "12px",
                    border: "1px solid",
                    borderRadius: "50%",
                    backgroundColor: "#FF007E",
                    color: "#fff",
                  }}
                />
                &#160;
                <Typography
                  fontSize={{ xs: 12, lg: 12, xl: 18 }}
                  onClick={handleBack}
                >
                  Back
                </Typography>
              </Button>
            </Box>{" "}
            &#160;&#160;&#160;&#160;&#160;&#160;
            <Typography fontSize={{ xs: 14, lg: 14, xl: 20 }}>
              OOS Risk Dectection
            </Typography>
            <Typography>
              <ChevronRightIcon
                sx={{ height: { xs: "20px", lg: "20px", xl: "30px" } }}
              />
            </Typography>
            <Typography fontSize={{ xs: 14, lg: 14, xl: 20 }}>
              Overview High-Risk SKUs
            </Typography>
            <Typography>
              <ChevronRightIcon
                sx={{ height: { xs: "20px", lg: "20px", xl: "30px" } }}
              />
            </Typography>
            <Typography fontSize={{ xs: 14, lg: 14, xl: 20 }}>
              Order investigation
            </Typography>
            <Typography>
              <ChevronRightIcon
                sx={{ height: { xs: "20px", lg: "20px", xl: "30px" } }}
              />
            </Typography>
            <Typography fontSize={{ xs: 14, lg: 14, xl: 20 }}>
              Scenario Generation
            </Typography>
          </Box>
          <Box mx="1px">
            <Typography fontSize={{ lg: 26, xs: 18 }} color="#415A6C">
              Scenario Generation: Airwick Electrical Lemon 23434534693dlf
            </Typography>
          </Box>
          <ScenarioGenarationData />
          <Orderinvestigationairwick />
        </Grid>
      </Grid>
    </div>
  );
};

export default ScenarioGeneration;
