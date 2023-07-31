import React, { useEffect } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import OverviewHighRisk from "./components/OverviewHighRisk/OverviewHighRisk";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import DataTable from "./DataTable";
import Investigation from "./components/OrderImvestigation/Investigation";
import Linechart from "./Linechart";
import AirwickElectrical from "./components/AirwickElwctrical/AirwickElectrical";
import AirwickElectrical2 from "./components/AirwickElwctrical/AirwickElectrical2";
import ScenarioGeneration from "./components/Scenario/ScenarioGeneration";
import Orderinvestigationairwick from "./components/Scenario/Orderinvestigationairwick";
import Areachart from "./Areachart";
import InvestigationExport from "./components/OrderImvestigation/InvestigationExport";
import HorizontalSimilarities from "./components/HorizontalSimilarities/HorizontalSimilarities";
import DataTable2 from "./components/DataTable/DataTable";
import TableWithAccordion from "./TablewithAccordian";
import MyBreadcrumbs from "./MyBreadcrumbs";
import IntersectionPoints from "./Intersectionpoints";
import ExpandableTable from "./Expandabletable";
import Irregularpo from "./components/Irregularpo/Irregularpo";
import HistoricalData from "./components/RetailerNegotation/HistoricalData";

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    // Scrolls to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
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
          <Route
            path="/orderinvestigationairwick"
            element={<Orderinvestigationairwick />}
          />
          <Route
            path="/investigationexport"
            element={<InvestigationExport />}
          />
          <Route
            path="/horizontalsimilarities"
            element={<HorizontalSimilarities />}
          />
          <Route path="/datatable2" element={<DataTable2 />} />
          <Route path="/tablewithaccordian" element={<TableWithAccordion />} />
          <Route path="/mybreadcrumbs" element={<MyBreadcrumbs />} />
          <Route path="/intersectionpoints" element={<IntersectionPoints />} />
          <Route path="/historicaldata" element={<HistoricalData />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
