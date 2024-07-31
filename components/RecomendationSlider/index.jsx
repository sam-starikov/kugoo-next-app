'use client'
import s from './style.module.scss'

/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
/* end */

import { useStore } from '@/app/store/store'
import { Card } from '../index'

export function RecomendationSlider() {
  const { allProducts } = useStore()

  return (
    <section className={s.root}>
      <div className='container'>
        <h1>Рекомендуем вам</h1>
      </div>
      <div className={s.body}>
        <div className='container container--right'>
          <Swiper spaceBetween={50} slidesPerView={4.5} grabCursor={true}>
            {allProducts.map(product => (
              <SwiperSlide key={product.id}>
                <Card {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
