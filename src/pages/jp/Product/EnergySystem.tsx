import PageNav from '../../../components/PageNav';

const EnergySystem = () => {
  return (
    <div>
      <PageNav
        title='エネルギー・システム'
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
        <h3>DC遮斷器の長所</h3>
        <div className='pdb20'></div>
        <h1>
          ㈱EAPHOSは、エネルギー・システムを導入することで、
          <br />
          エネルギーをより効率的かつ安全に使用します。
        </h1>
      </div>
      <section className='container com-comm s-comm'>
        <div className='pdt20'></div>
        <ul className='twoDiv'>
          <li>
            <h5 className='wd80'>
              エネルギー大乱以後、エネルギー自立に対する必要性と環境保存に対する必要性が台頭し、新再生可能エネルギーに対する投資が積極的に増加するようになりました。
              <br />
              自社は、自社の主要製品である溶媒抽出剤を製造するにあたり、エネルギー・システムが導入されたESS(Energy
              Storage System)で再生可能エネルギーを使用する予定です。
              <br />
              <br />
              エネルギー・システムが存在することで、火災事故を予防するためのもので、ESS内に保存されているエネルギーをより効率的かつ安全に使用できます。
            </h5>
          </li>
          <li>
            <p className='center'>
              <img
                src='/assets/pro04-01.png'
                alt='energy-system'
                className='res-img'
              />
            </p>
          </li>
        </ul>
      </section>
      <div className='pdt40'></div>
      <div className='pdt80'></div>
      <div className='s-comm container'>
        <h3>PCS限流器設備の全体的な構成</h3>
        <div className='pdb40'></div>
        <p>
          <img
            src='/assets/pro04-03_jp.png'
            alt='Overall Configuation of PCS'
            className='res-img'
          />
        </p>
      </div>
      <div className='pdt80'></div>
      <div className='s-comm container'>
        <h3>PCS限流器試験主回路構成及び主要機器動作シーケンス</h3>
        <div className='pdb40'></div>
        <p>
          <img
            src='/assets/pro04-02_jp.png'
            alt='PPCS and Main Sequence'
            className='res-img'
          />
        </p>
      </div>
      <div className='pdt80'></div>
      <div className='s-comm container pro01 com-comm'>
        <div className='s-comm container'>
          <ul>
            <h4>直流送配電システム事業</h4>
            <h5>- 遮斷器</h5>
            <h5>- 限流器</h5>
          </ul>
          <ul>
            <h4>Zinc-Bromine ESS</h4>
            <h5>- フロー電池分離膜(セパレータ)</h5>
          </ul>
        </div>
      </div>
      <div className='pdb80'></div>
    </div>
  );
};

export default EnergySystem;
