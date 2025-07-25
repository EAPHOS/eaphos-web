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
      <div className='s-comm container'>
        <h3>研究の背景と必要性</h3>
        <div className='pdb20'></div>
      </div>
      <section className='container com-comm s-comm pro01'>
        <div className='pdt40'></div>
        <ul className='twoDiv'>
          <li>
            <h4>PEDOT : PSS</h4>
            <h5>
              - For CNT
              <br />- From Si
            </h5>
          </li>
          <div className='pdb20'></div>
          <p>
            <img
              src='/assets/pro00-01.jpg'
              className='res-img'
              alt='anode-material'
            />
          </p>
        </ul>
        <ul className='pro-ul'>
          <li>
            <h4>
              Conductivity comparison between conductive polymer and other
              materials
            </h4>
            <p>
              <img
                src='/assets/pro00-02.png'
                className='res-img'
                alt='conductivity-comparison'
              />
            </p>
          </li>
          <li>
            <h4>The Shape of PEDOT:PSS </h4>
            <h5>
              Shell(PSS rich region) is composed with PSS having sulfonyl group,
              as being similar to cation ion exchange resin.
            </h5>
            <p className='center'>
              <img src='/assets/pro00-03.png' alt='PSS' />
            </p>
          </li>
        </ul>
        <div className='pdb50'></div>
        <p className='center'>
          <img
            src='/assets/pro00-04.png'
            className='res-img'
            alt='faster-charging'
          />
        </p>
      </section>
      <section className='rnd05-01 container s-pad-bt com-comm s-comm'></section>
    </div>
  );
};

export default RDAnodeMaterial;
