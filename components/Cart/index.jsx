import { Avatar, Badge } from 'antd';

export default function Cart({ countValue }) {
  return (
    <button>
      <Badge count={countValue} showZero size='middle'>
        <Avatar shape='square' size='midle' />
      </Badge>
    </button>
  );
}
