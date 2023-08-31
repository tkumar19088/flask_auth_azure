import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";

import "./Filters.css";

const Filters = () => {
  const navigate = useNavigate();

  return (
    <div className="filter-main">
      <Typography
        className="filter-title"
        color="#415A6C"
        marginBottom="20px"
        marginTop="10px"
        // p={1}
      >
        Filters
      </Typography>
      <Grid container mt={-2}>
        <Grid
          container
          spacing={3}
          item
          xs={12}
          sx={{
            boxShadow: 3,
            height: "6rem",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "#fff",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            // p: 1,
            m: 0,
            borderRadius: 2,
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          <Grid item xs={3}>
            <Box sx={{ minWidth: 120 }} ml={2}>
              <FormControl fullWidth>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  // sx={{ marginLeft:"30px" }}
                >
                  <Typography
                    fontSize={22}
                    mt={-1}
                    className="filter-inside-title"
                  >
                    Business Unit
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
                  <option value="Health">Health</option>
                  <option value="Hygeine">Hygeine</option>
                  <option value="Nutrition">Nutrition</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ minWidth: 120 }}>
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
                  <option value="India">India</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ minWidth: 120 }}>
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
                    name: "Brand",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value="Amazon">Amazon</option>
                  <option value="Tesco">Tesco</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={3} textAlign="center" alignItems="center">
            <Box className="btn-filters">
              <Typography className="filter-btn-name">
                APPLY FILTERS{" "}
              </Typography>{" "}
              <PlayArrowIcon />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Filters;
