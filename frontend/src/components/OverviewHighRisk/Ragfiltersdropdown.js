import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import "./Filtersdropdown.css";
import { useSelector, useDispatch } from "react-redux";


function Ragfilters() {
  const [anchorEl, setAnchorEl] = useState(null);

  const [cwr, setcwr] = useState(false);
  const [cwa, setcwa] = useState(false);
  const [cwg, setcwg] = useState(false);

  const [cw1r, setcw1r] = useState(false);
  const [cw1a, setcw1a] = useState(false);
  const [cw1g, setcw1g] = useState(false);

  const [cw2r, setcw2r] = useState(false);
  const [cw2a, setcw2a] = useState(false);
  const [cw2g, setcw2g] = useState(false);

  const [cw3r, setcw3r] = useState(false);
  const [cw3a, setcw3a] = useState(false);
  const [cw3g, setcw3g] = useState(false);

  var selectedCW = [];
  const handleCWR = () => {
    setcwr(!cwr);
    getcwr();
  };
  const getcwr = () => {
    if (cwr == true) {
      selectedCW.push({ key: "cwr", value: cwr });
    }
  };
  const handleCWA = () => {
    setcwa(!cwa);
    if (cwa === true) {
      selectedCW.push("cwa", cwa);
    }
  };
  const handleCWG = () => {
    setcwg(!cwg);
    if (cwr === true) {
      selectedCW.push("cwg, cwg");
    }
  };
  console.log(selectedCW);

  if (cwr === true) {
    selectedCW.push(selectedCW);
  }

  const handleCW1R = () => {
    setcw1r(!cw1r);
  };
  const handleCW1A = () => {
    setcw1a(!cw1a);
  };
  const handleCW1G = () => {
    setcw1g(!cw1g);
  };

  const handleCW2R = () => {
    setcw2r(!cw2r);
  };
  const handleCW2A = () => {
    setcw2a(!cw2a);
  };
  const handleCW2G = () => {
    setcw2g(!cw2g);
  };

  const handleCW3R = () => {
    setcw3r(!cw3r);
  };
  const handleCW3A = () => {
    setcw3a(!cw3a);
  };
  const handleCW3G = () => {
    setcw3g(!cw3g);
  };

  const handleReset = () => {
    setcwr(false);
    setcwa(false);
    setcwg(false);

    setcw1r(false);
    setcw1a(false);
    setcw1g(false);

    setcw2r(false);
    setcw2a(false);
    setcw2g(false);

    setcw3r(false);
    setcw3a(false);
    setcw3g(false);
  };

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
                <Box display="flex" justifyContent="space-evenly">
                  <Typography className="ragfilter-title first">CW</Typography>

                  <Box
                    className="grag"
                    backgroundColor="#F44444"
                    color="#fff"
                    sx={{
                      cursor: "pointer",
                      border: cwr ? "2px solid #415A6C" : "",
                    }}
                    onClick={handleCWR}
                  >
                    R
                  </Box>
                  <Box
                    className="grag"
                    backgroundColor="orange"
                    color="#fff"
                    sx={{
                      cursor: "pointer",
                      border: cwa ? "2px solid #415A6C" : "",
                    }}
                    onClick={handleCWA}
                  >
                    A
                  </Box>
                  <Box
                    className="grag"
                    backgroundColor="#57a957"
                    color="#fff"
                    sx={{
                      cursor: "pointer",
                      border: cwg ? "2px solid #415A6C" : "",
                    }}
                    onClick={handleCWG}
                  >
                    G
                  </Box>
                </Box>
              </Box>
              <Box mb={2}>
                <Box display="flex" justifyContent="space-around">
                  <Typography className="ragfilter-title">CW+1</Typography>

                  <Box
                    className="grag"
                    backgroundColor="#F44444"
                    color="#fff"
                    sx={{
                      cursor: "pointer",
                      border: cw1r ? "2px solid #415A6C" : "",
                    }}
                    onClick={handleCW1R}
                  >
                    R
                  </Box>
                  <Box
                    className="grag"
                    backgroundColor="orange"
                    color="#fff"
                    sx={{
                      cursor: "pointer",
                      border: cw1a ? "2px solid #415A6C" : "",
                    }}
                    onClick={handleCW1A}
                  >
                    A
                  </Box>
                  <Box
                    className="grag"
                    backgroundColor="#57a957"
                    color="#fff"
                    sx={{
                      cursor: "pointer",
                      border: cw1g ? "2px solid #415A6C" : "",
                    }}
                    onClick={handleCW1G}
                  >
                    G
                  </Box>
                </Box>
              </Box>
              <Box mb={2}>
                <Box display="flex" justifyContent="space-around">
                  <Typography className="ragfilter-title">CW+2</Typography>

                  <Box
                    className="grag"
                    backgroundColor="#F44444"
                    color="#fff"
                    sx={{
                      cursor: "pointer",
                      border: cw2r ? "2px solid #415A6C" : "",
                    }}
                    onClick={handleCW2R}
                  >
                    R
                  </Box>
                  <Box
                    className="grag"
                    backgroundColor="orange"
                    color="#fff"
                    sx={{
                      cursor: "pointer",
                      border: cw2a ? "2px solid #415A6C" : "",
                    }}
                    onClick={handleCW2A}
                  >
                    A
                  </Box>
                  <Box
                    className="grag"
                    backgroundColor="#57a957"
                    color="#fff"
                    sx={{
                      cursor: "pointer",
                      border: cw2g ? "2px solid #415A6C" : "",
                    }}
                    onClick={handleCW2G}
                  >
                    G
                  </Box>
                </Box>
              </Box>
              <Box mb={2}>
                <Box display="flex" justifyContent="space-around">
                  <Typography className="ragfilter-title">CW+3</Typography>

                  <Box
                    className="grag"
                    backgroundColor="#F44444"
                    color="#fff"
                    sx={{
                      cursor: "pointer",
                      border: cw3r ? "2px solid #415A6C" : "",
                    }}
                    onClick={handleCW3R}
                  >
                    R
                  </Box>
                  <Box
                    className="grag"
                    backgroundColor="orange"
                    color="#fff"
                    sx={{
                      cursor: "pointer",
                      border: cw3a ? "2px solid #415A6C" : "",
                    }}
                    onClick={handleCW3A}
                  >
                    A
                  </Box>
                  <Box
                    className="grag"
                    backgroundColor="#57a957"
                    color="#fff"
                    sx={{
                      cursor: "pointer",
                      border: cw3g ? "2px solid #415A6C" : "",
                    }}
                    onClick={handleCW3G}
                  >
                    G
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Box className="filterdropdown-insidebtn">
            <Button
              variant="contained"
              size="small"
              className="btn-minibtns"
              sx={{
                backgroundColor: "#415A6C",
              }}
            >
              Apply
            </Button>
            <Button
              variant="contained"
              size="small"
              className="btn-minibtns"
              sx={{
                backgroundColor: "#415A6C",
              }}
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              size="small"
              className="btn-minibtns"
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
