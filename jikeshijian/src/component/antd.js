import React from 'react'
import { Tabs,Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'left',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];
const { TabPane } = Tabs;

class Antd extends React.Component {

  conc
    render() {
    return (
      <React.Fragment>
        <Tabs  type="card">
          <TabPane tab="所有形式" key="1">
          <Table
              columns={columns}
              dataSource={data}
              bordered
            />
    </TabPane>
          <TabPane tab="专栏" key="2">
          <Table
              columns={columns}
              dataSource={data}
              bordered
            />
    </TabPane>
          <TabPane tab="视频课" key="3">
            <Table
              columns={columns}
              dataSource={data}
              bordered
            />
    </TabPane>
          <TabPane tab="微课" key="4">
            <Table
              columns={columns}
              dataSource={data}
              bordered
            />
    </TabPane>
          <TabPane tab="每日一课" key="5">
            <Table
              columns={columns}
              dataSource={data}
              bordered
            />
    </TabPane>
          <TabPane tab="其他" key="6">
            <Table
              columns={columns}
              dataSource={data}
              bordered
            />
    </TabPane>
        </Tabs>,
      </React.Fragment>
    )
  }
}

export default Antd
