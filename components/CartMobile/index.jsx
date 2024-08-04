'use client'

import s from './style.module.scss'

import Image from 'next/image'
import { Flex } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useStore } from '@/app/store/store'
export function CartMobile() {
  const cartItems = useStore(state => state.cartItems)
  return (
    <div className={s.root}>
      <Flex
        align='center'
        justify='space-between'
        className={s.top}
      >
        <h4 className={s.title}>В вашей корзине</h4>
        <span className={s.quantity}>11 товаров</span>
      </Flex>

      <div className={s.body}>
        <ul className={s.list}>
          {cartItems.map(item => (
            <li
              key={item.id}
              className={s.item}
            >
              <Flex
                align='center'
                gap={15}
              >
                <div className={s.img}>
                  <Image
                    fill
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <Flex
                  vertical
                  flex={1}
                  gap={5}
                  className={s.info}
                >
                  <h5 className={s.name}>{item.title}</h5>
                  <Flex gap={15}>
                    <p className={s.price}>{item.price}</p>
                    <p className={s.count}>x1</p>
                  </Flex>
                </Flex>
                <button className={s.deleteBtn}>
                  <DeleteOutlined className={s.deleteIcon} />
                </button>
              </Flex>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
