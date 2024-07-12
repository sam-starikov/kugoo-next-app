'use client';
import style from './slider.module.scss';

/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

/* antd */
import { Button } from 'antd';

/* next */
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
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
          navigation
          // pagination={ { clickable: true } }
          // scrollbar={ { draggable: true } }
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={ () => console.log("slide change") }
          // onSwiper={ (swiper) => console.log(swiper) }
        >
          {images.map(img => (
            <SwiperSlide key={img.id}>
              <div className={style.slide}>
                <img className={style.slideBg} src={img.src} />
                <Button ghost className={style.btnNew}>
                  Новинка
                </Button>
                <div className={style.body}>
                  <p className={style.title}>Электросамокаты Kugoo Kirin от официального дилера</p>
                  <p className={style.subTitle}>с бесплатной доставкой по РФ от 1 дня</p>
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
