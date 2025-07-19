import { Link, useLocation } from 'react-router-dom';

interface PageNavProps {
  title: string;
  parentTitle: string;
  parentPath: string;
  siblings: { title: string; path: string }[];
  imageClass?: 'comTop' | 'rndTop' | 'proTop' | 'notTop' | '';
}

const PageNav = ({
  title,
  parentTitle,
  parentPath,
  siblings,
  imageClass,
}: PageNavProps) => {
  const currentPath = useLocation().pathname;

  return (
    <section className='s-top'>
      <div className='s-txt container'>
        <h5>
          <Link to='/'>
            <img src='/src/assets/home.png' alt='' title='' />
          </Link>
          {' > '}&nbsp;
          <Link to={parentPath}>{parentTitle}</Link>
          {' > '}&nbsp;
          <Link to=''>{title}</Link>
        </h5>
        <h1>{title}</h1>
        <ul>
          {siblings.map(sibling => (
            <li key={sibling.title}>
              <Link
                to={sibling.path}
                className={sibling.path === currentPath ? 'on' : ''}
              >
                {sibling.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {imageClass && <div className={`s-B ${imageClass}`}></div>}
    </section>
  );
};

export default PageNav;
