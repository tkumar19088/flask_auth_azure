import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Sellinforecast from "./components/SellinForecast/Sellinforecast";
import Selloutforecast from "./components/SelloutForecast/Selloutforecast";
import OverviewHighRisk from "./components/OverviewHighRisk/OverviewHighRisk2";
import Carousel from "./components/Carousel/Carousel";
import StockReallocation from "./components/StockReallocation/StockReallocation";
import IrregularPO from "./components/Irregularpo/Irregularpo";
import HistoricalData from "./components/RetailerNegotation/HistoricalData";
import Printscreen from "./components/Printscreen/Printscreen";
import Irregularcharts from "./components/Irregularpo/Irregularcharts";
import Overview from "./components/OverviewHighRisk/Overview";

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
          <Route path="/overview" element={<Overview />} />

          <Route path="/carousel" element={<Carousel />} />
          <Route path="/irregular" element={<IrregularPO />} />
          <Route path="/irregularcharts" element={<Irregularcharts />} />
          <Route path="/historicaldata" element={<HistoricalData />} />
          <Route path="/print" element={<Printscreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
