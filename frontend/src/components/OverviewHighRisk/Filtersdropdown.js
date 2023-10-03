import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import {
  Box,
  Button,
  Grid,
  Typography,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useSelector, useDispatch } from "react-redux";
import {
  updateloader,
  fetchbusiness,
  fetchlocation,
  fetchcustomer,
  fetchbrand,
  fetchbusinessempty,
  fetchlocationempty,
  fetchfilterapply,
  fetchalerts,
  fetchcustomerola,
  fetchcustomerstockposition,
  fetchcustomersellin,
  fetchcustomersellout,
  fetchcustomerhestoric,
  fetchoverviewcustomerdata,
  fetchreckittstockposition,
  fetchreckittexpectedservice,
  fetchreckittcaseshortages,
  fetchreckittwoc,
  fetchreckittexpectedsoh,
  fetchreckittdemand,
  fetchreckittsupply,
  fetchoverviewhighriskdata,
  updateexporttabledata,
  fetchtaburl,
  updatesearchvalue,
  updateskulist,
} from "../../store/actions/sidebarActions";
import "./Filtersdropdown.css";

function Filtersdropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const overviewhighriskdata = useSelector(
    (state) => state.sidebar.overviewhighriskdata
  );
  const filteredOHRdata = useSelector((state) => state.sidebar.filteredOHRdata);
  const [selectedCustomerValue, setselectedCustomerValue] = useState("Amazon"); // Initialize with a default value

  const data = useSelector((state) => state.sidebar.userDetails);
  console.log(data);

  const business = useSelector((state) => state.sidebar.business);
  const location = useSelector((state) => state.sidebar.location);
  const customer = useSelector((state) => state.sidebar.customerfilter);
  const brand = useSelector((state) => state.sidebar.brand);

  const businessEmpty = useSelector((state) => state.sidebar.businessEmpty);
  const locationEmpty = useSelector((state) => state.sidebar.locationEmpty);
  const taburl = useSelector((state) => state.sidebar.taburl);
  const customerurl = useSelector((state) => state.sidebar.customer);
  const tabname = useSelector((state) => state.sidebar.tabname);
  const skulist = useSelector((state) => state.sidebar.skulist);
  const searchValue = useSelector((state) => state.sidebar.searchvalue);

  const handleBusinessChange = (event) => {
    dispatch(fetchbusiness(event.target.value));
    dispatch(fetchbusinessempty(false));
  };

  const handleLocationChange = (event) => {
    dispatch(fetchlocation(event.target.value));
    dispatch(fetchlocationempty(false));
  };

  const handleCustomerChange = (event) => {
    dispatch(fetchcustomer(event.target.value));
  };
  const handleBrandChange = (event) => {
    dispatch(fetchbrand(event.target.value));
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleApplyFilters = async (e) => {
    e.preventDefault();
    if (!business) {
      dispatch(fetchbusinessempty(true));
    }
    if (!location) {
      dispatch(fetchlocationempty(true));
    }

    if (!business || !location) {
      return;
    }

    dispatch(updateloader(true));
    var data = {
      Brand: brand,
      Customer: customer,
      Location: location,
      "Business Unit": business,
    };
    console.log(data);
    try {
      const response = await fetch("http://localhost:5000/getfilterparams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        tabApiCall();
        dispatch(updatesearchvalue(""));
        setAnchorEl(null);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const tabApiCall = async () => {
    dispatch(updateloader(true));
    dispatch(updateskulist([]));
    dispatch(updatesearchvalue(""));
    var data = {
      customer: customerurl,
      search: "",
      tabname: tabname,
      skulist: [],
      rbsku: "",
    };
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
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
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
      <Button
        size="medium"
        variant="contained"
        onClick={handleMenuClick}
        style={{
          backgroundColor: "#415A6C",
          padding: "4px 16px",
          textDecoration: "none",
          textTransform: "none",
        }}
      >
        Filters
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <Grid p={2} className="filter-downbox">
          <Grid item xs={2} lg={1} mt={1}>
            <Box sx={{ minWidth: 200 }} className="filter-dropdown">
              <FormControl
                variant="standard"
                sx={{ minWidth: 200, marginTop: "-20px" }}
                size="small"
                style={businessEmpty ? { borderColor: "red" } : {}}
              >
                <InputLabel
                  htmlFor="business-unit"
                  style={businessEmpty ? { color: "red" } : {}}
                >
                  Business Unit*
                </InputLabel>
                <Select
                  value={business}
                  onChange={handleBusinessChange}
                  id="business-unit"
                >
                  {data["Business Unit"].map((item) => (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={4} my={3}>
            <Box sx={{ minWidth: 200 }} className="filter-dropdown">
              <FormControl
                variant="standard"
                sx={{ minWidth: 200, marginTop: "-20px" }}
                size="small"
                style={locationEmpty ? { borderColor: "red" } : {}}
              >
                <InputLabel
                  htmlFor="location"
                  style={locationEmpty ? { color: "red" } : {}}
                >
                  Location*
                </InputLabel>
                <Select
                  value={location}
                  onChange={handleLocationChange}
                  id="location"
                >
                  {data.Location.map((item) => (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={4} my={3} className="filter-dropdown">
            <Box sx={{ minWidth: 200 }}>
              <FormControl
                variant="standard"
                sx={{ minWidth: 200, marginTop: "-20px" }}
                size="small"
              >
                <InputLabel>Customer</InputLabel>
                <Select
                  id="location-select"
                  value={customer}
                  onChange={handleCustomerChange}
                >
                  {data.Customer.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={2} className="filter-dropdown">
            <Box sx={{ minWidth: 200 }}>
              <FormControl
                variant="standard"
                sx={{ minWidth: 200, marginTop: "-20px" }}
                size="small"
              >
                <InputLabel>Brand</InputLabel>
                <Select
                  value={brand}
                  onChange={handleBrandChange}
                  disabled={!business}
                >
                  {business === "Hygiene" && (
                    <MenuItem value="Airwick">Airwick</MenuItem>
                  )}
                  {business === "Health" && (
                    <MenuItem value="Gaviscon">Gaviscon</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Box className="filterdropdown-insidebtn" mt="15px">
            <Button
              variant="contained"
              size="small"
              className="btn-apply"
              sx={{
                backgroundColor: "#415A6C",
                "&:hover": {
                  backgroundColor: "#FF007F",
                },
              }}
              onClick={handleApplyFilters}
            >
              Apply
            </Button>
            <Button
              variant="contained"
              size="small"
              className="btn-apply"
              sx={{
                backgroundColor: "#415A6C",
                "&:hover": {
                  backgroundColor: "#FF007F",
                },
              }}
              onClick={handleMenuClose}
            >
              Cancel
            </Button>
          </Box>
        </Grid>
      </Menu>
    </div>
  );
}

export default Filtersdropdown;
