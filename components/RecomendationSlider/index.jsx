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
  const { allProducts } = useStore()

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
            spaceBetween={50}
            slidesPerView={4.5}
            grabCursor={true}>
            {allProducts.map(product => (
              <SwiperSlide key={product.id}>
                <Card {...product} />
              </SwiperSlide>
            ))}
            <button
              className={s.btnNext}
              onClick={handleNext}>
              <RightOutlined />
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
