import PageNav from '../../../components/PageNav';

const RDSolventExtractant = () => {
  return (
    <div>
      <PageNav
        title='Solvent Extractant'
        parentTitle='R&D'
        parentPath='/en/rd/solvent-extractant'
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
      <h1>Solvent Extractant R&D</h1>
      <p>This is the solvent extractant R&D page.</p>
    </div>
  );
};

export default RDSolventExtractant;
