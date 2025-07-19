import PageNav from '../../../components/PageNav';

const Exhibition = () => {
  return (
    <div>
      <PageNav
        title='展示会'
        parentTitle='Notice'
        parentPath='/jp/notice/exhibition'
        siblings={[
          { title: '展示会', path: '/jp/notice/exhibition' },
          { title: 'ニュース', path: '/jp/notice/news' },
        ]}
      />
      <h1>展示会</h1>
      <p>展示会情報ページです。</p>
    </div>
  );
};

export default Exhibition;
