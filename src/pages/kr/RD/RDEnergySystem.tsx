import PageNav from '../../../components/PageNav';

const RDEnergySystem = () => {
  return (
    <div className='responsive-container'>
      <PageNav
        title='에너지 시스템'
        parentTitle='R&D'
        parentPath='/kr/rd/business-roadmap'
        siblings={[
          { title: '사업 로드맵', path: '/kr/rd/business-roadmap' },
          { title: '용매추출제', path: '/kr/rd/solvent-extractant' },
          { title: '수처리 솔루션', path: '/kr/rd/water-treatment-solution' },
          { title: '에너지 시스템', path: '/kr/rd/energy-system' },
          { title: '음극재소재', path: '/kr/rd/anode-material' },
        ]}
        imageClass='rndTop'
      />

      {/* 연구 배경 및 필요성 섹션 */}
      <div className='s-comm container responsive-section'>
        <h3 className='responsive-title'>연구 배경 및 필요성</h3>
        <div className='pdb20'></div>
        <h1 className='responsive-heading'>
          신재생 에너지를 안정적으로 공급하기 위해 필수적인 시스템으로 주목받고 있으나,
          <br className='desktop-only' />
          화재의 위험성이 있어 지속적인 연구가 필요
        </h1>
      </div>

      {/* 메인 콘텐츠 섹션 */}
      <section className='container com-comm s-comm responsive-section'>
        <div className='pdt20'></div>
        <ul className='twoDiv responsive-grid'>
          <li className='responsive-text'>
            <h5 className='wd80 responsive-paragraph'>
              에너지 저장장치(Energy Storage System; ESS)는 태양광이나 풍력 등으로 생산된 전기를
              <br className='desktop-only' />
              배터리에 저장해두었다가 전력이 부족할 때 사용할 수 있도록 하는 기술입니다.
              <br />
              이는 신재생 에너지를 안정적으로 공급하기 위해 필수적인 시스템으로 주목받고 있으나
              <br className='desktop-only' />
              화재의 위험성이 있어 지속적인 연구가 필요합니다.
              <br />
              <br />
              <br />
              (주)이에이포스는 에너지시스템을 설치한 ESS 장치로 자사의 제품을 생산할 때
              <br className='desktop-only' />
              재생 에너지를 활용하여 전력계통 운영의 유연성을 제공하고
              <br className='desktop-only' />
              전력을 효율적으로 공급할 예정입니다.
            </h5>
          </li>
          <li className='responsive-image'>
            <p className='center'>
              <img
                src='/src/assets/rd-energy01.png'
                alt='Energy Storage System Research'
                className='res-img responsive-img'
              />
            </p>
          </li>
        </ul>
      </section>

      <div className='pdt40 responsive-spacing'></div>
      <div className='pdt80 responsive-spacing'></div>

      {/* DC 그리드용 고장 전류 제한기 및 그 제어방법 */}
      <div className='s-comm container responsive-section'>
        <h3 className='responsive-title'>DC 그리드용 고장 전류 제한기 및 그 제어방법</h3>
        <div className='pdb40'></div>
        <p className='responsive-image-container'>
          <img
            src='/src/assets/rd-energy02.png'
            alt='DC Grid Fault Current Limiter'
            className='res-img responsive-img'
          />
        </p>
        <div className='pdt40'></div>
        <h5 className='wd80 responsive-paragraph' style={{ whiteSpace: 'pre-line' }}>
          본 발명에 따른 DC그리드용 고장 제한기는, 교류 전력을 직류 전력으로 변환하는 컨버터와 직류 전력시스템 사이에
          <br />마련되어 고장 전류를 제한하는 고장 전류 제한기에 있어서, 상기 직류 전력시스템에 공급되는 직류 전력의 전류 변화에 따른 고장 전류를 감지하는 센서
        </h5>
      </div>

      <div className='pdb80 responsive-spacing'></div>
    </div>
  );
};

export default RDEnergySystem;
