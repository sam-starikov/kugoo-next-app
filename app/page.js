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
  const { fetchProducts, allProducts, reviews, fetchReviews } = useStore()

  useEffect(() => {
    if (allProducts.length === 0) {
      fetchProducts()
    }
    if (reviews.length === 0) {
      fetchReviews()
    }
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
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
