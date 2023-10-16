import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Planning.css";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { useNavigate } from "react-router-dom";
import {
  fetchoverviewhighriskdata,
  updateloader,
  updateexporttabledata,
  fetchbusinessempty,
  fetchlocationempty,
  fetchtaburl,
  updateapplyfilterserror,
  updatetabname,
  fetchoirregulardata,
} from "../../store/actions/sidebarActions";
import { useSelector, useDispatch } from "react-redux";
import Badge from "@mui/material/Badge";

const Planning = ({ filterStatus }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [oosriskselectedBG, setoosriskselectedBG] = useState(false);
  const [irregularselectedBG, setirregularselectedBG] = useState(false);
  const business = useSelector((state) => state.sidebar.business);
  const location = useSelector((state) => state.sidebar.location);
  const apply = useSelector((state) => state.sidebar.apply);
  const searchValue = useSelector((state) => state.sidebar.searchvalue);
  const tabname = useSelector((state) => state.sidebar.tabname);

  const handleOOSRisk = () => {
    if (!business) {
      dispatch(fetchbusinessempty(true));
    }
    if (!location) {
      dispatch(fetchlocationempty(true));
    }
    if (!business || !location) {
      return;
    }
    if (!apply) {
      dispatch(updateapplyfilterserror(true));
      return;
    }
    filterStatus(true);
    setirregularselectedBG(false);
    setoosriskselectedBG(true);
    fetchData();
  };
  const fetchData = async () => {
    dispatch(updateloader(true));
    var data = {
      customer: 0,
      search: "",
      tabname: "overview",
      skulist: [],
      rbsku: "",
    };
    try {
      const url = "https://testingsmartola.azurewebsites.net/getoverview";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        // setuserDetails(json.name);
        dispatch(updatetabname("overview"));
        dispatch(fetchoverviewhighriskdata(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
        navigate("/overviewhighrisk");
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleirregularpo = async () => {
    filterStatus(true);
    setoosriskselectedBG(false);
    setirregularselectedBG(true);

    dispatch(updateloader(true));
    var data = {};
    try {
      const url = "https://testingsmartola.azurewebsites.net/getirrpodata";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        // setuserDetails(json.name);
        // dispatch(updatetabname("irregular"));
        dispatch(fetchoirregulardata(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
        navigate("/irregular");
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleReallocation = () => {
    filterStatus(true);
    setoosriskselectedBG(false);
    setirregularselectedBG(false);
  };

  const handleSellinforecast = async () => {
    navigate("/sellinforecast");
  };

  const handleSelloutforecast = () => {
    navigate("/selloutforecast");
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <Grid>
        <Grid
          container
          spacing={{ md: 2, lg: 2, xl: 5 }}
          item
          xs={12}
          mt={1}
          className="fcst-bx"
        >
          <Grid item xs={4}>
            <Box className="pln-cards-header">
              <Typography color="#fff" className="plan-title">
                Forecast
              </Typography>
            </Box>
            <Box className="pln-card-bd" onClick={handleSellinforecast}>
              <Box className="pln-cards-cnt">
                <Typography
                  fontSize={{ lg: 14, xs: 12 }}
                  className="plan-minititile"
                >
                  Sell-In Forecast
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />
              </Box>
            </Box>
            <Box className="pln-card-bd" onClick={handleSelloutforecast}>
              <Box className="pln-cards-cnt">
                <Typography
                  fontSize={{ lg: 14, xs: 12 }}
                  className="plan-minititile"
                >
                  Sell-Out Forecast
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="pln-cards-header">
              <Typography color="#fff" className="plan-title">
                Mitigate
              </Typography>
            </Box>{" "}
            <Box
              className="pln-card-bd"
              onClick={handleOOSRisk}
              style={{
                backgroundColor: oosriskselectedBG ? "#ff007e" : "#fff",
                "&:hover": {
                  backgroundColor: "#FF007F",
                },
                color: oosriskselectedBG ? "#fff" : "black",
              }}
            >
              <Box className="pln-cards-cnt">
                <Typography
                  fontSize={{ lg: 14, xs: 12 }}
                  className="plan-minititile"
                >
                  OOS Mitigation SKU level
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />
              </Box>
            </Box>
            <Box
              className="pln-card-bd"
              onClick={handleirregularpo}
              style={{
                backgroundColor: irregularselectedBG ? "#ff007e" : "#fff",
                color: irregularselectedBG ? "#fff" : "black",
              }}
            >
              <Box className="pln-cards-cnt">
                <Typography
                  fontSize={{ lg: 14, xs: 12 }}
                  className="plan-minititile"
                >
                  Irregular PO
                </Typography>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box className="pln-cards-header">
              <Typography color="#fff" className="plan-title">
                Promote
              </Typography>
            </Box>{" "}
            <Box
              className="pln-card-bdpromotion"
              onClick={handleReallocation}
              style={{
                backgroundColor: "#fff",
                color: "black",
              }}
            >
              <Box className="">
                <Badge badgeContent="Coming Soon" className="systamatic-badge">
                  <Typography
                    fontSize={{ lg: 14, xs: 12 }}
                    className="plan-minititile"
                  >
                    SKU Prioritization for Promotion
                  </Typography>
                </Badge>
              </Box>
              <Box className="pln-cards-cnt">
                <GridViewRoundedIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Planning;
