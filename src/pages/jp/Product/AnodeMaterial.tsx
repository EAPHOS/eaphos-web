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
      <h1>陽極材</h1>
      <p>陽極材製品ページです。</p>
    </div>
  );
};

export default AnodeMaterial;
