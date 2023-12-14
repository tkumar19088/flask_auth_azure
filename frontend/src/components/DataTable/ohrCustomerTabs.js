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
import Customeroverview from "./Customeroverview";
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
  fetchtaburl,
  updatetabname,
  updateerrormodalpopup,
  updateerrortextmessage,
} from "../../store/actions/sidebarActions";

const OhrCustomerTabs = () => {
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
          dispatch(fetchoverviewcustomerdata(json));
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
  const handleHistoricePOS = async () => {
    dispatch(updateloader(true));
    var data = {
      customer: customer,
      search: searchValue,
      tabname: "historicepos",
      skulist: skulist,
      rbsku: "",
    };
    try {
      const url = "http://localhost:5000/getcustepos";
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
          dispatch(updatetabname("historicepos"));
          dispatch(fetchcustomerhestoric(json));
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
  const handleSellOut = async () => {
    dispatch(updateloader(true));
    var data = {
      customer: customer,
      search: searchValue,
      tabname: "sellout",
      skulist: skulist,
      rbsku: "",
    };
    try {
      const url = "http://localhost:5000/getcustsellout";
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
          dispatch(updatetabname("sellout"));
          dispatch(fetchcustomersellout(json));
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
  const handleSellIn = async () => {
    dispatch(updateloader(true));
    var data = {
      customer: customer,
      search: searchValue,
      tabname: "sellin",
      skulist: skulist,
      rbsku: "",
    };
    try {
      const url = "http://localhost:5000/getcustsellin";
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
          dispatch(updatetabname("sellin"));
          dispatch(fetchcustomersellin(json));
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
          dispatch(fetchcustomerstockposition(json));
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
  const handleOLA = async () => {
    dispatch(updateloader(true));
    var data = {
      customer: customer,
      search: searchValue,
      tabname: "ola",
      skulist: skulist,
      rbsku: "",
    };
    try {
      const url = "http://localhost:5000/getcustola";
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
          dispatch(updatetabname("ola"));
          dispatch(fetchcustomerola(json));
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
          Sell Out Forecast <span style={{ fontSize: "14px" }}>( S-OLA )</span>
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 3 ? "white" : "#415A6C",
          }}
          onClick={handleSellIn}
        >
          Sell In Forecast{" "}
          <span style={{ fontSize: "14px" }}> ( S-OLA / Kinaxis )</span>
        </Tab>
        <Tab
          style={{
            border: "1px solid #E5EBEF",
            color: activeTab === 4 ? "white" : "#415A6C",
          }}
          onClick={handleStockPosition}
        >
          Expected SOH at EOW
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
    </Tabs>
  );
};

export default OhrCustomerTabs;
