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
import OhrTable2 from "./ohrTable2";
import Historic from "./historic";
import Sellout from "./sellout";
import Sellin from "./sellin";
import StockPosition2 from "./stockPosition2";
import Ola from "./ola";
import { useSelector, useDispatch } from "react-redux";
import {
  updateloader,
  fetchoverviewcustomerdata,
  fetchcustomerhestoric,
  fetchcustomersellout,
  fetchcustomersellin,
  fetchcustomerstockposition,
  fetchcustomerola,
  updateexporttabledata,
} from "../../store/actions/sidebarActions";

const OhrCustomerTabs = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(0);
  const customer = useSelector((state) => state.sidebar.customer);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const handleOverview = async () => {
    dispatch(updateloader(true));
    var data = { customer: customer };
    try {
      const response = await fetch("http://localhost:5000/getoverview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchoverviewcustomerdata(json));
        dispatch(updateexporttabledata(json));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleHistoricePOS = async () => {
    dispatch(updateloader(true));
    var data = { customer: customer };
    try {
      const response = await fetch("http://localhost:5000/getcustepos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchcustomerhestoric(json));
        dispatch(updateexporttabledata(json));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleSellOut = async () => {
    dispatch(updateloader(true));
    var data = { customer: customer };
    try {
      const response = await fetch("http://localhost:5000/getcustsellout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchcustomersellout(json));
        dispatch(updateexporttabledata(json));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleSellIn = async () => {
    dispatch(updateloader(true));
    var data = { customer: customer };
    try {
      const response = await fetch("http://localhost:5000/getcustsellin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchcustomersellin(json));
        dispatch(updateexporttabledata(json));
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
    var data = { customer: customer };
    try {
      const response = await fetch("http://localhost:5000/getstockposition", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchcustomerstockposition(json));
        dispatch(updateexporttabledata(json));
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleOLA = async () => {
    dispatch(updateloader(true));
    var data = { customer: customer };
    try {
      const response = await fetch("http://localhost:5000/getcustola", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        // setuserDetails(json.name);
        dispatch(fetchcustomerola(json));
        dispatch(updateexporttabledata(json));
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
          onClick={handleHistoricePOS}
        >
          Historic ePOS
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 2 ? "white" : "#415A6C",
          }}
          onClick={handleSellOut}
        >
          Sell Out <span style={{ fontSize: "14px" }}>( ATF vs Reckitt )</span>
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 3 ? "white" : "#415A6C",
          }}
          onClick={handleSellIn}
        >
          Sell In <span style={{ fontSize: "14px" }}> ( ATF vs Reckitt )</span>
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 4 ? "white" : "#415A6C",
          }}
          onClick={handleStockPosition}
        >
          Stock Position
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 5 ? "white" : "#415A6C",
          }}
          onClick={handleOLA}
        >
          OLA
        </Tab>
      </TabList>

      <TabPanel>
        <OhrTable2 />
      </TabPanel>
      <TabPanel>
        <Historic />
      </TabPanel>
      <TabPanel>
        <Sellout />
      </TabPanel>
      <TabPanel>
        <Sellin />
      </TabPanel>
      <TabPanel>
        <StockPosition2 />
      </TabPanel>
      <TabPanel>
        <Ola />
      </TabPanel>
    </Tabs>
  );
};

export default OhrCustomerTabs;
