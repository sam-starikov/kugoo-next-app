'use client'
import s from './style.module.scss'

import { useStore } from '@/app/data/store'
import { FrownOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import { RecomendationSlider, TableCart } from '@/components'

export default function Cart() {
  const cartItems = useStore(state => state.cartItems)

  return (
    <>
      <section className={s.root}>
        <div className='container'>
          <h1>Моя корзина</h1>
          {cartItems.length === 0 ? (
            <div className={s.body}>
              <FrownOutlined className={s.icon} />
              <h2>Ваша корзина пуста</h2>
              <p>Добавьте в нее товары из каталога</p>
              <Button>Перейти в каталог</Button>
            </div>
          ) : (
            <TableCart cartProducts={cartItems} />
          )}
        </div>
      </section>
      {/* <RecomendationSlider /> */}
    </>
  )
}
