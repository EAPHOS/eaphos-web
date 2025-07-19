import PageNav from '../../../components/PageNav';

const Investors = () => {
  return (
    <div>
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
      <h1>투자사</h1>
      <p>투자사 정보 페이지입니다.</p>
    </div>
  );
};

export default Investors;
