'use client'
import s from './style.module.scss'

import { useStore } from '@/app/store/store'
import { FrownOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import { RecomendationSlider, TableCart, Header, Footer } from '@/components'
import Link from 'next/link'

export default function Cart() {
  const cartItems = useStore(state => state.cartItems)

  return (
    <>
      <Header />
      <section className={s.root}>
        <div className='container'>
          <h1>Моя корзина</h1>
          {!!cartItems.length ? (
            <TableCart cartProducts={cartItems} />
          ) : (
            <div className={s.body}>
              <FrownOutlined className={s.icon} />
              <h2>Ваша корзина пуста</h2>
              <p>Добавьте в нее товары из каталога</p>
              <Link
                href='/'
                className='btn btn--purple'>
                Перейти в каталог
              </Link>
            </div>
          )}
        </div>
      </section>
      {/* <RecomendationSlider /> */}
      <Footer />
    </>
  )
}
