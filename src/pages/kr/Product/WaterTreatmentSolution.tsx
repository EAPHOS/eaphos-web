import PageNav from '../../../components/PageNav';

const WaterTreatmentSolution = () => {
  return (
    <div>
      <PageNav
        title='수처리 솔루션'
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
      <div className='s-comm container'>
        <h3>폴리케톤 (단섬)</h3>
        <div className='pdb20'></div>
        <h1>
          각 이온교환수지 및 멤브레인을 <br />
          폴리케톤 섬유를 이용하여 제작 합니다
        </h1>
      </div>
      <section className='container com-comm s-comm'>
        <div className='pdt20'></div>
        <ul className='twoDiv'>
          <li>
            <h5 className='wd80'>
              소재는 폴리케톤(Polyketone)이라는 고분자를 사용하여 수처리 소재 및
              매트리스 커버의 단섬유를 제조합니다.
              <br />
              자사는 분리막 소재로 폴리케톤(Polyketone)이라는 고분자를 사용할
              것입니다. <br />이 고분자는 일반적으로 내마모 특성이 우수하여 기여
              부품에 사용되고 있는 POM보다 14배 이상의 내마모 특성을 지니고
              있으며, 각종 유기 용제나 약산염기에 PA66 대비 우수한 내화학성을
              지니고 있습니다. <br /> <br />
              현재 국내에서 생산되고 있는 원재료로 전량 수입하는 PVDF 대비 완전
              국산화를 실현할 수 있으며, 기존 이차전지에도 확산시킬 계획입니다.
            </h5>
          </li>
          <li>
            <p className='center'>
              <img src='/assets/pro03-01.png' alt='polyketone' />
            </p>
          </li>
        </ul>
      </section>
      <div className='pdt100'></div>
      <div className='s-comm container s-pad-bt'>
        <h1>이온교환수지 </h1>
        <div className='pdb20'></div>
        <h5>
          · 폐수의 전이금속(금속이온) 함유량 분석
          <br />
          · 전이금속 함유량에 따른 이온교환수지 선택
          <br />
          · 이온교환수지의 표면개질을 통한 Charge density 조절 → 극미량의
          유가금속이온 재생을 위함
          <br />· 이온교환수지의 성능 평가
        </h5>
        <div className='pdt30'></div>
        <p className='center'>
          <img
            src='/assets/pro03-02.png'
            alt='ion-exchange-resin'
            className='res-img'
          />
        </p>
        <div className='pdt50'></div>
        <p className='center'>
          <img
            src='/assets/pro03-03.jpg'
            alt='IER charge density and polymer oxidation diagram'
            className='res-img'
          />
        </p>
      </div>
    </div>
  );
};

export default WaterTreatmentSolution;
