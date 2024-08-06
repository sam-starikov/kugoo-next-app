'use client'
import s from './style.module.scss'

import { useStore } from '@/app/store/store'
import { FrownOutlined, SmileOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { useMediaQuery } from 'react-responsive'
import {
  RecomendationSlider,
  TableCart,
  Header,
  Footer,
  CartMobile,
  Button,
  OrderInfo,
} from '@/components'

import { useState } from 'react'

export default function Cart() {
  const cartItems = useStore(state => state.cartItems)
  const isMobile = useMediaQuery({ query: '(max-width: 680px)' })
  const [orderComplete, setOrderComplete] = useState(false)

  return (
    <>
      <Header />
      <section className={s.root}>
        <div className='container'>
          <h1 className={s.title}>Моя корзина</h1>
          {!!cartItems.length && <p className={s.totalCount}>{cartItems.length} товара</p>}
          {!!cartItems.length ? (
            <Flex className={s.info}>
              {isMobile ? <CartMobile /> : <TableCart className={s.table} />}
              <OrderInfo
                orderComplete={orderComplete}
                setOrderComplete={setOrderComplete}
              />
            </Flex>
          ) : (
            <div className={s.body}>
              {!orderComplete ? (
                <FrownOutlined className={s.icon} />
              ) : (
                <SmileOutlined className={s.icon} />
              )}
              <h3>{!orderComplete ? 'Ваша корзина пуста' : 'Спасибо за покупку!'}</h3>
              <p className={s.text}>
                {!orderComplete ? 'Добавьте в нее товары из каталога' : 'Заказ передан в доставку'}
              </p>
              <Button
                link
                href='/'
                type='purple'
              >
                Перейти в каталог
              </Button>
            </div>
          )}
        </div>
      </section>
      <RecomendationSlider />
      <Footer />
    </>
  )
}
