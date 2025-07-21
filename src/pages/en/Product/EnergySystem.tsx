import PageNav from '../../../components/PageNav';

const EnergySystem = () => {
  return (
    <div>
      <PageNav
        title='Energy System'
        parentTitle='Product'
        parentPath='/en/product/industrial-detergent'
        siblings={[
          {
            title: 'Industrial Detergent',
            path: '/en/product/industrial-detergent',
          },
          {
            title: 'Solvent Extractant',
            path: '/en/product/solvent-extractant',
          },
          {
            title: 'Water Treatment Solution',
            path: '/en/product/water-treatment-solution',
          },
          { title: 'Energy System', path: '/en/product/energy-system' },
          { title: 'Anode Material', path: '/en/product/anode-material' },
        ]}
        imageClass='rndTop'
      />
      
      {/* DC 차단기의 장점 섹션 */}
      <div className='s-comm container'>
        <h3>Advantages of DC Breaker</h3>
        <div className='pdb20'></div>
        <h1>
          By introducing the energy system,
          <br />
          EA PHOS uses energy more efficiently and safely
        </h1>
      </div>
      
      {/* 메인 콘텐츠 섹션 */}
      <section className='container com-comm s-comm'>
        <div className='pdt20'></div>
        <ul className='twoDiv'>
          <li>
            <h5 className='wd80'>
              As the need for energy independence and environmental conservation
              emerged after the energy crisis, investment in new renewable
              energy increased actively.
              <br />
              <br />
              We plan to use renewable energy in ESS(Energy Storage System)
              where the energy system is introduced to manufacture our key
              products, solvent extractants.
              <br />
              <br />
              The existence of the energy system makes it possible to
              use energy stored in ESS more efficiently and safely to prevent
              fire accidents.
            </h5>
          </li>
          <li>
            <p className='center'>
              <img
                src='/src/assets/pro04-01.png'
                alt='Energy System Diagram'
                className='res-img'
              />
            </p>
          </li>
        </ul>
      </section>
      
      <div className='pdt40'></div>
      <div className='pdt80'></div>
      
      {/* PCS 한류기 설비 전체적인 구성 */}
      <div className='s-comm container'>
        <h3>Overall Configuration of PCS Fault Current Limiter Equipment</h3>
        <div className='pdb40'></div>
        <p>
          <img
            src='/src/assets/pro04-03_en.png'
            alt='Overall Configuration of PCS Fault Current Limiter Equipment'
            className='res-img'
          />
        </p>
      </div>
      
      <div className='pdt80'></div>
      
      {/* PCS 한류기 시험 주회로 구성 및 주요기기 동작 시퀀스 */}
      <div className='s-comm container'>
        <h3>
          PCS Fault Current Limiter Test Main Circuit Configuration and Main
          Device Operation Sequence
        </h3>
        <div className='pdb40'></div>
        <p>
          <img
            src='/src/assets/pro04-02_en.png'
            alt='PCS Fault Current Limiter Test Main Circuit Configuration'
            className='res-img'
          />
        </p>
      </div>
      
      <div className='pdt80'></div>
      
      {/* 사업 영역 */}
      <div className='s-comm container pro01 com-comm'>
        <div className='s-comm container'>
          <ul>
            <h4>DC Transmission and Distribution System Business</h4>
            <h5>- Breaker</h5>
            <h5>- Fault Current Limiter</h5>
          </ul>
          <ul>
            <h4>Zinc-Bromine ESS</h4>
            <h5>- Flow Battery Separator</h5>
          </ul>
        </div>
      </div>
      
      <div className='pdb80'></div>
    </div>
  );
};

export default EnergySystem;
