import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='ft-inner'>
          <div className='flex'>
            <div className='lt'>
              <ul className='inner'>
                <li>
                  <Link to='/kr'>
                    <img src='/src/assets/ft-logo.png' alt='' />
                  </Link>
                </li>
                <li>
                  <h4>(주)이에이포스</h4>
                  <h5>
                    경기도 안산시 상록구 한양대학교 55 창업보육센터 내<br />
                    Tel 031.302.0204 I E-mail support@eaphos.com
                  </h5>
                </li>
              </ul>
            </div>
            <div className='rt'>
              <ul className='inner'>
                <li>
                  <div>
                    <Link to='/kr/company/introduction'>
                      <h1>COMPANY</h1>
                    </Link>
                    <Link to='/kr/company/introduction'>
                      <h2>회사소개</h2>
                    </Link>
                    <Link to='/kr/company/certification'>
                      <h2>인증 및 지적재산</h2>
                    </Link>
                    <Link to='/kr/company/investors'>
                      <h2>투자사</h2>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to='/kr/rd/business-roadmap'>
                      <h1>R&amp;D</h1>
                    </Link>
                    <Link to='/kr/rd/business-roadmap'>
                      <h2>사업 로드맵</h2>
                    </Link>
                    <Link to='/kr/rd/solvent-extractant'>
                      <h2>용매추출제</h2>
                    </Link>
                    <Link to='/kr/rd/water-treatment-solution'>
                      <h2>수처리 솔루션</h2>
                    </Link>
                    <Link to='/kr/rd/energy-system'>
                      <h2>에너지 시스템</h2>
                    </Link>
                    <Link to='/kr/rd/anode-material'>
                      <h2>음극재 소재</h2>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to='/kr/product/industrial-detergent'>
                      <h1>PRODUCT</h1>
                    </Link>
                    <Link to='/kr/product/industrial-detergent'>
                      <h2>공업용 세정제</h2>
                    </Link>
                    <Link to='/kr/product/solvent-extractant'>
                      <h2>용매추출제</h2>
                    </Link>
                    <Link to='/kr/product/water-treatment-solution'>
                      <h2>수처리 솔루션</h2>
                    </Link>
                    <Link to='/kr/product/energy-system'>
                      <h2>에너지 시스템</h2>
                    </Link>
                    <Link to='/kr/product/anode-material'>
                      <h2>음극재 소재</h2>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to='/kr/notice/exhibition'>
                      <h1>NOTICE</h1>
                    </Link>
                    <Link to='/kr/notice/exhibition'>
                      <h2>전시회</h2>
                    </Link>
                    <Link to='/kr/notice/news'>
                      <h2>뉴스</h2>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <h3>Copyright © 2024 EA PHOS Co., Ltd. All rights reserved</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
