import rnd0201Img from '../../../assets/rnd02-01.png';
import rnd0200Img from '../../../assets/rnd02-00.png';
import rnd02000Img from '../../../assets/rnd02-000.png';
import rnd02001Img from '../../../assets/rnd02-001.png';
import rnd0212Img from '../../../assets/rnd02-12.png';
import rnd0202Img from '../../../assets/rnd02-02.png';
import rnd0204Img from '../../../assets/rnd02-04.png';
import rnd0208Img from '../../../assets/rnd02-08.jpg';
import rnd0210Img from '../../../assets/rnd02-10.jpg';

const RDSolventExtractant = () => {
  return (
    <>
      <div className="s-comm container">
        <h3>연구 배경 및 필요성</h3>
        <div className="pdb20"></div>
        <h1>최근 이차전지의 시장 규모는<br />
          2020년 461억 달러에서 2030년 추산 3,517억 달러로 <br />
          8배의 수요가 증가할 것으로 전망됨.
        </h1>
      </div>

      <section className="container rnd02 com-comm s-comm">
        <div className="pdt40"></div>
        <ul className="twoDiv">
          <li>
            <h5 className="wd80">
              수요가 증가함에 따라 폐배터리에 대한 이슈도 화두가 되고 있으며, 실제로 전기차에서 발생하는 폐배터리의 양은 2025년보다 2030년에 약 7배 늘어날 것으로 판단되며, 이에 발맞춰 폐배터리 재활용 시장도 같은 해에 60조 원 규모로 성장할 것 입니다. <br />
              국내 이차전지 산업에서 사용되는 양극재의 원료 물질은 대부분 해외 조달을 통해 공급받고 있는 실정 입니다.<br /><br />
              실제로 코발트와 리튬의 경우 고작 20%만이 자국에서 공급되고 있으며, 이외의 금속도 자족하는 수준이 50%에 미치지 못합니다. <br />
              반면, 중국의 경우 배터리 핵심 소재 부문에서 70% 이상의 국산화를 달성하고 있습니다. 국내 배터리 원료의 수입 의존성을 줄이기 위해서는 이차전지 재활용 기술 연구가 필수적인 실정입니다.<br /><br />
              따라서 폐배터리 재활용 국제 시장의 움직임에 대한 빠른 대응 및 연구를 통해 시장을 선도할 수 있을 것 입니다.
            </h5>
          </li>
          <li>
            <p><img src={rnd0201Img} alt="" /></p>
          </li>
        </ul>
      </section>

      <div className="pdt100"></div>

      <section className="rnd02-04 s-comm">
        <div className="container">
          <h1 className="center">폐배터리 재사용 · 재활용 필요</h1>
          <ul>
            <li>
              <div
                className="inner bg01"
                style={{
                  background: `url(${rnd0208Img}) no-repeat`
                }}
              >
                <div className="txt">
                  <h1>용매추출제 국산화율</h1>
                  <h2>Zero</h2>
                </div>
              </div>
            </li>
            <li>
              <div
                className="inner bg03"
                style={{
                  background: `url(${rnd0210Img}) no-repeat`
                }}
              >
                <div className="txt">
                  <h1>원료 자급도 최저,</h1>
                  <h2>수입의존도 최대</h2>
                </div>
              </div>
            </li>
          </ul>
          <div className="pdt60"></div>
          <ul className="rnd02">
            <li>
              <p className="center"><img src={rnd0200Img} className="res-img02" alt="" /></p>
              <div className="txt">
                <h2>양극재 물질 원료</h2>
                <h3>국내 이차전지 시장의 성장에도 불구하고 대부분 양극재 물질 원료는 국내 전무</h3>
                <h4>국내 사용되는 양극재 원료를 수입에 의존</h4>
              </div>
            </li>
            <li>
              <p className="center"><img src={rnd02000Img} className="res-img02" alt="" /></p>
              <div className="txt">
                <h2>용매추출제</h2>
                <h3>원료 추출은 용매 추출제를 사용한 공정이 가장 높은 추출효율을 보임</h3>
                <h4>국내 사용되는 용매추출제를 해외시장에 의존</h4>
              </div>
            </li>
          </ul>
          <div className="under">
            <p className="ar"><img src={rnd02001Img} alt="" /></p>
            <h5>국내최고 저비용, 고순도의 용매추출제 <span>국산화</span> 도시광산을 통한 <span>자원 부국화</span>의 새로운 패러다임 형성</h5>
          </div>
        </div>
      </section>

      <section className="rnd02-05 s-comm">
        <div className="container ">
          <h1>도시광산을 통한 부국화</h1>
          <div className="pdb20"></div>
          <h5>Black Mass 내 Co, Ni, Li 추출을 위한 용매추출제 합성 및 추출, 공정 폐수 처리하여 수처리공정이 하나의 Cycle로 운영</h5>
          <div className="pdb40"></div>
          <p className="center"><img src={rnd0212Img} className="res-img" alt="" /></p>
        </div>
      </section>

      <div className="pdt30"></div>

      <section className="rnd02-01">
        <ul className="container">
          <li>
            <p><img src={rnd0202Img} alt="" className="res-img" /></p>
          </li>
          <li>{/* 비어 있음 */}</li>
        </ul>
      </section>

      <section className="rnd02-02 container s-pad-bt">
        <p><img src={rnd0204Img} alt="" className="res-img" /></p>
      </section>
    </>
  );
};

export default RDSolventExtractant;
