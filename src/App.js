import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>Lets prepare a Burger For U!!!</p>
          <Switch>
          <Route path = "/checkout" component = {Checkout} />
          <Route path = "/" exact component = {BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
