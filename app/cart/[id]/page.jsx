'use client'
import s from './style.module.scss'

import { Footer, Header } from '@/components'
import { Flex } from 'antd'

import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

// import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import Image from 'next/image'
import { useStore } from '@/app/store/store'

export default function ProductDetail() {
  const { productDetail } = useStore()
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Header />

      <main className='main'>
        <div className='container'>
          <Flex
            className={s.root}
            gap={65}
          >
            <div className={s.swiper}>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={s.mainSlider}
              >
                {productDetail &&
                  productDetail.length > 0 &&
                  productDetail[0].images.map((img, i) => (
                    <SwiperSlide
                      className={s.slide}
                      key={i}
                    >
                      <Image
                        src={img}
                        fill
                        alt='scooter'
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>

              <Swiper
                slideActiveClass={s.active}
                grabCursor
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={s.secondSlider}
              >
                {productDetail &&
                  productDetail.length > 0 &&
                  productDetail[0].images.map((img, i) => (
                    <SwiperSlide
                      className={s.slide}
                      key={i}
                    >
                      <Image
                        src={img}
                        fill
                        alt='scooter'
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <Flex
              flex={1}
              vertical
              className={s.main}
            >
              MAIN
            </Flex>
          </Flex>
        </div>
      </main>
      <Footer />
    </>
  )
}
