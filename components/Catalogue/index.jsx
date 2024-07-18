import Link from 'next/link';
import style from './catalogue.module.scss';

import Image from 'next/image';

export default function Catalogue({ isOpen }) {
  return (
    <section className={`${style.root} ${isOpen ? style.active : ''}`}>
      <div className={style.itemList}>
        <ul>
          <li>
            <Link href='#!'>
              <Image src='/icons/catalogue/scooter.svg' width={16} height={16} alt='scooter' />
              Электросамокаты
            </Link>
          </li>
          <li>
            <Link href='#!'>
              <Image
                src='/icons/catalogue/electric-scooter.svg'
                width={16}
                height={16}
                alt='scooter'
              />
              Электроскутеры
            </Link>
          </li>
          <li>
            <Link href='#!'>
              <Image src='/icons/catalogue/bike.svg' width={16} height={16} alt='scooter' />
              Электровелосипеды
            </Link>
          </li>
          <li>
            <Link href='#!'>
              <Image
                src='/icons/catalogue/vacuum-cleaner.svg'
                width={16}
                height={16}
                alt='scooter'
              />
              Робот-пылесосы
            </Link>
          </li>
          <li>
            <Link href='#!'>
              <Image
                src='/icons/catalogue/weighing-scale.svg'
                width={16}
                height={16}
                alt='scooter'
              />
              Весы
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.options}>
        <ul>
          <h3>Особенности</h3>
          <li>Внедорожный</li>
          <li>Городской</li>
          <li>Зимний</li>
          <li>С сиденьем</li>
          <li>Без сиденья</li>
        </ul>
        <ul>
          <h3>Для кого</h3>
          <li>Для детей и подростков</li>
          <li>Для взрослых</li>
          <li>Для пенсионеров</li>
        </ul>
      </div>
    </section>
  );
}

{
}
