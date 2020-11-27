import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, ShoppingCart, ProductDetail } from '../pages';

const Routes = () => (
  <Switch>
    <Route path="/productdetail" component={ ProductDetail } />
    <Route path="/shoppingcart" component={ ShoppingCart } />
    <Route exact path="/" component={ Home } />
  </Switch>
);

export default Routes;
