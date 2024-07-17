'use client';
import style from './style.module.scss';

/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
/* end */

/* react */
import { useEffect, useState } from 'react';
/* end */

/* next */
import Image from 'next/image';
import Link from 'next/link';
/* end */

export default function ReviewSlider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('https://649009021e6aa71680ca6400.mockapi.io/slides').then(response =>
      response.json().then(data => {
        setSlides(data);
      })
    );
  }, []);

  const slidesTest = [
    {
      id: 1,
      src: '/img/slides/slide-01.jpg',
    },
    {
      id: 2,
      src: '/img/slides/slide-02.jpg',
    },
    {
      id: 3,
      src: '/img/slides/slide-03.jpg',
    },
    {
      id: 4,
      src: '/img/slides/slide-04.jpg',
    },
    {
      id: 5,
      src: '/img/slides/slide-05.jpg',
    },
    {
      id: 6,
      src: '/img/slides/slide-06.jpg',
    },
    {
      id: 7,
      src: '/img/slides/slide-07.jpg',
    },
  ];

  return (
    <section className={style.reviews}>
      <h2 className={style.reviewsTitle}>Отзывы и фото реальных покупателей</h2>
      <Link className={style.reviewsLink} href='#!'>
        Читать отзывы на Яндекс
      </Link>

      <Swiper
        // slidesPerGroup={5.5}
        // loopAddBlankSlides={true}
        modules={[Autoplay]}
        spaceBetween={18}
        slidesPerView={'auto'}
        autoplay={{ delay: 0 }}
        speed={10000}>
        {/* {slides.map(obj => (
          <SwiperSlide key={obj.id}>
            <img className={style.slideImg} src={obj.img} alt='alt' />
          </SwiperSlide>
        ))} */}
        {slidesTest.map(obj => (
          <SwiperSlide key={obj.id}>
            <img className={style.slideImg} src={obj.src} alt='alt' />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper modules={[FreeMode]} spaceBetween={18} slidesPerView={3.5}>
        {slides.map(obj => (
          <SwiperSlide key={obj.id}>
            <img src={obj.img} alt='alt' />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </section>
  );
}
