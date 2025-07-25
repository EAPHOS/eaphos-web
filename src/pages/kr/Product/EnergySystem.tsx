import PageNav from '../../../components/PageNav';

const EnergySystem = () => {
  return (
    <div>
      <PageNav
        title='에너지 시스템'
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
        <h3>DC 차단기의 장점</h3>
        <div className='pdb20'></div>
        <h1>
          (주)이에이포스는 에너지 시스템을 도입함으로써
          <br />
          에너지를 더 효율적이고 안전하게 사용합니다.
        </h1>
      </div>
      <section className='container com-comm s-comm'>
        <div className='pdt20'></div>
        <ul className='twoDiv'>
          <li>
            <h5 className='wd80'>
              에너지 대란 이후 에너지 자립에 대한 필요성과 환경 보존에 대한
              필요성이 대두되면서,
              <br />
              신재생에너지에 대한 투자가 적극적으로 증가하게 되었습니다.
              <br />
              자사는 자사의 주요 제품인 용매추출제를 제조함에 있어, <br />
              에너지 시스템이 도입된 ESS(Energy Storage System)에서 재생에너지를
              사용할 예정입니다.
              <br />
              <br />
              에너지 시스템이 존재함으로 화재 사고의 예방을 위한 것으로 ESS 내
              저장되어 있는 에너지를
              <br />더 효율적이고 안전하게 사용이 가능합니다.
            </h5>
          </li>
          <li>
            <p className='center'>
              <img
                src='/assets/pro04-01.png'
                alt='energy-system'
                className='res-img'
              />
            </p>
          </li>
        </ul>
      </section>
      <div className='pdt40'></div>
      <div className='pdt80'></div>
      <div className='s-comm container'>
        <h3>PCS 한류기 설비 전체적인 구성</h3>
        <div className='pdb40'></div>
        <p>
          <img
            src='/assets/pro04-03.png'
            alt='Overall Configuation of PCS'
            className='res-img'
          />
        </p>
      </div>
      <div className='pdt80'></div>
      <div className='s-comm container'>
        <h3>PCS 한류기 시험 주회로 구성 및 주요기기 동작 시퀀스</h3>
        <div className='pdb40'></div>
        <p>
          <img
            src='/assets/pro04-02.png'
            alt='PPCS and Main Sequence'
            className='res-img'
          />
        </p>
      </div>
      <div className='pdt80'></div>
      <div className='s-comm container pro01 com-comm'>
        <div className='s-comm container'>
          <ul>
            <h4>직류 송배전 시스템 사업</h4>
            <h5>- 차단기</h5>
            <h5>- 한류기</h5>
          </ul>
          <ul>
            <h4>징크브로마이드 ESS</h4>
            <h5>- 흐름전지 분리막</h5>
          </ul>
        </div>
      </div>
      <div className='pdb80'></div>
    </div>
  );
};

export default EnergySystem;
