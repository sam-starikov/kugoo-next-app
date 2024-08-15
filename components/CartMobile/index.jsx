'use client'

import s from './style.module.scss'

import Image from 'next/image'
import { Flex } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useStore } from '@/app/store/store'
import { useEffect, useState } from 'react'

export function CartMobile() {
  const cartItems = useStore(state => state.cartItems)
  const [renderItems, setRenderItems] = useState([])

  useEffect(() => {
    const uniqueIds = new Set()
    const uniqueArray = cartItems.filter(obj => {
      if (!uniqueIds.has(obj.id)) {
        uniqueIds.add(obj.id)
        return true
      }
      return false
    })
    uniqueArray.sort((a, b) => a.id - b.id)

    setRenderItems(uniqueArray)
  }, [cartItems])

  const countById = cartItems.reduce((acc, product) => {
    acc[product.id] = (acc[product.id] || 0) + 1
    return acc
  }, {})

  return (
    <div className={s.root}>
      <Flex
        align='center'
        justify='space-between'
        className={s.top}
      >
        <h4 className={s.title}>В вашей корзине</h4>
        <span className={s.quantity}>{cartItems.length} товар</span>
      </Flex>

      <div className={s.body}>
        <ul className={s.list}>
          {renderItems.map(item => (
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
                    <p className={s.count}>{countById[item.id]}</p>
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
