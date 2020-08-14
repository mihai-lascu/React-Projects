import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import CoinDescription from './containers/CoinDescription/CoinDescription';
import ProfitCalculator from './containers/ProfitCalculator/ProfitCalculator';
import Portfolio from './containers/Portfolio/Portfolio';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/calculator' component={ProfitCalculator}/>
        <Route path='/:symbol' component={CoinDescription}/>
        <Route path='/' exact component={Home}/>
        <Redirect to='/' />
      </Switch>
    );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);