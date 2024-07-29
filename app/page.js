'use client'

import { useEffect, useState } from 'react'

import CardList from '@/components/CardList'
import Benefits from '@/components/Benefits'
import Slider from '@/components/Slider'
import ReviewSlider from '@/components/ReviewSlider'
import Subscribe from '@/components/Subscribe'
import Services from '@/components/Services'
import Delivery from '@/components/Delivery'

export default function Home() {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://649009021e6aa71680ca6400.mockapi.io/items')
        const data = await response.json()
        setAllProducts(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProducts()
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
