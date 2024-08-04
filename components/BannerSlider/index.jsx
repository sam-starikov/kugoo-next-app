'use client'
import style from './slider.module.scss'

/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
/* end */

import Image from 'next/image'
import { Button } from 'antd'
import Link from 'next/link'

const images = [
  {
    id: 1,
    src: '/img/bannerSlide/slide-01.jpg',
  },
  {
    id: 2,
    src: '/img/bannerSlide/slide-02.jpg',
  },
  {
    id: 3,
    src: '/img/bannerSlide/slide-03.jpg',
  },
]

export function BannerSlider() {
  return (
    <div className={style.slider}>
      <div className='container container--large'>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={1000}
          loop={true}
        >
          {images.map(img => (
            <SwiperSlide key={img.id}>
              <div className={style.slide}>
                <Image
                  fill
                  src={img.src}
                  alt='scooter Kugoo'
                  className={style.img}
                />
                <div className={style.body}>
                  <div className={style.label}>Новинка</div>
                  <h1 className={style.title}>
                    Электросамокаты Kugoo Kirin от официального дилера
                  </h1>
                  <p className={style.subTitle}>с бесплатной доставкой по РФ от 1 дня</p>
                  <Link
                    href='#!'
                    className='btn btn--white'
                  >
                    Перейти в каталог
                  </Link>
                </div>
                <Button
                  className={style.btnTestDrive}
                  ghost
                >
                  <Image
                    src='/icons/slider/lightning.svg'
                    alt='lightning'
                    width={22}
                    height={22}
                  />
                  <div>Тест-драйв и обучение</div>
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
