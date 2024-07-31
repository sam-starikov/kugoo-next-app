import style from './style.module.scss'

import Image from 'next/image'

export function Benefits() {
  return (
    <section className={style.benefits}>
      <div className='container'>
        <div className={style.body}>
          <div className={style.benefit}>
            <h3 className={style.title}>Гарантия 1 год</h3>
            <p className={style.subTile}>на весь ассортимент</p>
          </div>
          <div className={style.benefit}>
            <h3 className={style.title}>Рассрочка</h3>
            <p className={style.subTile}>от 6 месяцев</p>
          </div>
          <div className={style.benefit}>
            <h3 className={style.title}>Подарки</h3>
            <p className={style.subTile}>и бонусам к покупкам </p>
          </div>
          <div className={style.benefit}>
            <Image
              className={style.yaImg}
              src={'/img/yandex-reviews.jpg'}
              alt='yandex'
              width={190}
              height={76}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
