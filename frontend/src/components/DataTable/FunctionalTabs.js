import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./FunctionalTabs.css";
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

const FunctionalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
      <TabList>
        <Tab style={{ border: "1px solid #E5EBEF" }}>OHR</Tab>
        <Tab style={{ border: "1px solid #E5EBEF" }}>Supply</Tab>
        <Tab style={{ border: "1px solid #E5EBEF" }}>Demand</Tab>
        <Tab style={{ border: "1px solid #E5EBEF" }}>Expctd SOH at EOW</Tab>
        <Tab style={{ border: "1px solid #E5EBEF" }}>WOC at EOW</Tab>
        <Tab style={{ border: "1px solid #E5EBEF" }}>Case shortages</Tab>
        <Tab style={{ border: "1px solid #E5EBEF" }}>Expected Services</Tab>
        <Tab style={{ border: "1px solid #E5EBEF" }}>Stock Position</Tab>
      </TabList>

      <TabPanel>
        <OhrTable />
      </TabPanel>
      <TabPanel>
        <SupplyTable />
      </TabPanel>
      <TabPanel>
        <DemandTable />
      </TabPanel>
      <TabPanel>
        <StockPositionWeek />
      </TabPanel>
      <TabPanel>
        <WocTable />
      </TabPanel>
      <TabPanel>
        <CaseShortages />
      </TabPanel>
      <TabPanel>
        <ExpectedServices />
      </TabPanel>
      <TabPanel>
        <StockPosition />
      </TabPanel>
    </Tabs>
  );
};

export default FunctionalTabs;
