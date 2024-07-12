import { ClockCircleOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";
import { useState } from "react";

export default function Cart() {

  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }





  return (
    <button>
      <Badge count={0} showZero>
        <Avatar shape="square" size="midle" />
      </Badge>
    </button>
  );
}
