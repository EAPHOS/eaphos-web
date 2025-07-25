import com01_01 from '/assets/com01-01.jpg';
import PageNav from '../../../components/PageNav';

const Introduction = () => {
  return (
    <>
      <PageNav
        title='About us'
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

      {/* Company Description */}
      <div className='s-comm container'>
        <h1 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
          <span className='cl'>EA PHOS Co., Ltd.</span> is a fast-growing{' '}
          <span className='bold'>
            secondary battery recycling material equipment
          </span>{' '}
          company.
        </h1>
      </div>

      {/* Main Content Section */}
      <section className='container com01 s-pad-bt com-comm'>
        <p className='img01'>
          <img
            src={com01_01}
            alt=''
            className='res-img'
            style={{ width: '100%', height: 'auto' }}
          />
        </p>
        <h5 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
          <p>Who will use the water? </p>
          <br />
          According to the criteria for assessing the water stress index
          published by WRI, it can be divided into two major consumer groups.
          <br />
          One is the general public.
          <br />
          And the other is essential consumption areas such as agriculture,
          industry, and public institutions.
          <br />
          Water stress depends on whether there is enough water for the general
          public to use.
          <br />
          According to the 2020 water supply statistics released by the Ministry
          of Environment in 2020, 68% of water is used in households, and the
          remaining 32% is used in agriculture, industry, and public
          institutions.
          <br />
          The water supply rate in Korea is high. Therefore, it can be assumed
          that water supply will not increase.
          <br />
          In terms of consumption, it is unlikely that the amount of water used
          in households will decrease.
          <br />
          Then, when building a new factory, we should consider whether there is
          enough water.
          <br />
          For example, a factory that uses 50,000 tons per day is equivalent to
          the amount of water that 300,000 households can use.
          <br />
          Water is an essential resource for our homes and industries.
          <br />
          How can we secure the water necessary for industrial development while
          using limited water resources for life?
          <br />
          <br />
          EA PHOS is a company that bears this problem in mind, practices
          respect for human life, and at the same time, has a vision to
          contribute to sustainable industrial development and creates social
          value.
          <br />
          To this end, we are developing chelates and membranes as our main
          products.
          <br />
          The final business form we are aiming for is water treatment business.
          We are building a system with the necessary technology and materials
          for this.
          <br />
          The future we dream of is for Korea's major companies to become
          companies that are competitive in business not only nationally but
          also overseas with EA PHOS's water treatment system, while also
          striving to protect the local environment.
          <br />
          Prior to the water treatment system business, one of the chelates was
          commercialized as a stand-alone business for secondary battery
          recycling.
          <br />
          And membrane development is in progress.
          <br />
          EA PHOS will apply the developed chelate and membrane as the main
          materials for its own water treatment system.
          <br />
          We are working to increase the localization rate of the product along
          with the development of necessary technologies and materials.
          <br />
          <br />
          <span className='bold'>EA PHOS CEO</span>
          <span className='sign'>Yong-su, Moon</span>
        </h5>
      </section>

      {/* Company Location Section */}
      <section className='container com01-01'>
        <div className='tabBox tab-comm'>
          <a href='#tab-1' className='on'>
            <p
              className='tab-link current'
              data-tab='tab-1'
              style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
            >
              Company's Head Office and Laboratory
            </p>
          </a>
          <a href='#tab-2'>
            <p
              className='tab-link'
              data-tab='tab-2'
              style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
            >
              Production and logistics warehouse
            </p>
          </a>
        </div>

        <div
          id='tab-1'
          className='tab-content current'
          style={{ display: 'block' }}
        >
          <h5 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            <span>Head Office</span> : Inside Business Incubator, 55 Hanyang
            University, Sangnok-gu, Ansan-si, Gyeonggi-do
          </h5>
          <h5 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            <span>Laboratory</span> : 2F, Factory-dong, 20 Haebong-ro
            255beon-gil, Danwon-gu, Ansan-si, Gyeonggi-do
          </h5>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.9306339972563!2d126.83286402666053!3d37.29677778954925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6fbc268f0dc9%3A0x186644342ee6cdce!2sHanyang%20AI%20Center!5e0!3m2!1sen!2skr!4v1732252082731!5m2!1sen!2skr'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>

        <div id='tab-2' className='tab-content' style={{ display: 'none' }}>
          <h5 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            <span>Production and logistics warehouse</span> : 43 Jeongoksandan
            11-gil, Seosin-myeon, Hwaseong-si, Gyeonggi-do
          </h5>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.7226389327457!2d126.66749827665683!3d37.18306194602303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b096140732ee5%3A0x762f5ca9dc4b3d6b!2s43%20Jeongoksandan%2011-gil%2C%20Seosin-myeon%2C%20Hwaseong-si%2C%20Gyeonggi-do!5e0!3m2!1sen!2skr!4v1732252103974!5m2!1sen!2skr'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>

      <div className='pdb80'></div>
    </>
  );
};

export default Introduction;
