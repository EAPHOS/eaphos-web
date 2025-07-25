import PageNav from '../../../components/PageNav';

const SolventExtractant = () => {
  return (
    <div>
      <PageNav
        title='溶媒抽出剤'
        parentTitle='Product'
        parentPath='/jp/product/industrial-detergent'
        siblings={[
          {
            title: '工業用洗浄剤',
            path: '/jp/product/industrial-detergent',
          },
          {
            title: '溶媒抽出剤',
            path: '/jp/product/solvent-extractant',
          },
          {
            title: '水処理・ソリューション',
            path: '/jp/product/water-treatment-solution',
          },
          { title: 'エネルギー・システム', path: '/jp/product/energy-system' },
          { title: '陰極材素材', path: '/jp/product/anode-material' },
        ]}
        imageClass='rndTop'
      />
      <div className='s-comm container'>
        <h3>溶媒抽出剤</h3>
        <div className='pdb20'></div>
        <h1>主力溶媒抽出剤3種</h1>
      </div>
      <section className='container com-comm s-comm pro02'>
        <div className='pdt20'></div>
        <ul>
          <li>
            <p>
              <img src='/assets/pro02-01.png' alt='' />
            </p>
            <h5>Co 抽出剤 (THORE-PHOS SOLEX 272)</h5>
          </li>
          <li>
            <p>
              <img src='/assets/pro02-02.png' alt='' />
            </p>
            <h5>Mn 抽出剤 (THORE-PHOS SOLEX 507)</h5>
          </li>
          <li>
            <p>
              <img src='/assets/pro02-03.png' alt='' />
            </p>
            <h5>Li 抽出剤 (THORE-PHOS SOLEX Li)</h5>
          </li>
        </ul>
      </section>
      <div className='pdt100'></div>
      <div className='s-comm container'>
        <h3>不純物除去剤</h3>
        <div className='pdb20'></div>
        <h1>主力不純物除去剤3種</h1>
      </div>
      <section className='container s-pad-bt com-comm s-comm pro02'>
        <div className='pdt20'></div>
        <ul>
          <li>
            <p>
              <img src='/assets/pro02-04.png' alt='' />
            </p>
            <h5>Fe, V, Zn, Mn 除去 (THOE-PHOS SOLEX 204)</h5>
          </li>
          <li>
            <p>
              <img src='/assets/pro02-05.png' alt='' />
            </p>
            <h5>Cu 除去</h5>
          </li>
          <li>
            <p>
              <img src='/assets/pro02-06.png' alt='' />
            </p>
            <h5>Al 除去 (2025年発売予定)</h5>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SolventExtractant;
