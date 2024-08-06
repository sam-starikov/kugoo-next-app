import style from './search.module.scss'

import Image from 'next/image'
import { Select, Input } from 'antd'
import SearchImg from './search.svg'
import SelectArrowDown from './../../public/icons/select-arrow-down.svg'
export function SearchForm() {
  const selectOptions = [
    {
      value: 'Там',
      label: 'Там',
    },
    {
      value: 'Сям',
      label: 'Сям',
    },
    {
      value: 'Тут',
      label: 'Тут',
    },
    {
      value: 'Везде',
      label: 'Везде',
    },
  ]

  return (
    <form
      className={style.form}
      action=''
    >
      <Select
        className={style.select}
        defaultValue='Везде'
        options={selectOptions}
        suffixIcon={
          <Image
            src={SelectArrowDown}
            alt='arrow down'
          />
        }
        variant='borderless'
      />
      <Input
        className={style.input}
        placeholder='Искать самокат KUGO'
      />
      ;
      <button className={style.searchBtn}>
        <Image
          src={SearchImg}
          alt='search icon'
        />
      </button>
    </form>
  )
}
