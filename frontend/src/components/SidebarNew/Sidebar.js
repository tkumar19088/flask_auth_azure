import React, { useState } from "react";

import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Log from "../../images/Logout.png";
import qube from "../../images/qube.png";
import play from "../../images/play.png";
import down from "../../images/down.png";
import alert from "../../images/alert.png";

import "./Sidebar.css";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
    <div>
      <div className="sidebar">
        <div className="sidebar-header" onClick={handleDashboard}>
          <img src={qube} alt="square icon" className="qube-icon" />
          <Typography fontSize={{ lg: 13, xs: 10 }}>Dashboard</Typography>
        </div>
        <div className="S-h2">
          <img src={play} alt="play" className="play-icon" />
          <Typography fontSize={{ lg: 13, xs: 10 }}>Demand Planning</Typography>
        </div>
        <div className="S-h2">
          <img src={play} alt="play" className="play-icon" />
          <Typography fontSize={{ lg: 13, xs: 10 }}>
            Demand Scenarios
          </Typography>
        </div>

        <div className="S-h2">
          <img src={play} alt="play" className="play-icon" />

          <Typography fontSize={{ lg: 13, xs: 10 }}>Supply Planning</Typography>
        </div>

        <div style={{ marginBlock: "5%" }}>
          <Accordion className="acrdn-main">
            <AccordionSummary
              className="acrdn-s"
              // expandIcon={<ArrowDropDownIcon />}
              sx={{
                color: "#fff",
                backgroundColor: "#7E919F",
                height: "35px",
                borderRadius: "5px 5px 0px 0px",
                color: "#E7E9EE",
              }}
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
                borderBottom: "1px solid #B7C3CA ",
                backgroundColor: "#E7E9EE",
                // marginBottom: "-15px",
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
                color: isSelected
                  ? "rgb(255, 255, 255)"
                  : "rgba(0, 0, 0, 0.87)",
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
              >
                Smart Stock Reallocation
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="S-h2" style={{ marginTop: "8%" }}>
          <img src={play} alt="play" className="play-icon" />
          <Typography  fontSize={{ lg: 13, xs: 9 }}>Retrospective Analysis</Typography>
        </div>
        <div className="dotted-line"></div>
        <div className="S-h2" style={{ marginTop: "7%" }}>
          <img src={play} alt="play" className="play-icon" />
          <Typography  fontSize={{ lg: 13, xs: 9 }}>Historical Runs</Typography>
        </div>
        <div className="S-h2" style={{ marginTop: "7%" }}>
          <img src={alert} alt="alert" className="alert-icon" />
          <Typography  fontSize={{ lg: 13, xs: 9 }}>Alerts</Typography>
        </div>
        <div className="S-h2" style={{ marginTop: "7%" }}>
          <img src={play} alt="play" className="play-icon" />
          <Typography  fontSize={{ lg: 13, xs: 9 }}> Historical Activations</Typography>
        </div>

        {/* logout........... */}
      </div>

      <div className="log-box">
        <div className="logout-fixed">
          <img src={Log} alt="logout" className="logout-icon" />
          <Typography >Log out</Typography>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

<div style={{ marginTop: "" }}>
  <Accordion>
    <AccordionSummary></AccordionSummary>
    <AccordionDetails></AccordionDetails>
    <AccordionDetails></AccordionDetails>
  </Accordion>
</div>;
<div
  className="S-h2 logoutSpace"
  style={{ marginTop: "280px", cursor: "pointer" }}
>
  <img src={Log} alt="logout" className="logout-icon" />
  <Typography>Log out</Typography>
</div>;
