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
import { updateloader } from "../../store/actions/sidebarActions";
import "./Filters.css";
import "./Filtersnew.css";

const Filters = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sidebar.userDetails);
  console.log(data);

  const [business, setBusiness] = useState("");
  const [location, setLocation] = useState("");
  const [customer, setCustomer] = useState("");
  const [brand, setBrand] = useState("");

  const handleBusinessChange = (event) => {
    setBusiness(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
  };
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
  const handleApplyFilters = async (e) => {
    e.preventDefault();
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
        console.log("success");
      }
      // Handle the API response data as needed
    } catch (error) {
      console.error("Error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };

  const handleResetFilters = async () => {
    dispatch(updateloader(true));
    try {
      const response = await fetch("https://testingsmartola.azurewebsites.net/getresetdata");
      if (response.ok) {
        console.log("success");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
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
              >
                <InputLabel>Business Unit</InputLabel>
                <Select value={business} onChange={handleBusinessChange}>
                  {data["Business Unit"].map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
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
                <InputLabel>Location</InputLabel>
                <Select value={location} onChange={handleLocationChange}>
                  {data.Location.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
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
                <Select value={customer} onChange={handleCustomerChange}>
                  {data.Customer.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
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
                <Select value={brand} onChange={handleBrandChange}>
                  <MenuItem value="Airwick">Airwick</MenuItem>
                  <MenuItem value="Durex">Durex</MenuItem>
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
              >
                Apply Filters
              </Button>
              <Button
                endIcon={<RotateLeftIcon />}
                variant="contained"
                size="medium"
                className="filter-buttons"
                onClick={handleResetFilters}
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
