'use client'

import { useEffect, useState } from 'react'
import { useStore } from './store/store'
import {
  CardList,
  Benefits,
  BannerSlider,
  ReviewSlider,
  Subscribe,
  DeliveryBanner,
  Header,
  Footer,
  ServiceCard,
} from '@/components/index'

import { Skeleton } from 'antd'

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
        <section className='services-cards'>
          <div className='container'>
            <div className='services-cards__body'>
              <ServiceCard
                title={'Подбор модели электросамоката'}
                text={'Пройдите тест и выберите электросамокат по своим критериям'}
                linkText={'Подобрать модель'}
                imgSrc={'/img/serviceCard/bg-01.jpg'}
              />
              <ServiceCard
                title={'Подбор модели электросамоката'}
                text={'Пройдите тест и выберите электросамокат по своим критериям'}
                imgSrc={'/img/serviceCard/bg-02.jpg'}
              />
            </div>
          </div>
        </section>
        <DeliveryBanner
          title={'Бесплатная доставка электросамокатов по России до 01.09'}
          imgSrc={'/img/deliveryBanner/bg.jpg'}
        />
        <ReviewSlider />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}
