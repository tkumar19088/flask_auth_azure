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
import { useSelector, useDispatch } from "react-redux";
import {
  updateloader,
  fetchoverviewhighriskdata,
  fetchreckittsupply,
  fetchreckittdemand,
  fetchreckittexpectedsoh,
  fetchreckittwoc,
  fetchreckittcaseshortages,
  fetchreckittexpectedservice,
  fetchreckittstockposition,
  updateexporttabledata,
  fetchtaburl,
  updatesearch,
} from "../../store/actions/sidebarActions";

const FunctionalTabs = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(0);
  const customer = useSelector((state) => state.sidebar.customer);
  const search = useSelector((state) => state.sidebar.search);
  const searchvalue = useSelector((state) => state.sidebar.searchvalue);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  const handleOverview = async () => {
    dispatch(updateloader(true));
    var data = { customer: customer, search: searchvalue };
    try {
      const url = "https://testingsmartola.azurewebsites.net/getoverview";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchoverviewhighriskdata(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
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
    var data = { customer: customer, search: searchvalue };
    try {
      const url = "https://testingsmartola.azurewebsites.net/getsupply";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchreckittsupply(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
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
    var data = { customer: customer, search: searchvalue };
    try {
      const url = "https://testingsmartola.azurewebsites.net/getdemand";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchreckittdemand(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
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
    var data = { customer: customer, search: searchvalue };
    try {
      const url = "https://testingsmartola.azurewebsites.net/getsohateow";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchreckittexpectedsoh(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
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
    var data = { customer: customer, search: searchvalue };
    try {
      const url = "https://testingsmartola.azurewebsites.net/getwocateow";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchreckittwoc(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
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
    var data = { customer: customer, search: searchvalue };
    try {
      const url = "https://testingsmartola.azurewebsites.net/getcaseshortages";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchreckittcaseshortages(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
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
    var data = { customer: customer, search: searchvalue };
    try {
      const url = "https://testingsmartola.azurewebsites.net/getexpectedservice";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchreckittexpectedservice(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
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
    var data = { customer: customer, search: searchvalue };
    try {
      const url = "https://testingsmartola.azurewebsites.net/getstockposition";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchreckittstockposition(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
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
          Expected SoH at EoW
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 4 ? "white" : "#415A6C",
          }}
          onClick={handleWOCatEOW}
        >
          WoC at EoW
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
          Expected Service %
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
