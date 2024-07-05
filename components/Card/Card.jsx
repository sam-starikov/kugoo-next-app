import style from "./card.module.scss";

import { Button } from "antd";
import Image from "next/image";

export default function Card({
  id,
  title,
  img,
  price,
  discount,
  // mAh,
  // power,
  // kmH,
  // chargeTime,
}) {
  return (
    <article className={style.card}>
      <div className={style.top}>
        <div className={style.imgWrap}>
          <Image src={img} alt={title} width={255} height={231} />
          {/* <Image src="/img/scooter.svg" alt={title} width={255} height={231} /> */}
        </div>
      </div>

      <div className={style.body}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.info}>
          <ul className={style.infoList}>
            <li className={style.infoListItem}>
              {/* <Image src={} alt="icon" /> */}
              {/* <p className={style.infoDesc}>{mAh}</p> */}
            </li>
            <li className={style.infoListItem}>
              {/* <Image  src={}  alt="icon"/> */}
              {/* <p className={style.infoDesc}>{power}</p> */}
            </li>
            <li className={style.infoListItem}>
              {/* <Image  src={} alt="icon"/> */}
              {/* <p className={style.infoDesc}>{kmH}</p> */}
            </li>
            <li className={style.infoListItem}>
              {/* <Image  src={} alt="icon" /> */}
              {/* <p className={style.infoDesc}>{chargeTime}</p> */}
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
            <Button type="primary">Купить в один клик</Button>
          </div>
        </div>
      </div>
    </article>
  );
}
