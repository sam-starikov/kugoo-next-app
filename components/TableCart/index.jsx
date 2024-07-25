import s from './style.module.scss';
import Link from 'next/link';

import { Space, Table, Image, Flex, Alert } from 'antd';

export default function TableCart({ allProducts }) {
  const dataSource = allProducts.map(obj => {
    return { ...obj, key: obj.id };
  });

  const columns = [
    {
      title: 'Товар',
      dataIndex: 'title',
      key: 'title',
      render: (text, img) => {
        return (
          <Flex gap={20} align='center'>
            <Image src='/img/scooter-01.jpg' alt='img' width={75} height={75} />
            <Flex vertical={true} gap={5}>
              <Link href='#!'>{text}</Link>
              <Alert className={s.alert} message='В наличии' type='success' showIcon />
            </Flex>
          </Flex>
        );
      },
    },
    {
      title: 'Сумма',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      render: text => {
        return <span className={s.price}>{text} ₽</span>;
      },
    },
    // {
    //   title: 'Количество',
    //   dataIndex: 'img',
    //   key: 'img',
    // },
  ];

  return <Table className={s.root} columns={columns} dataSource={dataSource} />;
}
