import s from './style.module.scss'

import Link from 'next/link'

export function Button({ link, type, href, children, onClick, disabled }) {
  return link ? (
    <Link
      className={`${s.btn} ${s[type]}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${s.btn} ${s[type]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
