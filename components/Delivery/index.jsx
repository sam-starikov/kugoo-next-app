import Link from 'next/link'
import style from './style.module.scss'

import { Button } from 'antd'

export function Delivery() {
  return (
    <section className={style.root}>
      <div className='container'>
        <div className={style.body}>
          <div className={style.info}>
            <div className={style.sticker}>Акция</div>
            <p className={style.text}>Бесплатная доставка электросамокатов по России до 01.09</p>
            <Link
              href='#!'
              className={`btn btn--white ${style.btn}`}>
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
