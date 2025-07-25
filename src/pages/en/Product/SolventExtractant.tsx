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
      <div className='s-comm container'>
        <h3>Solvent Extractant</h3>
        <div className='pdb20'></div>
        <h1>Three Main Solvent Extractants</h1>
      </div>
      <section className='container com-comm s-comm pro02'>
        <div className='pdt20'></div>
        <ul>
          <li>
            <p>
              <img src='/assets/pro02-01.png' alt='' />
            </p>
            <h5>Co Extractant (THORE-PHOS SOLEX 272)</h5>
          </li>
          <li>
            <p>
              <img src='/assets/pro02-02.png' alt='' />
            </p>
            <h5>Mn Extractant (THORE-PHOS SOLEX 507)</h5>
          </li>
          <li>
            <p>
              <img src='/assets/pro02-03.png' alt='' />
            </p>
            <h5>Li Extractant (THORE-PHOS SOLEX Li)</h5>
          </li>
        </ul>
      </section>
      <div className='pdt100'></div>
      <div className='s-comm container'>
        <h3>Impurity Remover</h3>
        <div className='pdb20'></div>
        <h1>Three Main Impurity Removers</h1>
      </div>
      <section className='container s-pad-bt com-comm s-comm pro02'>
        <div className='pdt20'></div>
        <ul>
          <li>
            <p>
              <img src='/assets/pro02-04.png' alt='' />
            </p>
            <h5>Fe, V, Zn, Mn Removal (THOE-PHOS SOLEX 204)</h5>
          </li>
          <li>
            <p>
              <img src='/assets/pro02-05.png' alt='' />
            </p>
            <h5>Cu Removal</h5>
          </li>
          <li>
            <p>
              <img src='/assets/pro02-06.png' alt='' />
            </p>
            <h5>Al Removal (To be released in 2025)</h5>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SolventExtractant;
