import React, { useState } from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import DataTable from "../DataTable";
import DataTable2 from "./DataTable/DataTable";

import "./TabsMaterialui.css";

const MaterialUITabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div style={{ border: "" }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="secondary"
        // variant="ou"
        // indicatorColor="secondary"
      >
        <Tab label="Tab 1" sx={{ border: "" }}  />
        <Tab label="Supply" />
        <Tab label="Demand" />
        <Tab label="Expected Stock Position at End of Week" />
        <Tab label="WOC at End of Week" />
        <Tab label="Case shortages" />
        <Tab label="Expected Services" />
        <Tab label="Stock Position" />
        <Tab label="RAG" />
      </Tabs>
      <TabPanel value={activeTab} index={0}>
        <DataTable />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <DataTable2 />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        Content for Tab 3
      </TabPanel>
      <TabPanel value={activeTab} index={3}>
        Content for Tab 4
      </TabPanel>
      <TabPanel value={activeTab} index={4}>
        Content for Tab 5
      </TabPanel>
      <TabPanel value={activeTab} index={5}>
        Content for Tab 6
      </TabPanel>
      <TabPanel value={activeTab} index={6}>
        Content for Tab 7
      </TabPanel>
      <TabPanel value={activeTab} index={7}>
        Content for Tab 8
      </TabPanel>
      <TabPanel value={activeTab} index={8}>
        Content for Tab 9
      </TabPanel>
    </div>
  );
};

const TabPanel = ({ value, index, children }) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

export default MaterialUITabs;
