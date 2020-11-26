import React from 'react';
import { Link } from 'react-router-dom';
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { title, price, thumbnail, id } = this.props.produto;
    const { productAdd } = this.props;
    const product = {
      id,
      price,
      qtd: 1,
      title,
      thumbnail,
    };
    productAdd(product);
  }
  render() {
    const { thumbnail, title, price, id, category_id } = this.props.produto
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title} />
        <h4>R$: {price}</h4>
        <div>
        <button
          onClick={this.addToCart}
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
          <Link data-testid="product-detail-link"
          to={`product-details/${id}/${category_id}`}>Detalhes do produto</Link>
        </div>
      </div>   
    );
  };
}

export default Card;