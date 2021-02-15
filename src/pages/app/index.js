import './index.less';
import { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from '../login/index';
import MainPage from '../main-page/index';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app-wrapper">
        <Router>
          <Route path="/login" component={Login} />
          <Route path="/mainPage" component={MainPage} />
        </Router>
      </div>
    );
  }
}
export default App;
