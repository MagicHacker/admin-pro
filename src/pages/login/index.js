import './index.less';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false
    };
    this.loginTimer = 0;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillUnmount() {
    clearTimeout(this.loginTimer);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      loading: true
    });
    this.loginTimer = setTimeout(() => {
      if (this.state.username === 'admin' && this.state.password === 'admin') {
        this.props.history.push({ pathname: '/homePage/dashBoard_analysis' });
      } else {
        this.setState({
          loading: false
        });
        message.error('用户名或密码错误');
      }
    }, 1000);
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
    const { username, password, loading } = this.state;
    return (
      <div className="login_wrapper">
        <Layout>
          <Header className="login_title">
            <span>Admin Pro</span>
          </Header>
          <Content className="login_content">
            <Form name="basic">
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请出入用户名'
                  }
                ]}
              >
                <Input
                  name="username"
                  value={username}
                  placeholder="用户名: admin"
                  onChange={this.handleChange}
                  prefix={<UserOutlined />}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码'
                  }
                ]}
              >
                <Input.Password
                  name="password"
                  value={password}
                  placeholder="密码: admin"
                  onChange={this.handleChange}
                  prefix={<LockOutlined />}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="login_submit" loading={loading} onClick={this.handleSubmit}>
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
