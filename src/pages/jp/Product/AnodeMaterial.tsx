import PageNav from '../../../components/PageNav';

const AnodeMaterial = () => {
  return (
    <div>
      <PageNav
        title='陰極材素材'
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
        <h3>負極材素材</h3>
        <div className='pdb20'></div>
        <h1>研究開発中です。</h1>
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
