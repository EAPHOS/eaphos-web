import PageNav from '../../../components/PageNav';

const RDAnodeMaterial = () => {
  return (
    <div>
      <PageNav
        title='음극재소재'
        parentTitle='R&D'
        parentPath='/kr/rd/anode-material'
        siblings={[
          { title: '사업 로드맵', path: '/kr/rd/business-roadmap' },
          { title: '용매추출제', path: '/kr/rd/solvent-extraction' },
          { title: '수처리 솔루션', path: '/kr/rd/water-treatment-solution' },
          { title: '에너지 시스템', path: '/kr/rd/energy-system' },
          { title: '음극재소재', path: '/kr/rd/anode-material' },
        ]}
        imageClass='rndTop'
      />
      <h1>양극재 R&D</h1>
      <p>양극재 연구개발 페이지입니다.</p>
    </div>
  );
};

export default RDAnodeMaterial;
