import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Log from "../../images/Logout.png";
import qube from "../../images/qube.png";
import play from "../../images/play.png";
import down from "../../images/down.png";
import alert from "../../images/alert.png";

import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

const Sidebar = ({ filterStatus }) => {
  const navigate = useNavigate();

  const [isSelected, setisSelected] = useState(false);

  const handleFilterStatus = () => {
    setisSelected(true);
    filterStatus(true);
  };

  const handleDashboard = () => {
    navigate("/");
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

      <div style={{ marginBlock: "10%" }}>
        <Accordion className="acrdn-main">
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
                Forecasting
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              borderTop: "1px solid #B7C3CA ",
              borderBottom: "1px solid #B7C3CA ",
              backgroundColor: "#E7E9EE",
              cursor: "pointer",
            }}
          >
            <Typography
              mx="14px"
              fontSize={{ lg: "12px", xs: 10 }}
              p="5px 0 0 0"
            >
              Sell-In Forecasting Model
            </Typography>
          </AccordionDetails>
          <AccordionDetails
            sx={{
              borderBottom: "1px solid #B7C3CA",
              backgroundColor: isSelected ? "rgb(70, 96, 114)" : "#E7E9EE",
              color: isSelected ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.87)",
              cursor: "pointer",
            }}
            className="selectedMenu"
            onClick={handleFilterStatus}
          >
            <Typography mx="14px" fontSize={{ lg: 12, xs: 10 }} p="5px 0 0 0">
              Sell-Out Forecasting Model
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ marginBlock: "10%" }}>
        <Accordion className="acrdn-main">
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
                Monitoring
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              borderTop: "1px solid #B7C3CA ",
              borderBottom: "1px solid #B7C3CA ",
              backgroundColor: "#E7E9EE",
              cursor: "pointer",
            }}
          >
            <Typography
              mx="14px"
              fontSize={{ lg: "12px", xs: 10 }}
              p="5px 0 0 0"
            >
              OOS Risk Detection
            </Typography>
          </AccordionDetails>
          <AccordionDetails
            sx={{
              borderBottom: "1px solid #B7C3CA",
              backgroundColor: isSelected ? "rgb(70, 96, 114)" : "#E7E9EE",
              color: isSelected ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.87)",
              cursor: "pointer",
            }}
            className="selectedMenu"
            onClick={handleFilterStatus}
          >
            <Typography mx="14px" fontSize={{ lg: 12, xs: 10 }} p="5px 0 0 0">
              Irregular PO
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ marginBlock: "10%" }}>
        <Accordion className="acrdn-main">
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
                Reallocate
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              borderTop: "1px solid #B7C3CA ",
              borderBottom: "1px solid #B7C3CA ",
              backgroundColor: "#E7E9EE",
              cursor: "pointer",
            }}
          >
            <Typography
              mx="14px"
              fontSize={{ lg: "12px", xs: 10 }}
              p="5px 0 0 0"
            >
              Customer Reallocation
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="s-h2" style={{ marginTop: "7%" }}>
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

<ArrowDropDownIcon
  sx={{
    marginLeft: "-6px",
  }}
/>;
