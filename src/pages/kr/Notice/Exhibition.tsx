import PageNav from '../../../components/PageNav';

const Exhibition = () => {
  return (
    <div>
      <PageNav
        title='전시회'
        parentTitle='Notice'
        parentPath='/kr/notice/exhibition'
        siblings={[
          { title: '전시회', path: '/kr/notice/exhibition' },
          { title: '뉴스', path: '/kr/notice/news' },
        ]}
      />
      <h1>전시회</h1>
      <p>전시회 정보 페이지입니다.</p>
    </div>
  );
};

export default Exhibition;
