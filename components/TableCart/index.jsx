'use client'
import s from './style.module.scss'

import { Table, Image as AntdImage, Flex, Alert, Select } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useStore } from '@/app/data/store'

export function TableCart({ cartProducts }) {
  const dataSource = cartProducts.map(obj => {
    return { ...obj, key: obj.id }
  })

  const columns = [
    {
      title: 'Товар',
      dataIndex: 'title',
      key: 'title',
      render: (text, img) => {
        return (
          <Flex gap={20} align='center'>
            <AntdImage src='/img/scooter-01.jpg' alt='img' width={75} height={75} />
            <Flex vertical={true} gap={5}>
              <span className={s.title}>{text}</span>
              <Alert className={s.alert} message='В наличии' type='success' showIcon />
            </Flex>
          </Flex>
        )
      },
    },
    {
      title: 'Количество',
      dataIndex: 'count',
      key: 'count',
      render: count => {
        return (
          <div className={s.counter}>
            <button className={s.btnCount}>
              <img src='/icons/minus.svg' alt='minus' />
            </button>
            <div></div>
            <button className={s.btnCount}>
              <img src='/icons/plus.svg' alt='plus' />
            </button>
          </div>
        )
      },
    },
    {
      title: 'Сумма',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      render: price => {
        return <span className={s.price}>{price} ₽</span>
      },
    },
    {
      title: 'Удалить все',
      key: 'delete',
      render: (_, record) => (
        <button className={s.deleteBtn}>
          <DeleteOutlined className={s.deleteIcon} />
        </button>
      ),
    },
  ]

  return (
    <Table
      className={s.root}
      columns={columns}
      dataSource={dataSource}
      expandable={{
        columnTitle: 'Опции',
        defaultExpandAllRows: true,

        expandedRowRender: record => {
          return (
            <Flex className={s.options} gap={15} align='center' wrap={true}>
              <Select
                defaultValue='Комплектация: стандартная'
                options={[
                  {
                    value: 'стандартная',
                    label: 'стандартная',
                  },
                  {
                    value: 'внедорожная',
                    label: 'внедорожная',
                  },
                  {
                    value: 'шоссейная',
                    label: 'шоссейная',
                  },
                ]}
              />
              <Select defaultValue='Подарочная упаковка:' />
              <Select defaultValue='Гарантия: 1 год' />
              <Select defaultValue='Тип покрышки: шоссейная' />
              <Select defaultValue='Доп.услуги: гидроизоляция' />
            </Flex>
          )
        },
      }}
    />
  )
}
