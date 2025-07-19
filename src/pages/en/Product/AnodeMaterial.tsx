import PageNav from '../../../components/PageNav';

const AnodeMaterial = () => {
  return (
    <div>
      <PageNav
        title='Anode Material'
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
        <h3>Anode Material</h3>
        <div className='pdb20'></div>
        <h1>It is under research and development.</h1>
      </div>
      <section className='container com-comm s-comm s-pad-bt'>
        <div className='pdt20'></div>
        <ul className='twoDiv'>
          <li></li>
          <li></li>
        </ul>
      </section>
    </div>
  );
};

export default AnodeMaterial;
