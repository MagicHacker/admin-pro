import { Component } from 'react';
import { Card, Row, Col } from 'antd';
import './monitor.less';
class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="monitor_wrapper">
        <div className="monitor_top">
          <Row gutter={30}>
            <Col span={18}>
              <Card title="活动实时交易" bordered={false}>
                1
              </Card>
            </Col>
            <Col span={6}>
              <Card title="活动情况预测" bordered={false}>
                2
              </Card>
              <Card title="券核效率" bordered={false} style={{ 'margin-top': 20 }}>
                3
              </Card>
            </Col>
          </Row>
        </div>
        <div className="monitor_footer">
          <Row gutter={30}>
            <Col span={12}>
              <Card title="活动情况预测" bordered={false}>
                4
              </Card>
            </Col>
            <Col span={6}>
              <Card title="活动情况预测" bordered={false}>
                5
              </Card>
            </Col>
            <Col span={6}>
              <Card title="活动情况预测" bordered={false}>
                6
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Monitor;
