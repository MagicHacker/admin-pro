import { Component } from 'react';
import { Divider, Table } from 'antd';
import './basic.less';
class DetailBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          key: '1',
          commodityNum: '1234561',
          commodityName: '矿泉水 550ml',
          barCode: '12421432143214321',
          price: '2.00',
          count: '1',
          amount: '2.00'
        },
        {
          key: '2',
          commodityNum: '1234562',
          commodityName: '凉茶 300ml',
          barCode: '12421432143214322',
          price: '3.00',
          count: '2',
          amount: '6.00'
        },
        {
          key: '3',
          commodityNum: '1234563',
          commodityName: '好吃的薯片',
          barCode: '12421432143214323',
          price: '4.00',
          count: '3',
          amount: '12.00'
        },
        {
          key: '4',
          commodityNum: '1234564',
          commodityName: '特别好吃的蛋卷',
          barCode: '12421432143214324',
          price: '5.00',
          count: '4',
          amount: '20.00'
        }
      ]
    };
  }
  render() {
    const columns = [
      {
        title: '商品编号',
        dataIndex: 'commodityNum',
        render: text => <a>{text}</a>
      },
      {
        title: '商品名称',
        dataIndex: 'commodityName'
      },
      {
        title: '商品条码',
        dataIndex: 'barCode'
      },
      {
        title: '单价',
        dataIndex: 'price'
      },
      {
        title: '数量（件）',
        dataIndex: 'count'
      },
      {
        title: '金额',
        dataIndex: 'amount'
      }
    ];
    const { dataSource } = this.state;
    return (
      <div className="detail_basic_wrapper">
        <div className="detail_basic_header">
          <div className="page_header">首页/详情页/基础详情页</div>
          <div className="detail_basic_header_text">基础详情页</div>
        </div>
        <div className="detail_basic_content">
          <div className="detail_first">
            <div className="detail_content_text">退款详情</div>
            <div className="refund_detail">
              <table>
                <tbody>
                  <tr>
                    <td>取货单号：1000000000</td>
                    <td>状态：已取货</td>
                    <td>销售单号：1234123421</td>
                  </tr>
                  <tr>
                    <td>子订单：3214321432</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Divider />
          <div className="detail_second">
            <div className="detail_content_text">用户信息</div>
            <div className="user_detail">
              <table>
                <tbody>
                  <tr>
                    <td>用户名：Joe</td>
                    <td>联系电话：18100000000</td>
                    <td>常用快递：京东物流</td>
                  </tr>
                  <tr>
                    <td>取货地址： 浙江省杭州市西湖区万塘路18号</td>
                    <td>备注：无</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Divider />
          <div className="detail_third">
            <div className="detail_content_text">退货商品</div>
            <Table columns={columns} dataSource={dataSource} />
          </div>
          <Divider />
          <div>4</div>
        </div>
      </div>
    );
  }
}

export default DetailBasic;
