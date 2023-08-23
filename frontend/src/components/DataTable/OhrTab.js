import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import SupplyTable from "./supplyTable";
import DemandTable from "./DemandTable";
import StockPositionWeek from "./StockPositionWeek";
import WocTable from "./wocTable";
import CaseShortages from "./caseShortages";
import ExpectedServices from "./expectedServicesTable";
import StockPosition from "./stockPositionTable";
import RAG from "./ragTable";
import OhrTable from "./ohrTable";
import NewohrTable from "./NewohrTable";
import FunctionalTabs from "./FunctionalTabs";

const OhrTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
      <TabList>
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
