import React, { useState } from "react";
// import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box, Button, Typography } from "@mui/material";

function NestedMenu2() {
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
      <Button size="large" variant="contained" onClick={handleMenuClick}>
        Filters
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleCustomerClick} className="mainMenu">
          Customer <ArrowRightIcon />
        </MenuItem>
        <MenuItem onClick={handleLocationClick} className="mainMenu">
          Location <ArrowRightIcon />
        </MenuItem>
        <MenuItem onClick={handleSubMenuClick} className="mainMenu">
          Brand
          <ArrowRightIcon />
        </MenuItem>
      </Menu>
      <Menu
        anchorEl={subMenuAnchorEl}
        open={Boolean(subMenuAnchorEl)}
        onClose={handleSubMenuClose}
      >
        <MenuItem onClick={handleSubMenuClose} className="mainMenu">
          AirWick
        </MenuItem>
        <MenuItem onClick={handleSubMenuClose} className="mainMenu">
          Durex
        </MenuItem>
      </Menu>
      <Menu
        anchorEl={subcustomerEl}
        open={Boolean(subcustomerEl)}
        onClose={handleCustomerSubMenuClose}
      >
        <MenuItem onClick={handleCustomerSubMenuClose} className="mainMenu">
          Amazon
        </MenuItem>
        <MenuItem onClick={handleCustomerSubMenuClose} className="mainMenu">
          Tesco
        </MenuItem>
      </Menu>
      <Menu
        anchorEl={subLocation}
        open={Boolean(subLocation)}
        onClose={handleLocationSubMenuClose}
      >
        <MenuItem onClick={handleLocationSubMenuClose} className="mainMenu">
          United Kingdom
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NestedMenu2;
