import PageNav from '../../../components/PageNav';

const RDEnergySystem = () => {
  return (
    <div>
      <PageNav
        title='Energy System'
        parentTitle='R&D'
        parentPath='/en/rd/energy-system'
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
      <h1>Energy System R&D</h1>
      <p>This is the energy system R&D page.</p>
    </div>
  );
};

export default RDEnergySystem;
