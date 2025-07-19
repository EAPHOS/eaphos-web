import PageNav from '../../../components/PageNav';

const Exhibition = () => {
  return (
    <div>
      <PageNav
        title='Exhibition'
        parentTitle='Notice'
        parentPath='/en/notice/exhibition'
        siblings={[
          { title: 'Exhibition', path: '/en/notice/exhibition' },
          { title: 'News', path: '/en/notice/news' },
        ]}
      />
      <h1>Exhibition</h1>
      <p>This is the exhibition information page.</p>
    </div>
  );
};

export default Exhibition;
