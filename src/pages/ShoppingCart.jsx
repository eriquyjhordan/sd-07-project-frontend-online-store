import React, { Component } from 'react';
import EmptyCard from '../components/EmptyCard/EmptyCard';

class ShoppingCart extends Component {
  render() {
    const products = JSON.parse(localStorage.getItem('cart'));
    if (!products) {
      return (
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
      );
    }

    return (
      <div>
        {products.map((product) => (
          <div key={ product.id }>
            <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
            <img src={ product.thumbnail } alt="" />
            <h3>{ product.price }</h3>
            <p data-testid="shopping-cart-product-quantity">Qts:1</p>
          </div>
        ))}
        <EmptyCard />
      </div>
    );
  }
}

export default ShoppingCart;
