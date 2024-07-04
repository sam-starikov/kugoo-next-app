import Link from "next/link";
import Image from "next/image";

import { Button, Select } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

import style from "./header.module.scss";

import viber from "./../../assets/img/icons/viber.svg";
import whatsapp from "./../../assets/img/icons/whatsapp.svg";
import telegram from "./../../assets/img/icons/telegram.svg";
import addPlus from "./../../assets/img/icons/add-plus.svg";
import logo from "./../../assets/img/icons/logo.svg";
import search from "./../../assets/img/icons/search.svg";
import cart from "./../../assets/img/icons/cart.svg";
import balance from "./../../assets/img/icons/balance.svg";
import heart from "./../../assets/img/icons/heart.svg";
import discount from "./../../assets/img/icons/discount.svg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className={style.navTop}>
          <ul className={style.navList}>
            <li>
              <a href="#!">Сервис</a>
            </li>
            <li>
              <a href="#!">Сотрудничество</a>
            </li>
            <li>
              <a href="#!">Заказать звонок</a>
            </li>
            <li>
              <ul className={style.socials}>
                <li>
                  <a href="#!">
                    <Image src={viber} alt="viber" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <Image src={whatsapp} alt="whatsapp" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <Image src={telegram} alt="telegram" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <Link className={style.telNumber} href="tel:+7 (800) 505-54-61">
            +7 (800) 505-54-61
            <Image src={addPlus} alt="plus" />
          </Link>
        </nav>
      </div>

      <div className="container">
        <div className={style.body}>
          <Link href="/">
            <Image className={style.logo} src={logo} alt="logo" />
          </Link>
          <Button className={style.btn} title="Каталог">
            <UnorderedListOutlined /> Каталог
          </Button>
          <form className={style.form} action="">
            <Select className={style.select} placeholder="Везде" />
            <input
              className={style.input}
              type="text"
              placeholder="Искать самокат KUGO"
            />
            <div className={style.search}>
              <Image width={16} height={16} src={search} alt="search" />
            </div>
          </form>
          <ul className={style.controls}>
            <li>
              <Link href="#!">
                <Image src={balance} alt="balance" />
              </Link>
            </li>
            <li>
              <Link href="#!">
                <Image src={heart} alt="like" />
              </Link>
            </li>
            <li>
              <Link href="#!">
                <Image src={cart} alt="cart" />
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
              <Image src={discount} alt="discount" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
