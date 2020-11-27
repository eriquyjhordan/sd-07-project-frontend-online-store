import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;

    return (
      <div className="product-card" data-testid="product">
        <h4>{ title }</h4>
        <img alt="Product" src={ thumbnail } />
        <p>{`R$ ${ price }`}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
  }),
}.isRequired;

export default ProductCard;
