import React from 'react';
import { Link } from 'react-router-dom';
import chart from '../icon/chart.png';
import '../App.css';
import Categories from '../components/Categories';
import ListCard from '../components/ListCard';
import * as api from '../services/api';
import Loading from '../components/Loading';

class Main extends React.Component {
  constructor() {
    super();
    this.handleValue = this.handleValue.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this);
    this.handleApiRequest = this.handleApiRequest.bind(this);
    this.cartUpdate = this.cartUpdate.bind(this);
    this.state = {
      search: '',
      catID: '',
      message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
      product: [],
      loading: false,
      cartCount: JSON.parse(localStorage.getItem('cart')),
    };
  }

  componentDidMount() {
    this.cartUpdate();
  }

  cartUpdate() {
    this.setState({
      cartCount: JSON.parse(localStorage.getItem('cart')),
    });
  }

  async handleCatChange(event) {
    const selectedID = await event.target.id;
    this.setState(
      {
        catID: selectedID,
      },
      async () => {
        await this.handleApiRequest();
      },
    );
  }

  handleValue(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  async handleApiRequest() {
    this.setState({ loading: true });
    const { catID, search } = this.state;
    this.setState({
      catID: '',
      loading: false,
      message:
        search !== '' || catID !== '' ? '' : 'Nenhum produto foi encontrado',
      product: await api.getProductsFromCategoryAndQuery(catID, search),
    });
  }

  render() {
    const count = 0;
    const { search, catID, product, message, loading, cartCount } = this.state;
    let array = [];
    if (product.length < 1) {
      array = [];
    } else {
      array = product.results;
    }
    return (
      <div className="container">
        <div className="input-1">
          <input
            data-testid="query-input"
            onChange={ this.handleValue }
            className="searchInput"
            type="search"
          />
          <h3 data-testid="home-initial-message">{message}</h3>
          <div>
            { loading ? <Loading /> : '' }
            <ListCard
              search={ search }
              category={ catID }
              product={ array }
            />
          </div>
        </div>

        <div className="linkToCart-2">
          <Link to="/shoppingCart" data-testid="shopping-cart-button">
            <img className="chartImg" src={ chart } alt="carrinho-de-compras" />
          </Link>
          <span
            data-testid="shopping-cart-size"
            className="cart-details"
          >
            { cartCount === null ? count : cartCount.length }
          </span>
        </div>

        <div className="categories-3">
          <Categories handleCatChange={ this.handleCatChange } />
        </div>

        <div className="buttonFetch-4">
          <button
            type="button"
            className="buttonFetch"
            data-testid="query-button"
            onClick={ this.handleApiRequest }
          >
            Buscar
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
