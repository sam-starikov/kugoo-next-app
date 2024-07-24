'use client';
import style from './style.module.scss';

/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
/* end */

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ReviewSlider() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      const fetchReviews = async () => {
        const response = await fetch('https://649009021e6aa71680ca6400.mockapi.io/reviews');
        const reviewsData = await response.json();
        setReviews(reviewsData);
      };
      fetchReviews();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const slides = [
    { id: 1, src: '/img/slides/slide-01.jpg' },
    { id: 2, src: '/img/slides/slide-02.jpg' },
    { id: 3, src: '/img/slides/slide-03.jpg' },
    { id: 4, src: '/img/slides/slide-04.jpg' },
    { id: 5, src: '/img/slides/slide-05.jpg' },
    { id: 6, src: '/img/slides/slide-06.jpg' },
    { id: 7, src: '/img/slides/slide-07.jpg' },
    { id: 8, src: '/img/slides/slide-01.jpg' },
    { id: 9, src: '/img/slides/slide-02.jpg' },
    { id: 10, src: '/img/slides/slide-03.jpg' },
    { id: 11, src: '/img/slides/slide-04.jpg' },
    { id: 12, src: '/img/slides/slide-05.jpg' },
    { id: 13, src: '/img/slides/slide-06.jpg' },
    { id: 14, src: '/img/slides/slide-07.jpg' },
  ];

  return (
    <section className={style.reviews}>
      <h2 className={style.reviewsTitle}>Отзывы и фото реальных покупателей</h2>
      <Link className={style.reviewsLink} href='#!'>
        Читать отзывы на Яндекс
      </Link>

      <Swiper
        style={{ marginBottom: 20 }}
        modules={[Autoplay, FreeMode]}
        spaceBetween={18}
        slidesPerView={'auto'}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={10000}>
        {reviews.map((review, index) => (
          <SwiperSlide key={review.id} style={{ width: 'auto' }}>
            <div className={style.slide}>
              <img className={style.slideImg} src={slides[index].src} alt='alt' />
              <div className={style.review}>
                <div className={style.user}>
                  <div className={style.avatar}>
                    <img src={review.avatar} alt='alt' />
                  </div>
                  <div className={style.userInfo}>
                    <h3>{review.name}</h3>
                    <p>{review.grade}</p>
                  </div>
                </div>
                <div className={style.rate}>
                  <div className={style.rateCount}>
                    <Image width={14} height={14} src='/icons/star.svg' alt='alt' />
                    <Image width={14} height={14} src='/icons/star.svg' alt='alt' />
                    <Image width={14} height={14} src='/icons/star.svg' alt='alt' />
                    <Image width={14} height={14} src='/icons/star.svg' alt='alt' />
                    <Image width={14} height={14} src='/icons/star.svg' alt='alt' />
                  </div>
                  <p>{review.createdAt}</p>
                </div>
                <p>{review.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={18}
        slidesPerView={'auto'}
        autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true }}
        speed={10000}>
        {reviews.map((review, index) => (
          <SwiperSlide key={review.id} style={{ width: 'auto' }}>
            <div className={style.slide}>
              <img className={style.slideImg} src={slides[index].src} alt='alt' />
              <div className={style.review}>
                <div className={style.user}>
                  <div className={style.avatar}>
                    <img src={review.avatar} alt='alt' />
                  </div>
                  <div className={style.userInfo}>
                    <h3>{review.name}</h3>
                    <p>{review.grade}</p>
                  </div>
                </div>
                <div className={style.rate}>
                  <div className={style.rateCount}>
                    <Image width={14} height={14} src='/icons/star.svg' alt='alt' />
                    <Image width={14} height={14} src='/icons/star.svg' alt='alt' />
                    <Image width={14} height={14} src='/icons/star.svg' alt='alt' />
                    <Image width={14} height={14} src='/icons/star.svg' alt='alt' />
                    <Image width={14} height={14} src='/icons/star.svg' alt='alt' />
                  </div>
                  <p>{review.createdAt}</p>
                </div>
                <p>{review.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
