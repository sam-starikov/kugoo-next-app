import { Space, Table, Tag } from 'antd';
export default function TableCard({ cards }) {
  console.log(cards);
  const columns = [
    {
      title: 'Товар',
      dataIndex: 'Товар',
      key: 'Товар',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Количество',
      dataIndex: 'Количество',
      key: 'Количество',
    },
    {
      title: 'Сумма',
      dataIndex: 'Сумма',
      key: 'Сумма',
    },

    {
      title: 'Удалить все',
      key: 'Удалить все',
      render: (_, record) => (
        <Space size='middle'>
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const example = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
  ];

  return <Table columns={columns} dataSource={cards} />;
}
