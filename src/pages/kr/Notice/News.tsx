import PageNav from '../../../components/PageNav';

const News = () => {
  return (
    <div>
      <PageNav
        title='뉴스'
        parentTitle='Notice'
        parentPath='/kr/notice/exhibition'
        siblings={[
          { title: '전시회', path: '/kr/notice/exhibition' },
          { title: '뉴스', path: '/kr/notice/news' },
        ]}
      />
      <h1>뉴스</h1>
      <p>뉴스 페이지입니다.</p>
    </div>
  );
};

export default News;
