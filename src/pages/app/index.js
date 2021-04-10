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
      <div className="app_wrapper">
        <Router>
          <Switch>
            <Route exact path="/" component={props => <Login {...props} />} />
            <Route path="/homePage" component={props => <HomePage {...props} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
