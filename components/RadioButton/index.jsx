import { useState } from 'react'
import s from './style.module.scss'

export function RadioButton({ checked, value, size, name, children, onChange = () => {} }) {
  return (
    <label className={s.root}>
      <input
        type='radio'
        name={name}
        className={s.real}
        onChange={e => onChange(e.target.value)}
        value={value}
        defaultChecked={checked}
      />
      <div
        size={size}
        className={`${s.fake} ${s[size]}`}
      >
        {children}
      </div>
    </label>
  )
}
