import style from './logo.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import LogoImg from './logo.svg'

export function Logo() {
  return (
    <Link href='/'>
      <Image
        className={style.logo}
        src={LogoImg}
        alt='Kugoo logo'
      />
    </Link>
  )
}
