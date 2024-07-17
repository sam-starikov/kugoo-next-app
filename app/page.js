'use client';
import style from './page.module.scss';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'antd';

import CardList from '@/components/CardList';
import Benifits from '@/components/Benefits';
import Catalogue from '@/components/Catalogue/Catalogue';
import Search from '@/components/Search/Search';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import ReviewSlider from '@/components/ReviewSlider';
import Footer from '@/components/Footer';
import Subscribe from '@/components/Subscribe';

export default function Home() {
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);

  const onChangeCounter = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch('https://649009021e6aa71680ca6400.mockapi.io/items').then(response =>
      response.json().then(data => {
        setCards(data);
      }),
    );
  }, []);

  return (
    <main className='main main--p'>
      <Header countValue={count}>
        <>
          <Catalogue />
          <Search />
        </>
      </Header>
      <Slider />
      <Benifits />
      <CardList
        cards={cards}
        title={'Электросамокаты'}
        isSort={true}
        onChangeCounter={onChangeCounter}
      />

      <section className={style.services}>
        <div className='container'>
          <div className={style.servicesBody}>
            <article className={style.servicesCard}>
              <h3 className={style.servicesTitle}>Подбор модели электросамоката</h3>
              <p className={style.servicesSubTitle}>
                Пройдите тест и выберите электросамокат по своим критериям
              </p>
              <Link className={style.servicesLink} href='#!'>
                Подобрать модель
              </Link>
            </article>
            <article className={style.servicesCard}>
              <h3 className={style.servicesTitle}>Подбор модели электросамоката</h3>
              <p className={style.servicesSubTitle}>
                Пройдите тест и выберите электросамокат по своим критериям
              </p>
              <Link className={style.servicesLink} href='#!'>
                Подобрать модель
              </Link>
            </article>
          </div>
        </div>
      </section>

      <div className='container container--large'>
        <section className={style.delivery}>
          <div className='container'>
            <div className={style.deliveryBody}>
              <div className={style.deliveryInfo}>
                <div className={style.deliverySticker}>Акция</div>
                <h1 className={style.deliveryTitle}>
                  Бесплатная доставка электросамокатов по России до 01.09
                </h1>
                <Button className={style.deliveryBtn}>Подробнее</Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ReviewSlider />
      <Subscribe />
      <Footer />
    </main>
  );
}
