import TopVisual from '../../../assets/rndTop.jpg';
import Img01 from '../../../assets/rnd03-01_kr.png';
import Img02 from '../../../assets/rnd03-02_kr.jpg';
import Icon01 from '../../../assets/rnd03-08.png';
import Icon02 from '../../../assets/rnd03-09_kr.png';
import Icon03 from '../../../assets/rnd03-10_kr.png';
import Icon04 from '../../../assets/rnd03-11_kr.png';
import Icon05 from '../../../assets/rnd03-12.png';

import '../../../css/RDWaterTreatmentSolution.css'; // 반응형 및 스타일 정의

type TechItem = {
  img: string;
  title: string;
  subtitle: string;
  desc: string;
};

const techItems: TechItem[] = [
  {
    img: Icon01,
    title: '오일제거기술 IGF',
    subtitle: 'Induced Gas Flotation',
    desc: '폐수 내 오일 성분을 기포를 주입하여 오일 부상 분리하는 기술'
  },
  {
    img: Icon02,
    title: '여과기술 UF',
    subtitle: 'Ultra Filtration',
    desc: '고형물 제거를 위한 여과 기술로 RO 멤브레인 파울링 현상 방지'
  },
  {
    img: Icon03,
    title: '탈염기술 NF&RO',
    subtitle: 'Nano Filtration & Reverse Osmosis',
    desc: '1가, 2가 이상 이온을 선택적으로 분리,탈염하는 멤브레인 기술'
  },
  {
    img: Icon04,
    title: '이온농축기술 CDI&ED',
    subtitle: 'Capacitive Deionization & Electro Dialysis',
    desc: '전기화학기술로 양극으로 음이온, 음극으로 양이온을 분리, 농축하는 기술'
  },
  {
    img: Icon05,
    title: '이온교환기술 IER',
    subtitle: 'Ion Exchange',
    desc: '이온교환수지의 이온교환기로 재이용수, 농축수의 유가금속 양이온을 제거, 회수하는 기술'
  },
];

const RDWaterTreatmentSolution = () => {
  return (
    <>
      <section className="visual-top">
        <img src={TopVisual} alt="비주얼 상단 이미지" className="top-img" />
      </section>

      <div className="s-B rndTop"></div>

      <div className="s-comm container">
        <h3>연구 배경 및 필요성</h3>
        <div className="pdb20"></div>
        <h1>
          ED 전극을 통해 폐수 내 양이온과 음이온, TOC를 분리하여 <br />
          각 오염물질들의 처리 방법에 맞춰 처리 진행
        </h1>
      </div>

      <section className="container rnd03 com-comm s-comm">
        <div className="pdt40"></div>
        <ul className="twoDiv">
          <li>
            <h5>
              ED 전극을 통해 폐수 내 양이온과 음이온, TOC를 분리하여 각 오염물질들의 처리 방법에 맞춰 처리 진행
            </h5>
          </li>
        </ul>
      </section>

      <section className="rnd03-01 container">
        <div className="pdt80"></div>
        <p>
          <img src={Img01} alt="처리공정 이미지" className="res-img" />
        </p>
      </section>

      <div className="pdt100"></div>

      <div className="s-comm container">
        <div className="pdb20"></div>
        <h1>
          공정 내 발생되는 Na<sub>2</sub>SO<sub>4</sub>(황산나트륨)을 분리하여 재활용
        </h1>
      </div>

      <section className="container rnd03 com-comm s-comm">
        <div className="pdt40"></div>
        <ul className="twoDiv">
          <li>
            <h5>
              폐배터리 공정 내 발생되는 공정 폐수에는 다양한 종류의 오염물질들이 존재<br />
              TOC, H2SO4, NaOH, 미량의 중금속, Na<sub>2</sub>SO<sub>4</sub> 등이 존재
            </h5>
          </li>
        </ul>
      </section>

      <section className="container rnd03-02 s-pad-bt">
        <div className="pdb40"></div>
        <p className="center">
          <img src={Img02} className="res-img" alt="Na2SO4 분리 이미지" />
        </p>
        <div className="pdb80"></div>
        <h4>
          공정 내 발생되는 Na<sub>2</sub>SO<sub>4</sub>(황산나트륨)을 분리하여 재활용
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
                  <h1>{item.title}</h1>
                  <h2>{item.subtitle}</h2>
                  <h3>{item.desc}</h3>
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
