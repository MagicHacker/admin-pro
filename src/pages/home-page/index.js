import { Component } from 'react';
import { message, Layout, Menu } from 'antd';
import './index.less';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }
  componentDidMount() {
    message.success('登录成功');
  }
  click(event) {
    alert(event.key);
  }
  render() {
    return (
      <div className="home_page_wrapper">
        <Layout>
          <Sider>
            <div className="sider_title">Admin Pro</div>
            <Menu
              mode="inline"
              theme="dark"
              defaultOpenKeys={['DashBoard']}
              defaultSelectedKeys={['dashBoard_analysis']}
              onClick={this.click}
            >
              <SubMenu key="DashBoard" title="DashBoard">
                <Menu.Item key="dashBoard_analysis">分析</Menu.Item>
                <Menu.Item key="dashBoard_monitor">监控</Menu.Item>
                <Menu.Item key="dashBoard_workbench">工作台</Menu.Item>
              </SubMenu>
              <SubMenu key="form" title="表单">
                <Menu.Item key="form_basic">基础表单</Menu.Item>
                <Menu.Item key="form_step">分步表单</Menu.Item>
                <Menu.Item key="form_advanced">高级表单</Menu.Item>
              </SubMenu>
              <SubMenu key="list" title="列表">
                <Menu.Item key="list_query">查询表格</Menu.Item>
                <Menu.Item key="list_basic">标准列表</Menu.Item>
                <Menu.Item key="list_card">卡片列表</Menu.Item>
              </SubMenu>
              <SubMenu key="detail" title="详情">
                <Menu.Item key="detail_basic">基础详情</Menu.Item>
                <Menu.Item key="detail_advanced">高级详情</Menu.Item>
              </SubMenu>
              <SubMenu key="result" title="结果">
                <Menu.Item key="result_success">成功</Menu.Item>
                <Menu.Item key="result_error">失败</Menu.Item>
              </SubMenu>
              <SubMenu key="exception" title="异常">
                <Menu.Item key="exception_cache">403</Menu.Item>
                <Menu.Item key="exception_nothing">404</Menu.Item>
                <Menu.Item key="exception_error">500</Menu.Item>
              </SubMenu>
              <SubMenu key="persion" title="个人">
                <Menu.Item key="persion_center">个人中心</Menu.Item>
                <Menu.Item key="persion_setting">个人设置</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header className="home_page_header" />
            <Content className="home_page_content" />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default HomePage;
