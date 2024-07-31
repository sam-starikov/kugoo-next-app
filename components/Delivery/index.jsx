import style from './style.module.scss'

import { Button } from 'antd'

export function Delivery() {
  return (
    <section className={style.root}>
      <div className='container'>
        <div className={style.body}>
          <div className={style.info}>
            <div className={style.sticker}>Акция</div>
            <div>Бесплатная доставка электросамокатов по России до 01.09</div>
            <Button className={style.deliveryBtn}>Подробнее</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
