'use client'
import style from './cardList.module.scss'

import { useState } from 'react'
import { Button, Flex } from 'antd'

import { Card, TabsSort } from '../index'
import { useStore } from '@/app/data/store'

export function CardList({ cards, title, isSort }) {
  const [showAll, setShowAll] = useState(false)
  const cartItems = useStore(state => state.cartItems)

  const visibleItems = showAll ? cards : cards.slice(0, 8)

  const handleShowMore = () => setShowAll(true)

  return (
    <section>
      <div className='container'>
        <div className={style.top}>
          <h1 className={style.title}>{title}</h1>
          {isSort && <TabsSort />}
        </div>

        <div className={style.body}>
          {visibleItems.map(obj => (
            <Card key={obj.id} added={cartItems.some(item => item.id === obj.id)} {...obj} />
          ))}
        </div>
        <Flex align='center' justify='center'>
          <Button
            disabled={showAll ? true : false}
            className={style.showMoreBtn}
            onClick={handleShowMore}>
            Смотреть все
          </Button>
        </Flex>
      </div>
    </section>
  )
}
