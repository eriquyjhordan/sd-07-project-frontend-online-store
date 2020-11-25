import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <div>{ title }</div>
        <div>{ price }</div>
        <img src={ thumbnail } alt="exemplar do produto" />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.array }.isRequired;

export default ProductCard;
