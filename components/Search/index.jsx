import style from './search.module.scss'
import SearchImg from './search.svg'

import Image from 'next/image'
import { Select, Input } from 'antd'

export function Search() {
  return (
    <form className={style.form} action=''>
      <Select className={style.select} defaultValue='Везде' />
      <Input className={style.input} placeholder='Искать самокат KUGO' />;
      <button className={style.searchBtn}>
        <Image width={16} height={16} src={SearchImg} alt='search' />
      </button>
    </form>
  )
}
