import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Loading from '../components/Loading';
import ReviewList from '../components/ReviewList';
import AddSpecificProduct from '../components/AddSpecificProduct';
import {
  addProductInLocalStorage,
  recoveryProductsFromLocalStorage,
} from '../services/cartFunctions';
import {
  recoveryReviewsFromLocalStorage,
} from '../services/reviewsFunctions';
import Footer from '../components/Footer';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.addShoppingCartItems = this.addShoppingCartItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.state = {
      loading: true,
      product: {},
      shoppingCartItems: [],
      quantity: 1,
    };
  }

  componentDidMount() {
    this.APIquery();
    recoveryReviewsFromLocalStorage();
  }

  addItem() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  removeItem() {
    const { quantity } = this.state;
    if (quantity < 1) {
      this.setState({ quantity: 0 });
    } else {
      this.setState({ quantity: quantity - 1 });
    }
  }

  async APIquery() {
    const { match } = this.props;
    const { params } = match;
    this.setState(
      { loading: true },
      async () => {
        const { id } = params;
        const productID = await api.fetchAPIByID(id);
        // console.log(productID);
        this.setState({
          loading: false,
          product: productID,
        });
      },
    );
  }

  async addShoppingCartItems() {
    const oldList = recoveryProductsFromLocalStorage();
    this.setState({
      shoppingCartItems: oldList,
    });

    const { product } = this.state;

    await this.setState((previousState) => ({
      shoppingCartItems: [...previousState.shoppingCartItems, product],
    }));
    const { shoppingCartItems } = this.state;
    addProductInLocalStorage(shoppingCartItems);
  }

  render() {
    const { product, loading, quantity } = this.state;
    const { title, price, pictures, attributes } = product;

    // console.log(product);

    if (loading === true) return <Loading />;

    return (
      <div>
        <div className="product-detail">
          <div className="container-title-image">
            <h2 data-testid="product-detail-name">
              {title}
              {' '}
            </h2>
            <h2>
              R$
              {price}
            </h2>
            <img
              className="product-detail-image"
              src={ pictures[0].url }
              alt={ `imagem do produto ${title}` }
            />
          </div>
          <ul className="container-list">
            {attributes.map(({ name, value_name: valueName, id }) => (
              <li key={ id }>
                {name}
                :
                {' '}
                { valueName }
              </li>))}
          </ul>
        </div>
        <div>
          <button
            type="button"
            onClick={ this.addItem }
          >
            {' '}
            +
            {' '}
          </button>
          <div>{quantity}</div>
          <button
            type="button"
            onClick={ this.removeItem }
          >
            {' '}
            -
            {' '}
          </button>
        </div>
        <AddSpecificProduct addShoppingCartItems={ this.addShoppingCartItems } />
        <ReviewList />
        <Footer />
      </div>
    );
  }
}

ProductDetails.propTypes = { match: PropTypes.shape({
  isExact: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}).isRequired,
};

export default ProductDetails;
