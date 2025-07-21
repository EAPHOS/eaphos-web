import PageNav from '../../../components/PageNav';

const RDEnergySystem = () => {
  return (
    <div className='responsive-container' style={{ overflow: 'hidden', position: 'relative' }}>
      <PageNav
        title='エネルギー・システム'
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

      {/* 研究背景及び必要性セクション */}
      <div className='s-comm container responsive-section'>
        <h3 className='responsive-title'>研究背景及び必要性</h3>
        <div className='pdb20'></div>
        <h1 className='responsive-heading'>
          新再生可能エネルギーを安定的に供給するために必須のシステムとして注目されているが、
          <br className='desktop-only' />
          火災の危険性があるため、持続的な研究が必要。
        </h1>
      </div>

      {/* メインコンテンツセクション */}
      <section className='container com-comm s-comm responsive-section'>
        <div className='pdt20'></div>
        <ul className='twoDiv responsive-grid' style={{ position: 'relative', zIndex: 1 }}>
          <li className='responsive-text' style={{ position: 'relative', zIndex: 2 }}>
            <h5 className='wd80 responsive-paragraph' style={{ position: 'relative', zIndex: 3 }}>
              エネルギー貯蔵装置（Energy Storage System; ESS）は、太陽光や風力などで生産された電気をバッテリーに保存しておき、
              <br className='desktop-only' />
              電力が不足した時に使用できるようにする技術です。
              <br />
              これは、
              <br className='desktop-only' />
              新再生可能エネルギーを安定的に供給するために必須のシステムとして注目されています
              <br className='desktop-only' />
              が、火災の危険性があり、持続的な研究が必要です。
              <br />
              <br />
              <br />
              ㈱EAPHOSはエネルギーシステムを設置したESS装置で、自社の製品を生産する時、
              <br className='desktop-only' />
              再生可能エネルギーを活用して電力系統運営の柔軟性を提供し、
              <br className='desktop-only' />
              電力を効率的に供給する予定です。
            </h5>
          </li>
          <li className='responsive-image' style={{ position: 'relative', zIndex: 1 }}>
            <p className='center'>
              <img
                src='/src/assets/rd-energy01.png'
                alt='Energy Storage System Research'
                className='res-img responsive-img'
                style={{ position: 'relative', zIndex: 1, maxWidth: '100%', height: 'auto' }}
              />
            </p>
          </li>
        </ul>
      </section>

      <div className='pdt40 responsive-spacing'></div>
      <div className='pdt80 responsive-spacing'></div>

      {/* DCグリッド用故障電流制限器及びその制御方法 */}
      <div className='s-comm container responsive-section'>
        <h3 className='responsive-title'>DCグリッド用故障電流制限器及びその制御方法</h3>
        <div className='pdb40'></div>
        <p className='responsive-image-container' style={{ position: 'relative', zIndex: 1 }}>
          <img
            src='/src/assets/rd-energy02.png'
            alt='DC Grid Fault Current Limiter'
            className='res-img responsive-img'
            style={{ position: 'relative', zIndex: 1, maxWidth: '100%', height: 'auto' }}
          />
        </p>
        <div className='pdt40'></div>
        <h5 className='wd80 responsive-paragraph' style={{ whiteSpace: 'pre-line' }}>
          本発明によるDCグリッド用故障制限器は、交流電力を直流電力に変換するコンバータと直流電力システムとの間に設けられて故障電流を制限する故障電流制限器において、
          <br />上記直流電力システムに供給される直流電力の電流変化による故障電流を感知するセンサー
        </h5>
      </div>

      <div className='pdb80 responsive-spacing'></div>
    </div>
  );
};

export default RDEnergySystem;
