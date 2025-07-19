import PageNav from '../../../components/PageNav';

const RDAnodeMaterial = () => {
  return (
    <div>
      <PageNav
        title='負極材素材'
        parentTitle='R&D'
        parentPath='/jp/rd/business-roadmap'
        siblings={[
          { title: '事業・ロードマップ', path: '/jp/rd/business-roadmap' },
          { title: '溶媒抽出剤', path: '/jp/rd/solvent-extractant' },
          {
            title: '水処理・ソリューション',
            path: '/jp/rd/water-treatment-solution',
          },
          { title: 'エネルギー・システム', path: '/jp/rd/energy-system' },
          { title: '負極材素材', path: '/jp/rd/anode-material' },
        ]}
        imageClass='rndTop'
      />
      <h1>陽極材 R&D</h1>
      <p>陽極材研究開発ページです。</p>
    </div>
  );
};

export default RDAnodeMaterial;
