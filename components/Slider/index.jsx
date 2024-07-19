'use client';
import style from './slider.module.scss';

/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
/* end */

import { Button } from 'antd';

import Image from 'next/image';

const images = [
  {
    id: 1,
    src: '/img/slide-01.jpg',
  },
  {
    id: 2,
    src: '/img/slide-02.jpg',
  },
  {
    id: 3,
    src: '/img/slide-03.jpg',
  },
];

export default function Slider() {
  return (
    <div className={style.slider}>
      <div className='container container--large'>
        <Swiper modules={[Navigation]} spaceBetween={50} slidesPerView={1}>
          {images.map(img => (
            <SwiperSlide key={img.id}>
              <div className={style.slide}>
                <img className={style.slideBg} src={img.src} />
                <div className={style.body}>
                  <Button ghost className={style.btnNew}>
                    Новинка
                  </Button>
                  <h1>Электросамокаты Kugoo Kirin от официального дилера</h1>
                  <p>с бесплатной доставкой по РФ от 1 дня</p>
                  <Button className={style.btnCatalogue}>Перейти в каталог</Button>
                </div>
                <Button className={style.btnTestDrive} ghost>
                  <Image src='/icons/slider/lightning.svg' alt='lightning' width={22} height={22} />
                  <div>Тест-драйв и обучение</div>
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
