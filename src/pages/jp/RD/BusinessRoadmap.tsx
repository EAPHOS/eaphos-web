// BusinessRoadmap.jsx
import { useState } from 'react';
import rnd0101 from '/assets/rnd01-01.jpg';
import rnd0102 from '/assets/rnd01-02.jpg';
import rnd0103 from '/assets/rnd01-03.jpg';
import rnd0104 from '/assets/rnd01-04.jpg';
import rnd0105 from '/assets/rnd01-05.jpg';
import PageNav from '../../../components/PageNav';

const BusinessRoadmap = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  return (
    <>
      <PageNav
        title='事業・ロードマップ'
        parentTitle='R&D'
        parentPath='/jp/rd/business-roadmap'
        siblings={[
          { title: '事業・ロードマップ', path: '/jp/rd/business-roadmap' },
          { title: '溶媒抽出剤', path: '/jp/rd/solvent-extractant' },
          {
            title: '水処理・ソリューション',
            path: '/jp/rd/water-treatment-solution',
          },
          { title: 'エネルギー・システム', path: '/jp/rd/energy-system' },
          { title: '負極材素材', path: '/jp/rd/anode-material' },
        ]}
        imageClass='rndTop'
      />
      <div className='s-comm container'>
        <h3>事業・ロードマップ</h3>
        <div className='pdb20'></div>
        <h1>株式会社EAPHOSの事業・ロードマップです。</h1>
      </div>

      <section className='container rnd02 com-comm s-comm'>
        <div className='pdt40'></div>
        <ul className='twoDiv'>
          <li>
            <h5>
              株式会社EAPHOSの最終事業・ロードマップであり、
              <br />
              2024年現在、溶媒抽出剤と水処理・ソリューションのR&amp;D進行で開発予定です。
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
                    負極材素材 <span>2024年開発</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2>負極材素材</h2>
                    <h5>
                      <span>製品 : </span>Si前駆体, CNT, 導電性高分子
                      <br />
                      <span>市場 : </span>Secondary Battery(二次電池)
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
                    エネルギー・システム <span>2024年開発</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2>エネルギー・システム</h2>
                    <h5>
                      <span>製品 : </span>DC遮斷器及び限流器, フロー電池
                      <br />
                      <span>市場 : </span>Energy(エネルギー)
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
                    CLEANTOP WWT <span>2024年開発</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2 className='inline-title'>
                      水処理・ソリューション(WWT Solution)
                    </h2>
                    <h5>
                      <div className='inline-market'>
                        <span>製品 : </span>凝集/沈殿, ED, メンブレン
                        <br />
                        <span>市場 : </span>Secondary Battery(二次電池),
                        Semiconductor(半導体)
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
                    CLEANTOP <span>2024年開発</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2 className='inline-title'>
                      工業用洗浄剤(Industrial Cleaner)
                    </h2>
                    <h5>
                      <div className='inline-market'>
                        <span>製品 : </span>Formulation , Synthesis
                        <br />
                        <span>市場 : </span>Display(ディスプレイ),
                        Semiconductor(半導体), Optics application(光学適用)
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
                    THORE-PHOS SOLEX <span>2023年開発</span>
                  </h1>
                  <div className='line'></div>
                  <div className='inner'>
                    <h2>溶媒抽出剤(Extraction Solvent)</h2>
                    <h5>
                      <span>製品 : </span>Synthesis (272, 204, 507, 973 &
                      リチウム専用)
                      <br />
                      <span>市場 : </span>Secondary Battery(二次電池)
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
