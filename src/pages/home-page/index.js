import { Component } from 'react';
import { message } from 'antd';
import './index.less';
class HomePage extends Component {
  componentDidMount() {
    message.success('登录成功');
  }
  render() {
    return <div className="home_page_wrapper">我是你爸爸</div>;
  }
}

export default HomePage;
