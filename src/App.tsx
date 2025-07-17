import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// 한국어 컴포넌트들
import HomeKR from './pages/kr/Home';
import IntroductionKR from './pages/kr/Company/Introduction';
import CertificationKR from './pages/kr/Company/Certification';
import InvestorsKR from './pages/kr/Company/Investors';
import NewsKR from './pages/kr/Notice/News';
import ExhibitionKR from './pages/kr/Notice/Exhibition';
import IndustrialDetergentKR from './pages/kr/Product/IndustrialDetergent';
import SolventExtractantKR from './pages/kr/Product/SolventExtractant';
import WaterTreatmentSolutionKR from './pages/kr/Product/WaterTreatmentSolution';
import EnergySystemKR from './pages/kr/Product/EnergySystem';
import AnodeMaterialKR from './pages/kr/Product/AnodeMaterial';
import BusinessRoadmapKR from './pages/kr/RD/BusinessRoadmap';
import RDSolventExtractantKR from './pages/kr/RD/RDSolventExtractant';
import RDWaterTreatmentSolutionKR from './pages/kr/RD/RDWaterTreatmentSolution';
import RDEnergySystemKR from './pages/kr/RD/RDEnergySystem';
import RDAnodeMaterialKR from './pages/kr/RD/RDAnodeMaterial';

// 영어 컴포넌트들
import HomeEN from './pages/en/Home';
import IntroductionEN from './pages/en/Company/Introduction';
import CertificationEN from './pages/en/Company/Certification';
import InvestorsEN from './pages/en/Company/Investors';
import NewsEN from './pages/en/Notice/News';
import ExhibitionEN from './pages/en/Notice/Exhibition';
import IndustrialDetergentEN from './pages/en/Product/IndustrialDetergent';
import SolventExtractantEN from './pages/en/Product/SolventExtractant';
import WaterTreatmentSolutionEN from './pages/en/Product/WaterTreatmentSolution';
import EnergySystemEN from './pages/en/Product/EnergySystem';
import AnodeMaterialEN from './pages/en/Product/AnodeMaterial';
import BusinessRoadmapEN from './pages/en/RD/BusinessRoadmap';
import RDSolventExtractantEN from './pages/en/RD/RDSolventExtractant';
import RDWaterTreatmentSolutionEN from './pages/en/RD/RDWaterTreatmentSolution';
import RDEnergySystemEN from './pages/en/RD/RDEnergySystem';
import RDAnodeMaterialEN from './pages/en/RD/RDAnodeMaterial';

// 일본어 컴포넌트들
import HomeJP from './pages/jp/Home';
import IntroductionJP from './pages/jp/Company/Introduction';
import CertificationJP from './pages/jp/Company/Certification';
import InvestorsJP from './pages/jp/Company/Investors';
import NewsJP from './pages/jp/Notice/News';
import ExhibitionJP from './pages/jp/Notice/Exhibition';
import IndustrialDetergentJP from './pages/jp/Product/IndustrialDetergent';
import SolventExtractantJP from './pages/jp/Product/SolventExtractant';
import WaterTreatmentSolutionJP from './pages/jp/Product/WaterTreatmentSolution';
import EnergySystemJP from './pages/jp/Product/EnergySystem';
import AnodeMaterialJP from './pages/jp/Product/AnodeMaterial';
import BusinessRoadmapJP from './pages/jp/RD/BusinessRoadmap';
import RDSolventExtractantJP from './pages/jp/RD/RDSolventExtractant';
import RDWaterTreatmentSolutionJP from './pages/jp/RD/RDWaterTreatmentSolution';
import RDEnergySystemJP from './pages/jp/RD/RDEnergySystem';
import RDAnodeMaterialJP from './pages/jp/RD/RDAnodeMaterial';

