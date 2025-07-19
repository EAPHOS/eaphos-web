import PageNav from '../../../components/PageNav';

const SolventExtractant = () => {
  return (
    <div>
      <PageNav
        title='용매 추출제'
        parentTitle='Product'
        parentPath='/kr/product/industrial-detergent'
        siblings={[
          { title: '공업용 세정제', path: '/kr/product/industrial-detergent' },
          { title: '용매추출제', path: '/kr/product/solvent-extractant' },
          {
            title: '수처리 솔루션',
            path: '/kr/product/water-treatment-solution',
          },
          { title: '에너지 시스템', path: '/kr/product/energy-system' },
          { title: '음극재 소재', path: '/kr/product/anode-material' },
        ]}
        imageClass='rndTop'
      />
      <h1>용매 추출제</h1>
      <p>용매 추출제 제품 페이지입니다.</p>
    </div>
  );
};

export default SolventExtractant;
