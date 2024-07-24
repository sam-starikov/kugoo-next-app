import { Avatar, Badge } from 'antd';

export default function Cart() {
  return (
    <button>
      <Badge count={0} showZero size='middle'>
        <Avatar shape='square' size='midle' />
      </Badge>
    </button>
  );
}
