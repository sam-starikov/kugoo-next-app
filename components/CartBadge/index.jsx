import { Badge } from 'antd'
import { useStore } from '@/app/store/store'
import Image from 'next/image'
import CartImg from '/public/icons/header/cart.svg'

export function CartBadge() {
  const cartItems = useStore(state => state.cartItems)

  return (
    <Badge
      count={cartItems.length}
      showZero
      offset={[10, 20]}>
      <Image
        src={CartImg}
        alt='cart'
      />
    </Badge>
  )
}
