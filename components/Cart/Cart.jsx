import { ClockCircleOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";

export default function Cart() {
  return (
    <button>
      <Badge count={0} showZero>
        <Avatar shape="square" size="midle" />
      </Badge>
    </button>
  );
}
