import React, { Component } from 'react';
import * as api from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
  }

  async componentDidMount() {
    const category = await api.getCategories();
    this.setState({ category });
  }

  render() {
    const { category } = this.state;
    return (
      <div className="category-list">
        <select onChange={ (event) => console.log(event.target.value) }>
          <option defaultValue value="" name="categoryId">Selecione uma categoria</option>
          {category.map((item) => (
            <option
              data-testid="category"
              name="categoryId"
              value={ item.id }
              key={ item.id }
              className="category-item"
            >
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default CategoryList;
