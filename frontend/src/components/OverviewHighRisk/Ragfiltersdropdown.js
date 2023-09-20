import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import { Box, Button, Grid, Typography } from "@mui/material";
import "./Filtersdropdown.css";
import {
  fetchofilteredverviewhighriskdata,
  resetragfiltersohr,
  flagragfiltersohr,
} from "../../store/actions/sidebarActions";
import { useSelector, useDispatch } from "react-redux";

function Ragfilters() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sidebar.overviewhighriskdata);
  const isragfilterohr = useSelector((state) => state.sidebar.isragfilterohr);
  console.log(isragfilterohr);

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

  const [selectedCW, setselectedCW] = useState({});
  const [selectedCW1, setselectedCW1] = useState({});
  const [selectedCW2, setselectedCW2] = useState({});
  const [selectedCW3, setselectedCW3] = useState({});

  const handleCWR = () => {
    setcwr(!cwr);
    if (!cwr === true) {
      const updatedObj = { ...selectedCW, ["R"]: "R" };
      setselectedCW(updatedObj);
    } else {
      delete selectedCW["R"];
    }
  };
  const handleCWA = () => {
    setcwa(!cwa);
    if (!cwa === true) {
      const updatedObj = { ...selectedCW, ["A"]: "A" };
      setselectedCW(updatedObj);
    } else {
      delete selectedCW["A"];
    }
  };
  const handleCWG = () => {
    setcwg(!cwg);
    if (!cwg === true) {
      const updatedObj = { ...selectedCW, ["G"]: "G" };
      setselectedCW(updatedObj);
    } else {
      delete selectedCW["G"];
    }
  };

  const handleCW1R = () => {
    setcw1r(!cw1r);
    if (!cw1r === true) {
      const updatedObj = { ...selectedCW1, ["R"]: "R" };
      setselectedCW1(updatedObj);
    } else {
      delete selectedCW1["R"];
    }
  };
  const handleCW1A = () => {
    setcw1a(!cw1a);
    if (!cw1a === true) {
      const updatedObj = { ...selectedCW1, ["A"]: "A" };
      setselectedCW1(updatedObj);
    } else {
      delete selectedCW1["A"];
    }
  };
  const handleCW1G = () => {
    setcw1g(!cw1g);
    if (!cw1g === true) {
      const updatedObj = { ...selectedCW1, ["G"]: "G" };
      setselectedCW1(updatedObj);
    } else {
      delete selectedCW1["G"];
    }
  };

  // console.log(selectedCW1);

  const handleCW2R = () => {
    setcw2r(!cw2r);
    if (!cw2r === true) {
      const updatedObj = { ...selectedCW2, ["R"]: "R" };
      setselectedCW2(updatedObj);
    } else {
      delete selectedCW2["R"];
    }
  };
  const handleCW2A = () => {
    setcw2a(!cw2a);
    if (!cw2a === true) {
      const updatedObj = { ...selectedCW2, ["A"]: "A" };
      setselectedCW2(updatedObj);
    } else {
      delete selectedCW2["A"];
    }
  };
  const handleCW2G = () => {
    setcw2g(!cw2g);
    if (!cw2g === true) {
      const updatedObj = { ...selectedCW2, ["G"]: "G" };
      setselectedCW2(updatedObj);
    } else {
      delete selectedCW2["G"];
    }
  };

  // console.log(selectedCW2);

  const handleCW3R = () => {
    setcw3r(!cw3r);
    if (!cw3r === true) {
      const updatedObj = { ...selectedCW3, ["R"]: "R" };
      setselectedCW3(updatedObj);
    } else {
      delete selectedCW3["R"];
    }
  };
  const handleCW3A = () => {
    setcw3a(!cw3a);
    if (!cw3a === true) {
      const updatedObj = { ...selectedCW3, ["A"]: "A" };
      setselectedCW3(updatedObj);
    } else {
      delete selectedCW3["A"];
    }
  };
  const handleCW3G = () => {
    setcw3g(!cw3g);
    if (!cw3g === true) {
      const updatedObj = { ...selectedCW3, ["G"]: "G" };
      setselectedCW3(updatedObj);
    } else {
      delete selectedCW3["G"];
    }
  };

  // console.log(selectedCW3);

  const handleApply = () => {
    var cwLength = Object.keys(selectedCW).length;
    var cwquery = [];
    if (cwLength > 0) {
      for (const key in selectedCW) {
        if (selectedCW.hasOwnProperty(key)) {
          const value = selectedCW[key];
          cwquery.push(value);
        }
      }
    }

    var cw1Length = Object.keys(selectedCW1).length;
    var cw1query = [];
    if (cw1Length > 0) {
      for (const key in selectedCW1) {
        if (selectedCW1.hasOwnProperty(key)) {
          const value = selectedCW1[key];
          cw1query.push(value);
        }
      }
    }

    var cw2Length = Object.keys(selectedCW2).length;
    var cw2query = [];
    if (cw2Length > 0) {
      for (const key in selectedCW2) {
        if (selectedCW2.hasOwnProperty(key)) {
          const value = selectedCW2[key];
          cw2query.push(value);
        }
      }
    }

    var cw3Length = Object.keys(selectedCW3).length;
    var cw3query = [];
    if (cw3Length > 0) {
      for (const key in selectedCW3) {
        if (selectedCW3.hasOwnProperty(key)) {
          const value = selectedCW3[key];
          cw3query.push(value);
        }
      }
    }

    const filterCondition = (item) => cwquery.includes(item["RAG CW"]);
    const filterCondition1 = (item) => cw1query.includes(item["RAG CW+1"]);
    const filterCondition2 = (item) => cw2query.includes(item["RAG CW+2"]);
    const filterCondition3 = (item) => cw3query.includes(item["RAG CW+3"]);
    var allfilters = [];
    if (cwquery.length > 0) {
      allfilters.push(filterCondition);
    }
    if (cw1query.length > 0) {
      allfilters.push(filterCondition1);
    }
    if (cw2query.length > 0) {
      allfilters.push(filterCondition2);
    }
    if (cw3query.length > 0) {
      allfilters.push(filterCondition3);
    }

    console.log(allfilters);
    // const filteredData = data.filter(filterCondition);

    const filteredData = data.filter((item) => {
      // Apply all filters conditionally
      return allfilters.every((filter) => filter(item));
    });

    console.log(filteredData);
    dispatch(fetchofilteredverviewhighriskdata(filteredData));
    dispatch(flagragfiltersohr(true));
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
    dispatch(resetragfiltersohr());
    dispatch(flagragfiltersohr(false));
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // dispatch(flagragfiltersohr(false));
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
              onClick={handleApply}
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
              onClick={handleMenuClose}
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
