import PageNav from '../../../components/PageNav';

const IndustrialDetergent = () => {
  return (
    <div>
      <PageNav
        title='공업용 세정제'
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
      <div className='s-comm container pro01 com-comm'>
        <h3>공업용세정제</h3>
        <div className='pdb20'></div>
        <h1>
          공업용 세정제, CLEANTOP<span className='rr'> ® </span> 입니다.
        </h1>
        <h5></h5>
        <div className='s-comm container'>
          <ul>
            <h4>HM 45 마스크 전처리 세정제</h4>
          </ul>
          <ul>
            <h4>HM 47A 마스크 후처리 세정제</h4>
          </ul>
          <ul>
            <h4>SPC 8000 광학용 세정제</h4>
          </ul>
          <ul>
            <h4>BBP 자동차범퍼 재활용 세정제</h4>
          </ul>
        </div>
      </div>
      <div className='pdt70'></div>
      <div className='s-comm container pro01 com-comm  s-pad-bt'>
        <h3>특수잉크</h3>
        <h5>공업용 세정제의 특수잉크 입니다.</h5>
        <div className='s-comm container'>
          <ul>
            <h4>UV 잉크</h4>
          </ul>
          <ul>
            <h4>QD 잉크</h4>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndustrialDetergent;
