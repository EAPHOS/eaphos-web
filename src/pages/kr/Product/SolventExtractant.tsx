import PageNav from '../../../components/PageNav';

const SolventExtractant = () => {
  return (
    <div>
      <PageNav
        title='용매 추출제'
        parentTitle='Product'
        parentPath='/kr/product/industrial-detergent'
        siblings={[
          { title: '공업용 세정제', path: '/kr/product/industrial-detergent' },
          { title: '용매추출제', path: '/kr/product/solvent-extractant' },
          {
            title: '수처리 솔루션',
            path: '/kr/product/water-treatment-solution',
          },
          { title: '에너지 시스템', path: '/kr/product/energy-system' },
          { title: '음극재 소재', path: '/kr/product/anode-material' },
        ]}
        imageClass='rndTop'
      />
      <div className='s-comm container'>
        <h3>용매추출제</h3>
        <div className='pdb20'></div>
        <h1>주력 용매추출제 3종</h1>
      </div>
      <section className='container com-comm s-comm pro02'>
        <div className='pdt20'></div>
        <ul>
          <li>
            <p>
              <img src='/src/assets/pro02-01.png' alt='' />
            </p>
            <h5>Co 추출제 (THORE-PHOS SOLEX 272)</h5>
          </li>
          <li>
            <p>
              <img src='/src/assets/pro02-02.png' alt='' />
            </p>
            <h5>Mn 추출제 (THORE-PHOS SOLEX 507)</h5>
          </li>
          <li>
            <p>
              <img src='/src/assets/pro02-03.png' alt='' />
            </p>
            <h5>Li 추출제 (THORE-PHOS SOLEX Li)</h5>
          </li>
        </ul>
      </section>
      <div className='pdt100'></div>
      <div className='s-comm container'>
        <h3>불순물 제거제</h3>
        <div className='pdb20'></div>
        <h1>주력 불순물 제거제 3종</h1>
      </div>
      <section className='container s-pad-bt com-comm s-comm pro02'>
        <div className='pdt20'></div>
        <ul>
          <li>
            <p>
              <img src='/src/assets/pro02-04.png' alt='' />
            </p>
            <h5>Fe,V,Zn, Mn제거 (THOE-PHOS SOLEX 204)</h5>
          </li>
          <li>
            <p>
              <img src='/src/assets/pro02-05.png' alt='' />
            </p>
            <h5>Cu 제거</h5>
          </li>
          <li>
            <p>
              <img src='/src/assets/pro02-06.png' alt='' />
            </p>
            <h5>Al 제거 (2025년 출시 예정)</h5>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SolventExtractant;
