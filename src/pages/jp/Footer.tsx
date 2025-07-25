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
                  <Link to='/jp'>
                    <img src='/assets/ft-logo.png' alt='' />
                  </Link>
                </li>
                <li>
                  <h4>㈱EAPHOS (EAPHOS Co., Ltd.)</h4>
                  <h5>
                    Inside Business Incubator, 55 Hanyang University,
                    <br />
                    Sangnok-gu, Ansan-si, Gyeonggi-do
                    <br />
                    Tel 031.302.0204 I E-mail support@eaphos.com
                  </h5>
                </li>
              </ul>
            </div>
            <div className='rt'>
              <ul className='inner'>
                <li>
                  <div>
                    <Link to='/jp/company/introduction'>
                      <h1>COMPANY</h1>
                    </Link>
                    <Link to='/jp/company/introduction'>
                      <h2>会社紹介</h2>
                    </Link>
                    <Link to='/jp/company/certification'>
                      <h2>認証及び知的財産</h2>
                    </Link>
                    <Link to='/jp/company/investors'>
                      <h2>投資会社</h2>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to='/jp/rd/business-roadmap'>
                      <h1>R&amp;D</h1>
                    </Link>
                    <Link to='/jp/rd/business-roadmap'>
                      <h2>事業・ロードマップ</h2>
                    </Link>
                    <Link to='/jp/rd/solvent-extractant'>
                      <h2>溶媒抽出剤</h2>
                    </Link>
                    <Link to='/jp/rd/water-treatment-solution'>
                      <h2>水処理・ソリューション</h2>
                    </Link>
                    <Link to='/jp/rd/energy-system'>
                      <h2>エネルギー・システム</h2>
                    </Link>
                    <Link to='/jp/rd/anode-material'>
                      <h2>陰極材素材</h2>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to='/jp/product/industrial-detergent'>
                      <h1>PRODUCT</h1>
                    </Link>
                    <Link to='/jp/product/industrial-detergent'>
                      <h2>工業用洗浄剤</h2>
                    </Link>
                    <Link to='/jp/product/solvent-extractant'>
                      <h2>溶媒抽出剤</h2>
                    </Link>
                    <Link to='/jp/product/water-treatment-solution'>
                      <h2>水処理・ソリューション</h2>
                    </Link>
                    <Link to='/jp/product/energy-system'>
                      <h2>エネルギー・システム</h2>
                    </Link>
                    <Link to='/jp/product/anode-material'>
                      <h2>陰極材素材</h2>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to='/jp/notice/exhibition'>
                      <h1>NOTICE</h1>
                    </Link>
                    <Link to='/jp/notice/exhibition'>
                      <h2>展覽会</h2>
                    </Link>
                    <Link to='/jp/notice/news'>
                      <h2>ニュース</h2>
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
