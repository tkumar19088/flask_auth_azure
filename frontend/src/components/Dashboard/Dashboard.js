import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import Welcome from "../Welcome/Welcome";
import Status from "../Status/Status";
import Planning from "../Planning/Planning";
import Filters from "../Filters/Filters";
import "./Dashboard.css";
import { animateScroll as scroll } from "react-scroll";

import { useSelector, useDispatch } from "react-redux";
import { fetchfilterstatus } from "../../store/actions/sidebarActions";

function Dashboard() {
  const filterStatusVal = useSelector((state) => state.sidebar.filterStatus);
  const dispatch = useDispatch();

  const [isFilter, setisFilter] = useState(filterStatusVal);

  const handleFilterStatus = (props) => {
    dispatch(fetchfilterstatus(true));
    setisFilter(props);
  };

  useEffect(() => {
    scroll.scrollToTop(); // Scrolls to the top of the page when the component mounts
  }, []);

  return (
    <div>
      <Topbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className="bg-containerdashboard">
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
