'use client'
import s from './style.module.scss'
import { Button } from 'antd'
import { FrownOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import RecomendationSlider from '@/components/RecomendationSlider'

import { useStore } from '@/app/data/store'
import TableCart from '@/components/TableCart'

export default function Cart() {
  const cartItems = useStore(state => state.cartItems)
  console.log(cartItems)

  return (
    <>
      <section className={s.root}>
        <div className='container'>
          <h1>Моя корзина</h1>
          <div className={s.body}>
            <FrownOutlined className={s.icon} />
            <h2>Ваша корзина пуста</h2>
            <p>Добавьте в нее товары из каталога</p>
            <Button>Перейти в каталог</Button>
          </div>
          <TableCart cartProducts={cartItems} />
        </div>
      </section>
      {/* <RecomendationSlider /> */}
    </>
  )
}
