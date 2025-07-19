// 언어별 Header와 Footer 컴포넌트들
import HeaderKR from '../pages/kr/Header';
import FooterKR from '../pages/kr/Footer';
import HeaderEN from '../pages/en/Header';
import FooterEN from '../pages/en/Footer';
import HeaderJP from '../pages/jp/Header';
import FooterJP from '../pages/jp/Footer';
import ScrollToTop from '../hooks/scrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const path = window.location.pathname;

  // 경로에 따라 언어 결정
  let language = 'kr'; // 기본값
  if (path.startsWith('/en')) {
    language = 'en';
  } else if (path.startsWith('/jp')) {
    language = 'jp';
  }

  // 언어별 컴포넌트 매핑
  const components = {
    kr: { Header: HeaderKR, Footer: FooterKR },
    en: { Header: HeaderEN, Footer: FooterEN },
    jp: { Header: HeaderJP, Footer: FooterJP },
  };

  const { Header, Footer } = components[language as keyof typeof components];

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
