import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const listArray = ['', '', ''];
  const navigate = useNavigate();

  return (
    <>
      <Swiper
        className='mainSwiper'
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        loop={true}
        slidesPerView={1}
        autoHeight={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect='fade'
        fadeEffect={{
          crossFade: true,
        }}
        pagination={{
          clickable: true,
          type: 'bullets',
          renderBullet: function (index: number, className: string) {
            return (
              '<span class="' +
              className +
              '">' +
              '<em>' +
              listArray[index] +
              '</em>' +
              '<i></i>' +
              '<b></b>' +
              '</span>'
            );
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <SwiperSlide
          className='swiper-slide mainB01'
          role='group'
          aria-label='2 / 3'
          data-swiper-slide-index='0'
          style={{
            width: '960px',
            opacity: 1,
            transform: 'translate3d(0px, 0px, 0px)',
          }}
        >
          <div>
            <div className='txt jp-txt'>
              <h2>環境にやさしく効率的な鉱物資源確保のための</h2>
              <h3>二次電池化学専門トータル・ソリューション</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className='swiper-slide mainB02'
          role='group'
          aria-label='3 / 3'
          data-swiper-slide-index='1'
          style={{
            width: '960px',
            opacity: 0,
            transform: 'translate3d(-960px, 0px, 0px)',
          }}
        >
          <div>
            <div className='txt jp-txt'>
              <h2>環境にやさしく効率的な鉱物資源確保のための</h2>
              <h3>二次電池化学専門トータル・ソリューション</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className='swiper-slide mainB03'
          role='group'
          aria-label='1 / 3'
          data-swiper-slide-index='2'
          style={{
            width: '960px',
            opacity: 0,
            transform: 'translate3d(-1920px, 0px, 0px)',
          }}
        >
          <div>
            <div className='txt jp-txt'>
              <h2 className='swiper-title'>
                環境にやさしく効率的な鉱物資源確保のための
              </h2>
              <h3 className='swiper-title-sub'>
                二次電池化学専門トータル・ソリューション
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* main01 섹션 추가 */}
      <section className='main01'>
        <div className='m-txt'>
          <h1>PRODUCT</h1>
          <h5>
            株式会社EAPHOSは必要な核心技術の確保とこれを具現する国産素材、工程、そして装備開発に投資しています。
          </h5>
          <div className='mob-mg'></div>
          <div className='ar-box'>
            <div className='swiper-button-next'></div>
            <div className='swiper-button-prev'></div>
          </div>
        </div>
        <Swiper
          className='main01Swiper'
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: 'progressbar',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          <SwiperSlide
            className='main01-05'
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/jp/product/anode-material')}
          >
            <div className='txt'>
              <h2>陰極材用素材</h2>
              <h3>FOR THE FASTER CHARGING</h3>
            </div>
            <div className='caption'></div>
          </SwiperSlide>
          <SwiperSlide
            className='main01-01'
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/jp/product/industrial-detergent')}
          >
            <div className='txt'>
              <h2>
                半導体及び <br />
                ディスプレイ素材
              </h2>
              <h3>Wet Chemical</h3>
            </div>
            <div className='caption'></div>
          </SwiperSlide>
          <SwiperSlide
            className='main01-02'
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/jp/product/water-treatment-solution')}
          >
            <div className='txt'>
              <h2>水処理・ソリューション</h2>
              <h3>CLEANTOP WWT</h3>
            </div>
            <div className='caption'></div>
          </SwiperSlide>
          <SwiperSlide
            className='main01-03'
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/jp/product/energy-system')}
          >
            <div className='txt'>
              <h2>エネルギー・システム</h2>
              <h3>DC System</h3>
            </div>
            <div className='caption'></div>
          </SwiperSlide>
          <SwiperSlide
            className='main01-04'
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/jp/product/solvent-extractant')}
          >
            <div className='txt'>
              <h2>溶媒抽出剤</h2>
              <h3>THOREPHOS SOLEX</h3>
            </div>
            <div className='caption'></div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Home;
