import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import Welcome from "../Welcome/Welcome";
import Status from "../Status/Status";
import Planning from "../Planning/Planning";
// import Filters from "../Filters/Filters";
import "./Dashboard.css";
import loaderImage from "../../images/Logo-bar.png"; // Replace with your image path

import { useSelector, useDispatch } from "react-redux";
import {
  fetchfilterstatus,
  fetchuserdetails,
  updateloader,
  fetchalerts,
  updatecurrentweek,
} from "../../store/actions/sidebarActions";
import CarouselExample from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

function Dashboard() {
  // const userData = window.jsonData;
  // console.log(userData);
  // const [userDetails, setuserDetails] = useState();

  const filterStatusVal = useSelector((state) => state.sidebar.filterStatus);
  const userDetails = useSelector((state) => state.sidebar.userDetails);
  const loader = useSelector((state) => state.sidebar.loader);
  const dispatch = useDispatch();

  const [isFilter, setisFilter] = useState(filterStatusVal);

  const handleFilterStatus = (props) => {
    dispatch(fetchfilterstatus(true));
    setisFilter(props);
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(updateloader(true));
      try {
        const response = await fetch("http://localhost:5000/getuserdata");
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          // setuserDetails(json.name);
          dispatch(fetchuserdetails(json.user));
          dispatch(fetchalerts(json.alerts));
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        dispatch(updateloader(false));
      }
    };
    fetchData();
  }, []);

  // const currentDate = new Date();

  // const currentDay = currentDate.getDate();
  // const currentMonth = currentDate.getMonth();
  // const currentYear = currentDate.getFullYear();
  // const firstDayOfYear = new Date(currentYear, 0, 1);
  // const dayDifference = Math.floor(
  //   (currentDate - firstDayOfYear) / (24 * 60 * 60 * 1000)
  // );
  // const currentWeekNumber = Math.ceil((dayDifference + 1) / 7);
  // console.log(currentWeekNumber);
  // dispatch(updatecurrentweek(currentWeekNumber));
  return (
    <div>
      {loader && (
        <div className="loader-overlay">
          <img src={loaderImage} alt="Loading..." className="rotating-image" />
        </div>
      )}
      <Topbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className="screen-height">
          <Welcome />
          <Filters />
          <CarouselExample />
          <Planning filterStatus={handleFilterStatus} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
