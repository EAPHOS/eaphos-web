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
      <h1>Energy System</h1>
      <p>This is the energy system product page.</p>
    </div>
  );
};

export default EnergySystem;
