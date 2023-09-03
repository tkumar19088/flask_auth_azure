import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import Welcome from "../Welcome/Welcome";
import Status from "../Status/Status";
import Planning from "../Planning/Planning";
// import Filters from "../Filters/Filters";
import "./Dashboard.css";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchfilterstatus,
  fetchuserdetails,
} from "../../store/actions/sidebarActions";
import Filtersnew from "../Filters/Filtersnew";
import CarouselExample from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

function Dashboard() {
  // const userData = window.jsonData;
  // console.log(userData);
  // const [userDetails, setuserDetails] = useState();

  const filterStatusVal = useSelector((state) => state.sidebar.filterStatus);
  const userDetails = useSelector((state) => state.sidebar.userDetails);
  const dispatch = useDispatch();

  const [isFilter, setisFilter] = useState(filterStatusVal);

  const handleFilterStatus = (props) => {
    dispatch(fetchfilterstatus(true));
    setisFilter(props);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/getuserdata");
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          // setuserDetails(json.name);
          dispatch(fetchuserdetails(json));
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Topbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className="screen-height">
          <Welcome />
          <Filters />
          <Status filterStatus={handleFilterStatus} />
          <Planning filterStatus={handleFilterStatus} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
