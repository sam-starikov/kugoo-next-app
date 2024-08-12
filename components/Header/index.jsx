'use client'
import style from './header.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from 'antd'
import { HeartOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Logo, Catalogue, CartBadge, SearchForm } from '../index'

import PlusImg from '/public/icons/header/add-plus.svg'
import ViberImg from '/public/icons/header/viber.svg'
import WhatsAppImg from '/public/icons/header/whatsapp.svg'
import TelegramImg from '/public/icons/header/telegram.svg'
import BalanceImg from '/public/icons/header/balance.svg'

export function Header() {
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false)
  const toggleCatalogue = () => {
    setIsCatalogueOpen(!isCatalogueOpen)
    document.body.classList.toggle('overflow')
  }

  return (
    <header>
      <nav className={style.headerTop}>
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
              <ul className={style.socialsIcons}>
                <li>
                  <Link href='https://viber.com/'>
                    <Image
                      src={ViberImg}
                      alt='viber'
                    />
                  </Link>
                </li>
                <li>
                  <Link href='https://whatsapp.com/'>
                    <Image
                      src={WhatsAppImg}
                      alt='whatsapp'
                    />
                  </Link>
                </li>
                <li>
                  <Link href='https://telegram.org/'>
                    <Image
                      src={TelegramImg}
                      alt='telegram'
                    />
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className={style.telNumber}
                href='tel:+78005055461'
              >
                +7 (800) 505-54-61
                <Image
                  src={PlusImg}
                  alt='plus'
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container'>
        <div className={style.body}>
          <Logo />
          <Button
            className={style.catalogueBtn}
            onClick={toggleCatalogue}
          >
            <UnorderedListOutlined /> Каталог
          </Button>
          <Catalogue
            isOpen={isCatalogueOpen}
            toggleCatalogue={toggleCatalogue}
          />
          <SearchForm />

          <ul className={style.linkIcons}>
            <li>
              <Link href='/compare'>
                <Image
                  src={BalanceImg}
                  alt='balance'
                />
              </Link>
            </li>
            <li>
              <Link href='/favourites'>
                <HeartOutlined />
              </Link>
            </li>
            <li>
              <Link href='/cart'>
                <CartBadge />
                <span className={style.cartLink}> Корзина</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className={style.headerBottom}>
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
                <Image
                  src='/icons/header/discount.svg'
                  alt='discount'
                  width={20}
                  height={20}
                />
                Акции
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
