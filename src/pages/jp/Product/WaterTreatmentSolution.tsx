import PageNav from '../../../components/PageNav';

const WaterTreatmentSolution = () => {
  return (
    <div>
      <PageNav
        title='水処理・ソリューション'
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
        <h3>ポリケトン (ステープルファイバー)</h3>
        <div className='pdb20'></div>
        <h1>
          各イオン交換樹脂およびメンブレンを <br />
          ポリケトン繊維を利用して製作します。
        </h1>
      </div>
      <section className='container com-comm s-comm'>
        <div className='pdt20'></div>
        <ul className='twoDiv'>
          <li>
            <h5 className='wd80'>
              素材はポリケトン(Polyketone)という高分子を使用し、水処理素材及びマットレスカバーの短繊維を製造します。
              <br />
              自社は分離膜(セパレータ)素材としてポリケトン(Polyketone)という高分子を使用します。
              <br />
              この高分子は一般的に耐摩耗特性が優秀で、寄与部品に使われているPOMより14倍以上の耐摩耗特性を持っており、
              各種有機溶剤や弱酸塩基にPA66に比べて優秀な耐化学性を持っています。
              <br />
              <br />
              現在、国内で生産されている原材料で全量輸入するPVDFに比べて完全国産化を実現することができ、既存の二次電池にも拡散させる計画です。
            </h5>
          </li>
          <li>
            <p className='center'>
              <img src='/src/assets/pro03-01.png' alt='polyketone' />
            </p>
          </li>
        </ul>
      </section>
      <div className='pdt100'></div>
      <div className='s-comm container s-pad-bt'>
        <h1>イオン交換樹脂 </h1>
        <div className='pdb20'></div>
        <h5>
          · 廃水の遷移金属(金属イオン)含有量の分析
          <br />
          · 遷移金属の含有量によるイオン交換樹脂の選択
          <br />
          · イオン交換樹脂の表面改質によるCharge density調節 →
          極微量の有価金属イオン再生のため
          <br />· イオン交換樹脂の性能評価
        </h5>
        <div className='pdt30'></div>
        <p className='center'>
          <img
            src='/src/assets/pro03-02_jp.png'
            alt='ion-exchange-resin'
            className='res-img'
          />
        </p>
        <div className='pdt50'></div>
        <p className='center'>
          <img
            src='/src/assets/pro03-03.jpg'
            alt='IER charge density and polymer oxidation diagram'
            className='res-img'
          />
        </p>
      </div>
    </div>
  );
};

export default WaterTreatmentSolution;
