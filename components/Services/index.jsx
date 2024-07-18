import style from './style.module.scss';

import Link from 'next/link';

export default function Services() {
  return (
    <section className={style.services}>
      <div className='container'>
        <div className={style.servicesBody}>
          <article className={style.servicesCard}>
            <h3 className={style.servicesTitle}>Подбор модели электросамоката</h3>
            <p className={style.servicesSubTitle}>
              Пройдите тест и выберите электросамокат по своим критериям
            </p>
            <Link href='#!' className={style.servicesLink}>
              Подобрать модель
            </Link>
          </article>
          <article className={style.servicesCard}>
            <h3 className={style.servicesTitle}>Подбор модели электросамоката</h3>
            <p className={style.servicesSubTitle}>
              Пройдите тест и выберите электросамокат по своим критериям
            </p>
            <Link href='#!' className={style.servicesLink}>
              Подобрать модель
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
