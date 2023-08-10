import React from "react";
import Welcome from "../Welcome/Welcome";
// import Sidebar from "../SidebarNew/Sidebar";

const DashboardNew = () => {
  return (
    <div className="main">
      <div className="new-dashboard">
        <div className="sidebar-body">
        
        </div>
        <div className="dasboard-body">
          <Welcome />
        </div>
      </div>
    </div>
  );
};

export default DashboardNew;
