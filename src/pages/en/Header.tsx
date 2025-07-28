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
          <Link to='/en'>
            <img src='/assets/logo.png' alt='logo' />
          </Link>
        </span>
        <div className='wix-custom-component'>
          <nav className='navbar'>
            <div
              className='navbar-item mega-menu-item'
              onMouseEnter={() => handleMegaMenuHover('company')}
              onMouseLeave={handleMegaMenuLeave}
            >
              <Link to='/en/company/introduction' className='big-m'>
                Company
              </Link>
              <div
                className={`mega-menu-dropdown-content ${activeMegaMenu === 'company' ? 'show' : ''}`}
              >
                <div className='row'>
                  <div className='column onede'>
                    <Link
                      to='/en/company/introduction'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      About Us
                    </Link>
                    {/* <a class="column-link" href="/en/com02.php">연혁</a> */}
                    <Link
                      to='/en/company/certification'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      Certification and Intellectual Property
                    </Link>
                    <Link
                      to='/en/company/investors'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      Investment Company
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
              <Link to='/en/rd/business-roadmap' className='big-m'>
                R&amp;D
              </Link>
              <div
                className={`mega-menu-dropdown-content ${activeMegaMenu === 'rd' ? 'show' : ''}`}
              >
                <div className='row'>
                  <div className='column twode'>
                    <Link
                      to='/en/rd/business-roadmap'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      Business Roadmap
                    </Link>
                    <Link
                      to='/en/rd/solvent-extractant'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      Solvent Extractants
                    </Link>
                    <Link
                      to='/en/rd/water-treatment-solution'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      Water Treatment Solution
                    </Link>
                    <Link
                      to='/en/rd/energy-system'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      Energy System
                    </Link>
                    <Link
                      to='/en/rd/anode-material'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      Anode Material
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
              <Link to='/en/product/industrial-detergent' className='big-m'>
                Product
              </Link>
              <div
                className={`mega-menu-dropdown-content ${activeMegaMenu === 'product' ? 'show' : ''}`}
              >
                <div className='row'>
                  <div className='column thrde'>
                    <Link
                      to='/en/product/industrial-detergent'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      Industrial Cleaner
                    </Link>
                    <Link
                      to='/en/product/solvent-extractant'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      Solvent Extractants
                    </Link>
                    <Link
                      to='/en/product/water-treatment-solution'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      Water Treatment Solution
                    </Link>
                    <Link
                      to='/en/product/energy-system'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      Energy System
                    </Link>
                    <Link
                      to='/en/product/anode-material'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      Anode Material
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
              <Link to='/en/notice/exhibition' className='big-m'>
                Notice
              </Link>
              <div
                className={`mega-menu-dropdown-content ${activeMegaMenu === 'notice' ? 'show' : ''}`}
              >
                <div className='row'>
                  <div className='column frde'>
                    <Link
                      to='/en/notice/exhibition'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      Exhibition
                    </Link>
                    <Link
                      to='/en/notice/news'
                      className='column-link'
                      onClick={handleSubMenuClick}
                    >
                      News
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
                EN<span></span>
              </p>
            </div>
            <input type='hidden' name='lang' />
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <Link to='/kr'>
                <li id=''>KR</li>
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
        <Link to='/en'>
          <img src='/assets/logo.png' alt='logo' />
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
                      <h2>Fast-growing secondary battery Recycle</h2>
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
                      <h1>Eco-friendly secondary battery solution</h1>
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
                <img src='/assets/logo.png' alt='' />
              </p>
              <ul className='lang'>
                <li>
                  <Link to='/kr'>KR</Link>
                </li>
                <li>
                  <Link to='/en' className='on'>
                    EN
                  </Link>
                </li>
                <li>
                  <Link to='/jp'>JP</Link>
                </li>
              </ul>
              <ul className='menu'>
                <li>
                  <Link to='/en/company/introduction' className='big'>
                    COMPANY
                  </Link>
                  <ul className='rt-hd-inner'>
                    <li>
                      <Link to='/en/company/introduction'>About Us</Link>
                    </li>
                    {/* <!-- <li><a href="/en/com02.php">연혁</a></li> --> */}
                    <li>
                      <Link to='/en/company/certification'>
                        Certification and Intellectual Property
                      </Link>
                    </li>
                    <li>
                      <Link to='/en/company/investors'>Investment Company</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/en/rd/business-roadmap' className='big'>
                    R&amp;D
                  </Link>
                  <ul className='rt-hd-inner'>
                    <li>
                      <Link to='/en/rd/business-roadmap'>Business Roadmap</Link>
                    </li>
                    <li>
                      <Link to='/en/rd/solvent-extractant'>
                        Solvent Extractants
                      </Link>
                    </li>
                    <li>
                      <Link to='/en/rd/water-treatment-solution'>
                        Water Treatment Solution
                      </Link>
                    </li>
                    <li>
                      <Link to='/en/rd/energy-system'>Energy System</Link>
                    </li>
                    <li>
                      <Link to='/en/rd/anode-material'>Anode Material</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/en/product/industrial-detergent' className='big'>
                    PRODUCT
                  </Link>
                  <ul className='rt-hd-inner'>
                    <li>
                      <Link to='/en/product/industrial-detergent'>
                        Industrial Cleaner
                      </Link>
                    </li>
                    <li>
                      <Link to='/en/product/solvent-extractant'>
                        Solvent Extractants
                      </Link>
                    </li>
                    <li>
                      <Link to='/en/product/water-treatment-solution'>
                        Water Treatment Solution
                      </Link>
                    </li>
                    <li>
                      <Link to='/en/product/energy-system'>Energy System</Link>
                    </li>
                    <li>
                      <Link to='/en/product/anode-material'>
                        Anode Material
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/en/notice/exhibition' className='big'>
                    NOTICE
                  </Link>
                  <ul className='rt-hd-inner'>
                    <li>
                      <Link to='/en/notice/exhibition'>Exhibition</Link>
                    </li>
                    <li>
                      <Link to='/en/notice/news'>NEWS</Link>
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
