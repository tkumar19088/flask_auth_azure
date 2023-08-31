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
import "./Filtersdropdown.css";
import { Dropdown } from "@mui/base";

function Ragfilters() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
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
        RAG Filters
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <Grid p={2} className="filter-downbox">
          <Grid item xs={2} lg={1}>
            <Box sx={{ minWidth: 200 }} className="filter-dropdown">
              <Box mb={2}>
                <Typography className="ragfilter-title">CW</Typography>
                <Box display="flex" justifyContent="space-around">
                  <Box className="grag" backgroundColor="#57a957" color="#fff">
                    G
                  </Box>
                  <Box className="grag" backgroundColor="#F44444" color="#fff">
                    R
                  </Box>
                  <Box className="grag" backgroundColor="orange" color="#fff">
                    A
                  </Box>
                </Box>
              </Box>
              <Box mb={2}>
                <Typography className="ragfilter-title">CW+1</Typography>
                <Box display="flex" justifyContent="space-around">
                  <Box className="grag" backgroundColor="#57a957" color="#fff">
                    G
                  </Box>
                  <Box className="grag" backgroundColor="#F44444" color="#fff">
                    R
                  </Box>
                  <Box className="grag" backgroundColor="orange" color="#fff">
                    A
                  </Box>
                </Box>
              </Box>
              <Box mb={2}>
                <Typography className="ragfilter-title">CW+2</Typography>
                <Box display="flex" justifyContent="space-around">
                  <Box className="grag" backgroundColor="#57a957" color="#fff">
                    G
                  </Box>
                  <Box className="grag" backgroundColor="#F44444" color="#fff">
                    R
                  </Box>
                  <Box className="grag" backgroundColor="orange" color="#fff">
                    A
                  </Box>
                </Box>
              </Box>
              <Box mb={2}>
                <Typography className="ragfilter-title">CW+3</Typography>
                <Box display="flex" justifyContent="space-around">
                  <Box className="grag" backgroundColor="#57a957" color="#fff">
                    G
                  </Box>
                  <Box className="grag" backgroundColor="#F44444" color="#fff">
                    R
                  </Box>
                  <Box className="grag" backgroundColor="orange" color="#fff">
                    A
                  </Box>
                </Box>
              </Box>
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

export default Ragfilters;
