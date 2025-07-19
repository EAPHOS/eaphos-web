import PageNav from '../../../components/PageNav';

const Certification = () => {
  return (
    <div>
      <PageNav
        title='특허'
        parentTitle='Company'
        parentPath='/kr/company/introduction'
        siblings={[
          { title: 'About us', path: '/kr/company/introduction' },
          { title: '인증 및 지적재산', path: '/kr/company/certification' },
          { title: '투자사', path: '/kr/company/investors' },
        ]}
        imageClass='comTop'
      />

      <div className='s-comm container'>
        <h3>인증 및 지적재산</h3>
        <h1>(주)이에이포스의 국내 ‧ 외 인증 및 지적재산 입니다.</h1>
      </div>

      <section className='container com03 s-pad-bt com-comm'>
        <div className='pdt20'></div>

        <ul>
          <li>
            <p>
              <img
                src='/src/assets/com03-01.png'
                alt='품질경영시스템 인증서'
                className='res-img'
              />
            </p>
            <h6>품질경영시스템 인증서</h6>
          </li>
          <li>
            <p>
              <img
                src='/src/assets/com03-02.png'
                alt='환경경영시스템 인증서'
                className='res-img'
              />
            </p>
            <h6>환경경영시스템 인증서</h6>
          </li>
          <li>
            <p>
              <img
                src='/src/assets/com03-03.png'
                alt='안전보건경영시스템 인증서'
                className='res-img'
              />
            </p>
            <h6>안전보건경영시스템 인증서</h6>
          </li>
          <li>
            <p>
              <img
                src='/src/assets/com03-04.png'
                alt='대한민국 녹색 에너지 대상'
                className='res-img'
              />
            </p>
            <h6>대한민국 녹색 에너지 대상</h6>
          </li>
        </ul>

        <ul>
          <li>
            <p>
              <img
                src='/src/assets/com03-05.png'
                alt='2023년 우수자문 중소기업'
                className='res-img'
              />
            </p>
            <h6>2023년 우수자문 중소기업</h6>
          </li>
          <li>
            <p>
              <img
                src='/src/assets/com03-06.png'
                alt='2023년 Premium K-Textile'
                className='res-img'
              />
            </p>
            <h6>2023년 Premium K-Textile</h6>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Certification;
