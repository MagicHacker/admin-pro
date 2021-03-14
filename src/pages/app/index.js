import './index.less';
import { Component } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Login from '../login/index';
import HomePage from '../home-page/index';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app-wrapper">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/homePage" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
