'use client'
import style from './cardList.module.scss'

import { useState } from 'react'
import { Button, Flex, Skeleton } from 'antd'

import { Card, TabsSort } from '../index'
import { useStore } from '@/app/store/store'

export function CardList({ cards, title, isSort, isLoading }) {
  const [showAll, setShowAll] = useState(false)
  const cartItems = useStore(state => state.cartItems)
  const visibleItems = showAll ? cards : cards.slice(0, 8)
  const handleShowMore = () => setShowAll(true)

  return (
    <section className={style.root}>
      <div className='container'>
        <div className={style.top}>
          <h2 className={style.title}>{title}</h2>
          {isSort && <TabsSort />}
        </div>

        <div className={style.body}>
          {isLoading
            ? [...new Array(8)].map((_, i) => (
                <Skeleton
                  active
                  key={i}
                  style={{ width: 250, height: 300 }}
                />
              ))
            : visibleItems.map(obj => (
                <Card
                  key={obj.id}
                  added={cartItems.some(item => item.id === obj.id)}
                  loading={isLoading}
                  {...obj}
                />
              ))}
        </div>

        <Flex
          align='center'
          justify='center'
        >
          <Button
            disabled={showAll ? true : false}
            className={style.showMoreBtn}
            onClick={handleShowMore}
          >
            Смотреть все
          </Button>
        </Flex>
      </div>
    </section>
  )
}
