import React from 'react';

import { Link } from 'react-router-dom';

import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const response = await getCategories();
    this.setState({ categories: response });
  }

  render() {
    const { categories } = this.state;

    if (categories.length === 0) {
      return <div>Carregando</div>;
    }

    return (
      <div>
        <h3>Categorias</h3>

        <ul>
          {categories.map(({ id, name }) => (
            <li data-testid="category" key={ id }>
              <Link to={ `category/${id}` }>{ name }</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
