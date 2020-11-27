import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/carrinho" component={ CarrinhoDeCompras } />
      </Switch>
    );
  }
}

export default Routes;
