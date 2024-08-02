import Link from 'next/link'
import s from './style.module.scss'

import { Button, Checkbox, Flex } from 'antd'
import { useStore } from '@/app/store/store'

export function OrderCard({}) {
  const cartItems = useStore(state => state.cartItems)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)
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
        <h3>{setFormatedPrice(totalPrice)} ₽</h3>
      </div>
      <div className={s.body}>
        <ul className={s.infoList}>
          <li>Стоимость товаров</li>
          <li>
            <span>58 800 ₽</span>
          </li>
        </ul>
        <ul className={s.infoList}>
          <li>Сумма скидки</li>
          <li>
            <span> 8 000 ₽</span>
          </li>
        </ul>
        <ul className={s.infoList}>
          <li>Итого без учета доставки</li>
          <li>
            <span>50 800 ₽</span>
          </li>
        </ul>
      </div>
      <Flex
        className={s.bottom}
        vertical
        gap={15}>
        <button className='btn btn--purple'>Оформить заказ</button>
        <Flex gap={12}>
          <Checkbox />
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
