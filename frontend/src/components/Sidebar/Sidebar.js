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
        <img src={qube} className="qube-icon" />
        <Typography>Dashboard</Typography>
      </div>
      <div className="S-h2">
        <img src={play} alt="play" className="play-icon" />
        <Typography>Demand Planning</Typography>
      </div>
      <div className="S-h2">
        <img src={play} alt="play" className="play-icon" />
        <Typography>Demand Scenarios</Typography>
      </div>

      <div className="S-h2">
        <img src={play} alt="play" className="play-icon" />

        <Typography>Supply Planning</Typography>
      </div>

      <div style={{ marginBlock: "5%" }}>
        <Accordion className="acrdn-main">
          <AccordionSummary
            className="acrdn-s"
            // expandIcon={<ArrowDropDownIcon />}
            sx={{
              color: "#fff",
              // backgroundColor: "#7E919F",
              height: "35px",
              borderRadius: "5px 5px 0px 0px",
              // color: "#E7E9EE",
              // backgroundColor: isSelected ? "rgb(70, 96, 114)" : "#E7E9EE",
              // color: isSelected
              //   ? "rgb(255, 255, 255)"
              //   : "rgba(0, 0, 0, 0.87)",
              // cursor: "pointer",
            }}
            // onClick={handleFilterStatus}
          >
            <Box sx={{ display: "flex" }}>
              <ArrowDropDownIcon
                sx={{
                  marginLeft: "-6px",
                }}
              />
              <Typography
                fontSize={{ lg: 13, xs: 9 }}
                marginTop={{ lg: "3px", xs: "6px" }}
                width={{ lg: "100%", xs: "100%" }}
              >
                Distribution Planning
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              borderTop: "1px solid #B7C3CA ",
              borderBottom: "1px solid #B7C3CA ",
              backgroundColor: "#E7E9EE",
              // marginBottom: "-15px",
              cursor: "pointer",
            }}
          >
            <Typography
              mx="14px"
              fontSize={{ lg: "12px", xs: 10 }}
              p="5px 0 0 0"
            >
              {" "}
              SKU Prioritization
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
            <Typography
              mx="14px"
              width={{ lg: "100%", xs: "100%" }}
              fontSize={{ lg: 12, xs: 10 }}
              p="5px 0 0 0"
            >
              {" "}
              OOS Risk Detection
            </Typography>
          </AccordionDetails>
          <AccordionDetails sx={{ backgroundColor: "#E7E9EE" }}>
            <Typography
              mx="12px"
              fontSize={{ lg: 12, xs: 9 }}
              p="5px 0 0 0"
              // border="1px solid"
              width={{ lg: "100%", xs: "110px" }}
              sx={{
                cursor: "pointer",
              }}
            >
              Smart Stock Reallocation
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="S-h2" style={{ marginTop: "8%" }}>
        <img src={play} alt="play" className="play-icon" />
        <Typography>Retrospective Analysis</Typography>
      </div>
      <div className="dotted-line"></div>
      <div className="S-h2" style={{ marginTop: "7%" }}>
        <img src={play} alt="play" className="play-icon" />
        <Typography>Historical Runs</Typography>
      </div>
      <div className="S-h2" style={{ marginTop: "7%" }}>
        <img src={alert} alt="alert" className="alert-icon" />
        <Typography>Alerts</Typography>
      </div>
      <div className="S-h2" style={{ marginTop: "7%", marginBottom: "90px" }}>
        <img src={play} alt="play" className="play-icon" />
        <Typography>Historical Activations</Typography>
      </div>

      {/* logout........... */}
      <div
        className="logs-out"
        style={{ position: "absolute", left: 14, bottom: 10,cursor:"pointer" }}
      >
        <img src={Log} alt="logout" className="logout-icon" />
        <Typography>Log out</Typography>
      </div>
    </div>
  );
};

export default Sidebar;
<div>
  <div
    className="S-h2 logoutSpace"
    style={{ marginTop: "280px", cursor: "pointer", marginBottom: "10px" }}
  >
    <img src={Log} alt="logout" className="logout-icon" />
    <Typography>Log out</Typography>
  </div>
  ;
  <div className="sidebar-header2">
    <img src={down} alt="down icon" className="down-icon" />
    <Typography>Distribution Planning</Typography>
  </div>
  <div className="S-h21">
    <Typography fontSize="12px" mx="22px">
      {" "}
      SKU Prioritization
    </Typography>
  </div>
  <div className="S-h21" style={{ backgroundColor: "#466072", color: "#FFF" }}>
    <Typography fontSize="12px" mx="22px">
      OOS Risk Detection{" "}
    </Typography>
  </div>
  <div
    className="S-h21"
    style={{
      borderRadius: "0px 0px 5px 5px",
      padding: "8px 0px 8px 17px ",
    }}
  >
    <Typography fontSize="12px" mx="17px">
      Smart Stock Reallocation
    </Typography>
  </div>
</div>;
