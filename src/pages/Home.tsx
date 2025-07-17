import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1
        style={{ textAlign: 'center', marginBottom: '40px', color: '#222222' }}
      >
        EA PHOS
      </h1>

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
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link
              to='/kr/company/introduction'
              style={{
                padding: '10px 15px',
                backgroundColor: '#2c5aa0',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              회사소개
            </Link>
            <Link
              to='/kr/company/certification'
              style={{
                padding: '10px 15px',
                backgroundColor: '#2c5aa0',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              인증현황
            </Link>
            <Link
              to='/kr/company/investors'
              style={{
                padding: '10px 15px',
                backgroundColor: '#2c5aa0',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              투자자정보
            </Link>
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
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link
              to='/kr/rd/business-roadmap'
              style={{
                padding: '10px 15px',
                backgroundColor: '#dc3545',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              사업로드맵
            </Link>
            <Link
              to='/kr/rd/solvent-extractant'
              style={{
                padding: '10px 15px',
                backgroundColor: '#dc3545',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              용매추출제 R&D
            </Link>
            <Link
              to='/kr/rd/water-treatment-solution'
              style={{
                padding: '10px 15px',
                backgroundColor: '#dc3545',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              수처리솔루션 R&D
            </Link>
            <Link
              to='/kr/rd/energy-system'
              style={{
                padding: '10px 15px',
                backgroundColor: '#dc3545',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              에너지시스템 R&D
            </Link>
            <Link
              to='/kr/rd/anode-material'
              style={{
                padding: '10px 15px',
                backgroundColor: '#dc3545',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              양극재 R&D
            </Link>
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
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link
              to='/kr/product/industrial-detergent'
              style={{
                padding: '10px 15px',
                backgroundColor: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              산업용세정제
            </Link>
            <Link
              to='/kr/product/solvent-extractant'
              style={{
                padding: '10px 15px',
                backgroundColor: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              용매추출제
            </Link>
            <Link
              to='/kr/product/water-treatment-solution'
              style={{
                padding: '10px 15px',
                backgroundColor: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              수처리솔루션
            </Link>
            <Link
              to='/kr/product/energy-system'
              style={{
                padding: '10px 15px',
                backgroundColor: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              에너지시스템
            </Link>
            <Link
              to='/kr/product/anode-material'
              style={{
                padding: '10px 15px',
                backgroundColor: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              양극재
            </Link>
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
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link
              to='/kr/notice/exhibition'
              style={{
                padding: '10px 15px',
                backgroundColor: '#ffc107',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              전시회
            </Link>
            <Link
              to='/kr/notice/news'
              style={{
                padding: '10px 15px',
                backgroundColor: '#ffc107',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            >
              뉴스
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
