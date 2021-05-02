import { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { message, Layout, Menu } from 'antd';
import { AlertOutlined, SmileOutlined, TranslationOutlined } from '@ant-design/icons';
import './index.less';
import { routesList } from '../../routes/index';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.routesList = routesList;
    this.state = {
      comPath: '',
      component: ''
    };
  }
  componentDidMount() {
    message.success('登录成功');
  }
  render() {
    return (
      <div className="home_page_wrapper">
        <Layout className="layout_wrapper">
          <Sider>
            <div className="sider_title">Admin Pro</div>
            <Menu
              mode="inline"
              theme="dark"
              defaultOpenKeys={['DashBoard']}
              defaultSelectedKeys={['dashBoard_analysis']}
            >
              <SubMenu key="DashBoard" title="DashBoard">
                {this.routesList.dashboard.map(val => {
                  return (
                    <Menu.Item key={val.path}>
                      <NavLink to={val.path}>{val.name}</NavLink>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
              <SubMenu key="Form" title="表单">
                {this.routesList.form.map(val => {
                  return (
                    <Menu.Item key={val.path}>
                      <NavLink to={val.path}>{val.name}</NavLink>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
              <SubMenu key="List" title="列表">
                {this.routesList.list.map(val => {
                  return (
                    <Menu.Item key={val.path}>
                      <NavLink to={val.path}>{val.name}</NavLink>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
              <SubMenu key="Detail" title="详情">
                {this.routesList.detail.map(val => {
                  return (
                    <Menu.Item key={val.path}>
                      <NavLink to={val.path}>{val.name}</NavLink>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
              <SubMenu key="Result" title="结果">
                {this.routesList.result.map(val => {
                  return (
                    <Menu.Item key={val.path}>
                      <NavLink to={val.path}>{val.name}</NavLink>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
              <SubMenu key="Exception" title="异常">
                {this.routesList.exception.map(val => {
                  return (
                    <Menu.Item key={val.path}>
                      <NavLink to={val.path}>{val.name}</NavLink>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
              <SubMenu key="Persion" title="个人">
                {this.routesList.persion.map(val => {
                  return (
                    <Menu.Item key={val.path}>
                      <NavLink to={val.path}>{val.name}</NavLink>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header className="home_page_header">
              <div className="header_right">
                <div className="header_icon">
                  <AlertOutlined />
                </div>
                <div className="header_icon">
                  <SmileOutlined />
                </div>
                <div className="header_icon">
                  <TranslationOutlined />
                </div>
              </div>
            </Header>
            <Content className="home_page_content">
              <Switch>
                {this.routesList.dashboard.map(val => {
                  return <Route key={val.path} path={val.path} component={val.component} />;
                })}
                {this.routesList.form.map(val => {
                  return <Route key={val.path} path={val.path} component={val.component} />;
                })}
                {this.routesList.list.map(val => {
                  return <Route key={val.path} path={val.path} component={val.component} />;
                })}
                {this.routesList.detail.map(val => {
                  return <Route key={val.path} path={val.path} component={val.component} />;
                })}
                {this.routesList.result.map(val => {
                  return <Route key={val.path} path={val.path} component={val.component} />;
                })}
                {this.routesList.exception.map(val => {
                  return <Route key={val.path} path={val.path} component={val.component} />;
                })}
                {this.routesList.persion.map(val => {
                  return <Route key={val.path} path={val.path} component={val.component} />;
                })}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default HomePage;
