'use client';
import style from './header.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import Cart from '../Cart';
import Logo from '../Logo';
import Search from '../Search';
import Catalogue from '../Catalogue';

import { HeartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';

export default function Header() {
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);

  const toggleCatalogue = () => setIsCatalogueOpen(!isCatalogueOpen);

  return (
    <header>
      <nav className={style.navTop}>
        <div className='container'>
          <ul className={style.navList}>
            <li>
              <Link href='/service'>Сервис</Link>
            </li>
            <li>
              <Link href='/cooperation'>Сотрудничество</Link>
            </li>
            <li>
              <Link href='/call-me'>Заказать звонок</Link>
            </li>
            <li>
              <ul className={style.socials}>
                <li>
                  <Link href='https://viber.com/'>
                    <Image src='/icons/header/viber.svg' alt='viber' width={20} height={20} />
                  </Link>
                </li>
                <li>
                  <Link href='https://whatsapp.com/'>
                    <Image src='/icons/header/whatsapp.svg' alt='whatsapp' width={20} height={20} />
                  </Link>
                </li>
                <li>
                  <Link href='https://telegram.org/'>
                    <Image src='/icons/header/telegram.svg' alt='telegram' width={20} height={20} />
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className={style.telNumber} href='tel:+78005055461'>
                +7 (800) 505-54-61
                <Image src='/icons/header/add-plus.svg' alt='plus' width={18} height={18} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className='container'>
        <div className={style.body}>
          <Logo />
          <Button className={style.btn} onClick={toggleCatalogue}>
            <UnorderedListOutlined /> Каталог
          </Button>
          <Catalogue isOpen={isCatalogueOpen} toggleCatalogue={toggleCatalogue} />
          <Search />
          <ul className={style.controls}>
            <li>
              <Link href='/compare'>
                <Image src='/icons/header/balance.svg' alt='compare' width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link href='/favourites'>
                <HeartOutlined className={style.favourite} />
              </Link>
            </li>
            <li>
              <Link href='/cart'>
                <Cart />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className={style.navBottom}>
        <div className='container'>
          <ul>
            <li>
              <Link href='/about'>О магазине</Link>
            </li>
            <li>
              <ul>
                <li>
                  <Link href='/delivery-and-payment'>Доставка и оплата</Link>
                </li>
                <li>
                  <Link href='/installment'>Доступна рассрочка</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/test-drive'>Тест-драйв</Link>
            </li>
            <li>
              <Link href='/blog'>Блог</Link>
            </li>
            <li>
              <Link href='/contacts'>Контакты</Link>
            </li>
            <li>
              <Link href='/stock'>
                <Image src='/icons/header/discount.svg' alt='discount' width={20} height={20} />
                Акции
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
