'use client'

import { useEffect, useState } from 'react'
import { useStore } from './store/store'
import {
  CardList,
  Benefits,
  BannerSlider,
  ReviewSlider,
  Subscribe,
  Services,
  Delivery,
  Header,
  Footer,
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
      <Header />
      <main className='main'>
        <BannerSlider />
        <Benefits />
        <CardList
          cards={allProducts}
          title={'Электросамокаты'}
          isSort={true}
        />
        <Services />
        <div className='container container--large'>
          <Delivery />
        </div>
        <ReviewSlider />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}
