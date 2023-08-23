import React from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  NativeSelect,
  Stack,
  Typography,
} from "@mui/material";

import "./OverviewHighRisk.css";
import MaterialUITabs from "../TabsMaterialui";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import BackupIcon from "@mui/icons-material/Backup";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import FormControl from "@mui/material/FormControl";

import FunctionalTabs from "../DataTable/FunctionalTabs";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import search from "../../images/search.png";
import MultiLevelSelect from "../Option2";
import NestedMenu from "../../Nestedmenu";
import NestedMenu2 from "./Nestedmenu2";
import "./OverviewHighRisk.css";
import Filtersdropdown from "./Filtersdropdown";

const OverviewHighRisk2 = () => {
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
      <Topbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className="bg-containerOHR">
          <Stack direction="row" justifyContent="space-between">
            <Box display="flex" fontSize={14} mx="1px">
              <Box mt="1px">
                <Button
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    borderRadius: "30px 30px ",
                    border: "#fff",
                    marginTop: "-6px",
                    height: "24px",
                  }}
                >
                  <ArrowBackIosNewIcon
                    sx={{
                      height: "12px",
                      width: "12px",
                      border: "1px solid",
                      borderRadius: "50%",
                      backgroundColor: "#FF007E",
                      color: "#fff",
                    }}
                  />
                  &#160;
                  <Typography fontSize={12}>Back</Typography>
                </Button>
              </Box>{" "}
              &#160;&#160;&#160;&#160;&#160;&#160;
              <Typography fontSize={14}>OOS Risk Dectection</Typography>
              <Typography>
                <ChevronRightIcon sx={{ height: "20px" }} />
              </Typography>
              <Typography fontSize={14}>Overview High-Risk SKUs</Typography>
            </Box>
          </Stack>
          <Stack
            className="ohr-stack"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            height={60}
          >
            <Typography color="#415A6C" className="ohr-title">
              Overview High-Risk SKUs
            </Typography>
            <Box className="ohr-rightbox">
              <Box
                textAlign="center"
                alignItems="center"
                justifyContent="center"
                display="flex"
                className="search-align"
              >
                <Search
                  className="serch-border"
                  sx={{
                    backgroundColor: "#F5F6F8",
                    // borderRadius: "20px 20px",
                    border: "1px solid",
                    display: "flex",
                    color: "#415A6C",
                    marginTop: "13px",
                  }}
                >
                  <StyledInputBase
                    className="serch-name"
                    // {{border:"1px solid"}}
                    placeholder="Search Sku by name"
                    inputProps={{ "aria-label": "search" }}
                  />{" "}
                  <img src={search} alt="search" className="search-icon" />
                </Search>
              </Box>
              <Box className="nestmenu-box">
                <Filtersdropdown />
              </Box>
              <Box>
                <Button
                  variant="contained"
                  size="small"
                  className="btn-exp"
                  style={{ textDecoration: "none", textTransform: "none" }}
                >
                  Export Data
                </Button>
              </Box>
            </Box>
          </Stack>
          <FunctionalTabs />
        </Grid>
      </Grid>
    </div>
  );
};

export default OverviewHighRisk2;
