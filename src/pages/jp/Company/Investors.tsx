import PageNav from '../../../components/PageNav';

const Investors = () => {
  const investors = [
    {
      name: '㈱Kolon Investment',
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
      name: 'Gyeonggi Center for Creative Economy & Innovation(ギョンギ創造経済革新センター)',
      image: '/src/assets/com04-07.png',
    },
  ];

  return (
    <>
      <PageNav
        title='投資会社'
        parentTitle='Company'
        parentPath='/jp/company/introduction'
        siblings={[
          { title: '会社紹介', path: '/jp/company/introduction' },
          { title: '認証及び知的財産', path: '/jp/company/certification' },
          { title: '投資会社', path: '/jp/company/investors' },
        ]}
        imageClass='comTop'
      />

      <div className='s-comm container'>
        <h3 style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>投資会社</h3>
        <h1 style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
          (株)EAPHOSの投資会社の現況です。
        </h1>
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
