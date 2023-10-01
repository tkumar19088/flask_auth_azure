import React, { useEffect, useState } from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ClearIcon from "@mui/icons-material/Clear";

import FunctionalTabs from "../DataTable/FunctionalTabs";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import searchIcon from "../../images/search.png";
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
  fetchcustomerola,
  fetchcustomerstockposition,
  fetchcustomersellin,
  fetchcustomersellout,
  fetchcustomerhestoric,
  fetchreckittstockposition,
  fetchreckittexpectedservice,
  fetchreckittcaseshortages,
  fetchreckittwoc,
  fetchreckittexpectedsoh,
  fetchreckittdemand,
  fetchreckittsupply,
  updatesearchvalue,
  updateissearch,
  updatetabname,
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
  const searchValue = useSelector((state) => state.sidebar.searchvalue);
  const taburl = useSelector((state) => state.sidebar.taburl);
  const customerurl = useSelector((state) => state.sidebar.customer);
  const search = useSelector((state) => state.sidebar.search);
  const tabname = useSelector((state) => state.sidebar.tabname);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    if (search) {
      handleSearchSKU();
    }
  }, [search]);

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
    var data = {
      customer: 0,
      search: searchValue,
      tabname: tabname,
      skulist: "",
      rbsku: "",
    };
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
    var data = {
      customer: 1,
      search: searchValue,
      tabname: tabname,
      skulist: "",
      rbsku: "",
    };
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
      header += `"${key}"`; // Enclose headers in double quotes
    }
    csv += header + "\r\n";

    // Generate the data rows
    for (let i = 0; i < array.length; i++) {
      let line = "";
      for (let key in array[i]) {
        if (line !== "") line += ",";
        let value = array[i][key];

        // Check if value is null
        if (value === null) {
          value = "";
        } else {
          value = value.toString(); // Convert to string
          value = value.replace(/"/g, '""'); // Enclose values in double quotes and escape existing double quotes
        }

        line += `"${value}"`;
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

  const handleInputChange = (e) => {
    dispatch(updatesearchvalue(e.target.value));
  };
  const handleClearsearch = async () => {
    dispatch(updateloader(true));
    var data = { customer: customerurl };
    try {
      const url = taburl;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        identifySpecificTabdata(json, url);
        dispatch(updatesearch(false));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
    dispatch(updatesearchvalue(""));
  };
  const identifySpecificTabdata = (json, url) => {
    dispatch(updateexporttabledata(json));
    dispatch(fetchtaburl(url));
    if (customerurl == 0) {
      if (url.includes("getoverview")) {
        dispatch(fetchoverviewhighriskdata(json));
      }
      if (url.includes("getsupply")) {
        dispatch(fetchreckittsupply(json));
      }
      if (url.includes("getdemand")) {
        dispatch(fetchreckittdemand(json));
      }
      if (url.includes("getsohateow")) {
        dispatch(fetchreckittexpectedsoh(json));
      }
      if (url.includes("getwocateow")) {
        dispatch(fetchreckittwoc(json));
      }
      if (url.includes("getcaseshortages")) {
        dispatch(fetchreckittcaseshortages(json));
      }
      if (url.includes("getexpectedservice")) {
        dispatch(fetchreckittexpectedservice(json));
      }
      if (url.includes("getstockposition")) {
        dispatch(fetchreckittstockposition(json));
      }
    } else {
      if (url.includes("getoverview")) {
        dispatch(fetchoverviewcustomerdata(json));
      }
      if (url.includes("getcustepos")) {
        dispatch(fetchcustomerhestoric(json));
      }
      if (url.includes("getcustsellout")) {
        dispatch(fetchcustomersellout(json));
      }
      if (url.includes("getcustsellin")) {
        dispatch(fetchcustomersellin(json));
      }
      if (url.includes("getstockposition")) {
        dispatch(fetchcustomerstockposition(json));
      }
      if (url.includes("getcustola")) {
        dispatch(fetchcustomerola(json));
      }
    }
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
                  <Box
                    sx={{
                      backgroundColor: "#E7E9EE",
                      "&:hover": {
                        backgroundColor: "#E7E9EE",
                      },
                      borderRadius: "30px",
                      display: "flex",
                      color: "#415A6C",
                      height: "35px",
                      // justifyContent: "space-around",
                      gap: "15px",
                      // border: "1px solid",
                      width: "260px",
                      alignItems: "center",
                    }}
                  >
                    <InputBase
                      className="search-name"
                      placeholder="Search by SKU Name / ID"
                      inputProps={{ "aria-label": "search" }}
                      value={searchValue}
                      onChange={handleInputChange}
                    />
                    <Box sx={{ display: "flex", gap: "5px", color: "grey" }}>
                      {searchValue.length > 0 && (
                        <div style={{ display: "flex" }}>
                          <ClearIcon
                            sx={{ cursor: "pointer", color: "red" }}
                            onClick={handleClearsearch}
                          />
                          <Box
                            sx={{
                              border: "1px solid",
                              height: "17px",
                              marginTop: "2px",
                            }}
                          ></Box>
                        </div>
                      )}

                      <img
                        src={searchIcon}
                        alt="search"
                        className="search-icon2"
                        onClick={handleSearchSKU}
                      />
                    </Box>
                  </Box>
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