// 기존 컴포넌트들 (기본용)
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {/* 기본 홈페이지 - 한국어로 리다이렉트 */}
          <Route path='/' element={<Home />} />

          {/* 한국어 라우트 (/kr/) */}
          <Route path='/kr' element={<HomeKR />} />
          <Route path='/kr/company/introduction' element={<IntroductionKR />} />
          <Route
            path='/kr/company/certification'
            element={<CertificationKR />}
          />
          <Route path='/kr/company/investors' element={<InvestorsKR />} />
          <Route
            path='/kr/product/industrial-detergent'
            element={<IndustrialDetergentKR />}
          />
          <Route
            path='/kr/product/solvent-extractant'
            element={<SolventExtractantKR />}
          />
          <Route
            path='/kr/product/water-treatment-solution'
            element={<WaterTreatmentSolutionKR />}
          />
          <Route
            path='/kr/product/energy-system'
            element={<EnergySystemKR />}
          />
          <Route
            path='/kr/product/anode-material'
            element={<AnodeMaterialKR />}
          />
          <Route
            path='/kr/rd/business-roadmap'
            element={<BusinessRoadmapKR />}
          />
          <Route
            path='/kr/rd/solvent-extractant'
            element={<RDSolventExtractantKR />}
          />
          <Route
            path='/kr/rd/water-treatment-solution'
            element={<RDWaterTreatmentSolutionKR />}
          />
          <Route path='/kr/rd/energy-system' element={<RDEnergySystemKR />} />
          <Route path='/kr/rd/anode-material' element={<RDAnodeMaterialKR />} />
          <Route path='/kr/notice/exhibition' element={<ExhibitionKR />} />
          <Route path='/kr/notice/news' element={<NewsKR />} />

          {/* 영어 라우트 (/en/) */}
          <Route path='/en' element={<HomeEN />} />
          <Route path='/en/company/introduction' element={<IntroductionEN />} />
          <Route
            path='/en/company/certification'
            element={<CertificationEN />}
          />
          <Route path='/en/company/investors' element={<InvestorsEN />} />
          <Route
            path='/en/product/industrial-detergent'
            element={<IndustrialDetergentEN />}
          />
          <Route
            path='/en/product/solvent-extractant'
            element={<SolventExtractantEN />}
          />
          <Route
            path='/en/product/water-treatment-solution'
            element={<WaterTreatmentSolutionEN />}
          />
          <Route
            path='/en/product/energy-system'
            element={<EnergySystemEN />}
          />
          <Route
            path='/en/product/anode-material'
            element={<AnodeMaterialEN />}
          />
          <Route
            path='/en/rd/business-roadmap'
            element={<BusinessRoadmapEN />}
          />
          <Route
            path='/en/rd/solvent-extractant'
            element={<RDSolventExtractantEN />}
          />
          <Route
            path='/en/rd/water-treatment-solution'
            element={<RDWaterTreatmentSolutionEN />}
          />
          <Route path='/en/rd/energy-system' element={<RDEnergySystemEN />} />
          <Route path='/en/rd/anode-material' element={<RDAnodeMaterialEN />} />
          <Route path='/en/notice/exhibition' element={<ExhibitionEN />} />
          <Route path='/en/notice/news' element={<NewsEN />} />

          {/* 일본어 라우트 (/jp/) */}
          <Route path='/jp' element={<HomeJP />} />
          <Route path='/jp/company/introduction' element={<IntroductionJP />} />
          <Route
            path='/jp/company/certification'
            element={<CertificationJP />}
          />
          <Route path='/jp/company/investors' element={<InvestorsJP />} />
          <Route
            path='/jp/product/industrial-detergent'
            element={<IndustrialDetergentJP />}
          />
          <Route
            path='/jp/product/solvent-extractant'
            element={<SolventExtractantJP />}
          />
          <Route
            path='/jp/product/water-treatment-solution'
            element={<WaterTreatmentSolutionJP />}
          />
          <Route
            path='/jp/product/energy-system'
            element={<EnergySystemJP />}
          />
          <Route
            path='/jp/product/anode-material'
            element={<AnodeMaterialJP />}
          />
          <Route
            path='/jp/rd/business-roadmap'
            element={<BusinessRoadmapJP />}
          />
          <Route
            path='/jp/rd/solvent-extractant'
            element={<RDSolventExtractantJP />}
          />
          <Route
            path='/jp/rd/water-treatment-solution'
            element={<RDWaterTreatmentSolutionJP />}
          />
          <Route path='/jp/rd/energy-system' element={<RDEnergySystemJP />} />
          <Route path='/jp/rd/anode-material' element={<RDAnodeMaterialJP />} />
          <Route path='/jp/notice/exhibition' element={<ExhibitionJP />} />
          <Route path='/jp/notice/news' element={<NewsJP />} />

          {/* 기존 라우트들 (리다이렉트용) */}
          <Route path='/company/introduction' element={<IntroductionKR />} />
          <Route path='/company/certification' element={<CertificationKR />} />
          <Route path='/company/investors' element={<InvestorsKR />} />
          <Route
            path='/product/industrial-detergent'
            element={<IndustrialDetergentKR />}
          />
          <Route
            path='/product/solvent-extractant'
            element={<SolventExtractantKR />}
          />
          <Route
            path='/product/water-treatment-solution'
            element={<WaterTreatmentSolutionKR />}
          />
          <Route path='/product/energy-system' element={<EnergySystemKR />} />
          <Route path='/product/anode-material' element={<AnodeMaterialKR />} />
          <Route path='/rd/business-roadmap' element={<BusinessRoadmapKR />} />
          <Route
            path='/rd/solvent-extractant'
            element={<RDSolventExtractantKR />}
          />
          <Route
            path='/rd/water-treatment-solution'
            element={<RDWaterTreatmentSolutionKR />}
          />
          <Route path='/rd/energy-system' element={<RDEnergySystemKR />} />
          <Route path='/rd/anode-material' element={<RDAnodeMaterialKR />} />
          <Route path='/notice/exhibition' element={<ExhibitionKR />} />
          <Route path='/notice/news' element={<NewsKR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
