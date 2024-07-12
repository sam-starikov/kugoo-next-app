"use client";
import style from "./header.module.scss";

/* next */
import Link from "next/link";
import Image from "next/image";
import Cart from "../Cart/Cart";

import { HeartOutlined } from "@ant-design/icons";
import Logo from "../Logo/Logo";

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
                                            width={20}
                                            height={20}
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <Image
                                            src="/icons/header/whatsapp.svg"
                                            alt="whatsapp"
                                            width={20}
                                            height={20}
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <Image
                                            src="/icons/header/telegram.svg"
                                            alt="telegram"
                                            width={20}
                                            height={20}
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className={style.telNumber} href="tel:+7 (800) 505-54-61">
                                +7 (800) 505-54-61
                                <Image
                                    src="/icons/header/add-plus.svg"
                                    alt="plus"
                                    width={18}
                                    height={18}
                                />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="container">

                <div className={style.body}>
                    <Logo />
                    {children}
                    <ul className={style.controls}>
                        <li>
                            <Link href="#!">
                                <Image
                                    src="/icons/header/balance.svg"
                                    alt="compare"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="#!">
                                <HeartOutlined className={style.favourite} />
                            </Link>
                        </li>
                        <li>
                            <Link href='/cart'>
                                <Cart />
                            </Link>

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
                                width={20}
                                height={20}
                            />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
