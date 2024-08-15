import s from './style.module.scss'

import Link from 'next/link'
import { useState } from 'react'
import { Checkbox, Flex } from 'antd'
import { useStore } from '@/app/store/store'
import { Button } from '..'

export function OrderInfo({ orderComplete, setOrderComplete }) {
  const [toggleCheck, setToggleCheck] = useState(true)
  const { cartItems, succesOrder } = useStore()

  const totalDiscountPrice = cartItems.reduce((acc, item) => {
    if (item.isDiscount) {
      return acc + item.price - (item.price * 10) / 100
    } else {
      return acc + item.price
    }
  }, 0)

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)

  const totalDiscount = cartItems.reduce((acc, item) => {
    if (item.isDiscount) {
      return acc + (item.price * 10) / 100
    } else {
      return acc
    }
  }, 0)

  const handleCheckBox = () => setToggleCheck(prev => !prev)

  const handleOrder = () => {
    alert('Вы успешно оформили заказ :)')
    succesOrder()
    setOrderComplete(!orderComplete)
  }

  const setFormatedPrice = price => {
    return new Intl.NumberFormat('ru-Ru', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className={s.orderCard}>
      <div className={s.top}>
        <p>Итого</p>
        <h3>{setFormatedPrice(totalDiscountPrice)} ₽</h3>
      </div>
      <div className={s.body}>
        <ul className={s.infoList}>
          <li>Стоимость товаров</li>
          <li>
            <span>{setFormatedPrice(totalPrice)} ₽</span>
          </li>
        </ul>
        <ul className={s.infoList}>
          <li>Сумма скидки</li>
          <li>
            <span>{setFormatedPrice(totalDiscount)} ₽</span>
          </li>
        </ul>
        <ul className={s.infoList}>
          <li>Итого без учета доставки</li>
          <li>
            <span>{setFormatedPrice(totalPrice - totalDiscount)} ₽</span>
          </li>
        </ul>
      </div>
      <Flex
        className={s.bottom}
        vertical
        gap={15}
      >
        <Button
          type='purple'
          disabled={toggleCheck}
          onClick={handleOrder}
        >
          Оформить заказ
        </Button>
        <Flex
          gap={12}
          className={s.acceptInfo}
        >
          <Checkbox
            autoFocus
            onChange={handleCheckBox}
          />
          <p>
            Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и
            <Link href='#!'>
              <span> политикой конфиденциальности</span>
            </Link>
          </p>
        </Flex>
      </Flex>
    </div>
  )
}
