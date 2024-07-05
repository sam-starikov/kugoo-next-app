import style from "./logo.module.scss";
import LogoImg from "./logo.svg";

/* next */
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className={style.logo}>
      <Image src={LogoImg} alt="logo" />
    </Link>
  );
}
