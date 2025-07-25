import PageNav from '../../../components/PageNav';

const WaterTreatmentSolution = () => {
  return (
    <div>
      <PageNav
        title='Water Treatment Solution'
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
      <div className='s-comm container'>
        <h3>Polyketone (Staple Fiber)</h3>
        <div className='pdb20'></div>
        <h1>
          Each ion exchange resin and membrane is <br />
          manufactured using polyketone fibers.
        </h1>
      </div>
      <section className='container com-comm s-comm'>
        <div className='pdt20'></div>
        <ul className='twoDiv'>
          <li>
            <h5 className='wd80'>
              The material uses a polymer called polyketone to manufacture water
              treatment materials and staple fibers for mattress covers. Our
              company will use a polymer called polyketone as a separator
              material. <br />
              This polymer generally has excellent abrasion resistance, which is
              14 times more resistant than the POM used in contributing parts,
              and has superior chemical resistance to various organic solvents
              and weak acid bases compared to PA66.
              <br />
              <br />
              It is possible to achieve complete localization compared to PVDF,
              which is currently produced domestically and is imported entirely
              as a raw material, and we plan to expand it to existing secondary
              batteries as well.
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
        <h1>Ion Exchange Resin </h1>
        <div className='pdb20'></div>
        <h5>
          · Analysis of transition metal (metal ion) content in wastewater
          <br />
          · Selection of ion exchange resin according to transition metal
          content
          <br />
          · Charge density control through surface modification of ion exchange
          resin → For regeneration of trace amounts of valuable metal ions
          <br />· Performance evaluation of ion exchange resin
        </h5>
        <div className='pdt30'></div>
        <p className='center'>
          <img
            src='/assets/pro03-02_en.png'
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
