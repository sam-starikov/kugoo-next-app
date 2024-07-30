import style from './style.module.scss'

import Link from 'next/link'

export function Services() {
  return (
    <section className={style.root}>
      <div className='container'>
        <div className={style.body}>
          <article className={style.card}>
            <div className={style.cardBody}>
              <h3>Подбор модели электросамоката</h3>
              <p>Пройдите тест и выберите электросамокат по своим критериям</p>
              <Link href='#!' className={style.link}>
                Подобрать модель
              </Link>
            </div>
          </article>
          <article className={style.card}>
            <div className={style.cardBody}>
              <h3>Подбор модели электросамоката</h3>
              <p>Пройдите тест и выберите электросамокат по своим критериям</p>
              <Link href='#!' className={style.link}>
                Подобрать модель
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
