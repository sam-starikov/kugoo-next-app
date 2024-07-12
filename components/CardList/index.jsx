import style from './cardList.module.scss';

import Card from '../Card';
import TabsSort from '../TabsSort';
import { useState } from 'react';
import { Button, Flex } from 'antd';

export default function CardList({ cards, title, isSort, onChangeCounter }) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? cards : cards.slice(0, 8);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <section>
      <div className='container'>
        <div className={style.top}>
          <h1 className={style.title}>{title}</h1>
          {isSort && <TabsSort />}
        </div>

        <div className={style.body}>
          {visibleItems.map(obj => (
            <Card key={obj.id} {...obj} onChangeCounter={onChangeCounter} />
          ))}
        </div>
        <Flex align='center' justify='center'>
          <Button disabled={showAll ? true : false} className={style.showMoreBtn} onClick={handleShowMore}>
            Смотреть все
          </Button>
        </Flex>
      </div>
    </section>
  );
}
