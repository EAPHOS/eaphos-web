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
                  <Link to='/en'>
                    <img src='/src/assets/ft-logo.png' alt='' />
                  </Link>
                </li>
                <li>
                  <h4>EA PHOS Co., Ltd.</h4>
                  <h5>
                    Inside Business Incubator, 55 Hanyang University,
                    <br />
                    Sangnok-gu, Ansan-si, Gyeonggi-do
                  </h5>
                </li>
              </ul>
            </div>
            <div className='rt'>
              <ul className='inner'>
                <li>
                  <div>
                    <Link to='/en/company/introduction'>
                      <h1>COMPANY</h1>
                    </Link>
                    <Link to='/en/company/introduction'>
                      <h2>About Us</h2>
                    </Link>
                    <Link to='/en/company/certification'>
                      <h2>Certification and Intellectual Property</h2>
                    </Link>
                    <Link to='/en/company/investors'>
                      <h2>Investment Company</h2>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to='/en/rd/business-roadmap'>
                      <h1>R&amp;D</h1>
                    </Link>
                    <Link to='/en/rd/business-roadmap'>
                      <h2>Business Roadmap</h2>
                    </Link>
                    <Link to='/en/rd/solvent-extractant'>
                      <h2>Solvent Extractants</h2>
                    </Link>
                    <Link to='/en/rd/water-treatment-solution'>
                      <h2>Water Treatment Solution</h2>
                    </Link>
                    <Link to='/en/rd/energy-system'>
                      <h2>Energy System</h2>
                    </Link>
                    <Link to='/en/rd/anode-material'>
                      <h2>Anode Material</h2>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to='/en/product/industrial-detergent'>
                      <h1>PRODUCT</h1>
                    </Link>
                    <Link to='/en/product/industrial-detergent'>
                      <h2>Industrial Cleaner</h2>
                    </Link>
                    <Link to='/en/product/solvent-extractant'>
                      <h2>Solvent Extractants</h2>
                    </Link>
                    <Link to='/en/product/water-treatment-solution'>
                      <h2>Water Treatment Solution</h2>
                    </Link>
                    <Link to='/en/product/energy-system'>
                      <h2>Energy System</h2>
                    </Link>
                    <Link to='/en/product/anode-material'>
                      <h2>Anode Material</h2>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to='/en/notice/exhibition'>
                      <h1>NOTICE</h1>
                    </Link>
                    <Link to='/en/notice/exhibition'>
                      <h2>Exhibition</h2>
                    </Link>
                    <Link to='/en/notice/news'>
                      <h2>News</h2>
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
