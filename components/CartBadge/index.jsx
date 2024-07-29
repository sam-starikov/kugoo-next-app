import s from './style.module.scss'

import { Avatar, Badge } from 'antd'

export default function CartBadge() {
  return (
    <Badge className={s.badge} count={0} showZero size='middle' color='purple'>
      <Avatar size='small' />
    </Badge>
  )
}
