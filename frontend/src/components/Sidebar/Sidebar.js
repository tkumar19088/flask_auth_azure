import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Log from "../../images/Logout.png";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchSellinForecast,
  fetchSelloutForecast,
  fetchOOSRisk,
  fetchIrregular,
  fetchReallocation,
  fetchexpandeditem,
} from "../../store/actions/sidebarActions";

const Sidebar = () => {
  const sellinForecastVal = useSelector(
    (state) => state.sidebar.sellinforecast
  );
  const selloutForecastVal = useSelector(
    (state) => state.sidebar.selloutforecast
  );
  const oosriskVal = useSelector((state) => state.sidebar.oosrisk);
  const irregularpoVal = useSelector((state) => state.sidebar.irregularpo);
  const reallocationVal = useSelector((state) => state.sidebar.reallocation);

  const expandedItem = useSelector((state) => state.sidebar.expandedItem);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [issellinSelected, setissellinSelected] = useState(sellinForecastVal);
  const [isselloutSelected, setisselloutSelected] =
    useState(selloutForecastVal);
  const [oosrick, setoosrick] = useState(oosriskVal);
  const [irregular, setirregular] = useState(irregularpoVal);
  const [reallocation, setreallocation] = useState(reallocationVal);
  const [forecast, setforecast] = useState(false);
  const currentUrl = window.location.href;
  console.log(currentUrl);
  // if (currentUrl.includes("overviewhighrisk")) {
  //   setoosrick(true);
  // }
  const handleOOSRick = () => {
    dispatch(fetchOOSRisk(true));

    setreallocation(false);
    setirregular(false);

    // setoosrick(true);
  };
  const handleIrregular = () => {
    dispatch(fetchIrregular(true));

    setoosrick(false);
    setreallocation(false);

    // setirregular(true);
  };
  const handleReallocation = () => {
    dispatch(fetchReallocation(true));

    setoosrick(false);
    setirregular(false);

    // setreallocation(true);
  };
  const handleSelloutForecasting = () => {
    dispatch(fetchSelloutForecast(true));
    setissellinSelected(false);
    setisselloutSelected(true);
    navigate("/selloutforecast");
  };
  const handleSellinForecasting = () => {
    dispatch(fetchSellinForecast(true));

    setisselloutSelected(false);
    setissellinSelected(true);
    navigate("/sellinforecast");
  };

  const handleDashboard = () => {
    dispatch(fetchexpandeditem(null));
    navigate("/");
  };

  const handleForecast = () => {
    setforecast(!forecast);
  };

  const handleMenuItemClick = (itemId) => {
    // Update the selected item when a menu item is clicked
    if (expandedItem === itemId) {
      dispatch(fetchexpandeditem(null));
    } else {
      dispatch(fetchexpandeditem(itemId));
    }
  };

  return (
    <div className="sidebar" style={{ position: "relative" }}>
      <div
        className="s-h2"
        onClick={handleDashboard}
        style={{ backgroundColor: "#415A6C", color: "#fff" }}
      >
        <GridViewRoundedIcon className="grid-icon1" />
        <Typography fontSize={{ lg: 14, xs: 9 }} className="sidebar-minititle">
          Dashboard
        </Typography>
      </div>

      <div style={{ marginInline: "20px", marginTop: "20px" }}>
        <Accordion
          className={expandedItem === 1 ? "acrdn-main expanded" : "acrdn-main"}
          key={1}
          expanded={expandedItem === 1}
          onChange={() => handleMenuItemClick(1)}
        >
          <AccordionSummary
            onClick={handleForecast}
            className="acrdn-s"
            expandIcon={<ArrowDropDownIcon />}
            sx={{
              color: "#fff",
              height: "35px",
              borderRadius: "5px 5px 0px 0px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <GridViewRoundedIcon className="grid-icon" />

              <Typography
                fontSize={{ lg: 14, xs: 9 }}
                marginTop={{ lg: "3px", xs: "6px" }}
                width={{ lg: "100%", xs: "100%" }}
                className="sidebar-minititle"
              >
                Forecast
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              borderTop: "1px solid #B7C3CA ",
              borderBottom: "1px solid #B7C3CA ",
              backgroundColor: issellinSelected
                ? "rgb(70, 96, 114)"
                : "#E7E9EE",
              color: issellinSelected
                ? "rgb(255, 255, 255)"
                : "rgba(0, 0, 0, 0.87)",
              cursor: "pointer",
            }}
            className="selectedMenu"
            onClick={handleSellinForecasting}
          >
            <Typography
              mx="25px"
              fontSize={{ lg: "13px", xs: 10 }}
              p="5px 0 0 0"
            >
              Sell-in forecast
            </Typography>
          </AccordionDetails>
          <AccordionDetails
            sx={{
              borderBottom: "1px solid #B7C3CA",
              backgroundColor: isselloutSelected
                ? "rgb(70, 96, 114)"
                : "#E7E9EE",
              color: isselloutSelected
                ? "rgb(255, 255, 255)"
                : "rgba(0, 0, 0, 0.87)",
              cursor: "pointer",
            }}
            className="selectedMenu"
            onClick={handleSelloutForecasting}
          >
            <Typography mx="25px" fontSize={{ lg: 13, xs: 10 }} p="5px 0 0 0">
              Sell-out forecast
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ marginInline: "20px", marginTop: "20px" }}>
        <Accordion
          className={expandedItem === 2 ? "acrdn-main expanded" : "acrdn-main"}
          key={2}
          expanded={expandedItem === 2}
          onChange={() => handleMenuItemClick(2)}
        >
          <AccordionSummary
            className="acrdn-s"
            expandIcon={<ArrowDropDownIcon />}
            sx={{
              color: "#fff",
              height: "35px",
              borderRadius: "5px 5px 0px 0px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <GridViewRoundedIcon className="grid-icon" />

              <Typography
                fontSize={{ lg: 14, xs: 9 }}
                marginTop={{ lg: "3px", xs: "6px" }}
                width={{ lg: "100%", xs: "100%" }}
                className="sidebar-minititle"
              >
                Monitor
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              borderTop: "1px solid #B7C3CA ",
              borderBottom: "1px solid #B7C3CA ",
              backgroundColor: oosrick ? "rgb(70, 96, 114)" : "#E7E9EE",
              color: oosrick ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.87)",
              cursor: "pointer",
            }}
            className="selectedMenu"
            onClick={handleOOSRick}
          >
            <Typography
              mx="26px"
              fontSize={{ lg: "13px", xs: 10 }}
              p="5px 0 0 0"
            >
              OOS Risk Detection
            </Typography>
          </AccordionDetails>
          <AccordionDetails
            sx={{
              borderBottom: "1px solid #B7C3CA",
              backgroundColor: irregular ? "rgb(70, 96, 114)" : "#E7E9EE",
              color: irregular ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.87)",
              cursor: "pointer",
            }}
            className="selectedMenu"
            onClick={handleIrregular}
          >
            <Typography mx="26px" fontSize={{ lg: 13, xs: 10 }} p="5px 0 0 0">
              Irregular PO
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ marginInline: "20px", marginTop: "20px" }}>
        <Accordion
          className={expandedItem === 3 ? "acrdn-main expanded" : "acrdn-main"}
          key={3}
          expanded={expandedItem === 3}
          onChange={() => handleMenuItemClick(3)}
        >
          <AccordionSummary
            className="acrdn-s"
            expandIcon={<ArrowDropDownIcon />}
            sx={{
              color: "#fff",
              height: "35px",
              borderRadius: "5px 5px 0px 0px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <GridViewRoundedIcon className="grid-icon" />

              <Typography
                fontSize={{ lg: 14, xs: 9 }}
                marginTop={{ lg: "3px", xs: "6px" }}
                width={{ lg: "100%", xs: "100%" }}
                className="sidebar-minititle"
              >
                Promotion
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              borderTop: "1px solid #B7C3CA ",
              borderBottom: "1px solid #B7C3CA ",
              backgroundColor: reallocation ? "rgb(70, 96, 114)" : "#E7E9EE",
              color: reallocation
                ? "rgb(255, 255, 255)"
                : "rgba(0, 0, 0, 0.87)",
              cursor: "pointer",
            }}
            className="selectedMenu"
            onClick={handleReallocation}
          >
            <Typography
              mx="26px"
              fontSize={{ lg: "13px", xs: 10 }}
              p="5px 0 0 0"
            >
              SKU prioritization for promotion
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="s-h2">
        <WarningRoundedIcon className="alert-icon" />
        <Typography fontSize={{ lg: 14, xs: 9 }} className="sidebar-minititle">
          Alerts
        </Typography>
      </div>

      {/* logout........... */}
      <div
        className="logs-out"
        style={{
          position: "absolute",
          left: 14,
          bottom: 10,
          cursor: "pointer",
        }}
      >
        <img src={Log} alt="logout" className="logout-icon" />
        <Typography fontSize={{ lg: 14, xs: 9 }} className="logsout-titile">
          Log out
        </Typography>
      </div>
    </div>
  );
};

export default Sidebar;
