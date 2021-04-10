import { Component } from 'react';
import { Card, Form, Row, Col, Input, Select, TimePicker, Table } from 'antd';
import './advanced.less';
const { Option } = Select;
class AdvancedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags'
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </span>
        )
      }
    ];
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser']
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
      }
    ];
    return (
      <div className="advancedForm_wrapper">
        <Card title="仓库管理">
          <Row>
            <Col>
              <Form>
                <Form.Item label="仓库名">
                  <Input />
                </Form.Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Item label="仓库域名">
                  <Input />
                </Form.Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Item label="仓库管理员">
                  <Select>
                    <Option>Joe</Option>
                    <Option>Johnson</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Item label="审批人">
                  <Select>
                    <Option>Joe</Option>
                    <Option>Johnson</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Item label="生效日期">
                  <TimePicker.RangePicker />
                </Form.Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Item label="仓库类型">
                  <Select>
                    <Option>秘密</Option>
                    <Option>公开</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Card>
        <Card title="任务管理" style={{ marginTop: 20 }}>
          <Row>
            <Col>
              <Form>
                <Form.Item label="任务名">
                  <Input />
                </Form.Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Item label="任务描述">
                  <Input />
                </Form.Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Item label="执行人">
                  <Select>
                    <Option>Joe</Option>
                    <Option>Johnson</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Item label="责任人">
                  <Select>
                    <Option>Joe</Option>
                    <Option>Johnson</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Item label="生效日期">
                  <TimePicker.RangePicker />
                </Form.Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Item label="任务类型">
                  <Select>
                    <Option>秘密</Option>
                    <Option>公开</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Card>
        <Card title="成员管理" style={{ marginTop: 20 }}>
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    );
  }
}
export default AdvancedForm;
