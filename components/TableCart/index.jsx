'use client'
import s from './style.module.scss'

import { useEffect, useState } from 'react'
import { useStore } from '@/app/store/store'

// import useFormattedPrice from '@/app/hooks/useFormattedPrice'

import { Table, Image as AntdImage, Flex, Alert, Select } from 'antd'
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'

export function TableCart() {
  const { cartItems, removeItem, incrementProduct, decrementProduct } = useStore()

  const dataSource = cartItems.map(obj => {
    return { ...obj, key: obj.id }
  })

  const [renderItems, setRenderItems] = useState([])

  useEffect(() => {
    const uniqueIds = new Set()
    const uniqueArray = dataSource.filter(obj => {
      if (!uniqueIds.has(obj.id)) {
        uniqueIds.add(obj.id)
        return true
      }
      return false
    })
    uniqueArray.sort((a, b) => a.id - b.id)

    setRenderItems(uniqueArray)
  }, [cartItems])

  const handleIncrementProduct = obj => {
    incrementProduct(obj)
  }

  const handleDecrementProduct = id => {
    decrementProduct(id)
  }

  const countById = cartItems.reduce((acc, product) => {
    acc[product.id] = (acc[product.id] || 0) + 1
    return acc
  }, {})

  const setFormatedPrice = price => {
    return new Intl.NumberFormat('ru-Ru', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const columns = [
    {
      title: 'Товар',
      dataIndex: 'title',
      key: 'title',

      render: (text, obj) => {
        return (
          <Flex
            gap={20}
            align='center'
          >
            <AntdImage
              src={obj.img}
              alt='img'
              width={75}
              height={75}
            />
            <Flex
              vertical={true}
              gap={5}
            >
              <Link href={`/cart/${obj.id}`}>
                <span className={s.title}>{text}</span>
              </Link>
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
      responsive: ['sm'],

      render: (_, obj) => {
        const count = countById[obj.id]
        return (
          <div className={s.counter}>
            <button
              onClick={() => handleDecrementProduct(obj.id)}
              className={s.btnCount}
            >
              <Image
                src='/icons/minus.svg'
                alt='minus'
                width={10}
                height={1.5}
              />
            </button>
            <div>{count}</div>
            <button
              onClick={() => {
                handleIncrementProduct(obj)
              }}
              className={s.btnCount}
            >
              <Image
                src='/icons/plus.svg'
                alt='plus'
                width={10}
                height={10}
              />
            </button>
          </div>
        )
      },
    },
    {
      title: 'Сумма',
      dataIndex: 'price',
      key: 'price',
      responsive: ['sm'],

      sorter: (a, b) => a.price - b.price,
      render: (price, obj) => {
        const count = countById[obj.id] || 0

        return (
          <Flex vertical>
            {obj.isDiscount && (
              <Flex
                gap={5}
                align='center'
              >
                <span className={s.discount}>{setFormatedPrice(price * count)} ₽</span>
                <div className={s.bage}> -10% </div>
              </Flex>
            )}
            <span className={s.price}>
              {setFormatedPrice((obj.isDiscount ? price - (price / 100) * 10 : price) * count)} ₽
            </span>
          </Flex>
        )
      },
    },
    {
      title: 'Удалить все',
      key: 'delete',

      render: record => (
        <button
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
