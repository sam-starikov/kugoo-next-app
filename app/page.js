'use client';
import style from './page.module.scss';

import { useEffect, useState } from 'react';

import CardList from '@/components/CardList';
import Benifits from '@/components/Benefits';

import Search from '@/components/Search/Search';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import ReviewSlider from '@/components/ReviewSlider';
import Footer from '@/components/Footer';
import Subscribe from '@/components/Subscribe';
import Services from '@/components/Services';
import Catalogue from '@/components/Catalogue';
import { Button } from 'antd';

export default function Home() {
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onChangeCounter = () => {
    setCount(count + 1);
  };
  const openCatalogue = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch('https://649009021e6aa71680ca6400.mockapi.io/items').then(response =>
      response.json().then(data => {
        setCards(data);
      }),
    );
  }, []);

  return (
    <main className='main'>
      <Header countValue={count} openCatalogue={openCatalogue}>
        <>
          <Search />
          <Catalogue isOpen={isOpen} />
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
      <Services />

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
