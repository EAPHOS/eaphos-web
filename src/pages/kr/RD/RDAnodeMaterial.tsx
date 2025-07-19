import PageNav from '../../../components/PageNav';

const RDAnodeMaterial = () => {
  return (
    <div>
      <PageNav
        title='음극재 소재'
        parentTitle='R&D'
        parentPath='/kr/rd/anode-material'
        siblings={[
          { title: '사업 로드맵', path: '/kr/rd/business-roadmap' },
          { title: '용매추출제', path: '/kr/rd/solvent-extraction' },
          { title: '수처리 솔루션', path: '/kr/rd/water-treatment-solution' },
          { title: '에너지 시스템', path: '/kr/rd/energy-system' },
          { title: '음극재소재', path: '/kr/rd/anode-material' },
        ]}
        imageClass='rndTop'
      />
      <div className='s-comm container'>
        <h3>연구 배경 및 필요성</h3>
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
              src='/src/assets/pro00-01.jpg'
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
                src='/src/assets/pro00-02.png'
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
              <img src='/src/assets/pro00-03.png' alt='PSS' />
            </p>
          </li>
        </ul>
        <div className='pdb50'></div>
        <p className='center'>
          <img
            src='/src/assets/pro00-04.png'
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
