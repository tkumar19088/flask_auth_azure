import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const OhrTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
      <TabList style={{ marginTop: "45px" }}>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 0 ? "white" : "#415A6C",
          }}
        >
          Overview High Risk SKUs - Reckitt
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 1 ? "white" : "#415A6C",
          }}
        >
          Overview High Risk SKUs - Customer
        </Tab>
      </TabList>

      <TabPanel>1 </TabPanel>
      <TabPanel>2</TabPanel>
    </Tabs>
  );
};

export default OhrTabs;
