// BusinessRoadmap.jsx
import { useState } from 'react';
import rnd0101 from '../../../assets/rnd01-01.jpg';
import rnd0102 from '../../../assets/rnd01-02.jpg';
import rnd0103 from '../../../assets/rnd01-03.jpg';
import rnd0104 from '../../../assets/rnd01-04.jpg';
import rnd0105 from '../../../assets/rnd01-05.jpg';
import '../../../css/roadmap-inline.css';
import PageNav from '../../../components/PageNav';

const BusinessRoadmap = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  return (
    <>
      <PageNav
        title='Business Roadmap'
        parentTitle='R&D'
        parentPath='/en/rd/business-roadmap'
        siblings={[
          { title: 'Business Roadmap', path: '/en/rd/business-roadmap' },
          { title: 'Solvent Extractants', path: '/en/rd/solvent-extractant' },
          {
            title: 'Water Treatment Solutions',
            path: '/en/rd/water-treatment-solution',
          },
          { title: 'Energy Systems', path: '/en/rd/energy-system' },
          { title: 'Anode Materials', path: '/en/rd/anode-material' },
        ]}
        imageClass='rndTop'
      />

      <div className='s-comm container'>
        <h3>Business Roadmap</h3>
        <div className='pdb20'></div>
        <h1>EA PHOS CO., Ltd Business Roadmap</h1>
      </div>

      <section className='container rnd02 com-comm s-comm'>
        <div className='pdt40'></div>
        <ul className='twoDiv'>
          <li>
            <h5>
              This is the Final Business Roadmap of EA PHOS Co., Ltd, as of
              2024, <br />
              we plan to develop solvent extractants and water treatment
              solutions through R&amp;D.
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
                    Anode Materials <span>2024 Development</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2>Anode Materials</h2>
                    <h5>
                      <span>Product : </span>Si Precursor, CNT, Conducting
                      Polymer
                      <br />
                      <span>Market : </span>Secondary Battery
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
                    Energy System <span>2024 Development</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2>Energy System</h2>
                    <h5>
                      <span>Product : </span>DC Breaker & Fault Current Limiter,
                      Flow Battery
                      <br />
                      <span>Market : </span>Energy
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
                    CLEANTOP WWT <span>2024 Development</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2 className='inline-title'>
                      Water Treatment Solution(WWT Solution)
                    </h2>
                    <h5>
                      <div className='inline-market'>
                        <span>Product : </span>Flocculation/Precipitation, ED,
                        Membrane
                        <br />
                        <span>Market : </span>Secondary Battery, Semiconductor
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
                    CLEANTOP <span>2024 Development</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2 className='inline-title'>Industrial Cleaner</h2>
                    <h5>
                      <div className='inline-market'>
                        <span>Product : </span>Formulation , Synthesis
                        <br />
                        <span>Market : </span>Display, Semiconductor, Optics
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
                    THORE-PHOS SOLEX <span>2023 Development</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2>Extraction Solvent</h2>
                    <h5>
                      <span>Product : </span>Synthesis (272, 204, 507, 973 &amp;
                      Lithium only)
                      <br />
                      <span>Market : </span>Secondary Battery
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
