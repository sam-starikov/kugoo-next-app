import style from './logo.module.scss';
import LogoImg from './logo.svg';

import Image from 'next/image';

export default function Logo() {
  return <Image className={style.logo} src={LogoImg} alt='Kugoo logo' />;
}
