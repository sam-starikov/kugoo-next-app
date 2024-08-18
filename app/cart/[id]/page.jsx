'use client'
import s from './style.module.scss'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import { useStore } from '@/app/store/store'
import { Button, Footer, Header, RadioButton, Subscribe } from '@/components'
import { Divider, Flex, Tooltip } from 'antd'
import { QuestionCircleOutlined, HeartOutlined } from '@ant-design/icons'

import ImgSrc from '@/public/icons/delivery-truck.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function ProductDetail({ params }) {
  const { allProducts, cartItems, addToCart } = useStore()
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [product, setProduct] = useState({})
  const [checkedWarranty, setCheckedWarranty] = useState(null)
  const [checkedServices, setCheckedServices] = useState(null)

  const isCart = cartItems.some(obj => obj.id === params.id)

  const handleAddToCart = () => {
    const newProduct = {
      id: product.id,
      title: product.title,
      price:
        product.price -
        (product.price * 10) / 100 +
        Number(checkedWarranty) +
        Number(checkedServices),
      img: product.img,
      isDiscount: product.isDiscount,
    }

    addToCart(newProduct)
  }

  const setFormatedPrice = price => {
    return new Intl.NumberFormat('ru-Ru', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  useEffect(() => {
    const product = allProducts.find(obj => obj.id === params.id)

    setProduct(product)
  }, [params.id, allProducts])

  return (
    <>
      <Header />
      <main className='main'>
        <div className='container'>
          <Flex
            gap={20}
            className={s.root}
          >
            <div className={s.swiper}>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs]}
                className={s.mainSlider}
              >
                {product?.images &&
                  product.images.length > 0 &&
                  product.images.map((img, i) => (
                    <SwiperSlide
                      className={s.slide}
                      key={i}
                    >
                      <img
                        src={img}
                        alt='scooter'
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>

              <Swiper
                slideActiveClass={s.active}
                grabCursor
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className={s.secondSlider}
              >
                {product?.images &&
                  product.images.length > 0 &&
                  product.images.map((img, i) => (
                    <SwiperSlide
                      className={s.slide}
                      key={i}
                    >
                      <img
                        src={img}
                        alt='scooter'
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            <Flex
              vertical
              className={s.main}
            >
              <h1 className={s.title}>{product?.title}</h1>

              <Flex className={s.info}>
                <span>Просмотров 350</span>
                <span>Купили 196 раз</span>
                <span>Артикул: 2200000000026</span>
              </Flex>

              <Flex className={s.controls}>
                <span>В наличии</span>
                <button>
                  <Image
                    src={'/icons/balance.svg'}
                    alt='balance'
                    width={20}
                    height={20}
                  />
                  Сравнить
                </button>
                <button>
                  <Image
                    src={'/icons/share.svg'}
                    alt='share'
                    width={20}
                    height={20}
                  />
                  Поделиться
                </button>
              </Flex>

              <Flex
                className={s.priceWrapper}
                justify='space-between'
                gap={10}
              >
                <Flex
                  vertical
                  justify='center'
                  className={s.price}
                >
                  <span>{setFormatedPrice(product?.price)} ₽</span>
                  <span>{setFormatedPrice(product?.price - (product?.price * 10) / 100)} ₽</span>
                </Flex>
                <Flex
                  vertical
                  className={s.credit}
                >
                  <span>Рассрочка:</span>
                  <span>1 760 ₽ в месяц / 24 месяца</span>
                </Flex>
              </Flex>

              <Flex
                className={s.equipment}
                vertical
                gap={6}
              >
                <Flex gap={6}>
                  <h2>Комплектация</h2>
                  <Tooltip
                    title='prompt text'
                    color={'#75d14a'}
                  >
                    <QuestionCircleOutlined style={{ fontSize: 16 }} />
                  </Tooltip>
                </Flex>
                <Flex
                  justify='space-between'
                  gap={20}
                  wrap
                >
                  <RadioButton
                    name={'equipment'}
                    checked={true}
                  >
                    Базовая
                  </RadioButton>
                  <RadioButton name={'equipment'}>Версия MAX</RadioButton>
                  <RadioButton name={'equipment'}>VIP-версия</RadioButton>
                </Flex>
              </Flex>

              <Flex
                vertical
                gap={8}
                className={s.tyres}
              >
                <span>Покрышки</span>
                <Flex
                  align='center'
                  justify='space-between'
                  className={s.text}
                >
                  <Flex vertical>
                    <h2>Внедорожная шипованная</h2>
                    <p>+ установка (с доп.комплектом базовых покрышек)</p>
                  </Flex>
                  <button>Изменить</button>
                </Flex>
                <span className={s.price}>7600 руб.</span>
              </Flex>

              <Flex
                className={s.warranty}
                vertical
                gap={20}
              >
                <h3>Гарантия</h3>
                <Flex
                  gap={20}
                  justify='center'
                >
                  <RadioButton
                    size={'xl'}
                    name={'warranty'}
                    checked={true}
                    value={0}
                    onChange={setCheckedWarranty}
                  >
                    Стандартная 1 год
                    <span>Бесплатно</span>
                  </RadioButton>
                  <RadioButton
                    size={'xl'}
                    name={'warranty'}
                    value={2990}
                    onChange={setCheckedWarranty}
                  >
                    Расширенная 2 года
                    <span>2 990 руб.</span>
                  </RadioButton>
                </Flex>
              </Flex>

              <Flex
                vertical
                gap={20}
                className={s.services}
              >
                <h3>Дополнительные услуги</h3>
                <Flex
                  justify='center'
                  gap={20}
                >
                  <RadioButton
                    size={'xl'}
                    name={'services'}
                    checked={true}
                    value={0}
                    onChange={setCheckedServices}
                  >
                    Нет
                  </RadioButton>
                  <RadioButton
                    size={'xl'}
                    name={'services'}
                    value={1520}
                    onChange={setCheckedServices}
                  >
                    Настройка <span>1 520 руб.</span>
                  </RadioButton>
                </Flex>
                <Flex
                  justify='center'
                  gap={20}
                >
                  <RadioButton
                    size={'xl'}
                    name={'services'}
                    value={3850}
                    onChange={setCheckedServices}
                  >
                    Гидроизоляция <span>3 850 руб.</span>
                  </RadioButton>
                  <RadioButton
                    size={'xl'}
                    name={'services'}
                    value={3409}
                    onChange={setCheckedServices}
                  >
                    Гидроизоляция и настройка <span>3 409 руб. (-30%)</span>
                  </RadioButton>
                </Flex>
              </Flex>

              <Flex
                vertical
                gap={30}
                className={s.packing}
              >
                <Flex
                  className={s.info}
                  justify='space-between'
                >
                  <h3>Подарочная упаковка</h3>
                  <Flex
                    className={s.promo}
                    gap={8}
                  >
                    <span>До конца акции</span>
                    <span>06:34:23</span>
                  </Flex>
                </Flex>
                <Flex
                  className={s.gifts}
                  vertical
                >
                  <h4>2 подарка при покупке</h4>
                  <Flex
                    className={s.books}
                    gap={30}
                  >
                    <Flex
                      className={s.book}
                      gap={18}
                    >
                      <Image
                        src={'/icons/detailProduct.png'}
                        width={46}
                        height={46}
                        alt='icon'
                      />
                      <p>
                        Книга «6 вопросов об электротранспорте, на которые вы должны знать ответ».
                      </p>
                    </Flex>
                    <Flex
                      className={s.book}
                      gap={18}
                    >
                      <Image
                        src={'/icons/detailProduct-02.png'}
                        width={46}
                        height={46}
                        alt='icon'
                      />
                      <p>Универсальный держатель для телефона</p>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  gap={20}
                  justify='center'
                >
                  <RadioButton
                    size={'xl'}
                    name={'color'}
                    checked={true}
                  >
                    Нет
                  </RadioButton>

                  <RadioButton
                    size={'xl'}
                    name={'color'}
                  >
                    <Image
                      src='/icons/pink.svg'
                      width={45}
                      height={45}
                      alt='pink'
                    />
                    Розовый
                  </RadioButton>
                </Flex>
                <Flex
                  gap={20}
                  justify='center'
                >
                  <RadioButton
                    size={'xl'}
                    name={'color'}
                  >
                    <Image
                      src='/icons/blue.svg'
                      width={45}
                      height={45}
                      alt='blue'
                    />
                    Синий
                  </RadioButton>

                  <RadioButton
                    size={'xl'}
                    name={'color'}
                  >
                    <Image
                      src='/icons/red.svg'
                      width={45}
                      height={45}
                      alt='red'
                    />
                    Красный
                  </RadioButton>
                </Flex>

                <Flex
                  className={s.order}
                  vertical
                >
                  <Flex
                    justify='space-between'
                    align='center'
                    flex={1}
                  >
                    <h2 className={s.title}>
                      {setFormatedPrice(
                        product?.price -
                          (product?.price * 10) / 100 +
                          Number(checkedWarranty) +
                          Number(checkedServices),
                      )}
                      ₽
                    </h2>
                    <button className={s.like}>
                      <HeartOutlined />
                    </button>
                  </Flex>
                  <Divider style={{ marginBottom: 30 }} />
                  <Flex
                    className={s.orderInfo}
                    gap={17}
                  >
                    <Image
                      src={ImgSrc}
                      width={22}
                      height={22}
                      alt='deliveri truck'
                    />
                    <p>
                      Бесплатная доставка по РФ <br />
                      <span>от 1 дня при заказе до 01.09</span>
                    </p>
                  </Flex>
                  <Flex
                    align='center'
                    gap={20}
                    className={s.orderBtns}
                  >
                    <Button type={'purple'}>Купить в 1 клик</Button>
                    <Button
                      disabled={isCart}
                      onClick={handleAddToCart}
                      type={'whiteBorder'}
                    >
                      {isCart ? 'Товар уже в корзине' : 'Добавить в корзину'}
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </div>
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}
