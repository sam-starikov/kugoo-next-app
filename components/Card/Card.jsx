import style from "./card.module.scss";

import { Button } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import Image from "next/image";


export default function Card({
    id,
    title,
    img,
    price,
    discount,
    isTrend,
    isNew,
    mAh,
    power,
    kmH,
    charge,
    addToCart
}) {


    const handleClick = () => {
        addToCart({ title, price })
    }
    return (
        <article className={style.card}>

            <div className={style.top}>
                {isTrend && <span className={style.trend}>Trend</span>}
                {isNew && <span className={style.new}>New</span>}
                <img src={img} />
            </div>

            <div className={style.body}>
                <h2 className={style.title}>{title}</h2>
                <div className={style.info}>
                    <ul className={style.infoList}>
                        <li className={style.infoListItem}>
                            <Image src={'/icons/card/accumulator.svg'} alt="accumulator" width={18} height={18} />
                            <p className={style.infoDesc}>{String(mAh).slice(0, 3)} mAh</p>
                        </li>
                        <li className={style.infoListItem}>
                            <Image src={'/icons/card/power.svg'} alt="power" width={18} height={18} />
                            <p className={style.infoDesc}>{power} л.с.</p>
                        </li>
                        <li className={style.infoListItem}>
                            <Image src={'/icons/card/speedometer.svg'} alt="speedometer" width={18} height={18} />
                            <p className={style.infoDesc}>{kmH} км/ч</p>
                        </li>
                        <li className={style.infoListItem}>
                            <Image src={'/icons/card/timer.svg'} alt="timer" width={18} height={18} />
                            <p className={style.infoDesc}>{charge} часов</p>
                        </li>
                    </ul>
                    <div className={style.bottom}>
                        <strong className={style.price}>{price}₽</strong>

                        <div className={style.controls}>
                            <button className={style.cartBtn} onClick={handleClick}>
                                <ShoppingCartOutlined />
                                {/* <Image src={'/icons/card/cart-btn-fill.svg'} alt='add cart button' width={20} height={20} /> */}
                            </button>
                            <button className={style.favouriteBtn}>
                                <HeartOutlined />
                            </button>
                        </div>
                    </div>
                    <Button type="primary" className={style.btnBuy}>
                        Купить в 1 клик
                    </Button>
                </div>
            </div>
        </article>
    );
}
