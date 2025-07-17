import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

// Company 페이지들
import Introduction from "./pages/Company/Introduction";
import Certification from "./pages/Company/Certification";
import Investors from "./pages/Company/Investors";

// Product 페이지들
import IndustrialDetergent from "./pages/Product/IndustrialDetergent";
import SolventExtractant from "./pages/Product/SolventExtractant";
import WaterTreatmentSolution from "./pages/Product/WaterTreatmentSolution";
import EnergySystem from "./pages/Product/EnergySystem";
import AnodeMaterial from "./pages/Product/AnodeMaterial";

// R&D 페이지들
import BusinessRoadmap from "./pages/RD/BusinessRoadmap";
import RDSolventExtractant from "./pages/RD/RDSolventExtractant";
import RDWaterTreatmentSolution from "./pages/RD/RDWaterTreatmentSolution";
import RDEnergySystem from "./pages/RD/RDEnergySystem";
import RDAnodeMaterial from "./pages/RD/RDAnodeMaterial";

// Notice 페이지들
import Exhibition from "./pages/Notice/Exhibition";
import News from "./pages/Notice/News";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 기본 홈페이지 */}
          <Route path="/" element={<Home />} />
          {/* Company 라우트 */}
          <Route path="/company/introduction" element={<Introduction />} />
          <Route path="/company/certification" element={<Certification />} />
          <Route path="/company/investors" element={<Investors />} />

          {/* Product 라우트 */}
          <Route
            path="/product/industrial-detergent"
            element={<IndustrialDetergent />}
          />
          <Route
            path="/product/solvent-extractant"
            element={<SolventExtractant />}
          />
          <Route
            path="/product/water-treatment-solution"
            element={<WaterTreatmentSolution />}
          />
          <Route path="/product/energy-system" element={<EnergySystem />} />
          <Route path="/product/anode-material" element={<AnodeMaterial />} />

          {/* R&D 라우트 */}
          <Route path="/rd/business-roadmap" element={<BusinessRoadmap />} />
          <Route
            path="/rd/solvent-extractant"
            element={<RDSolventExtractant />}
          />
          <Route
            path="/rd/water-treatment-solution"
            element={<RDWaterTreatmentSolution />}
          />
          <Route path="/rd/energy-system" element={<RDEnergySystem />} />
          <Route path="/rd/anode-material" element={<RDAnodeMaterial />} />

          {/* Notice 라우트 */}
          <Route path="/notice/exhibition" element={<Exhibition />} />
          <Route path="/notice/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
