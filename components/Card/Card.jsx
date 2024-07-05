import style from "./card.module.scss";

import { Button } from "antd";
import Image from "next/image";

export default function Card({
  id,
  title,
  img,
  price,
  discount,
  mAh,
  power,
  kmH,
  charge,
}) {
  return (
    <article className={style.card}>
      <div className={style.top}>
        <div className={style.imgWrap}>
          {/* <Image src={img} alt={title} width={255} height={255} /> */}
          {/* <Image src="/img/scooter.svg" alt={title} width={255} height={231} /> */}
          <img src={img} />
        </div>
      </div>

      <div className={style.body}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.info}>
          <ul className={style.infoList}>
            <li className={style.infoListItem}>
              {/* <Image src={} alt="icon" /> */}
              <p className={style.infoDesc}>{String(mAh).slice(0, 3)} mAh</p>
            </li>
            <li className={style.infoListItem}>
              {/* <Image  src={}  alt="icon"/> */}
              <p className={style.infoDesc}>{power} л.с.</p>
            </li>
            <li className={style.infoListItem}>
              {/* <Image  src={} alt="icon"/> */}
              <p className={style.infoDesc}>{kmH} км/ч</p>
            </li>
            <li className={style.infoListItem}>
              {/* <Image  src={} alt="icon" /> */}
              <p className={style.infoDesc}>{charge} часов</p>
            </li>
          </ul>
          <div className={style.controls}>
            <strong className={style.price}>{price}₽</strong>
            <div className={style.buttons}>
              <button className={style.cartBtn}>
                {/* <Image src={} alt='cart'/> */}
              </button>
              <button className={style.cartLike}>
                {/* <Image src={} alt='like'/> */}
              </button>
            </div>
          </div>
          <Button type="primary" className={style.btnBuy}>
            Купить в один клик
          </Button>
        </div>
      </div>
    </article>
  );
}
