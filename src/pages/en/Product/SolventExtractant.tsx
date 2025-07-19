import PageNav from '../../../components/PageNav';

const SolventExtractant = () => {
  return (
    <div>
      <PageNav
        title='Solvent Extractant'
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
      <h1>Solvent Extractant</h1>
      <p>This is the solvent extractant product page.</p>
    </div>
  );
};

export default SolventExtractant;
