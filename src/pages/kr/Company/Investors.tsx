import PageNav from '../../../components/PageNav';
import '/src/css/investors.css';

const Investors = () => {
  const investors = [
    {
      name: '코오롱인베스트먼트',
      image: '/src/assets/com04-01.png',
    },
    {
      name: '블리스바인',
      image: '/src/assets/com04-04.png',
    },
    {
      name: '슈미트',
      image: '/src/assets/com04-05.png',
    },
    {
      name: '경기 창조경제혁신센터',
      image: '/src/assets/com04-07.png',
    },
  ];

  return (
    <>
      <PageNav
        title='투자사'
        parentTitle='Company'
        parentPath='/kr/company/introduction'
        siblings={[
          { title: 'About us', path: '/kr/company/introduction' },
          { title: '인증 및 지적재산', path: '/kr/company/certification' },
          { title: '투자사', path: '/kr/company/investors' },
        ]}
        imageClass='comTop'
      />

      <div className='s-comm container'>
        <h3>투자사</h3>
        <h1>(주)이에이포스의 투자사 현황 입니다.</h1>
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
