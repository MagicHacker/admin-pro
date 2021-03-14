import { Component } from 'react';
import { message } from 'antd';
class HomePage extends Component {
  componentDidMount() {
    message.success('登录成功');
  }
  render() {
    return <div>我是你爸爸</div>;
  }
}

export default HomePage;
