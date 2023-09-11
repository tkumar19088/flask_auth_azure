import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Sellinforecast from "./components/SellinForecast/Sellinforecast";
import Selloutforecast from "./components/SelloutForecast/Selloutforecast";
import OverviewHighRisk from "./components/OverviewHighRisk/OverviewHighRisk2";
import Carousel from "./components/Carousel/Carousel";
import StockReallocation from "./components/StockReallocation/StockReallocation";
import ExportCSV from "./components/Export/Exportcsv";
import ScreenshotComponent from "./components/Printscreen/Printscreen";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sellinforecast" element={<Sellinforecast />} />
          <Route path="/selloutforecast" element={<Selloutforecast />} />
          <Route path="/overviewhighrisk" element={<OverviewHighRisk />} />
          <Route path="/stockreallocation" element={<StockReallocation />} />

          <Route path="/carousel" element={<Carousel />} />
          <Route path="/exportcsv" element={<ExportCSV />} />
          <Route path="/printscreen" element={<ScreenshotComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
