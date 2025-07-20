import PageNav from '../../../components/PageNav';
const Investors = () => {
  const investors = [
    {
      name: 'Kolon Investment',
      image: '/src/assets/com04-01.png',
    },
    {
      name: 'BLISSVINE VENTURES',
      image: '/src/assets/com04-04.png',
    },
    {
      name: 'Schmidt',
      image: '/src/assets/com04-05.png',
    },
    {
      name: 'Gyeonggi Center for Creative Economy & Innovation',
      image: '/src/assets/com04-07.png',
    },
  ];

  return (
    <>
      <PageNav
        title='Investment Company'
        parentTitle='Company'
        parentPath='/en/company/introduction'
        siblings={[
          { title: 'About us', path: '/en/company/introduction' },
          { title: 'Certification & IP', path: '/en/company/certification' },
          { title: 'Investment Company', path: '/en/company/investors' },
        ]}
        imageClass='comTop'
      />

      <div className='s-comm container'>
        <h3>Investment Company</h3>
        <h1>Current Status of Investment Companies of EA PHOS Co., Ltd</h1>
      </div>

      <section className='container com04 s-pad-bt com-comm'>
        <div className='pdt20'></div>
        <ul>
          {investors.map((inv, idx) => (
            <li key={idx}>
              <p>
                <img src={inv.image} alt={inv.name} className='res-img' />
              </p>
              <h6>{inv.name}</h6>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Investors;
