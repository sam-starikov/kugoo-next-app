'use client';
import style from './page.module.scss';

/* react */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/* components */
import CardList from '@/components/CardList';
import Benifits from '@/components/Benefits';
import Catalogue from '@/components/Catalogue/Catalogue';
import Search from '@/components/Search/Search';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import Link from 'next/link';

export default function Home() {
  /* hooks */
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);

  const onChangeCounter = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch('https://649009021e6aa71680ca6400.mockapi.io/items').then(response =>
      response.json().then(data => {
        setCards(data);
      })
    );
  }, []);

  return (
    <main className='main'>
      <Header countValue={count}>
        <>
          <Catalogue />
          <Search />
        </>
      </Header>
      <Slider />
      <Benifits />
      <CardList cards={cards} title={'Электросамокаты'} isSort={true} onChangeCounter={onChangeCounter} />

      <section className={style.services}>
        <div className='container'>
          <div className={style.servicesBody}>
            <article className={style.servicesCard}>
              <h3 className={style.servicesTitle}>Подбор модели электросамоката</h3>
              <p className={style.servicesSubTitle}>Пройдите тест и выберите электросамокат по своим критериям</p>
              <Link className={style.servicesLink} href='#!'>
                Подобрать модель
              </Link>
            </article>
            <article className={style.servicesCard}>
              <h3 className={style.servicesTitle}>Подбор модели электросамоката</h3>
              <p className={style.servicesSubTitle}>Пройдите тест и выберите электросамокат по своим критериям</p>
              <Link className={style.servicesLink} href='#!'>
                Подобрать модель
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
