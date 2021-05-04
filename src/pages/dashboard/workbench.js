import React, { Component } from 'react';
import './workbench.less';
import { Row, Col, Card } from 'antd';
export default class Workbench extends Component {
  render() {
    return (
      <>
        <div className="workbench_wrapper">
          <Row gutter={[20, 20]}>
            <Col>
              <Card title="进行中的项目" extra={<a href="#">全部项目</a>}>
                1
              </Card>
              <Card title="动态">2</Card>
            </Col>
            <Col>
              <Card title="快捷开始/快捷导航">3</Card>
              <Card title="xx指数">4</Card>
              <Card title="团队">5</Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
