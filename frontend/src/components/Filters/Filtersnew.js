import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

import "./Filtersnew.css";

const Filtersnew = () => {
  const [business, setBusiness] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [customer, setCustomer] = React.useState("");

  const handleBusinessChange = (event) => {
    setBusiness(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
  };

  return (
    <div>
      <Stack
        direction="row"
        width="100%"
        // justifyContent="space-around"
        mt="10px"
        mb="-10px"
        className="filtersDispaly"
        alignItems="center"
        gap={5}
      >
        <Typography
          className="f-h1"
          justifyContent="center"
          alignItems="center"
          display="flex"
          //   border="1px solid"
        >
          Filters
        </Typography>
        <Stack direction="row" className="filters-newstack" width="70%">
          <FormControl
            variant="standard"
            sx={{ minWidth: 170, marginTop: "-20px" }}
            size="small"
          >
            <InputLabel>Business Unit</InputLabel>
            <Select value={business} onChange={handleBusinessChange}>
              <MenuItem value={10}>Health</MenuItem>
              <MenuItem value={20}>Hugeine</MenuItem>
              <MenuItem value={30}>Nutrition</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ minWidth: 170, marginTop: "-20px" }}
            size="small"
          >
            <InputLabel>Location</InputLabel>
            <Select value={location} onChange={handleLocationChange}>
              <MenuItem value={10}>United Kingdom</MenuItem>
              <MenuItem value={20}>Hugeine</MenuItem>
              <MenuItem value={30}>Nutrition</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ minWidth: 170, marginTop: "-20px" }}
            size="small"
          >
            <InputLabel>Customer</InputLabel>
            <Select value={customer} onChange={handleCustomerChange}>
              <MenuItem value={10}>Health</MenuItem>
              <MenuItem value={20}>Hugeine</MenuItem>
              <MenuItem value={30}>Nutrition</MenuItem>
            </Select>
          </FormControl>
          <Button
            endIcon={<PlayArrowIcon />}
            variant="contained"
            size="small"
            className="filter-buttons"
          >
            Apply Filters
          </Button>
          <Button
            endIcon={<RotateLeftIcon />}
            variant="contained"
            size="small"
            className="filter-buttons"
          >
            Reset Filters
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default Filtersnew;
