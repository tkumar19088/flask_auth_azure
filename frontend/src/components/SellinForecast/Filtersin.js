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
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useSelector, useDispatch } from "react-redux";
import { updateloader } from "../../store/actions/sidebarActions";
import "./Sellinforecast";

function Filtersin({ apply }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.sidebar.userDetails);

  const [business, setbusiness] = useState("");
  const [location, setlocation] = useState("");
  const [customer, setcustomer] = useState("");
  const [brand, setbrand] = useState("");

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
    // setbusiness("");
    // setlocation("");
    // setcustomer("");
    // setbrand("");
    // setbusinessEmpty(false);
    // setlocationEmpty(false);
    // setcustomerEmpty(false);
    // setbrandEmpty(false);
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
        apply(json);
        setAnchorEl(null);
      }
      // Handle the API response data as needed
    } catch (error) {
      console.error("Error:", error);
    } finally {
      dispatch(updateloader(false));
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
                  <MenuItem value="">Select</MenuItem>
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
                  <MenuItem value="">Select</MenuItem>
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
                style={customerEmpty ? { borderColor: "red" } : {}}
                size="small"
              >
                <InputLabel
                  htmlFor="customer"
                  style={customerEmpty ? { color: "red" } : {}}
                >
                  Customer*
                </InputLabel>
                <Select
                  id="customer"
                  value={customer}
                  onChange={handleCustomerChange}
                >
                  <MenuItem value="">Select</MenuItem>
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
                style={brandEmpty ? { borderColor: "red" } : {}}
                size="small"
              >
                <InputLabel
                  htmlFor="brand"
                  style={brandEmpty ? { color: "red" } : {}}
                >
                  Brand*
                </InputLabel>
                <Select
                  value={brand}
                  onChange={handleBrandChange}
                  disabled={!business}
                  id="brand"
                >
                  <MenuItem value="">Select</MenuItem>
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

export default Filtersin;
