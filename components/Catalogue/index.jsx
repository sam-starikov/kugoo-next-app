'use client'
import style from './catalogue.module.scss'

import Link from 'next/link'
import Image from 'next/image'

export function Catalogue({ isOpen, toggleCatalogue }) {
  const categories = [
    { name: 'Электросамокаты', icon: '/icons/catalogue/scooter.svg' },
    { name: 'Электроскутеры', icon: '/icons/catalogue/electric-scooter.svg' },
    { name: 'Электровелосипеды', icon: '/icons/catalogue/bike.svg' },
    { name: 'Робот-пылесосы', icon: '/icons/catalogue/vacuum-cleaner.svg' },
    { name: 'Весы', icon: '/icons/catalogue/weighing-scale.svg' },
  ]
  const features = ['Внедорожный', 'Городской', 'Зимний', 'С сиденьем', 'Без сиденья']
  const ageGroups = ['Для детей и подростков', 'Для взрослых', 'Для пенсионеров']

  return (
    <div className={`${style.overlay} ${isOpen ? style.active : ''}`} onClick={toggleCatalogue}>
      <section className={style.root}>
        <div className={style.itemList}>
          <ul>
            {categories.map(({ name, icon }) => (
              <li key={name}>
                <Link href='#!'>
                  <Image src={icon} width={16} height={16} alt={name} />
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.options}>
          <ul>
            <h3>Особенности</h3>
            {features.map(feature => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <ul>
            <h3>Для кого</h3>
            {ageGroups.map(ageGroup => (
              <li key={ageGroup}>{ageGroup}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
