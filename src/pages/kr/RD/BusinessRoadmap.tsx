// BusinessRoadmap.jsx
import { useState } from 'react';
import rnd0101 from '../../../assets/rnd01-01.jpg';
import rnd0102 from '../../../assets/rnd01-02.jpg';
import rnd0103 from '../../../assets/rnd01-03.jpg';
import rnd0104 from '../../../assets/rnd01-04.jpg';
import rnd0105 from '../../../assets/rnd01-05.jpg';
import PageNav from '../../../components/PageNav';

const BusinessRoadmap = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  return (
    <>
      <PageNav
        title='사업 로드맵'
        parentTitle='R&D'
        parentPath='/kr/rd/business-roadmap'
        siblings={[
          { title: '사업 로드맵', path: '/kr/rd/business-roadmap' },
          { title: '용매추출제', path: '/kr/rd/solvent-extractant' },
          { title: '수처리 솔루션', path: '/kr/rd/water-treatment-solution' },
          { title: '에너지 시스템', path: '/kr/rd/energy-system' },
          { title: '음극재소재', path: '/kr/rd/anode-material' },
        ]}
        imageClass='rndTop'
      />

      <div className='s-comm container'>
        <h3>사업로드맵</h3>
        <div className='pdb20'></div>
        <h1>주식회사 이에이포스의 사업 로드맵 입니다.</h1>
      </div>

      <section className='container rnd02 com-comm s-comm'>
        <div className='pdt40'></div>
        <ul className='twoDiv'>
          <li>
            <h5>
              주식회사 이에이포스의 최종 사업 로드맵이며,
              <br />
              2024년 현재 용매추출제와 수처리 솔루션 R&amp;D 진행으로 개발
              예정입니다.
            </h5>
          </li>
          <li></li>
        </ul>
      </section>

      {/* 연도 스와이프 영역 - 이미지 스타일 */}
      <div className='year-swipe-container'>
        <div className='year-selection'>
          {/* 2024 연도 */}
          <div
            className={`year-item ${selectedYear === 2024 ? 'active' : ''}`}
            onClick={() => setSelectedYear(2024)}
          >
            2024
            <div className='year-line' />
            {selectedYear === 2024 && (
              <div className='year-dot'>
                <div className='year-dot-inner'></div>
              </div>
            )}
          </div>
          {/* 2023 연도 */}
          <div
            className={`year-item ${selectedYear === 2023 ? 'active' : ''}`}
            onClick={() => setSelectedYear(2023)}
          >
            2023
            <div className='year-line' />
            {selectedYear === 2023 && (
              <div className='year-dot'>
                <div className='year-dot-inner'></div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 연도별 콘텐츠 */}
      <section className='container'>
        <div className='rndSwiper'>
          {selectedYear === 2024 && (
            <div
              className={`box box_2024 ${selectedYear === 2024 ? 'active' : ''}`}
            >
              <div className='li_01' style={{ transitionDelay: '0.05s' }}>
                <p>
                  <img src={rnd0101} alt='음극재소재' className='res-img' />
                </p>
                <div className='txt'>
                  <h1>
                    음극재소재 <span>2024년 개발</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2>음극재소재</h2>
                    <h5>
                      <span>제품 : </span>Si전구체, CNT, 전도성고분자
                      <br />
                      <span>시장 : </span>Secondary Battery
                    </h5>
                  </div>
                </div>
              </div>
              <div className='li_02' style={{ transitionDelay: '0.15s' }}>
                <p>
                  <img src={rnd0102} alt='에너지 시스템' className='res-img' />
                </p>
                <div className='txt'>
                  <h1>
                    에너지 시스템 <span>2024년 개발</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2>에너지 시스템</h2>
                    <h5>
                      <span>제품 : </span>DC 차단기 및 한류기, 흐름전지
                      <br />
                      <span>시장 : </span>Energy
                    </h5>
                  </div>
                </div>
              </div>
              <div className='li_03' style={{ transitionDelay: '0.25s' }}>
                <div>
                  <p>
                    <img src={rnd0105} alt='CLEANTOP WWT' className='res-img' />
                  </p>
                </div>
                <div className='txt'>
                  <h1 className='inline-title'>
                    CLEANTOP WWT <span>2024년 개발</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2 className='inline-title'>수처리솔루션(WWT Solution)</h2>
                    <h5>
                      <div className='inline-market'>
                        <span>제품 :</span> 응집/침전, ED, 멤브레인
                        <br />
                        <span>시장 :</span> Secondary Battery, Semiconductor
                      </div>
                    </h5>
                  </div>
                </div>
              </div>
              <div className='li_04' style={{ transitionDelay: '0.35s' }}>
                <div>
                  <p>
                    <img src={rnd0104} alt='CLEANTOP' className='res-img' />
                  </p>
                </div>
                <div className='txt'>
                  <h1 className='inline-title'>
                    CLEANTOP <span>2024년 개발</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2 className='inline-title'>
                      공업용 세정제(Industrial Cleaner)
                    </h2>
                    <h5>
                      <div className='inline-market'>
                        <span>제품 :</span> Formulation, Synthesis
                        <br />
                        <span>시장 :</span> Display, Semiconductor, Optics
                        application
                      </div>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedYear === 2023 && (
            <div
              className={`box ht-none box_2023 ${selectedYear === 2023 ? 'active' : ''}`}
            >
              <div style={{ transitionDelay: '0.1s' }}>
                <p>
                  <img
                    src={rnd0103}
                    alt='THORE-PHOS SOLEX'
                    className='res-img img-2023'
                  />
                </p>
              </div>
              <div className='txtdiv' style={{ transitionDelay: '0.2s' }}>
                <div className='txt'>
                  <h1>
                    THORE-PHOS SOLEX<span>2023년 개발</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2>용매추출제(Extraction Solvent)</h2>
                    <h5>
                      <span>제품 : </span>Synthesis (272, 204, 507, 973 &amp;
                      리튬전용)
                      <br />
                      <span>시장 : </span>Secondary Battery
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <div className='pdt80'></div>
    </>
  );
};

export default BusinessRoadmap;
