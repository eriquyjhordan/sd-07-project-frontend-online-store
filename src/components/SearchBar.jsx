import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shoppingCart from '../img/shopping-cart.png';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, onClickAPI } = this.props;

    return (
      <div className="search-bar">
        <form className="search-form">
          <input
            type="text"
            onChange={ onSearchTextChange }
            data-testid="query-input"
          />
          <button
            type="button"
            onClick={ onClickAPI }
            data-testid="query-button">
            Buscar
          </button>
        </form>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ shoppingCart } alt="Shopping Cart Icon" />
        </Link>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func,
  onClickAPI: PropTypes.func,
};

export default SearchBar;
