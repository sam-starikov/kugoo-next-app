'use client'
import s from './style.module.scss'
import { useRef } from 'react'

/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
/* end */

import { RightOutlined } from '@ant-design/icons'
import { useStore } from '@/app/store/store'
import { Card } from '../index'

export function RecomendationSlider() {
  const { allProducts, cartItems } = useStore()

  const swiperRef = useRef(null)
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext()
    }
  }

  return (
    <section className={s.root}>
      <div className='container'>
        <h2>Рекомендуем вам</h2>
      </div>
      <div className={s.body}>
        <div className='container container--right'>
          <Swiper
            className={s.slider}
            ref={swiperRef}
            loop
            modules={[Navigation, FreeMode]}
            slidesPerView={4.5}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 10 },
              420: { slidesPerView: 1.5, spaceBetween: 10 },
              500: { slidesPerView: 1 },
              667: { slidesPerView: 2.5, spaceBetween: 30 },
              762: { slidesPerView: 3, spaceBetween: 30 },
              900: { slidesPerView: 3.5, spaceBetween: 30 },
              1100: { slidesPerView: 4, spaceBetween: 30 },
              1300: { slidesPerView: 4.5, spaceBetween: 30 },
            }}
            grabCursor={true}
          >
            {allProducts.map(product => (
              <SwiperSlide
                key={product.id}
                className={s.slide}
              >
                <Card
                  {...product}
                  added={cartItems.some(item => item.id === product.id)}
                />
              </SwiperSlide>
            ))}
            <button
              className={s.btnNext}
              onClick={handleNext}
            >
              <RightOutlined />
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
