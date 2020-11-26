import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };

    this.sendQuerySearch = this.sendQuerySearch.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery({ target }) {
    this.setState({ query: target.value });
  }

  sendQuerySearch() {
    const { query } = this.state;
    const { getQuerySearch } = this.props;
    getQuerySearch(query);
  }

  render() {
    return (
      <div>
        Barra de busca
        <input onChange={ this.handleQuery } data-testid="query-input" />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.sendQuerySearch }
        >
          Enviar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  getQuerySearch: PropTypes.func.isRequired,
};

export default SearchBar;
