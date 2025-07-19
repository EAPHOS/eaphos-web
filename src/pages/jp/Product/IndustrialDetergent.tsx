import PageNav from '../../../components/PageNav';

const IndustrialDetergent = () => {
  return (
    <div>
      <PageNav
        title='工業用洗浄剤'
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
      <div className='s-comm container pro01 com-comm'>
        <h3>工業用洗浄剤</h3>
        <div className='pdb20'></div>
        <h1>
          工業用洗浄剤、CLEANTOP ®<span className='rr'> ® </span> です。
        </h1>
        <h5></h5>
        <div className='s-comm container'>
          <ul>
            <h4>HM 45 マスク前処理洗浄剤</h4>
          </ul>
          <ul>
            <h4>HM 47A マスク後処理洗浄剤</h4>
          </ul>
          <ul>
            <h4>SPC 8000 光学用洗浄剤</h4>
          </ul>
          <ul>
            <h4>BBP 自動車バンパーリサイクル洗浄剤</h4>
          </ul>
        </div>
      </div>
      <div className='pdt70'></div>
      <div className='s-comm container pro01 com-comm  s-pad-bt'>
        <h3>特殊 Ink</h3>
        <h5>工業用洗浄剤の特殊Inkです。</h5>
        <div className='s-comm container'>
          <ul>
            <h4>UV Ink</h4>
          </ul>
          <ul>
            <h4>QD Ink</h4>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndustrialDetergent;
