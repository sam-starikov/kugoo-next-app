import style from "./search.module.scss";
import SearchImg from "./search.svg";

/* next */
import Image from "next/image";

/* antd */
import { Select } from "antd";

export default function Search() {
  return (
    <form className={style.form} action="">
      <Select className={style.select} placeholder="Везде" />
      <input
        className={style.input}
        type="text"
        placeholder="Искать самокат KUGO"
      />
      <button className={style.searchBtn}>
        <Image width={16} height={16} src={SearchImg} alt="search" />
      </button>
    </form>
  );
}
