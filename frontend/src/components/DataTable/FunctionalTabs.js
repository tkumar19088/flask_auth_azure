import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SupplyTable from "./supplyTable";
import DemandTable from "./DemandTable";
import StockPositionWeek from "./StockPositionWeek";
import WocTable from "./wocTable";
import CaseShortages from "./caseShortages";
import ExpectedServices from "./expectedServicesTable";
import StockPosition from "./stockPositionTable";
import OhrTable from "./ohrTable";
import "react-tabs/style/react-tabs.css";
import "./FunctionalTabs.css";
import { useDispatch } from "react-redux";
import { updateloader } from "../../store/actions/sidebarActions";

const FunctionalTabs = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  const handleOverview = async () => {
    dispatch(updateloader(true));
    try {
      const response = await fetch("http://localhost:5000/getuserdata");
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        //dispatch(fetchuserdetails(json));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleSupply = async () => {
    dispatch(updateloader(true));
    try {
      const response = await fetch("http://localhost:5000/getuserdata");
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        //dispatch(fetchuserdetails(json));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleDemand = async () => {
    dispatch(updateloader(true));
    try {
      const response = await fetch("http://localhost:5000/getuserdata");
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        //dispatch(fetchuserdetails(json));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleExpectedSOH = async () => {
    dispatch(updateloader(true));
    try {
      const response = await fetch("http://localhost:5000/getuserdata");
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        //dispatch(fetchuserdetails(json));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleWOCatEOW = async () => {
    dispatch(updateloader(true));
    try {
      const response = await fetch("http://localhost:5000/getuserdata");
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        //dispatch(fetchuserdetails(json));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleCaseShortages = async () => {
    dispatch(updateloader(true));
    try {
      const response = await fetch("http://localhost:5000/getuserdata");
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        //dispatch(fetchuserdetails(json));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleExpectedService = async () => {
    dispatch(updateloader(true));
    try {
      const response = await fetch("http://localhost:5000/getuserdata");
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        //dispatch(fetchuserdetails(json));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleStockPosition = async () => {
    dispatch(updateloader(true));
    try {
      const response = await fetch("http://localhost:5000/getuserdata");
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        //dispatch(fetchuserdetails(json));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };

  return (
    <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
      <TabList>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 0 ? "white" : "#415A6C",
          }}
          onClick={handleOverview}
        >
          Overview
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 1 ? "white" : "#415A6C",
          }}
          onClick={handleSupply}
        >
          Supply
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 2 ? "white" : "#415A6C",
          }}
          onClick={handleDemand}
        >
          Demand
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 3 ? "white" : "#415A6C",
          }}
          onClick={handleExpectedSOH}
        >
          Expected SOH at EOW
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 4 ? "white" : "#415A6C",
          }}
          onClick={handleWOCatEOW}
        >
          WOC at EOW
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 5 ? "white" : "#415A6C",
          }}
          onClick={handleCaseShortages}
        >
          Case Shortages
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 6 ? "white" : "#415A6C",
          }}
          onClick={handleExpectedService}
        >
          Expected Service
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 7 ? "white" : "#415A6C",
          }}
          onClick={handleStockPosition}
        >
          Stock Position
        </Tab>
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
