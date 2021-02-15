import './index.less';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push({ pathname: '/mainPage' });
    console.log('输出值', this.state);
  }
  handleChange(event) {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="login-wrapper">
        <Layout>
          <Header className="login-title">
            <span>admin-pro</span>
          </Header>
          <Content className="login-content">
            <Form name="basic">
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: '请出入用户名'
                  }
                ]}
              >
                <Input
                  name="username"
                  value={this.state.username}
                  placeholder="用户名"
                  onChange={this.handleChange}
                  prefix={<UserOutlined />}
                />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: '请输入密码'
                  }
                ]}
              >
                <Input.Password
                  name="password"
                  value={this.state.password}
                  placeholder="密码"
                  onChange={this.handleChange}
                  prefix={<LockOutlined />}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="login-submit" onClick={this.handleSubmit}>
                  提交
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default withRouter(Login);
