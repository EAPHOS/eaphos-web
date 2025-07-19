import PageNav from '../../../components/PageNav';

const Investors = () => {
  return (
    <div>
      <PageNav
        title='投資会社'
        parentTitle='Company'
        parentPath='/jp/company/introduction'
        siblings={[
          { title: '会社紹介', path: '/jp/company/introduction' },
          {
            title: '認証及び知的財産',
            path: '/jp/company/certification',
          },
          { title: '投資会社', path: '/jp/company/investors' },
        ]}
        imageClass='comTop'
      />

      <h1>投資家</h1>
      <p>投資家情報ページです。</p>
    </div>
  );
};

export default Investors;
