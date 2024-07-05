"use client";
import style from "./header.module.scss";

/* next */
import Link from "next/link";
import Image from "next/image";

export default function Header({ children }) {
  return (
    <header>
      <div className="container">
        <nav className={style.navTop}>
          <ul className={style.navList}>
            <li>
              <Link href="#!">Сервис</Link>
            </li>
            <li>
              <Link href="#!">Сотрудничество</Link>
            </li>
            <li>
              <Link href="#!">Заказать звонок</Link>
            </li>
            <li>
              <ul className={style.socials}>
                <li>
                  <Link href="#!">
                    <Image
                      src="/icons/header/viber.svg"
                      alt="viber"
                      width={10}
                      height={10}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#!">
                    <Image
                      src="/icons/header/whatsapp.svg"
                      alt="whatsapp"
                      width={10}
                      height={10}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#!">
                    <Image
                      src="/icons/header/telegram.svg"
                      alt="telegram"
                      width={10}
                      height={10}
                    />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <Link className={style.telNumber} href="tel:+7 (800) 505-54-61">
            +7 (800) 505-54-61
            <Image
              src="/icons/header/add-plus.svg"
              alt="plus"
              width={10}
              height={10}
            />
          </Link>
        </nav>
      </div>

      <div className="container">
        <div className={style.body}>
          {children}

          <ul className={style.controls}>
            <li>
              <Link href="#!">
                <Image
                  src="/icons/header/balance.svg"
                  alt="balance"
                  width={10}
                  height={10}
                />
              </Link>
            </li>
            <li>
              <Link href="#!">
                <Image
                  src="/icons/header/heart.svg"
                  alt="favourite"
                  width={10}
                  height={10}
                />
              </Link>
            </li>
            <li>
              <Link href="#!">
                <Image
                  src="/icons/header/cart.svg"
                  alt="cart"
                  width={10}
                  height={10}
                />
              </Link>
              <span>Корзина</span>
            </li>
          </ul>
        </div>
      </div>

      <nav className={style.navBottom}>
        <div className="container">
          <ul>
            <li>
              <Link href="#!">О магазине</Link>
            </li>
            <li>
              <ul>
                <li>
                  <Link href="#!">Доставка и оплата</Link>
                </li>
                <li>
                  <Link href="#!">Доступна рассрочка</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#!">Тест-драйв</Link>
            </li>
            <li>
              <Link href="#!">Блог</Link>
            </li>
            <li>
              <Link href="#!">Контакты</Link>
            </li>
            <li>
              <Link href="#!">Акции</Link>
              <Image
                src="/icons/header/discount.svg"
                alt="discount"
                width={10}
                height={10}
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
