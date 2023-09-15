import React, { useState, useEffect } from "react";
import { Box, Grid, Button, Typography } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Stack } from "@mui/system";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
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
} from "../../store/actions/sidebarActions";
import "./Filters.css";
import "./Filtersnew.css";

const Filters = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.sidebar.userDetails);

  const business = useSelector((state) => state.sidebar.business);
  const location = useSelector((state) => state.sidebar.location);
  const customer = useSelector((state) => state.sidebar.customerfilter);
  const brand = useSelector((state) => state.sidebar.brand);
  const apply = useSelector((state) => state.sidebar.apply);

  const businessEmpty = useSelector((state) => state.sidebar.businessEmpty);
  const locationEmpty = useSelector((state) => state.sidebar.locationEmpty);

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
      const response = await fetch("https://testingsmartola.azurewebsites.net/getfilterparams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        dispatch(fetchfilterapply(true));
        dispatch(fetchalerts(json.alerts));
      }
      // Handle the API response data as needed
    } catch (error) {
      console.error("Error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };

  const handleResetFilters = async () => {
    // dispatch(updateloader(true));
    try {
      const response = await fetch("https://testingsmartola.azurewebsites.net/resetfilterparams");
      if (response.ok) {
        console.log("success");
        window.location.reload();
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      // dispatch(updateloader(false));
    }
  };
  // const data = {
  //   Name: "Moka  Keerthi",
  //   Email: "keerthi.moka@artefact.com",
  //   Customer: ["Asda", "Amazon"],
  //   Location: ["United Kingdom", "Australia"],
  //   Brand: ["Airwick", "Durex"],
  //   "Business Unit": ["Nutrition", "Hygiene", "Health"],
  //   Role: "admin",
  // };
  return (
    <div className="filter-main">
      <Typography
        className="filter-title"
        color="#415A6C"
        marginBottom="20px"
        marginTop="20px"
        // p={1}
      >
        Filters
      </Typography>
      <Grid container mt={-2} className="flt-bx">
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignSelf="center"
          alignItems="center"
          item
          xs={12}
          sx={{
            boxShadow: 3,
            height: "6rem",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "#fff",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            // p: 1,
            m: 0,
            borderRadius: 2,
            // fontSize: "0.875rem",
            // fontWeight: "700",
          }}
        >
          <Grid item xs={2}>
            <Box sx={{ minWidth: 120 }} ml={2}>
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

          <Grid item xs={2}>
            <Box sx={{ minWidth: 120 }}>
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
          <Grid item xs={2}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl
                variant="standard"
                sx={{ minWidth: 200, marginTop: "-20px" }}
                size="small"
              >
                <InputLabel>Customer</InputLabel>
                <Select
                  value={customer}
                  id="customer"
                  onChange={handleCustomerChange}
                >
                  {data.Customer.map((item) => (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ minWidth: 120 }}>
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

          <Grid item xs={3} className="flt-grid">
            <Box className="filter-boxmain">
              <Button
                endIcon={<PlayArrowIcon />}
                variant="contained"
                size="medium"
                className="filter-buttons"
                onClick={handleApplyFilters}
                style={{
                  backgroundColor: apply ? "#FF007F" : "#415A6C",
                  "&:hover": {
                    backgroundColor: "#FF007F",
                  },
                }}
              >
                Apply Filters
              </Button>
              <Button
                endIcon={<RotateLeftIcon />}
                variant="contained"
                size="medium"
                className="filter-buttons"
                onClick={handleResetFilters}
                style={{
                  backgroundColor: "#415A6C",
                  "&:hover": {
                    backgroundColor: "#FF007F",
                  },
                }}
              >
                Reset Filters
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Filters;
