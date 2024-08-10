'use client'
import s from './style.module.scss'

import { useEffect, useState } from 'react'

import Image from 'next/image'
// import ImageSrc from '/icons/balance.svg'

import { useStore } from '@/app/store/store'
import { Footer, Header } from '@/components'
import { Flex, Tooltip } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
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
            gap={20}
            className={s.root}
          >
            <div className={s.swiper}>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs]}
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
                modules={[Thumbs]}
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

            {/* main */}
            <Flex
              vertical
              className={s.main}
            >
              <h1 className={s.title}>Kugoo Kirin M4</h1>

              <Flex className={s.info}>
                <span>Просмотров 350</span>
                <span>Купили 196 раз</span>
                <span>Артикул: 2200000000026</span>
              </Flex>

              <Flex className={s.controls}>
                <span>В наличии</span>
                <button>
                  <Image
                    src={'/icons/balance.svg'}
                    alt='balance'
                    width={20}
                    height={20}
                  />
                  Сравнить
                </button>
                <button>
                  <Image
                    src={'/icons/share.svg'}
                    alt='share'
                    width={20}
                    height={20}
                  />
                  Поделиться
                </button>
              </Flex>

              <Flex
                className={s.priceWrapper}
                justify='space-between'
                gap={10}
              >
                <Flex
                  vertical
                  justify='center'
                  className={s.price}
                >
                  <span>39 900 ₽</span>
                  <span>29 900 ₽</span>
                </Flex>
                <Flex
                  vertical
                  className={s.credit}
                >
                  <span>Рассрочка:</span>
                  <span>1 760 ₽ в месяц / 24 месяца</span>
                </Flex>
              </Flex>

              <Flex
                vertical
                gap={6}
              >
                <Flex
                  className={s.equipment}
                  gap={6}
                >
                  <span>Комплектация</span>
                  <Tooltip
                    title='prompt text'
                    color={'#75d14a'}
                  >
                    <QuestionCircleOutlined style={{ fontSize: 16 }} />
                  </Tooltip>
                </Flex>
                <Flex
                  wrap
                  gap={20}
                >
                  <button className={s.button}>Базовая</button>
                  <button className={s.button}>Версия MAX</button>
                  <button className={s.button}>VIP-версия</button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </main>
      <Footer />
    </>
  )
}
