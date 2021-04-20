import { Component } from 'react';
import './query.less';
import { Form, Input, Button, Row, Col, Table } from 'antd';

class QueryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }
    ];

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
      }
    ];
    return (
      <div className="query_table_wrapper">
        <div className="query_search">
          <Form layout="inline">
            <Row gutter={20}>
              <Col span={6}>
                <Form.Item label="规则名称">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="描述">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="服务调用次数">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item>
                  <Button type="primary">查询</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="query_table">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    );
  }
}

export default QueryTable;
