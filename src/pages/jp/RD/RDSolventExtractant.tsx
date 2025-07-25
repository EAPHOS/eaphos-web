import PageNav from '../../../components/PageNav';

import rnd0201Img from '/assets/rnd02-01.png';
import rnd0200Img from '/assets/rnd02-00.png';
import rnd02000Img from '/assets/rnd02-000.png';
import rnd02001Img from '/assets/rnd02-001.png';
import rnd0212Img from '/assets/rnd02-12_jp.png';
import rnd0202Img from '/assets/rnd02-02.png';
import rnd0204Img from '/assets/rnd02-04_jp.png';
import rnd0208Img from '/assets/rnd02-08.jpg';
import rnd0210Img from '/assets/rnd02-10.jpg';

const RDSolventExtractant = () => {
  return (
    <>
      <div>
        <PageNav
          title='溶媒抽出剤'
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
      </div>
      <div className='s-comm container'>
        <h3>研究の背景と必要性</h3>
        <div className='pdb20'></div>
        <h1>
          最近、二次電池の市場規模は2020年461億ドルから2030年推算3,
          <br />
          517億ドルで8倍の需要が増加するものと展望される。
        </h1>
      </div>

      <section className='container rnd02 com-comm s-comm'>
        <div className='pdt40'></div>
        <ul className='twoDiv'>
          <li>
            <h5 className='wd80'>
              需要が増加するにつれ、廃バッテリーに対するイシューも話題になっており、実際に電気自動車で発生する廃バッテリーの量は2025年より2030年に約7倍増えると判断され、これに合わせて廃バッテリーリサイクル市場も同じ年に60兆ウォン(KRW)規模に成長するはずです。
              <br />
              国内の二次電池産業で使われる正極材の原料物質は、ほとんど海外調達を通じて供給されているのが実情です。
              <br />
              実際、コバルトとリチウムの場合、わずか20%だけが自国から供給されており、他の金属も自足する水準が50%に達していません。
              <br />
              一方、中国の場合、バッテリー核心素材部門で70%以上の国産化を達成しています。{' '}
              <br />
              国内バッテリー原料の輸入依存性を減らすためには、二次電池リサイクル技術の研究が必須的な実情です。
              <br />
              <br />
              故に、廃バッテリーリサイクルの国際市場の動きに対する迅速な対応および研究を通じて市場を先導することができるはずです。
            </h5>
          </li>
          <li>
            <p>
              <img src={rnd0201Img} alt='' />
            </p>
          </li>
        </ul>
      </section>

      <div className='pdt100'></div>

      <section className='rnd02-04 s-comm'>
        <div className='container'>
          <h1 className='center'>廃バッテリーの再使用·リサイクルが必要</h1>
          <ul style={{ display: 'flex', justifyContent: 'center' }}>
            <li>
              <div
                className='inner bg01'
                style={{
                  background: `url(${rnd0208Img}) no-repeat`,
                }}
              >
                <div className='txt'>
                  <h1>溶媒抽出剤国産化率</h1>
                  <h2>Zero</h2>
                </div>
              </div>
            </li>
            <li>
              <div
                className='inner bg03'
                style={{
                  background: `url(${rnd0210Img}) no-repeat`,
                }}
              >
                <div className='txt'>
                  <h1>原料自給度最低,</h1>
                  <h2>輸入依存度最大</h2>
                </div>
              </div>
            </li>
          </ul>
          <div className='pdt60'></div>
          <ul className='rnd02'>
            <li>
              <p className='center'>
                <img src={rnd0200Img} className='res-img02' alt='' />
              </p>
              <div className='txt'>
                <h2>正極材物質原料</h2>
                <h3>
                  国内の二次電池市場の成長にもかかわらず、大部分の正極材物質の原料は国内に全無
                </h3>
                <h4>国内で使用される正極材の原料を輸入に依存</h4>
              </div>
            </li>
            <li>
              <p className='center'>
                <img src={rnd02000Img} className='res-img02' alt='' />
              </p>
              <div className='txt'>
                <h2>溶媒抽出剤</h2>
                <h3>
                  原料抽出は溶媒抽出剤を使用した工程が最も高い抽出効率を示す
                </h3>
                <h4>国内で使用される溶媒抽出剤を海外市場に依存</h4>
              </div>
            </li>
          </ul>
          <div className='under'>
            <p className='ar'>
              <img src={rnd02001Img} alt='' />
            </p>
            <h5>
              国内最高の低費用、高純度の溶媒抽出剤の国産化、都市鉱山による資源富国化の新しいパラダイムを形成。
            </h5>
          </div>
        </div>
      </section>

      <section className='rnd02-05 s-comm'>
        <div className='container '>
          <h1>都市鉱山による富国化。</h1>
          <div className='pdb20'></div>
          <h5>
            Black
            Mass内のCo、Ni、Li抽出のための溶媒抽出剤の合成及び抽出、工程廃水処理して、水処理工程が一つのCycleで運営。
          </h5>
          <div className='pdb40'></div>
          <p className='center'>
            <img src={rnd0212Img} className='res-img' alt='' />
          </p>
        </div>
      </section>

      <div className='pdt30'></div>

      <section className='rnd02-01'>
        <ul className='container'>
          <li>
            <p>
              <img src={rnd0202Img} alt='' className='res-img' />
            </p>
          </li>
          <li>{/* 空 */}</li>
        </ul>
      </section>

      <section className='rnd02-02 container s-pad-bt'>
        <p>
          <img src={rnd0204Img} alt='' className='res-img' />
        </p>
      </section>
    </>
  );
};

export default RDSolventExtractant;
