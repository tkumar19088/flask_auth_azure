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

const OverviewHighRisk2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loader = useSelector((state) => state.sidebar.loader);
  const customer = useSelector((state) => state.sidebar.customer);
  const exporttabledata = useSelector((state) => state.sidebar.exporttabledata);
  const [searchValue, setSearchValue] = useState(""); // State to store the search input value

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

  const handleSearchSKU = async () => {
    dispatch(updatesearch(true));
    var isNumber = await containsOnlyNumbers(searchValue);
    if (isNumber) {
      console.log(exporttabledata);
      var results = exporttabledata.filter((item) =>
        String(item["RB SKU"]).includes(searchValue)
      );
      dispatch(updateexporttabledata(results));
      console.log(results);
    } else {
      var results = exporttabledata.filter((item) =>
        item.Description.includes(searchValue)
      );
      dispatch(updateexporttabledata(results));
      console.log(results);
    }
  };
  const containsOnlyNumbers = (inputString) => {
    return /^\d+$/.test(inputString);
  };
  const handleReckittOverview = async () => {
    await dispatch(updatecustomer(0));
    reckittOverview();
  };
  const reckittOverview = async () => {
    dispatch(updateloader(true));
    var data = { customer: 0 };
    try {
      const url = "http://localhost:5000/getoverview";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchoverviewhighriskdata(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleCustomerOverview = async () => {
    dispatch(updatecustomer(1));
    await customerOverview();
  };
  const customerOverview = async () => {
    dispatch(updateloader(true));
    var data = { customer: 1 };
    try {
      const url = "http://localhost:5000/getoverview";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchoverviewcustomerdata(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const convertToCSV = (objArray) => {
    const array =
      typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
    let csv = "";

    // Generate the header row
    let header = "";
    for (let key in array[0]) {
      if (header !== "") header += ",";
      header += key;
    }
    csv += header + "\r\n";

    // Generate the data rows
    for (let i = 0; i < array.length; i++) {
      let line = "";
      for (let key in array[i]) {
        if (line !== "") line += ",";
        line += array[i][key];
      }
      csv += line + "\r\n";
    }

    return csv;
  };
  const handleExportTableData = () => {
    const csvData = convertToCSV(exporttabledata);
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "data.csv";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };
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
                <Typography fontSize={12} onClick={handleBack}>
                  Back
                </Typography>
              </Button>
            </Box>{" "}
            &#160;&#160;&#160;&#160;&#160;&#160;
            <Typography fontSize={14}>OOS Risk Dectection</Typography>
            <Typography>
              <ChevronRightIcon sx={{ height: "20px" }} />
            </Typography>
            <Typography fontSize={14}>Overview High-Risk SKUs</Typography>
          </Box>

          <Tabs
            selectedIndex={activeTab}
            onSelect={handleTabChange}
            className="mainTabs"
          >
            <TabList style={{ marginTop: "20px", display: "flex" }}>
              <Tab
                style={{
                  border: "1px solid #E5EBEF",
                  color: activeTab === 0 ? "white" : "#415A6C",
                }}
                onClick={handleReckittOverview}
              >
                Overview High Risk SKUs - Reckitt
              </Tab>
              <Tab
                style={{
                  border: "1px solid #E5EBEF",
                  color: activeTab === 1 ? "white" : "#415A6C",
                }}
                onClick={handleCustomerOverview}
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
                      value={searchValue} // Bind the input value to the state
                      onChange={(e) => setSearchValue(e.target.value)}
                    />{" "}
                    <img
                      src={search}
                      alt="search"
                      className="search-icon2"
                      onClick={handleSearchSKU}
                    />
                  </Search>
                </Box>

                <Box className="nestmenu-box">
                  <Filtersdropdown />
                </Box>

                {customer == 0 && (
                  <Box className="nestmenu-box">
                    <Ragfilters />
                  </Box>
                )}
                {customer == 1 && (
                  <Box className="nestmenu-box">
                    <CustomerRagfilters />
                  </Box>
                )}

                <Box>
                  <Button
                    variant="contained"
                    size="small"
                    className="btn-exp"
                    style={{ textDecoration: "none", textTransform: "none" }}
                    onClick={handleExportTableData}
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
