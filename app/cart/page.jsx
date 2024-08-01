'use client'
import s from './style.module.scss'

import { useStore } from '@/app/store/store'
import { FrownOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'

import { RecomendationSlider, TableCart, Header, Footer, OrderCard } from '@/components'
import Link from 'next/link'

export default function Cart() {
  const cartItems = useStore(state => state.cartItems)

  return (
    <>
      <Header />
      <section className={s.root}>
        <div className='container'>
          <h1 className={s.title}>Моя корзина</h1>
          <p className={s.totalCount}>{cartItems.length} товара</p>
          {!!cartItems.length ? (
            <Flex gap={65}>
              <TableCart className={s.table} />
              <OrderCard />
            </Flex>
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
