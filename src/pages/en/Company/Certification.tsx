import PageNav from '../../../components/PageNav';

const Certification = () => {
  return (
    <div>
      <PageNav
        title='Certification'
        parentTitle='Company'
        parentPath='/en/company/introduction'
        siblings={[
          { title: 'About us', path: '/en/company/introduction' },
          {
            title: 'Certification and Intellectual Property',
            path: '/en/company/certification',
          },
          { title: 'Investment Company', path: '/en/company/investors' },
        ]}
        imageClass='comTop'
      />

      <div className='s-comm container'>
        <h3>Investment Company</h3>
        <h1>
          Domestic and International Certification and Intellectual Property of
          EA PHOS Co., Ltd.
        </h1>
      </div>

      <section className='container com03 s-pad-bt com-comm'>
        <div className='pdt20'></div>

        <ul>
          <li>
            <p>
              <img
                src='/assets/com03-01.png'
                alt='품질경영시스템 인증서'
                className='res-img'
              />
            </p>
            <h6>Quality Management Systems Certificate</h6>
          </li>
          <li>
            <p>
              <img
                src='/assets/com03-02.png'
                alt='환경경영시스템 인증서'
                className='res-img'
              />
            </p>
            <h6>Environmental Management Systems Certificate</h6>
          </li>
          <li>
            <p>
              <img
                src='/assets/com03-03.png'
                alt='안전보건경영시스템 인증서'
                className='res-img'
              />
            </p>
            <h6>
              Occupational Health and Safety Management Systems Certificate
            </h6>
          </li>
          <li>
            <p>
              <img
                src='/assets/com03-04.png'
                alt='대한민국 녹색 에너지 대상'
                className='res-img'
              />
            </p>
            <h6>Korea Green Energy Grand Award</h6>
          </li>
        </ul>

        <ul>
          <li>
            <p>
              <img
                src='/assets/com03-05.png'
                alt='2023년 우수자문 중소기업'
                className='res-img'
              />
            </p>
            <h6>2023 Excellent Advisory Small and Medium-Sized Enterprises</h6>
          </li>
          <li>
            <p>
              <img
                src='/assets/com03-06.png'
                alt='2023년 Premium K-Textile'
                className='res-img'
              />
            </p>
            <h6>2023 Premium K-Textile</h6>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Certification;
