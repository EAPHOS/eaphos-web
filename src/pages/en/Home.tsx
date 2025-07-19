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
            <div className='txt'>
              <h3>Total solution specialized in secondary battery chemistry</h3>
              <h2>for securing eco-friendly and efficient mineral resources</h2>
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
            <div className='txt'>
              <h3>
                Total solution specialized in secondary battery chemistry{' '}
              </h3>
              <h2>for securing eco-friendly and efficient mineral resources</h2>
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
            <div className='txt'>
              <h3 className='swiper-title'>
                Total solution specialized in secondary battery chemistry
              </h3>
              <h2 className='swiper-title-sub'>
                for securing eco-friendly and efficient mineral resources
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* main01 섹션 추가 */}
      <section className='main01'>
        <div className='m-txt'>
          <h1>PRODUCT</h1>
          <h5>
            EA PHOS Co., Ltd. is investing in securing the necessary key
            technologies and developing local materials, processes, and
            equipment to implement them.
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
          <SwiperSlide className='main01-05' style={{ cursor: 'pointer' }}>
            <div
              className='txt'
              onClick={() => navigate('/kr/product/anode-material')}
            >
              <h2>Anode material</h2>
              <h3>FOR THE FASTER CHARGING</h3>
            </div>
            <div className='caption'></div>
          </SwiperSlide>
          <SwiperSlide className='main01-01' style={{ cursor: 'pointer' }}>
            <div
              className='txt'
              onClick={() => navigate('/kr/product/industrial-detergent')}
            >
              <h2>
                Semiconductor and
                <br />
                {'  '} display material
              </h2>
              <h3>Wet Chemical</h3>
            </div>
            <div className='caption'></div>
          </SwiperSlide>
          <SwiperSlide className='main01-02' style={{ cursor: 'pointer' }}>
            <div
              className='txt'
              onClick={() => navigate('/kr/product/water-treatment-solution')}
            >
              <h2>Water treatment solution</h2>
              <h3>CLEANTOP WWT</h3>
            </div>
            <div className='caption'></div>
          </SwiperSlide>
          <SwiperSlide className='main01-03' style={{ cursor: 'pointer' }}>
            <div
              className='txt'
              onClick={() => navigate('/kr/product/energy-system')}
            >
              <h2>Energy system</h2>
              <h3>DC System</h3>
            </div>
            <div className='caption'></div>
          </SwiperSlide>
          <SwiperSlide className='main01-04' style={{ cursor: 'pointer' }}>
            <div
              className='txt'
              onClick={() => navigate('/kr/product/solvent-extraction')}
            >
              <h2>Solvent extractant</h2>
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
