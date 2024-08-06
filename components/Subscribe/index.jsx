import s from './style.module.scss'

import { Input } from 'antd'
import { Button } from '..'

export function Subscribe() {
  return (
    <section className={s.root}>
      <div className='container'>
        <div className={s.body}>
          <h2 className={s.title}>
            Оставьте свою почту и станьте первым, кто получит скидку на новые самокаты
          </h2>
          <Input
            className={s.input}
            placeholder='Введите Ваш email'
          />
          <Button type='white'>Подписаться</Button>
        </div>
      </div>
    </section>
  )
}
