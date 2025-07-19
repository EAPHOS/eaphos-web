import PageNav from '../../../components/PageNav';

const AnodeMaterial = () => {
  return (
    <div>
      <PageNav
        title='음극재 소재'
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
        <h3>음극재 소재</h3>
        <div className='pdb20'></div>
        <h1>연구개발 중입니다.</h1>
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
