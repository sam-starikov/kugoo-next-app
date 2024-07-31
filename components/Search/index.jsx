import style from './search.module.scss'

import Image from 'next/image'
import { Select, Input } from 'antd'

import SearchImg from './search.svg'

export function Search() {
  return (
    <form className={style.form} action=''>
      <Input className={style.input} placeholder='Искать самокат KUGO' />;
      <button className={style.searchBtn}>
        <Image src={SearchImg} alt='search icon' />
      </button>
    </form>
  )
}
