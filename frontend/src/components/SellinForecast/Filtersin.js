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
} from "../../store/actions/sidebarActions";
// import "./Filtersdropdown.css";
import "./Sellinforecast";

function Filtersin() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const overviewhighriskdata = useSelector(
    (state) => state.sidebar.overviewhighriskdata
  );
  const filteredOHRdata = useSelector((state) => state.sidebar.filteredOHRdata);
  const [selectedCustomerValue, setselectedCustomerValue] = useState("Amazon"); // Initialize with a default value

  const data = useSelector((state) => state.sidebar.userDetails);
  console.log(data);

  // const business = useSelector((state) => state.sidebar.business);
  // const location = useSelector((state) => state.sidebar.location);
  // const customer = useSelector((state) => state.sidebar.customerfilter);
  // const brand = useSelector((state) => state.sidebar.brand);

  const [business, setbusiness] = useState(false);
  const [location, setlocation] = useState(false);
  const [customer, setcustomer] = useState(false);
  const [brand, setbrand] = useState(false);

  // const businessEmpty = useSelector((state) => state.sidebar.businessEmpty);
  // const locationEmpty = useSelector((state) => state.sidebar.locationEmpty);
  // const taburl = useSelector((state) => state.sidebar.taburl);
  // const customerurl = useSelector((state) => state.sidebar.customer);

  const [businessEmpty, setbusinessEmpty] = useState(false);
  const [locationEmpty, setlocationEmpty] = useState(false);
  const [customerEmpty, setcustomerEmpty] = useState(false);
  const [brandEmpty, setbrandEmpty] = useState(false);

  const handleBusinessChange = (event) => {
    setbusiness(event.target.value);
    setbusinessEmpty(false);
  };

  const handleLocationChange = (event) => {
    setlocation(event.target.value);
    setlocationEmpty(false);
  };

  const handleCustomerChange = (event) => {
    setcustomer(event.target.value);
    setcustomerEmpty(false);
  };
  const handleBrandChange = (event) => {
    setbrand(event.target.value);
    setbrandEmpty(false);
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
      setbusinessEmpty(true);
    }
    if (!location) {
      setlocationEmpty(true);
    }
    if (!customer) {
      setcustomerEmpty(true);
    }
    if (!brand) {
      setbrandEmpty(true);
    }

    if (!business || !location || !customer || !brand) {
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
      const response = await fetch("http://localhost:5000/getsellingraph", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        // tabApiCall();
        // dispatch(fetchfilterapply(true));
        // dispatch(fetchalerts(json.alerts));
      }
      // Handle the API response data as needed
    } catch (error) {
      console.error("Error:", error);
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
          <Grid item xs={2} lg={1} mt="15px">
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

          <Grid item xs={4} mt="25px">
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
          <Grid item xs={4} mt="25px" className="filter-dropdown">
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
          <Grid item xs={2} mt="25px" className="filter-dropdown">
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

export default Filtersin;
