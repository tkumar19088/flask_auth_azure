import React, { useEffect, useState } from "react";
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
import CustomerRagfilters from "./CustomerRagfiltersdropdown";
import OhrCustomerTabs from "../DataTable/ohrCustomerTabs";
import {
  updateloader,
  updatecustomer,
  fetchoverviewhighriskdata,
  fetchoverviewcustomerdata,
  fetchtaburl,
  updateexporttabledata,
  updatesearch,
} from "../../store/actions/sidebarActions";
import { useSelector, useDispatch } from "react-redux";
import loaderImage from "../../images/Logo-bar.png";
import { useNavigate } from "react-router-dom";
import OverviewHighRisk2 from "./OverviewHighRisk2";

const Overview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const loader = useSelector((state) => state.sidebar.loader);
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      {loader && (
        <div className="loader-overlay">
          <img src={loaderImage} alt="Loading..." className="rotating-image" />
        </div>
      )}
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
            justifyContent="space-between"
            // border="1px solid"
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
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
                  <Typography fontSize={12} onClick={handleBack}>
                    Back
                  </Typography>
                </Button>
              </Box>{" "}
              &#160;&#160;&#160;&#160;&#160;&#160;
              <Typography fontSize={14} sx={{ color: "#415A6C" }}>
                OOS Risk Detection
              </Typography>
              <Typography>
                <ChevronRightIcon sx={{ height: "20px", color: "#415A6C" }} />
              </Typography>
              <Typography fontSize={14} sx={{ color: "#415A6C" }}>Overview High-Risk SKUs</Typography>
            </Box>
            <Box
              className="search-name"
              sx={{
                // border: "1px solid",
                alignItems: "center",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <InputBase
                // sx={{ ml: 1, flex: 1 }}
                placeholder="Search by SKU Name / ID"
                inputProps={{ "aria-label": "search google maps" }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <img
                src={search}
                alt="search"
                className="search-icon2"
                //   onClick={handleSearchSKU}
              />
            </Box>
          </Box>

          <OverviewHighRisk2 />
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
