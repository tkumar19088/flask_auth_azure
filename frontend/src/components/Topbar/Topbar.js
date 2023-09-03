import React, { useState } from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";

import HelpIcon from "@mui/icons-material/Help";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import PersonIcon from "@mui/icons-material/Person";

import { styled, alpha } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";

import "./Topbar.css";
import Logo from "../../images/Logo-bar.png";
import icon from "../../images/notification.png";
import search from "../../images/search.png";
import { useNavigate } from "react-router-dom";

import { Button, Menu, MenuItem, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const userDetails = useSelector((state) => state.sidebar.userDetails);
  console.log(userDetails);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another URL
    navigate("/");
  };

  const handleLogout = () => {};

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <div>
      {/* <AppBar position="static"> */}
      <Toolbar>
        <img src={Logo} alt="logo" className="logo" onClick={handleClick} />
        <Box sx={{ flexGrow: 1 }} />
        <Typography color="#415A6C">{userDetails.Name}</Typography>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Box className="profile">
            <PersonIcon
              sx={{
                border: "1px solid #DADADA",
                borderRadius: "50%",
                color: "#FF007E",
                backgroundColor: "#DADADA",
              }}
            />
            &#160;
            <ArrowDropDownSharpIcon
              sx={{ color: "#466072" }}
              onClick={handleMenuOpen}
            />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              className="profile-logut"
            >
              <MenuItem
                onClick={handleMenuClose}
                className="profile-logout-title"
              >
                <Button
                  onClick={handleLogout}
                  startIcon={<LogoutIcon />}
                  size="small"
                >
                  Logout
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <div></div>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            // aria-controls={mobileMenuId}
            aria-haspopup="true"
            // onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {/* </AppBar> */}
    </div>
  );
};

export default Topbar;
