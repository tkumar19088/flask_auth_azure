import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../SidebarNew/Sidebar";
import Welcome from "../Welcome/Welcome";
import Status from "../Status/Status";
import Planning from "../Planning/Planning";
import Filters from "../Filters/Filters";
import "./Dashboard.css";
import { animateScroll as scroll } from "react-scroll";

function Dashboard() {
  const [isFilter, setisFilter] = useState(false);

  const handleFilterStatus = (props) => {
    setisFilter(props);
  };

  useEffect(() => {
    scroll.scrollToTop(); // Scrolls to the top of the page when the component mounts
  }, []);

  return (
    <div>
      <Topbar />
      <Grid container xs={12}>
        <Grid item xs={2} className="sidebar-main">
          <Sidebar filterStatus={handleFilterStatus} />
        </Grid>
        <Grid item xs={10} p={2} className="main-bd">
          <Welcome />
          <Status filterStatus={handleFilterStatus} />
          <Planning filterStatus={handleFilterStatus} />
          {isFilter && <Filters />}
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
