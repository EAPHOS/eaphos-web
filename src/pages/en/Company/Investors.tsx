import PageNav from '../../../components/PageNav';

const Investors = () => {
  return (
    <div>
      <PageNav
        title='Investment Company'
        parentTitle='Company'
        parentPath='/en/company/introduction'
        siblings={[
          { title: 'About us', path: '/en/company/introduction' },
          {
            title: 'Certification and Intellectual Property',
            path: '/en/company/certification',
          },
          { title: 'Investment Company', path: '/en/company/investors' },
        ]}
        imageClass='comTop'
      />
      <h1>Investors</h1>
      <p>This is the investors information page.</p>
    </div>
  );
};

export default Investors;
