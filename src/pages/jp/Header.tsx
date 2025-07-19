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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
          <Link to='/jp'>
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
              <Link to='/jp/company/introduction' className='big-m'>
                Comapny
              </Link>
              <div
                className={`mega-menu-dropdown-content ${activeMegaMenu === 'company' ? 'show' : ''}`}
              >
                <div className='row'>
                  <div className='column onede'>
                    <Link
                      to='/jp/company/introduction'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      会社紹介
                    </Link>
                    {/* <a class="column-link" href="/jp/com02.php">연혁</a> */}
                    <Link
                      to='/jp/company/certification'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      認証及び知的財産
                    </Link>
                    <Link
                      to='/jp/company/investors'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      投資会社
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
              <Link to='/jp/rd/business-roadmap' className='big-m'>
                R&amp;D
              </Link>
              <div
                className={`mega-menu-dropdown-content ${activeMegaMenu === 'rd' ? 'show' : ''}`}
              >
                <div className='row'>
                  <div className='column twode'>
                    <Link
                      to='/jp/rd/business-roadmap'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      事業・ロードマップ
                    </Link>
                    <Link
                      to='/jp/rd/solvent-extractant'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      溶媒抽出剤
                    </Link>
                    <Link
                      to='/jp/rd/water-treatment-solution'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      水処理・ソリューション
                    </Link>
                    <Link
                      to='/jp/rd/energy-system'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      エネルギー・システム
                    </Link>
                    <Link
                      to='/jp/rd/anode-material'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      陰極材素材
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
              <Link to='/jp/product/industrial-detergent' className='big-m'>
                Product
              </Link>
              <div
                className={`mega-menu-dropdown-content ${activeMegaMenu === 'product' ? 'show' : ''}`}
              >
                <div className='row'>
                  <div className='column thrde'>
                    <Link
                      to='/jp/product/industrial-detergent'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      工業用洗浄剤
                    </Link>
                    <Link
                      to='/jp/product/solvent-extractant'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      溶媒抽出剤
                    </Link>
                    <Link
                      to='/jp/product/water-treatment-solution'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      水処理・ソリューション
                    </Link>
                    <Link
                      to='/jp/product/energy-system'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      エネルギー・システム
                    </Link>
                    <Link
                      to='/jp/product/anode-material'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      陰極材素材
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
              <Link to='/jp/notice/exhibition' className='big-m'>
                Notice
              </Link>
              <div
                className={`mega-menu-dropdown-content ${activeMegaMenu === 'notice' ? 'show' : ''}`}
              >
                <div className='row'>
                  <div className='column frde'>
                    <Link
                      to='/jp/notice/exhibition'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      展示会
                    </Link>
                    <Link
                      to='/jp/notice/news'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      ニュース
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
                JP<span></span>
              </p>
            </div>
            <input type='hidden' name='lang' />
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <Link to='/kr'>
                <li id=''>KR</li>
              </Link>
              <Link to='/en'>
                <li id=''>EN</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* mobheader */}
      <div className='mob-logo'>
        <Link to='/jp'>
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
                    className='swiper-slide lt01 swiper-slide-prev'
                    role='group'
                    aria-label='1 / 2'
                    style={{
                      width: '578px',
                      opacity: 0,
                      transform: 'translate3d(0px, 0px, 0px)',
                      transitionDuration: '0ms',
                    }}
                  >
                    <div className='txt'>
                      <h1>EA PHOS,</h1>
                      <h2>急速に成長する二次電池 Recycle</h2>
                    </div>
                  </div>
                  <div
                    className='swiper-slide lt02 swiper-slide-visible swiper-slide-active'
                    role='group'
                    aria-label='2 / 2'
                    style={{
                      width: '578px',
                      opacity: 0.949827,
                      transform: 'translate3d(-549px, 0px, 0px)',
                      transitionDuration: '0ms',
                    }}
                  >
                    <div className='txt'>
                      <h1>環境にやさしい二次電池ソリューション、,</h1>
                      <h2>EA PHOS</h2>
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
                  <Link to='/jp' className='on'>
                    JP
                  </Link>
                </li>
                <li>
                  <Link to='/kr'>KR</Link>
                </li>
                <li>
                  <Link to='/en'>EN</Link>
                </li>
              </ul>
              <ul className='menu'>
                <li>
                  <Link to='/jp/company/introduction' className='big'>
                    COMPANY
                  </Link>
                  <ul className='rt-hd-inner'>
                    <li>
                      <Link to='/jp/company/introduction'>会社紹介</Link>
                    </li>
                    {/* <!-- <li><a href="/jp/com02.php">연혁</a></li> --> */}
                    <li>
                      <Link to='/jp/company/certification'>
                        認証及び知的財産
                      </Link>
                    </li>
                    <li>
                      <Link to='/jp/company/investors'>投資会社</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/jp/rd/business-roadmap' className='big'>
                    R&amp;D
                  </Link>
                  <ul className='rt-hd-inner'>
                    <li>
                      <Link to='/jp/rd/business-roadmap'>
                        事業・ロードマップ
                      </Link>
                    </li>
                    <li>
                      <Link to='/jp/rd/solvent-extractant'>溶媒抽出剤</Link>
                    </li>
                    <li>
                      <Link to='/jp/rd/water-treatment-solution'>
                        水処理・ソリューション
                      </Link>
                    </li>
                    <li>
                      <Link to='/jp/rd/energy-system'>
                        エネルギー・システム
                      </Link>
                    </li>
                    <li>
                      <Link to='/jp/rd/anode-material'>陰極材素材</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/jp/product/industrial-detergent' className='big'>
                    PRODUCT
                  </Link>
                  <ul className='rt-hd-inner'>
                    <li>
                      <Link to='/jp/product/industrial-detergent'>
                        工業用洗浄剤
                      </Link>
                    </li>
                    <li>
                      <Link to='/jp/product/solvent-extractant'>
                        溶媒抽出剤
                      </Link>
                    </li>
                    <li>
                      <Link to='/jp/product/water-treatment-solution'>
                        水処理・ソリューション
                      </Link>
                    </li>
                    <li>
                      <Link to='/jp/product/energy-system'>
                        エネルギー・システム
                      </Link>
                    </li>
                    <li>
                      <Link to='/jp/product/anode-material'>陰極材素材</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/jp/notice/exhibition' className='big'>
                    NOTICE
                  </Link>
                  <ul className='rt-hd-inner'>
                    <li>
                      <Link to='/jp/notice/exhibition'>展示会</Link>
                    </li>
                    <li>
                      <Link to='/jp/notice/news'>ニュース</Link>
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
