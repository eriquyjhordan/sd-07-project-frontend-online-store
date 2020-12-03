import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  constructor() {
    super();

    this.getdata = this.getdata.bind(this);
  }

  getdata() {
    const { selectCategory } = this.state;
    return selectCategory;
  }

  render() {
    const { products } = this.props;
    const listProduct = products;
    const number = 0;

    return listProduct.length === number ? (
      <p data-testid="home-initial-message" className="container-mensage">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    ) : (
      listProduct.map((product) => (
        <div
          className="container-product"
          data-testid="product"
          key={ product.id }
        >
          <div className="image-product">
            <img src={ product.thumbnail } alt="imagem do produto" />
          </div>
          <div className="header-product">{product.title}</div>
          <div className="price-product">{`R$${product.price}`}</div>
          <Link
            to={ { pathname: `productdetail/${product.id}`, state: products } }
            data-testid="product-detail-link"
            className="btn-details"
          >
            Detalhes
          </Link>
        </div>
      ))
    );
  }
}

ProductList.propTypes = { products: PropTypes.arrayOf(Array).isRequired };

export default ProductList;
