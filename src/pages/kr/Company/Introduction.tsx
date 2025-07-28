import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import com01_01 from '/assets/com01-01.jpg';
import PageNav from '../../../components/PageNav';

const Introduction = () => {
  const [tab, setTab] = useState<1 | 2>(1);
  const location = useLocation();

  useEffect(() => {
    const newTab = location.hash === '#tab-2' ? 2 : 1;
    if (newTab !== tab) {
      const currentScrollY = window.scrollY;
      setTab(newTab);
      requestAnimationFrame(() => {
        window.scrollTo(0, currentScrollY);
      });
    } else {
      setTab(newTab);
    }
  }, [location, tab]);

  return (
    <>
      <PageNav
        title='About us'
        parentTitle='Company'
        parentPath='/kr/company/introduction'
        siblings={[
          { title: 'About us', path: '/kr/company/introduction' },
          { title: '인증 및 지적재산', path: '/kr/company/certification' },
          { title: '투자사', path: '/kr/company/investors' },
        ]}
        imageClass='comTop'
      />

      {/* Company Description */}
      <div className='s-comm container'>
        <h1 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
          <span className='cl'>(주)이에이포스</span>는 빠르게 성장하는{' '}
          <span className='bold'>이차전지 Recycle 소재 장비 기업</span>입니다.
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
          <p>물을 누가 사용할까? </p>
          <br />
          WRI가 발표하는 물 스트레스 지수를 매기는 기준을 참고하면 크게 2개의
          소비 주체로 나눌 수 있습니다. 하나는 일반국민 입니다.
          <br />
          그리고 다른 하나는 농업, 산업, 공공기관 등 필수 소비 영역입니다. 물
          스트레스는 일반국민이 사용할 물이 충분한지 여부에 달려있습니다. <br />
          2020년 환경부에서 발표한 2020년 상수도 통계 자료에 따르면 68%의 물은
          가정에서 사용되고, 나머지 32%는 농업, 산업, 공공 기관등에서 사용되고
          있습니다. <br />
          우리나라의 상수도 보급율은 높은 편 입니다. 따라서 물 공급이 늘지 않을
          것이라고 가정할 수 있습니다. 소비의 경우, 가정에서 사용하는 물이 줄어
          들기 쉽지 않을 것 입니다. <br />
          그렇다면 신규 공장을 지을 때 물이 충분할 지를 고려해야 할 것 입니다.
          예를 들어, 하루 5만톤을 사용하는 공장이라면 30만 가구가 사용할 수 있는
          물의 양과 맞먹는 양입니다.
          <br />
          물은 우리의 가정과 산업에 반드시 필요한 필수 자원 입니다. 한정된
          수자원을 생명을 위해 사용 하면서 어떻게 산업발전에 필요한 물을 확보할
          수 있을까요?
          <br />
          <br />
          이에이포스는 이 문제를 품고 인간의 생명을 존중을 실천하고, 그와 동시에
          지속적인 산업 발전에 기여할 수 있는 비전을 가지고 사회적 가치를
          창출하고자 하는 기업 입니다. <br />
          이를 위해 킬레이트와 멤브레인을 주력 상품으로 개발하고 있습니다.
          지향하는 최종 사업의 형태는 수처리 사업 입니다. 이를 위해 필요한
          기술과 소재 등 시스템을 구축하고 있습니다. <br />
          꿈꾸는 미래는 우리 나라의 주력 기업들이 이에이포스의 수처리 시스템으로
          국내 뿐만 아니라 해외에서도 사업 경쟁력과 함께 지역 환경 보호에 힘쓰는
          기업이 되는 것 입니다. <br />
          수처리 시스템 사업에 앞서 킬레이트 중 한 물질을 2차전지 리사이클용으로
          우선 단독 사업화 하였습니다. 그리고 멤브레인 개발이 진행되고 있습니다.{' '}
          <br />
          이에이포스는 개발한 킬레이트와 멤브레인을 자체 수처리 시스템의 주요
          소재로 적용할 것 입니다. 필요한 기술 및 소재 개발과 함께 제품의
          국산화율을 높이기 위해 노력하고 있습니다.
          <br />
          <br />
          <span className='bold'>이에이포스 대표</span>
          <span className='sign'>문용수</span>
        </h5>
      </section>

      {/* Company Location Section */}
      <section className='container com01-01'>
        <div className='tabBox tab-comm'>
          <Link to='#tab-1' className={tab !== 2 ? 'on' : ''}>
            <p
              className='tab-link current'
              data-tab='tab-1'
              style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
            >
              회사 본사 및 연구소
            </p>
          </Link>
          <Link to='#tab-2' className={tab === 2 ? 'on' : ''}>
            <p
              className='tab-link'
              data-tab='tab-2'
              style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
            >
              생산 및 물류창고
            </p>
          </Link>
        </div>

        <div
          id='tab-1'
          className='tab-content current'
          style={{ display: tab !== 2 ? 'block' : 'none' }}
        >
          <h5 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            <span>본사</span> : 경기도 안산시 상록구 한양대학교 55 창업보육센터
            내
          </h5>
          <h5 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            <span>연구소</span> : 경기도 안산시 단원구 해봉로 255번길 20, 공장동
            2층
          </h5>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.9781894462803!2d126.83477467666053!3d37.29565073961366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6fc7c276562f%3A0xfb9d01e2c9d2a187!2z7LC97JeF67O07Jyh7IS87YSwIChCdXNpbmVzcyBJbmN1YmF0b3Ip!5e0!3m2!1sko!2skr!4v1716945985347!5m2!1sko!2skr'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>

        <div
          id='tab-2'
          className='tab-content'
          style={{ display: tab === 2 ? 'block' : 'none' }}
        >
          <h5 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            <span>생산 및 물류 창고</span> : 경기도 화성시 전곡산단11길 43
          </h5>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.7226389327457!2d126.66749827665683!3d37.18306194602303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b096140732ee5%3A0x762f5ca9dc4b3d6b!2z6rK96riw64-EIO2ZlOyEseyLnCDshJzsi6DrqbQg7KCE6rOh7IKw64uoMTHquLggNDM!5e0!3m2!1sko!2skr!4v1722227934766!5m2!1sko!2skr'
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
