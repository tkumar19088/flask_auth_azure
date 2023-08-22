import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import OverviewHighRisk from "./components/OverviewHighRisk/OverviewHighRisk";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataTable from "./DataTable";
import Investigation from "./components/OrderImvestigation/Investigation";
import Linechart from "./Linechart";
import AirwickElectrical from "./components/AirwickElwctrical/AirwickElectrical";
import AirwickElectrical2 from "./components/AirwickElwctrical/AirwickElectrical2";
import ScenarioGeneration from "./components/Scenario/ScenarioGeneration";
import Orderinvestigationairwick from "./components/Scenario/Orderinvestigationairwick";
import Areachart from "./Areachart";
import InvestigationExport from "./components/OrderImvestigation/InvestigationExport";
// import HorizontalSimilarities from "./components/HorizontalSimilarities/HorizontalSimilarities";
import DataTable2 from "./components/DataTable/DataTable";
import TableWithAccordion from "./TablewithAccordian";
import MyBreadcrumbs from "./MyBreadcrumbs";
import IntersectionPoints from "./Intersectionpoints";
import ExpandableTable from "./Expandabletable";
import Irregularpo from "./components/Irregularpo/Irregularpo";
import HistoricalData from "./components/RetailerNegotation/HistoricalData";
import DashboardNew from "./components/Dashboard/DashboardNew";
import OverviewHighRisk2 from "./components/OverviewHighRisk/OverviewHighRisk2";
import MaterialUITabs from "./components/TabsMaterialui";
import SampleTable from "./sampleTable";
import MultiLevelMultiSelect from "./components/Options";
import MultiLevelSelect from "./components/Option2";
import NestedMenu from "./Nestedmenu";
import Commingsoon from "./Commingsoon";
import StockReallocation from "./components/StockReallocation/StockReallocation";
import Sellinforecast from "./components/SellinForecast/Sellinforecast";
import Selloutforecast from "./components/SelloutForecast/Selloutforecast";
import Newsidebar from "./Newsidebar";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/overviewhighrisk" element={<OverviewHighRisk />} />
          <Route path="/orderinvestigation" element={<Investigation />} />
          <Route path="/datatable" element={<DataTable />} />
          <Route path="/linechart" element={<Linechart />} />
          <Route path="/areachart" element={<Areachart />} />
          <Route path="/airwickelectrical" element={<AirwickElectrical />} />
          <Route path="/airwickelectrical2" element={<AirwickElectrical2 />} />
          <Route path="/scenariogeneration" element={<ScenarioGeneration />} />
          <Route path="/expandabletable" element={<ExpandableTable />} />
          <Route path="/irregularpo" element={<Irregularpo />} />
          <Route path="/sellinforecast" element={<Sellinforecast />} />
          <Route path="/selloutforecast" element={<Selloutforecast />} />
          <Route
            path="/orderinvestigationairwick"
            element={<Orderinvestigationairwick />}
          />
          <Route
            path="/investigationexport"
            element={<InvestigationExport />}
          />

          <Route path="/datatable2" element={<DataTable2 />} />
          <Route path="/tablewithaccordian" element={<TableWithAccordion />} />
          <Route path="/mybreadcrumbs" element={<MyBreadcrumbs />} />
          <Route path="/intersectionpoints" element={<IntersectionPoints />} />
          <Route path="/historicaldata" element={<HistoricalData />} />
          <Route path="/dashboardnew" element={<DashboardNew />} />
          <Route path="/overviewhighrisk2" element={<OverviewHighRisk2 />} />
          <Route path="/materialuitabs" element={<MaterialUITabs />} />
          <Route path="/sampletable" element={<SampleTable />} />
          <Route
            path="/multilevelmultiselect"
            element={<MultiLevelMultiSelect />}
          />
          <Route path="/multilevelselect" element={<MultiLevelSelect />} />
          <Route path="/nestedmenu" element={<NestedMenu />} />
          <Route path="/commingsoon" element={<Commingsoon />} />
          <Route path="/stockreallocation" element={<StockReallocation />} />
          <Route path="/newsidebar" element={<Newsidebar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
