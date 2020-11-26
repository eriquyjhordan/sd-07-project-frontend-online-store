import React from 'react';
// import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getApi = this.getApi.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const categoriesArray = await api.getCategories().then((result) => result );
    this.setState({ categories: categoriesArray });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <select name="categorias" id="categories">
          <option key="Todas" value="">
            Todas
          </option>
          {categories.map((category) => {
            const { id, name } = category;
            return (
              <option key={ id } value={ name }>
                {name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Categories;
