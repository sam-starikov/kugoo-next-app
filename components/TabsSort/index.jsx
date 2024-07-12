import { Button } from 'antd'
import style from './style.module.scss'

export default function TabsSort() {
    return (
        <>
            <section className={ style.body }>
                <Button className={ style.btn } >Хиты продаж</Button>
                <Button className={ style.btn } >Для города</Button>
                <Button className={ style.btn } >Для взрослых</Button>
                <Button className={ style.btn }>Для детей</Button>
            </section>
        </>
    )
}