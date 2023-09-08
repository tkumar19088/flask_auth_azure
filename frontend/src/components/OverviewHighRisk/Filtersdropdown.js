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
import FormControl from "@mui/material/FormControl";
import { useSelector } from "react-redux";
import "./Filtersdropdown.css";

function Filtersdropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const overviewhighriskdata = useSelector(
    (state) => state.sidebar.overviewhighriskdata
  );
  const filteredOHRdata = useSelector((state) => state.sidebar.filteredOHRdata);
  const [selectedCustomerValue, setselectedCustomerValue] = useState("Amazon"); // Initialize with a default value

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleApplyFilters = () => {
    console.log(selectedCustomerValue);
    const filteredResult = overviewhighriskdata.filter(
      (item) => item.Brand === selectedCustomerValue
    );
    // setFilteredData(filteredResult);
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
          <Grid item xs={2} lg={1}>
            <Box sx={{ minWidth: 200 }} className="filter-dropdown">
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  <Typography
                    fontSize={22}
                    mt={-1}
                    className="filter-inside-title"
                  >
                    Business Unit
                  </Typography>
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: "Customer",
                    id: "uncontrolled-native",
                  }}
                  style={{ backgroundColor: "", marginBottom: "20px" }}
                >
                  <option value="Nutrition">Nutrition</option>
                  <option value="Hygiene">Hygiene</option>
                  <option value="Health">Health</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ minWidth: 200 }} className="filter-dropdown">
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  <Typography
                    fontSize={22}
                    mt={-1}
                    className="filter-inside-title"
                  >
                    Location
                  </Typography>
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: "Country",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={4} my={2} className="filter-dropdown">
            <Box sx={{ minWidth: 200 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  <Typography
                    fontSize={22}
                    mt={-1}
                    className="filter-inside-title"
                  >
                    Customer
                  </Typography>
                </InputLabel>
                <NativeSelect
                  defaultValue="Amazon"
                  inputProps={{
                    name: "Brand",
                    id: "uncontrolled-native",
                  }}
                  onChange={(e) => setselectedCustomerValue(e.target.value)} // Update the selectedValue
                >
                  <option value="Amazon">Amazon</option>
                  <option value="Asda">Asda</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={4} my={2} className="filter-dropdown">
            <Box sx={{ minWidth: 200 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  <Typography
                    fontSize={22}
                    mt={-1}
                    className="filter-inside-title"
                  >
                    Brand
                  </Typography>
                </InputLabel>
                <NativeSelect
                  defaultValue="Amazon"
                  inputProps={{
                    name: "Brand",
                    id: "uncontrolled-native",
                  }}
                  onChange={(e) => setselectedCustomerValue(e.target.value)} // Update the selectedValue
                >
                  <option value="Airwick">Airwick</option>
                  <option value="Durex">Durex</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>
          <Box className="filterdropdown-insidebtn">
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
