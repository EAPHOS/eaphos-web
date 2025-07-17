import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

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

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeKR />,
    },
    // 한국어 라우트 (/kr/)
    {
      path: '/kr',
      element: <HomeKR />,
    },
    {
      path: '/kr/company/introduction',
      element: <IntroductionKR />,
    },
    {
      path: '/kr/company/certification',
      element: <CertificationKR />,
    },
    {
      path: '/kr/company/investors',
      element: <InvestorsKR />,
    },
    {
      path: '/kr/product/industrial-detergent',
      element: <IndustrialDetergentKR />,
    },
    {
      path: '/kr/product/solvent-extractant',
      element: <SolventExtractantKR />,
    },
    {
      path: '/kr/product/water-treatment-solution',
      element: <WaterTreatmentSolutionKR />,
    },
    {
      path: '/kr/product/energy-system',
      element: <EnergySystemKR />,
    },
    {
      path: '/kr/product/anode-material',
      element: <AnodeMaterialKR />,
    },
    {
      path: '/kr/rd/business-roadmap',
      element: <BusinessRoadmapKR />,
    },
    {
      path: '/kr/rd/solvent-extractant',
      element: <RDSolventExtractantKR />,
    },
    {
      path: '/kr/rd/water-treatment-solution',
      element: <RDWaterTreatmentSolutionKR />,
    },
    {
      path: '/kr/rd/energy-system',
      element: <RDEnergySystemKR />,
    },
    {
      path: '/kr/rd/anode-material',
      element: <RDAnodeMaterialKR />,
    },
    {
      path: '/kr/notice/exhibition',
      element: <ExhibitionKR />,
    },
    {
      path: '/kr/notice/news',
      element: <NewsKR />,
    },
    // 영어 라우트 (/en/)
    {
      path: '/en',
      element: <HomeEN />,
    },
    {
      path: '/en/company/introduction',
      element: <IntroductionEN />,
    },
    {
      path: '/en/company/certification',
      element: <CertificationEN />,
    },
    {
      path: '/en/company/investors',
      element: <InvestorsEN />,
    },
    {
      path: '/en/product/industrial-detergent',
      element: <IndustrialDetergentEN />,
    },
    {
      path: '/en/product/solvent-extractant',
      element: <SolventExtractantEN />,
    },
    {
      path: '/en/product/water-treatment-solution',
      element: <WaterTreatmentSolutionEN />,
    },
    {
      path: '/en/product/energy-system',
      element: <EnergySystemEN />,
    },
    {
      path: '/en/product/anode-material',
      element: <AnodeMaterialEN />,
    },
    {
      path: '/en/rd/business-roadmap',
      element: <BusinessRoadmapEN />,
    },
    {
      path: '/en/rd/solvent-extractant',
      element: <RDSolventExtractantEN />,
    },
    {
      path: '/en/rd/water-treatment-solution',
      element: <RDWaterTreatmentSolutionEN />,
    },
    {
      path: '/en/rd/energy-system',
      element: <RDEnergySystemEN />,
    },
    {
      path: '/en/rd/anode-material',
      element: <RDAnodeMaterialEN />,
    },
    {
      path: '/en/notice/exhibition',
      element: <ExhibitionEN />,
    },
    {
      path: '/en/notice/news',
      element: <NewsEN />,
    },
    // 일본어 라우트 (/jp/)
    {
      path: '/jp',
      element: <HomeJP />,
    },
    {
      path: '/jp/company/introduction',
      element: <IntroductionJP />,
    },
    {
      path: '/jp/company/certification',
      element: <CertificationJP />,
    },
    {
      path: '/jp/company/investors',
      element: <InvestorsJP />,
    },
    {
      path: '/jp/product/industrial-detergent',
      element: <IndustrialDetergentJP />,
    },
    {
      path: '/jp/product/solvent-extractant',
      element: <SolventExtractantJP />,
    },
    {
      path: '/jp/product/water-treatment-solution',
      element: <WaterTreatmentSolutionJP />,
    },
    {
      path: '/jp/product/energy-system',
      element: <EnergySystemJP />,
    },
    {
      path: '/jp/product/anode-material',
      element: <AnodeMaterialJP />,
    },
    {
      path: '/jp/rd/business-roadmap',
      element: <BusinessRoadmapJP />,
    },
    {
      path: '/jp/rd/solvent-extractant',
      element: <RDSolventExtractantJP />,
    },
    {
      path: '/jp/rd/water-treatment-solution',
      element: <RDWaterTreatmentSolutionJP />,
    },
    {
      path: '/jp/rd/energy-system',
      element: <RDEnergySystemJP />,
    },
    {
      path: '/jp/rd/anode-material',
      element: <RDAnodeMaterialJP />,
    },
    {
      path: '/jp/notice/exhibition',
      element: <ExhibitionJP />,
    },
    {
      path: '/jp/notice/news',
      element: <NewsJP />,
    },
    // 기존 라우트들 (리다이렉트용)
    {
      path: '/company/introduction',
      element: <IntroductionKR />,
    },
    {
      path: '/company/certification',
      element: <CertificationKR />,
    },
    {
      path: '/company/investors',
      element: <InvestorsKR />,
    },
    {
      path: '/product/industrial-detergent',
      element: <IndustrialDetergentKR />,
    },
    {
      path: '/product/solvent-extractant',
      element: <SolventExtractantKR />,
    },
    {
      path: '/product/water-treatment-solution',
      element: <WaterTreatmentSolutionKR />,
    },
    {
      path: '/product/energy-system',
      element: <EnergySystemKR />,
    },
    {
      path: '/product/anode-material',
      element: <AnodeMaterialKR />,
    },
    {
      path: '/rd/business-roadmap',
      element: <BusinessRoadmapKR />,
    },
    {
      path: '/rd/solvent-extractant',
      element: <RDSolventExtractantKR />,
    },
    {
      path: '/rd/water-treatment-solution',
      element: <RDWaterTreatmentSolutionKR />,
    },
    {
      path: '/rd/energy-system',
      element: <RDEnergySystemKR />,
    },
    {
      path: '/rd/anode-material',
      element: <RDAnodeMaterialKR />,
    },
    {
      path: '/notice/exhibition',
      element: <ExhibitionKR />,
    },
    {
      path: '/notice/news',
      element: <NewsKR />,
    },
  ].map(route => ({
    ...route,
    element: <Layout>{route.element}</Layout>,
  }))
);
