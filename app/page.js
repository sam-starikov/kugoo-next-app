'use client'

import { useEffect, useState } from 'react'
import { useStore } from './data/store'
import {
  CardList,
  Benefits,
  Slider,
  ReviewSlider,
  Subscribe,
  Services,
  Delivery,
} from '@/components/index'

export default function Home() {
  const fetchProducts = useStore(state => state.fetchProducts)
  const allProducts = useStore(state => state.allProducts)

  useEffect(() => {
    if (allProducts.length === 0) {
      fetchProducts()
    }
  }, [])

  return (
    <>
      <Slider />
      <Benefits />
      <CardList cards={allProducts} title={'Электросамокаты'} isSort={true} />
      <Services />
      <div className='container container--large'>
        <Delivery />
      </div>
      <ReviewSlider />
      <Subscribe />
    </>
  )
}
