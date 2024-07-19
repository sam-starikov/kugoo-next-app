import style from './style.module.scss';

import { Button } from 'antd';

export default function Dilivery() {
  return (
    <section className={style.root}>
      <div className='container'>
        <div className={style.body}>
          <div className={style.info}>
            <div className={style.sticker}>Акция</div>
            <h2 >
              Бесплатная доставка электросамокатов по России до 01.09
            </h2>
            <Button className={style.deliveryBtn}>Подробнее</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
