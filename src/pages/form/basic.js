import { Component } from 'react';
import { Form, Input, Button, TimePicker, InputNumber, Radio } from 'antd';
import './basic.less';
const { TextArea } = Input;
class FormBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 }
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 }
    };
    return (
      <div className="formBasic_wrapper">
        <div className="formBasic_content">
          <Form name="basic" {...layout}>
            <Form.Item label="标题">
              <Input />
            </Form.Item>
            <Form.Item label="起止日期">
              <TimePicker.RangePicker />
            </Form.Item>
            <Form.Item label="目标描述">
              <TextArea row={4} />
            </Form.Item>
            <Form.Item label="衡量标准">
              <TextArea row={4} />
            </Form.Item>
            <Form.Item label="客户">
              <Input />
            </Form.Item>
            <Form.Item label="邀评人">
              <Input />
            </Form.Item>
            <Form.Item label="权重">
              <InputNumber />%
            </Form.Item>
            <Form.Item label="目标公开">
              <Radio.Group>
                <Radio value={1}>公开</Radio>
                <Radio value={2}>部分公开</Radio>
                <Radio value={3}>不公开</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary">提交</Button>
              <Button>保存</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default FormBasic;
