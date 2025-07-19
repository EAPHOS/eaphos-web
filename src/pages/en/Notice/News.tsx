import PageNav from '../../../components/PageNav';

const News = () => {
  return (
    <div>
      <PageNav
        title='News'
        parentTitle='Notice'
        parentPath='/en/notice/exhibition'
        siblings={[
          { title: 'Exhibition', path: '/en/notice/exhibition' },
          { title: 'News', path: '/en/notice/news' },
        ]}
      />
      <h1>News</h1>
      <p>This is the news page.</p>
    </div>
  );
};

export default News;
