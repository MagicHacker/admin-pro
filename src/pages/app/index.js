
import './index.less';
import { Component } from 'react'
import Login from '../login/index'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="app-wrapper">
        <Login />
      </div>
    )
  }
}
export default App;
