import style from './style.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '..'

export function DeliveryBanner({ imgSrc, title }) {
  return (
    <section>
      <div className='container container--large'>
        <div className={style.banner}>
          <Image
            fill
            src={imgSrc}
            alt='delivery banner'
            className={style.img}
          />
          <div className='container'>
            <div className={style.body}>
              <div className={style.info}>
                <div className={style.sticker}>Акция</div>
                <h2 className={style.title}>{title}</h2>
                <Button
                  tag='link'
                  type='blackText'
                >
                  Подробнее
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
