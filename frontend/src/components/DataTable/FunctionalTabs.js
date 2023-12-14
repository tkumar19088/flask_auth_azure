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
  updatetabname,
  updateerrormodalpopup,
  updateerrortextmessage,
} from "../../store/actions/sidebarActions";

const FunctionalTabs = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(0);
  const customer = useSelector((state) => state.sidebar.customer);
  const search = useSelector((state) => state.sidebar.search);
  const searchValue = useSelector((state) => state.sidebar.searchvalue);
  const tabname = useSelector((state) => state.sidebar.tabname);
  const skulist = useSelector((state) => state.sidebar.skulist);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  const handleOverview = async () => {
    dispatch(updateloader(true));
    var data = {
      customer: customer,
      search: searchValue,
      tabname: "overview",
      skulist: skulist,
      rbsku: "",
    };
    try {
      const url = "http://localhost:5000/getoverview";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const info = await response.json();
        const json = info.data;
        if (info.status === "success") {
          dispatch(updatetabname("overview"));
          dispatch(fetchoverviewhighriskdata(json));
          dispatch(updateexporttabledata(json));
          dispatch(fetchtaburl(url));
        } else {
          dispatch(updateerrortextmessage(info.message));
          dispatch(updateerrormodalpopup(true));
        }
      } else {
        dispatch(updateerrortextmessage(response.statusText));
        dispatch(updateerrormodalpopup(true));
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
    var data = {
      customer: customer,
      search: searchValue,
      tabname: "supply",
      skulist: skulist,
      rbsku: "",
    };
    try {
      const url = "http://localhost:5000/getsupply";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const info = await response.json();
        const json = info.data;
        if (info.status === "success") {
          dispatch(updatetabname("supply"));
          dispatch(fetchreckittsupply(json));
          dispatch(updateexporttabledata(json));
          dispatch(fetchtaburl(url));
        } else {
          dispatch(updateerrortextmessage(info.message));
          dispatch(updateerrormodalpopup(true));
        }
      } else {
        dispatch(updateerrortextmessage(response.statusText));
        dispatch(updateerrormodalpopup(true));
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
    var data = {
      customer: customer,
      search: searchValue,
      tabname: "demand",
      skulist: skulist,
      rbsku: "",
    };
    try {
      const url = "http://localhost:5000/getdemand";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const info = await response.json();
        const json = info.data;
        if (info.status === "success") {
          dispatch(updatetabname("demand"));
          dispatch(fetchreckittdemand(json));
          dispatch(updateexporttabledata(json));
          dispatch(fetchtaburl(url));
        } else {
          dispatch(updateerrortextmessage(info.message));
          dispatch(updateerrormodalpopup(true));
        }
      } else {
        dispatch(updateerrortextmessage(response.statusText));
        dispatch(updateerrormodalpopup(true));
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
    var data = {
      customer: customer,
      search: searchValue,
      tabname: "sohateow",
      skulist: skulist,
      rbsku: "",
    };
    try {
      const url = "http://localhost:5000/getsohateow";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const info = await response.json();
        const json = info.data;
        if (info.status === "success") {
          dispatch(updatetabname("sohateow"));
          dispatch(fetchreckittexpectedsoh(json));
          dispatch(updateexporttabledata(json));
          dispatch(fetchtaburl(url));
        } else {
          dispatch(updateerrortextmessage(info.message));
          dispatch(updateerrormodalpopup(true));
        }
      } else {
        dispatch(updateerrortextmessage(response.statusText));
        dispatch(updateerrormodalpopup(true));
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
    var data = {
      customer: customer,
      search: searchValue,
      tabname: "wocateow",
      skulist: skulist,
      rbsku: "",
    };
    try {
      const url = "http://localhost:5000/getwocateow";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const info = await response.json();
        const json = info.data;
        if (info.status === "success") {
          dispatch(updatetabname("wocateow"));
          dispatch(fetchreckittwoc(json));
          dispatch(updateexporttabledata(json));
          dispatch(fetchtaburl(url));
        } else {
          dispatch(updateerrortextmessage(info.message));
          dispatch(updateerrormodalpopup(true));
        }
      } else {
        dispatch(updateerrortextmessage(response.statusText));
        dispatch(updateerrormodalpopup(true));
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
    var data = {
      customer: customer,
      search: searchValue,
      tabname: "caseshortages",
      skulist: skulist,
      rbsku: "",
    };
    try {
      const url = "http://localhost:5000/getcaseshortages";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const info = await response.json();
        const json = info.data;
        if (info.status === "success") {
          dispatch(updatetabname("caseshortages"));
          dispatch(fetchreckittcaseshortages(json));
          dispatch(updateexporttabledata(json));
          dispatch(fetchtaburl(url));
        } else {
          dispatch(updateerrortextmessage(info.message));
          dispatch(updateerrormodalpopup(true));
        }
      } else {
        dispatch(updateerrortextmessage(response.statusText));
        dispatch(updateerrormodalpopup(true));
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
    var data = {
      customer: customer,
      search: searchValue,
      tabname: "expectedservice",
      skulist: skulist,
      rbsku: "",
    };
    try {
      const url =
        "http://localhost:5000/getexpectedservice";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const info = await response.json();
        const json = info.data;
        if (info.status === "success") {
          dispatch(updatetabname("expectedservice"));
          dispatch(fetchreckittexpectedservice(json));
          dispatch(updateexporttabledata(json));
          dispatch(fetchtaburl(url));
        } else {
          dispatch(updateerrortextmessage(info.message));
          dispatch(updateerrormodalpopup(true));
        }
      } else {
        dispatch(updateerrortextmessage(response.statusText));
        dispatch(updateerrormodalpopup(true));
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
    var data = {
      customer: customer,
      search: searchValue,
      tabname: "stockposition",
      skulist: skulist,
      rbsku: "",
    };
    try {
      const url = "http://localhost:5000/getstockposition";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const info = await response.json();
        const json = info.data;
        if (info.status === "success") {
          dispatch(updatetabname("stockposition"));
          dispatch(fetchreckittstockposition(json));
          dispatch(updateexporttabledata(json));
          dispatch(fetchtaburl(url));
        } else {
          dispatch(updateerrortextmessage(info.message));
          dispatch(updateerrormodalpopup(true));
        }
      } else {
        dispatch(updateerrortextmessage(response.statusText));
        dispatch(updateerrormodalpopup(true));
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
          Stock Position
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
          Expected Service (%)
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 7 ? "white" : "#415A6C",
          }}
          onClick={handleStockPosition}
        >
          Expected SOH at EOW
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
