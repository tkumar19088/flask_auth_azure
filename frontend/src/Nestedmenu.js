import React, { useState } from "react";
// import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box, Button } from "@mui/material";

function NestedMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
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

  return (
    <div>
      <Box onClick={handleMenuClick}>Filter</Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
        <MenuItem onClick={handleSubMenuClick}>
          Submenu
          <ArrowRightIcon />
        </MenuItem>
      </Menu>
      <Menu
        anchorEl={subMenuAnchorEl}
        open={Boolean(subMenuAnchorEl)}
        onClose={handleSubMenuClose}
      >
        <MenuItem onClick={handleSubMenuClose}>Suboption 1</MenuItem>
        <MenuItem onClick={handleSubMenuClose}>Suboption 2</MenuItem>
      </Menu>
    </div>
  );
}

export default NestedMenu;
