import s from './style.module.scss'

import { Avatar, Badge } from 'antd'
import { useStore } from '@/app/data/store'

export function CartBadge() {
  const cartItems = useStore(state => state.cartItems)

  return (
    <Badge className={s.badge} count={cartItems.length} showZero size='middle' color='purple'>
      <Avatar size='small' />
    </Badge>
  )
}
