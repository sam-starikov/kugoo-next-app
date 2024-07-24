'use client';

import { useEffect } from 'react';

import CardList from '@/components/CardList';
import Benefits from '@/components/Benefits';
import Slider from '@/components/Slider';
import ReviewSlider from '@/components/ReviewSlider';
import Subscribe from '@/components/Subscribe';
import Services from '@/components/Services';
import Delivery from '@/components/Delivery';
import useStore from './store';

export default function Home() {
  const { allProducts, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <main className='main'>
      <Slider />
      <Benefits />
      <CardList cards={allProducts} title={'Электросамокаты'} isSort={true} />
      <Services />
      <div className='container container--large'>
        <Delivery />
      </div>
      <ReviewSlider />
      <Subscribe />
    </main>
  );
}
