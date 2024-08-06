'use client'
import s from './style.module.scss'

import { useEffect, useState } from 'react'
import { useStore } from '@/app/store/store'
import useFormattedPrice from '@/app/hooks/useFormattedPrice'

import { Table, Image as AntdImage, Flex, Alert, Select } from 'antd'
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'

export function TableCart() {
  const { cartItems, removeItem, incrementProduct, decrementProduct } = useStore()

  const dataSource = cartItems.map(obj => {
    return { ...obj, key: obj.id }
  })

  const [renderItems, setRenderItems] = useState([])

  useEffect(() => {
    const uniqueArray = [...new Set(dataSource)]
    setRenderItems(uniqueArray)
  }, [])

  const handleIncrementProduct = obj => {
    incrementProduct(obj)
  }

  const handleDecrementProduct = id => {
    decrementProduct(id)
    setRenderItems(prevProducts => {
      const index = prevProducts.findIndex(product => product.id === id)

      if (index !== -1) {
        return [...prevProducts.slice(0, index), ...prevProducts.slice(index + 1)]
      }
      return prevProducts
    })
  }

  const columns = [
    {
      title: 'Товар',
      dataIndex: 'title',
      key: 'title',

      render: (text, img) => {
        return (
          <Flex
            gap={20}
            align='center'
          >
            <AntdImage
              src='/img/scooter-01.jpg'
              alt='img'
              width={75}
              height={75}
            />
            <Flex
              vertical={true}
              gap={5}
            >
              <span className={s.title}>{text}</span>
              <Alert
                className={s.alert}
                message='В наличии'
                type='success'
                showIcon
              />
            </Flex>
          </Flex>
        )
      },
    },
    {
      title: 'Количество',
      dataIndex: 'count',
      key: 'count',

      render: (_, obj) => {
        return (
          <div className={s.counter}>
            <button
              disabled={renderItems.length === 1 ? true : false}
              onClick={() => handleDecrementProduct(obj.id)}
              className={s.btnCount}
            >
              <MinusOutlined />
            </button>
            <div></div>
            <button
              onClick={() => {
                handleIncrementProduct(obj)
              }}
              className={s.btnCount}
            >
              <PlusOutlined />
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
        // const formattedPrice = useFormattedPrice(price)

        return <span className={s.price}>{price} ₽</span>
      },
    },
    {
      title: 'Удалить все',
      key: 'delete',

      render: record => (
        <button
          // disabled={renderItems.length === 0 ? true : false}
          className={s.deleteBtn}
          onClick={() => removeItem(record.id)}
        >
          <DeleteOutlined className={s.deleteIcon} />
        </button>
      ),
    },
  ]

  return (
    <Table
      className={s.root}
      columns={columns}
      dataSource={renderItems}
      expandable={{
        columnTitle: 'Опции',
        defaultExpandAllRows: true,
        responsive: ['sm'],

        expandedRowRender: record => {
          return (
            <Flex
              className={s.options}
              gap={15}
              align='center'
              wrap={true}
            >
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
