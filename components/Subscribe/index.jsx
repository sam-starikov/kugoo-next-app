import s from './style.module.scss';

import { Button, Input } from 'antd';

export default function Subscribe() {
  return (
    <section className={s.root}>
      <div className='container'>
        <div className={s.body}>
          <h2 className={s.title}>
            Оставьте свою почту и станьте первым, кто получит скидку на новые самокаты
          </h2>
          <Input className={s.input} placeholder='Введите Ваш email' />
          <Button className={s.button}>Подписаться</Button>
        </div>
      </div>
    </section>
  );
}
