import { Component } from 'react';
import './error.less';
import { Card } from 'antd';
class ResultError extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="error_wrapper">
        <Card>s</Card>
      </div>
    );
  }
}
export default ResultError;
