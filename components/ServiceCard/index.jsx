import style from './style.module.scss'

import Link from 'next/link'
import Image from 'next/image'

export function ServiceCard({ imgSrc, title, text }) {
  return (
    <div className={style.card}>
      <div className={style.body}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
        <Link
          href='#!'
          className={style.link}
        >
          Подобрать модель
        </Link>
      </div>
      <Image
        fill
        src={imgSrc}
        alt={title}
        className={style.img}
      />
    </div>
  )
}
