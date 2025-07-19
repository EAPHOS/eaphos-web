import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    $: any;
    Swiper: any;
  }
}

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMegaMenuHover = (menuName: string) => {
    setActiveMegaMenu(menuName);
  };

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  const handleSubMenuClick = () => {
    setActiveMegaMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 햄버거 메뉴 기능
  useEffect(() => {
    if (hamburgerRef.current) {
      const hamburger = hamburgerRef.current;
      const nav = hamburger.parentElement?.querySelector('nav');

      if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
          nav.classList.toggle('open');
          hamburger.classList.toggle('toggle');
        });

        // 메뉴 항목 클릭 시 메뉴 닫기
        const menuLinks = nav.querySelectorAll('a');
        menuLinks.forEach(link => {
          link.addEventListener('click', () => {
            nav.classList.remove('open');
            hamburger.classList.remove('toggle');
          });
        });
      }
    }
  }, []);

  // Swiper 초기화
  useEffect(() => {
    const initSwiper = () => {
      if (window.Swiper) {
        const swiper = new window.Swiper('.mobhSwiper', {
          loop: true,
          autoplayDisableOnInteraction: false,
          slidesPerView: 1,
          autoHeight: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          effect: 'fade',
          fadeEffect: { crossFade: true },
        });
      }
    };
  }, []);

  return (
    <>
      {/* 헤더PC */}
      <div className='wix-section header-pc rela'>
        <span className='wix-logo'>
          <Link to='/kr'>
            <img src='/src/assets/logo.png' alt='logo' />
          </Link>
        </span>
        <div className='wix-custom-component'>
          <nav className='navbar'>
            <div
              className='navbar-item mega-menu-item'
              onMouseEnter={() => handleMegaMenuHover('company')}
              onMouseLeave={handleMegaMenuLeave}
            >
              <Link to='/kr/company/introduction' className='big-m'>
                Comapny
              </Link>
              <div
                className={`mega-menu-dropdown-content ${activeMegaMenu === 'company' ? 'show' : ''}`}
              >
                <div className='row'>
                  <div className='column onede'>
                    <Link
                      to='/kr/company/introduction'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      회사소개
                    </Link>
                    {/* <a class="column-link" href="/kr/com02.php">연혁</a> */}
                    <Link
                      to='/kr/company/certification'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      인증 및 지적재산
                    </Link>
                    <Link
                      to='/kr/company/investors'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      투자사
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='navbar-item mega-menu-item'
              onMouseEnter={() => handleMegaMenuHover('rd')}
              onMouseLeave={handleMegaMenuLeave}
            >
              <Link to='/kr/rd/business-roadmap' className='big-m'>
                R&amp;D
              </Link>
              <div
                className={`mega-menu-dropdown-content ${activeMegaMenu === 'rd' ? 'show' : ''}`}
              >
                <div className='row'>
                  <div className='column twode'>
                    <Link
                      to='/kr/rd/business-roadmap'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      사업 로드맵
                    </Link>
                    <Link
                      to='/kr/rd/solvent-extractant'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      용매추출제
                    </Link>
                    <Link
                      to='/kr/rd/water-treatment-solution'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      수처리 솔루션
                    </Link>
                    <Link
                      to='/kr/rd/energy-system'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      에너지 시스템
                    </Link>
                    <Link
                      to='/kr/rd/anode-material'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      음극재 소재
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='navbar-item mega-menu-item'
              onMouseEnter={() => handleMegaMenuHover('product')}
              onMouseLeave={handleMegaMenuLeave}
            >
              <Link to='/kr/product/industrial-detergent' className='big-m'>
                Product
              </Link>
              <div
                className={`mega-menu-dropdown-content ${activeMegaMenu === 'product' ? 'show' : ''}`}
              >
                <div className='row'>
                  <div className='column thrde'>
                    <Link
                      to='/kr/product/industrial-detergent'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      공업용 세정제
                    </Link>
                    <Link
                      to='/kr/product/solvent-extractant'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      용매추출제
                    </Link>
                    <Link
                      to='/kr/product/water-treatment-solution'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      수처리 솔루션
                    </Link>
                    <Link
                      to='/kr/product/energy-system'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      에너지 시스템
                    </Link>
                    <Link
                      to='/kr/product/anode-material'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      음극재 소재
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='navbar-item mega-menu-item'
              onMouseEnter={() => handleMegaMenuHover('notice')}
              onMouseLeave={handleMegaMenuLeave}
            >
              <Link to='/kr/notice/exhibition' className='big-m'>
                Notice
              </Link>
              <div
                className={`mega-menu-dropdown-content ${activeMegaMenu === 'notice' ? 'show' : ''}`}
              >
                <div className='row'>
                  <div className='column frde'>
                    <Link
                      to='/kr/notice/exhibition'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      전시회
                    </Link>
                    <Link
                      to='/kr/notice/news'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      뉴스
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className='lnb-btn'>
          <div className='dropdown' ref={dropdownRef}>
            <div className='select' onClick={toggleDropdown}>
              <p>
                KR<span></span>
              </p>
            </div>
            <input type='hidden' name='lang' />
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <Link to='/en'>
                <li id=''>EN</li>
              </Link>
              <Link to='/jp'>
                <li id=''>JP</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* mobheader */}
      <div className='mob-logo'>
        <Link to='/kr'>
          <img src='/src/assets/logo.png' alt='logo' />
        </Link>
      </div>
      <div className='right-header'>
        <div className='hamburger' ref={hamburgerRef}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
        <nav>
          <div className='inner-div'>
            {/* 스와이퍼 */}
            <div className='lt'>
              <div className='swiper mySwiper mobhSwiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden'>
                <div
                  className='swiper-wrapper'
                  id='swiper-wrapper-b4eacdbd27a597e10'
                  aria-live='off'
                  style={{ transitionDuration: '0ms', transitionDelay: '0ms' }}
                >
                  <div
                    className='swiper-slide lt01'
                    role='group'
                    aria-label='1 / 2'
                  >
                    <div className='txt'>
                      <h1>이에이포스,</h1>
                      <h2>빠르게 성장하는 이차전지 Recycle</h2>
                    </div>
                  </div>
                  <div
                    className='swiper-slide lt02'
                    role='group'
                    aria-label='2 / 2'
                  >
                    <div className='txt'>
                      <h1>친환경 이차전지 솔루션,</h1>
                      <h2>주식회사 이에이포스</h2>
                    </div>
                  </div>
                </div>
                <span
                  className='swiper-notification'
                  aria-live='assertive'
                  aria-atomic='true'
                ></span>
              </div>
            </div>

            <div className='rt'>
              <p className='rt-hd-logo on'>
                <img src='/src/assets/logo.png' alt='' />
              </p>
              <ul className='lang'>
                <li>
                  <Link to='/kr' className='on'>
                    KR
                  </Link>
                </li>
                <li>
                  <Link to='/en'>EN</Link>
                </li>
                <li>
                  <Link to='/jp'>JP</Link>
                </li>
              </ul>
              <ul className='menu'>
                <li>
                  <Link to='/kr/company/introduction' className='big'>
                    COMPANY
                  </Link>
                  <ul className='rt-hd-inner'>
                    <li>
                      <Link to='/kr/company/introduction'>회사소개</Link>
                    </li>
                    {/* <!-- <li><a href="/kr/com02.php">연혁</a></li> --> */}
                    <li>
                      <Link to='/kr/company/certification'>
                        인증 및 지적재산
                      </Link>
                    </li>
                    <li>
                      <Link to='/kr/company/investors'>투자사</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/kr/rd/business-roadmap' className='big'>
                    R&amp;D
                  </Link>
                  <ul className='rt-hd-inner'>
                    <li>
                      <Link to='/kr/rd/business-roadmap'>사업 로드맵</Link>
                    </li>
                    <li>
                      <Link to='/kr/rd/solvent-extractant'>용매추출제</Link>
                    </li>
                    <li>
                      <Link to='/kr/rd/water-treatment-solution'>
                        수처리 솔루션
                      </Link>
                    </li>
                    <li>
                      <Link to='/kr/rd/energy-system'>에너지 시스템</Link>
                    </li>
                    <li>
                      <Link to='/kr/rd/anode-material'>음극재 소재</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/kr/product/industrial-detergent' className='big'>
                    PRODUCT
                  </Link>
                  <ul className='rt-hd-inner'>
                    <li>
                      <Link to='/kr/product/industrial-detergent'>
                        공업용 세정제
                      </Link>
                    </li>
                    <li>
                      <Link to='/kr/product/solvent-extractant'>
                        용매추출제
                      </Link>
                    </li>
                    <li>
                      <Link to='/kr/product/water-treatment-solution'>
                        수처리 솔루션
                      </Link>
                    </li>
                    <li>
                      <Link to='/kr/product/energy-system'>에너지 시스템</Link>
                    </li>
                    <li>
                      <Link to='/kr/product/anode-material'>음극재 소재</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/kr/notice/exhibition' className='big'>
                    NOTICE
                  </Link>
                  <ul className='rt-hd-inner'>
                    <li>
                      <Link to='/kr/notice/exhibition'>전시회</Link>
                    </li>
                    <li>
                      <Link to='/kr/notice/news'>NEWS</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
