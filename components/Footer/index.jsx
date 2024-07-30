import s from './style.module.scss'

import Link from 'next/link'
import Image from 'next/image'

import { Logo } from '../index'

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className='container'>
        <nav className={s.nav}>
          <div className={s.catalogue}>
            <h3>Каталог товаров</h3>
            <ul>
              <li>
                <Link href='#!'>Электросамокаты</Link>
              </li>
              <li>
                <Link href='#!'>Электроскутеры</Link>
              </li>
              <li>
                <Link href='#!'>Электровелосипеды</Link>
              </li>
              <li>
                <Link href='#!'>Робот-пылесосы</Link>
              </li>
              <li>
                <Link href='#!'>Весы</Link>
              </li>
            </ul>
          </div>
          <div className={s.forCustomers}>
            <h3>Покупателям</h3>
            <div className={s.forCustomersBody}>
              <ul>
                <li>
                  <Link href='#!'>Сервисный центр</Link>
                </li>
                <li>
                  <Link href='#!'>Доставкаи оплата</Link>
                </li>
                <li>
                  <Link href='#!'>Рассрочка</Link>
                </li>
                <li>
                  <Link href='#!'>Тест-драйв</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href='#!'>Блог</Link>
                </li>
                <li>
                  <Link href='#!'>Сотрудничество</Link>
                </li>
                <li>
                  <Link href='#!'>Контакты</Link>
                </li>
                <li>
                  <Link href='#!'>Акции</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={s.contacts}>
            <h3>Контакты</h3>
            <div className={s.contactsBody}>
              <ul>
                <li>
                  <span>Call-центр</span>
                </li>
                <li>
                  <Link href='#!'>+7 (800) 505-54-61</Link>
                </li>
                <li>Пн-Вс 10:00 - 20:00</li>
              </ul>
              <ul>
                <li>
                  <span>Сервисный центр</span>
                </li>
                <li>
                  <Link href='#!'>+7 (499) 350-76-92</Link>
                </li>
                <li>Пн-Вс 10:00 - 20:00</li>
              </ul>
            </div>
          </div>
          <Link href='#!' className={s.link}>
            Заказать звонок
          </Link>
        </nav>

        <div className={s.bottom}>
          <Logo />
          <div className={s.store}>
            <Link href='#!'>
              <Image src='/img/google-play.jpg' width={151} height={45} alt='google play' />
            </Link>
            <Link href='#!'>
              <Image src='/img/app-store.jpg' width={151} height={45} alt='app store' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
