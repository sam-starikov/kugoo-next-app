import style from "./catalogue.module.scss";

/* antd */
import { Button } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

export default function Catalogue() {
  return (
    <Button className={style.btn}>
      <UnorderedListOutlined /> Каталог
    </Button>
  );
}
