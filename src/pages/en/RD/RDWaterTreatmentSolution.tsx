import PageNav from '../../../components/PageNav';
import Img01 from '/assets/rnd03-01_en.png';
import Img02 from '/assets/rnd03-02_en.png';
import Icon01 from '/assets/rnd03-08.png';
import Icon02 from '/assets/rnd03-09_en.png';
import Icon03 from '/assets/rnd03-10_en.png';
import Icon04 from '/assets/rnd03-11_en.png';
import Icon05 from '/assets/rnd03-12.png';

type TechItem = {
  img: string;
  title: string;
  subtitle: string;
  desc: string;
};

const techItems: TechItem[] = [
  {
    img: Icon01,
    title: 'Oil Removal Technology IGF',
    subtitle: 'Induced Gas Flotation',
    desc: 'Technology of oil flotation by injecting air bubble into oil components in waste water',
  },
  {
    img: Icon02,
    title: 'Filtration Technology UF',
    subtitle: 'Ultra Filtration',
    desc: 'Filtration technology for removing solids prevents RO membrane fouling',
  },
  {
    img: Icon03,
    title: 'Deionization Technology NF&RO',
    subtitle: 'Nano Filtration & Reverse Osmosis',
    desc: 'Membrane technology to selectively separate and deionize monovalent, divalent or higher ions',
  },
  {
    img: Icon04,
    title: 'Ion Concentration Technology CDI&ED',
    subtitle: 'Capacitive Deionization & Electro Dialysis',
    desc: 'Technology to separate and concentrate anions to the anode and cations to the cathode using electrochemical technology',
  },
  {
    img: Icon05,
    title: 'Ion Exchange Technology IER',
    subtitle: 'Ion Exchange',
    desc: 'Technology for removing and recovering valuable metal cations from reused water and concentrated water using an ion exchanger of ion exchange resin',
  },
];

const RDWaterTreatmentSolution = () => {
  return (
    <>
      <PageNav
        title='Water Treatment Solution'
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

      <div className='s-B rndTop'></div>

      <div className='s-comm container'>
        <h3>Research Background and Necessity</h3>
        <div className='pdb20'></div>
        <h1>
          Performing treatment according to the treatment method for each
          pollutant <br />
          by separating cations, anions, and TOC in wastewater through the ED
          electrode
        </h1>
      </div>

      <section className='container rnd03 com-comm s-comm'>
        <div className='pdt40'></div>
        <ul className='twoDiv'>
          <li>
            <h5>
              Performing treatment according to the treatment method for each
              pollutant by separating cations, anions, and TOC in wastewater
              through the ED electrode
            </h5>
          </li>
        </ul>
      </section>

      <section className='rnd03-01 container'>
        <div className='pdt80'></div>
        <p>
          <img src={Img01} alt='Process diagram' className='res-img' />
        </p>
      </section>

      <div className='pdt100'></div>

      <div className='s-comm container'>
        <div className='pdb20'></div>
        <h1>
          Recycling by separating Na<sub>2</sub>SO<sub>4</sub> (sodium sulfate)
          generated during the process
        </h1>
      </div>

      <section className='container rnd03 com-comm s-comm'>
        <div className='pdt40'></div>
        <ul className='twoDiv'>
          <li>
            <h5>
              There are TOC, H<sub>2</sub>SO<sub>4</sub>, NaOH, traces of heavy
              metals, Na<sub>2</sub>SO<sub>4</sub>, etc.
            </h5>
          </li>
        </ul>
      </section>

      <section className='container rnd03-02 s-pad-bt'>
        <div className='pdb40'></div>
        <p className='center'>
          <img
            src={Img02}
            className='res-img'
            alt='Na2SO4 separation diagram'
          />
        </p>
        <div className='pdb80'></div>
        <h4>
          Recycling by separating Na<sub>2</sub>SO<sub>4</sub> (sodium sulfate)
          generated during the process
        </h4>
        <ul className='tech-boxes'>
          {techItems.map((item, index) => (
            <li key={index}>
              <div className='box' style={{ minHeight: '480px' }}>
                <div className='top'>
                  <p>
                    <img src={item.img} alt={item.title} />
                  </p>
                </div>
                <div className='txt'>
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
