'use client'
import s from './style.module.scss'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { useStore } from '@/app/store/store'
import { Footer, Header } from '@/components'
import { Flex } from 'antd'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function ProductDetail({ params }) {
  const { allProducts } = useStore()
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [product, setProduct] = useState({})

  useEffect(() => {
    const product = allProducts.find(obj => obj.id === params.id)
    setProduct(product)
  }, [params.id, allProducts])

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
                {product?.images &&
                  product.images.length > 0 &&
                  product.images.map((img, i) => (
                    <SwiperSlide
                      className={s.slide}
                      key={i}
                    >
                      {/* Баг с <Image/> next/image */}
                      <img
                        src={img}
                        // fill
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
                {product?.images &&
                  product.images.length > 0 &&
                  product.images.map((img, i) => (
                    <SwiperSlide
                      className={s.slide}
                      key={i}
                    >
                      {/* Баг с <Image/> next/image */}
                      <img
                        src={img}
                        // fill
                        alt='scooter'
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            {/* <Flex
              flex={1}
              vertical
              className={s.main}
            >
              MAIN
            </Flex> */}
          </Flex>
        </div>
      </main>
      <Footer />
    </>
  )
}
