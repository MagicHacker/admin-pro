import { Component } from 'react';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import { Tabs, Card } from 'antd';
const { TabPane } = Tabs;
import './analysis.less';
class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="analysis_wrapper">
        <div className="analysis_top">
          <div className="top_card">
            <div className="top_header">
              <div>总销售额</div>
              <div>
                <QuestionCircleTwoTone />
              </div>
            </div>
            <div className="top_number">¥ 126,560</div>
            <div className="top_content">
              <div>周同比12%</div>
              <div>日同比11%</div>
            </div>
            <div className="top_footer">日销售额￥12,423</div>
          </div>
          <div className="top_card">
            <div className="top_header">
              <div>访问量</div>
              <div>
                <QuestionCircleTwoTone />
              </div>
            </div>
            <div className="top_number">8,846</div>
            <div className="top_content">图表</div>
            <div className="top_footer">日访问量1,234</div>
          </div>
          <div className="top_card">
            <div className="top_header">
              <div>支付笔数</div>
              <div>
                <QuestionCircleTwoTone />
              </div>
            </div>
            <div className="top_number">6,560</div>
            <div className="top_content">柱状图</div>
            <div className="top_footer">转化率60%</div>
          </div>
          <div className="top_card">
            <div className="top_header">
              <div>运营效果</div>
              <div>
                <QuestionCircleTwoTone />
              </div>
            </div>
            <div className="top_number">78%</div>
            <div className="top_content">进度图</div>
            <div className="top_footer">周同比12%日同比11%</div>
          </div>
        </div>
        <div className="analysis_row">
          <Tabs>
            <TabPane tab="销售额" key="1">
              柱状图
            </TabPane>
            <TabPane tab="访问量" key="2">
              柱状图
            </TabPane>
          </Tabs>
        </div>
        <div className="analysis_card">
          <Card title="线上热门搜索" style={{ width: 580, height: 500 }}>
            1
          </Card>
          <Card title="销售额类别占比" style={{ width: 580, height: 500 }}>
            2
          </Card>
        </div>
        <div className="analysis_charts">魂图</div>
      </div>
    );
  }
}

export default Analysis;
