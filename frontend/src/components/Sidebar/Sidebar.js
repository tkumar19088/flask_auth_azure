import React from "react";
import Typography from "@mui/material/Typography";
import Log from "../../images/Logout.png";
import qube from "../../images/qube.png";
import play from "../../images/play.png";
import down from "../../images/down.png";
import alert from "../../images/alert.png";

import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/");
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header" onClick={handleDashboard}>
        <img src={qube} alt="square icon" className="qube-icon" />
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
      <div
        className="S-h21"
        style={{ backgroundColor: "#466072", color: "#FFF" }}
      >
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
      <div className="S-h2" style={{ marginTop: "7%" }}>
        <img src={play} alt="play" className="play-icon" />
        <Typography>Historical Activations</Typography>
      </div>

      {/* logout........... */}
      <div
        className="S-h2 logoutSpace"
        style={{ marginTop: "280px", cursor: "pointer", marginBottom: "10px" }}
      >
        <img src={Log} alt="logout" className="logout-icon" />
        <Typography>Log out</Typography>
      </div>
    </div>
  );
};

export default Sidebar;
