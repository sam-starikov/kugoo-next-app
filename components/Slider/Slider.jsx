"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Button } from "antd";

import style from "./slider.module.scss";

import Image from "next/image";
import lightning from "./../../public/lightning.svg";

export default function Slider() {
  return (
    <main className="main">
      <div className={style.slider}>
        <div className="container container--large">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className={style.slide}>
                <Button ghost className={style.btnNew}>
                  Новинка
                </Button>
                <div className={style.body}>
                  <p className={style.title}>
                    Электросамокаты Kugoo Kirin от официального дилера
                  </p>
                  <p className={style.subTitle}>
                    с бесплатной доставкой по РФ от 1 дня
                  </p>
                  <Button className={style.btnCatalogue}>
                    Перейти в каталог
                  </Button>
                </div>
                <Button className={style.btnTestDrive} ghost>
                  <Image src={lightning} alt="lightning" />
                  <div>Тест-драйв и обучение</div>
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.slide}>
                <Button ghost className={style.btnNew}>
                  Новинка
                </Button>
                <div className={style.body}>
                  <p className={style.title}>
                    Электросамокаты Kugoo Kirin от официального дилера
                  </p>
                  <p className={style.subTitle}>
                    с бесплатной доставкой по РФ от 1 дня
                  </p>
                  <Button className={style.btnCatalogue}>
                    Перейти в каталог
                  </Button>
                </div>
                <Button className={style.btnTestDrive} ghost>
                  <Image src={lightning} alt="lightning" />
                  <div>Тест-драйв и обучение</div>
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.slide}>
                <Button ghost className={style.btnNew}>
                  Новинка
                </Button>
                <div className={style.body}>
                  <p className={style.title}>
                    Электросамокаты Kugoo Kirin от официального дилера
                  </p>
                  <p className={style.subTitle}>
                    с бесплатной доставкой по РФ от 1 дня
                  </p>
                  <Button className={style.btnCatalogue}>
                    Перейти в каталог
                  </Button>
                </div>
                <Button className={style.btnTestDrive} ghost>
                  <Image src={lightning} alt="lightning" />
                  <div>Тест-драйв и обучение</div>
                </Button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  );
}
