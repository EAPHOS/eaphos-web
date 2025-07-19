import rnd0201Img from '../../../assets/rnd02-01.png';
import rnd0200Img from '../../../assets/rnd02-00.png';
import rnd02000Img from '../../../assets/rnd02-000.png';
import rnd02001Img from '../../../assets/rnd02-001.png';
import rnd0212Img from '../../../assets/rnd02-12_en.png';
import rnd0202Img from '../../../assets/rnd02-02.png';
import rnd0204Img from '../../../assets/rnd02-04_en.png';
import rnd0208Img from '../../../assets/rnd02-08.jpg';
import rnd0210Img from '../../../assets/rnd02-10.jpg';

const RDSolventExtractant = () => {
  return (
    <>
      <div className="s-comm container">
        <h3>Research Background and Necessity</h3>
        <div className="pdb20"></div>
        <h1>Recently, the market size of secondary batteries is expected <br />
          to increase eightfold from $46.1 billion in 2020 to <br />
          an estimated $351.7 billion in 2030.
        </h1>
      </div>

      <section className="container rnd02 com-comm s-comm">
        <div className="pdt40"></div>
        <ul className="twoDiv">
          <li>
            <h5 className="wd80">
              As demand increases, the issue of waste batteries is also becoming a hot topic, and in fact, 
              the amount of waste batteries generated from electric vehicles is expected to increase 
              by about 7 times in 2030 compared to 2025, and the waste battery recycling market is also expected 
              to grow to KRW 60 trillion in the same year. <br /><br />
              Most of the raw materials for cathode materials used in the domestic secondary battery industry are supplied through overseas procurement.<br /><br />
              In fact, only 20% of cobalt and lithium are supplied domestically, 
              and the self-sufficiency level for other metals is less than 50%. 
              On the other hand, China has achieved more than 70% localization in the battery core material sector. 
              In order to reduce the import dependence of domestic battery raw materials, research on secondary battery recycling technology is essential.<br /><br />
              Therefore, we will be able to lead the market through rapid response and research to the movement of the waste battery recycling international market.
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
          <h1 className="center">Need to Reuse · Recycle Waste Batteries</h1>
          <ul>
            <li>
              <div
                className="inner bg01"
                style={{
                  background: `url(${rnd0208Img}) no-repeat`
                }}
              >
                <div className="txt">
                  <h1>The solvent extractant localization rate is Zero.</h1>
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
                  <h1>Lowest self-sufficiency in raw materials</h1>
                  <h2>maximum dependence on imports</h2>
                </div>
              </div>
            </li>
          </ul>
          <div className="pdt60"></div>
          <ul className="rnd02" style={{ display: 'flex', justifyContent: 'center' }}>
            <li>
              <p className="center"><img src={rnd0200Img} className="res-img02" alt="" /></p>
              <div className="txt">
                <h2>cathode material raw material</h2>
                <h3>Despite the growth of the domestic secondary battery market, most cathode material raw materials are non-existent in Korea.</h3>
                <h4>The raw materials for cathode materials used in Korea depend on imports.</h4>
              </div>
            </li>
            <li>
              <p className="center"><img src={rnd02000Img} className="res-img02" alt="" /></p>
              <div className="txt">
                <h2>Solvent Extractants</h2>
                <h3>For raw material extraction, the process using a solvent extractant shows the highest extraction efficiency.</h3>
                <h4>Solvent extractants used in Korea depend on overseas markets.</h4>
              </div>
            </li>
          </ul>
          <div className="under">
            <p className="ar"><img src={rnd02001Img} alt="" /></p>
            <h5>Localization of the lowest-cost, high-purity solvent extractant in Korea. Formation of a new paradigm for <span>being a resource-rich country</span>  through urban mining.</h5>
          </div>
        </div>
      </section>

      <section className="rnd02-05 s-comm">
        <div className="container ">
          <h1><span>Being a rich country</span>  through urban mining</h1>
          <div className="pdb20"></div>
          <h5>Synthesis and extraction of solvent extractants for extracting Co, Ni, and Li in Black Mass, and the water treatment process operated as one cycle by treating process wastewater.</h5>
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
          <li>{/* Empty */}</li>
        </ul>
      </section>

      <section className="rnd02-02 container s-pad-bt">
        <p><img src={rnd0204Img} alt="" className="res-img" /></p>
      </section>
    </>
  );
};

export default RDSolventExtractant;
