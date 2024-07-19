'use client';

import { useEffect, useState } from 'react';

import CardList from '@/components/CardList';
import Benifits from '@/components/Benefits';

import Search from '@/components/Search/Search';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import ReviewSlider from '@/components/ReviewSlider';
import Footer from '@/components/Footer';
import Subscribe from '@/components/Subscribe';
import Services from '@/components/Services';
import Catalogue from '@/components/Catalogue';
import Delivery from '@/components/Delivery';

export default function Home() {
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onChangeCounter = () => {
    setCount(count + 1);
  };
  const openCatalogue = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch('https://649009021e6aa71680ca6400.mockapi.io/items').then(response =>
      response.json().then(data => {
        setCards(data);
      }),
    );
  }, []);

  return (
    <main className='main'>
      <Header countValue={count} openCatalogue={openCatalogue}>
        <>
          <Search />
          <Catalogue isOpen={isOpen} close={openCatalogue} />
        </>
      </Header>
      <Slider />
      <Benifits />
      <CardList
        cards={cards}
        title={'Электросамокаты'}
        isSort={true}
        onChangeCounter={onChangeCounter}
      />
      <Services />
      <div className='container container--large'>
        <Delivery />
      </div>
      <ReviewSlider />
      <Subscribe />
      <Footer />
    </main>
  );
}
