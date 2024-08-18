'use client'
import style from './card.module.scss'

import Image from 'next/image'
import { useState } from 'react'
import { useStore } from '@/app/store/store'
// import useFormattedPrice from '@/app/hooks/useFormattedPrice'

import { Button, Image as AntdImage } from 'antd'
import { ShoppingOutlined, ShoppingFilled, HeartOutlined, HeartFilled } from '@ant-design/icons'
import Link from 'next/link'

export function Card({
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
  added,
  disabled,
}) {
  const { addToCart } = useStore()
  const [isAdded, setIsAdded] = useState(added)
  const [isFavourite, setIsFavourite] = useState(false)

  const handleAddProduct = () => {
    const newProduct = { id, title, img, price, isDiscount }
    addToCart(newProduct)
    setIsAdded(!isAdded)
  }

  const setFormatedPrice = price => {
    return new Intl.NumberFormat('ru-Ru', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className={style.card}>
      <div className={style.top}>
        <AntdImage
          className={style.img}
          src={img}
          alt='scooter'
          width={'100%'}
          height={'100%'}
        />
        <button className={style.balance}>
          <Image
            src={'/icons/card/balance.svg'}
            alt='balance'
            width={35}
            height={35}
          />
        </button>
        {isTrend && <span className={style.trend}>Trend</span>}
        {isNew && <span className={style.new}>New</span>}
      </div>

      <div className={style.body}>
        <Link href={`/cart/${id}`}>
          <h4 className={style.title}>{title}</h4>
          <ul className={style.infoList}>
            <li className={style.infoListItem}>
              <Image
                src={'/icons/card/accumulator.svg'}
                alt='accumulator'
                width={18}
                height={18}
              />
              <p className={style.infoDesc}>{String(mAh).slice(0, 3)} mAh</p>
            </li>
            <li className={style.infoListItem}>
              <Image
                src={'/icons/card/power.svg'}
                alt='power'
                width={18}
                height={18}
              />
              <p className={style.infoDesc}>{power} л.с.</p>
            </li>
            <li className={style.infoListItem}>
              <Image
                src={'/icons/card/speedometer.svg'}
                alt='speedometer'
                width={18}
                height={18}
              />
              <p className={style.infoDesc}>{kmH} км/ч</p>
            </li>
            <li className={style.infoListItem}>
              <Image
                src={'/icons/card/timer.svg'}
                alt='timer'
                width={18}
                height={18}
              />
              <p className={style.infoDesc}>{charge} часов</p>
            </li>
          </ul>
        </Link>

        <div className={style.bottom}>
          <div className={style.totalPrice}>
            {isDiscount && <span className={style.discount}>{setFormatedPrice(price)} ₽</span>}
            <strong className={style.price}>
              {setFormatedPrice(isDiscount ? price - (price / 100) * 10 : price)} ₽
            </strong>
          </div>
          <div className={style.controls}>
            <button
              className={style.cartBtn}
              onClick={handleAddProduct}
              disabled={disabled}
            >
              {isAdded ? <ShoppingFilled /> : <ShoppingOutlined />}
            </button>
            <button
              className={style.favouriteBtn}
              onClick={() => setIsFavourite(!isFavourite)}
            >
              {isFavourite ? <HeartFilled /> : <HeartOutlined />}
            </button>
          </div>
        </div>
        <Button
          type='primary'
          className={style.btnBuy}
        >
          Купить в 1 клик
        </Button>
      </div>
    </div>
  )
}
