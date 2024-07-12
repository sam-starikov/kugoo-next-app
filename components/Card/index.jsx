import style from './card.module.scss';

import { Button } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import Image from 'next/image';

export default function Card({
  id,
  title,
  img,
  price,
  isDiscount,
  isTrend,
  isNew,
  mAh,
  power,
  kmH,
  charge,
  onChangeCounter,
}) {
  return (
    <article className={style.card}>
      <div className={style.top}>
        <Image src={'/img/scooter-01.jpg'} alt='scooter' width={255} height={231} />
        <button className={style.balance}>
          <Image src={'/icons/card/balance.svg'} alt='balance' width={35} height={35} />
        </button>
        {isTrend && <span className={style.trend}>Trend</span>}
        {isNew && <span className={style.new}>New</span>}
      </div>
      <div className={style.body}>
        <h2 className={style.title}>{title}</h2>
        <ul className={style.infoList}>
          <li className={style.infoListItem}>
            <Image src={'/icons/card/accumulator.svg'} alt='accumulator' width={18} height={18} />
            <p className={style.infoDesc}>{String(mAh).slice(0, 3)} mAh</p>
          </li>
          <li className={style.infoListItem}>
            <Image src={'/icons/card/power.svg'} alt='power' width={18} height={18} />
            <p className={style.infoDesc}>{power} л.с.</p>
          </li>
          <li className={style.infoListItem}>
            <Image src={'/icons/card/speedometer.svg'} alt='speedometer' width={18} height={18} />
            <p className={style.infoDesc}>{kmH} км/ч</p>
          </li>
          <li className={style.infoListItem}>
            <Image src={'/icons/card/timer.svg'} alt='timer' width={18} height={18} />
            <p className={style.infoDesc}>{charge} часов</p>
          </li>
        </ul>
        <div className={style.bottom}>
          <div className={style.totalPrice}>
            {isDiscount && <span className={style.discount}>{}₽</span>}
            <strong className={style.price}>{price}₽</strong>
          </div>
          <div className={style.controls}>
            <button onClick={onChangeCounter} className={style.cartBtn}>
              <ShoppingCartOutlined />
            </button>
            <button className={style.favouriteBtn}>
              <HeartOutlined />
            </button>
          </div>
        </div>
        <Button type='primary' className={style.btnBuy}>
          Купить в 1 клик
        </Button>
      </div>
    </article>
  );
}
