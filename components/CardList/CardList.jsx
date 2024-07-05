import style from "./cardList.module.scss";

import Card from "../Card/Card";

export default function CardList({ items }) {
  return (
    <section>
      <div className="container">
        <div className={style.top}>
          <h1 className={style.title}>Электросамокаты</h1>
          {/* <Sort/> */}
        </div>

        <div className={style.body}>
          {items.map((obj) => (
            <Card key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </section>
  );
}
