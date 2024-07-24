'use client';
import s from './style.module.scss';
import { Button } from 'antd';
import { FrownOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import RecomendationSlider from '@/components/RecomendationSlider';
import TableCard from '@/components/TableCard';

export default function Cart() {
  const [cards, setCards] = useState([]);
  const products = JSON.parse(localStorage.getItem('products'));

  useEffect(() => {
    if (products) {
      setCards(products);
    }
  }, []);

  return (
    <main className='main'>
      <section className={s.root}>
        <div className='container'>
          <h1>Моя корзина</h1>
          <div className={s.body}>
            <FrownOutlined className={s.icon} />
            <h2>Ваша корзина пуста</h2>
            <p>Добавьте в нее товары из каталога</p>
            <Button>Перейти в каталог</Button>
          </div>
          <TableCard cards={cards} />
        </div>
      </section>
      <RecomendationSlider />
    </main>
  );
}
