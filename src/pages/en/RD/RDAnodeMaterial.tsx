import PageNav from '../../../components/PageNav';

const RDAnodeMaterial = () => {
  return (
    <div>
      <PageNav
        title='Anode Material'
        parentTitle='R&D'
        parentPath='/en/rd/anode-material'
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

      <h1>Anode Material R&D</h1>
      <p>This is the anode material R&D page.</p>
    </div>
  );
};

export default RDAnodeMaterial;
