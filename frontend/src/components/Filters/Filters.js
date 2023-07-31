import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import MenuItem from "@mui/material/MenuItem"; // Import MenuItem

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";

import "./Filters.css";

const Filters = () => {
  const navigate = useNavigate();
  const [scenarios, setScenarios] = useState(false);

  const handleClick = () => {
    setScenarios(true);
  };

  const handleNavigateOverviewHighRisk = () => {
    navigate("/overviewhighrisk");
  };

  const handleNavigateIrregularPO = () => {
    navigate("/irregularpo");
  };

  return (
    <div>
      <Typography
        fontSize={{ xs: 28, lg: 28, xl: 36 }}
        color="#415A6C"
        marginLeft="3px"
        p={1}
      >
        Filters
      </Typography>
      <Grid container mt={-2}>
        <Grid
          className="filter-maingrid"
          container
          spacing={3}
          xs={12}
          sx={{
            boxShadow: 3,
            height: "6rem",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "#fff",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            // p: 1,
            m: 1,
            borderRadius: 2,
            fontSize: "0.875rem",
            fontWeight: "700",
            // border: "1px solid red",
          }}
        >
          <Grid item xs={3}>
            <Box sx={{ minWidth: 120 }} ml={2}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  <Typography
                    fontSize={{ xs: 22, lg: 22, xl: 28 }}
                    mt={-1}
                    ml={{ xs: "10px", lg: "10px", xl: "10px" }}
                  >
                    Customer
                  </Typography>
                </InputLabel>
                <NativeSelect
                  className="brand-tittle"
                  defaultValue={10}
                  inputProps={{
                    name: "Customer",
                    id: "uncontrolled-native",
                  }}
                  style={{ backgroundColor: "", marginBottom: "20px" }}
                >
                  <option value="Amazon" className="brand-potion">
                    &#160;&#160;Amazon
                  </option>
                  <option value="Tesco" className="brand-potion">
                    &#160;&#160;Tesco
                  </option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  <Typography
                    fontSize={{ xs: 22, lg: 22, xl: 28 }}
                    mt={-1}
                    ml={{ xs: "10px", lg: "14px", xl: "13px" }}
                  >
                    Location
                  </Typography>
                </InputLabel>
                <NativeSelect
                  className="brand-tittle"
                  defaultValue={10}
                  inputProps={{
                    name: "Country",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value="United Kingdom" className="brand-potion">
                    {" "}
                    &#160;&#160;United Kingdom
                  </option>
                  <option value="United Kingdom" className="brand-potion">
                    {" "}
                    &#160;&#160;USA
                  </option>
                  <option value="United Kingdom" className="brand-potion">
                    {" "}
                    &#160;&#160;UK
                  </option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  <Typography
                    fontSize={{ xs: 22, lg: 22, xl: 28 }}
                    mt={-1}
                    ml={{ xs: "10px", lg: "10px", xl: "13px" }}
                  >
                    Brand
                  </Typography>
                </InputLabel>
                <NativeSelect
                  className="brand-tittle"
                  defaultValue={10}
                  inputProps={{
                    name: "Brand",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value="AirWick" className="brand-potion">
                    &#160;&#160;AirWick
                  </option>
                  <option value="Durex" className="brand-potion">
                    {" "}
                    &#160;&#160;Durex
                  </option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={3} textAlign="center" alignItems="center">
            <Box
              flexDirection="row"
              display="flex"
              border="1px solid #FF007E"
              backgroundColor="#FF007E"
              color="#fff"
              borderRadius="5px 5px"
              mt={{ xs: "22px", xl: "13px" }}
              width={{ xs: "160px", lg: "160px", xl: "200px" }}
              height={{ xl: "35px" }}
              ml={{ xs: 0, lg: "45px" }}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                onClick={handleClick}
                ml={{ xs: "20px" }}
                mt={{ xs: "3px", xl: "5px" }}
                fontSize={{ xs: "12px", lg: "12px", xl: "17px" }}
              >
                APPLY FILTERS
              </Typography>
              <PlayArrowIcon
                sx={{ marginLeft: { xs: "15px" }, marginTop: { xl: "4px" } }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {scenarios && (
        <Grid
          container
          p={1}
          spacing={1}
          mt={{ lg: "1px" }}
          justifyContent="space-between"
        >
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <Box className="btn-fltr" onClick={handleNavigateIrregularPO}>
              <Typography color="#fff" className="fltr-downbtns">
                {" "}
                Irregular PO
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} onClick={handleNavigateOverviewHighRisk}>
            <Box className="btn-fltr">
              <Typography color="#fff" className="fltr-downbtns">
                {" "}
                High Risk SKU's
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      )}
    </div>
  );
};

export default Filters;
