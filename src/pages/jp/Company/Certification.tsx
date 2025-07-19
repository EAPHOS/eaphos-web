import PageNav from '../../../components/PageNav';

const Certification = () => {
  return (
    <div>
      <PageNav
        title='認証及び知的財産'
        parentTitle='Company'
        parentPath='/jp/company/introduction'
        siblings={[
          { title: 'About us', path: '/jp/company/introduction' },
          {
            title: '認証及び知的財産',
            path: '/jp/company/certification',
          },
          { title: '投資会社', path: '/jp/company/investors' },
        ]}
        imageClass='comTop'
      />

      <div className='s-comm container'>
        <h3>認証及び知的財産</h3>
        <h1>㈱EAPHOSの国内外の認証及び知的財産です。</h1>
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
            <h6>品質マネジメントシステム認証書</h6>
          </li>
          <li>
            <p>
              <img
                src='/src/assets/com03-02.png'
                alt='환경경영시스템 인증서'
                className='res-img'
              />
            </p>
            <h6>環境マネジメントシステム認証書</h6>
          </li>
          <li>
            <p>
              <img
                src='/src/assets/com03-03.png'
                alt='안전보건경영시스템 인증서'
                className='res-img'
              />
            </p>
            <h6>労働安全衛生マネジメントシステム認証書</h6>
          </li>
          <li>
            <p>
              <img
                src='/src/assets/com03-04.png'
                alt='대한민국 녹색 에너지 대상'
                className='res-img'
              />
            </p>
            <h6>大韓民国グリーン·エネルギー大賞</h6>
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
            <h6>2023年優秀諮問中小企業</h6>
          </li>
          <li>
            <p>
              <img
                src='/src/assets/com03-06.png'
                alt='2023년 Premium K-Textile'
                className='res-img'
              />
            </p>
            <h6>2023年Premium K-Textile</h6>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Certification;
