import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GoToShoppingCart extends Component {
  render() {
    return (
      <div>
        <Link to="/shoppingCart">
          <button className="bt-but" type="button" data-testid="shopping-cart-button">
            Comprar
          </button>
        </Link>
      </div>
    );
  }
}

export default GoToShoppingCart;
