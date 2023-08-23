import React, { useState } from "react";
// import Button from "@mui/material/Button";
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
import "./Filtersdropdown.css";

function Filtersdropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [subcustomerEl, setsubcustomerEl] = useState(null);
  const [subLocation, setsubLocation] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCustomerClick = (event) => {
    setsubcustomerEl(event.currentTarget);
  };
  const handleLocationClick = (event) => {
    setsubLocation(event.currentTarget);
  };

  const handleSubMenuClick = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
    setAnchorEl(null);
  };
  const handleCustomerSubMenuClose = () => {
    setsubcustomerEl(null);
    setAnchorEl(null);
  };
  const handleLocationSubMenuClose = () => {
    setsubLocation(null);
    setAnchorEl(null);
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
                    Customer
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
                  <option value="Amazon" sx={{ backgroundColor: "red" }}>
                    Amazon
                  </option>
                  <option value="Tesco">Tesco</option>
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
                  defaultValue={10}
                  inputProps={{
                    name: "Brand",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value="AirWick">Airwick</option>
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
                backgroundColor: "#FF007E",
              }}
            >
              Apply
            </Button>
            <Button
              variant="contained"
              size="small"
              className="btn-cancel"
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
