import PageNav from '../../../components/PageNav';

const News = () => {
  return (
    <div>
      <PageNav
        title='ニュース'
        parentTitle='Notice'
        parentPath='/jp/notice/exhibition'
        siblings={[
          { title: '展示会', path: '/jp/notice/exhibition' },
          { title: 'ニュース', path: '/jp/notice/news' },
        ]}
      />
      <h1>ニュース</h1>
      <p>ニュースページです。</p>
    </div>
  );
};

export default News;
