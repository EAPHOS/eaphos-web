import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <a
          href='http://eaphos.com/kr/index.php'
          target='_blank'
          rel='noopener noreferrer'
          style={{
            padding: '12px 24px',
            backgroundColor: '#2c5aa0',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'inline-block',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          기존 EA PHOS 홈페이지
        </a>
      </div>

      <div style={{ display: 'grid', gap: '30px' }}>
        {/* Company 섹션 */}
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
          }}
        >
          <h2 style={{ color: '#2c5aa0', marginBottom: '15px' }}>Company</h2>

          {/* 회사소개 */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              회사소개
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/company/introduction'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#2c5aa0',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/company/introduction'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#2c5aa0',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/company/introduction'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#2c5aa0',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>

          {/* 인증현황 */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              인증현황
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/company/certification'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#2c5aa0',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/company/certification'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#2c5aa0',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/company/certification'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#2c5aa0',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>

          {/* 투자자정보 */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              투자자정보
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/company/investors'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#2c5aa0',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/company/investors'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#2c5aa0',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/company/investors'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#2c5aa0',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>
        </div>

        {/* R&D 섹션 */}
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
          }}
        >
          <h2 style={{ color: '#dc3545', marginBottom: '15px' }}>R&D</h2>

          {/* 사업로드맵 */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              사업로드맵
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/rd/business-roadmap'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/rd/business-roadmap'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/rd/business-roadmap'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>

          {/* 용매추출제 R&D */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              용매추출제 R&D
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/rd/solvent-extractant'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/rd/solvent-extractant'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/rd/solvent-extractant'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>

          {/* 수처리솔루션 R&D */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              수처리솔루션 R&D
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/rd/water-treatment-solution'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/rd/water-treatment-solution'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/rd/water-treatment-solution'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>

          {/* 에너지시스템 R&D */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              에너지시스템 R&D
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/rd/energy-system'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/rd/energy-system'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/rd/energy-system'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>

          {/* 양극재 R&D */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              양극재 R&D
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/rd/anode-material'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/rd/anode-material'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/rd/anode-material'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>
        </div>

        {/* Product 섹션 */}
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
          }}
        >
          <h2 style={{ color: '#28a745', marginBottom: '15px' }}>Product</h2>

          {/* 산업용세정제 */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              산업용세정제
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/product/industrial-detergent'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/product/industrial-detergent'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/product/industrial-detergent'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>

          {/* 용매추출제 */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              용매추출제
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/product/solvent-extractant'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/product/solvent-extractant'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/product/solvent-extractant'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>

          {/* 수처리솔루션 */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              수처리솔루션
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/product/water-treatment-solution'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/product/water-treatment-solution'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/product/water-treatment-solution'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>

          {/* 에너지시스템 */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              에너지시스템
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/product/energy-system'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/product/energy-system'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/product/energy-system'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>

          {/* 양극재 */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              양극재
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/product/anode-material'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/product/anode-material'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/product/anode-material'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>
        </div>

        {/* Notice 섹션 */}
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
          }}
        >
          <h2 style={{ color: '#ffc107', marginBottom: '15px' }}>Notice</h2>

          {/* 전시회 */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              전시회
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/notice/exhibition'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#ffc107',
                  color: '#333',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/notice/exhibition'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#ffc107',
                  color: '#333',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/notice/exhibition'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#ffc107',
                  color: '#333',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>

          {/* 뉴스 */}
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}
            >
              뉴스
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to='/kr/notice/news'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#ffc107',
                  color: '#333',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                한국어
              </Link>
              <Link
                to='/en/notice/news'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#ffc107',
                  color: '#333',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                English
              </Link>
              <Link
                to='/jp/notice/news'
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#ffc107',
                  color: '#333',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
              >
                日本語
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
