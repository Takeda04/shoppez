import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { HeroCarousel1 } from '../../assets/images/png';

let data = [
  {
    id: 1,
    title: 'NEW NAMPHONE RELEASE THIS FALL',
    btn_text: 'Buy now',
    img: HeroCarousel1,
  },
  {
    id: 2,
    title: 'NEW NAMPHONE RELEASE THIS FALL',
    btn_text: 'Buy now',
    img: HeroCarousel1,
  },
  {
    id: 3,
    title: 'NEW NAMPHONE RELEASE THIS FALL',
    btn_text: 'Buy now',
    img: HeroCarousel1,
  },
  {
    id: 4,
    title: 'NEW NAMPHONE RELEASE THIS FALL',
    btn_text: 'Buy now',
    img: HeroCarousel1,
  },
];

export default function HeroCarousel() {
  return (
    <div className='hero-carousel-wrapper'>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
      >
        {data.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              <div
                className='hero-carousel'
                style={{
                  backgroundImage: `url(${HeroCarousel1})`,
                }}
              >
                <div className='hero-carousel-context'>
                  <p>{el.title}</p>
                  <button className='hero-carousel-context__herobtn '>{el.btn_text}</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
