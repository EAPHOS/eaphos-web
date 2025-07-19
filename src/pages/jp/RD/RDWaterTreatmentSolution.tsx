import TopVisual from '../../../assets/rndTop.jpg';
import Img01 from '../../../assets/rnd03-01_jp.png';
import Img02 from '../../../assets/rnd03-02_jp.png';
import Icon01 from '../../../assets/rnd03-08.png';
import Icon02 from '../../../assets/rnd03-09_jp.png';
import Icon03 from '../../../assets/rnd03-10_jp.png';
import Icon04 from '../../../assets/rnd03-11_jp.png';
import Icon05 from '../../../assets/rnd03-12.png';

import '../../../css/RDWaterTreatmentSolution.css';

type TechItem = {
  img: string;
  title: string;
  subtitle: string;
  desc: string;
};

const techItems: TechItem[] = [
  {
    img: Icon01,
    title: 'オイル除去技術 IGF',
    subtitle: 'Induced Gas Flotation',
    desc: '廃水内のオイル成分に気泡を注入してオイル浮上分離する技術'
  },
  {
    img: Icon02,
    title: '濾過 技術 UF',
    subtitle: 'Ultra Filtration',
    desc: '固形物除去のための濾過技術でROメンブレンファウリング現象防止'
  },
  {
    img: Icon03,
    title: '脱塩技術 NF&RO',
    subtitle: 'Nano Filtration & Reverse Osmosis',
    desc: '1価、2価以上イオンを選択的に分離、脱塩するメンブレン技術'
  },
  {
    img: Icon04,
    title: 'イオン濃縮技術 CDI&ED',
    subtitle: 'Capacitive Deionization & Electro Dialysis',
    desc: '電気化学技術で正極に陰イオン、負極に陽イオンを分離、濃縮する技術'
  },
  {
    img: Icon05,
    title: 'イオン交換技術 IER',
    subtitle: 'Ion Exchange',
    desc: 'イオン交換樹脂のイオン交換体で再利用水、濃縮水の有価金属陽イオンを除去、回収する技術'
  },
];

const RDWaterTreatmentSolution = () => {
  return (
    <>
      <section className="visual-top">
        <img src={TopVisual} alt="トップビジュアル画像" className="top-img" />
      </section>

      <div className="s-B rndTop"></div>

      <div className="s-comm container">
        <h3>研究の背景と必要性</h3>
        <div className="pdb20"></div>
        <h1>
          ED電極を通じて廃水内の陽イオンと陰イオン、TOCを分離し、<br />
          各汚染物質の処理方法に合わせて処理を進行。
        </h1>
      </div>

      <section className="container rnd03 com-comm s-comm">
        <div className="pdt40"></div>
        <ul className="twoDiv">
          <li>
            <h5>
              ED電極を通じて廃水内の陽イオンと陰イオン、TOCを分離し、各汚染物質の処理方法に合わせて処理を進行。
            </h5>
          </li>
        </ul>
      </section>

      <section className="rnd03-01 container">
        <div className="pdt80"></div>
        <p>
          <img src={Img01} alt="処理工程図" className="res-img" />
        </p>
      </section>

      <div className="pdt100"></div>

      <div className="s-comm container">
        <div className="pdb20"></div>
        <h1>
          工程内に発生する Na<sub>2</sub>SO<sub>4</sub>(硫酸ナトリウム)を分離してリサイクル
        </h1>
      </div>

      <section className="container rnd03 com-comm s-comm">
        <div className="pdt40"></div>
        <ul className="twoDiv">
          <li>
            <h5>
              廃バッテリー工程内に発生する工程廃水には様々な種類の汚染物質が存在<br />
              TOC, H<sub>2</sub>SO<sub>4</sub>, NaOH, 微量の重金属, Na<sub>2</sub>SO<sub>4</sub> などが存在
            </h5>
          </li>
        </ul>
      </section>

      <section className="container rnd03-02 s-pad-bt">
        <div className="pdb40"></div>
        <p className="center">
          <img src={Img02} className="res-img" alt="Na2SO4 分離図" />
        </p>
        <div className="pdb80"></div>
        <h4>
          工程内に発生する Na<sub>2</sub>SO<sub>4</sub>(硫酸ナトリウム)を分離してリサイクル
        </h4>
        <ul className="tech-boxes">
          {techItems.map((item, index) => (
            <li key={index}>
              <div className="box" style={{ minHeight: '480px' }}>
                <div className="top">
                  <p>
                    <img src={item.img} alt={item.title} />
                  </p>
                </div>
                <div className="txt">
                  <h1 style={{ fontSize: '1rem' }}>{item.title}</h1>
                  <h2 style={{ fontSize: '0.9rem' }}>{item.subtitle}</h2>
                  <h3 style={{ fontSize: '0.85rem' }}>{item.desc}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default RDWaterTreatmentSolution;
