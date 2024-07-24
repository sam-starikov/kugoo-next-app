'use client';
import style from './card.module.scss';

import { Button } from 'antd';
import Image from 'next/image';
import useStore from '../../app/store';

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
}) {
  const { products, addProduct, removeProduct } = useStore();
  const handleAddProduct = () => {
    const newProduct = { id, title, img, price }; // Пример товара
    addProduct(newProduct);
  };
  const setDiscount = () => price - (price * 10) / 100;
  return (
    <article className={style.card}>
      <div className={style.top}>
        <Image
          className={style.img}
          src={'/img/scooter-01.jpg'}
          alt='scooter'
          width={255}
          height={231}
        />
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
            {isDiscount && <span className={style.discount}>{price}₽</span>}
            <strong className={style.price}>{setDiscount()}₽</strong>
          </div>
          <div className={style.controls}>
            <button className={style.cartBtn} onClick={handleAddProduct}>
              <svg
                width='18px'
                height='18px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                />
                <path
                  d='M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                />
                <path
                  d='M8 13V17'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16 13V17'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12 13V17'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M3.864 16.4552C4.40967 18.6379 4.68251 19.7292 5.49629 20.3646C6.31008 21 7.435 21 9.68486 21H14.3155C16.5654 21 17.6903 21 18.5041 20.3646C19.3179 19.7292 19.5907 18.6379 20.1364 16.4552C20.9943 13.0234 21.4233 11.3075 20.5225 10.1538C19.6217 9 17.853 9 14.3155 9H9.68486C6.14745 9 4.37875 9 3.47791 10.1538C2.94912 10.831 2.87855 11.702 3.08398 13'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                />
              </svg>
            </button>
            <button className={style.favouriteBtn}>
              <svg viewBox='0 0 32 32'>
                <desc />
                <path
                  d='M28.343,17.48L16,29  L3.657,17.48C1.962,15.898,1,13.684,1,11.365v0C1,6.745,4.745,3,9.365,3h0.17c2.219,0,4.346,0.881,5.915,2.45L16,6l0.55-0.55  C18.119,3.881,20.246,3,22.465,3h0.17C27.255,3,31,6.745,31,11.365v0C31,13.684,30.038,15.898,28.343,17.48z'
                  strokeLinejoin='round'
                  strokeMiterlimit='10'
                  strokeWidth='2'
                />
              </svg>
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
