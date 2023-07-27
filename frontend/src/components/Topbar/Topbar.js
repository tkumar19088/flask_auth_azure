import React from "react";

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

const Topbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another URL
    navigate("/");
  };
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

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
        {/* search................................ ..........*/}
        <Box>
          <Search
            sx={{
              backgroundColor: "#F5F6F8",
              borderRadius: "20px 20px",
              display: "flex",
              color: "#415A6C",
            }}
          >
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />{" "}
            <img src={search} alt="search" className="search-icon" />
          </Search>
        </Box>
        &#160;&#160;
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {/* <Badge badgeContent={17} color="error"> */}
          <img src={icon} alt="notification" className="notification" />
          {/* </Badge> */}
          <HelpIcon
            className="help-icon"
            style={{ width: "30px", height: "30px", color: "#415A6C" }}
          />
          &#160;
          <ArrowDropDownSharpIcon
            className="helpdown-icon"
            sx={{ color: "#466072" }}
          />
          &#160;
          <Box className="profile">
            <PersonIcon
              sx={{
                border: "1px solid #DADADA",
                borderRadius: "2px 2px",
                color: "#FF007E",
                backgroundColor: "#DADADA",
              }}
            />
            &#160;
            <ArrowDropDownSharpIcon sx={{ color: "#466072" }} />
          </Box>
        </Box>
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
