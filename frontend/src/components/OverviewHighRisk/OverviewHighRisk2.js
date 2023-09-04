import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import FunctionalTabs from "../DataTable/FunctionalTabs";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import search from "../../images/search.png";
import Filtersdropdown from "./Filtersdropdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./OverviewHighRisk.css";
import CustomerTable from "../DataTable/CustomerTable";
import Ragfilters from "./Ragfiltersdropdown";
import OhrCustomerTabs from "../DataTable/ohrCustomerTabs";

const OverviewHighRisk2 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <div>
      <Topbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className="bg-containerOHR">
          <Box
            display="flex"
            fontSize={14}
            mx="1px"
            className="breadcrumb-tabbox"
          >
            <Box mt="1px">
              <Button
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: "30px 30px ",
                  border: "#fff",
                  marginTop: "-6px",
                  height: "24px",
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
                <Typography fontSize={12}>Back</Typography>
              </Button>
            </Box>{" "}
            &#160;&#160;&#160;&#160;&#160;&#160;
            <Typography fontSize={14}>OOS Risk Dectection</Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px" }} />
            </Typography>
            <Typography fontSize={14}>Overview High-Risk SKUs</Typography>
          </Box>

          <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
            <TabList style={{ marginTop: "20px", display: "flex" }}>
              <Tab
                style={{
                  border: "1px solid #E5EBEF",
                  color: activeTab === 0 ? "white" : "#415A6C",
                }}
              >
                Overview High Risk SKUs - Reckitt
              </Tab>
              <Tab
                style={{
                  border: "1px solid #E5EBEF",
                  color: activeTab === 1 ? "white" : "#415A6C",
                }}
              >
                Overview High Risk SKUs - Customer
              </Tab>

              <Stack className="ohr-stack" direction="row" alignItems="center">
                <Box>
                  <Search
                    // className="serch-border"
                    sx={{
                      backgroundColor: "#E7E9EE",
                      "&:hover": {
                        backgroundColor: "#E7E9EE",
                      },
                      borderRadius: "30px",
                      display: "flex",
                      color: "#415A6C",
                      height: "35px",
                    }}
                  >
                    <StyledInputBase
                      className="serch-name"
                      placeholder="Search Sku by name"
                      inputProps={{ "aria-label": "search" }}
                    />{" "}
                    <img src={search} alt="search" className="search-icon2" />
                  </Search>
                </Box>
                
                <Box className="nestmenu-box">
                  <Filtersdropdown />
                </Box>
                <Box className="nestmenu-box">
                  <Ragfilters />
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    size="small"
                    className="btn-exp"
                    style={{ textDecoration: "none", textTransform: "none" }}
                  >
                    Export Data
                  </Button>
                </Box>
              </Stack>
            </TabList>
            <TabPanel>
              <FunctionalTabs />
            </TabPanel>
            <TabPanel>
              <OhrCustomerTabs />
            </TabPanel>
          </Tabs>
        </Grid>
      </Grid>
    </div>
  );
};

export default OverviewHighRisk2;
