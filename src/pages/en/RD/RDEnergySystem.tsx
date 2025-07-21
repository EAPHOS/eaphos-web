import PageNav from '../../../components/PageNav';

const RDEnergySystem = () => {
  return (
    <div className='responsive-container'>
      <PageNav
        title='Energy System'
        parentTitle='R&D'
        parentPath='/en/rd/business-roadmap'
        siblings={[
          { title: 'Business Roadmap', path: '/en/rd/business-roadmap' },
          { title: 'Solvent Extractants', path: '/en/rd/solvent-extractant' },
          {
            title: 'Water Treatment Solutions',
            path: '/en/rd/water-treatment-solution',
          },
          { title: 'Energy Systems', path: '/en/rd/energy-system' },
          { title: 'Anode Materials', path: '/en/rd/anode-material' },
        ]}
        imageClass='rndTop'
      />

      {/* Research Background and Necessity Section */}
      <div className='s-comm container responsive-section'>
        <h3 className='responsive-title'>Research Background and Necessity</h3>
        <div className='pdb20'></div>
        <h1 className='responsive-heading'>
          It is receiving attention as an essential system to stably supply new renewable energy,
          <br />
          but continuous research is required due to the risk of fire.
        </h1>
      </div>

      {/* Main Content Section */}
      <section className='container com-comm s-comm responsive-section'>
        <div className='pdt20'></div>
        <ul className='twoDiv responsive-grid'>
          <li className='responsive-text'>
            <h5 className='wd80 responsive-paragraph'>
              Energy Storage System (ESS) is a technology that stores electricity produced by solar or wind power
              <br />
              in the battery and then uses it when power is scarce.
              <br />
              <br />
              It is receiving attention as an essential system to stably supply new renewable energy,
              <br />
              but continuous research is required due to the risk of fire.
              <br />
              <br />
              <br />
              EA PHOS plans to provide flexibility in power system operation and
              <br />
              supply power efficiently by utilizing renewable energy when producing its products with ESS devices
              <br />
              that have installed energy systems.
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

      {/* Fault current limiter for DC grid and its control method */}
      <div className='s-comm container responsive-section'>
        <h3 className='responsive-title'>Fault current limiter for DC grid and its control method</h3>
        <div className='pdb40'></div>
        <p className='responsive-image-container'>
          <img
            src='/src/assets/rd-energy02.png'
            alt='DC Grid Fault Current Limiter'
            className='res-img responsive-img'
          />
        </p>
        <div className='pdt40'></div>
        <h5 className='wd80 responsive-paragraph'>
          The fault current limiter for DC grid according to the present invention is a sensor that detects a fault current according to a current change in DC power supplied
          <br />
          to the DC power system, in the fault current limiter provided between a converter that converts AC power into DC power and the DC power system to limit the fault current
        </h5>
      </div>

      <div className='pdb80 responsive-spacing'></div>
    </div>
  );
};

export default RDEnergySystem;

