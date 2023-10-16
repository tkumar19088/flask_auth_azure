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
  updateapplyfilterserror,
  fetchuserdetails,
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
  const userDetailsreset = useSelector(
    (state) => state.sidebar.userDetailsreset
  );
  const alertsreset = useSelector((state) => state.sidebar.alertsreset);
  const applyfilterserror = useSelector(
    (state) => state.sidebar.applyfilterserror
  );

  const businessEmpty = useSelector((state) => state.sidebar.businessEmpty);
  const locationEmpty = useSelector((state) => state.sidebar.locationEmpty);
  const [isReset, setIsReset] = useState(false);

  const handleBusinessChange = (event) => {
    dispatch(fetchbusiness(event.target.value));
    dispatch(fetchbusinessempty(false));
    dispatch(fetchbrand(""));
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
    dispatch(updateapplyfilterserror(false));
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
      const response = await fetch(
        "https://testingsmartola.azurewebsites.net/getfilterparams",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
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
      const response = await fetch(
        "https://testingsmartola.azurewebsites.net/resetfilterparams"
      );
      if (response.ok) {
        console.log("success");
        dispatch(fetchbusiness(""));
        dispatch(fetchlocation(""));
        dispatch(fetchcustomer(""));
        dispatch(fetchbrand(""));
        dispatch(fetchalerts(alertsreset));
        dispatch(fetchfilterapply(false));
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      // dispatch(updateloader(false));
    }
  };
  return (
    <div className="filter-main">
      <Box display="flex" gap={2}>
        <Typography
          className="filter-title"
          color="#415A6C"
          marginBottom="25px"
          marginTop="10px"
          // p={1}
        >
          Filters
        </Typography>
      </Box>
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
                  <MenuItem value="">
                    <em>-Select-</em>
                  </MenuItem>
                  {data ? (
                    data["Business Unit"].map((item) => (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem>
                      <em>-Select-</em>
                    </MenuItem>
                  )}
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
                  <MenuItem value="">
                    <em>-Select-</em>
                  </MenuItem>
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
                  <MenuItem value="">
                    <em>-Select-</em>
                  </MenuItem>
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
                  <MenuItem value="">
                    <em>-Select-</em>
                  </MenuItem>
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

          <Grid item xs={3} className="flt-grid" border="">
            {applyfilterserror && (
              <Typography
                color="red"
                marginTop="-39px"
                marginBottom="15px"
                mx="60px"
              >
                {" "}
                Please Select Apply Filters
              </Typography>
            )}
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
